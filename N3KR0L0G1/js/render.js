/*
=== === === === ===
r3nd3r.js - fungsi pembantu manipulasi tampilan lembaran nekrologi -
=== === === === ===
*/

/* ==============================================================================
   1. P3MB4RU T3KS ST4TUS - memperbarui informasi pembaca layar -
   ============================================================================== */

/* update teks status filter pembaca layar */
function updateScreenReaderStatus(count, decadeLabel) {
  const statusElement = document.getElementById("index-status");
  if (!statusElement) return;

  if (decadeLabel === "all") {
    statusElement.textContent = "Menampilkan seluruh 15 kata dari 5 dekade peringatan.";
  } else {
    statusElement.textContent = "Menampilkan " + count + " kata dari dekade " + decadeLabel + "-an.";
  }
}


/* ==============================================================================
   2. 4K0RD30N 3KSLUS1F - menutup kartu arsip lain saat satu kartu dibuka -
   ============================================================================== */

/* akordeon lema, satu kartu terbuka tiap waktu */
function setupExclusiveAccordion() {
  const allDetails = document.querySelectorAll(".obituary-details");

  allDetails.forEach(function (detail) {
    detail.addEventListener("toggle", function () {
      /* tutup kartu lain saat kartu ini dibuka */
      if (detail.open) {
        allDetails.forEach(function (otherDetail) {
          if (otherDetail !== detail && otherDetail.open) {
            otherDetail.open = false;
          }
        });
      }
    });
  });
}


/* ==============================================================================
   3. S0R0T K4RTU L3M4 - membuka dan menggulir halus ke lema terpilih -
   ============================================================================== */

/* buka kartu dan scroll ke posisinya */
function openAndScrollToEntry(entryId) {
  const targetDetails = document.getElementById(entryId);
  if (!targetDetails) return;

  /* tutup kartu lain dulu */
  const allDetails = document.querySelectorAll(".obituary-details");
  allDetails.forEach(function (other) {
    if (other !== targetDetails && other.open) {
      other.open = false;
    }
  });

  /* buka kartu sasaran */
  targetDetails.open = true;

  /* scroll halus ke kartu */
  targetDetails.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  /* fokus ke ringkasan buat navigasi keyboard */
  const summaryTrigger = targetDetails.querySelector(".word-trigger");
  if (summaryTrigger) {
    summaryTrigger.focus();
  }
}


/* ==============================================================================
   4. P3MB4RU M1MB4R UT4M4 - merender kisah lema mana pun ke berita duka utama -
   ============================================================================== */

