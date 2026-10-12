
import React from "react";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "1. Who We Are",
      type: "paragraph",
      content:
        "MG Consultants is an independent real estate consultancy based in Delhi, serving Delhi and Gurgaon. We are not DLF Ltd., Smartworld Developers, or any other developer, and this is not the official website of any developer or project mentioned here.",
    },

    {
      title: "2. Nature of Our Services",
      type: "paragraph",
      content:
        "We provide information, consultation and assistance regarding property enquiries, including resale properties. Information on this website is for general information only and is not an offer, invitation or contract of sale.",
    },

    {
      title: "3. Accuracy of Information",
      type: "paragraph",
      content:
        "We try to keep information accurate, but project details, prices, availability, specifications, floor plans, amenities and distances are drawn from various sources, may change without notice, and may not be complete. You must independently verify all details, including with the developer, the owner and the official RERA record, before making any decision.",
    },

    {
      title: "4. No Guarantee",
      type: "list",
      content: [
        "We do not guarantee the availability of any property or the price shown.",
        "We do not guarantee any investment return, appreciation, rental income or profit.",
        "Any decision to buy, sell or invest is yours alone.",
      ],
    },

    {
      title: "5. Images and Content",
      type: "paragraph",
      content:
        "Images, renderings and layouts are for representation only and may differ from the actual property. Brand names, logos and project names belong to their respective owners and are used only to identify the properties we assist with.",
    },

    {
      title: "6. Brokerage / Fees",
      type: "paragraph",
      content:
        "Brokerage, if applicable, will be discussed and agreed with you in writing before any transaction.",
    },

    {
      title: "7. Use of the Website",
      type: "paragraph",
      content:
        "You agree not to misuse the website, submit false information, attempt unauthorised access, or copy our content without permission. All content, design and text on this website belong to MG Consultants unless stated otherwise.",
    },

    {
      title: "8. Limitation of Liability",
      type: "paragraph",
      content:
        "To the fullest extent permitted by law, MG Consultants is not liable for any loss or damage arising from your use of, or reliance on, this website or its information, or from any transaction you enter into with a third party.",
    },

    {
      title: "9. Third-Party Websites",
      type: "paragraph",
      content:
        "Links to third-party websites are provided for convenience. We do not control or endorse them and are not responsible for their content.",
    },

    {
      title: "10. Privacy",
      type: "privacy",
    },

    {
      title: "11. Changes",
      type: "paragraph",
      content:
        "We may update these Terms at any time. Continued use of the website means you accept the updated Terms.",
    },

    {
      title: "12. Governing Law",
      type: "paragraph",
      content:
        "These Terms are governed by the laws of India. Courts at Delhi shall have jurisdiction over any dispute.",
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
            Terms & Conditions
          </h1>

          <div className="mt-7 h-px w-14 bg-[var(--gold)]" />

          <p className="mt-7 max-w-2xl text-[14px] leading-[1.85] text-[var(--muted)] sm:text-[15px]">
            Please read these Terms & Conditions carefully before using this
            website. By using the website, you agree to them.
          </p>

        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}
      <main className="mx-auto w-full max-w-4xl px-6 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-32">

        <div className="max-w-3xl">

          {/* ================= TERMS SECTIONS ================= */}
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

                  {/* PARAGRAPH */}
                  {section.type === "paragraph" && (
                    <p>
                      {section.content}
                    </p>
                  )}


                  {/* BULLET LIST */}
                  {section.type === "list" && (
                    <ul className="list-disc space-y-4 pl-5 marker:text-[var(--gold)]">

                      {section.content.map((item, itemIndex) => (

                        <li
                          key={itemIndex}
                          className="pl-1"
                        >
                          {item}
                        </li>

                      ))}

                    </ul>
                  )}


                  {/* PRIVACY */}
                  {section.type === "privacy" && (
                    <p>
                      Your use of this website is also governed by our{" "}

                      <a
                        href="/privacy-policy"
                        className="text-[var(--gold)] underline underline-offset-4 transition-opacity hover:opacity-80"
                      >
                        Privacy Policy
                      </a>

                      {" "}and Cookie Policy.
                    </p>
                  )}

                </div>

              </section>

            ))}

          </div>


          {/* ================= CONTACT ================= */}
          <section className="mt-12 sm:mt-14 lg:mt-16">

            <h2 className="font-display text-xl uppercase leading-snug tracking-[0.07em] text-[var(--gold)] sm:text-2xl lg:text-[27px]">
              13. Contact
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

export default TermsAndConditions;
