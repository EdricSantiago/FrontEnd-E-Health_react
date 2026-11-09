
import Image from "next/image";
import Link from "next/link";
import styles from "./DoctorCard.module.css";

interface Doctor {
    id: number | string;
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
            <div className={styles.cardTop}>
                <span className={styles.available}>
                    ● Dokter HeiDoc
                </span>
                <span className={styles.rating}>
                    ⭐ {doctor.rating}
                </span>
            </div>

            <div className={styles.profile}>
                <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={110}
                    height={110}
                    className={styles.image}
                />

                <h3>{doctor.name}</h3>
                <span className={styles.specialty}>
                    {doctor.specialty}
                </span>
            </div>

            <div className={styles.details}>
                <div>
                    <span>💼</span>
                    <p>{doctor.experience} pengalaman</p>
                </div>

                <div>
                    <span>🏥</span>
                    <p>{doctor.hospital}</p>
                </div>
            </div>

            <div className={styles.cardFooter}>
                <div className={styles.price}>
                    <span>Biaya konsultasi</span>
                    <strong>
                        Rp{doctor.price.toLocaleString("id-ID")}
                    </strong>
                </div>

                <Link
                    href={`/dokter/${doctor.id}`}
                    className={styles.button}
                >
                    Lihat Detail →
                </Link>
            </div>
        </div>
    );
}
