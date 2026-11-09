"use client";
import { HomeEffects } from "@/components/HomeEffects";

export default function HomePage() {
  return (
    <>
      <main className="hd-main">
        <section className="hd-hero">
          <div className="hd-hero-inner">
            <div className="hd-hero-text">
              <p className="hd-hero-greeting" id="hd-greeting">
                Selamat Datang
              </p>
              <h1>Kesehatan Dimulai dari Sini</h1>
              <p className="hd-hero-sub">
                Konsultasi dokter, beli obat, dan cek kesehatan dalam satu
                aplikasi.
              </p>
              <div className="hd-hero-actions">
                <a href="/layanan/kulit" className="hd-btn-primary">
                  Chat Dokter
                </a>
                <a href="/toko" className="hd-btn-outline">
                  Beli Obat
                </a>
                <a href="/layanan/bmi" className="hd-btn-outline">
                  Cek BMI
                </a>
              </div>
            </div>
            <div className="hd-hero-visual">
              <img src="/assets/images/hero.jpg" alt="Ilustrasi kesehatan" />
            </div>
          </div>
        </section>
        <section className="hd-search-section">
          <div className="hd-search-bar">
            <input
              type="text"
              id="search-input"
              placeholder="Cari dokter, obat, atau layanan"
            />
          </div>
        </section>
        <section className="hd-banner-carousel">
          <div className="hd-banner-track" id="banner-track">
            <a href="/layanan/kulit" className="hd-banner-slide active">
              <img src="/assets/images/banner1.jpg" alt="Promo chat dokter" />
            </a>
            <a href="/toko" className="hd-banner-slide">
              <img src="/assets/images/banner2.jpg" alt="Promo toko obat" />
            </a>
            <a href="/layanan/bmi" className="hd-banner-slide">
              <img src="/assets/images/banner3.jpg" alt="Promo cek BMI" />
            </a>
          </div>
          <div className="hd-banner-dots" id="banner-dots">
            <span className="hd-dot active" data-index="0"></span>
            <span className="hd-dot" data-index="1"></span>
            <span className="hd-dot" data-index="2"></span>
          </div>
        </section>
        <section className="hd-services">
          <h2>Layanan Kesehatan</h2>
          <a href="/layanan" className="hd-see-all">
            Lihat Semua
          </a>
          <div className="hd-service-grid" id="menu-grid">
            <a href="/dokter" className="hd-svc">
              <i className="fa-solid fa-calendar-check"></i>
              <span>Booking Dokter</span>
            </a>
            <a href="/toko" className="hd-svc">
              <i className="fa-solid fa-pills"></i>
              <span>Toko Obat</span>
            </a>
            <a href="/layanan/bmi" className="hd-svc">
              <i className="fa-solid fa-weight-scale"></i>
              <span>Kalkulator BMI</span>
            </a>
            <a href="/layanan/kulit" className="hd-svc">
              <i className="fa-solid fa-hand-dots"></i>
              <span>Kesehatan Kulit</span>
            </a>
            <a href="/layanan/hewan" className="hd-svc">
              <i className="fa-solid fa-paw"></i>
              <span>Hewan Peliharaan</span>
            </a>
            <a href="/layanan/kulit/info" className="hd-svc">
              <i className="fa-solid fa-circle-info"></i>
              <span>Info Kesehatan</span>
            </a>
            <a href="/layanan/asuransi" className="hd-svc">
              <i className="fa-solid fa-shield-heart"></i>
              <span>Asuransi</span>
            </a>
          </div>
        </section>
        <section className="hd-doctors">
          <div className="hd-section-head">
            <h2>Dokter Rekomendasi</h2>
            <a href="/dokter" className="hd-see-all">
              Lihat Semua
            </a>
          </div>
          <div className="hd-doctor-list">
            <div className="hd-doc-card">
              <span className="hd-doc-status">● Online</span>
              <img
                src="/assets/images/doctors/andini.jpg"
                alt="dr. Andini Putri"
                className="hd-doc-avatar"
              />
              <h3>dr. Andini Putri</h3>
              <p className="hd-doc-spec">Dokter Kulit</p>
              <div className="hd-doc-info">
                <span className="hd-doc-rating">★ 4.9</span>
                <span className="hd-doc-exp">8 thn</span>
              </div>
              <a
                href="/dokter/chat?doctor=dr.%20Andini%20Putri&specialist=Dokter%20Kulit"
                className="hd-doc-btn"
              >
                Chat Dokter
              </a>
            </div>
            <div className="hd-doc-card">
              <span className="hd-doc-status">● Online</span>
              <img
                src="/assets/images/doctors/raka.jpg"
                alt="dr. Raka Pratama"
                className="hd-doc-avatar"
              />
              <h3>dr. Raka Pratama</h3>
              <p className="hd-doc-spec">Dokter Umum</p>
              <div className="hd-doc-info">
                <span className="hd-doc-rating">★ 4.8</span>
                <span className="hd-doc-exp">5 thn</span>
              </div>
              <a
                href="/dokter/chat?doctor=dr.%20Raka%20Pratama&specialist=Dokter%20Umum"
                className="hd-doc-btn"
              >
                Chat Dokter
              </a>
            </div>
            <div className="hd-doc-card">
              <span className="hd-doc-status">● Online</span>
              <img
                src="/assets/images/doctors/citra.jpg"
                alt="dr. Citra Lestari"
                className="hd-doc-avatar"
              />
              <h3>dr. Citra Lestari</h3>
              <p className="hd-doc-spec">Dokter Anak</p>
              <div className="hd-doc-info">
                <span className="hd-doc-rating">★ 4.9</span>
                <span className="hd-doc-exp">10 thn</span>
              </div>
              <a
                href="/dokter/chat?doctor=dr.%20Citra%20Lestari&specialist=Dokter%20Anak"
                className="hd-doc-btn"
              >
                Chat Dokter
              </a>
            </div>
            <div className="hd-doc-card">
              <span className="hd-doc-status hd-offline">● Sibuk</span>
              <img
                src="/assets/images/doctors/budi.jpg"
                alt="dr. Budi Santoso"
                className="hd-doc-avatar"
              />
              <h3>dr. Budi Santoso</h3>
              <p className="hd-doc-spec">Dokter Gigi</p>
              <div className="hd-doc-info">
                <span className="hd-doc-rating">★ 4.7</span>
                <span className="hd-doc-exp">12 thn</span>
              </div>
              <span className="hd-doc-btn hd-btn-off">Tidak Tersedia</span>
            </div>
          </div>
        </section>
        <section className="hd-articles">
          <h2>Artikel Kesehatan</h2>
          <div className="hd-article-grid">
            <a href="/layanan/kulit/info" className="hd-article">
              <img
                src="/assets/images/articles/artikel1.jpg"
                alt=""
                className="hd-article-img"
              />
              <div className="hd-article-body">
                <h3>5 Tips Menjaga Daya Tahan Tubuh</h3>
                <p>
                  Pelajari cara menjaga imun tubuh agar tetap kuat setiap hari.
                </p>
                <span className="hd-article-meta">2 Okt 2026</span>
              </div>
            </a>
            <a href="/toko" className="hd-article">
              <img
                src="/assets/images/articles/artikel2.jpg"
                alt=""
                className="hd-article-img"
              />
              <div className="hd-article-body">
                <h3>Panduan Memilih Vitamin yang Tepat</h3>
                <p>
                  Kenali kebutuhan vitamin harianmu dan cara memilih suplemen.
                </p>
                <span className="hd-article-meta">1 Okt 2026</span>
              </div>
            </a>
            <a href="/layanan/bmi" className="hd-article">
              <img
                src="/assets/images/articles/artikel3.jpg"
                alt=""
                className="hd-article-img"
              />
              <div className="hd-article-body">
                <h3>Olahraga Ringan untuk Kesehatan</h3>
                <p>Aktivitas fisik sederhana yang bisa meningkatkan mood.</p>
                <span className="hd-article-meta">30 Sep 2026</span>
              </div>
            </a>
          </div>
        </section>
        <div className="hd-spacer"></div>
      </main>
      <div id="bottom-nav-container"></div>
      <HomeEffects />
    </>
  );
}
