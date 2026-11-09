'use client';

import { useState } from "react";
import styles from "./dokter.module.css";
import { doctors } from "@/lib/doctors";
import DoctorCard from "@/components/dokter/DoctorCard";

export default function DokterPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("Semua Dokter");

    const specialties = [
        "Semua Dokter",
        "Dokter Umum",
        "Dokter Anak",
        "Dokter Kulit",
        "Dokter Gigi",
        "Dokter Mata",
        "Dokter Jantung"
    ];

    const filteredDoctors = doctors.filter((doctor) => {
        const matchSearch =
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());

        const matchSpecialty =
            selectedSpecialty === "Semua Dokter" ||
            doctor.specialty === selectedSpecialty;

        return matchSearch && matchSpecialty;
    });

    return (
        <main className={styles.container}>
            <div className={styles.content}>

                {/* Banner */}
                <section className={styles.hero}>
                    <div className={styles.heroText}>
                        <span className={styles.heroBadge}>
                            LAYANAN KESEHATAN HEIDOC
                        </span>

                        <h1>
                            Temukan Dokter Terbaik
                            <br />
                            untuk Kesehatan Anda
                        </h1>

                        <p>
                            Konsultasikan masalah kesehatan Anda bersama
                            dokter profesional dan terpercaya.
                        </p>

                        <div className={styles.heroFeatures}>
                            <span>✓ Dokter Berpengalaman</span>
                            <span>✓ Pilihan Spesialis Lengkap</span>
                            <span>✓ Booking Mudah</span>
                        </div>
                    </div>

                    <div className={styles.heroDecoration}>
                        <div className={styles.heroCircle}>✚</div>
                    </div>
                </section>

                {/* Search */}
                <section className={styles.searchSection}>
                    <div className={styles.searchHeading}>
                        <h2>Cari Dokter</h2>
                        <p>Temukan dokter sesuai kebutuhan kesehatan Anda.</p>
                    </div>

                    <div className={styles.searchBox}>
                        <span>⌕</span>
                        <input
                            type="text"
                            placeholder="Cari nama dokter, spesialisasi, atau rumah sakit..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {searchTerm && (
                            <button onClick={() => setSearchTerm("")}>
                                ✕
                            </button>
                        )}
                    </div>
                </section>

                {/* Specialties */}
                <section className={styles.filterSection}>
                    <div className={styles.sectionHeading}>
                        <div>
                            <h2>Pilih Spesialisasi</h2>
                            <p>Sesuaikan dengan kebutuhan konsultasi Anda.</p>
                        </div>
                    </div>

                    <div className={styles.specialties}>
                        {specialties.map((specialty) => (
                            <button
                                key={specialty}
                                className={`${styles.specialty} ${
                                    selectedSpecialty === specialty
                                        ? styles.specialtyActive
                                        : ""
                                }`}
                                onClick={() => setSelectedSpecialty(specialty)}
                            >
                                {specialty}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Doctor List */}
                <section className={styles.doctorSection}>
                    <div className={styles.doctorHeading}>
                        <div>
                            <h2>Dokter Pilihan Kami</h2>
                            <p>
                                Temukan dokter yang tepat untuk Anda.
                            </p>
                        </div>

                        <span className={styles.resultCount}>
                            {filteredDoctors.length} Dokter ditemukan
                        </span>
                    </div>

                    {filteredDoctors.length > 0 ? (
                        <div className={styles.doctorList}>
                            {filteredDoctors.map((doctor) => (
                                <DoctorCard
                                    key={doctor.id}
                                    doctor={doctor}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <div>🔎</div>
                            <h3>Dokter tidak ditemukan</h3>
                            <p>
                                Coba gunakan kata kunci atau spesialisasi
                                yang berbeda.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedSpecialty("Semua Dokter");
                                }}
                            >
                                Reset Pencarian
                            </button>
                        </div>
                    )}
                </section>

                {/* Information */}
                <section className={styles.infoBanner}>
                    <div>
                        <h3>Masih bingung memilih dokter?</h3>
                        <p>
                            Pilih spesialisasi yang sesuai dengan keluhan
                            kesehatan Anda untuk menemukan dokter yang tepat.
                        </p>
                    </div>
                    <span>💙</span>
                </section>

            </div>
        </main>
    );
}
