"use client";

export default function InformasiHewanHtmlPage() {
    return (
        <>
            <main className="animal-info">
                <h1>Informasi Kesehatan Hewan</h1>
                <p className="animal-info-text">
                    Kenali beberapa masalah kesehatan yang sering dialami oleh hewan peliharaan.
                </p>
                <div className="animal-info-list">
                    <div className="animal-info-card">
                        <h2>🐾 Penyakit Kulit</h2>
                        <p>
                            Penyakit kulit pada hewan dapat ditandai dengan rasa gatal, kemerahan, iritasi, atau
                            kerontokan bulu. Jika kondisi terus berlanjut, sebaiknya konsultasikan dengan dokter hewan.
                        </p>
                    </div>
                    <div className="animal-info-card">
                        <h2>🍖 Gangguan Pencernaan</h2>
                        <p>
                            Gangguan pencernaan dapat menyebabkan muntah, diare, perubahan nafsu makan, atau hewan
                            terlihat lebih lemas dari biasanya.
                        </p>
                    </div>
                    <div className="animal-info-card">
                        <h2>👁️ Infeksi Mata</h2>
                        <p>
                            Infeksi mata dapat ditandai dengan mata merah, berair, bengkak, atau munculnya kotoran pada
                            bagian mata.
                        </p>
                    </div>
                    <div className="animal-info-card">
                        <h2>🦷 Masalah Gigi</h2>
                        <p>
                            Masalah gigi dan mulut dapat membuat hewan kesulitan makan atau mengalami bau mulut.
                            Pemeriksaan rutin dapat membantu menjaga kesehatan gigi hewan.
                        </p>
                    </div>
                </div>
                <a href="/layanan/hewan" className="animal-back">
                    Kembali ke Kesehatan Hewan
                </a>
            </main>
        </>
    );
}
