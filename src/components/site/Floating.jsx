import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { scrollToSection } from "./scroll";

export default function Floating() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        data-testid="get-in-touch-tab"
        onClick={() => scrollToSection("contact")}
        className="fixed right-0 top-1/3 z-40 hidden rounded-l-2xl bg-[var(--gold)] px-3 py-6 text-xs uppercase tracking-[0.25em] text-[#0A0907] transition-[padding] duration-300 [writing-mode:vertical-rl] hover:pr-5 md:block"
      >
        Get in touch
      </button>
      <button
        data-testid="get-in-touch-mobile"
        onClick={() => scrollToSection("contact")}
        className="fixed bottom-5 left-5 z-40 rounded-full bg-[var(--gold)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[#0A0907] shadow-lg md:hidden"
      >
        Get in touch
      </button>
      <button
        data-testid="scroll-to-top-btn"
        onClick={toTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4A53C]/50 bg-[#0A0907]/80 text-[var(--gold)] backdrop-blur transition-opacity duration-500 ${
          show ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