/* render data lema ke mimbar utama */
function updateStageWord(word, index, total) {
  const wrapper = document.getElementById("stage-story-wrapper");
  const counter = document.getElementById("stage-counter");
  const progressBar = document.getElementById("stage-progress-bar");
  const headword = document.getElementById("lead-word-title");
  const narrative = document.querySelector(".lead-narrative");
  const meta = document.querySelector(".lead-meta");
  const dossier = document.querySelector(".archival-dossier");
  const quote = document.querySelector(".farewell-quote-block");

  if (!wrapper || !word) return;

  /* efek transisi lema baru */
  wrapper.classList.add("is-transitioning");

  setTimeout(function () {
    /* 1. nomor urut dan mistar lema */
    if (counter) {
      const currentNum = String(index + 1).padStart(2, "0");
      const totalNum = String(total).padStart(2, "0");
      counter.textContent = currentNum + " / " + totalNum;
    }
    const counterCurrent = document.getElementById("stage-counter-current");
    if (counterCurrent) counterCurrent.textContent = String(index + 1).padStart(2, "0");
    const counterWord = document.getElementById("stage-counter-word");
    if (counterWord) counterWord.textContent = word.headword;
    const gauge = document.getElementById("stage-gauge");
    if (gauge) {
      gauge.setAttribute("aria-valuenow", index + 1);
      const cells = gauge.querySelectorAll(".stage-ruler__cell");
      cells.forEach(function (cell, cIdx) {
        cell.classList.toggle("is-active", cIdx === index);
        cell.classList.toggle("is-passed", cIdx < index);
        cell.setAttribute("aria-current", cIdx === index ? "step" : "false");
      });
    }
    if (progressBar) {
      progressBar.style.width = ((index + 1) / total * 100) + "%";
    }

    /* 2. judul lema utama dan dek spesimen */
    if (headword) {
      headword.textContent = word.headword;
    }
    const deckText = document.getElementById("lead-deck-text");
    if (deckText) {
      deckText.textContent = word.definition;
    }
    const heroReadout = document.getElementById("hero-readout");
    if (heroReadout) {
      heroReadout.textContent = "Edisi 023 / 23 Okt 2026 / Lema " + word.headword;
    }

    /* 3. pelafalan dan tahun aktif */
    const leadPhonetic = document.getElementById("lead-phonetic");
    if (leadPhonetic) leadPhonetic.textContent = word.pronunciation;
    const leadPos = document.getElementById("lead-pos");
    if (leadPos) leadPos.textContent = word.part_of_speech;
    const leadLifespan = document.getElementById("lead-lifespan");
    if (leadLifespan) {
      leadLifespan.innerHTML = '<time datetime="' + word.first_recorded + '">' + word.first_recorded + '</time> - <time datetime="' + word.last_seen + '">' + word.last_seen + '</time>';
    }
    if (meta) {
      meta.innerHTML = '<span class="phonetic">' + word.pronunciation + '</span> / ' +
        '<span class="pos">' + word.part_of_speech + '</span> / ' +
        '<span class="lifespan">Tercatat <time datetime="' + word.first_recorded + '">' + word.first_recorded + '</time> / Terakhir Terdengar <time datetime="' + word.last_seen + '">' + word.last_seen + '</time></span>';
    }

    /* 4. narasi dua kolom */
    if (narrative) {
      const firstChar = word.definition.charAt(0);
      const restDef = word.definition.slice(1);
      narrative.innerHTML = 
        '<p class="lead-paragraph"><span class="drop-cap">' + firstChar + '</span>' + restDef + ' Kata ini tercatat dalam sejarah peradaban tutur bahasa Indonesia, hingga akhirnya berhenti digunakan di ruang publik sekitar tahun ' + word.last_seen + '.</p>' +
        '<p>' + word.cause_of_death + ' Konteks pemakaian terakhirnya terekam dalam ' + word.last_seen_context + ', sebelum akhirnya tergeser oleh pergantian zaman dan perubahan kebiasaan penuturnya.</p>' +
        '<p>' + word.curator_note + ' Melalui lembaran memorial ini, kita mencatat jejaknya agar kehilangan perbendaharaan bahasa tidak berlangsung dalam senyap.</p>';
    }

    /* 5. rincian arsip data lema */
    if (dossier) {
      const dl = dossier.querySelector(".metadata-list");
      if (dl) {
        const derivatives = word.survived_by && word.survived_by.length ? word.survived_by.join(", ") : "Tidak ada catatan kata turunan aktif";
        dl.innerHTML = 
          "<dt>Tahun Pertama Tercatat</dt>" +
          "<dd><time datetime=\"" + word.first_recorded + "\">" + word.first_recorded + "</time></dd>" +
          "<dt>Tahun Terakhir Terdengar</dt>" +
          "<dd><time datetime=\"" + word.last_seen + "\">" + word.last_seen + "</time> - " + word.last_seen_context + " -</dd>" +
          "<dt>Sebab Kepergian</dt>" +
          "<dd>" + word.cause_of_death + "</dd>" +
          "<dt>Kata Turunan yang Ditinggalkan</dt>" +
          "<dd><em>" + derivatives + "</em></dd>" +
          "<dt>Akar Bahasa - Etimologi -</dt>" +
          "<dd>" + (word.etymology || "Melayu Klasik") + "</dd>" +
          "<dt>Catatan Kurator</dt>" +
          "<dd>" + word.curator_note + "</dd>";
      }
    }

    /* 6. kutipan sastra lema */
    if (quote && word.farewell_quote) {
      const qp = quote.querySelector("blockquote p");
      const qfig = quote.querySelector("figcaption");
      if (qp) qp.textContent = "“" + word.farewell_quote.text + "”";
      if (qfig) {
        const src = word.farewell_quote.source || "Arsip Sastra Klasik";
        qfig.innerHTML = "<cite>" + src + "</cite>, <time datetime=\"" + word.farewell_quote.year + "\">" + word.farewell_quote.year + "</time>";
      }
    }

    /* 7. update status aktif di katalog */
    document.querySelectorAll(".directory-item").forEach(function (item) {
      item.classList.remove("is-stage-active");
    });
    const activeItem = document.getElementById("item-" + word.id);
    if (activeItem) {
      activeItem.classList.add("is-stage-active");
    }

    /* 8. update hash url */
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", "#" + word.id);
    }

    /* selesai transisi */
    wrapper.classList.remove("is-transitioning");
  }, 180);
}


