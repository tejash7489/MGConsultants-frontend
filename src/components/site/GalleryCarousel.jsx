import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Heading } from "./motion";
import { GALLERY } from "@/data/site";

const N = GALLERY.length;
const SLIDE_MS = 4000;

export default function GalleryCarousel() {
  const viewRef = useRef(null);
  const trackRef = useRef(null);
  const busyRef = useRef(false);
  const [index, setIndex] = useState(N);
  const [animate, setAnimate] = useState(true);
  const [itemW, setItemW] = useState(0);
  const [viewW, setViewW] = useState(0);

  const real = ((index % N) + N) % N;

  useEffect(() => {
    const measure = () => {
      const slide = viewRef.current?.querySelector("[data-gslide]");
      if (slide) setItemW(slide.getBoundingClientRect().width);
      if (viewRef.current) setViewW(viewRef.current.clientWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const move = (dir) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setAnimate(true);
    setIndex((v) => v + dir);
    setTimeout(() => {
      busyRef.current = false;
    }, 900);
  };

  useEffect(() => {
    const t = setInterval(() => move(1), SLIDE_MS);
    return () => clearInterval(t);
  }, []);

  const onEnd = (e) => {
    if (e.target !== trackRef.current || e.propertyName !== "transform") return;
    busyRef.current = false;
    if (index >= 2 * N || index < N) {
      setAnimate(false);
      setIndex(real + N);
    }
  };

  const offset = viewW / 2 - itemW * (index + 0.5);

  return (
    <section id="gallery" data-testid="gallery-section" className="section bg-[var(--card)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Heading lines={["Gallery"]} />
      </div>
      <div className="relative mt-16">
        <div className="overflow-hidden" data-testid="gallery-carousel" ref={viewRef}>
          <div
            ref={trackRef}
            className={`flex items-center ${animate ? "transition-transform duration-700 ease-out" : ""}`}
            style={{ transform: `translate3d(${offset}px, 0, 0)` }}
            onTransitionEnd={onEnd}
          >
            {[...GALLERY, ...GALLERY, ...GALLERY].map((g, i) => (
              <div key={i} data-gslide data-testid={`gallery-item-${i}`} className="min-w-0 flex-[0_0_85%] px-2 md:flex-[0_0_55%] md:px-3">
                <div className={`overflow-hidden transition-[transform,opacity] duration-700 ${i === index ? "scale-100 opacity-100" : "scale-[0.86] opacity-50"}`}>
                  <img alt={g.caption} src={g.src} className="h-[260px] w-full object-cover md:h-[520px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button data-testid="gallery-prev" aria-label="Previous" onClick={() => move(-1)} className="circle-btn left-4 md:left-[12%]">
          <ArrowLeft size={20} />
        </button>
        <button data-testid="gallery-next" aria-label="Next" onClick={() => move(1)} className="circle-btn right-4 md:right-[12%]">
          <ArrowRight size={20} />
        </button>
      </div>
      <p data-testid="gallery-caption" className="mt-8 text-center text-sm uppercase tracking-[0.3em] text-[var(--gold)]">{GALLERY[real].caption}</p>
    </section>
  );
}
