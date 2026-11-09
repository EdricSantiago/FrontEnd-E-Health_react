"use client";

export default function BmiFaqHtmlPage() {
  return (
    <>
    <div className="bmi-container">
      <div className="bmi-header">
        <a href="/layanan/bmi" className="btn-back">
          <i className="fa-solid fa-arrow-left"></i>
        </a>
        <h1 className="bmi-header-title">
          Kalkulator BMI
        </h1>
      </div>
      <div className="faq-content">
        <h2 className="faq-title">
          Apa itu BMI?
        </h2>
        <p>
          Body Mass Index (BMI) adalah cara menghitung berat badan ideal berdasarkan tinggi dan berat badan. BMI juga dapat dibedakan berdasarkan usia.
        </p>
        <h2 className="faq-title">
          Apa itu Kalkulator BMI?
        </h2>
        <p>
          Kalkulator BMI adalah alat untuk mengidentifikasi apakah berat badan kamu termasuk dalam kategori ideal atau tidak.
        </p>
        <p>
          Kalkulator ini dapat digunakan oleh seseorang yang berusia 20 tahun ke atas.
        </p>
        <p>
          Perlu diingat bahwa Kalkulator BMI ini tidak dapat diaplikasikan untuk ibu hamil dan anak-anak karena standar BMI yang berbeda.
        </p>
        <h2 className="faq-title">
          Hal yang perlu diperhatikan pada Kalkulator BMI:
        </h2>
        <ul className="faq-list">
          <li>
            Jika angka BMI berada di bawah 18.5, maka kamu memiliki berat badan rendah
          </li>
          <li>
            BMI Normal berada pada kisaran 18.5–22.9
          </li>
          <li>
            Jika angka BMI melebihi 23–24.9, maka kamu memiliki berat badan berlebih
          </li>
          <li>
            Jika angka BMI sudah melebihi angka 25, sebaiknya segera dilakukan penanganan untuk mencegah timbulnya penyakit
          </li>
        </ul>
      </div>
      <a href="/layanan/bmi" className="btn-kembali-faq">
        Kembali
      </a>
    </div>
    </>
  );
}
