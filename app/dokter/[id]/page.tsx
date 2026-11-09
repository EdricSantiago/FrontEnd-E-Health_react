
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctors } from "@/lib/doctors";
import styles from "./detail.module.css";

interface DetailDokterProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function DetailDokter({ params }: DetailDokterProps) {
    const { id } = await params;

    const doctor = doctors.find(
        (item) => item.id.toString() === id
    );

    if (!doctor) {
        notFound();
    }

    return (
        <main className={styles.container}>
            <div className={styles.content}>

                <div className={styles.breadcrumb}>
                    <Link href="/">Beranda</Link>
                    <span>/</span>
                    <Link href="/dokter">Cari Dokter</Link>
                    <span>/</span>
                    <span>Detail Dokter</span>
                </div>

                <section className={styles.profileCard}>
                    <div className={styles.profileImage}>
                        <Image
                            src={doctor.image}
                            alt={doctor.name}
                            width={220}
                            height={220}
                            priority
                        />
                    </div>

                    <div className={styles.profileInfo}>
                        <span className={styles.badge}>
                            {doctor.specialty}
                        </span>

                        <h1>{doctor.name}</h1>

                        <p className={styles.hospital}>
                            <span>🏥</span> {doctor.hospital}
                        </p>

                        <div className={styles.rating}>
                            <span>⭐</span>
                            <strong>{doctor.rating}</strong>
                            <span className={styles.ratingText}>
                                Rating Dokter
                            </span>
                        </div>

                        <div className={styles.profileStats}>
                            <div>
                                <strong>{doctor.experience}</strong>
                                <span>Pengalaman</span>
                            </div>

                            <div>
                                <strong>Rp{doctor.price.toLocaleString("id-ID")}</strong>
                                <span>Biaya Konsultasi</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.mainContent}>

                    <section className={styles.infoCard}>
                        <h2>Informasi Dokter</h2>

                        <p className={styles.description}>
                            Kenali profil dokter sebelum melakukan konsultasi.
                            Pilih jadwal yang sesuai dengan kebutuhan kesehatan
                            Anda dan dapatkan pelayanan kesehatan bersama
                            HeiDoc.
                        </p>

                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>👨‍⚕️</div>
                                <div>
                                    <span>Nama Dokter</span>
                                    <strong>{doctor.name}</strong>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>🩺</div>
                                <div>
                                    <span>Spesialisasi</span>
                                    <strong>{doctor.specialty}</strong>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>🏥</div>
                                <div>
                                    <span>Tempat Praktik</span>
                                    <strong>{doctor.hospital}</strong>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>💼</div>
                                <div>
                                    <span>Pengalaman</span>
                                    <strong>{doctor.experience}</strong>
                                </div>
                            </div>
                        </div>
                    </section>

                    <aside className={styles.bookingCard}>
                        <span className={styles.bookingLabel}>
                            Biaya Konsultasi
                        </span>

                        <h2>
                            Rp{doctor.price.toLocaleString("id-ID")}
                        </h2>

                        <p>
                            Pilih jadwal konsultasi yang tersedia
                            untuk membuat janji dengan dokter.
                        </p>

                        <Link
                            href={`/dokter/${doctor.id}/jadwal`}
                            className={styles.bookingButton}
                        >
                            Buat Janji Konsultasi
                        </Link>

                        <div className={styles.bookingNote}>
                            ✓ Jadwal konsultasi dapat dipilih
                            <br />
                            ✓ Proses booking mudah dan praktis
                        </div>
                    </aside>
                </div>

                <Link href="/dokter" className={styles.backButton}>
                    ← Kembali ke Daftar Dokter
                </Link>

            </div>
        </main>
    );
}
