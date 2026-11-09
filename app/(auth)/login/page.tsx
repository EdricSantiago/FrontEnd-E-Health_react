"use client";
import { useEffect, useState, type FormEvent } from "react";
import { currentUser, login, register } from "@/lib/browser-auth";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (currentUser()) window.location.replace("/");
  }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (mode === "register" && password !== confirm) {
      setError("Konfirmasi password tidak sama.");
      return;
    }
    setBusy(true);
    try {
      if (mode === "login") await login(username, password);
      else await register(username, password);
      window.location.replace("/");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Gagal masuk.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <h1 className="logo">HeiDoc</h1>
          <p className="subtitle">
            {mode === "login" ? "Masuk ke akun Anda" : "Buat akun HeiDoc"}
          </p>
        </div>
        <form className="login-form" onSubmit={submit}>
          <div className="form-group">
            <input
              autoComplete="username"
              type="text"
              name="username"
              placeholder="Username"
              required
              minLength={3}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              autoComplete={
                mode === "login" ? "current-password" : "new-password"
              }
              name="password"
              placeholder="Password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              aria-label="Tampilkan atau sembunyikan password"
              onClick={() => setShowPassword((x) => !x)}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
          {mode === "register" && (
            <div className="form-group">
              <input
                type="password"
                name="confirm"
                placeholder="Ulangi Password"
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>
          )}
          <button disabled={busy} type="submit" className="btn-login">
            {busy ? "Memproses..." : mode === "login" ? "Masuk" : "Daftar"}
          </button>
        </form>
        {error && (
          <p className="hd-auth-feedback" role="alert">
            {error}
          </p>
        )}
        <p className="hd-auth-extras">
          {mode === "login" ? "Belum punya akun? " : "Sudah punya akun? "}
          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setError("");
              setPassword("");
              setConfirm("");
            }}
          >
            {mode === "login" ? "Daftar di sini" : "Kembali ke login"}
          </button>
        </p>
        {mode === "login" && (
          <p className="hd-auth-hint">
            Demo: <strong>demo</strong> / <strong>demo123</strong>
          </p>
        )}
      </div>
    </div>
  );
}
