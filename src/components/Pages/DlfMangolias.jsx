import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, ChevronRight, MapPin, Phone, ShieldCheck, Waves, Dumbbell, Trees, CarFront, Sparkles, Building2, Maximize2 } from "lucide-react";
import { toast } from "sonner";
import { submitEnquiry } from "@/components/site/api";
// import ContactPanel from "@/components/site/ContactPanel";
import HeroForm from "../site/HeroForm";
import SiteFooter from "../site/SiteFooter";
import { Toaster } from "sonner";

const highlights = [
  { icon: Building2, title: "An exclusive address", text: "A private residential setting in Sector 28, along Gurugram’s Golf Course Road." },
  { icon: Maximize2, title: "Expansive residences", text: "Spacious 4 BHK residences, with indicative sizes of approximately 5,500–6,500 sq. ft.*" },
  { icon: Waves, title: "Resort-inspired living", text: "A curated lifestyle experience with leisure, wellness and relaxation spaces.*" },
  { icon: ShieldCheck, title: "Privacy and peace of mind", text: "A considered residential environment with security and resident-focused services.*" },
];

const amenities = [
  { icon: Waves, title: "Swimming pool", text: "A refreshing retreat for unhurried days." },
  { icon: Dumbbell, title: "Fitness and wellness", text: "Dedicated spaces to support an active lifestyle." },
  { icon: Trees, title: "Landscaped greens", text: "Green pockets and outdoor spaces to unwind." },
  { icon: Sparkles, title: "Club and social spaces", text: "Places to gather, relax and entertain.*" },
  { icon: ShieldCheck, title: "Security services", text: "Resident-focused access and security features.*" },
  { icon: CarFront, title: "Convenient parking", text: "Parking and mobility facilities, subject to project specifications.*" },
];

// function EnquiryForm() {
//   const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "4 BHK Residence" });
//   const [busy, setBusy] = useState(false);

//   const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

//   async function onSubmit(event) {
//     event.preventDefault();
//     if (!form.name.trim() || !form.phone.trim()) {
//       toast.error("Please enter your name and mobile number.");
//       return;
//     }
//     setBusy(true);
//     try {
//       await submitEnquiry({
//         ...form,
//         source: "DLF Magnolias 2 landing page",
//         project: "DLF Magnolias 2",
//         consent: true,
//       });
//       toast.success("Thank you. Our team will contact you shortly.");
//       setForm({ name: "", phone: "", email: "", interest: "4 BHK Residence" });
//     } catch (error) {
//       toast.error("We couldn't submit your enquiry. Please try again.");
//     } finally {
//       setBusy(false);
//     }
//   }

//   return (
//     <form onSubmit={onSubmit} className="rounded-2xl border border-[#D4A53C]/40 bg-white p-6 shadow-[0_20px_70px_rgba(64,47,19,0.10)] sm:p-8">
//       <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B7625]">Private consultation</p>
//       <h3 className="mt-3 font-serif text-3xl text-[#30291D]">Request a call back</h3>
//       <p className="mt-2 text-sm leading-6 text-[#766C5D]">Share your details to receive project information and arrange a private discussion.</p>
//       <div className="mt-6 grid gap-3">
//         <label className="block">
//           <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[#766C5D]">Full name *</span>
//           <input required value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" placeholder="Your name" className="w-full rounded-lg border border-[#E6DDCC] bg-[#FFFCF6] px-4 py-3 text-sm text-[#30291D] outline-none transition focus:border-[#D4A53C]" />
//         </label>
//         <label className="block">
//           <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[#766C5D]">Mobile number *</span>
//           <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" placeholder="Your mobile number" className="w-full rounded-lg border border-[#E6DDCC] bg-[#FFFCF6] px-4 py-3 text-sm text-[#30291D] outline-none transition focus:border-[#D4A53C]" />
//         </label>
//         <label className="block">
//           <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[#766C5D]">Email address</span>
//           <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" placeholder="you@example.com" className="w-full rounded-lg border border-[#E6DDCC] bg-[#FFFCF6] px-4 py-3 text-sm text-[#30291D] outline-none transition focus:border-[#D4A53C]" />
//         </label>
//         <label className="block">
//           <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[#766C5D]">Interested in</span>
//           <select value={form.interest} onChange={(e) => update("interest", e.target.value)} className="w-full rounded-lg border border-[#E6DDCC] bg-[#FFFCF6] px-4 py-3 text-sm text-[#30291D] outline-none focus:border-[#D4A53C]">
//             <option>4 BHK Residence</option>
//             <option>Pricing and availability</option>
//             <option>Site visit</option>
//           </select>
//         </label>
//       </div>
//       <button type="submit" disabled={busy} className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#D4A53C] px-5 py-3.5 text-sm font-semibold text-[#2C2416] transition hover:bg-[#C39830] disabled:cursor-not-allowed disabled:opacity-60">
//         {busy ? "Submitting…" : "Request a call back"} <ArrowUpRight size={17} />
//       </button>
//       <p className="mt-3 text-[11px] leading-5 text-[#8B8172]">By submitting, you agree that MG Consultants may contact you regarding this enquiry. Project details and availability are subject to confirmation.</p>
//     </form>
//   );
// }

