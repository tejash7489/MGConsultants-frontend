// import { useEffect, useState } from "react";
// import { ArrowUpRight, Check, Mail, Phone, User } from "lucide-react";
// import { toast } from "sonner";
// import { Heading, Reveal } from "./motion";
// import { PLANS } from "@/data/site";
// import { submitEnquiry } from "./api";

// export default function ContactPanel() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "" });
//   const [consent, setConsent] = useState(false);
//   const [busy, setBusy] = useState(false);

//   useEffect(() => {
//     const onPreselect = (e) => setForm((f) => ({ ...f, interest: e.detail }));
//     window.addEventListener("preselect-interest", onPreselect);
//     return () => window.removeEventListener("preselect-interest", onPreselect);
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
//       toast.error("Please fill in your name, email and mobile number.");
//       return;
//     }
//     if (!consent) {
//       toast.error("Please authorise us to contact you about this project.");
//       return;
//     }
//     setBusy(true);
//     try {
//       await submitEnquiry({ ...form, source: "Contact form", consent });
//       toast.success("Thank you! We will be in touch with you shortly.");
//       setForm({ name: "", email: "", phone: "", interest: "" });
//       setConsent(false);
//     } catch {
//       toast.error("Something went wrong. Please try again.");
//     }
//     setBusy(false);
//   };

//   const pillClass = (name) =>
//     `rounded-full border px-5 py-2 text-sm transition-colors duration-300 ${
//       form.interest === name
//         ? "border-[var(--gold)] bg-[var(--gold)]/10 text-[var(--gold)]"
//         : "border-white/20 text-[var(--ivory)] hover:border-[var(--gold)]"
//     }`;

//   return (
//     <section id="contact" data-testid="contact-section" className="section">
//       <div className="mx-auto max-w-3xl px-6">
//         <Heading lines={["Contact us"]} sub="Please fill in the details and we will be in touch with you shortly." />
//         <Reveal delay={0.1}>
//           <form data-testid="contact-form" onSubmit={onSubmit} className="mt-14 grid gap-5 rounded-[28px] border border-[#D4A53C]/25 bg-[#15120D]/70 p-6 shadow-2xl backdrop-blur-xl md:grid-cols-2 md:p-10">
//             <div className="md:col-span-2">
//               <label className="pill-field group">
//                 <User size={18} className="shrink-0 text-[var(--gold)]" />
//                 <span className="relative flex-1">
//                   <input data-testid="contact-name-input" placeholder=" " value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="peer w-full bg-transparent text-sm text-[var(--ivory)] outline-none md:text-base" />
//                   <span className="pill-label">Full name *</span>
//                 </span>
//               </label>
//             </div>
//             <label className="pill-field group">
//               <Mail size={18} className="shrink-0 text-[var(--gold)]" />
//               <span className="relative flex-1">
//                 <input data-testid="contact-email-input" placeholder=" " type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="peer w-full bg-transparent text-sm text-[var(--ivory)] outline-none md:text-base" />
//                 <span className="pill-label">Email *</span>
//               </span>
//             </label>
//             <label className="pill-field group">
//               <Phone size={18} className="shrink-0 text-[var(--gold)]" />
//               <span className="relative flex-1">
//                 <input data-testid="contact-phone-input" placeholder=" " type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="peer w-full bg-transparent text-sm text-[var(--ivory)] outline-none md:text-base" />
//                 <span className="pill-label">Mobile *</span>
//               </span>
//             </label>

//             {/* <div className="pt-2 md:col-span-2">
//               <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Interested in</p>
//               <div className="flex flex-wrap gap-3">
//                 {PLANS.map((p) => (
//                   <button
//                     key={p.name}
//                     type="button"
//                     data-testid={`contact-unit-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
//                     className={pillClass(p.name)}
//                     onClick={() => setForm({ ...form, interest: form.interest === p.name ? "" : p.name })}
//                   >
//                     {p.name} · {p.type}
//                   </button>
//                 ))}
//               </div>
//             </div> */}

//             <button
//               type="button"
//               data-testid="contact-consent-checkbox"
//               onClick={() => setConsent(!consent)}
//               className="flex items-start gap-3 text-left text-sm text-[var(--muted)] md:col-span-2"
//             >
//               <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${consent ? "border-[var(--gold)] bg-[var(--gold)] text-[#0A0907]" : "border-white/30"}`}>
//                 {consent && <Check size={14} strokeWidth={3} />}
//               </span>
//               I authorise MG Consultants representatives to call, SMS, email or WhatsApp me about this project.
//             </button>

//             <button type="submit" data-testid="contact-submit-btn" disabled={busy} className="btn-gold justify-center disabled:opacity-70 md:col-span-2">
//               Send Enquiry <ArrowUpRight size={16} />
//             </button>
//           </form>
//         </Reveal>
//       </div>
//     </section>
//   );
// }




