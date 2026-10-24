PRODUCT REQUIREMENTS DOCUMENT (PRD)
N3KR0L0G1
STATUS: FINAL — TERIMPLEMENTASI & TERVERIFIKASI (v1.0)

| Nama Produk | N3KR0L0G1 — Arsip Leksikografi Digital Broadsheet |
| :--- | :--- |
| Versi Dokumen | v1.0 (Produksi / Terimplementasi) |
| Disusun oleh | Tim Pengembang & Kurator |
| Untuk | Final Submission Festival Sains & Creator (FSC) 2026 / Publik |
| Tanggal | 24 Oktober 2026 |
| Dokumen Terkait | Notulen Rapat Pengembang, Repositori Sumber Kode |

---

## 1. Ringkasan Produk (Overview)

Bahasa Indonesia kehilangan puluhan kosakata arkais setiap dekade — bukan karena dilupakan sepenuhnya, melainkan karena tak pernah ada ruang peringatan yang layak. Kata-kata seperti *tetiron*, *renjana*, atau *djelata* menghilang senyap tanpa seremoni perpisahan, tenggelam di bawah serapan asing dan penyederhanaan gaya bicara modern. Hingga saat ini belum ada arsip digital yang mendokumentasikan kepergian kata-kata tersebut secara terhormat, faktual, dan bermuatan editorial.

N3KR0L0G1 hadir sebagai arsip digital memorial interaktif berbentuk surat kabar cetak format lebar (*broadsheet newspaper*). Sistem ini dibangun sepenuhnya dari HTML5 semantik, CSS terstruktur tiga berkas, dan Vanilla JavaScript murni — tanpa framework, tanpa CDN eksternal, tanpa backend runtime. Platform ini menyajikan 15 obituari lema beserta metadata historis lengkap, dua mode perenungan (Edisi Pagi dan Edisi Malam), tipografi kinetik variabel multi-axis interaktif, dan katalog yang dapat disaring berdasarkan dekade kepunahan kata.

---

## 2. Tujuan & Sasaran (Goals)

- Mendokumentasikan kepergian kata-kata bahasa Indonesia secara terhormat, faktual, dan puitis-terukur dalam format arsip editorial yang tahan waktu.
- Menyadarkan publik bahwa kepunahan kosakata adalah proses nyata dan berlangsung senyap — bukan anomali, melainkan konsekuensi pergantian generasi dan dominasi serapan asing.
- Mendemonstrasikan kemampuan tipografi kinetik variabel font multi-axis sebagai medium memorial yang hidup dan responsif terhadap interaksi pengguna.
- Menolak standar visual SaaS generik (bento card, glassmorphism, gradasi ungu, sudut membulat) dengan menegakkan estetika broadsheet editorial yang konsisten dan berintegritas tinggi.
- Membuktikan kemahiran rekayasa web murni: sistem berjalan 100% dari berkas statis lokal, aksesibel tanpa JavaScript, dan memenuhi standar WCAG 2.2 AA.
- Menyediakan fondasi arsitektur *content-as-code* yang dapat diperluas oleh kurator editorial tanpa ketergantungan pada CMS atau database eksternal.

---

## 3. Pengguna & Peran (Users & Roles)

| Peran | Deskripsi & Hak Akses |
| :--- | :--- |
| **Pengunjung Anonim (Pelayat)** | Pengguna publik umum. Dapat membaca mimbar obituari, menggeser penggaris kinetik, menelusuri katalog 15 lema, menyaring berdasarkan dekade, mengganti Edisi Pagi/Malam, dan mengklik logo untuk memuat ulang halaman ke puncak. |
| **Pengguna Aksesibilitas** | Pengguna dengan pembaca layar, navigasi keyboard penuh, atau preferensi *prefers-reduced-motion*. Dapat melewati navigasi via skip-link, menjelajah seluruh konten via Tab/Enter/Panah Keyboard, dan menikmati animasi kinetik yang otomatis dinonaktifkan sesuai preferensi sistem. |
| **Kurator Editorial** | Tim internal yang mengelola basis data kata. Dapat mengubah dan menambah lema langsung di `js/data.js` (*content-as-code*), memverifikasi data historis KBBI dan rujukan sastra sebelum dipublikasikan. Tidak ada antarmuka admin — semua pengelolaan dilakukan di level berkas sumber. |

---

## 4. Ruang Lingkup (Scope)

### 4.1 Termasuk (MVP)

