=====================================================================  
**DOKUMEN KEBUTUHAN PRODUK (PRD) — N3KR0L0G1**  
=====================================================================

# **PRODUCT REQUIREMENTS DOCUMENT (PRD)**

> **NOTE** Implementation uses only plain HTML, CSS, and vanilla JavaScript – no frameworks, libraries, or external CDNs.

## *N3KR0L0G1 — Lembaran Memorial Kata yang Telah Berpulang*

**STATUS: TERIMPLEMENTASI & TERVERIFIKASI (v1.0 Final FSC)**

| Komponen | Detail |
| :---- | :---- |
| **Nama Produk** | N3KR0L0G1 |
| **Versi Dokumen** | v1.0 (Produksi / Terimplementasi) |
| **Arsitektur** | Broadsheet Newspaper Web (HTML5 Semantik, Tiga Serangkai CSS, Vanilla JS) |
| **Disusun oleh** | Tim Pengembang & Kurator |
| **Untuk** | Final Submission Festival Sains & Creator (FSC) 2026 / Publik |
| **Tanggal Pembaruan** | 24 Oktober 2026 |
| **Dokumen Terkait** | Notulen Rapat, Panduan Teknis & Repositori Sumber |

---

# 1. Ringkasan Produk (Overview)

N3KR0L0G1 adalah sebuah arsip digital memorial interaktif yang dirancang dalam format surat kabar cetak format lebar (*broadsheet newspaper*), khusus mengenang kata-kata bahasa Indonesia yang telah berhenti digunakan dalam percakapan sehari-hari maupun ruang publik. 

Bukan kamus konvensional. Bukan basis data leksikal dingin. Bukan pula aplikasi gamifikasi bahasa. N3KR0L0G1 hadir sebagai ruang kontemplasi dan penghormatan editorial, mencatat kapan sebuah lema lahir, kapan terakhir kali terlihat di ruang publik, alasan kepergiannya, kata turunan yang ditinggalkan, serta kutipan perpisahan dari naskah sastra atau pidato bersejarah.

Dalam perkembangannya, proyek ini menggabungkan integritas leksikografis dengan eksplorasi tipografi kinetik variabel berstandar tinggi (mengadopsi estetika koran fisik modern editorial ala *The Jakarta Post*, *ShockingMike*, dan *Kern Society*). N3KR0L0G1 menyajikan dua mode perenungan: **Edisi Pagi** (kertas cetak koran alami) dan **Edisi Malam** (lembaran khidmat kontras tinggi), berjalan 100% tanpa dependensi eksternal, tanpa pelacak, dan ramah aksesibilitas web (WCAG 2.2 AA).

---

# 2. Tujuan & Sasaran (Goals)

## 2.1 Tujuan Utama (Primary Goal)
**Menciptakan ruang memorial digital bertaraf editorial broadsheet yang mendokumentasikan kepergian kata-kata Indonesia secara terhormat, faktual, dan puitis-terukur, menyadarkan publik bahwa bahasa terus mengalami kepunahan senyap tanpa seremoni perpisahan.**

## 2.2 Sasaran Spesifik (Specific Goals)

### Sasaran 1 — Membangun Kesadaran Skala Kehilangan Bahasa
- **Target:** Pengunjung menyadari bahwa hilangnya kosakata bukan anomali kebetulan, melainkan proses pergantian generasi dan dominasi serapan asing.
- **Implementasi Produk:** Pita berita telegraf (*Warta Telegraf Pusat*) menyajikan data faktual: 11 bahasa daerah punah, puluhan kritis, serta laju 5–10% kosakata arkais KBBI yang tergeser oleh serapan populer.

### Sasaran 2 — Transformasi Pembaca Menjadi Pelayat
- **Target:** Membangun ikatan emosional dan rasa takzim pengunjung terhadap kata-kata yang diarsipkan.
- **Implementasi Produk:** Format obituari personal (nama lema, tahun pertama tercatat, tahun terakhir terlihat, penyebab kematian, dan kutipan perpisahan).

### Sasaran 3 — Tipografi Kinetik Adaptif & Living Memorial
- **Target:** Kata-kata terasa "hampir hidup" melalui variabel font multi-axis tanpa merusak keterbacaan naskah.
- **Implementasi Produk:** Judul kinetik raksasa `N3KR0L0G1` dengan penggaris interaktif 12-segmen, kartu spesimen variabel interaktif, serta transisi gerak masuk yang halus (*smooth entrance*).

