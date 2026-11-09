"use client";
import { LegacyEffects } from "@/components/LegacyEffects";

export default function ProfileHtmlPage() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-header-banner">
          <h1 className="profile-header-title">Profil Saya</h1>
        </div>
        <div className="profile-card-user">
          <div className="profile-card-top">
            <div>
              <h2 className="user-name" id="user-name-display">
                Dasha Tarann
              </h2>
              <div className="user-meta">
                <span id="user-gender-display">Perempuan</span>
                <span>|</span>
                <span id="user-age-display">26 Tahun</span>
              </div>
            </div>
            <a href="#" className="btn-ubah-outline btn-open-modal">
              Ubah
            </a>
          </div>
        </div>
        <div className="menu-section">
          <div className="menu-section-title">
            <i className="fa-solid fa-heart icon-brand"></i>
            <span>Tingkatkan Kesehatanmu</span>
          </div>
          <div className="menu-grid">
            <a href="/layanan/bmi" className="menu-card">
              <div className="menu-icon bg-amber">
                <i className="fa-solid fa-calculator icon-amber"></i>
              </div>
              <div className="menu-content">
                <div className="menu-title">Kalkulator BMI</div>
                <div className="menu-subtitle">Cara mudah mengetahui BMI</div>
              </div>
              <div className="menu-arrow">›</div>
            </a>
            <a href="/toko" className="menu-card">
              <div className="menu-icon bg-green">
                <i className="fa-solid fa-basket-shopping icon-green"></i>
              </div>
              <div className="menu-content">
                <div className="menu-title">Toko Kesehatan</div>
                <div className="menu-subtitle">
                  Apotek online dan produk kesehatan
                </div>
              </div>
              <div className="menu-arrow">›</div>
            </a>
          </div>
        </div>
      </div>
      <div className="modal-overlay" id="edit-modal">
        <div className="modal-card">
          <div className="modal-header">
            <h3 className="modal-title">Ubah Profil</h3>
            <button
              type="button"
              className="btn-close-modal"
              id="btn-modal-close"
            >
              ×
            </button>
          </div>
          <form id="form-edit-profile">
            <div className="form-group">
              <label htmlFor="input-name" className="form-label">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="input-name"
                className="form-control"
                required={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="input-gender" className="form-label">
                Jenis Kelamin
              </label>
              <select
                id="input-gender"
                className="form-control"
                required={true}
              >
                <option value="Perempuan">Perempuan</option>
                <option value="Laki-laki">Laki-laki</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="input-age" className="form-label">
                Umur (Tahun)
              </label>
              <input
                type="number"
                id="input-age"
                className="form-control"
                min="1"
                max="120"
                required={true}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-modal-cancel"
                id="btn-modal-cancel"
              >
                Batal
              </button>
              <button type="submit" className="btn-modal-save">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
      <LegacyEffects scripts={["js/profile.js"]} />
    </>
  );
}
