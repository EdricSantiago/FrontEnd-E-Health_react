
import Image from "next/image";
import styles from "./DoctorCard.module.css";

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    rating: number;
    price: number;
    image: string;
    hospital: string;
}

interface DoctorCardProps {
    doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
    return (
        <div className={styles.card}>

            <div className={styles.imageContainer}>
                <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={120}
                    height={120}
                    className={styles.image}
                />
            </div>

            <div className={styles.info}>
                <h3>{doctor.name}</h3>

                <p className={styles.specialty}>
                    {doctor.specialty}
                </p>

                <p className={styles.experience}>
                    Pengalaman {doctor.experience}
                </p>

                <p className={styles.hospital}>
                    {doctor.hospital}
                </p>

                <div className={styles.rating}>
                    ⭐ {doctor.rating}
                </div>

                <p className={styles.price}>
                    Rp {doctor.price.toLocaleString("id-ID")}
                </p>

                <button className={styles.button}>
                    Lihat Detail
                </button>
            </div>

        </div>
    );
}