### Sasaran 4 — Standar Anti-AI & Integritas Dokumen Fisik
- **Target:** Menolak visual SaaS generik (bento card melayang, gradasi ungu, glassmorphism, sudut membulat berlebihan).
- **Implementasi Produk:** Sudut tajam 0px, garis cetak hairline 1px solid, teks multi-kolom koran, drop cap klasik, dan kurasi teks manusiawi bebas klise AI (*anti-AI slop*).

## 2.3 Non-Goals (Hal yang Ditolak Secara Sengaja)
- **Bukan Kamus Umum / Penerjemah:** Tidak menyediakan definisi kaku kamus atau translasi multi-bahasa instan.
- **Tanpa Fitur Sosial / Viralitas:** Tidak ada tombol bagikan media sosial, penghitung jumlah pengunjung, komentar debat, atau like.
- **Tanpa Gamifikasi / Kuis:** Kehilangan bahasa tidak diperlakukan sebagai bahan permainan tebak kata.
- **Tanpa Backend / Database Runtime:** Bebas server runtime, bebas pelacakan pengguna, dan bebas cookie/iklan pihak ketiga.

---

# 3. Pengguna & Peran (Users & Roles)

Situs berjalan sebagai aplikasi web statis murni tanpa sistem autentikasi login:

| Peran | Deskripsi | Hak Akses & Kebutuhan |
| :---- | :---- | :---- |
| **Pengunjung Anonim (Pelayat)** | Pengguna publik umum yang menjelajahi lembaran memorial. | Membaca mimbar utama, menggeser penggaris kinetik, menelusuri katalog 15 lema, menyaring dekade, mengganti Edisi Pagi/Malam, dan mengklik logo untuk memuat ulang ke puncak. |
| **Pengguna Aksesibilitas** | Pengguna pembaca layar (*screen reader*), pengguna keyboard, atau pengguna dengan preferensi gerak berkurang (*prefers-reduced-motion*). | Melewati navigasi via *skip-link*, navigasi penuh via Tab/Enter/Panah Keyboard, keterbacaan teks kontras tinggi, dan animasi kinetik otomatis mati jika mode gerak berkurang aktif. |
| **Kurator Editorial** | Tim yang mengelola naskah dan basis kebenaran lema. | Mengelola berkas `js/data.js` secara langsung (*content-as-code*), memverifikasi data historis KBBI dan rujukan sastra sebelum dipublikasikan. |

---

# 4. Ruang Lingkup Aktual Produk (Current Scope & Features)

N3KR0L0G1 telah berhasil diimplementasikan penuh dengan komponen arsitektur berikut:

### 4.1 Bilah Navigasi Broadsheet (`B1L4H N4V1G4S1`)
- **Logo Vektor Cetak (`[NK] N3KR0L0G1`):** Ikon surat kabar SVG terpotong rapi dengan stempel aksen merah terakota. Berfungsi sebagai tombol muat ulang (*reload*) bersih yang selalu mengembalikan pembaca ke puncak halaman.
- **Navigasi Cepat:** Tautan langsung ke empat zona halaman (*Obituari*, *Katalog Lema*, *Perenungan*, *Kolofon*).
- **Laci Menu Responsif:** Panel menu pop-up untuk layar ponsel/tablet dengan tombol `[Menu]` dan `[Tutup]` serta dukungan tombol Escape.
- **Sakelar Edisi Pagi / Malam:** Tombol stempel edisi yang selalu terlihat di bilah atas baik desktop maupun layar gawai.

### 4.2 Panggung Pembuka Hero Broadsheet (`P4NGGUNG P3MBUK4 H3R0`)
- **Baris Metadata:** Arsip Leksikografi Digital / 15 Lema / 5 Dekade.
- **Badan Hero:** Tagline editorial *"Obituari memorial kata yang telah berpulang. Merawat ingatan bahasa dalam hening."* berdampingan dengan tombol CTA *"Buka Katalog Lema"* dan petunjuk gulir lembaran.
- **Mistar Penggaris 12-Segmen:** Penggaris pembagian kolom broadsheet dengan penanda merah interaktif yang dapat digeser (*draggable/touchable*) untuk memanipulasi bobot huruf.
- **Judul Kinetik Raksasa `N3KR0L0G1`:** Dibangun dengan font variabel multi-axis *Roboto Flex*, merespons kursor mouse dan geseran mistar secara lentur.
- **Animasi Masuk Halus (*Smooth Entrance*):** Transisi pemunculan judul dan gelombang kinetik (*kinetic entrance wave*) yang mengalun mulus saat halaman pertama kali dimuat atau di-refresh.

