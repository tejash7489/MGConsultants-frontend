import { MARQUEE_ITEMS } from "@/data/site";

const Row = ({ hidden }) => (
  <div className="flex shrink-0 items-center" aria-hidden={hidden}>
    {MARQUEE_ITEMS.map((t) => (
      // <span key={t} className="font-display flex items-center whitespace-nowrap px-8 text-2xl uppercase tracking-[0.12em] text-[#F4EDE4]/70 md:text-4xl">
      <span key={t} className="font-display flex items-center whitespace-nowrap px-8 text-2xl uppercase tracking-[0.12em] text-[#2C2014]/75 md:text-4xl">
        {t}
        <span className="ml-16 text-base not-italic text-[var(--gold)]">✦</span>
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    // <div data-testid="marquee-strip" className="overflow-hidden border-y border-[#D4A53C]/25 bg-[#0A0907] py-7">
    <div data-testid="marquee-strip" className="overflow-hidden border-y border-[#D4A53C]/25 bg-[var(--card)] py-7">
      <div className="marquee-track flex w-max">
        <Row hidden={false} />
        <Row hidden={true} />
      </div>
    </div>
  );
}
