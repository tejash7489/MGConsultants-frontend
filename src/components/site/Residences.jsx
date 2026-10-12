// import { useEffect, useRef, useState } from "react";
// import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
// import { Heading } from "./motion";
// import { PLANS } from "@/data/site";
// import { scrollToSection, preselectInterest } from "./scroll";

// const SLIDE_MS = 4500;

// export default function Residences() {
//   const viewRef = useRef(null);
//   const [perView, setPerView] = useState(3);
//   const [step, setStep] = useState(0);
//   const [idx, setIdx] = useState(0);
//   const [open, setOpen] = useState(0);

//   const maxIdx = Math.max(0, PLANS.length - perView);

//   useEffect(() => {
//     const compute = () => {
//       const pv = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
//       setPerView(pv);
//       const slide = viewRef.current?.querySelector("[data-slide]");
//       if (slide) setStep(slide.getBoundingClientRect().width);
//     };
//     compute();
//     window.addEventListener("resize", compute);
//     return () => window.removeEventListener("resize", compute);
//   }, []);

//   useEffect(() => {
//     const t = setInterval(() => {
//       setIdx((i) => (i >= PLANS.length - perView ? 0 : i + 1));
//       setOpen((o) => (o >= PLANS.length - perView ? 0 : o + 1));
//     }, SLIDE_MS);
//     return () => clearInterval(t);
//   }, [perView, idx]);

//   const goto = (n) => {
//     const next = Math.min(Math.max(n, 0), maxIdx);
//     setIdx(next);
//     setOpen(next);
//   };

//   return (
//     <section id="price" data-testid="price-section" className="section">
//       <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
//         <Heading lines={["Residences & pricing", "from 3 BHK to 5 BHK"]} />

//         <div className="relative mt-16" ref={viewRef}>
//           <div className="overflow-hidden" data-testid="price-slider">
//             <div className="-ml-6 flex items-start transition-transform duration-700 ease-out" style={{ transform: `translate3d(-${idx * step}px, 0, 0)` }}>
//               {PLANS.map((p, i) => (
//                 <div key={p.name} data-slide data-testid={`price-slide-${i}`} className="min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
//                   <div data-testid={`price-card-${p.name.toLowerCase().replace(/\s+/g, "-")}`} className="flex h-full flex-col items-center border border-[#D4A53C]/30 bg-[#0A0907]/60 px-8 py-10 text-center transition-colors duration-500 hover:border-[var(--gold)]">
//                     <div className="h-48 w-full overflow-hidden">
//                       <img alt={p.name} src={p.img} className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-110" />
//                     </div>
//                     <h3 className="font-display mt-8 text-2xl uppercase tracking-[0.15em] text-[var(--gold)]">{p.name}</h3>
//                     <p className="mt-2 text-sm italic text-[var(--muted)]">{p.tagline}</p>
//                     <div className="mt-6 space-y-1 text-[var(--ivory)]">
//                       <p>{p.floors}</p>
//                       <p>{p.type}</p>
//                       <p>{p.area}</p>
//                     </div>
//                     {/* <div className={`overflow-hidden transition-[max-height,opacity,margin] duration-700 ${open === i ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
//                       <p className="text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
//                     </div> */}
//                     {/* <button
//                       data-testid={`price-toggle-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
//                       aria-label="Toggle details"
//                       onClick={() => setOpen(open === i ? -1 : i)}
//                       className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)] transition-colors duration-300 hover:bg-[var(--gold)] hover:text-[#0A0907]"
//                     >
//                       <Plus size={16} className={`transition-transform duration-500 ${open === i ? "rotate-45" : ""}`} />
//                     </button> */}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mt-10 flex items-center justify-center gap-6">
//             <button data-testid="price-prev" aria-label="Previous" onClick={() => goto(idx - 1)} className="circle-btn-static flex h-12 w-12 items-center justify-center rounded-full border border-[#D4A53C]/50 text-[var(--gold)] transition-colors duration-300 hover:bg-[var(--gold)] hover:text-[#0A0907]">
//               <ArrowLeft size={20} />
//             </button>
//             <p className="font-display text-sm tracking-[0.3em] text-[var(--gold)]">
//               {String(idx + 1).padStart(2, "0")} / {String(PLANS.length).padStart(2, "0")}
//             </p>
//             <button data-testid="price-next" aria-label="Next" onClick={() => goto(idx + 1)} className="circle-btn-static flex h-12 w-12 items-center justify-center rounded-full border border-[#D4A53C]/50 text-[var(--gold)] transition-colors duration-300 hover:bg-[var(--gold)] hover:text-[#0A0907]">
//               <ArrowRight size={20} />
//             </button>
//           </div>

//           <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
//             <button data-testid="price-brochure-btn" className="btn-gold" onClick={() => { preselectInterest(PLANS[idx].name); scrollToSection("contact"); }}>
//               Request Price Sheet
//             </button>
//             <button data-testid="price-contact-btn" className="btn-ghost" onClick={() => scrollToSection("contact")}>
//               Get in Touch
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import {
  ArrowRight,
  House,
  Maximize,
  CarFront,
  Coins,
  FileText,
  TrendingUp,
  HandCoins,
} from "lucide-react";

const PROPERTY = {
  configuration: "3 BHK + 1 Servant Room",
  area: "2,282 sq. ft.",
  parking: "2 Car Parks",
  appreciation: "Potential 2× in 3–4 Years*",
  rental: "₹2.5 Lakhs / month*",
};