import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Mail,
  Phone,
  User,
  LoaderCircle,
} from "lucide-react";
import { toast } from "sonner";
import { Heading, Reveal } from "./motion";
import { submitEnquiry } from "./api";

export default function ContactPanel() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const onPreselect = (e) => {
      setForm((f) => ({ ...f, interest: e.detail }));
    };

    window.addEventListener("preselect-interest", onPreselect);

    return () =>
      window.removeEventListener("preselect-interest", onPreselect);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (busy) return;

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim()
    ) {
      toast.error("Please fill in your name, email and mobile number.");
      return;
    }

    if (!consent) {
      toast.error(
        "Please authorise us to contact you about this project."
      );
      return;
    }

    setBusy(true);

    try {
      await submitEnquiry({
        ...form,
        source: "Contact form",
        consent,
      });

      toast.success(
        "Thank you! We will be in touch with you shortly."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        interest: "",
      });

      setConsent(false);
    } catch (error) {
      console.error("Contact enquiry failed:", error);

      toast.error(
        "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="section"
    >
      <div className="mx-auto max-w-3xl px-6">
        <Heading
          lines={["Contact us"]}
          sub="Please fill in the details and we will be in touch with you shortly."
        />

        <Reveal delay={0.1}>
          <form
            data-testid="contact-form"
            onSubmit={onSubmit}
            aria-busy={busy}
            // className="mt-14 grid gap-5 rounded-[28px] border border-[#D4A53C]/25 bg-[#15120D]/70 p-6 shadow-2xl backdrop-blur-xl md:grid-cols-2 md:p-10"
            className="mt-14 grid gap-5 rounded-[28px] border border-[#D4A53C]/25 bg-[#FBF5E8]/75 p-6 shadow-xl backdrop-blur-xl md:grid-cols-2 md:p-10"
          >
            {/* Full name */}
            <div className="md:col-span-2 ">
              <label className="pill-field group">
                <User
                  size={18}
                  className="shrink-0 text-[var(--gold)]"
                />

                <span className="relative flex-1">
                  <input
                    data-testid="contact-name-input"
                    placeholder=" "
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    disabled={busy}
                    className="peer w-full bg-transparent text-sm text-[var(--ivory)] outline-none disabled:opacity-60 md:text-base"
                  />

                  <span className="pill-label">Full name *</span>
                </span>
              </label>
            </div>

            {/* Email */}
            <label className="pill-field group">
              <Mail
                size={18}
                className="shrink-0 text-[var(--gold)]"
              />

              <span className="relative flex-1">
                <input
                  data-testid="contact-email-input"
                  placeholder=" "
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  disabled={busy}
                  className="peer w-full bg-transparent text-sm text-[var(--ivory)] outline-none disabled:opacity-60 md:text-base"
                />

                <span className="pill-label">Email *</span>
              </span>
            </label>

            {/* Mobile */}
            <label className="pill-field group">
              <Phone
                size={18}
                className="shrink-0 text-[var(--gold)]"
              />

              <span className="relative flex-1">
                <input
                  data-testid="contact-phone-input"
                  placeholder=" "
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  disabled={busy}
                  className="peer w-full bg-transparent text-sm text-[var(--ivory)] outline-none disabled:opacity-60 md:text-base"
                />

                <span className="pill-label">Mobile *</span>
              </span>
            </label>

            {/* Consent checkbox */}
            <button
              type="button"
              data-testid="contact-consent-checkbox"
              onClick={() => setConsent((previous) => !previous)}
              disabled={busy}
              aria-pressed={consent}
              className="flex items-start gap-3 text-left text-sm text-[var(--muted)] disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                  consent
                    ? "border-[var(--gold)] bg-[var(--gold)] text-[#0A0907]"
                    : "border-white/30"
                }`}
              >
                {consent && <Check size={14} strokeWidth={3} />}
              </span>

              <span>
                I authorise MG Consultants representatives to call,
                SMS, email or WhatsApp me about this project.
              </span>
            </button>

            {/* Submit button with loader */}
            <button
              type="submit"
              data-testid="contact-submit-btn"
              disabled={busy}
              className="btn-gold flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
            >
              {busy ? (
                <>
                  <LoaderCircle
                    size={18}
                    className="animate-spin"
                    aria-hidden="true"
                  />

                  <span>Sending Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Enquiry</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </>
              )}
            </button>

            {busy && (
              <p
                role="status"
                aria-live="polite"
                className="text-center text-xs text-[var(--muted)] md:col-span-2"
              >
                Please wait while we submit your enquiry.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