/* animasi fleksibel kata hero */
function initHeroWordmark() {
  const hero = document.querySelector(".hero");
  const wm = document.getElementById("hero-wm") || (hero ? hero.querySelector(".wm") : null);
  const ruler = document.getElementById("hero-ruler");
  const marker = document.getElementById("hero-marker");
  if (!hero || !wm) return;

  const letterEls = Array.from(wm.querySelectorAll(".wm__l"));
  if (!letterEls.length) return;

  const WGHTS = [100, 200, 400, 600, 800, 1000];
  const WDTHS = [25, 40, 60, 80, 100, 125, 151];
  const REST_WGHT = 600;
  const LO = { wght: 150, wdth: 25 };
  const HI = { wght: 1000, wdth: 151 };
  const FILL = 0.998;
  const CAP_LIMIT = 0.58;
  const CAP_RATIO = 0.719;

  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  function axesAt(s, restW) {
    if (s <= 0.5) {
      const u = s / 0.5;
      return { wght: lerp(LO.wght, REST_WGHT, u), wdth: lerp(LO.wdth, restW, u) };
    }
    const u = (s - 0.5) / 0.5;
    return { wght: lerp(REST_WGHT, HI.wght, u), wdth: lerp(restW, HI.wdth, u) };
  }

  function cell(arr, v) {
    let i = 0;
    while (i < arr.length - 2 && v > arr[i + 1]) i++;
    return i;
  }

  function advance(grid, wght, wdth) {
    const i = cell(WGHTS, wght);
    const j = cell(WDTHS, wdth);
    const u = clamp((wght - WGHTS[i]) / (WGHTS[i + 1] - WGHTS[i]), 0, 1);
    const v = clamp((wdth - WDTHS[j]) / (WDTHS[j + 1] - WDTHS[j]), 0, 1);
    const n = WDTHS.length;
    return lerp(
      lerp(grid[i * n + j], grid[i * n + j + 1], v),
      lerp(grid[(i + 1) * n + j], grid[(i + 1) * n + j + 1], v),
      u
    );
  }

  /* ukur grid variasi huruf di memori peramban */
  let table = null;
  function measure() {
    const chars = Array.from(new Set(letterEls.map(function (l) { return l.textContent; })));
    const box = document.createElement("div");
    box.setAttribute("aria-hidden", "true");
    box.style.cssText = "position:absolute;left:0;top:0;width:0;height:0;overflow:hidden;visibility:hidden;pointer-events:none;white-space:pre;font-family:var(--f-elastik);font-size:200px;line-height:1;";
    const spans = [];
    chars.forEach(function (ch) {
      WGHTS.forEach(function (wg) {
        WDTHS.forEach(function (wd) {
          const sp = document.createElement("span");
          sp.textContent = ch;
          sp.style.cssText = 'display:block;width:max-content;font-stretch:' + wd + '%;font-variation-settings:"wght" ' + wg + ', "wdth" ' + wd + ', "opsz" 144';
          box.appendChild(sp);
          spans.push(sp);
        });
      });
    });
    document.body.appendChild(box);
    const grid = {};
    let k = 0;
    chars.forEach(function (ch) {
      const g = new Float64Array(WGHTS.length * WDTHS.length);
      for (let p = 0; p < g.length; p++) {
        g[p] = spans[k++].getBoundingClientRect().width / 200;
      }
      grid[ch] = g;
    });
    box.remove();
    return grid;
  }

  let line = null;
  let pointer = { x: 0, y: 0, active: false };
  let frame = 0;
  let last = performance.now();

  function restEm(letters, wdth) {
    return letters.reduce(function (sum, l) { return sum + advance(l.grid, REST_WGHT, wdth); }, 0);
  }

  function buildLive() {
    if (!table) table = measure();
    const W = wm.getBoundingClientRect().width;
    if (!W) return;
    const letters = letterEls.map(function (el, i) {
      return {
        el: el, i: i, ch: el.textContent, grid: table[el.textContent],
        e: 0, s: 0.5, axes: null, cx: 0
      };
    });

    let fontSize = (W * FILL) / restEm(letters, LO.wdth);
    const target = (W * FILL) / fontSize;
    let lo = LO.wdth;
    let hi = HI.wdth;
    if (restEm(letters, hi) <= target) lo = hi;
    else {
      for (let k = 0; k < 24; k++) {
        const mid = (lo + hi) / 2;
        if (restEm(letters, mid) > target) hi = mid;
        else lo = mid;
      }
    }
    wm.style.fontSize = fontSize.toFixed(3) + "px";
    line = { W: W, fontSize: fontSize, restW: lo, letters: letters };
    layout(true);

    if (marker && ruler) {
      const rulerRect = ruler.getBoundingClientRect();
      const initX = markerRatio * rulerRect.width;
      marker.style.transform = "translate3d(" + initX.toFixed(1) + "px, 0, 0)";
    }
  }

  function layout(force) {
    if (!line) return;
    const target = (line.W * FILL) / line.fontSize;
    function total(offset) {
      let sum = 0;
      line.letters.forEach(function (l) {
        const a = axesAt(clamp(offset + l.e * 0.5, 0, 1), line.restW);
        sum += advance(l.grid, a.wght, a.wdth);
      });
      return sum;
    }
    let lo = -0.5;
    let hi = 1.5;
    for (let k = 0; k < 22; k++) {
      const mid = (lo + hi) / 2;
      if (total(mid) > target) hi = mid;
      else lo = mid;
    }
    let x = 0;
    line.letters.forEach(function (l) {
      l.s = clamp(lo + l.e * 0.5, 0, 1);
      l.axes = axesAt(l.s, line.restW);
      const w = advance(l.grid, l.axes.wght, l.axes.wdth) * line.fontSize;
      const f = '"wght" ' + l.axes.wght.toFixed(1) + ', "wdth" ' + l.axes.wdth.toFixed(2) + ', "opsz" 144';
      l.el.style.fontStretch = l.axes.wdth.toFixed(1) + "%";
      l.el.style.fontVariationSettings = f;
      const px = Math.round(x * 4) / 4;
      l.el.style.transform = "translate3d(" + px + "px, 0, 0)";
      l.cx = x + w / 2;
      x += w;
    });
  }

  /* simpan posisi marker penggaris */
  let markerRatio = 0.615;
  let isDraggingRuler = false;

  /* update posisi marker saat digeser */
  function updateRulerDrag(clientX) {
    if (!ruler || !marker) return;
    const rulerRect = ruler.getBoundingClientRect();
    const x = Math.max(0, Math.min(rulerRect.width, clientX - rulerRect.left));
    markerRatio = rulerRect.width > 0 ? x / rulerRect.width : 0;
    marker.style.transform = "translate3d(" + x.toFixed(1) + "px, 0, 0)";
    marker.classList.add("is-on");

    /* sinkronkan ke posisi huruf hero */
    const r = wm.getBoundingClientRect();
    const lineH = line ? line.fontSize * 0.74 : 50;
    pointer.x = rulerRect.left + x;
    pointer.y = r.top + lineH * 0.5;
    pointer.active = true;
    kick();
  }

  function kick() {
    if (!frame) frame = requestAnimationFrame(tick);
  }

  function tick(now) {
    frame = 0;
    const dt = clamp((now - last) / 1000, 0.001, 0.064);
    last = now;
    if (!line) return;

    const r = wm.getBoundingClientRect();
    const radius = 2.4 * (line.W / line.letters.length);
    const lineH = line.fontSize * 0.74;
    const ease = 1 - Math.exp(-dt * 8);
    let moving = false;
    let best = null;

    line.letters.forEach(function (l) {
      let target = 0;
      if (pointer.active) {
        const dx = pointer.x - r.left - l.cx;
        const py = pointer.y - r.top;
        const dy = py < 0 ? -py : py > lineH ? py - lineH : 0;
        const near = Math.exp(-(dx * dx) / (radius * radius));
        target = Math.max(0, Math.min(1, 1 - dy / (window.innerHeight * 0.5))) * (2 * near - 1);
      }
      const d = target - l.e;
      if (Math.abs(d) > 0.001) { l.e += d * ease; moving = true; } else { l.e = target; }
      if (!best || l.s > best.s) best = l;
    });

    layout(false);

    if (marker && ruler) {
      const rulerRect = ruler.getBoundingClientRect();
      let mx = markerRatio * rulerRect.width;
      if (pointer.active) {
        mx = Math.max(0, Math.min(rulerRect.width, pointer.x - rulerRect.left));
        markerRatio = rulerRect.width > 0 ? mx / rulerRect.width : 0;
      }
      marker.style.transform = "translate3d(" + mx.toFixed(1) + "px, 0, 0)";
      marker.classList.toggle("is-on", pointer.active);
    }

    if (moving) kick();
  }

  let hasPlayedEntrance = false;
  let entranceFrame = 0;

  /* animasi masuk gelombang huruf hero */
  function playEntranceWave() {
    if (!line || !ruler || !marker) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rulerRect = ruler.getBoundingClientRect();
    if (!rulerRect.width) return;
    const startX = 0;
    const endX = markerRatio * rulerRect.width;
    const startTime = performance.now();
    const duration = 1200;

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easeVal = 1 - Math.pow(1 - progress, 3);
      const currentX = startX + (endX - startX) * easeVal;

      const r = wm.getBoundingClientRect();
      const lineH = line.fontSize * 0.74;
      pointer.x = rulerRect.left + currentX;
      pointer.y = r.top + lineH * 0.5;
      pointer.active = progress < 1;

      marker.style.transform = "translate3d(" + currentX.toFixed(1) + "px, 0, 0)";
      kick();

      if (progress < 1) {
        entranceFrame = requestAnimationFrame(step);
      } else {
        entranceFrame = 0;
        pointer.active = false;
        kick();
      }
    }
    entranceFrame = requestAnimationFrame(step);
  }

  hero.addEventListener("pointermove", function (e) {
    if (entranceFrame) {
      cancelAnimationFrame(entranceFrame);
      entranceFrame = 0;
    }
    if (isDraggingRuler) return;
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = true;
    kick();
  });

  hero.addEventListener("pointerleave", function () {
    if (isDraggingRuler) return;
    pointer.active = false;
    kick();
  });

  if (ruler) {
    ruler.addEventListener("pointerdown", function (e) {
      if (entranceFrame) {
        cancelAnimationFrame(entranceFrame);
        entranceFrame = 0;
      }
      isDraggingRuler = true;
      try {
        ruler.setPointerCapture(e.pointerId);
      } catch (err) {}
      updateRulerDrag(e.clientX);
    });

    ruler.addEventListener("pointermove", function (e) {
      if (isDraggingRuler) {
        updateRulerDrag(e.clientX);
      }
    });

    /* lepas drag penggaris */
    function stopRulerDrag(e) {
      if (isDraggingRuler) {
        isDraggingRuler = false;
        try {
          ruler.releasePointerCapture(e.pointerId);
        } catch (err) {}
        /* cek kursor masih di area hero */
        const heroRect = hero.getBoundingClientRect();
        if (
          e.clientX >= heroRect.left &&
          e.clientX <= heroRect.right &&
          e.clientY >= heroRect.top &&
          e.clientY <= heroRect.bottom
        ) {
          pointer.x = e.clientX;
          pointer.y = e.clientY;
          pointer.active = true;
        } else {
          pointer.active = false;
        }
        kick();
      }
    }

    ruler.addEventListener("pointerup", stopRulerDrag);
    ruler.addEventListener("pointercancel", stopRulerDrag);
  }

  window.addEventListener("resize", function () {
    buildLive();
    kick();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      buildLive();
      kick();
      if (!hasPlayedEntrance) {
        hasPlayedEntrance = true;
        playEntranceWave();
      }
    });
  } else {
    buildLive();
    kick();
    if (!hasPlayedEntrance) {
      hasPlayedEntrance = true;
      playEntranceWave();
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initHeroWordmark();
});

