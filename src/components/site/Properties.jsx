// import { useEffect, useRef, useState } from "react";
// import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
// import { Heading } from "./motion";
// import { PLANS } from "@/data/site";
// import { scrollToSection, preselectInterest } from "./scroll";import React from 'react'

// const SLIDE_MS = 4500;

// export default function Properties() {
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
//     <section id="properties" data-testid="price-section" className="section">
//       <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
//         {/* <Heading lines={["Residences & pricing", "from 3 BHK to 5 BHK"]} /> */}
//         <div className="mb-10 text-center sm:mb-14">
//           <p className="text-sm uppercase tracking-[0.35em] text-[var(--gold)]">
//             Our portfolio
//           </p>

//           <h2 className="font-display mt-4 text-5xl uppercase leading-[1.05] tracking-[0.06em] text-[var(--gold)] sm:text-6xl lg:text-7xl">
//             Properties
//           </h2>

//           <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--muted)] sm:text-xs sm:tracking-[0.45em]">
//           {/* <p className="mt-6 max-w-xl text-lg text-[var(--muted)]"> */}

//             Four landmark residences presented exclusively by MG Consultants.
//           </p>

//           <div className="mx-auto mt-6 h-px w-16 bg-[var(--gold)]" />
//         </div>

//         <div className="relative mt-16" ref={viewRef}>
//           <div className="overflow-hidden" data-testid="price-slider">
//             <div className="-ml-6 flex items-start transition-transform duration-700 ease-out" style={{ transform: `translate3d(-${idx * step}px, 0, 0)` }}>
//               {PLANS.map((p, i) => (
//                 // <div key={p.name} data-slide data-testid={`price-slide-${i}`} className="min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
//                 <div key={`${p.name}-${i}`} data-slide data-testid={`price-slide-${i}`} className="...">
//                   <div data-testid={`price-card-${p.name.toLowerCase().replace(/\s+/g, "-")}`} className="flex h-full flex-col items-center border border-[#D4A53C]/30 bg-[#0A0907]/60 px-8 py-10 text-center transition-colors duration-500 hover:border-[var(--gold)]">
//                     <div className="h-48 w-full overflow-hidden">
//                       <img alt={p.name} src={p.img} className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-110" />
//                     </div>
//                     <h3 className="font-display mt-8 text-2xl uppercase tracking-[0.15em] text-[var(--gold)]">{p.name}</h3>
//                     <p className="mt-2 text-sm italic text-[var(--muted)]">{p.tagline}</p>

// <div className="mt-6 space-y-2 text-[var(--ivory)]">
//   <p>{p.type}</p>
//   <p className="text-sm text-[var(--muted)]">{p.tagline}</p>
//   <p className="pt-2 font-medium text-[var(--gold)]">
//     {p.area}
//   </p>
// </div>

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


// // import { useEffect, useRef, useState } from "react";
// // import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
// // import { Heading } from "./motion";
// // import { PLANS } from "@/data/site";
// // import { scrollToSection, preselectInterest } from "./scroll";

// // const SLIDE_MS = 4500;

// // export default function Residences() {
// //   const viewRef = useRef(null);
// //   const [perView, setPerView] = useState(3);
// //   const [step, setStep] = useState(0);
// //   const [idx, setIdx] = useState(0);
// //   const [open, setOpen] = useState(0);

// //   const maxIdx = Math.max(0, PLANS.length - perView);

// //   useEffect(() => {
// //     const compute = () => {
// //       const pv = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
// //       setPerView(pv);
// //       const slide = viewRef.current?.querySelector("[data-slide]");
// //       if (slide) setStep(slide.getBoundingClientRect().width);
// //     };
// //     compute();
// //     window.addEventListener("resize", compute);
// //     return () => window.removeEventListener("resize", compute);
// //   }, []);

// //   useEffect(() => {
// //     const t = setInterval(() => {
// //       setIdx((i) => (i >= PLANS.length - perView ? 0 : i + 1));
// //       setOpen((o) => (o >= PLANS.length - perView ? 0 : o + 1));
// //     }, SLIDE_MS);
// //     return () => clearInterval(t);
// //   }, [perView, idx]);

// //   const goto = (n) => {
// //     const next = Math.min(Math.max(n, 0), maxIdx);
// //     setIdx(next);
// //     setOpen(next);
// //   };

// //   return (
// //     <section id="price" data-testid="price-section" className="section">
// //       <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
// //         <Heading lines={["Residences & pricing", "from 3 BHK to 5 BHK"]} />