### 4.3 Warta Telegraf Pusat (`W4RT4 T3L3GR4M PUSAT`)
- Pita telegraf digital bergerak (*ticker loop*) berisi maklumat berkala statistik kepunahan bahasa daerah dan dinamika perbendaharaan kata Indonesia.

### 4.4 Mimbar Obituari Utama Dinamis (`S3Ct10N A`)
- **Panggung Editorial Tunggal:** Tempat satu lema ditampilkan secara megah dengan judul serif *Fraunces* raksasa, fonetik mesin tik, metadata lengkap (*Catatan Biografis Kata*), dan kutipan perpisahan sastra.
- **Kendali Mimbar:** Tombol Sebelumnya/Berikutnya, navigasi panah keyboard (← / →), serta mistar kemajuan 15 lema (*segmented dash gauge*).
- **Sinkronisasi Otomatis:** Perubahan lema di mimbar otomatis memperbarui status pembaca layar dan hash URL secara hening.

### 4.5 Tajuk Rencana Editorial (`S3Ct10N B1`)
- Tiga kolom naskah editorial bergaya surat kabar klasik (*The Jakarta Post*) yang mengulas urgensi kepunahan kata dari sudut pandang sosiolinguistik, sejarah, dan psikologis.

### 4.6 Spesimen Kartu Leksikal (`S3Ct10N B2`)
- Tiga kartu spesimen variabel (*ShockingMike typefaces cards*) yang mendemonstrasikan kelenturan tipografi:
  1. *Fraunces* (Serif Editorial Obituari)
  2. *Roboto Flex* (Sans Broadsheet Elastis)
  3. *Recursive* (Mono Leksikografis Mesin Tik)
- Dilengkapi tombol kendali spesimen hidup (*Animate/Hold*) dan tombol angkat lema ke mimbar utama.

### 4.7 Direktori Katalog 15 Lema (`S3Ct10N B`)
- **Penyaring Dekade:** Tombol filter *Semua Dekade*, *1970-an*, *1980-an*, *1990-an*, *2000-an*, dan *2010-an*.
- **Aksi Acak:** Tombol *Pilih Obituari Acak* yang otomatis mengocok, membuka kartu, dan memusatkannya ke layar.
- **Akordeon Semantik:** 15 entri lema lengkap menggunakan elemen `<details>` dan `<summary>` murni (dapat dibuka dan dibaca sempurna bahkan tanpa JavaScript).
- **Kartu Lema Adaptif:** Kartu dengan mode terbalik (*inverted card*) saat dipilih, memastikan kontras sempurna baik pada Edisi Pagi maupun Edisi Malam.

### 4.8 Perenungan Pelayat & Kolofon Cetak (`S3Ct10N C`)
- Maklumat penutup editorial, kisi ledger tabular empat zona mikro data (Metodologi, Kurasi, Tipografi, Etika), tanda meterai raksasa (*wordmark watermark*), dan tombol kembali ke puncak lembaran.

---

# 5. Desain Visual & Sistem Token Tipografi

## 5.1 Filosofi Lembaran Koran Broadsheet
- **Anti-SaaS / Anti-AI Slop:** Menghindari sudut melengkung besar, bayangan lembut melayang (*drop shadow*), dan warna neon. Digantikan oleh sudut 0px tajam (*knife cut*), garis pemisah 1px solid tegas, dan ruang kosong bernapas (*whitespace*).
- **Tekstur Serat Kertas:** Lapisan *paper grain overlay* fisik berbasis SVG noise berdaya render ringan.

## 5.2 Skema Warna Dua Edisi
- **Edisi Pagi (Default):**
  - Latar Kertas: `#EFEBE3` (kertas koran hangat alami)
  - Kartu & Kotak: `#E8E3D9`
  - Tinta Teks: `#0E0E0E` (hitam arang pekat)
  - Garis Batas: `#0E0E0E` (tegas) dan `#8E8E93` (garis bantu halus)
  - Aksen Redaksi: `#FF3B1A` (merah terakota vermilion)
- **Edisi Malam (Night Edition):**
  - Latar Kertas: `#161614` (arang malam khidmat)
  - Kartu: `#1E1D1A`
  - Tinta Teks: `#F4F0EA` (tinta krem cerah)
  - Kartu Terpilih: `#FFFFFF` (putih murni kontras tinggi dengan teks gelap `#161614`)
  - Aksen Redaksi: `#FF4D2D`

