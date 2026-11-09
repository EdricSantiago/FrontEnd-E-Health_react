"use client";
import { LegacyEffects } from "@/components/LegacyEffects";

export default function TokoHtmlPage() {
    return (
        <>
            <h1 className="page-title">Toko Kesehatan</h1>
            <div className="category-filter">
                <button type="button" className="category-btn active" data-category="semua">
                    Semua
                </button>
                <button type="button" className="category-btn" data-category="obat">
                    Obat &amp; Perawatan
                </button>
                <button type="button" className="category-btn" data-category="vitamin">
                    Vitamin &amp; Suplemen
                </button>
                <button type="button" className="category-btn" data-category="lainnya">
                    Kesehatan Lainnya
                </button>
            </div>
            <div className="product-list">
                <div className="product-card" data-harga="12000" data-category="obat">
                    <div className="product-image">
                        <img src="/assets/images/paracetamol.jpeg" alt="Paracetamol 500mg" loading="lazy" />
                    </div>
                    <div className="product-info">
                        <p className="product-name">Paracetamol 500mg</p>
                        <p className="product-subtitle">Strip</p>
                        <div className="product-price-row">
                            <span className="product-price">Rp12.000</span>
                            <span className="product-discount">10%</span>
                        </div>
                        <span className="product-old-price">Rp13.500</span>
                        <button type="button" className="btn-add">
                            Tambah +
                        </button>
                    </div>
                </div>
                <div className="product-card" data-harga="28500" data-category="obat">
                    <div className="product-image">
                        <img src="/assets/images/obhcombi.jpeg" alt="Obat Batuk Cair" loading="lazy" />
                    </div>
                    <div className="product-info">
                        <p className="product-name">Obat Batuk Cair</p>
                        <p className="product-subtitle">Botol</p>
                        <div className="product-price-row">
                            <span className="product-price">Rp28.500</span>
                        </div>
                        <button type="button" className="btn-add">
                            Tambah +
                        </button>
                    </div>
                </div>
                <div className="product-card" data-harga="106500" data-category="obat">
                    <div className="product-image">
                        <img src="/assets/images/counterpain.jpeg" alt="Counterpain Gel 25g" loading="lazy" />
                    </div>
                    <div className="product-info">
                        <p className="product-name">Counterpain Gel 25g</p>
                        <p className="product-subtitle">Tube</p>
                        <div className="product-price-row">
                            <span className="product-price">Rp106.500</span>
                            <span className="product-discount">10%</span>
                        </div>
                        <span className="product-old-price">Rp118.800</span>
                        <button type="button" className="btn-add">
                            Tambah +
                        </button>
                    </div>
                </div>
                <div className="product-card" data-harga="8000" data-category="obat">
                    <div className="product-image">
                        <img src="/assets/images/antasida.jpeg" alt="Antasida Tablet" loading="lazy" />
                    </div>
                    <div className="product-info">
                        <p className="product-name">Antasida Tablet</p>
                        <p className="product-subtitle">Strip</p>
                        <div className="product-price-row">
                            <span className="product-price">Rp8.000</span>
                        </div>
                        <button type="button" className="btn-add">
                            Tambah +
                        </button>
                    </div>
                </div>
                <div className="product-card" data-harga="45000" data-category="vitamin">
                    <div className="product-image">
                        <img src="/assets/images/vitaminc1000.jpeg" alt="Vitamin C 1000mg" loading="lazy" />
                    </div>
                    <div className="product-info">
                        <p className="product-name">Vitamin C 1000mg</p>
                        <p className="product-subtitle">Botol</p>
                        <div className="product-price-row">
                            <span className="product-price">Rp45.000</span>
                            <span className="product-discount">15%</span>
                        </div>
                        <span className="product-old-price">Rp53.000</span>
                        <button type="button" className="btn-add">
                            Tambah +
                        </button>
                    </div>
                </div>
                <div className="product-card" data-harga="39000" data-category="vitamin">
                    <div className="product-image">
                        <img src="/assets/images/vitamind3.jpeg" alt="Vitamin D3 1000 IU" loading="lazy" />
                    </div>
                    <div className="product-info">
                        <p className="product-name">Vitamin D3 1000 IU</p>
                        <p className="product-subtitle">Botol</p>
                        <div className="product-price-row">
                            <span className="product-price">Rp39.000</span>
                            <span className="product-discount">20%</span>
                        </div>
                        <span className="product-old-price">Rp48.700</span>
                        <button type="button" className="btn-add">
                            Tambah +
                        </button>
                    </div>
                </div>
                <div className="product-card" data-harga="52000" data-category="vitamin">
                    <div className="product-image">
                        <img src="/assets/images/multivitamin.jpeg" alt="Multivitamin Anak" loading="lazy" />
                    </div>
                    <div className="product-info">
                        <p className="product-name">Multivitamin Anak</p>
                        <p className="product-subtitle">Botol</p>
                        <div className="product-price-row">
                            <span className="product-price">Rp52.000</span>
                        </div>
                        <button type="button" className="btn-add">
                            Tambah +
                        </button>
                    </div>
                </div>
                <div className="product-card" data-harga="15000" data-category="lainnya">
                    <div className="product-image">
                        <img src="/assets/images/handsanitizer.jpeg" alt="Hand Sanitizer 100ml" loading="lazy" />
                    </div>
                    <div className="product-info">
                        <p className="product-name">Hand Sanitizer 100ml</p>
                        <p className="product-subtitle">Botol</p>
                        <div className="product-price-row">
                            <span className="product-price">Rp15.000</span>
                        </div>
                        <button type="button" className="btn-add">
                            Tambah +
                        </button>
                    </div>
                </div>
                <div className="product-card" data-harga="35000" data-category="lainnya">
                    <div className="product-image">
                        <img src="/assets/images/maskermedis.jpeg" alt="Masker Medis (50pcs)" loading="lazy" />
                    </div>
                    <div className="product-info">
                        <p className="product-name">Masker Medis (50pcs)</p>
                        <p className="product-subtitle">Box</p>
                        <div className="product-price-row">
                            <span className="product-price">Rp35.000</span>
                            <span className="product-discount">25%</span>
                        </div>
                        <span className="product-old-price">Rp46.700</span>
                        <button type="button" className="btn-add">
                            Tambah +
                        </button>
                    </div>
                </div>
                <div className="product-card" data-harga="65000" data-category="lainnya">
                    <div className="product-image">
                        <img src="/assets/images/termometerdigital.jpeg" alt="Termometer Digital" loading="lazy" />
                    </div>
                    <div className="product-info">
                        <p className="product-name">Termometer Digital</p>
                        <p className="product-subtitle">Unit</p>
                        <div className="product-price-row">
                            <span className="product-price">Rp65.000</span>
                        </div>
                        <button type="button" className="btn-add">
                            Tambah +
                        </button>
                    </div>
                </div>
            </div>
            <button type="button" className="cart-fab" id="cart-open">
                🛒 Keranjang
                <span className="cart-count" id="cart-count" hidden={true}>
                    0
                </span>
            </button>
            <div className="cart-overlay" id="cart-overlay"></div>
            <aside className="cart-panel" id="cart-panel">
                <div className="cart-head">
                    <h2>Keranjang</h2>
                    <button type="button" className="cart-close" id="cart-close">
                        ✕
                    </button>
                </div>
                <div id="cart-view">
                    <p className="cart-empty" id="cart-empty">
                        Keranjang masih kosong.
                    </p>
                    <ul className="cart-list" id="cart-list"></ul>
                    <div className="cart-foot" id="cart-foot">
                        <div className="cart-total">
                            <span>Total</span>
                            <strong id="cart-total">Rp0</strong>
                        </div>
                        <button type="button" className="cart-checkout" id="cart-checkout">
                            Checkout
                        </button>
                    </div>
                </div>
                <div className="cart-done" id="cart-done" hidden={true}>
                    <div className="cart-done-icon">✓</div>
                    <h3>Pesanan Berhasil</h3>
                    <p>
                        Kode pesanan
                        <strong id="cart-kode"></strong>
                    </p>
                    <a href="/riwayat" className="cart-checkout">
                        Lihat Riwayat
                    </a>
                    <button type="button" className="cart-link" id="cart-lanjut">
                        Lanjut Belanja
                    </button>
                </div>
            </aside>
            <LegacyEffects scripts={["js/riwayat_helper.js", "js/toko.js"]} />
        </>
    );
}
