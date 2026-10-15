import { CONTACT } from "@/data/site";

export default function SiteFooter() {
  return (
    // <footer data-testid="site-footer" className="border-t border-[#D4A53C]/25 bg-[#070605]">
    <footer data-testid="site-footer" className="border-t border-[#D4A53C]/25 bg-[#EAE0C9]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="font-display text-2xl tracking-[0.08em] text-[var(--gold)]">MG Consultants</h3>
            <div data-testid="footer-description" className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--ivory)]">
              {/* <p>Independent Real Estate Consultants | Delhi &amp; Gurgaon</p> */}
              <p>MG consultant is a Delhi and Gurgaon based Real Estate Channel Partners selling residential and commercial properties starting 2cr</p>
              <p>{CONTACT.office}</p>
              <p>
                {/* <a href={CONTACT.phoneHref} data-testid="footer-phone-link" className="u-link">{CONTACT.phone}</a> */}
                {CONTACT.phone.map((phone, index) => (
                  <a
                    key={index}
                    href={CONTACT.phoneHref[index]}
                    data-testid="footer-phone-link"
                    className="u-link"
                  >
                    {phone} <span className="mx-2 text-[var(--gold)]">|</span>
                  </a>
                ))}
                {/* <span className="mx-2 text-[var(--gold)]">|</span> */}
                <a href={`mailto:${CONTACT.email}`} data-testid="footer-email-link" className="u-link">{CONTACT.email}</a>
                <span className="mx-2 text-[var(--gold)]">|</span>
                <span data-testid="footer-udyam">{CONTACT.udyam}</span>
              </p>
            </div>
            <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {[
                { href: "/privacy-policy", tid: "footer-privacy-link", label: "Privacy Policy" },
                { href: "/terms", tid: "footer-terms-link", label: "Terms & Conditions" },
                { href: "/disclaimer", tid: "footer-disclaimer-link", label: "Disclaimer" },
                { href: "/cookie-policy", tid: "footer-cookie-link", label: "Cookie Policy" },
              ].map((l) => (
                <a key={l.href} href={l.href} data-testid={l.tid} className="text-[var(--ivory)] underline decoration-[#D4A53C]/60 underline-offset-4 transition-colors hover:text-[var(--gold)]">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <img alt="MG Consultants" data-testid="footer-logo" className="w-40 self-start md:w-48" src="/images/logo-full.png" />
        </div>
        <p data-testid="footer-disclaimer" className="mt-10 border-t border-white/10 pt-6 text-sm leading-relaxed text-[var(--muted)]">
          <strong className="text-[var(--ivory)]">Disclaimer:</strong> MG Consultants is an independent real estate consultancy and is not DLF Ltd., Smartworld
          Developers, or the official website of any developer/project mentioned on this website. All trademarks and brand names belong to their respective
          owners. Project prices, availability and details are subject to change and should be independently verified. Images are for representation only.
        </p>
        <p className="mt-6 text-xs text-[var(--muted)]">© {new Date().getFullYear()} MG Consultants. All rights reserved.</p>
      </div>
    </footer>
  );
}
