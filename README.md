# nekrologi

> lembaran memorial digital untuk kata-kata bahasa indonesia yang telah berhenti digunakan. dicatat dengan kesungguhan filologis dan estetika koran broadsheet agar kehilangan bahasa tidak terjadi dalam senyap.

<p align="left">
  <a href="index.html"><img src="https://img.shields.io/badge/html5-semantik_murni-18181B?style=for-the-badge&logo=html5&logoColor=E34F26" alt="html5 semantik" /></a>
  <a href="css/layout.css"><img src="https://img.shields.io/badge/css3-swiss_grid-18181B?style=for-the-badge&logo=css3&logoColor=1572B6" alt="css swiss grid" /></a>
  <a href="js/main.js"><img src="https://img.shields.io/badge/javascript-91_baris_tipis-18181B?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="vanilla js" /></a>
  <a href="index.html"><img src="https://img.shields.io/badge/offline-file%3A%2F%2F_ready-B5541F?style=for-the-badge&logo=firefoxbrowser&logoColor=white" alt="protokol offline" /></a>
  <a href="https://kbbi.kemdikbud.go.id"><img src="https://img.shields.io/badge/korpus-kbbi_v_kemdikbud-18181B?style=for-the-badge&logo=bookstack&logoColor=white" alt="kbbi daring" /></a>
</p>

---

### <img src="https://api.iconify.design/lucide:newspaper.svg?color=%23B5541F" width="18" height="18" align="center" /> sekilas proyek

nekrologi dibangun untuk ajang **frontend starter camp - fsc 2026 - bcc filkom universitas brawijaya**. alih-alih membuat antarmuka saas klise yang seragam, proyek ini memilih jalur *editorial craftsmanship* bergaya koran fisik tempo dulu dengan pendekatan tactile swiss grid, sudut tajam 0px, dan penghormatan penuh terhadap standar baku web platform.

---

### <img src="https://api.iconify.design/lucide:folder-tree.svg?color=%23B5541F" width="18" height="18" align="center" /> arsitektur & struktur berkas

semua kode ditulis murni tanpa bundler, tanpa npm, dan tanpa framework luar. cukup buka peramban dan naskah langsung tersaji utuh.

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
│   └── main.js           # interaktivitas tipis 91 baris - filter, hening, acak
├── fonts/                # font woff2 lokal mandiri - newsreader dan dm mono
├── icons/                # ikon svg eksternal lokal kurasi lucide
├── favicon.svg           # ikon tab koran editorial
└── _headers              # konfigurasi cache statis immutable untuk produksi
```

---

### <img src="https://api.iconify.design/lucide:sparkles.svg?color=%23B5541F" width="18" height="18" align="center" /> fitur unggulan

- <img src="https://api.iconify.design/lucide:flame.svg?color=%23B5541F" width="15" height="15" align="center" /> **berita duka utama renjana**  
  naskah editorial mendalam yang mengulas kepunahan lema *renjana*, disajikan dalam dua kolom cetak koran dengan *drop cap* 4 baris, kotak riwayat leksikografis, dan kutipan sastra sitor situmorang tahun 1955.

- <img src="https://api.iconify.design/lucide:book-open.svg?color=%23B5541F" width="15" height="15" align="center" /> **indeks 15 lema kanonikal**  
  memuat 15 kata riil dari korpus kbbi dan majalah sastra *poedjangga baroe*, terentang dari dekade 1970-an hingga 2010-an - tetiron, djelata, cendayam, swatantra, puspas, geramang, adicita, anggana, wiyata, renjana, anala, sawala, gencat, candala, mansor -.

- <img src="https://api.iconify.design/lucide:archive.svg?color=%23B5541F" width="15" height="15" align="center" /> **akordeon eksklusif ramah rasa**  
  ketika satu arsip dibuka, kartu arsip lain otomatis menutup rapi. didukung dua lapis pengaman: atribut asli html5 `name="obituari-arsip"` yang jalan meski javascript mati, serta pendengar acara javascript untuk peramban lawas.

- <img src="https://api.iconify.design/lucide:sliders-horizontal.svg?color=%23B5541F" width="15" height="15" align="center" /> **penyaring dekade cerdas**  
  memilah lema berdasarkan dekade keberangkatan kata dari ruang publik nusantara, lengkap dengan pembaruan status dinamis untuk pelindung aksesibilitas pembaca layar *screen reader*.

- <img src="https://api.iconify.design/lucide:compass.svg?color=%23B5541F" width="15" height="15" align="center" /> **penjelajah nekrologi acak**  
  fitur pemilihan satu obituari secara acak dengan animasi gulir lembut *smooth scroll* dan fokus papan ketik otomatis.

- <img src="https://api.iconify.design/lucide:moon.svg?color=%23B5541F" width="15" height="15" align="center" /> **mode baca hening - ritual perenungan**  
  meredupkan bilah informasi telegram dan filter yang ramai untuk memberikan ruang kontemplasi membaca yang tenang. pilihan pembaca tersimpan di *sessionStorage* tanpa kuki pelacak dan dapat ditutup cepat lewat tombol escape.

- <img src="https://api.iconify.design/lucide:shield-check.svg?color=%23B5541F" width="15" height="15" align="center" /> **100% mandiri - zero cdn dependency**  
  seluruh aset font dan ikon tersimpan lokal di dalam repositori. halaman dapat dibuka langsung lewat protokol `file://` tanpa sambungan internet dan tetap dapat dibaca sempurna saat javascript dinonaktifkan.

---

### <img src="https://api.iconify.design/lucide:play.svg?color=%23B5541F" width="18" height="18" align="center" /> cara menjalankan

tidak perlu proses instalasi dependensi atau kompilasi build apa pun.

1. unduh atau klona repositori ini ke komputer kamu.
2. klik dua kali berkas `index.html` atau buka langsung di peramban web mana pun melalui jalur `file://`.
3. selamat membaca dan mengenang perbendaharaan kata kita yang telah berpulang.

---

### <img src="https://api.iconify.design/lucide:landmark.svg?color=%23B5541F" width="18" height="18" align="center" /> lisensi & etika data

seluruh data lema dihimpun dari dokumentasi badan pengembangan dan pembinaan bahasa, kbbi edisi kelima, serta arsip terbitan sastra bersejarah indonesia. font *newsreader* dan *dm mono* didistribusikan di bawah lisensi sil open font license v1.1.
