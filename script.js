/* ==========================================================
   STREET DETAIL — interações
   ========================================================== */

// >>> TROCAR pelo número real: 55 + DDD + número, só dígitos (ex.: 5547999998888)
const WHATSAPP_NUMERO = "5500000000000";

// Links de WhatsApp com mensagem pronta (atributo data-whats)
document.querySelectorAll("[data-whats]").forEach((el) => {
  const msg = encodeURIComponent(el.dataset.whats);
  el.href = `https://wa.me/${WHATSAPP_NUMERO}?text=${msg}`;
  el.target = "_blank";
  el.rel = "noopener";
});

// Header muda ao rolar
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Menu mobile
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const setMenu = (open) => {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  nav.classList.toggle("is-open", open);
  header.classList.toggle("menu-open", open);
};
toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// Animações de entrada (com pequeno atraso escalonado por grupo)
const reveals = document.querySelectorAll(".reveal");
const groups = new Map();
reveals.forEach((el) => {
  const parent = el.parentElement;
  const i = groups.get(parent) || 0;
  el.style.setProperty("--d", `${Math.min(i, 5) * 0.08}s`);
  groups.set(parent, i + 1);
});

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

// Brilho que segue o mouse nos cards de serviço
document.querySelectorAll(".service").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

// Comparador antes/depois
const compare = document.getElementById("compare");
const range = document.getElementById("compareRange");
if (compare && range) {
  const update = () => compare.style.setProperty("--pos", `${range.value}%`);
  range.addEventListener("input", update);
  update();
}

// FAQ: abre um de cada vez
const faqItems = document.querySelectorAll(".faq__item");
faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) faqItems.forEach((other) => { if (other !== item) other.open = false; });
  });
});

// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();
