# N3KR0L0G1

> lembaran memorial digital untuk kata-kata bahasa indonesia yang telah berhenti digunakan — dicatat dengan kesungguhan filologis dan estetika koran broadsheet agar kehilangan bahasa tidak terjadi dalam senyap.

<p align="left">
  <a href="index.html"><img src="https://img.shields.io/badge/html5-semantik_murni-18181B?style=flat-square&logo=html5&logoColor=white" alt="html5 semantik" /></a>
  <a href="css/layout.css"><img src="https://img.shields.io/badge/css3-swiss_grid-18181B?style=flat-square&logo=css3&logoColor=white" alt="css swiss grid" /></a>
  <a href="js/main.js"><img src="https://img.shields.io/badge/javascript-91_baris_tipis-18181B?style=flat-square&logo=javascript&logoColor=white" alt="vanilla js" /></a>
  <a href="index.html"><img src="https://img.shields.io/badge/offline-file%3A%2F%2F_ready-18181B?style=flat-square&logo=firefoxbrowser&logoColor=white" alt="protokol offline" /></a>
  <a href="https://kbbi.kemdikbud.go.id"><img src="https://img.shields.io/badge/korpus-kbbi_v_kemdikbud-18181B?style=flat-square&logo=bookstack&logoColor=white" alt="kbbi daring" /></a>
</p>

---

### ✦ sekilas proyek

nekrologi dibangun untuk kebutuhan pribadi. alih-alih membuat antarmuka saas klise yang seragam, proyek ini memilih jalur estetika koran fisik tempo dulu dengan pendekatan tactile swiss grid, sudut tajam 0px, dan penghormatan penuh terhadap standar baku web platform.

---

### ✦ arsitektur & struktur berkas

semua kode ditulis murni tanpa bundler, tanpa npm, dan tanpa framework luar — cukup buka peramban dan naskah langsung tersaji utuh.

```text
nekrologi/
├── index.html            # markup semantik murni html5 ramah aksesibilitas
├── css/
│   ├── tokens.css        # token desain 3 tingkat dan reset modern
│   ├── layout.css        # grid swiss selebar 1200px dan multi kolom editorial
│   └── components.css    # drop cap 4 baris, garis titik, dan akordeon kartu
├── js/
│   ├── data.js           # 15 lema kanonikal 5 dekade plus skrip validasi otomatis
│   ├── render.js         # pembantu pembaruan teks aria status dan akordeon
│   └── main.js           # interaktivitas tipis 91 baris — filter, hening, acak
├── fonts/                # font woff2 lokal mandiri — newsreader dan dm mono
├── icons/                # koleksi ikon svg lokal mandiri
├── favicon.svg           # ikon tab koran editorial
└── _headers              # konfigurasi cache statis immutable untuk produksi
```

---

### ✦ fitur unggulan

• **berita duka utama renjana** — naskah editorial mendalam yang mengulas kepunahan lema *renjana*, disajikan dalam dua kolom cetak koran dengan *drop cap* 4 baris, kotak riwayat leksikografis, dan kutipan sastra sitor situmorang tahun 1955.

• **indeks 15 lema kanonikal** — memuat 15 kata riil dari korpus kbbi dan majalah sastra *poedjangga baroe*, terentang dari dekade 1970-an hingga 2010-an — tetiron, djelata, cendayam, swatantra, puspas, geramang, adicita, anggana, wiyata, renjana, anala, sawala, gencat, candala, mansor.

• **akordeon eksklusif ramah rasa** — ketika satu arsip dibuka, kartu arsip lain otomatis menutup rapi. didukung dua lapis pengaman — atribut asli html5 `name="obituari-arsip"` yang jalan meski javascript mati, serta pendengar acara javascript untuk peramban lawas.

• **penyaring dekade cerdas** — memilah lema berdasarkan dekade keberangkatan kata dari ruang publik nusantara, lengkap dengan pembaruan status dinamis untuk pelindung aksesibilitas pembaca layar *screen reader*.

• **penjelajah nekrologi acak** — fitur pemilihan satu obituari secara acak dengan animasi gulir lembut *smooth scroll* dan fokus papan ketik otomatis.

• **mode baca hening** — ritual perenungan yang meredupkan bilah informasi telegram dan filter yang ramai untuk memberikan ruang kontemplasi membaca yang tenang. pilihan pembaca tersimpan di *sessionStorage* tanpa kuki pelacak dan dapat ditutup cepat lewat tombol escape.

• **100% mandiri** — seluruh aset font dan ikon tersimpan lokal di dalam repositori. halaman dapat dibuka langsung lewat protokol `file://` tanpa sambungan internet dan tetap dapat dibaca sempurna saat javascript dinonaktifkan.

---

### ✦ cara menjalankan

tidak perlu proses instalasi dependensi atau kompilasi build apa pun —

1. unduh atau klona repositori ini ke komputer kamu.
2. klik dua kali berkas `index.html` atau buka langsung di peramban web mana pun melalui jalur `file://`.
3. selamat membaca dan mengenang perbendaharaan kata kita yang telah berpulang.

---

### ✦ lisensi & etika data

seluruh data lema dihimpun dari dokumentasi badan pengembangan dan pembinaan bahasa, kbbi edisi kelima, serta arsip terbitan sastra bersejarah indonesia — font *newsreader* dan *dm mono* didistribusikan di bawah lisensi sil open font license v1.1.
