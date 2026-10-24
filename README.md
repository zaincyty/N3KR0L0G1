# N3KR0L0G1

> Lembaran memorial digital untuk kata-kata bahasa Indonesia yang udah berpulang dan dihitamkan zaman loh yaa. Dicatat ala koran broadsheet cetak fisik, biar kata-kata legendaris ngga hilang gitu aja di ruang publik.!
<p align="left">
  <a href="index.html"><img src="https://img.shields.io/badge/HTML5-semantik_murni_rek-18181B?style=flat-square&logo=html5&logoColor=white" alt="html5 semantik" /></a>
  <a href="css/layout.css"><img src="https://img.shields.io/badge/CSS3-broadsheet_hairline-18181B?style=flat-square&logo=css3&logoColor=white" alt="css broadsheet" /></a>
  <a href="js/main.js"><img src="https://img.shields.io/badge/JavaScript-97_baris_tok-18181B?style=flat-square&logo=javascript&logoColor=white" alt="vanilla js" /></a>
  <a href="index.html"><img src="https://img.shields.io/badge/offline-file%3A%2F%2F_ready-18181B?style=flat-square&logo=firefoxbrowser&logoColor=white" alt="protokol offline" /></a>
  <a href="fonts/"><img src="https://img.shields.io/badge/fonts-lokal_woff2_no_cdn-18181B?style=flat-square&logo=googlefonts&logoColor=white" alt="font lokal" /></a>
  <a href="https://kbbi.kemdikbud.go.id"><img src="https://img.shields.io/badge/doksli-kbbi_v_kemdikbud-18181B?style=flat-square&logo=bookstack&logoColor=white" alt="doksli kbbi" /></a>
</p>

---

### ✦ Sekilas Proyek

Sekilas tentang project ini yaa: awalnya aku buat ini buat kebutuhan pribadi. Tapi alih-alih bikin website yang "asal jadi", aku malah kepikiran buat ngerawat kata-kata lama pake gaya koran broadsheet klasik yang dipadukan sama tipografi kinetik modern..

---

### ✦ Arsitektur & Struktur Berkas

Semua kodenya ditulis murni tanpa npm, tanpa framework impor dari luar, dan tanpa bootstrap. Beneran tinggal klik dua kali berkas `index.html`-nya langsung kebuka, lihat aja strukturnya di bawah:

```text
NEKROLOGI/
├── index.html              # Markah semantik koran broadsheet murni, ramah aksesibilitas
├── favicon.svg             # Logo stempel koran vektor [NK] mandiri
├── css/
│   ├── tokens.css          # Token desain 3-tier, reset modern, trio font lokal
│   ├── layout.css          # Grid 12-kolom broadsheet, panggung hero, responsive mobile
│   └── components.css      # Komponen akordeon, mistar kinetik, spesimen, edisi malam
├── js/
│   ├── data.js             # Kitab leksikografi 15 lema kanonikal 5 dekade lengkap
│   ├── render.js           # Mesin kinetik hero, spesimen hidup, dan drawer navigasi
│   └── main.js             # Logika inti tipis 97 baris tok — no bloatware rek!
├── fonts/                  # Trio font WOFF2 lokal: Fraunces, Roboto Flex, Recursive
├── icons/                  # Aset SVG lokal tanpa CDN luar
├── docs/
│   └── NEKROLOGI.md        # Dokumen PRD komprehensif Bab 1-13 standar FSC
└── _headers                # Aturan CSP ketat dan cache statis Cloudflare Pages
```

---

### ✦ Fitur Unggulan (Doksli Teruji Loh Ya)

• **Judul Kinetik Raksasa `N3KR0L0G1` + Mistar Geser**  
Panggung hero-nya pake tipografi kinetik *Roboto Flex* yang bisa luwes ngerespons kursor mouse dan tarikan penggaris 12-segmen interaktif. Pas web-nya baru dibuka atau di-refresh, ada animasi *smooth entrance wave* yang ngalir *smooth*, gak kaku sama sekali rekkk.

