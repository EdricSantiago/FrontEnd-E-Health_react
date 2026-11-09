"use client";
import { LegacyEffects } from "@/components/LegacyEffects";

export default function RiwayatHtmlPage() {
  return (
    <>
      <main className="hd-main">
        <div className="riwayat-header">
          <a href="/" className="btn-back">
            ←
          </a>
          <h1>Riwayat</h1>
        </div>
        <div className="riwayat-tabs">
          <button type="button" className="tab-chip active" data-filter="semua">
            Semua
          </button>
          <button type="button" className="tab-chip" data-filter="konsultasi">
            Konsultasi
          </button>
          <button type="button" className="tab-chip" data-filter="pesanan">
            Pesanan
          </button>
          <button type="button" className="tab-chip" data-filter="bmi">
            BMI
          </button>
          <button type="button" className="tab-chip" data-filter="asuransi">
            Asuransi
          </button>
        </div>
        <div className="riwayat-list" id="riwayat-list"></div>
        <p className="riwayat-kosong" id="riwayat-kosong" hidden={true}>
          Belum ada riwayat.
        </p>
      </main>
      <LegacyEffects
        scripts={[
          "js/riwayat-helper.js",
          "js/data/riwayat.js",
          "js/riwayat.js",
        ]}
      />
    </>
  );
}