- Bilah navigasi broadsheet responsif dengan laci menu mobile, sakelar Edisi Pagi/Malam, dan logo sebagai tombol reload ke puncak.
- Panggung hero broadsheet dengan tagline editorial, tombol CTA katalog, penggaris 12-segmen interaktif, judul kinetik `N3KR0L0G1`, dan animasi masuk halus.
- Pita telegraf berita bergerak berisi statistik kepunahan bahasa daerah Indonesia.
- Mimbar obituari utama dinamis: tampilan tunggal satu lema dengan navigasi Sebelumnya/Berikutnya, navigasi keyboard, dan mistar kemajuan 15 lema.
- Tiga kolom tajuk rencana editorial bergaya koran klasik.
- Tiga kartu spesimen font variabel interaktif dengan kendali Animate/Hold.
- Direktori katalog 15 lema dengan penyaring dekade, tombol acak, dan akordeon semantik berbasis `<details>` native.
- Seksi perenungan pelayat dan kolofon cetak dengan kisi ledger mikro data.
- Dua skema warna: Edisi Pagi (kertas koran hangat) dan Edisi Malam (arang kontras tinggi), tersimpan di `localStorage`.

### 4.2 Di Luar Lingkup Awal / Fase Lanjutan

Lihat Bab 11. Fitur pencarian teks bebas antar lema, ekspor kartu obituari sebagai gambar, dan penambahan lema oleh publik via form tidak masuk MVP dan ditunda ke fase lanjutan.

---

## 5. Asumsi & Batasan (Assumptions & Constraints)

- **[Asumsi Pengembang]** Situs diakses via peramban modern yang mendukung CSS Custom Properties, Variable Fonts, dan `<details>` semantik native (Chrome 88+, Firefox 87+, Safari 14+).
- **[Asumsi Pengembang]** Distribusi dilakukan via hosting statis (Cloudflare Pages atau setara) — tidak memerlukan runtime server, database, atau proses build.
- Seluruh font (Fraunces, Roboto Flex, Recursive) di-hosting mandiri dalam format WOFF2 di direktori `./fonts/` — tidak ada ketergantungan CDN pihak ketiga maupun Google Fonts API.
- Berkas `js/main.js` wajib dijaga di bawah 100 baris kode aktif sebagai bukti kemahiran logika DOM native.
- Seluruh komentar di CSS, JS, dan HTML wajib bebas dari tanda kurung `()` untuk menjaga kebersihan audit otomatis.
- Sistem berjalan penuh dari protokol `file://` (tanpa server lokal) maupun dari server HTTP — kompatibilitas keduanya wajib dijaga.
- Konten lema bersifat statis dan dikurasi manual; tidak ada mekanisme penambahan konten secara dinamis dari sisi pengguna pada versi ini.

---

## 6. Kebutuhan Fungsional (Functional Requirements)

### 6.1 Pengunjung — Navigasi & Orientasi Halaman

| ID | Kebutuhan Fungsional | Prioritas |
| :--- | :--- | :--- |
| NAV-1 | Pengunjung dapat mengklik logo `[NK] N3KR0L0G1` di bilah atas untuk melakukan reload halaman bersih dan kembali ke puncak lembaran. | Wajib |
| NAV-2 | Pengunjung dapat membuka laci menu mobile dengan tombol `[MENU]` dan menutupnya via tombol `[TUTUP]` atau tombol Escape. | Wajib |
| NAV-3 | Pengunjung dapat mengklik tautan navigasi cepat menuju empat zona halaman: Obituari, Katalog Lema, Perenungan, dan Kolofon. | Wajib |
| NAV-4 | Sistem menampilkan sakelar Edisi Pagi/Malam yang selalu terlihat di bilah atas baik di desktop maupun layar gawai. | Wajib |

### 6.2 Pengunjung — Edisi & Tema

| ID | Kebutuhan Fungsional | Prioritas |
| :--- | :--- | :--- |
| TEMA-1 | Pengunjung dapat beralih antara Edisi Pagi dan Edisi Malam via tombol sakelar di bilah navigasi. | Wajib |
| TEMA-2 | Sistem menyimpan preferensi edisi ke `localStorage` sehingga pilihan bertahan saat halaman di-refresh atau dibuka kembali. | Wajib |
| TEMA-3 | Sistem menerapkan warna kartu terpilih yang terbalik otomatis (putih solid `#FFFFFF` dengan teks gelap) saat Edisi Malam aktif agar kontras tetap terbaca. | Wajib |

### 6.3 Pengunjung — Panggung Hero & Tipografi Kinetik

