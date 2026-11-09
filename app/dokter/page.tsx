
'use client';

import { useState } from "react";
import styles from "./dokter.module.css";
import { doctors } from "@/lib/doctors";
import DoctorCard from "@/components/dokter/DoctorCard";

export default function DokterPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("Semua Dokter");

    const filteredDoctors = doctors.filter((doctor) => {
        const matchSearch =
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());

        const matchSpecialty =
            selectedSpecialty === "Semua Dokter" ||
            doctor.specialty === selectedSpecialty;

        return matchSearch && matchSpecialty;
    });

    const specialties = [
        "Semua Dokter",
        "Dokter Umum",
        "Dokter Anak",
        "Dokter Kulit",
        "Dokter Gigi",
        "Dokter Mata",
        "Dokter Jantung"
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Temukan Dokter Terbaik</h1>
                <p>Pilih dokter sesuai kebutuhan kesehatan Anda.</p>
            </div>

            {/* Kolom Pencarian */}
            <input
                type="text"
                placeholder="Cari nama dokter atau spesialisasi..."
                className={styles.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Filter Spesialisasi */}
            <h2 className={styles.sectionTitle}>Pilih Spesialisasi</h2>

            <div className={styles.specialties}>
                {specialties.map((specialty) => (
                    <button
                        key={specialty}
                        className={styles.specialty}
                        onClick={() => setSelectedSpecialty(specialty)}
                    >
                        {specialty}
                    </button>
                ))}
            </div>

            {/* Daftar Dokter */}
            <h2 className={styles.sectionTitle}>Daftar Dokter</h2>

            <div className={styles.doctorList}>
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor) => (
                        <DoctorCard
                            key={doctor.id}
                            doctor={doctor}
                        />
                    ))
                ) : (
                    <p>Dokter tidak ditemukan.</p>
                )}
            </div>
        </div>
    );
}
