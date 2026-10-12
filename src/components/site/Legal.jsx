import { ArrowLeft } from "lucide-react";

export default function Legal({ title, paragraphs }) {
  return (
    <div className="min-h-screen bg-[#0A0907] text-[var(--ivory)]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center px-6 lg:h-24 lg:px-12">
          <a href="/" data-testid="legal-back-home" className="flex items-center gap-3">
            <img src="/images/logo-mark.png" alt="MG Consultants" className="h-11 w-auto" />
            <span className="font-display text-[13px] tracking-[0.42em] text-[var(--gold)]">CONSULTANTS</span>
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-3xl uppercase tracking-[0.08em] text-[var(--gold)] sm:text-4xl">{title}</h1>
        <div className="mt-8 space-y-4 leading-relaxed text-[var(--muted)]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <a href="/" data-testid="legal-back-btn" className="btn-ghost mt-12">
          <ArrowLeft size={16} /> Back to Home
        </a>
      </main>
    </div>
  );
}
