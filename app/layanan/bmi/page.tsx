"use client";
import { LegacyEffects } from "@/components/LegacyEffects";
import { handleLegacyAction } from "@/lib/legacy-actions";

export default function BmiHtmlPage() {
  return (
    <>
    <div className="bmi-container">
      <div className="bmi-header">
        <a href="#" onClick={() => handleLegacyAction("goBack()")} className="btn-back">
          <i className="fa-solid fa-arrow-left"></i>
        </a>
        <h1 className="bmi-header-title">
          Kalkulator BMI
        </h1>
      </div>
      <div className="bmi-banner">
        <div className="menu-icon">
          <i className="fa-solid fa-calculator"></i>
        </div>
        <div>
          <p className="bmi-banner-text">
            Body Mass Index (BMI) adalah cara menghitung berat badan ideal berdasarkan tinggi dan berat badan.
          </p>
          <a href="/layanan/bmi/faq" className="bmi-banner-link">
            SELENGKAPNYA
          </a>
        </div>
      </div>
      <div className="gender-selector">
        <div className="gender-option active" id="opt-male">
          <div className="gender-avatar">
            <i className="fa-sharp fa-solid fa-person"></i>
          </div>
          <span className="gender-label">
            Laki-laki
          </span>
        </div>
        <div className="gender-option" id="opt-female">
          <div className="gender-avatar">
            <i className="fa-solid fa-person-dress"></i>
          </div>
          <span className="gender-label">
            Perempuan
          </span>
        </div>
      </div>
      <div className="bmi-form-group">
        <label htmlFor="height">
          Tinggi (cm)*
        </label>
        <input type="number" id="height" className="bmi-input-line" placeholder="Masukkan tinggi badan" />
      </div>
      <div className="bmi-form-group">
        <label htmlFor="weight">
          Berat (kg)*
        </label>
        <input type="number" id="weight" className="bmi-input-line" placeholder="Masukkan berat badan" />
      </div>
      <div className="bmi-result-box" id="result-box">
        <div className="bmi-result-value" id="result-value">
          0.0
        </div>
        <div className="bmi-result-status" id="result-status">
          Kategori
        </div>
      </div>
      <button type="button" className="btn-hitung" id="btn-calculate" disabled={true}>
        HITUNG BMI
      </button>
    </div>
      <LegacyEffects scripts={["js/bmi.js", "js/riwayat-helper.js"]} />
    </>
  );
}
