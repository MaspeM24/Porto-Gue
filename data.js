/* =========================================================
   DATA PORTOFOLIO
   ========================================================= */

/* ---------- 1. Sertifikasi & Pelatihan ---------- */
// category: "pelatihan" | "sertifikasi" | "webinar"
const certifications = [
  {
    id: "cert-1",
    title: "Pelatihan Dasar Pemrograman Web",
    issuer: "Dicoding Academy",
    date: "2024-10",
    category: "pelatihan",
    thumbnail: "assets/logos/dicoding.webp",
    pdfUrl: "assets/certificates/Dicoding-Academy-Certificate.pdf",
    verifyUrl: ""
  },
  {
    id: "cert-2",
    title: "Sertifikasi Uji Kompetensi",
    issuer: "Teknik Komputer dan Jaringan",
    date: "2022-06",
    category: "sertifikasi",
    thumbnail: "assets/logos/sertifikasi.webp",
    pdfUrl: "assets/certificates/Uji-Kompetensi-TKJ.pdf",
    verifyUrl: ""
  },
  {
    id: "cert-3",
    title: "Workshop Administrasi Infrastruktur Jaringan dengan MikroTik",
    issuer: "Atswa Indonesia",
    date: "2021-04",
    category: "webinar",
    thumbnail: "assets/logos/atswa.webp",
    pdfUrl: "assets/certificates/atswa.pdf",
    verifyUrl: ""
  },
  {
    id: "cert-4",
    title: "Pengenalan Program Studi Sistem Pembangkit Energi",
    issuer: "PENS",
    date: "2020-06",
    category: "webinar",
    thumbnail: "assets/logos/pens.webp",
    pdfUrl: "assets/certificates/pens.pdf",
    verifyUrl: ""
  },
  {
    id: "cert-5",
    title: "Berkeliling Dunia  secara Virtual dengan Google Earth Education",
    issuer: "REFO",
    date: "2024-04",
    category: "webinar",
    thumbnail: "assets/logos/refo.webp",
    pdfUrl: "assets/certificates/Google-Earth.pdf",
    verifyUrl: ""
  },
  {
    id: "cert-6",
    title: "Proyek Integrasi Bahasa dan Art",
    issuer: "REFO",
    date: "2020-04",
    category: "webinar",
    thumbnail: "assets/logos/refo.webp",
    pdfUrl: "assets/certificates/Integrasi-Bahasa.pdf",
    verifyUrl: ""
  },
  {
    id: "cert-7",
    title: "Mata Pelajaran IPA",
    issuer: "REFO",
    date: "2020-04",
    category: "webinar",
    thumbnail: "assets/logos/refo.webp",
    pdfUrl: "assets/certificates/Pelajaran-IPA.pdf",
    verifyUrl: ""
  },
  {
    id: "cert-8",
    title: "Rubrik Penilaian di Google Classroom",
    issuer: "REFO",
    date: "2020-04",
    category: "webinar",
    thumbnail: "assets/logos/refo.webp",
    pdfUrl: "assets/certificates/Rubrik-Penilaian.pdf",
    verifyUrl: ""
  },
];

