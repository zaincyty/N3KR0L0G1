/* m41n.js - interaktivitas tipis lembaran nekrologi di bawah 100 baris */
if (history.scrollRestoration) history.scrollRestoration = "manual";
window.scrollTo(0, 0);
window.addEventListener("beforeunload", function () { window.scrollTo(0, 0); });

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
  const words = window.WORD_ENTRIES || [];
  let currentStageIndex = 9; /* lema renjana sebagai pembuka default */
  function setStage(idx) {
    if (!words.length) return;
    currentStageIndex = (idx + words.length) % words.length;
    if (window.updateStageWord) window.updateStageWord(words[currentStageIndex], currentStageIndex, words.length);
  }

  /* 1. M1MB4R L3M4 DIN4M1S - kendali tombol sebelum dan sesudah - */
  const prevBtn = document.getElementById("stage-prev-btn");
  const nextBtn = document.getElementById("stage-next-btn");
  const ruler = document.getElementById("stage-gauge");
  if (prevBtn) prevBtn.addEventListener("click", function () { setStage(currentStageIndex - 1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { setStage(currentStageIndex + 1); });
  if (ruler) ruler.addEventListener("click", function (e) {
    const c = e.target.closest(".stage-ruler__cell");
    if (c) setStage(parseInt(c.getAttribute("data-index"), 10));
  });

  /* tombol bawa ke mimbar utama dari dalam kartu */
  document.addEventListener("click", function (e) {
    const promoteBtn = e.target.closest(".btn-promote-stage");
    if (!promoteBtn) return;
    const wordId = promoteBtn.getAttribute("data-word-id");
    const foundIdx = words.findIndex(function (w) { return w.id === wordId; });
    if (foundIdx !== -1) {
      setStage(foundIdx);
      const stageElem = document.getElementById("obituari-utama");
      if (stageElem) stageElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  /* 2. F1LT3R D3K4D3 - menyaring lema berdasarkan dekade tahun - */
  const filterButtons = document.querySelectorAll(".filter-chip"), directoryItems = document.querySelectorAll(".directory-item");
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedDecade = button.getAttribute("data-decade");
      filterButtons.forEach(function (btn) { btn.classList.remove("active"); btn.setAttribute("aria-pressed", "false"); });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      let visibleCount = 0;
      directoryItems.forEach(function (item) {
        const isMatch = selectedDecade === "all" || item.getAttribute("data-decade") === selectedDecade;
        item.hidden = !isMatch;
        if (isMatch) visibleCount++;
        else { const d = item.querySelector(".obituary-details"); if (d) d.open = false; }
      });
      if (window.updateScreenReaderStatus) window.updateScreenReaderStatus(visibleCount, selectedDecade);
    });
  });

  /* 3. N3KR0L0G1 AC4K - membuka lema acak dan menampilkannya ke mimbar - */
  const randomBtn = document.getElementById("random-obituary-btn"), editionToggle = document.getElementById("edition-toggle");
  if (randomBtn && words.length) {
    randomBtn.addEventListener("click", function () {
      const randIdx = Math.floor(Math.random() * words.length);
      setStage(randIdx);
      if (window.openAndScrollToEntry) window.openAndScrollToEntry("entry-" + words[randIdx].id);
    });
  }

  /* 4. sakelar edisi malam minimalis */
  function applyTheme(isNight) {
    document.body.classList.toggle("is-night-edition", isNight);
    if (editionToggle) {
      editionToggle.setAttribute("aria-pressed", isNight ? "true" : "false");
      const glyph = editionToggle.querySelector(".theme-glyph");
      const label = editionToggle.querySelector(".theme-label");
      if (glyph) glyph.textContent = isNight ? "○" : "◐";
      if (label) label.textContent = isNight ? "edisi pagi" : "edisi malam";
    }
  }
  if (editionToggle) {
    if (localStorage.getItem("nekrologi_edisi") === "malam") applyTheme(true);
    editionToggle.addEventListener("click", function () {
      const isNight = !document.body.classList.contains("is-night-edition");
      applyTheme(isNight);
      localStorage.setItem("nekrologi_edisi", isNight ? "malam" : "pagi");
    });
  }

  /* 5. navigasi panah keyboard */
  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") setStage(currentStageIndex - 1);
    if (e.key === "ArrowRight") setStage(currentStageIndex + 1);
  });
  if (window.location.hash) {
    const hashIdx = words.findIndex(function (w) { return w.id === window.location.hash.substring(1); });
    if (hashIdx !== -1) setStage(hashIdx);
  }
  if (window.setupExclusiveAccordion) window.setupExclusiveAccordion();
  window.addEventListener("load", function () { window.scrollTo(0, 0); });
});
