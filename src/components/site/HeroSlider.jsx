import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/site";
import HeroForm from "./HeroForm";
import { scrollToSection } from "./scroll";

const SLIDE_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), SLIDE_MS);
    return () => clearInterval(t);
  }, [index]);

  return (
    <section id="home" data-testid="hero-section" className="relative min-h-[100svh] overflow-hidden lg:h-[95svh] lg:min-h-[720px]">
      <div className="absolute inset-0">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.src}
            data-testid={`hero-slide-${i}`}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <img alt={s.caption} src={s.src} className={`h-full w-full object-cover ${i === index ? "kenburns" : "scale-[1.12]"}`} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#F3EAD8] via-[#F3EAD8]/60 to-[#F3EAD8]/35" />
      

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1440px] items-end gap-12 px-6 pb-24 pt-32 md:pb-14 lg:h-full lg:min-h-0 lg:grid-cols-12 lg:px-12 lg:pb-16">
        <div className="lg:col-span-7">
          {/* <motion.p
            key={index}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            data-testid="hero-slide-caption"
            className="mb-6 text-sm uppercase tracking-[0.35em] text-[var(--gold)] [text-shadow:0_1px_12px_rgba(10,9,7,0.9)]"
          >
            {String(index + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")} — {HERO_SLIDES[index].caption}
          </motion.p> */}

          <h1 data-testid="hero-title" className="font-display text-[11vw] uppercase leading-[1] tracking-[0.06em] text-[var(--ivory)] sm:text-6xl xl:text-7xl">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
                The One Midtown
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block text-[var(--gold)]" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
                Moti Nagar West Delhi
              </motion.span>
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="max-w-md text-lg leading-relaxed text-[var(--ivory)]"
            >
              {/* Ultra-luxury sea-view residences at Valeur, Worli. 3, 4 &amp; 5 BHK from ₹ 6.8 Cr*. */}
              {/* Luxury Residences Starting at ₹7 Cr* */}
              A Premium Project by DLF
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button data-testid="hero-explore-btn" className="btn-gold" onClick={() => scrollToSection("price")}>
                View Residences <ArrowUpRight size={16} />
              </button>
              <button data-testid="hero-visit-btn" className="btn-ghost" onClick={() => scrollToSection("contact")}>
                Schedule a Visit
              </button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex items-center">
            <div className="flex items-center gap-3" data-testid="hero-slider-dots">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.src}
                  data-testid={`hero-dot-${i}`}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className="relative h-[2px] w-10 overflow-hidden bg-white/25 md:w-14"
                >
                  {i === index && <span key={index} className="hero-progress absolute inset-y-0 left-0 bg-[var(--gold)]" />}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}>
            <HeroForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