## 5.3 Trio Font Variabel Lokal (Tanpa CDN Pihak Ketiga)
Semua berkas font di-hosting mandiri di direktori lokal `./fonts/` dalam format kompresi modern `WOFF2`:
1. **Fraunces Variable:** Font serif utama untuk judul lema, nama koran, dan naskah obituari.
2. **Roboto Flex Variable:** Font sans dengan kontrol lebar dan bobot dinamis untuk judul `N3KR0L0G1` dan tajuk.
3. **Recursive Variable:** Font monospace/sans beraksen mesin tik untuk tanggal, metadata, filter chip, dan kolofon.

---

# 6. Arsitektur Teknis & Standar Koding

## 6.1 Struktur Berkas Repositori
```text
N3KR0L0G1/
├── index.html              # Markah semantik koran broadsheet lengkap (pre-rendered)
├── favicon.svg             # Ikon surat kabar vektor mandiri
├── css/
│   ├── tokens.css          # Desain token 3-tier, reset modern, utilitas font
│   ├── layout.css          # Kisi koran 12-kolom, panggung hero, responsive queries
│   └── components.css      # Komponen akordeon, mistar, spesimen, tema malam
├── js/
│   ├── data.js             # Basis kebenaran 15 lema kata dan validasi internal
│   ├── render.js           # Mesin kinetik hero, simulator spesimen, drawer navigasi
│   └── main.js             # Interaktivitas inti (tetap di bawah 100 baris kode)
├── fonts/                  # Berkas WOFF2 lokal Fraunces, Roboto Flex, dan Recursive
└── docs/
    └── N3KR0L0G1.md        # Dokumen Kebutuhan Produk (PRD) komprehensif
```

## 6.2 Batasan Kualitas Koding FSC
1. **Disiplin JavaScript Ringkas:**
   - Berkas `js/main.js` dirancang ringkas dan padat, terjaga secara ketat di bawah 100 baris (saat ini 97 baris) untuk membuktikan kemahiran logika DOM native tanpa bloatware.
2. **Kerapian Komentar Bebas Kurung (*Zero Parentheses in Comments*):**
   - Seluruh komentar pada berkas CSS, JS, dan HTML 100% bebas dari tanda kurung `()`, menjaga kebersihan parsing regex dan audit otomatis.
3. **Komentar Santai & Bukan Puitis:**
   - Menghilangkan komentar berbunga-bunga, digantikan catatan pengembang santai dan jelas, dengan tetap mempertahankan penamaan leet heading asli (`B1L4H N4V1G4S1...`, `P4NGGUNG P3MBUK4 H3R0`, dll.).
4. **Bebas Karakter Terlarang:**
   - Bebas karakter bullet `•`, pipa `|`, em-dash `—`, dan titik dua di teks tampil, mematuhi standar desain editorial murni.
5. **Progressive Enhancement (Bisa Diakses Tanpa JS):**
   - Saat JavaScript dimatikan, seluruh 15 lema tetap dapat dibuka dan dibaca lengkap karena struktur akordeon menggunakan `<details>` semantik native browser.

---

# 7. Model Data 15 Lema Kata (`js/data.js`)

Model data leksikal terpusat pada objek `WORD_ENTRIES` dengan skema tervalidasi:

| Field | Tipe | Deskripsi |
| :---- | :---- | :---- |
| `id` | string | Pengenal unik lema (mis. `"renjana"`, `"tetiron"`). |
| `name` | string | Nama lema yang berpulang. |
| `ipa` | string | Transkripsi fonetis pelafalan kata. |
| `pos` | string | Kelas kata (Nomina, Verba, Adjektiva). |
| `desc` | string | Deskripsi memorial dan definisi esensial kata. |
| `yearFirst` | number | Tahun pertama kali tercatat dalam pustaka tertulis. |
| `yearLast` | number | Tahun terakhir terlihat aktif di ruang publik. |
| `cause` | string | Penyebab kepergian/kematian kata (mis. digantikan istilah asing/modern). |
| `survived` | string | Kosakata turunan yang masih bertahan atau padanan masa kini. |
| `quote` | string | Kutipan sastra atau arsip bersejarah penggunaan kata. |
| `source` | string | Sumber rujukan sastrawan atau media cetak asli. |
| `decade` | string | Kategori dekade kematian (`"1970-an"` s.d. `"2010-an"`). |

---

# 8. Kebutuhan Non-Fungsional (NFR) Terverifikasi