• **Mimbar Obituari Utama Dinamis**  
Bagian ini gak cuma nampilin satu lema doang yaa, sekarang mimbar utamanya bisa muter ke seluruh 15 lema kata. Mau klik tombol Sebelumnya/Berikutnya, klik mistar *gauge*, pencet tombol panah keyboard (← / →), atau angkat langsung dari kartu katalog, semuanya bakal sinkron otomatis sampai ke hash URL dan status `aria-live` buat pembaca layar.

• **Sakelar Edisi Pagi & Edisi Malam**  
Terus ben matamu gak perih pas ndelok pas bengi, tinggal klik sakelar edisi di bilah atas:
- **Edisi Pagi:** Nuansa kertas koran hangat `#EFEBE3` pake tinta arang pekat `#0E0E0E`.
- **Edisi Malam:** Lembaran arang gelap `#161614` pake tinta krem `#F4F0EA`. Kartu lema yang lagi dipilih otomatis dibalik jadi putih solid `#FFFFFF` biar teksnya kebaca super kontras, gak ada cerita tulisan mendem atau gak keliatan loh ya!  
Pilihan edisinya juga langsung kesimpan rapi di `localStorage` tanpa kuki-kuki aneh.

• **Katalog 15 Lema & Akordeon Semantik Native**  
Di sini dihimpun 15 lema nyata yang udah tergeser dari peredaran publik: *tetiron*, *djelata*, *cendayam*, *swatantra*, *puspas*, *geramang*, *adicita*, *anggana*, *wiyata*, *renjana*, *anala*, *sawala*, *gencat*, *candala*, dan *mansor*. Semuanya dibungkus elemen `<details>` native, jadi biarpun JavaScript-nya dimatiin, kartunya tetep bisa dibuka-tutup dengan mulus.

• **Penyaring 5 Dekade & Obituari Acak**  
Di katalog ini kamu bisa nyaring kata mulai era 1970-an sampai 2010-an. Kalau pengen dapet lema kejutan, tinggal pencet aja tombol obituari acak; sistem langsung otomatis ngocok lema, ngebuka kartunya, terus nge-scroll layar ke posisinya secara halus. Nanti ke depannya aku pengen riset lagi buat nambahin kata-kata baru.

• **Trio Font Variabel Lokal (Nol Pihak Ketiga)**  
Font *Fraunces* (Serif Editorial), *Roboto Flex* (Sans Elastis), dan *Recursive* (Mono Mesin Tik) semuanya di-hosting mandiri di folder `fonts/` pake format WOFF2. Nol request ke Google Fonts, bener-bener aman dan mandiri.

• **Refresh Bersih & Klik Logo ke Puncak**  
Tiap kali logo `[NK] N3KR0L0G1` di bilah atas diklik, halamannya bakal langsung nge-refresh bersih dan ngembaliin posisi scroll tepat ke puncak paling atas (`history.scrollRestoration = 'manual'`).

• **Aturan Koding Rapi Tanpa Kurung di Komentar**  
Seluruh komentar kode di CSS, JS, dan HTML dibuat 100% bebas tanda kurung `()`, biar parsing regex-nya aman dan lolos audit kode dengan rapi.

---

### ✦ Cara Menjalankan

Gak perlu repot-repot jalanin `npm install`, langsung deloken iki ae rek:

1. Unduh atau klona repositori ini ke laptop/komputer kamu:
   ```bash
   git clone https://github.com/zaincyty/N3KR0L0G1.git
   ```
2. Buka berkas `index.html` langsung di browser favoritmu (tinggal dobel klik atau lewat jalur `file://`).
3. Selesai, langsung bisa dinikmati deh, udaahhh...!

---

### ✦ Doksli & Referensi Leksikografi

Seluruh data kata, etimologi, dan kutipan perpisahan dihimpun dari sumber terpercaya:
- **Badan Pengembangan dan Pembinaan Bahasa** & **KBBI Daring** (Kemdikbudristek)
- **Arsip Majalah Poedjangga Baroe (1933–1942)**
- **Dokumentasi Sastra Balai Pustaka & Sin Po**

Lisensi font *Fraunces*, *Roboto Flex*, dan *Recursive* tunduk pada *SIL Open Font License (OFL) v1.1*.
