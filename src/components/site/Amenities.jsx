import { useState } from "react";
import { Heading } from "./motion";
import { AMENITIES } from "@/data/site";

export default function Amenities() {
  const [tab, setTab] = useState(0);
  const active = AMENITIES[tab];
  return (
    <section id="amenities" data-testid="amenities-section" className="section relative overflow-hidden">
      {AMENITIES.map((a, i) => (
        <div
          key={a.label}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === tab ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${a.img})` }}
        />
      ))}
      <div className="absolute inset-0 bg-[#0A0907]/85" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
        <Heading lines={["Infinite amenities.", "Lifestyle beyond measure."]} />
        <div className="mt-14 flex gap-8 overflow-x-auto border-b border-[#D4A53C]/25 md:gap-10">
          {AMENITIES.map((a, i) => (
            <button
              key={a.label}
              data-testid={`amenity-tab-${i}`}
              onClick={() => setTab(i)}
              className={`whitespace-nowrap border-b-2 pb-4 text-[13px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                i === tab ? "border-[var(--gold)] text-[var(--gold)]" : "border-transparent text-[var(--muted)] hover:text-[var(--ivory)]"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
        <div key={tab} className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {active.items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="flex items-center gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D4A53C]/60 text-[var(--gold)]">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <span className="text-lg text-[var(--ivory)]">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