/* salin langsung logika spesimen animator dan pemilihan kartu dari shockingmike js */
const FONTS_SPECIMEN = {
  elastik: {
    axes: [
      { tag: "wght", min: 100, max: 1000 },
      { tag: "wdth", min: 25, max: 151 },
      { tag: "opsz", min: 8, max: 144 },
      { tag: "slnt", min: -10, max: 0 },
      { tag: "GRAD", min: -200, max: 150 }
    ],
    specimen: { wght: 800, wdth: 100, opsz: 144, slnt: 0, GRAD: 0 }
  },
  morrow: {
    axes: [
      { tag: "wght", min: 100, max: 900 },
      { tag: "opsz", min: 9, max: 144 },
      { tag: "SOFT", min: 0, max: 100 },
      { tag: "WONK", min: 0, max: 1 }
    ],
    specimen: { wght: 600, opsz: 144, SOFT: 100, WONK: 1 }
  },
  relay: {
    axes: [
      { tag: "wght", min: 300, max: 1000 },
      { tag: "slnt", min: -15, max: 0 },
      { tag: "CASL", min: 0, max: 1 },
      { tag: "CRSV", min: 0, max: 1 },
      { tag: "MONO", min: 0, max: 1 }
    ],
    specimen: { wght: 800, slnt: 0, CASL: 1, CRSV: 0.5, MONO: 0 }
  }
};