/* ---------- 2. Pengalaman (kerja / magang / organisasi) ---------- */
// type: "kerja" | "magang" | "organisasi"
const experiences = [
  {
    id: "exp-1",
    type: "kerja",
    role: "Teknisi printer",
    company: "CV Media Computer, Jombang",
    period: "Jun 2022 – Okt 2026",
    description: "Melakukan perbaikan dan pemeliharaan printer untuk memastikan perangkat berfungsi dengan baik dan optimal. Selain itu, memberikan layanan dukungan teknis kepada pelanggan dengan menjelaskan permasalahan yang terjadi serta memberikan solusi yang tepat.",
    logo: "assets/logos/media.webp",
    documentations: [
      { image: "assets/images/print4.webp", caption: "Perbaikan Printer" },
      { image: "assets/images/print6.webp", caption: "Perbaikan Printer" },
      { image: "assets/images/print5.webp", caption: "Perbaikan Printer" },
      { image: "assets/images/print.webp", caption: "Perbaikan Printer" },
      { image: "assets/images/print2.webp", caption: "Perbaikan Printer" },
      { image: "assets/images/print3.webp", caption: "Perbaikan Scanner Brother DS 640 " },
    ],
  },
  {
    id: "exp-2",
    type: "kerja",
    role: "Pemateri Ekstrakurikuler Perbaikan Printer",
    company: "SMK Dwija Bhakti 1 Jombang",
    period: "Okt 2026",
    description: "Diundang sebagai pemateri ekstrakurikuler perawatan dan perbaikan printer di SMK Dwija Bhakti 1 Jombang, dengan materi meliputi pengenalan jenis-jenis printer, perawatan perangkat, troubleshooting, diagnosis kerusakan, pembongkaran dan pemasangan kembali komponen, serta praktik perbaikan printer secara langsung.",
    logo: "assets/logos/db.webp",
    documentations: [
      { image: "assets/images/pemateri.webp", caption: "Kegiatan Pembelajaran" },
      { image: "assets/images/pemateri2.webp", caption: "Kegiatan Pembelajaran" },
      { image: "assets/images/pemateri3.webp", caption: "Kegiatan Pembelajaran" },
      { image: "assets/images/pemateri4.webp", caption: "Kegiatan Pembelajaran" },
    ],
  },
  {
    id: "exp-3",
    type: "magang",
    role: "Website Development & Digital Operations Intern",
    company: "KITA Bhinneka Tunggal Ika",
    period: "Agu 2025 – Okt 2025",
    description: "Melakukan evaluasi dan redesign tampilan website KITA Bhinneka untuk meningkatkan pengalaman pengguna serta menjaga konsistensi identitas organisasi. Bertanggung jawab memperbarui dan menata konten website berdasarkan materi yang disediakan oleh tim, mengelola aspek teknis dasar dan elemen visual website, serta mendukung administrasi digital, termasuk proses pengajuan Google for Nonprofits melalui persiapan dokumen dan koordinasi persyaratan.",
    logo: "assets/logos/kita.webp",
    attachments: [
      { label: "Sertifikat Magang", pdfUrl: "assets/certificates/KITA-Bhinneka-Tunggal-Ika.pdf" },
    ]
  },
  {
    id: "exp-5",
    type: "organisasi",
    role: "Koordinator Divisi Media",
    company: "KDLK Desa Nglebak",
    period: "Apr 2025 – Jun 2025",
    description: "Mengelola konten visual dan dokumentasi kegiatan kuliah di luar kampus (KDLK).",
    logo: "assets/logos/kdlk.webp",
    documentations: [
      { image: "assets/images/kdlk.webp", caption: "IG : kdlk_nglebak04" },
    ],
    attachments: []
  },
  {
    id: "exp-4",
    type: "prakerin",
    role: "Maintenance",
    company: "PT Telekomunikasi Indonesia, Tbk. Witel Sidoarjo",
    period: "Jan 2021 – Feb 2021",
    description: "Melakukan pemeliharaan dan penanganan gangguan jaringan untuk memastikan konektivitas tetap optimal, termasuk melakukan penyambungan kabel fiber optik serta membantu teknisi dalam proses pemeliharaan, pemeriksaan, dan troubleshooting jaringan secara langsung di lapangan.",
    logo: "assets/logos/telkom.webp",
    documentations: [
      { image: "assets/images/pkl.webp", caption: "Kegiatan PKL" },
      { image: "assets/images/pkl2.webp", caption: "Kegiatan PKL" },
      { image: "assets/images/pkl3.webp", caption: "Kegiatan PKL" },
      { image: "assets/images/pkl4.webp", caption: "Kegiatan PKL" },
      { image: "assets/images/pkl5.webp", caption: "Kegiatan PKL" },
      { image: "assets/images/pkl6.webp", caption: "Kegiatan PKL" },
      { image: "assets/images/pkl7.webp", caption: "Kegiatan PKL" },
    ],
    attachments: [
      { label: "Sertifikat Magang", pdfUrl: "assets/certificates/Prakerin.pdf" },
    ]
  },
];