// //         <div className="relative mt-16" ref={viewRef}>
// //           <div className="overflow-hidden" data-testid="price-slider">
// //             <div className="-ml-6 flex items-start transition-transform duration-700 ease-out" style={{ transform: `translate3d(-${idx * step}px, 0, 0)` }}>
// //               {PLANS.map((p, i) => (
// //                 <div key={p.name} data-slide data-testid={`price-slide-${i}`} className="min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
// //                   <div data-testid={`price-card-${p.name.toLowerCase().replace(/\s+/g, "-")}`} className="flex h-full flex-col items-center border border-[#D4A53C]/30 bg-[#0A0907]/60 px-8 py-10 text-center transition-colors duration-500 hover:border-[var(--gold)]">
// //                     <div className="h-48 w-full overflow-hidden">
// //                       <img alt={p.name} src={p.img} className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-110" />
// //                     </div>
// //                     <h3 className="font-display mt-8 text-2xl uppercase tracking-[0.15em] text-[var(--gold)]">{p.name}</h3>
// //                     <p className="mt-2 text-sm italic text-[var(--muted)]">{p.tagline}</p>
// //                     <div className="mt-6 space-y-1 text-[var(--ivory)]">
// //                       <p>{p.floors}</p>
// //                       <p>{p.type}</p>
// //                       <p>{p.area}</p>
// //                     </div>
// //                     {/* <div className={`overflow-hidden transition-[max-height,opacity,margin] duration-700 ${open === i ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
// //                       <p className="text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
// //                     </div> */}
// //                     {/* <button
// //                       data-testid={`price-toggle-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
// //                       aria-label="Toggle details"
// //                       onClick={() => setOpen(open === i ? -1 : i)}
// //                       className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)] transition-colors duration-300 hover:bg-[var(--gold)] hover:text-[#0A0907]"
// //                     >
// //                       <Plus size={16} className={`transition-transform duration-500 ${open === i ? "rotate-45" : ""}`} />
// //                     </button> */}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="mt-10 flex items-center justify-center gap-6">
// //             <button data-testid="price-prev" aria-label="Previous" onClick={() => goto(idx - 1)} className="circle-btn-static flex h-12 w-12 items-center justify-center rounded-full border border-[#D4A53C]/50 text-[var(--gold)] transition-colors duration-300 hover:bg-[var(--gold)] hover:text-[#0A0907]">
// //               <ArrowLeft size={20} />
// //             </button>
// //             <p className="font-display text-sm tracking-[0.3em] text-[var(--gold)]">
// //               {String(idx + 1).padStart(2, "0")} / {String(PLANS.length).padStart(2, "0")}
// //             </p>
// //             <button data-testid="price-next" aria-label="Next" onClick={() => goto(idx + 1)} className="circle-btn-static flex h-12 w-12 items-center justify-center rounded-full border border-[#D4A53C]/50 text-[var(--gold)] transition-colors duration-300 hover:bg-[var(--gold)] hover:text-[#0A0907]">
// //               <ArrowRight size={20} />
// //             </button>
// //           </div>

// //           <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
// //             <button data-testid="price-brochure-btn" className="btn-gold" onClick={() => { preselectInterest(PLANS[idx].name); scrollToSection("contact"); }}>
// //               Request Price Sheet
// //             </button>
// //             <button data-testid="price-contact-btn" className="btn-ghost" onClick={() => scrollToSection("contact")}>
// //               Get in Touch
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



import { ArrowUpRight, MapPin, Building2 } from "lucide-react";
import { Heading } from "./motion";
import { PLANS } from "@/data/site";
import { scrollToSection, preselectInterest } from "./scroll";


