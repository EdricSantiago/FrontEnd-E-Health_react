
'use client';

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/lib/doctors";
import styles from "./jadwal.module.css";

export default function JadwalDokterPage() {
    const params = useParams();
    const id = params.id as string;

    const doctor = doctors.find(
        (item) => item.id.toString() === id
    );

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [confirmed, setConfirmed] = useState(false);

    if (!doctor) {
        return (
            <div className={styles.notFound}>
                <h2>Dokter tidak ditemukan</h2>
                <Link href="/dokter">Kembali ke Daftar Dokter</Link>
            </div>
        );
    }

    // Membuat pilihan tanggal selama 7 hari
    const dates = Array.from({ length: 7 }, (_, index) => {
        const date = new Date();
        date.setDate(date.getDate() + index);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return {
            value: `${year}-${month}-${day}`,
            dayName: date.toLocaleDateString("id-ID", {
                weekday: "short"
            }),
            dateNumber: date.getDate(),
            monthName: date.toLocaleDateString("id-ID", {
                month: "short"
            })
        };
    });

    // Pilihan jam praktik
    const schedules = [
        {
            session: "Pagi",
            icon: "🌤️",
            hours: ["08:00", "09:00", "10:00", "11:00"]
        },
        {
            session: "Siang",
            icon: "☀️",
            hours: ["13:00", "14:00", "15:00"]
        },
        {
            session: "Sore",
            icon: "🌙",
            hours: ["16:00", "17:00", "18:00"]
        }
    ];

    const formattedDate = selectedDate
        ? new Date(selectedDate + "T00:00:00").toLocaleDateString(
            "id-ID",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        )
        : "-";

    const handleConfirm = () => {
        if (!selectedDate || !selectedTime) {
            alert("Silakan pilih tanggal dan jam konsultasi terlebih dahulu.");
            return;
        }

        setConfirmed(true);
    };

    return (
        <main className={styles.container}>
            <div className={styles.content}>

                {/* Breadcrumb */}
                <div className={styles.breadcrumb}>
                    <Link href="/">Beranda</Link>
                    <span>/</span>
                    <Link href="/dokter">Cari Dokter</Link>
                    <span>/</span>
                    <Link href={`/dokter/${doctor.id}`}>
                        Detail Dokter
                    </Link>
                    <span>/</span>
                    <span>Jadwal</span>
                </div>

                {/* Page Heading */}
                <section className={styles.pageHeader}>
                    <span className={styles.headerBadge}>
                        HEIDOC APPOINTMENT
                    </span>

                    <h1>Pilih Jadwal Konsultasi</h1>

                    <p>
                        Tentukan tanggal dan waktu konsultasi yang paling
                        sesuai dengan kebutuhan Anda.
                    </p>
                </section>

                {/* Doctor Profile */}
                <section className={styles.doctorCard}>
                    <div className={styles.doctorProfile}>
                        <Image
                            src={doctor.image}
                            alt={doctor.name}
                            width={100}
                            height={100}
                            className={styles.doctorImage}
                        />

                        <div>
                            <span className={styles.doctorBadge}>
                                {doctor.specialty}
                            </span>

                            <h2>{doctor.name}</h2>

                            <p>🏥 {doctor.hospital}</p>

                            <span className={styles.doctorRating}>
                                ⭐ {doctor.rating} · {doctor.experience} pengalaman
                            </span>
                        </div>
                    </div>

                    <div className={styles.doctorPrice}>
                        <span>Biaya Konsultasi</span>
                        <strong>
                            Rp{doctor.price.toLocaleString("id-ID")}
                        </strong>
                    </div>
                </section>

                {/* Schedule Layout */}
                <div className={styles.scheduleLayout}>

                    <div className={styles.scheduleMain}>

                        {/* Date Selection */}
                        <section className={styles.scheduleCard}>
                            <div className={styles.sectionTitle}>
                                <div className={styles.titleIcon}>📅</div>

                                <div>
                                    <h2>Pilih Tanggal</h2>
                                    <p>Pilih tanggal konsultasi yang tersedia.</p>
                                </div>
                            </div>

                            <div className={styles.dateList}>
                                {dates.map((date) => (
                                    <button
                                        key={date.value}
                                        className={`${styles.dateItem} ${
                                            selectedDate === date.value
                                                ? styles.dateActive
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedDate(date.value);
                                            setConfirmed(false);
                                        }}
                                    >
                                        <span>{date.dayName}</span>
                                        <strong>{date.dateNumber}</strong>
                                        <span>{date.monthName}</span>
                                    </button>
                                ))}
                            </div>

                            <p className={styles.dateNote}>
                                Pilih salah satu tanggal untuk melihat
                                pilihan jam konsultasi.
                            </p>
                        </section>

                        {/* Time Selection */}
                        <section className={styles.scheduleCard}>
                            <div className={styles.sectionTitle}>
                                <div className={styles.titleIcon}>🕒</div>

                                <div>
                                    <h2>Pilih Jam Konsultasi</h2>
                                    <p>
                                        Pilih waktu konsultasi sesuai
                                        preferensi Anda.
                                    </p>
                                </div>
                            </div>

                            {!selectedDate ? (
                                <div className={styles.selectDateMessage}>
                                    <span>📅</span>
                                    <p>
                                        Silakan pilih tanggal terlebih
                                        dahulu untuk melihat jam konsultasi.
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.sessions}>
                                    {schedules.map((schedule) => (
                                        <div
                                            key={schedule.session}
                                            className={styles.session}
                                        >
                                            <h3>
                                                {schedule.icon} Sesi {schedule.session}
                                            </h3>

                                            <div className={styles.timeList}>
                                                {schedule.hours.map((hour) => (
                                                    <button
                                                        key={hour}
                                                        className={`${styles.timeItem} ${
                                                            selectedTime === hour
                                                                ? styles.timeActive
                                                                : ""
                                                        }`}
                                                        onClick={() => {
                                                            setSelectedTime(hour);
                                                            setConfirmed(false);
                                                        }}
                                                    >
                                                        {hour}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        {/* Information */}
                        <section className={styles.notice}>
                            <span>ℹ️</span>
                            <div>
                                <strong>Informasi Konsultasi</strong>
                                <p>
                                    Pastikan tanggal dan jam yang dipilih
                                    sudah sesuai sebelum melanjutkan proses
                                    pemesanan.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Booking Summary */}
                    <aside className={styles.summaryCard}>
                        <h2>Ringkasan Jadwal</h2>

                        <p className={styles.summarySubtitle}>
                            Periksa kembali pilihan konsultasi Anda.
                        </p>

                        <div className={styles.summaryDoctor}>
                            <strong>{doctor.name}</strong>
                            <span>{doctor.specialty}</span>
                        </div>

                        <div className={styles.summaryDivider}></div>

                        <div className={styles.summaryRow}>
                            <span>📅 Tanggal</span>
                            <strong>{formattedDate}</strong>
                        </div>

                        <div className={styles.summaryRow}>
                            <span>🕒 Jam</span>
                            <strong>{selectedTime || "-"}</strong>
                        </div>

                        <div className={styles.summaryRow}>
                            <span>🏥 Tempat Praktik</span>
                            <strong>{doctor.hospital}</strong>
                        </div>

                        <div className={styles.summaryDivider}></div>

                        <div className={styles.totalPrice}>
                            <span>Total Biaya</span>
                            <strong>
                                Rp{doctor.price.toLocaleString("id-ID")}
                            </strong>
                        </div>

                        <button
                            className={styles.confirmButton}
                            onClick={handleConfirm}
                        >
                            Konfirmasi Jadwal →
                        </button>

                        {confirmed && (
                            <div className={styles.successMessage}>
                                <strong>✓ Jadwal berhasil dipilih!</strong>
                                <p>
                                    {formattedDate}, pukul {selectedTime}.
                                    Pilihan ini siap dilanjutkan ke proses
                                    booking.
                                </p>
                            </div>
                        )}

                        <p className={styles.summaryNote}>
                            Dengan melanjutkan, Anda menyetujui proses
                            pemesanan konsultasi melalui HeiDoc.
                        </p>
                    </aside>
                </div>

                <Link
                    href={`/dokter/${doctor.id}`}
                    className={styles.backButton}
                >
                    ← Kembali ke Detail Dokter
                </Link>

            </div>
        </main>
    );
}
