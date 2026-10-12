import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/data/site";

export default function TopNav({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0907]/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:h-24 lg:px-12">
          <a href="#home" data-testid="brand-logo" className="flex items-center gap-3">
            <img src="/images/logo-mark.png" alt="MG Consultants" className="h-11 w-auto md:h-12" />
            <span className="font-display hidden text-[13px] tracking-[0.42em] text-[var(--gold)] sm:block">CONSULTANTS</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex xl:gap-9">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                data-testid={`nav-link-${n.id}`}
                className={`nav-link text-[13px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                  active === n.id ? "is-active text-[var(--gold)]" : "text-[var(--ivory)] hover:text-[var(--gold)]"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            data-testid="mobile-menu-toggle"
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="text-[var(--ivory)] lg:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-[60] bg-[#0A0907] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <img src="/images/logo-mark.png" alt="MG Consultants" className="h-11" />
          <button data-testid="mobile-menu-close" aria-label="Close menu" onClick={() => setOpen(false)} className="p-1 text-[var(--ivory)]">
            <X size={30} />
          </button>
        </div>
        <nav className="mt-4 flex flex-col">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              data-testid={`mobile-nav-link-${n.id}`}
              onClick={() => setOpen(false)}
              className="font-display border-b border-white/10 px-6 py-4 text-2xl uppercase tracking-[0.1em] text-[var(--ivory)] transition-colors hover:text-[var(--gold)]"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
