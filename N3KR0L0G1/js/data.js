/*
=== === === === ===
d4t4.js - sumber kebenaran data kata -
=== === === === ===
*/

/* ==============================================================================
   1. S1T3 M3T4 - informasi umum lembaran terbitan surat kabar -
   ============================================================================== */

const SITE_META = {
  title: "NEKROLOGI",
  tagline: "Arsip lembaran peringatan kata-kata bahasa Indonesia yang telah berhenti digunakan.",
  edition: "023",
  publication_date: "2026-10-23",
  rubric: "OBITUARI",
  curator_name: "Anonim",
  sources: [
    { label: "Badan Pengembangan dan Pembinaan Bahasa", url: "https://badanbahasa.kemdikbud.go.id" },
    { label: "Kamus Besar Bahasa Indonesia Daring", url: "https://kbbi.kemdikbud.go.id" },
    { label: "Arsip Majalah Poedjangga Baroe 1933-1942", url: "#" },
    { label: "Dokumentasi Sastra Balai Pustaka dan Sin Po", url: "#" }
  ],
  colophon_note: "Terbitan ini tidak dijual. Ia hanya dicetak untuk mereka yang bersedia berhenti sejenak dan membaca."
};


/* ==============================================================================
   2. W0RD 3NTR13S - daftar 15 lema kata yang telah berpulang dari masa ke masa -
   ============================================================================== */

