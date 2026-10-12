export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -76 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const preselectInterest = (name) =>
  window.dispatchEvent(new CustomEvent("preselect-interest", { detail: name }));
