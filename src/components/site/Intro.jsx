import { Reveal } from "./motion";

export default function Intro() {
  return (
    <section id="overview" data-testid="overview-section" className="section">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <h2 className="font-display text-5xl uppercase leading-[1.05] tracking-[0.06em] text-[var(--gold)] sm:text-6xl lg:text-7xl">
            <span className="block">Beyond</span>
            <span className="block">the ordinary</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 h-px max-w-3xl bg-[var(--gold)]" />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[var(--gold)] md:text-lg">Independent Real Estate Consultants | Delhi & Gurgaon
</p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-9">
            <p className="text-base leading-relaxed text-[var(--ivory)] md:text-lg">
              MG Consultants provides institutional-grade real estate advisory, connecting high-net-worth investors to premier Delhi-NCR opportunities with transparent execution.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Presented exclusively by MG Consultants — your trusted partner for premium property across Grugram.
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[var(--gold)]">RERA approved | DLRERA2021P0007 | Limited inventory</p>
            {/* <p className="font-display mt-4 text-3xl uppercase tracking-[0.06em] text-[var(--gold)]">Starting from ₹ 6.8 Cr*</p> */}
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_1.4fr_1fr]">
            {[
              { src: "/images/living.jpg", h: "h-[260px] md:h-[380px]" },
              { src: "/images/facade.jpg", h: "h-[340px] md:h-[460px]" },
              { src: "/images/bedroom.jpg", h: "h-[260px] md:h-[380px]" },
            ].map((img) => (
              <div key={img.src} className="group overflow-hidden">
                <img alt="Valeur interiors" src={img.src} className={`w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105 ${img.h}`} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