1. **Performa Web (Core Web Vitals):**
   - **LCP ≤ 1.2 detik:** Font lokal dimuat instan tanpa round-trip DNS eksternal, teks hero pre-rendered.
   - **CLS = 0:** Penataan wadah hero berukuran eksplisit menggunakan `container-query` dan rasio tinggi baris presisi.
   - **INP ≤ 50 ms:** Logika pergerakan kinetik dijalankan pada siklus `requestAnimationFrame` dengan peredam pegas fisika (*spring damping*).
2. **Aksesibilitas (WCAG 2.2 AA):**
   - Rasio kontras teks terpenuhi minimum 4.5:1 pada kedua tema (Pagi dan Malam).
   - Indikator fokus `:focus-visible` dengan outline aksen merah tegas untuk navigasi keyboard.
   - Area klik/sentuh tombol navigasi dan filter chip memenuhi standar minimum 44×44 CSS px.
   - Deteksi `@media (prefers-reduced-motion: reduce)` yang mematikan seluruh transisi berat dan gelombang kinetik secara instan.
3. **Privasi & Keamanan:**
   - **Nol Pelacakan:** Tanpa cookies, tanpa telemetri analitik, tanpa Google Fonts API (zero IP leak).
   - Preferensi edisi malam hanya disimpan secara lokal di `localStorage` peramban pengguna.
   - Dukungan file `_headers` untuk deklarasi CSP (*Content Security Policy*) ketat pada Cloudflare Pages.

---

# 9. Penyesuaian Resolusi & Keputusan Desain (Design Resolutions)

Berikut adalah status mutakhir dari keputusan arsitektur proyek:

| Pertanyaan / Isu | Status | Keputusan & Solusi yang Diambil |
| :---- | :---- | :---- |
| **Penyediaan Font Lokal** | **TERSELESAIKAN** | Menggunakan 3 font variabel lokal (*Fraunces*, *Roboto Flex*, *Recursive*) format WOFF2 di `./fonts/`, mematuhi privasi mutlak. |
| **Ketersediaan Edisi Malam** | **TERSELESAIKAN** | Disediakan tombol sakelar tema di bilah atas. Kartu terpilih di edisi malam otomatis terbalik menjadi putih solid (`#FFFFFF`) agar teks terbaca sangat jelas. |
| **Tampilan Responsif Mobile** | **TERSELESAIKAN** | Tata letak hero pada mobile diubah menjadi flex-kolom fleksibel; tombol tema diletakkan berdampingan dengan tombol Menu di navbar atas. |
| **Perilaku Refresh Halaman** | **TERSELESAIKAN** | Diatur `history.scrollRestoration = 'manual'` dan `window.scrollTo(0, 0)` sehingga refresh selalu mengulang pengalaman dari puncak lembaran. |
| **Interaksi Klik Logo** | **TERSELESAIKAN** | Mengklik `[NK] N3KR0L0G1` di navbar atas membersihkan hash URL dan memuat ulang halaman (*clean refresh*) ke puncak. |
| **Animasi Masuk Hero** | **TERSELESAIKAN** | Ditambahkan transisi pemunculan lembut `hero-wm-in` dan gelombang kinetik huruf `playEntranceWave()`, menghapus kesan kaku saat situs dibuka. |
| **Batas Baris Script Utama** | **TERSELESAIKAN** | Berkas `js/main.js` dioptimalkan tetap di bawah 100 baris (97 baris kode aktif). |
| **Penyederhanaan Komentar** | **TERSELESAIKAN** | Komentar kode diubah dari gaya puitis menjadi catatan teknis santai, dengan 0 tanda kurung di seluruh berkas. |

---

# 10. Glosarium Singkat

- **Broadsheet:** Format ukuran surat kabar cetak fisik tradisional paling lebar; menjadi metafora dasar tata letak N3KR0L0G1.
- **Lema:** Butir masukan kata pokok dalam kamus yang menjadi subjek dalam obituari.
- **Font Variabel (Variable Font):** Teknologi font modern di mana bobot (*weight*), lebar (*width*), dan parameter tipografi lain dapat diubah secara cair pada satu berkas font tunggal.
- **Progressive Enhancement:** Filosofi pengembangan web yang memastikan dokumen HTML dasar dapat dibaca dan dioperasikan 100% tanpa JavaScript, kemudian ditingkatkan kemampuannya ketika JavaScript aktif.
- **Edisi Malam:** Adaptasi tema gelap koran broadsheet tanpa merusak nuansa kertas cetak dan keterbacaan teks.