| ID | Kebutuhan Fungsional | Prioritas |
| :--- | :--- | :--- |
| HERO-1 | Sistem menampilkan animasi masuk halus saat halaman pertama dimuat: judul `N3KR0L0G1` muncul bertahap dengan gelombang kinetik per karakter. | Wajib |
| HERO-2 | Pengunjung dapat menggeser penggaris 12-segmen (drag mouse / swipe sentuh) untuk mengubah bobot tipografi judul kinetik secara real-time. | Wajib |
| HERO-3 | Judul kinetik merespons posisi kursor mouse di area hero dengan perubahan bobot dan lebar font secara lentur melalui siklus `requestAnimationFrame`. | Penting |
| HERO-4 | Sistem menonaktifkan seluruh animasi kinetik otomatis saat `prefers-reduced-motion: reduce` terdeteksi aktif di sistem pengguna. | Wajib |

### 6.4 Pengunjung — Mimbar Obituari Utama

| ID | Kebutuhan Fungsional | Prioritas |
| :--- | :--- | :--- |
| OBT-1 | Sistem menampilkan satu lema sekaligus di mimbar utama dengan judul serif raksasa, fonetik mesin tik, metadata biografis lengkap, dan kutipan perpisahan sastra. | Wajib |
| OBT-2 | Pengunjung dapat berpindah antar lema via tombol Sebelumnya dan Berikutnya di panel kendali mimbar. | Wajib |
| OBT-3 | Pengunjung dapat berpindah antar lema menggunakan tombol panah kiri/kanan pada keyboard. | Wajib |
| OBT-4 | Sistem memperbarui hash URL secara hening saat lema berganti agar tautan langsung ke lema tertentu dapat dibagikan. | Penting |
| OBT-5 | Sistem memperbarui status `aria-live` pembaca layar saat lema berganti agar pengguna aksesibilitas mendapat informasi terkini. | Wajib |

### 6.5 Pengunjung — Katalog 15 Lema

| ID | Kebutuhan Fungsional | Prioritas |
| :--- | :--- | :--- |
| KAT-1 | Pengunjung dapat menyaring katalog berdasarkan dekade: Semua Dekade, 1970-an, 1980-an, 1990-an, 2000-an, dan 2010-an. | Wajib |
| KAT-2 | Pengunjung dapat membuka dan menutup kartu lema secara individual via elemen `<details>` semantik native. | Wajib |
| KAT-3 | Pengunjung dapat menekan tombol *Pilih Obituari Acak* untuk memilih lema secara acak, membuka kartunya secara otomatis, dan menggulir layar ke kartu tersebut. | Penting |
| KAT-4 | Sistem menampilkan kartu dengan mode terbalik saat sebuah lema sedang aktif di mimbar, konsisten di kedua tema. | Wajib |
| KAT-5 | Seluruh 15 lema dapat dibuka dan dibaca lengkap tanpa JavaScript aktif, karena akordeon menggunakan `<details>` native browser. | Wajib |

### 6.6 Pengunjung — Spesimen Kartu Leksikal

| ID | Kebutuhan Fungsional | Prioritas |
| :--- | :--- | :--- |
| SPE-1 | Sistem menampilkan tiga kartu spesimen font variabel: Fraunces, Roboto Flex, dan Recursive, masing-masing dengan teks lema aktif. | Wajib |
| SPE-2 | Pengunjung dapat mengaktifkan animasi variabel font pada kartu spesimen via tombol *Animate* dan menghentikannya via tombol *Hold*. | Penting |
| SPE-3 | Pengunjung dapat mengangkat lema dari katalog ke mimbar utama via tombol di kartu spesimen. | Penting |

---

## 7. Alur Pengguna Utama (Key User Flows)

### 7.1 Pengunjung Membaca Obituari Kata

1. Pengunjung membuka halaman — animasi masuk hero berjalan halus, judul `N3KR0L0G1` muncul bertahap.
2. Pengunjung membaca tagline editorial di badan hero dan menekan tombol *Buka Katalog Lema*.
3. Halaman menggulir ke direktori katalog; pengunjung menekan filter dekade (misal: *1980-an*).
4. Sistem menyembunyikan lema di luar dekade tersebut dan menampilkan hanya yang relevan.
5. Pengunjung mengklik kartu lema — akordeon membuka, detail obituari lengkap terlihat.
6. Pengunjung menekan tombol *Angkat ke Mimbar* — lema berpindah ke panggung obituari utama.
7. Pengunjung membaca metadata biografis, kutipan sastra, dan informasi kepergian kata secara penuh.

### 7.2 Pengunjung Menjelajahi Penggaris Kinetik

1. Pengunjung berada di area hero, melihat penggaris 12-segmen di bawah badan teks.
2. Pengunjung menggeser penanda merah ke kanan — bobot font judul `N3KR0L0G1` meningkat secara cair.
3. Pengunjung menggeser ke kiri — bobot menurun, font menjadi ramping.
4. Di perangkat sentuh, gestur swipe horizontal pada penggaris bekerja identik dengan drag mouse.

