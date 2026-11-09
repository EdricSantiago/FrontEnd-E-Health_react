"use client";
import { LegacyEffects } from "@/components/LegacyEffects";

export default function PengaturanHtmlPage() {
  return (
    <>
      <div className="settings-container">
        <div className="settings-header">
          <h1>Pengaturan</h1>
        </div>
        <div className="settings-list">
          <a href="/layanan/bmi/faq" className="settings-row">
            <div className="settings-icon">
              <i className="fa-solid fa-circle-question"></i>
            </div>
            <div className="settings-label">Bantuan</div>
            <i className="fa-solid fa-chevron-right settings-chevron"></i>
          </a>
          <div className="settings-row btn-open-lang">
            <div className="settings-icon">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="settings-label">Bahasa</div>
            <div className="lang-pill">
              <span className="lang-option" data-lang="id" id="lang-opt-id">
                ID
              </span>
              <span className="lang-option" data-lang="en" id="lang-opt-en">
                EN
              </span>
            </div>
          </div>
          <label className="settings-row">
            <div className="settings-icon">
              <i className="fa-solid fa-bell"></i>
            </div>
            <div className="settings-label">Notifikasi</div>
            <input type="checkbox" className="switch" id="set-notif" />
          </label>
          <label className="settings-row">
            <div className="settings-icon">
              <i className="fa-solid fa-volume-high"></i>
            </div>
            <div className="settings-label">Suara</div>
            <input type="checkbox" className="switch" id="set-sound" />
          </label>
          <label className="settings-row">
            <div className="settings-icon">
              <i className="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div className="settings-label">Simpan Riwayat</div>
            <input type="checkbox" className="switch" id="set-history" />
          </label>
        </div>
        <div className="settings-version">Versi aplikasi 1.0.0</div>
        <div className="logout-wrapper">
          <button type="button" className="btn-logout" id="btn-logout">
            <i className="fa-solid fa-right-from-bracket"></i>
            Keluar
          </button>
        </div>
      </div>
      <div
        className="modal-overlay"
        id="lang-modal"
        style={{ display: "none" }}
      >
        <input type="hidden" id="input-lang" />
      </div>
      <LegacyEffects scripts={["js/pengaturan.js"]} />
    </>
  );
}