const WORD_ENTRIES = [

  /* --- dekade 1970-an - dua lema pertama - --- */

  {
    id: "tetiron",
    headword: "tetiron",
    pronunciation: "/tə.ti.ron/",
    part_of_speech: "nomina",
    definition: "Barang tiruan atau buatan manusia yang menyerupai aslinya; tiruan yang dibuat dengan niat meniru kemurnian alamiah.",
    first_recorded: 1928,
    last_seen: 1974,
    last_seen_context: "Pameran Kerajinan Rakyat Pasar Gambir Baru",
    cause_of_death: "Tergusur oleh kata serapan modern imitasi, palsu, dan istilah industri sintetis.",
    farewell_quote: {
      text: "Jangan kau kira permata itu tulen, itu sekadar tetiron yang berkilau di bawah lampu petromaks pasar malam.",
      source: "Majalah Poedjangga Baroe",
      year: 1936
    },
    etymology: "Jawa Kuno / Melayu Klasik",
    survived_by: ["menetiron"],
    curator_note: "Kata ini pernah jadi pembeda halus antara tiruan berseni dengan barang palsu murahan.",
    tags: ["benda", "kerajinan", "klasik"]
  },

  {
    id: "djelata",
    headword: "djelata",
    pronunciation: "/dʒə.la.ta/",
    part_of_speech: "adjektiva",
    definition: "Rakyat kebanyakan yang bersahaja, tidak berpangkat, dan tidak bertakhta; massa yang menanggung beban peradaban tanpa pernah menuntut tanda jasa.",
    first_recorded: 1933,
    last_seen: 1978,
    last_seen_context: "Pemberitaan koran lokal perburuhan Jakarta",
    cause_of_death: "Disederhanakan menjadi frasa sosiologis netral rakyat kecil dan istilah birokrasi masyarakat berpenghasilan rendah.",
    farewell_quote: {
      text: "Di antara kaum djelata ia berjalan membisu, mendengar ratap lirih yang tak pernah dicatat oleh koran pagi.",
      source: "Sanusi Pane, dalam kumpulan sajak Madah Kelana",
      year: 1931
    },
    etymology: "Melayu Klasik",
    survived_by: ["menjelata"],
    curator_note: "Ditinggalkan karena dianggap terlalu puitis dan tergeser oleh istilah statistik ekonomi.",
    tags: ["sosial", "rakyat", "sejarah"]
  },

  /* --- dekade 1980-an - lima lema - --- */

  {
    id: "cendayam",
    headword: "cendayam",
    pronunciation: "/tʃən.da.yam/",
    part_of_speech: "adjektiva",
    definition: "Elok parasnya, cantik berseri-seri dan memancarkan ketenangan; keindahan wajah yang tidak mencolok tetapi memikat jiwa yang memandang.",
    first_recorded: 1931,
    last_seen: 1982,
    last_seen_context: "Siaran sandiwara radio RRI Programa 1",
    cause_of_death: "Tergusur oleh kata umum cantik jelita, menawan, dan serapan asing estetis.",
    farewell_quote: {
      text: "Bulan cendayam menyinari telaga sunyi, membasuh bayang rindu yang tak kunjung jua pulang ke pangkuan.",
      source: "Amir Hamzah, dalam Nyanyi Sunyi",
      year: 1937
    },
    etymology: "Melayu Riau",
    survived_by: ["kecendayaman"],
    curator_note: "Kekuatan kata ini ada pada rasa damai saat memandang keindahan, bukan sekadar paras luar.",
    tags: ["sastra", "keindahan", "rasa"]
  },

  {
    id: "swatantra",
    headword: "swatantra",
    pronunciation: "/swa.tan.tra/",
    part_of_speech: "nomina",
    definition: "Kedaulatan daerah untuk menyelenggarakan pemerintahan rumah tangganya sendiri; kemandirian wilayah yang berdiri kokoh atas kehendak warganya.",
    first_recorded: 1945,
    last_seen: 1984,
    last_seen_context: "Sidang Paripurna Dewan Perwakilan Rakyat Daerah Istimewa",
    cause_of_death: "Digantikan secara resmi oleh regulasi hukum tata negara melalui frasa otonomi daerah.",
    farewell_quote: {
      text: "Daerah swatantra ini telah memilih jalannya sendiri, menolak takluk pada titah yang tak bertimbang rasa keadilan.",
      source: "Harian Sin Po, Tajuk Rencana Kebangsaan",
      year: 1954
    },
    etymology: "Sanskerta",
    survived_by: ["keswatantraan"],
    curator_note: "Kata politik kenegaraan yang sarat semangat kemerdekaan daerah sebelum tergeser istilah birokrasi.",
    tags: ["hukum", "kenegaraan", "daerah"]
  },

  {
    id: "puspas",
    headword: "puspas",
    pronunciation: "/pus.pas/",
    part_of_speech: "adjektiva",
    definition: "Keadaan campur aduk tanpa aturan, simpang siur tidak berketentuan; kekacauan susunan yang membingungkan pandangan.",
    first_recorded: 1938,
    last_seen: 1985,
    last_seen_context: "Kolom Opini Budaya Harian Kedaulatan Rakyat",
    cause_of_death: "Tergantikan oleh kata campur baur, acak-acakan, dan kata percakapan semrawut.",
    farewell_quote: {
      text: "Pikiran yang puspas tak akan pernah melahirkan ikhtiar jernih, hanya kegusaran yang berputar-putar di tempat tanpa ujung.",
      source: "Majalah Pantja Raja",
      year: 1946
    },
    etymology: "Melayu Pasar",
    survived_by: ["memuspaskan"],
    curator_note: "Kata ekspresif yang menangkap kekacauan isi pikiran maupun suasana ruang.",
    tags: ["keadaan", "percakapan"]
  },

  {
    id: "geramang",
    headword: "geramang",
    pronunciation: "/gə.ra.maŋ/",
    part_of_speech: "nomina",
    definition: "Semut merah besar penyengat yang hidup berkelompok di dahan pepohonan rindang; juga simbol kegelisahan rasa yang merayap di sekujur badan.",
    first_recorded: 1938,
    last_seen: 1988,
    last_seen_context: "Catatan Lapangan Penyuluhan Kehutanan Sumatra Timur",
    cause_of_death: "Tergantikan oleh nama umum semut rangrang dan punahnya pohon randu perkampungan akibat herbisida.",
    farewell_quote: {
      text: "…pohon randu itu tinggal batang tua yang kering, geramang tak lagi bersarang dan tak ada lagi suara gemerisik daun di kala senja.",
      source: "Laporan Ekologi Perkebunan Rakyat, Majalah Zaman",
      year: 1988
    },
    etymology: "Minangkabau / Melayu Tradisional",
    survived_by: ["menggeramang"],
    curator_note: "Lenyap bersamaan dengan hilangnya lanskap pepohonan randu di perkampungan lama.",
    tags: ["alam", "fauna", "ekologi"]
  },

  {
    id: "adicita",
    headword: "adicita",
    pronunciation: "/a.di.tʃi.ta/",
    part_of_speech: "nomina",
    definition: "Gagasan luhur, cita-cita tertinggi yang menjadi landasan filosofis bagi tindakan hidup perseorangan maupun bangsa.",
    first_recorded: 1950,
    last_seen: 1989,
    last_seen_context: "Buku Pidato Guru Besar Filsafat Kebudayaan, Yogyakarta",
    cause_of_death: "Kalah pamor terhadap serapan bahasa Yunani-Eropa ideologi yang dipakai massal dalam kurikulum resmi.",
    farewell_quote: {
      text: "Adicita sebuah bangsa tidak dibangun dari kemarahan sesaat, melainkan dari kesabaran panjang menenun budi pekerti.",
      source: "Risalah Pidato Ilmiah Kongres Bahasa Indonesia Medan",
      year: 1954
    },
    etymology: "Sanskerta / Kawi",
    survived_by: ["beradicita"],
    curator_note: "Pernah dipakai para pendiri bangsa sebagai padanan luhur ideologi dengan nuansa spiritual timur.",
    tags: ["filsafat", "kebangsaan"]
  },

  /* --- dekade 1990-an - tiga lema termasuk berita duka utama - --- */

  {
    id: "anggana",
    headword: "anggana",
    pronunciation: "/aŋ.ga.na/",
    part_of_speech: "nomina",
    definition: "Perempuan yang berdiri kukuh seorang diri; kemandirian jiwa yang tidak menggantungkan nasibnya pada belas kasih orang lain.",
    first_recorded: 1935,
    last_seen: 1992,
    last_seen_context: "Pementasan Teater Koma naskah lakon tradisional",
    cause_of_death: "Tergantikan oleh frasa umum wanita mandiri dan serapan asing perempuan independen.",
    farewell_quote: {
      text: "Ia melangkah sebagai anggana di tengah gelanggang malam, tiada berpayung selain keyakinan yang tertanam teguh di dada.",
      source: "Sanusi Pane, dalam drama sandiwara Sandhyakala ning Majapahit",
      year: 1933
    },
    etymology: "Sanskerta",
    survived_by: ["keangganaan"],
    curator_note: "Mengandung ketegasan watak wanita pejuang yang berdikari tanpa rasa iba.",
    tags: ["manusia", "perempuan", "keteguhan"]
  },

  {
    id: "wiyata",
    headword: "wiyata",
    pronunciation: "/wi.ya.ta/",
    part_of_speech: "nomina",
    definition: "Proses pengajaran batin, penuntun jalan budi pekerti dan kearifan rasa; bukan sekadar pemindahan rumus pengetahuan akademis.",
    first_recorded: 1942,
    last_seen: 1995,
    last_seen_context: "Amanat Upacara Hari Pendidikan Nasional Departemen P&K",
    cause_of_death: "Tersingkir oleh bahasa birokrasi formal pendidikan, pelatihan, dan kursus vokasi.",
    farewell_quote: {
      text: "Wiyata sejati bukanlah tentang mengisi bejana kosong dengan angka, melainkan menyalakan pelita budi di ruang batin yang gelap.",
      source: "Jurnal Kebudayaan dan Pendidikan Taman Siswa",
      year: 1952
    },
    etymology: "Kawi / Jawa Kuno",
    survived_by: ["wiyatabakti", "pawiyatan"],
    curator_note: "Menyimpan nilai filosofis mendalam warisan Ki Hadjar Dewantara yang tak tergantikan kata pendidikan modern.",
    tags: ["pendidikan", "kearifan", "budi"]
  },

  {
    id: "renjana",
    headword: "renjana",
    pronunciation: "/rən.ja.na/",
    part_of_speech: "nomina",
    definition: "Hasrat mendalam yang membakar jiwa tanpa nama; rasa cinta dan kerinduan yang meluap melampaui batas logika rasional.",
    first_recorded: 1930,
    last_seen: 1998,
    last_seen_context: "Naskah Pidato Pelepasan Sarjana Sastra, Universitas Indonesia, Jakarta",
    cause_of_death: "Tergantikan oleh serapan bahasa Inggris passion dan obsession, serta penyederhanaan rasa bahasa ke kata hasrat.",
    farewell_quote: {
      text: "…dan renjana itu tumbuh tanpa nama, menjalar ke dinding-dinding sunyi sebelum fajar merekah.",
      source: "Sitor Situmorang, dalam sajak Wajah Tak Bernama",
      year: 1955
    },
    etymology: "Sanskerta rañjana",
    survived_by: ["merenjana", "kerenjanaan"],
    curator_note: "Dipilih sebagai berita duka utama karena mewakili kehilangan kosakata yang paling nyata: ia masih hidup di atas kertas puisi, tetapi telah mati di lidah masyarakatnya.",
    tags: ["cinta", "jiwa", "sastra", "utama"]
  },

  /* --- dekade 2000-an - tiga lema - --- */

  {
    id: "anala",
    headword: "anala",
    pronunciation: "/a.na.la/",
    part_of_speech: "nomina",
    definition: "Api batin yang menyala membakar kepasrahan; kehangatan daya hidup yang menjadi sumber keberanian dalam kesendirian.",
    first_recorded: 1936,
    last_seen: 2002,
    last_seen_context: "Resensi Teater Sastra Koran Kompas Minggu",
    cause_of_death: "Penyempitan perbendaharaan kata ke dalam lema dasar tunggal api dan bara.",
    farewell_quote: {
      text: "Anala di dadanya bergolak hebat membakar keraguan yang lama menumpuk, mendesaknya melangkah menembus badai.",
      source: "Sutan Takdir Alisjahbana, dalam Layar Terkembang",
      year: 1936
    },
    etymology: "Sanskerta",
    survived_by: ["menganala"],
    curator_note: "Bukan sekadar api pembakar kayu, melainkan metafora kobaran tekad di dalam dada.",
    tags: ["elemen", "jiwa", "tekad"]
  },

  {
    id: "sawala",
    headword: "sawala",
    pronunciation: "/sa.wa.la/",
    part_of_speech: "nomina",
    definition: "Pertukaran pikiran atau perbantahan yang beradab dan santun; silang argumen yang bermaksud mencari kebenaran, bukan menundukkan lawan bicara.",
    first_recorded: 1948,
    last_seen: 2005,
    last_seen_context: "Tajuk Kolom Majalah Berita Mingguan Tempo",
    cause_of_death: "Tergusur oleh kata debat, polemik, dan istilah media sosial cekcok daring.",
    farewell_quote: {
      text: "Sawala ini kami gelar bukan untuk mencari siapa yang menang atau kalah, melainkan memelihara akal sehat bersama di tengah kabut zaman.",
      source: "Risalah Pertemuan Pujangga Baru",
      year: 1939
    },
    etymology: "Sunda / Melayu Klasik",
    survived_by: ["bersawala", "sawalaisasi"],
    curator_note: "Konsep perdebatan santun warisan leluhur yang menjunjung tinggi martabat lawan bicara.",
    tags: ["musyawarah", "pemikiran", "komunikasi"]
  },

  {
    id: "gencat",
    headword: "gencat",
    pronunciation: "/gən.tʃat/",
    part_of_speech: "verba",
    definition: "Terhenti di tengah jalan sebelum tuntas; terputus lajunya sementara waktu karena ada peristiwa tak terduga yang menghadang.",
    first_recorded: 1952,
    last_seen: 2008,
    last_seen_context: "Pemberitaan Sengketa Buruh Manufaktur Surabaya",
    cause_of_death: "Penciutan makna yang hanya disisakan dalam frasa militer gencatan senjata, sementara penggunaan kata tunggalnya punah.",
    farewell_quote: {
      text: "Pertempuran sengit itu sempat gencat ketika senja temaram turun, menyisakan bau mesiu dan kesunyian yang menusuk hingga ke tulang.",
      source: "Catatan Koresponden Perang, Surat Kabar Merdeka",
      year: 1947
    },
    etymology: "Melayu Riau",
    survived_by: ["tergencat"],
    curator_note: "Contoh kata yang mati karena diserap kaku ke dalam satu frasa khusus dan dilupakan bentuk mandirinya.",
    tags: ["tindakan", "keadaan"]
  },

  /* --- dekade 2010-an - dua lema penutup - --- */

  {
    id: "candala",
    headword: "candala",
    pronunciation: "/tʃan.da.la/",
    part_of_speech: "adjektiva",
    definition: "Rasa rendah diri yang teramat sangat hingga melumpuhkan harga diri dan keberanian bertindak di hadapan sesama manusia.",
    first_recorded: 1930,
    last_seen: 2012,
    last_seen_context: "Kolom Esai Humaniora Jurnal Basis",
    cause_of_death: "Tersingkir oleh bahasa percakapan Belanda minder dan istilah psikologi populer media sosial insecure.",
    farewell_quote: {
      text: "Biar candala merayap di bawah telapak kaki, kening ini tetap tegak menatap langit lepas yang tak pernah mengumbar janji.",
      source: "Chairil Anwar, dalam antologi Deru Campur Debu",
      year: 1949
    },
    etymology: "Sanskerta / Jawa Kuno",
    survived_by: ["mencandala"],
    curator_note: "Kekuatan lema ini ada pada ketepatannya menggambarkan rasa malu yang mengerdilkan jiwa.",
    tags: ["psikologi", "perasaan", "manusia"]
  },

  {
    id: "mansor",
    headword: "mansor",
    pronunciation: "/man.sor/",
    part_of_speech: "verba",
    definition: "Dinyatakan tidak lagi berlaku, dihapuskan keberlakuannya oleh hukum atau kesepakatan adat yang lebih baru.",
    first_recorded: 1960,
    last_seen: 2016,
    last_seen_context: "Sidang Musyawarah Lembaga Adat Melayu Riau",
    cause_of_death: "Tergusur oleh istilah hukum modern batal demi hukum, kedaluwarsa, dan dihapus.",
    farewell_quote: {
      text: "Piagam itu kini telah mansor dimakan zaman, namun rasa keadilannya masih terpatri di dalam ingatan para tetua kampung.",
      source: "Lembaran Maklumat Adat Nusantara",
      year: 1962
    },
    etymology: "Arab Mansukh / Melayu Klasik",
    survived_by: ["memansorkan"],
    curator_note: "Kata hukum adat nusantara yang tenang saat menyatakan berakhirnya masa berlaku suatu aturan.",
    tags: ["hukum", "adat", "aturan"]
  }

];