### 7.3 Pengunjung Beralih Edisi

1. Pengunjung melihat tombol edisi di bilah navigasi (misal: *PAGI*).
2. Pengunjung menekan tombol — seluruh skema warna halaman berganti ke Edisi Malam seketika.
3. Sistem menyimpan preferensi ke `localStorage`; saat halaman di-refresh, edisi malam tetap aktif.
4. Kartu lema yang sedang terpilih otomatis berganti menjadi latar putih solid agar tetap terbaca.

### 7.4 Pengunjung Menavigasi Antar Lema via Keyboard

1. Pengunjung menekan tombol panah kanan `→` — mimbar berpindah ke lema berikutnya, hash URL diperbarui.
2. Pengunjung menekan `←` — kembali ke lema sebelumnya.
3. Pembaca layar mengumumkan nama lema baru via region `aria-live`.
4. Mistar kemajuan 15 lema di bawah kendali mimbar memperbarui posisi aktif.

### 7.5 Pengunjung Me-refresh Halaman

1. Pengunjung menekan F5 atau tombol reload peramban.
2. Sistem menjalankan `history.scrollRestoration = 'manual'` dan `window.scrollTo(0, 0)` saat load.
3. Halaman selalu kembali ke puncak lembaran, bukan ke posisi scroll terakhir.
4. Animasi masuk hero berjalan kembali dari awal — pengalaman dimulai ulang secara penuh.

---

## 8. Model Data (High-Level)

| Entitas | Field Utama | Keterangan |
| :--- | :--- | :--- |
| `WORD_ENTRY` | `id`, `headword`, `pronunciation`, `part_of_speech`, `definition`, `first_recorded`, `last_seen`, `last_seen_context`, `cause_of_death`, `farewell_quote`, `etymology`, `survived_by`, `curator_note`, `tags` | Objek utama lema. Satu entri per kata yang berpulang. Disimpan di `js/data.js` sebagai array objek JS literal. |
| `farewell_quote` | `text`, `source`, `year` | Sub-objek kutipan perpisahan yang tersemat dalam setiap `WORD_ENTRY`. |
| `SITE_META` | `title`, `tagline`, `edition`, `publication_date`, `rubric`, `curator_name`, `sources`, `colophon_note` | Metadata global lembaran terbitan. Dirender ke elemen header dan kolofon. |
| `UI_STATE` | `currentIndex`, `nightMode`, `activeDecade` | Status antarmuka runtime yang dikelola di memori JS dan sebagian disimpan di `localStorage`. Bukan entitas persisten — tidak ada database. |

Catatan: tidak ada entitas Fase Lanjutan pada model data saat ini. Jika fitur pencarian teks bebas atau penambahan lema oleh publik diimplementasikan, model data akan diperluas dengan entitas `SEARCH_INDEX` dan mekanisme pengiriman konten terpisah.

---

## 9. Kebutuhan Non-Fungsional (Non-Functional Requirements)

- **Performa:** LCP ≤ 1.2 detik via font lokal WOFF2 tanpa round-trip DNS; CLS = 0 via wadah hero berukuran eksplisit; INP ≤ 50 ms via loop `requestAnimationFrame` dengan peredam pegas fisika.
- **Responsivitas:** Mobile-first. Tata letak hero beralih ke flex-kolom pada layar ≤ 768px; tombol tema berdampingan dengan tombol menu di navbar; area sentuh minimum 44×44 CSS px.
- **Aksesibilitas:** Kontras teks minimum 4.5:1 pada kedua tema (WCAG 2.2 AA); skip-link ke konten utama; indikator fokus `:focus-visible` dengan outline aksen merah; seluruh animasi kinetik dinonaktifkan via `prefers-reduced-motion`.
- **Privasi:** Nol cookies pihak ketiga; nol telemetri analitik; nol request ke Google Fonts API. Satu-satunya data yang disimpan lokal adalah preferensi tema di `localStorage` pengguna sendiri.
- **Keamanan:** Dukungan berkas `_headers` untuk CSP ketat di Cloudflare Pages; tidak ada input pengguna yang diproses ke server; tidak ada form yang mengirim data.
- **Portabilitas:** Berjalan via protokol `file://` maupun HTTP tanpa konfigurasi tambahan; tidak memerlukan proses build, bundler, atau runtime Node.js.
- **Keterbacaan Kode:** `js/main.js` dijaga di bawah 100 baris; seluruh komentar bebas tanda kurung `()`; penamaan variabel dan fungsi konsisten dalam bahasa Inggris teknis.

