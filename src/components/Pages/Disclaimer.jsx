
import React from "react";
import { ArrowLeft } from "lucide-react";

const Disclaimer = () => {
  const sections = [
    {
      title: "Independent Consultancy Status",
      type: "paragraph",
      content:
        "MG Consultants is not owned by, affiliated with, authorised by or endorsed by DLF Ltd., Smartworld Developers, GIC or any other developer or brand mentioned on this website. We do not represent any developer, and we do not claim to be an official channel partner of any developer.",
    },

    {
      title: "Third-Party Projects",
      type: "paragraph",
      content:
        "Projects named on this website, such as DLF One Midtown, are developed and owned by third parties. We refer to them only to describe the properties on which we provide resale assistance and consultation. References to a project name do not imply any association with its developer.",
    },

    {
      title: "Pricing and Availability",
      type: "paragraph",
      content:
        "All prices, availability, sizes, floor plans, possession status and other details are indicative, may change without notice, and may not be current. Nothing on this website is a confirmed offer. Please verify everything independently before taking any decision.",
    },

    {
      title: "Images and Representations",
      type: "paragraph",
      content:
        "Images, artist impressions, layouts and maps are for representation only and may not reflect the actual property or surroundings. Distances and travel times are approximate.",
    },

    {
      title: "RERA",
      type: "paragraph",
      content:
        "RERA registration numbers shown relate to the project and its developer. You are advised to verify project details on the official Delhi RERA website.",
    },

    {
      title: "No Investment or Legal Advice",
      type: "paragraph",
      content:
        "Information on this website is not financial, investment, legal or tax advice. We do not guarantee returns, appreciation or profit. Please consult qualified professionals before you buy, sell or invest.",
    },

    {
      title: "Trademarks",
      type: "paragraph",
      content:
        "All trademarks, logos and brand names belong to their respective owners. Their use here is only for identification and does not imply any endorsement or affiliation.",
    },

    {
      title: "Sharing of Contact Details",
      type: "privacy",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0907] text-[var(--ivory)]">

        {/* ================= HEADER ================= */}
        <header className="border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:h-24 lg:px-12">

            {/* Logo */}
            <a
            href="/"
            data-testid="legal-back-home"
            className="flex items-center gap-3"
            >
            <img
                src="/images/logo-mark.png"
                alt="MG Consultants"
                className="h-10 w-auto sm:h-11"
            />

            <span className="font-display text-[12px] tracking-[0.38em] text-[var(--gold)] sm:text-[13px] sm:tracking-[0.42em]">
                CONSULTANTS
            </span>
            </a>

            {/* Back to Home */}
            <a
            href="/"
            data-testid="legal-back-home-top"
            className="btn-ghost inline-flex items-center gap-2"
            >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
            </a>

        </div>
        </header>


      {/* ================= PAGE INTRO ================= */}
      <section className="mx-auto w-full max-w-4xl px-6 pb-10 pt-14 sm:px-8 sm:pb-12 sm:pt-16 lg:px-10 lg:pb-14 lg:pt-20">

        <div className="max-w-3xl">

          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--muted)] sm:text-xs">
            Legal Information
          </p>

          <h1 className="font-display text-3xl uppercase leading-tight tracking-[0.08em] text-[var(--gold)] sm:text-4xl lg:text-5xl">
            Disclaimer
          </h1>

          <div className="mt-7 h-px w-14 bg-[var(--gold)]" />

          <p className="mt-7 max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)] sm:text-[15px] sm:leading-[1.9]">
            <strong className="font-medium text-[var(--ivory)]">
              MG Consultants is an independent real estate consultancy and is
              not DLF Ltd., Smartworld Developers, or the official website of
              any developer/project mentioned on this website.
            </strong>{" "}
            All trademarks and brand names belong to their respective owners.
            Project prices, availability and details are subject to change and
            should be independently verified.
          </p>

        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}
      <main className="mx-auto w-full max-w-4xl px-6 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-32">

        <div className="max-w-3xl">

          {/* ================= DISCLAIMER SECTIONS ================= */}
          <div>

            {sections.map((section, index) => (

              <section
                key={section.title}
                className={
                  index === sections.length - 1
                    ? "mb-0"
                    : "mb-12 sm:mb-14 lg:mb-16"
                }
              >

                <h2 className="font-display text-xl uppercase leading-snug tracking-[0.07em] text-[var(--gold)] sm:text-2xl lg:text-[27px]">
                  {section.title}
                </h2>


                <div className="mt-5 border-l border-white/10 pl-5 text-[14px] leading-[1.85] text-[var(--muted)] sm:mt-6 sm:pl-6 sm:text-[15px] sm:leading-[1.9] lg:pl-7">

                  {/* NORMAL PARAGRAPH */}
                  {section.type === "paragraph" && (
                    <p>
                      {section.content}
                    </p>
                  )}


                  {/* PRIVACY POLICY REFERENCE */}
                  {section.type === "privacy" && (
                    <p>
                      Your details will be used as described in our{" "}

                      <a
                        href="/privacy-policy"
                        className="text-[var(--gold)] underline underline-offset-4 transition-opacity hover:opacity-80"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  )}

                </div>

              </section>

            ))}

          </div>


          {/* ================= CONTACT ================= */}
          <section className="mt-12 sm:mt-14 lg:mt-16">

            <h2 className="font-display text-xl uppercase leading-snug tracking-[0.07em] text-[var(--gold)] sm:text-2xl lg:text-[27px]">
              Contact
            </h2>


            <div className="mt-6 overflow-hidden border border-white/10">

              <div className="overflow-x-auto">

                <table className="w-full min-w-[620px] border-collapse text-left text-[13px] sm:text-sm">

                  <tbody>

                    {/* BUSINESS */}
                    <tr className="border-b border-white/10">

                      <td className="w-[30%] px-5 py-4 align-top font-medium text-[var(--ivory)] sm:px-6 sm:py-5">
                        Business
                      </td>

                      <td className="px-5 py-4 align-top leading-relaxed text-[var(--muted)] sm:px-6 sm:py-5">
                        MG Consultants, Independent Real Estate Consultants |
                        Delhi & Gurgaon
                      </td>

                    </tr>


                    {/* REGISTERED OFFICE */}
                    <tr className="border-b border-white/10">

                      <td className="w-[30%] px-5 py-4 align-top font-medium text-[var(--ivory)] sm:px-6 sm:py-5">
                        Registered Office
                      </td>

                      <td className="px-5 py-4 align-top leading-relaxed text-[var(--muted)] sm:px-6 sm:py-5">
                        133, Ground Floor, Raja Garden, Ramesh Nagar, West
                        Delhi, Delhi – 110015
                      </td>

                    </tr>


                    {/* PHONE */}
                    <tr className="border-b border-white/10">

                      <td className="w-[30%] px-5 py-4 align-top font-medium text-[var(--ivory)] sm:px-6 sm:py-5">
                        Phone
                      </td>

                      <td className="px-5 py-4 align-top text-[var(--muted)] sm:px-6 sm:py-5">
                        +91 9810980014
                      </td>

                    </tr>


                    {/* EMAIL */}
                    <tr className="border-b border-white/10">

                      <td className="w-[30%] px-5 py-4 align-top font-medium text-[var(--ivory)] sm:px-6 sm:py-5">
                        Email
                      </td>

                      <td className="px-5 py-4 align-top sm:px-6 sm:py-5">

                        <a
                          href="mailto:info@mg-consultants.in"
                          className="text-[var(--muted)] underline underline-offset-4 transition-colors hover:text-[var(--gold)]"
                        >
                          info@mg-consultants.in
                        </a>

                      </td>

                    </tr>


                    {/* UDYAM */}
                    <tr>

                      <td className="w-[30%] px-5 py-4 align-top font-medium text-[var(--ivory)] sm:px-6 sm:py-5">
                        Udyam Registration
                      </td>

                      <td className="px-5 py-4 align-top text-[var(--muted)] sm:px-6 sm:py-5">
                        UDYAM-DL-11-0168382
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </section>


          {/* ================= BACK BUTTON ================= */}
          <div className="mt-12 border-t border-white/10 pt-8 sm:mt-14 sm:pt-9 lg:mt-16">

            <a
              href="/"
              data-testid="legal-back-btn"
              className="btn-ghost inline-flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Home
            </a>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Disclaimer;
