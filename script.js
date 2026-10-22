/* =========================================================
   SCRIPT PORTOFOLIO
   ========================================================= */

/* ---------- Util ---------- */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const formatDate = (iso) => {
  // "2024-03" -> "Maret 2024"
  const [y, m] = iso.split("-");
  const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  return `${bulan[parseInt(m, 10) - 1]} ${y}`;
};

/* ---------- Dark mode ---------- */
(function initTheme() {
  const html = document.documentElement;
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (saved === "dark" || (!saved && prefersDark)) html.classList.add("dark");
  else html.classList.remove("dark");

  $("#themeToggle")?.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
    lucide.createIcons();
  });
})();

/* ---------- Mobile menu ---------- */
$("#menuToggle")?.addEventListener("click", () => {
  $("#mobileMenu")?.classList.toggle("hidden");
});
$$("#mobileMenu a").forEach(a => a.addEventListener("click", () => $("#mobileMenu").classList.add("hidden")));

/* ---------- Year ---------- */
$("#year").textContent = new Date().getFullYear();

/* =========================================================
   LIGHTBOX
   ========================================================= */
const lightbox = $("#lightbox");
const lightboxImg = $("#lightboxImg");
const lightboxCaption = $("#lightboxCaption");

function openLightbox(src, caption = "") {
  lightboxImg.src = src;
  lightboxCaption.textContent = caption;
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
  document.body.style.overflow = "";
  lightboxImg.src = "";
}
$("#lightboxClose")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

/* =========================================================
   SERTIFIKASI & PELATIHAN
   ========================================================= */
const FILTERS = [
  { key: "all",          label: "Semua" },
  { key: "pelatihan",    label: "Pelatihan" },
  { key: "sertifikasi",  label: "Sertifikasi" },
  { key: "webinar",      label: "Webinar" }
];

let activeFilter = "all";

function renderFilters() {
  const wrap = $("#certFilters");
  wrap.innerHTML = FILTERS.map(f => `
    <button data-filter="${f.key}"
      class="px-3 py-1.5 rounded-full border transition-colors text-xs font-medium
        ${f.key === activeFilter
          ? "bg-accent text-white border-accent"
          : "border-neutral-300 dark:border-neutral-700 hover:border-accent hover:text-accent"}">
      ${f.label}
    </button>
  `).join("");

  $$("#certFilters button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      renderFilters();
      renderCertifications();
    });
  });
}

