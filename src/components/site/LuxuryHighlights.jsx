import { Heading, Reveal } from "./motion";
import { HIGHLIGHTS } from "@/data/site";

export default function LuxuryHighlights() {
  return (
    <section id="highlights" data-testid="highlights-section" className="section bg-[var(--card)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Heading lines={["Luxury beyond", "the ordinary"]} />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.title} delay={(i % 3) * 0.08}>
                <div data-testid={`highlight-card-${i}`} className="group relative h-[340px] overflow-hidden">
                  <img alt={h.title} src={h.img} className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
                  {/* <div className="absolute inset-0 bg-[#0A0907]/65 transition-colors duration-700 group-hover:bg-[#0A0907]/45" /> */}
                  <div className="absolute inset-0 bg-[#F3EAD8]/70 transition-colors duration-700 group-hover:bg-[#F3EAD8]/45" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)] transition-transform duration-500 group-hover:-translate-y-1">
                      <Icon size={26} strokeWidth={1.3} />
                    </span>
                    <h3 className="mt-6 text-xl leading-snug text-[var(--ivory)]">{h.title}</h3>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm text-[var(--ivory)] opacity-0 transition-[max-height,opacity] duration-700 group-hover:max-h-24 group-hover:opacity-100">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
