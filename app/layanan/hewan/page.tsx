"use client";
import { LegacyEffects } from "@/components/LegacyEffects";
import { handleLegacyAction } from "@/lib/legacy-actions";

export default function KesehatanHewanHtmlPage() {
    return (
        <>
            <main>
                <section className="animal-hero">
                    <div className="animal-hero-text">
                        <h1>Jaga Kesehatan Hewan Kesayanganmu</h1>
                        <p>
                            Temukan informasi dan layanan kesehatan untuk membantu menjaga kesehatan hewan peliharaanmu.
                        </p>
                        <a href="#services">Mulai Sekarang</a>
                    </div>
                </section>
                <section className="animal-services" id="services">
                    <h2>Layanan Kesehatan Hewan</h2>
                    <p className="animal-services-text">
                        Berbagai layanan untuk membantu menjaga kesehatan hewan kesayanganmu.
                    </p>
                    <div className="animal-service-list">
                        <div className="animal-service-card">
                            <div className="animal-service-icon">🩺</div>
                            <h3>Konsultasi Dokter Hewan</h3>
                            <p>Konsultasikan kondisi hewan kesayanganmu dengan dokter hewan.</p>
                            <button type="button" onClick={() => handleLegacyAction("openAnimalChat()")}>
                                Konsultasi
                            </button>
                        </div>
                        <div className="animal-service-card">
                            <div className="animal-service-icon">🔍</div>
                            <h3>Informasi Kesehatan</h3>
                            <p>Kenali berbagai masalah kesehatan yang sering dialami hewan.</p>
                            <button type="button" onClick={() => handleLegacyAction("openAnimalInfo()")}>
                                Lihat Informasi
                            </button>
                        </div>
                        <div className="animal-service-card">
                            <div className="animal-service-icon">🐾</div>
                            <h3>Produk Hewan</h3>
                            <p>Temukan berbagai produk untuk membantu merawat hewan kesayanganmu.</p>
                            <button type="button" onClick={() => handleLegacyAction("openAnimalProduct()")}>
                                Lihat Produk
                            </button>
                        </div>
                    </div>
                </section>
                <section className="animal-problems">
                    <h2>Masalah Kesehatan Hewan</h2>
                    <p className="animal-problems-text">
                        Kenali beberapa masalah kesehatan yang sering dialami oleh hewan peliharaan.
                    </p>
                    <div className="animal-problem-list">
                        <div className="animal-problem-card">
                            <div className="animal-problem-icon">🐾</div>
                            <h3>Penyakit Kulit</h3>
                            <p>Masalah seperti gatal, iritasi, atau kerontokan bulu pada hewan.</p>
                        </div>
                        <div className="animal-problem-card">
                            <div className="animal-problem-icon">🍖</div>
                            <h3>Gangguan Pencernaan</h3>
                            <p>Gangguan yang dapat menyebabkan muntah, diare, atau perubahan nafsu makan.</p>
                        </div>
                        <div className="animal-problem-card">
                            <div className="animal-problem-icon">👁️</div>
                            <h3>Infeksi Mata</h3>
                            <p>Kondisi seperti mata merah, berair, atau adanya kotoran pada mata.</p>
                        </div>
                        <div className="animal-problem-card">
                            <div className="animal-problem-icon">🦷</div>
                            <h3>Masalah Gigi</h3>
                            <p>Masalah pada gigi dan mulut yang dapat memengaruhi kenyamanan hewan.</p>
                        </div>
                    </div>
                </section>
                <section className="animal-doctors">
                    <h2>Dokter Hewan</h2>
                    <p className="animal-doctors-text">
                        Konsultasikan kesehatan hewan kesayanganmu dengan dokter hewan.
                    </p>
                    <div className="animal-doctor-list">
                        <div className="animal-doctor-card">
                            <div className="animal-doctor-icon">👩‍⚕️</div>
                            <h3>drh. Andi Pratama</h3>
                            <p>Dokter Hewan</p>
                            <span>⭐ 4.9</span>
                            <button
                                type="button"
                                onClick={() => handleLegacyAction("openAnimalChat('drh. Andi Pratama')")}
                            >
                                Konsultasi
                            </button>
                        </div>
                        <div className="animal-doctor-card">
                            <div className="animal-doctor-icon">👨‍⚕️</div>
                            <h3>drh. Rina Putri</h3>
                            <p>Dokter Hewan</p>
                            <span>⭐ 4.8</span>
                            <button
                                type="button"
                                onClick={() => handleLegacyAction("openAnimalChat('drh. Rina Putri')")}
                            >
                                Konsultasi
                            </button>
                        </div>
                        <div className="animal-doctor-card">
                            <div className="animal-doctor-icon">👩‍⚕️</div>
                            <h3>drh. Budi Santoso</h3>
                            <p>Dokter Hewan</p>
                            <span>⭐ 4.9</span>
                            <button
                                type="button"
                                onClick={() => handleLegacyAction("openAnimalChat('drh. Budi Santoso')")}
                            >
                                Konsultasi
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <LegacyEffects scripts={["js/kesehatan_hewan.js"]} />
        </>
    );
}
