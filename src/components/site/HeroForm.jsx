// import { useState } from "react";
// import { ArrowUpRight, ChevronDown } from "lucide-react";
// import { toast } from "sonner";
// import { PLANS } from "@/data/site";
// import { PillField } from "./PillField";
// import { submitEnquiry } from "./api";

// export default function HeroForm() {
//   const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "" });
//   const [busy, setBusy] = useState(false);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.name.trim() || !form.phone.trim()) {
//       toast.error("Please fill in your name and mobile number.");
//       return;
//     }
//     setBusy(true);
//     try {
//       await submitEnquiry({ ...form, source: "Book a site visit", consent: true });
//       toast.success("Thank you! Our team will call you back shortly.");
//       setForm({ name: "", phone: "", email: "", interest: "" });
//     } catch {
//       toast.error("Something went wrong. Please try again.");
//     }
//     setBusy(false);
//   };

//   return (
//     <form data-testid="hero-enquiry-form" onSubmit={onSubmit} className="ml-auto w-full max-w-md rounded-[28px] border border-[#D4A53C]/30 bg-[#0A0907]/60 p-6 shadow-2xl backdrop-blur-xl md:p-8">
//       <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Enquire now</p>
//       <h3 className="font-display mt-2 text-2xl uppercase tracking-[0.06em] text-[var(--ivory)]">Book a site visit</h3>
//       <div className="mt-6 space-y-3">
//         <PillField icon="user" label="Full name *" testid="hero-name-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
//         <PillField icon="phone" label="Mobile *" testid="hero-phone-input" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
//         <PillField icon="mail" label="Email" testid="hero-email-input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
//         {/* <label className="pill-field">
//           <ChevronDown size={18} className="shrink-0 text-[var(--gold)]" />
//           <select
//             data-testid="hero-unit-select"
//             value={form.interest}
//             onChange={(e) => setForm({ ...form, interest: e.target.value })}
//             className="w-full bg-transparent text-sm text-[var(--ivory)] outline-none [&>option]:bg-[#0A0907] md:text-base"
//           >
//             <option value="">Interested in (BHK)</option>
//             {PLANS.map((p) => {
//               const label = p.type + " · " + p.name;
//               return <option key={p.name} value={p.name}>{label}</option>;
//             })}
//           </select>
//         </label> */}
//       </div>
//       <button type="submit" data-testid="hero-submit-btn" disabled={busy} className="btn-gold mt-6 w-full justify-center disabled:opacity-70">
//         Get a Call Back <ArrowUpRight size={16} />
//       </button>
//     </form>
//   );
// }




import { useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { PillField } from "./PillField";
import { submitEnquiry } from "./api";
import { useNavigate } from "react-router-dom";

export default function HeroForm() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
  });

  const [busy, setBusy] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (busy) return;

    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and mobile number.");
      return;
    }

    setBusy(true);

    try {
      await submitEnquiry({
        ...form,
        source: "Book a site visit",
        consent: true,
      });

      toast.success("Thank you! Our team will call you back shortly.");

      navigate("/thank-you");


      setForm({
        name: "",
        phone: "",
        email: "",
        interest: "",
      });
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      toast.error("Unable to submit your enquiry. Please try again.");
    } finally {
      setBusy(false);
    }
  };



  return (
    <form
      data-testid="hero-enquiry-form"
      onSubmit={onSubmit}
      aria-busy={busy}
      // className="ml-auto w-full max-w-md rounded-[28px] border border-[#D4A53C]/30 bg-[#0A0907]/60 p-6 shadow-2xl backdrop-blur-xl md:p-8"
      className="ml-auto w-full max-w-md rounded-[28px] border border-[var(--gold)]/35 bg-[#FBF5E8]/60 p-6 shadow-xl backdrop-blur-3xl md:p-8"
    >
      {/* <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]"> */}
      <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">
        Enquire now
      </p>

      <h3 className="font-display mt-2 text-2xl uppercase tracking-[0.06em] text-[var(--ivory)]">
        Book a site visit
      </h3>

      <div className="mt-6 space-y-3">
        <PillField
          icon="user"
          label="Full name *"
          testid="hero-name-input"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <PillField
          icon="phone"
          label="Mobile *"
          testid="hero-phone-input"
          type="tel"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <PillField
          icon="mail"
          label="Email"
          testid="hero-email-input"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
      </div>

      <button
        type="submit"
        data-testid="hero-submit-btn"
        disabled={busy}
        className="btn-gold mt-6 flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {busy ? (
          <>
            <LoaderCircle
              size={18}
              className="animate-spin"
              aria-hidden="true"
            />
            <span role="status" aria-live="polite">
              Sending enquiry...
            </span>
          </>
        ) : (
          <>
            Get a Call Back
            <ArrowUpRight size={16} aria-hidden="true" />
          </>
        )}
      </button>

      {busy && (
        <p
          role="status"
          aria-live="polite"
          className="mt-3 text-center text-xs text-[var(--muted)]"
        >
          Please wait while we submit your enquiry.
        </p>
      )}
    </form>
  );
}