function lerpVal(a, b, t) { return a + (b - a) * t; }
function easeInOutVal(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

function specimenAnimator(card) {
  const font = FONTS_SPECIMEN[card.dataset.font];
  if (!font) return { play: function () {}, stop: function () {} };
  const el = card.querySelector(".card__specimen");
  const tags = card.querySelectorAll(".card__axes li");
  const SEGMENT = 1150;
  const RETURN = 560;
  const BLEND = 320;
  const base = font.specimen;
  let frame = 0;
  let start = 0;
  let cycles = Infinity;
  let mode = "idle";
  let current = Object.assign({}, base);
  let from = null;
  let blendFrom = null;

  const write = function (vals) {
    el.style.fontVariationSettings = font.axes.map(function (a) {
      return '"' + a.tag + '" ' + Math.round(vals[a.tag] * 100) / 100;
    }).join(", ");
  };

  const sweepAt = function (elapsed) {
    const i = Math.floor(elapsed / SEGMENT) % font.axes.length;
    const p = (elapsed % SEGMENT) / SEGMENT;
    const ax = font.axes[i];
    const b = base[ax.tag];
    let v;
    if (p < 1 / 3) v = lerpVal(b, ax.min, easeInOutVal(p * 3));
    else if (p < 2 / 3) v = lerpVal(ax.min, ax.max, easeInOutVal((p - 1 / 3) * 3));
    else v = lerpVal(ax.max, b, easeInOutVal((p - 2 / 3) * 3));
    const vals = Object.assign({}, base);
    vals[ax.tag] = v;
    return { vals: vals, tag: ax.tag };
  };

  const settle = function () {
    cancelAnimationFrame(frame);
    frame = 0;
    mode = "idle";
    current = Object.assign({}, base);
    el.style.fontVariationSettings = "";
    tags.forEach(function (t, idx) {
      t.classList.toggle("is-active", card.classList.contains("is-selected") && idx === 0);
    });
  };

  const frameFn = function (now) {
    const elapsed = Math.max(0, now - start);
    if (mode === "play") {
      if (elapsed >= cycles * font.axes.length * SEGMENT) { settle(); return; }
      const s = sweepAt(elapsed);
      const tagIndex = Math.floor(elapsed / SEGMENT) % tags.length;
      if (blendFrom && elapsed < BLEND) {
        const e = 1 - Math.pow(1 - elapsed / BLEND, 3);
        font.axes.forEach(function (a) { s.vals[a.tag] = lerpVal(blendFrom[a.tag], s.vals[a.tag], e); });
      }
      current = s.vals;
      write(current);
      tags.forEach(function (t, idx) {
        t.classList.toggle("is-active", idx === tagIndex);
      });
    } else if (mode === "return") {
      const p = Math.min(1, elapsed / RETURN);
      const e = 1 - Math.pow(1 - p, 3);
      font.axes.forEach(function (a) { current[a.tag] = lerpVal(from[a.tag], base[a.tag], e); });
      write(current);
      if (p >= 1) { settle(); return; }
    }
    frame = requestAnimationFrame(frameFn);
  };

  function play(times) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (mode === "play") return;
    blendFrom = mode === "return" ? Object.assign({}, current) : null;
    cancelAnimationFrame(frame);
    mode = "play";
    cycles = times || Infinity;
    start = performance.now();
    frame = requestAnimationFrame(frameFn);
  }

  function stop() {
    if (mode !== "play") return;
    tags.forEach(function (t, idx) {
      t.classList.toggle("is-active", card.classList.contains("is-selected") && idx === 0);
    });
    from = Object.assign({}, current);
    mode = "return";
    start = performance.now();
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(frameFn);
  }

  return { play: play, stop: stop };
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  if (!cards.length) return;

  const select = function (key) {
    cards.forEach(function (card) {
      const on = card.dataset.font === key;
      card.classList.toggle("is-selected", on);
      const btn = card.querySelector(".card__btn");
      if (btn) btn.setAttribute("aria-pressed", String(on));
      const tags = card.querySelectorAll(".card__axes li");
      tags.forEach(function (t, idx) {
        t.classList.toggle("is-active", on && idx === 0);
      });
    });
  };

  cards.forEach(function (card) {
    const btn = card.querySelector(".card__btn");
    const anim = specimenAnimator(card);
    let lastPointer = "mouse";

    card.addEventListener("pointerdown", function (e) {
      lastPointer = e.pointerType;
    });

    if (btn) {
      btn.addEventListener("click", function () {
        select(card.dataset.font);
        if (lastPointer === "touch") { anim.stop(); anim.play(1); }
        lastPointer = "mouse";
      });
      btn.addEventListener("focus", function () {
        if (btn.matches(":focus-visible")) anim.play();
      });
      btn.addEventListener("blur", function () {
        anim.stop();
      });
    }

    card.addEventListener("pointerenter", function (e) {
      if (e.pointerType === "mouse") anim.play();
    });

    card.addEventListener("pointerleave", function (e) {
      if (e.pointerType === "mouse") anim.stop();
    });
  });
});