---

## 10. Integrasi Pihak Ketiga

| Layanan | Fungsi | Catatan |
| :--- | :--- | :--- |
| KBBI Daring (kemdikbud.go.id) | Rujukan verifikasi definisi dan status arkais lema | Hanya sebagai sumber kurasi manual — tidak ada API call runtime |
| Arsip Majalah Poedjangga Baroe | Sumber kutipan sastra historis lema dekade 1930-an | Hanya sebagai referensi kurasi konten |
| Cloudflare Pages | Hosting statis dan penerapan CSP via `_headers` | Opsional; situs juga berjalan dari hosting statis lain atau lokal |

Sistem tidak melakukan request eksternal apapun saat runtime. Semua aset (font, ikon, CSS, JS) bersifat lokal dan terbundel dalam repositori.

---

## 11. Fitur Usulan / Fase Lanjutan

**Pencarian Teks Bebas.** Kotak pencarian yang memungkinkan pengunjung mencari lema berdasarkan kata kunci di definisi, etimologi, atau kutipan. Membutuhkan indeks pencarian client-side (mis. Fuse.js atau implementasi native serupa) tanpa backend.

**Ekspor Kartu Obituari.** Tombol untuk mengunduh kartu lema aktif sebagai gambar PNG bergaya editorial — cocok untuk dibagikan di media sosial tanpa melanggar prinsip anti-fitur-sosial (karena ekspor dilakukan oleh pengguna, bukan auto-share). Membutuhkan Canvas API atau library html2canvas.

**Penambahan Lema oleh Publik.** Form pengajuan kata yang berpulang oleh pembaca — dikirim ke sistem kurasi (mis. Airtable atau GitHub Issues sebagai inbox), kemudian diverifikasi secara manual sebelum masuk ke `js/data.js`. Membutuhkan endpoint atau integrasi form pihak ketiga.

**Edisi Arsip Terbitan Berkala.** Mekanisme penerbitan edisi baru secara periodik (mis. tiap bulan) dengan set lema berbeda, layaknya koran cetak yang terbit rutin. Membutuhkan sistem manajemen konten sederhana atau pemisahan berkas `data-edisi-N.js`.

---

## 12. Pertanyaan Terbuka / TBD

- Apakah lema akan terus ditambah secara berkala, atau 15 lema merupakan jumlah final untuk versi ini?
- Siapa kurator editorial resmi yang bertanggung jawab atas keakuratan data historis KBBI dan kutipan sastra?
- Apakah domain kustom akan digunakan untuk deployment publik, atau cukup subdomain Cloudflare Pages?
- Belum ada timeline resmi untuk pengerjaan fitur Fase Lanjutan (pencarian, ekspor, form pengajuan publik).
- Apakah versi cetak (PDF) dari lembaran koran digital ini diperlukan untuk kebutuhan fisik FSC?

---

## 13. Glosarium

- **Broadsheet:** Format ukuran surat kabar cetak fisik tradisional paling lebar — menjadi metafora dasar tata letak dan estetika N3KR0L0G1.
- **Lema:** Butir masukan kata pokok dalam kamus yang menjadi subjek obituari di sistem ini.
- **Font Variabel (Variable Font):** Teknologi font modern di mana bobot, lebar, dan parameter tipografi lain dapat diubah secara cair dalam satu berkas font tunggal via CSS atau JavaScript.
- **Progressive Enhancement:** Filosofi pengembangan web yang memastikan dokumen HTML dasar dapat dibaca dan dioperasikan 100% tanpa JavaScript, kemudian ditingkatkan kemampuannya saat JavaScript aktif.
- **Edisi Malam:** Adaptasi tema gelap koran broadsheet dengan latar arang `#161614` dan tinta krem `#F4F0EA` — tanpa merusak nuansa kertas cetak dan keterbacaan teks.
- **Kinetik (Kinetic Typography):** Tipografi yang bergerak atau merespons input pengguna secara real-time; diimplementasikan via `requestAnimationFrame` dan CSS font-variation-settings.
- **Content-as-Code:** Pendekatan pengelolaan konten di mana data lema disimpan langsung di berkas JavaScript (`js/data.js`) sebagai bagian dari repositori kode — tidak memerlukan CMS atau database terpisah.
- **LSP / arkais:** Lema Satu Penggunaan atau kata yang telah jarang atau tidak lagi digunakan di ruang publik dan percakapan sehari-hari — kategori utama kata yang diarsipkan N3KR0L0G1.

---

*Dokumen ini mencerminkan status implementasi final per 24 Oktober 2026 dan dapat diperbarui seiring perkembangan fase lanjutan.*