export default function Properties() {
  return (
    <section
      id="properties"
      data-testid="price-section"
      className="section"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)]">
            Curated luxury collection
          </p>

          <h2 className="font-display mt-4 text-4xl uppercase leading-tight tracking-[0.06em] text-[var(--gold)] sm:text-5xl lg:text-7xl">
            Exceptional Properties
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Discover distinguished residences at some of India's
            most prestigious addresses.
          </p>

          <div className="mx-auto mt-7 h-px w-20 bg-[var(--gold)]" />
        </div>

        {/* Property cards */}
        {/* <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4"> */}
        {/* <div className="grid grid-cols-4 gap-4">
          {PLANS.map((p, i) => (
            <article
              key={p.id || `${p.name}-${i}`}
              data-testid={`price-card-${i}`}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-[#D4A53C]/25 bg-[#FBF5E8] shadow-[0_8px_30px_rgba(40,30,10,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4A53C]/70 hover:shadow-[0_20px_45px_rgba(40,30,10,0.14)]"
            > */}
              {/* Property image */}
              {/* <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                /> */}

                {/* Soft ivory image overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#17130D]/65 via-transparent to-[#FFFDF7]/10" /> */}

                {/* Collection number */}
                {/* <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center border border-white/70 bg-white/85 font-display text-sm text-[#80601E] backdrop-blur-sm">
                  {String(i + 1).padStart(2, "0")}
                </div> */}

                {/* Property category */}
                {/* <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/85">
                    Exclusive listing
                  </p>

                  <h3 className="font-display mt-2 text-2xl uppercase leading-tight tracking-[0.06em] text-white">
                    {p.name}
                  </h3>
                </div>
              </div> */}

              {/* Property information */}
              {/* <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={17}
                    className="mt-1 shrink-0 text-[#A77B24]"
                  />

                  <p className="text-sm leading-6 text-[#756957]">
                    {p.tagline}
                  </p>
                </div> */}

                {/* <div className="mt-6 border-t border-[#D4A53C]/25 pt-5">
                  <div className="flex items-center gap-2 text-[#887B68]">
                    <Building2 size={16} />
                    <span className="text-[10px] uppercase tracking-[0.22em]">
                      Property type
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-[#40372B]">
                    {p.type}
                  </p>
                </div> */}

                {/* <div className="mt-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#887B68]">
                    Starting price
                  </p>

                  <p className="font-display mt-2 text-2xl text-[#98701E]">
                    {p.area}
                  </p>
                </div> */}

                {/* Spacer keeps buttons aligned */}
                {/* <div className="flex-1" /> */}

                {/* Placeholder action: add a URL later */}
                {/* <button
                  type="button"
                  data-testid={`property-explore-${i}`}
                  onClick={() => {
                    if (p.link) {
                      window.open(p.link, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="mt-7 flex w-full items-center justify-between border border-[#C6A35B]/60 px-5 py-4 text-left text-xs uppercase tracking-[0.18em] text-[#80601E] transition-colors duration-300 hover:bg-[#D4A53C] hover:text-white"
                >
                  <span>Explore Residence</span>
                  <ArrowUpRight size={17} />
                </button>
              </div> */}

              {/* Decorative gold bottom edge */}
              {/* <div className="h-[3px] w-0 bg-[#D4A53C] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div> */}

        {/* delete */}

{/* Property cards */}
{/* <div className="grid grid-cols-4 gap-4"> */}
<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
  {PLANS.map((p, i) => (
    <article
      key={p.id || `${p.name}-${i}`}
      data-testid={`price-card-${i}`}
      className="group relative flex min-w-0 flex-col border border-[#E5DFD3] bg-[#FFFDF8] shadow-[0_5px_18px_rgba(35,28,16,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(35,28,16,0.14)]"
    >
      {/* Property image */}
      <div className="relative h-40 overflow-hidden sm:h-48 lg:h-52">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17130D]/40 to-transparent" />

        {/* Number badge */}
        <div className="absolute bottom-2 left-1/2 flex h-10 w-10 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-4 border-[#FFFDF8] bg-[#29251E] font-display text-sm text-white">
          {i + 1}
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col items-center px-3 pb-5 pt-8 text-center sm:px-4 sm:pb-7 sm:pt-9">
        <h3 className="font-display text-base font-semibold leading-snug text-[#29251E] sm:text-lg lg:text-xl">
          {p.name}
        </h3>

        <div className="mt-3 h-px w-10 bg-[#D4A53C]" />

        <p className="mt-3 text-xs leading-relaxed text-[#796F60] sm:text-sm">
          {p.tagline}
        </p>

        <p className="mt-4 text-xs font-medium uppercase tracking-wider text-[#6F6046] sm:text-sm">
          {p.type}
        </p>

        <p className="mt-3 font-display text-base font-semibold text-[#A87516] sm:text-lg">
          Starting {p.area.replace(/^₹/, "₹")}
        </p>

        {/* Add the property URL later using p.link */}
        <button
          type="button"
          onClick={() => {
            if (p.link) {
              // window.open(p.link, "_blank", "noopener,noreferrer");
              window.location.href = p.link;
            }
          }}
          className="mt-5 inline-flex items-center justify-center gap-2 border border-[#D4A53C]/70 px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] text-[#80601E] transition-colors hover:bg-[#D4A53C] hover:text-white sm:text-xs"
        >
          {p.button}
          <ArrowUpRight size={14} />
        </button>
      </div>
    </article>
  ))}
</div>

        {/* delete */}

        {/* Section CTA */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-sm text-[var(--muted)]">
            Looking for a residence tailored to your preferences?
          </p>

          <button
            type="button"
            data-testid="price-contact-btn"
            className="btn-gold"
            onClick={() => scrollToSection("contact")}
          >
            Request a Private Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