/* kendali buka tutup bilah navigasi adaptif untuk layar gawai */
function initNavToggle() {
  const toggle = document.getElementById("nav-burger-btn") || document.querySelector(".nav__toggle");
  const panel = document.getElementById("nav-panel");
  const links = document.querySelectorAll(".nav__links a");
  if (!toggle || !panel) return;

  function closeMenu() {
    panel.classList.remove("is-open");
    toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    panel.classList.add("is-open");
    toggle.classList.add("is-active");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", function () {
    const isOpen = panel.classList.contains("is-open");
    if (isOpen) closeMenu();
    else openMenu();
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && panel.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener("click", function (e) {
    if (!panel.classList.contains("is-open")) return;
    if (!panel.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  const mqDesktop = window.matchMedia("(min-width: 768px)");
  if (mqDesktop && mqDesktop.addEventListener) {
    mqDesktop.addEventListener("change", function (e) {
      if (e.matches) closeMenu();
    });
  }

  /* klik logo navigasi untuk memuat ulang halaman ke puncak */
  const navLogo = document.querySelector(".nav__logo");
  if (navLogo) {
    navLogo.addEventListener("click", function (e) {
      e.preventDefault();
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo(0, 0);
      window.location.reload();
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initNavToggle();
});

/* ekspor fungsi ke ruang lingkup global agar dapat dipanggil berkas lain */
window.updateScreenReaderStatus = updateScreenReaderStatus;
window.setupExclusiveAccordion = setupExclusiveAccordion;
window.openAndScrollToEntry = openAndScrollToEntry;
window.updateStageWord = updateStageWord;