const PROPERTY_DETAILS = [
  {
    label: "Configuration",
    value: PROPERTY.configuration,
    Icon: House,
  },
  {
    label: "Total Area",
    value: PROPERTY.area,
    Icon: Maximize,
  },
  {
    label: "Car Parking",
    value: PROPERTY.parking,
    Icon: CarFront,
  },
  {
    label: "Exclusive Pricing",
    value: "Available on Consultation",
    Icon: Coins,
  },
  {
    label: "Priority Booking",
    value: "Enquire for EOI Details",
    Icon: FileText,
  },
  {
    label: "Expected Appreciation",
    value: PROPERTY.appreciation,
    Icon: TrendingUp,
  },
];

export default function Residences() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(
        'Contact section not found. Add id="contact" to your contact section.'
      );
    }
  };

  const handlePriceSheet = () => {
    const interestField = document.querySelector(
      '[name="interest"]'
    );

    if (interestField) {
      interestField.value = "Private Pricing";
      interestField.dispatchEvent(
        new Event("change", { bubbles: true })
      );
    }

    scrollToContact();
  };

  return (
    <section
      id="residences"
      className="relative overflow-hidden bg-[#0A0907] px-4 py-16 text-[var(--ivory)] sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--gold)] opacity-[0.045] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            An Exclusive Opportunity
          </p>

          <h2 className="font-display text-4xl leading-tight text-[var(--ivory)] sm:text-5xl lg:text-6xl">
            Residences &amp; Pricing
          </h2>

          <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--muted)] sm:text-xs sm:tracking-[0.45em]">
            3 BHK Luxury Residences
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-[var(--gold)]" />
        </div>

        {/* Single property card */}
        <div className="overflow-hidden rounded-xl border border-[var(--gold)]/50 bg-[#0D0C09] shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* Property image */}
            <div className="group relative min-h-[320px] overflow-hidden bg-[#17130E] sm:min-h-[440px] lg:min-h-[640px]">
              <img
                src="/images/luxury-residence-interior.png"
                alt="Elegant luxury residence living room with panoramic views"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                  Premium Residential Offering
                </span>

                <h3 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
                  A Residence Above
                  <br />
                  The Ordinary
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                  Thoughtfully designed luxury living with generous
                  space and premium comfort.
                </p>
              </div>
            </div>

            {/* Property details */}
            <div className="flex min-w-0 flex-col p-5 sm:p-8 lg:p-10">
              <div className="mb-7">
                <div className="mb-3 flex items-center gap-4">
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold)] sm:text-xs">
                    Size Available
                  </span>

                  <div className="h-px flex-1 bg-[var(--gold)]/30" />
                </div>

                <h3 className="font-display text-3xl leading-tight text-[var(--ivory)] sm:text-4xl xl:text-[2.65rem]">
                  3 BHK + 1 Servant Room
                  <span className="mt-1 block text-[var(--gold)]">
                    + 2 Car Parks
                  </span>
                </h3>
              </div>

              {/* Property information grid */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PROPERTY_DETAILS.map(({ label, value, Icon }) => (
                  <div
                    key={label}
                    className="group flex min-h-[94px] min-w-0 items-center gap-3 rounded-md border border-white/[0.10] bg-white/[0.015] p-4 transition-colors duration-300 hover:border-[var(--gold)]/45 hover:bg-white/[0.035] sm:gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[var(--gold)]">
                      <Icon
                        size={25}
                        strokeWidth={1.35}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-xs text-[var(--muted)]">
                        {label}
                      </p>

                      <p className="break-words text-sm font-medium leading-6 text-[var(--ivory)] sm:text-[15px]">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Rental information */}
                <div className="flex min-h-[100px] items-center gap-4 rounded-md border border-[var(--gold)]/30 bg-[var(--gold)]/[0.045] p-4 sm:col-span-2 sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center text-[var(--gold)]">
                    <HandCoins
                      size={29}
                      strokeWidth={1.35}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-xs text-[var(--muted)]">
                      Expected Monthly Rental
                    </p>

                    <p className="font-display text-2xl text-[var(--ivory)] sm:text-3xl">
                      {PROPERTY.rental}
                    </p>

                    <p className="mt-1 text-xs text-[var(--muted)]">
                      Maintenance charges extra
                    </p>
                  </div>
                </div>
              </div>

              {/* Private pricing message */}
              <div className="mt-6 rounded-md border border-[var(--gold)]/25 bg-[var(--gold)]/[0.04] p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
                  Private Client Enquiries
                </p>

                <h4 className="mt-3 font-display text-2xl leading-snug text-[var(--ivory)] sm:text-3xl">
                  Some Details Are Better Shared Personally.
                </h4>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Discover the pricing, booking terms and availability
                  through a personalised consultation with our property
                  advisory team.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={handlePriceSheet}
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[var(--gold)] px-5 py-3 text-sm font-medium text-[#15110B] transition duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0C09]"
                >
                  Unlock Private Pricing

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-[var(--gold)]/70 px-5 py-3 text-sm font-medium text-[var(--gold)] transition duration-300 hover:bg-[var(--gold)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                >
                  Request a Consultation

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Disclaimer */}
              <p className="mt-5 text-[10px] leading-5 text-[var(--muted)]">
                *Rental and appreciation figures are indicative and
                subject to confirmation. Appreciation and rental returns
                are not guaranteed. Pricing, booking terms, availability
                and applicable charges should be confirmed with the
                consultant.
              </p>
            </div>
          </div>
        </div>

        {/* Supporting note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-[var(--muted)]">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
          />

          <span>
            Connect with our team for a personalised property consultation.
          </span>
        </div>
      </div>
    </section>
  );
}
