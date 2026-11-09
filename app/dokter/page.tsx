import styles from "./dokter.module.css";
import { doctors } from "@/lib/doctors";
import DoctorCard from "@/components/dokter/DoctorCard";

export default function DokterPage() {
    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <h1>Temukan Dokter Terbaik</h1>
                <p>
                    Pilih dokter sesuai kebutuhan kesehatan Anda.
                </p>
            </div>

            <input
                type="text"
                placeholder="Cari nama dokter atau spesialisasi..."
                className={styles.search}
            />

            <h2 className={styles.sectionTitle}>
                Pilih Spesialisasi
            </h2>

            <div className={styles.specialties}>
                <button className={styles.specialty}>Semua Dokter</button>
                <button className={styles.specialty}>Dokter Umum</button>
                <button className={styles.specialty}>Dokter Anak</button>
                <button className={styles.specialty}>Dokter Kulit</button>
                <button className={styles.specialty}>Dokter Gigi</button>
                <button className={styles.specialty}>Dokter Mata</button>
                <button className={styles.specialty}>Dokter Jantung</button>
            </div>

            <h2 className={styles.sectionTitle}>
                Daftar Dokter
            </h2>

            <div className={styles.doctorList}>
                {doctors.map((doctor) => (
                    <DoctorCard
                        key={doctor.id}
                        doctor={doctor}
                    />
                ))}
            </div>

        </div>
    );
}