export default function DlfMagnolias() {
  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#30291D]">
      {/* Compact page-only header; this does not replace the site's global navigation. */}
      {/* <header className="relative z-10 border-b border-[#D4A53C]/25 bg-[#FBF8F1]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="/" aria-label="MG Consultants home" className="flex items-center gap-3">
            <img src="/images/logo-mark.png" alt="MG Consultants" className="h-10 w-10 object-contain" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#54452A] sm:text-sm">MG Consultants</span>
          </a>
          <a href="#dlf-enquiry" className="inline-flex items-center gap-2 rounded-full border border-[#D4A53C] px-4 py-2.5 text-xs font-semibold text-[#72551C] transition hover:bg-[#D4A53C]/10 sm:px-5 sm:text-sm">Enquire now <ArrowUpRight size={15} /></a>
        </div>
      </header> */}
<header className="relative z-10 border-b border-[#D4A53C]/25 bg-[#FBF8F1]">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
    <a href="/" aria-label="MG Consultants home" className="flex items-center gap-3">
      <img
        src="/images/logo-mark.png"
        alt="MG Consultants"
        className="h-10 w-10 object-contain"
      />
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#54452A] sm:text-sm">
        MG Consultants
      </span>
    </a>

    <div className="flex items-center gap-2 sm:gap-3">
      <a
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-[#D4A53C] px-3 py-2.5 text-xs font-semibold text-[#72551C] transition hover:bg-[#D4A53C]/10 sm:px-5 sm:text-sm"
      >
        <ArrowUpRight size={15} className="rotate-[-135deg]" />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Home</span>
      </a>

      <a
        href="#dlf-enquiry"
        className="inline-flex items-center gap-2 rounded-full bg-[#D4A53C] px-3 py-2.5 text-xs font-semibold text-[#30291D] transition hover:bg-[#C39830] sm:px-5 sm:text-sm"
      >
        Enquire Now
        <ArrowUpRight size={15} />
      </a>
    </div>
  </div>
</header>

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20 bg-[#E8DFCE]" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FBF8F1]/95 via-[#FBF8F1]/85 to-[#FBF8F1]/35" />
          <div className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] md:block">
            <img src="/images/dlf-mangolias.webp" alt="Luxury residential architecture" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBF8F1] via-[#FBF8F1]/10 to-transparent" />
          </div>
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 md:min-h-[640px] md:grid-cols-[1.05fr_.75fr] md:py-24">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A53C]/50 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#86651F] sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-[#D4A53C]" /> Exclusive property preview</div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8B6A27]">Sector 28 · Golf Course Road · Gurugram</p>
              <h1 className="mt-4 font-serif text-5xl leading-[1.04] tracking-tight text-[#30291D] sm:text-6xl lg:text-7xl">DLF <span className="italic text-[#A77C25]">Magnolias 2</span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#655A49] sm:text-lg sm:leading-8">A considered expression of space, privacy and elevated living in one of Gurugram’s most sought-after neighbourhoods.</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div><p className="text-xs uppercase tracking-[0.18em] text-[#8B8172]">Indicative starting price</p><p className="mt-1 font-serif text-3xl text-[#72551C] sm:text-4xl">₹30 Cr<span className="text-xl">+</span></p></div>
                <div className="hidden h-12 w-px bg-[#D4A53C]/50 sm:block" />
                <div><p className="text-xs uppercase tracking-[0.18em] text-[#8B8172]">Residence type</p><p className="mt-1 text-lg font-medium text-[#30291D]">4 BHK residences*</p></div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#dlf-enquiry" className="inline-flex items-center gap-2 rounded-lg bg-[#D4A53C] px-6 py-3.5 text-sm font-semibold text-[#2C2416] transition hover:bg-[#C39830]">Enquire privately <ArrowUpRight size={17} /></a>
                <a href="#dlf-overview" className="inline-flex items-center gap-2 rounded-lg border border-[#C8B78F] bg-white/50 px-6 py-3.5 text-sm font-semibold text-[#55472F] transition hover:bg-white">Explore the residence <ArrowDown size={16} /></a>
              </div>
              <p className="mt-5 max-w-lg text-[11px] leading-5 text-[#8B8172]">*Project specifications, sizes, pricing and availability are indicative and must be verified with the developer or authorised representatives.</p>
            </div>
            <div className="md:pl-4">
              <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white p-2 shadow-[0_25px_90px_rgba(64,47,19,0.16)] md:hidden">
                <img src="/images/facade.jpg" alt="Luxury residential exterior" className="h-64 w-full rounded-xl object-cover" />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 md:mt-0">
                {[{ value: "7", label: "Towers*" }, { value: "G+30", label: "Indicative height*" }, { value: "12.5", label: "Acres*" }].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-[#D4A53C]/30 bg-white/85 p-4 text-center shadow-sm backdrop-blur-sm">
                    <p className="font-serif text-2xl text-[#8A6720] sm:text-3xl">{stat.value}</p><p className="mt-1 text-[10px] uppercase leading-4 tracking-wider text-[#827666] sm:text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section id="dlf-overview" className="scroll-mt-8 px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B7625]">A more considered way to live</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291D] sm:text-5xl">Space to breathe. Room to belong.</h2>
              <p className="mt-5 text-base leading-8 text-[#766C5D]">Discover a private residential proposition shaped around generous interiors, thoughtful amenities and the convenience of a well-connected Gurugram address.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-xl border border-[#E8DECA] bg-white p-6 transition hover:-translate-y-1 hover:border-[#D4A53C]/70 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8EFD9] text-[#987222]"><Icon size={21} strokeWidth={1.7} /></div>
                  <h3 className="mt-5 font-serif text-xl text-[#30291D]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#766C5D]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Residence feature */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-[#E8DECA] bg-[#F2EBDD] md:grid-cols-2">
            <div className="min-h-[300px] sm:min-h-[420px]"><img src="/images/living.webp" alt="Spacious luxury residence interior" className="h-full min-h-[300px] w-full object-cover sm:min-h-[420px]" /></div>
            <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B7625]">The residences</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291D] sm:text-5xl">Generous by design.</h2>
              <p className="mt-5 text-sm leading-7 text-[#766C5D] sm:text-base">Explore spacious 4 BHK residence options with an emphasis on comfort, light and room for the everyday rituals that make a home.*</p>
              <div className="mt-7 space-y-3">
                {["Indicative residence sizes: 5,500–6,500 sq. ft.*", "Premium interiors and specifications, subject to confirmation*", "Private consultation for current inventory and floor plans"].map((item) => <p key={item} className="flex gap-3 text-sm leading-6 text-[#554B3B]"><Check className="mt-1 shrink-0 text-[#9B7625]" size={17} />{item}</p>)}
              </div>
              <a href="#dlf-enquiry" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#B78B2E] pb-2 text-sm font-semibold text-[#72551C]">Request floor plans <ChevronRight size={16} /></a>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-[#F3EDDF] px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B7625]">Lifestyle, thoughtfully curated</p><h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-[#30291D] sm:text-5xl">Everyday, with a little more extraordinary.</h2></div>
              <p className="max-w-md text-sm leading-7 text-[#766C5D]">A preview of lifestyle features commonly associated with the project concept. Please confirm final amenities and specifications before making a decision.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map(({ icon: Icon, title, text }) => <article key={title} className="flex gap-4 rounded-xl border border-[#E1D4B9] bg-[#FBF8F1] p-5 sm:p-6"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4A53C]/45 text-[#987222]"><Icon size={20} strokeWidth={1.7} /></div><div><h3 className="font-serif text-xl text-[#30291D]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#766C5D]">{text}</p></div></article>)}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B7625]">The neighbourhood</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291D] sm:text-5xl">Connected to the city. Removed from the rush.</h2>
              <p className="mt-5 text-base leading-8 text-[#766C5D]">Set in Sector 28 on Golf Course Road, Gurugram, the address offers access to the city’s business, retail and hospitality districts. Travel times vary by route and traffic.</p>
              <div className="mt-7 flex items-start gap-3 rounded-xl border border-[#E8DECA] bg-white p-5"><MapPin className="mt-1 shrink-0 text-[#9B7625]" size={20} /><div><p className="font-semibold text-[#30291D]">DLF Magnolias 2</p><p className="mt-1 text-sm leading-6 text-[#766C5D]">Sector 28, Golf Course Road, Gurugram, Haryana</p></div></div>
              <a href="https://www.google.com/maps/search/?api=1&query=DLF+Magnolias+Golf+Course+Road+Gurugram" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#72551C]">View area on map <ArrowUpRight size={16} /></a>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#D4A53C]/30 bg-white p-2 shadow-xl"><img src="/images/balcony.jpg" alt="Open balcony with a view" className="h-[300px] w-full rounded-xl object-cover sm:h-[450px]" /><div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/70 bg-[#FBF8F1]/95 p-5 backdrop-blur-sm"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7625]">A coveted Gurugram address</p><p className="mt-2 font-serif text-2xl text-[#30291D]">Golf Course Road</p></div></div>
          </div>
        </section>

        {/* Enquiry */}
        <section id="dlf-enquiry" className="scroll-mt-8 border-y border-[#D4A53C]/25 bg-[#F3EDDF] px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B7625]">Begin a conversation</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291D] sm:text-5xl">Your next address deserves a closer look.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#766C5D]">Request a private consultation for pricing, floor plans, current availability or to discuss a site visit with MG Consultants.</p>
              <div className="mt-8 flex items-center gap-3 text-sm text-[#665A47]"><Phone size={17} className="text-[#9B7625]" /> A team member will contact you using the details you provide.</div>
            </div>
            {/* <EnquiryForm />
            <ContactPanel /> */}
            <HeroForm />
          </div>
        </section>
      </main>

      {/* <footer className="bg-[#EDE4D3] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs leading-6 text-[#766C5D] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MG Consultants. All rights reserved.</p>
          <p className="max-w-2xl">MG Consultants is an independent real estate consultancy and is not DLF Ltd. Project names, images and trademarks belong to their respective owners. Information is indicative, images are for representation only, and all details are subject to developer confirmation.</p>
        </div>
      </footer> */}
      <SiteFooter />
      <Toaster
        position="top-center"
        theme="dark"
        toastOptions={{
          style: { background: "#15120D", border: "1px solid rgba(212,165,60,0.4)", color: "#F4EDE4" },
        }}
      />
    </div>
  );
}
