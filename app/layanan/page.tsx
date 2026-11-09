"use client";

export default function LayananHtmlPage() {
  return (
    <>
    <div className="layanan-container">
      <div className="layanan-header-row">
        <h2 className="layanan-section-title">
          Layanan Favoritmu
        </h2>
        <a href="/" className="btn-ubah-link">
          Kembali
        </a>
      </div>
      <div className="favorit-grid">
        <a href="/dokter/chat" className="favorit-item">
          <div className="favorit-icon-circle bg-sky">
            <i className="fa-solid fa-comments icon-sky"></i>
          </div>
          <span className="favorit-label">
            Chat dengan Dokter
          </span>
        </a>
        <a href="/toko" className="favorit-item">
          <div className="favorit-icon-circle bg-red">
            <i className="fa-solid fa-basket-shopping icon-red"></i>
          </div>
          <span className="favorit-label">
            Toko Kesehatan
          </span>
        </a>
        <a href="/layanan/kulit" className="favorit-item">
          <div className="favorit-icon-circle bg-pink">
            <span className="badge-text text-pink">
              haloskin
            </span>
          </div>
          <span className="favorit-label">
            Kulit Cantik &amp; Sehat
          </span>
        </a>
        <a href="/layanan/kulit" className="favorit-item">
          <div className="favorit-icon-circle bg-orange">
            <i className="fa-solid fa-spa icon-orange"></i>
          </div>
          <span className="favorit-label">
            Kesehatan Kulit
          </span>
        </a>
      </div>
      <div className="layanan-sub-header">
        LAYANAN UTAMA
      </div>
      <div className="layanan-list">
        <a href="/dokter/chat" className="layanan-list-item">
          <div className="layanan-list-icon bg-sky">
            <i className="fa-solid fa-user-doctor icon-sky"></i>
          </div>
          <div className="layanan-list-info">
            <span className="layanan-list-title">
              Chat dengan Dokter
            </span>
            <span className="layanan-list-desc">
              Telekonsultasi terpraktis dan terpercaya
            </span>
          </div>
        </a>
        <a href="/toko" className="layanan-list-item">
          <div className="layanan-list-icon bg-red">
            <i className="fa-solid fa-store icon-red"></i>
          </div>
          <div className="layanan-list-info">
            <span className="layanan-list-title">
              Toko Kesehatan
            </span>
            <span className="layanan-list-desc">
              Apotek online andalanmu
            </span>
          </div>
        </a>
      </div>
      <div className="layanan-sub-header">
        LAYANAN KHUSUS
      </div>
      <div className="layanan-list">
        <a href="/layanan/kulit" className="layanan-list-item">
          <div className="layanan-list-icon bg-orange">
            <i className="fa-solid fa-spa icon-orange"></i>
          </div>
          <div className="layanan-list-info">
            <span className="layanan-list-title">
              Kesehatan Kulit
            </span>
            <span className="layanan-list-desc">
              Dapatkan solusi perawatan kulit cantik dan sehat
            </span>
          </div>
        </a>
        <a href="/layanan/hewan" className="layanan-list-item">
          <div className="layanan-list-icon bg-red">
            <i className="fa-solid fa-paw icon-red"></i>
          </div>
          <div className="layanan-list-info">
            <span className="layanan-list-title">
              Kesehatan Hewan
            </span>
            <span className="layanan-list-desc">
              Chat dengan dokter hewan terpercaya
            </span>
          </div>
        </a>
      </div>
      <div className="layanan-sub-header">
        LENGKAPI KEBUTUHAN KESEHATANMU
      </div>
      <div className="layanan-list">
        <a href="/layanan/bmi" className="layanan-list-item">
          <div className="layanan-list-icon bg-amber">
            <i className="fa-solid fa-calculator icon-amber"></i>
          </div>
          <div className="layanan-list-info">
            <span className="layanan-list-title">
              Kalkulator BMI
            </span>
            <span className="layanan-list-desc">
              Cara mudah mengetahui BMI
            </span>
          </div>
        </a>
        <a href="/layanan/asuransi" className="layanan-list-item">
          <div className="layanan-list-icon bg-sky">
            <i className="fa-solid fa-shield-heart icon-sky"></i>
          </div>
          <div className="layanan-list-info">
            <span className="layanan-list-title">
              Asuransi Kesehatan
            </span>
            <span className="layanan-list-desc">
              Lindungi dirimu dan keluarga dengan paket asuransi
            </span>
          </div>
        </a>
      </div>
    </div>
    </>
  );
}