function renderCertifications() {
  const grid = $("#certGrid");
  const empty = $("#certEmpty");

  const items = activeFilter === "all"
    ? certifications
    : certifications.filter(c => c.category === activeFilter);

  if (!items.length) {
    grid.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  grid.innerHTML = items.map(item => `
    <article class="group border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-900 hover:border-accent transition-colors flex flex-col">
      <button class="block aspect-[3/2] overflow-hidden bg-neutral-100 dark:bg-neutral-800"
        data-lightbox-img="${item.thumbnail}"
        data-lightbox-caption="${item.title}">
        <img src="${item.thumbnail}" alt="${item.title}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </button>

      <div class="p-4 flex-1 flex flex-col">
        <p class="text-xs uppercase tracking-wide text-accent font-medium mb-1">${item.category}</p>
        <h3 class="font-semibold leading-snug">${item.title}</h3>
        <p class="text-sm text-neutral-500 mt-1">${item.issuer} · ${formatDate(item.date)}</p>

        <div class="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-3 text-sm">
          ${item.pdfUrl ? `<a href="${item.pdfUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-accent hover:underline"><i data-lucide="file-text" class="w-4 h-4"></i> Sertifikat</a>` : ""}
          ${item.verifyUrl ? `<a href="${item.verifyUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-neutral-500 hover:text-accent"><i data-lucide="external-link" class="w-4 h-4"></i> Verifikasi</a>` : ""}
        </div>
      </div>
      
    </article>
  `).join("");

  // Bind lightbox
  $$("[data-lightbox-img]", grid).forEach(btn => {
    btn.addEventListener("click", () => {
      openLightbox(btn.dataset.lightboxImg, btn.dataset.lightboxCaption || "");
    });
  });

  lucide.createIcons();
}

/* =========================================================
   PENGALAMAN
   ========================================================= */
function renderExperiences() {
  const wrap = $("#expList");

  wrap.innerHTML = experiences.map(exp => `
    <article class="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
      <button class="exp-toggle w-full text-left p-5 flex items-start gap-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
        data-target="exp-body-${exp.id}">
        ${exp.logo
          ? `<img src="${exp.logo}" alt="" class="w-12 h-12 rounded-md object-cover bg-neutral-100 dark:bg-neutral-100 shrink-0" />`
          : `<div class="w-12 h-12 rounded-md bg-neutral-100 dark:bg-neutral-800 grid place-items-center shrink-0"><i data-lucide="briefcase" class="w-5 h-5 text-neutral-400"></i></div>`}

        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="font-semibold">${exp.role}</h3>
            <span class="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-500">${exp.type}</span>
          </div>
          <p class="text-sm text-neutral-500 mt-0.5">${exp.company} · ${exp.period}</p>
          <p class="text-sm text-neutral-700 dark:text-neutral-300 mt-2 leading-relaxed">${exp.description}</p>
        </div>

        <i data-lucide="chevron-down" class="exp-chevron w-5 h-5 text-neutral-400 shrink-0 mt-1 transition-transform"></i>
      </button>

      <div id="exp-body-${exp.id}" class="exp-body hidden border-t border-neutral-200 dark:border-neutral-800 p-5 bg-neutral-50/50 dark:bg-neutral-900/50">
        ${renderExpBody(exp)}
      </div>
    </article>
  `).join("");

  // Toggle expand
  $$(".exp-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      const chevron = btn.querySelector(".exp-chevron");
      const isHidden = target.classList.contains("hidden");

      target.classList.toggle("hidden");
      chevron.style.transform = isHidden ? "rotate(180deg)" : "";
    });
  });

  // Bind lightbox untuk dokumentasi
  $$("[data-lightbox-img]", wrap).forEach(el => {
    el.addEventListener("click", () => {
      openLightbox(el.dataset.lightboxImg, el.dataset.lightboxCaption || "");
    });
  });

  lucide.createIcons();
}

function renderExpBody(exp) {
  const docs = exp.documentations?.length ? `
    <div>
      <p class="text-xs uppercase tracking-wide text-neutral-500 mb-3">Dokumentasi</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        ${exp.documentations.map(d => `
          <button class="aspect-square rounded-md overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-accent transition-colors"
            data-lightbox-img="${d.image}"
            data-lightbox-caption="${d.caption || ""}">
            <img src="${d.image}" alt="${d.caption || ""}" class="w-full h-full object-cover" />
          </button>
        `).join("")}
      </div>
    </div>
  ` : "";

  const attach = exp.attachments?.length ? `
    <div class="mt-5">
      <p class="text-xs uppercase tracking-wide text-neutral-500 mb-3">Berkas</p>
      <div class="flex flex-wrap gap-3">
        ${exp.attachments.map(a => `
          <a href="${a.pdfUrl || "#"}" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-accent hover:text-accent transition-colors ${!a.pdfUrl ? 'opacity-60 pointer-events-none' : ''}">
            <i data-lucide="file-text" class="w-4 h-4"></i>
            ${a.label}
          </a>
        `).join("")}
      </div>
    </div>
  ` : "";

  if (!docs && !attach) {
    return `<p class="text-sm text-neutral-500">Belum ada dokumentasi.</p>`;
  }
  return `<div class="space-y-2">${docs}${attach}</div>`;
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  renderFilters();
  renderCertifications();
  renderExperiences();
});