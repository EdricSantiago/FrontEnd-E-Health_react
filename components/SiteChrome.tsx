"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { currentUser, logout } from "@/lib/browser-auth";
import { BottomNav } from "@/components/BottomNav";

const TOP_MENU = [
    ["Beranda", "/"],
    ["Kesehatan Kulit", "/layanan/kulit"],
    ["Kesehatan Hewan", "/layanan/hewan"],
    ["Dokter", "/dokter"],
    ["Toko", "/toko"],
    ["Asuransi", "/layanan/asuransi"],
    ["Diet & Gizi", "/layanan/gizi"],
    ["BMI", "/layanan/bmi"],
] as const;
const BOTTOM_ON = new Set([
    "/",
    "/layanan",
    "/dokter",
    "/dokter/jadwal",
    "/dokter/booking",
    "/profile",
    "/pengaturan",
    "/riwayat",
]);

function TopNav({ pathname }: { pathname: string }) {
    return (
        <header className="hd-topnav">
        <div className="hd-topnav-inner">
        <a href="/" className="hd-logo">
        HeiDoc
        </a>
        <nav className="hd-nav-links">
        {TOP_MENU.map(([label, link]) => (
            <a
            key={label}
            href={link}
            className={
                pathname === link ||
                (link !== "/" && pathname.startsWith(`${link}/`))
                ? "active"
                : ""
            }
            >
            {label}
            </a>
        ))}
        </nav>
        <button
        type="button"
        className="hd-login-btn"
        onClick={() => {
            logout();
            window.location.assign("/login");
        }}
        >
        Keluar
        </button>
        </div>
        </header>
    );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLogin = pathname === "/login";
    const [authorized, setAuthorized] = useState<boolean | null>(null);
    useEffect(() => {
        if (isLogin) {
            setAuthorized(true);
            return;
        }
        Object.assign(window, { heidocLogout: logout });
        if (!currentUser()) {
            window.location.replace("/login");
            return;
        }
        
        setAuthorized(true);
    }, [isLogin]);
    if (!isLogin && !authorized)
        return <div className="hd-auth-loading">Membuka HeiDoc...</div>;
    const showBottomNav =
    BOTTOM_ON.has(pathname) || /^\/dokter\/\d+$/.test(pathname);
    return (
        <>
        {!isLogin && <TopNav pathname={pathname} />} {children}{" "}
        {!isLogin && showBottomNav && <BottomNav pathname={pathname} />}
        </>
    );
}
