import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { Reveal } from "./motion";
import { CONTACT } from "@/data/site";

export default function Location() {
  return (
    <section id="location" data-testid="location-section" className="section">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-12">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl uppercase leading-[1.15] tracking-[0.08em] text-[var(--gold)] sm:text-4xl lg:text-5xl">
              <span className="block">Location perfected.</span>
              <span className="block">Luxury meets convenience.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            {/* <div className="mt-12 flex max-w-lg gap-5 rounded-3xl border border-[#D4A53C]/30 bg-[#15120D]/70 p-8"> */}
            <div className="mt-12 flex max-w-lg gap-5 rounded-3xl border border-[#D4A53C]/30 bg-[#FBF5E8]/75 p-8">
            
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)]">
                <MapPin size={22} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Site</p>
                <p data-testid="location-address" className="mt-3 text-lg leading-relaxed text-[var(--ivory)]">{CONTACT.address}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="max-w-lg">
              <div data-testid="location-contact-details" className="mt-4 grid gap-px overflow-hidden rounded-3xl border border-[#D4A53C]/30 bg-[#D4A53C]/20 sm:grid-cols-2">
                {/* <div className="flex gap-4 bg-[#15120D] p-6"> */}
                <div className="flex gap-4 bg-[#FBF5E8] p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)]">
                    <Phone size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Phone</p>
                    {/* <a href={CONTACT.phoneHref} data-testid="location-phone" className="u-link mt-2 block break-words text-[var(--ivory)]">{CONTACT.phone}</a> */}
                    {CONTACT.phone.map((phone, index) => (
                      <a
                        key={index}
                        href={CONTACT.phoneHref[index]}
                        data-testid="footer-phone-link"
                        className="u-link"
                      >
                        {phone}
                        <br />
                      </a>
                      
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 bg-[#FBF5E8] p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)]">
                    <Mail size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Email</p>
                    <a href={`mailto:${CONTACT.email}`} data-testid="location-email" className="u-link mt-2 block break-words text-[var(--ivory)]">{CONTACT.email}</a>
                  </div>
                </div>
                {/* <div className="flex gap-4 bg-[#15120D] p-6 sm:col-span-2"> */}
                <div className="flex gap-4 bg-[#FBF5E8] p-6 sm:col-span-2">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)]">
                    <Building2 size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Office Address</p>
                    <p data-testid="location-office" className="mt-2 text-[var(--ivory)]">{CONTACT.office}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="h-[420px] lg:h-[620px]">
            <div className="relative h-full border border-[#D4A53C]/40 p-2">
              <iframe
                data-testid="location-map"
                title="Valeur Residences location"
                src={CONTACT.mapEmbed}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                className="map-frame h-full w-full"
              />
              <span className="absolute bottom-6 left-6 bg-[#0A0907] px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-[var(--gold)]">Valeur · Worli</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