/* ==============================================================================
   3. V4L1D4S1 - pemeriksa keutuhan data otomatis biar gak ada yang cacat -
   ============================================================================== */

/* fungsi pemeriksa keutuhan data berjalan otomatis pas file dimuat */
function validateWordEntries(entries) {
  const seenIds = new Set();
  const requiredFields = [
    "id",
    "headword",
    "pronunciation",
    "part_of_speech",
    "definition",
    "first_recorded",
    "last_seen",
    "cause_of_death",
    "farewell_quote"
  ];

  /* cek satu per satu lema kata */
  for (const entry of entries) {
    /* cek kolom wajib */
    for (const field of requiredFields) {
      if (entry[field] === undefined || entry[field] === null || entry[field] === "") {
        throw new Error("Lema data kehilangan kolom wajib: " + field + " pada lema ID " + (entry.id || "tanpa id"));
      }
    }

    /* cek kolom kutipan */
    if (!entry.farewell_quote.text || !entry.farewell_quote.source || !entry.farewell_quote.year) {
      throw new Error("Kutipan perpisahan tidak lengkap pada lema ID: " + entry.id);
    }

    /* cek duplikasi id lema */
    if (seenIds.has(entry.id)) {
      throw new Error("Ditemukan ID lema kembar: " + entry.id);
    }
    seenIds.add(entry.id);

    /* cek urutan tahun logis */
    if (entry.last_seen < entry.first_recorded) {
      throw new Error("Tahun terakhir terdengar lebih awal dari tahun tercatat pada lema: " + entry.id);
    }
  }

  return true;
}

