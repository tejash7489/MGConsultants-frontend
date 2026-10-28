
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ThankYou() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FBF8F1] px-5 py-12">
      <div className="w-full max-w-2xl rounded-3xl border border-[#D4A53C]/35 bg-white px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#D4A53C]/40 bg-[#F8EFD9]">
          <CheckCircle2 size={42} className="text-[#9B7625]" strokeWidth={1.5} />
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#9B7625]">
          Enquiry Submitted
        </p>

        <h1 className="mt-4 font-serif text-4xl text-[#30291D] sm:text-6xl">
          Thank You!
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#766C5D] sm:text-base">
          Thank you for your interest in MG Consultants. Your enquiry has
          been received successfully.
        </p>

        <p className="mt-3 text-sm leading-7 text-[#766C5D]">
          Our team will contact you shortly to discuss your requirements.
        </p>

        <div className="mx-auto my-8 h-px w-20 bg-[#D4A53C]" />

        <p className="font-serif text-2xl text-[#72551C]">
          MG Consultants
        </p>

        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#8B8172]">
          Exceptional Addresses
        </p>

        <Link
          to="/"
          className="mt-9 inline-flex items-center justify-center gap-3 rounded-lg bg-[#D4A53C] px-7 py-4 text-sm font-semibold text-[#30291D] transition hover:bg-[#C39830]"
        >
          Back to Home
          <ArrowRight size={17} />
        </Link>
      </div>
    </main>
  );
}
