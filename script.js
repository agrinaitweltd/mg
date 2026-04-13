/* ============================================================
   MILLZ GRILL — MAIN SCRIPT
   Page transitions, lightbox, filters, spotlight, parallax
   ============================================================ */

/* --- Year -------------------------------------------------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* --- Loading Screen ---------------------------------------- */
const loadingScreen = document.getElementById("loading-screen");
if (loadingScreen) {
  const dismiss = () => loadingScreen.classList.add("hidden");
  if (document.readyState === "complete") {
    setTimeout(dismiss, 200);
  } else {
    window.addEventListener("load", () => setTimeout(dismiss, 250));
  }
}

/* --- Mobile Menu ------------------------------------------- */
const menuBtn = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
if (menuBtn && siteNav) {
  menuBtn.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!open));
    siteNav.classList.toggle("open");
  });
}

/* --- Active Nav Link --------------------------------------- */
const path = window.location.pathname.replace(/\/$/, "") || "/";
document.querySelectorAll(".site-nav a").forEach((a) => {
  const h = (a.getAttribute("href") || "").replace(/\/$/, "") || "/";
  if (h === path) a.classList.add("active");
});

/* --- Scroll Reveal (staggered siblings) -------------------- */
const revealObs = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      // stagger siblings in a grid
      const siblings = e.target.parentElement?.querySelectorAll(".reveal");
      if (siblings) {
        let i = 0;
        siblings.forEach((s) => { if (!s.classList.contains("visible")) { s.style.transitionDelay = (i++ * 0.07) + "s"; } });
      }
      e.target.classList.add("visible");
      revealObs.unobserve(e.target);
    }
  }),
  { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

/* --- Parallax on scroll ------------------------------------ */
const parallaxEls = document.querySelectorAll("[data-parallax]");
if (parallaxEls.length) {
  const onParallax = () => {
    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.2;
      const rect = el.closest("section")?.getBoundingClientRect();
      if (!rect) return;
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  };
  window.addEventListener("scroll", onParallax, { passive: true });
  onParallax();
}

/* --- Animated Counters ------------------------------------- */
const countObs = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.count, 10);
    if (isNaN(target)) return;
    const dur = 1800, t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countObs.unobserve(el);
  }),
  { threshold: 0.5 }
);
document.querySelectorAll("[data-count]").forEach((el) => countObs.observe(el));

/* --- Page Transitions -------------------------------------- */
const overlay = document.querySelector(".page-transition");
if (overlay) {
  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    if (link.getAttribute("href") === path || link.classList.contains("nav-cta") && link.getAttribute("href") === "/contact") {
      // skip same-page links
    }
    link.addEventListener("click", (e) => {
      const dest = link.getAttribute("href");
      if (!dest || dest === path || dest.startsWith("#")) return;
      e.preventDefault();
      overlay.classList.add("active");
      setTimeout(() => (window.location.href = dest), 450);
    });
  });
  // fade in on load
  window.addEventListener("pageshow", () => overlay.classList.remove("active"));
}

/* --- Spotlight Card Glow (Menu page) ----------------------- */
document.querySelectorAll(".spotlight-card").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
    card.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
  });
});

/* --- Menu Filter (Menu page) ------------------------------- */
const filterBtns = document.querySelectorAll(".menu-filter__btn");
const menuCards = document.querySelectorAll(".spotlight-card[data-category]");
if (filterBtns.length) {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.filter;
      menuCards.forEach((c) => {
        c.style.display = (cat === "all" || c.dataset.category === cat) ? "" : "none";
      });
    });
  });
}

/* --- Gallery Filter (Gallery page) ------------------------- */
const galBtns = document.querySelectorAll(".gallery-filter__btn");
const galItems = document.querySelectorAll(".masonry-full__item[data-category]");
if (galBtns.length) {
  galBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      galBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.filter;
      galItems.forEach((item) => {
        item.style.display = (cat === "all" || item.dataset.category === cat) ? "" : "none";
      });
    });
  });
}

/* --- Lightbox (Gallery page) ------------------------------- */
const lightbox = document.getElementById("lightbox");
const lbImg = lightbox?.querySelector(".lightbox__img");
const lbItems = document.querySelectorAll("[data-lightbox]");
let lbIndex = 0;
const lbSrcs = [];

if (lightbox && lbItems.length) {
  lbItems.forEach((item, i) => {
    const img = item.querySelector("img");
    if (img) lbSrcs.push({ src: img.src, alt: img.alt });
    item.addEventListener("click", () => openLightbox(i));
  });

  function openLightbox(i) {
    lbIndex = i;
    lbImg.src = lbSrcs[i].src;
    lbImg.alt = lbSrcs[i].alt;
    lightbox.hidden = false;
    requestAnimationFrame(() => lightbox.classList.add("open"));
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    setTimeout(() => { lightbox.hidden = true; }, 300);
    document.body.style.overflow = "";
  }

  function navigate(dir) {
    lbIndex = (lbIndex + dir + lbSrcs.length) % lbSrcs.length;
    lbImg.src = lbSrcs[lbIndex].src;
    lbImg.alt = lbSrcs[lbIndex].alt;
  }

  lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox__prev").addEventListener("click", () => navigate(-1));
  lightbox.querySelector(".lightbox__next").addEventListener("click", () => navigate(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
  });
}

/* --- Depth Card Hover (Home page) -------------------------- */
document.querySelectorAll(".depth-card").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px) scale(1.02)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  document.querySelectorAll(".about-parallax__img").forEach((img) => {
    img.style.transform = `translateY(${y * 0.08}px)`;
  });
}, { passive: true });