/* jalankan pemeriksaan langsung */
try {
  validateWordEntries(WORD_ENTRIES);
} catch (error) {
  console.error("Peringatan darurat data nekrologi:", error.message);
}


/* ==============================================================================
   4. H3LP3R FUNCT10N - fungsi penghitung dekade runtime -
   ============================================================================== */

/* fungsi buat ngitung dekade dari tahun terakhir terdengar */
function getDecade(year) {
  const decadeStart = Math.floor(year / 10) * 10;
  return decadeStart + "-an";
}

/* fungsi buat nyaring lema berdasarkan dekade pilihan */
function filterEntriesByDecade(entries, decade) {
  if (!decade || decade === "all" || decade === "semua") {
    return entries;
  }
  return entries.filter(function (entry) {
    return getDecade(entry.last_seen) === decade;
  });
}

/* fungsi buat ngambil satu lema acak */
function getRandomEntry(entries) {
  if (!entries || entries.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * entries.length);
  return entries[randomIndex];
}


/* ==============================================================================
   5. 3XP0RT GL0B4L - tempel ke window biar bisa dipake file render dan main -
   ============================================================================== */

if (typeof window !== "undefined") {
  window.SITE_META = SITE_META;
  window.WORD_ENTRIES = WORD_ENTRIES;
  window.validateWordEntries = validateWordEntries;
  window.getDecade = getDecade;
  window.filterEntriesByDecade = filterEntriesByDecade;
  window.getRandomEntry = getRandomEntry;
}

/* ekspor buat pengujian lingkungan nodejs kalo dibutuhkan */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SITE_META,
    WORD_ENTRIES,
    validateWordEntries,
    getDecade,
    filterEntriesByDecade,
    getRandomEntry
  };
}
