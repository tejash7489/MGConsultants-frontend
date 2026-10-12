import React from "react";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. What Are Cookies?",
    type: "paragraph",
    content:
      "Cookies are small text files stored on your device when you visit a website. They help the website work properly, remember your preferences, and understand how visitors use it.",
  },

  {
    title: "2. Cookies We Use",
    type: "table",
  },

  {
    title: "3. Third-Party Cookies",
    type: "paragraph",
    content:
      "Some cookies may be set by third parties such as Google. These companies may have their own privacy policies, which govern how they collect and use information through their services.",
  },

  {
    title: "4. Managing Cookies",
    type: "paragraph",
    content:
      "You can accept or reject non-essential cookies through the cookie banner on our website. You can also block or delete cookies through your browser settings. Blocking or deleting certain cookies may affect how some parts of the website function.",
  },

  {
    title: "5. Changes to This Policy",
    type: "paragraph",
    content:
      "We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, or legal requirements. The latest version will always be available on this page.",
  },

  {
    title: "6. Contact Us",
    type: "contact",
  },
];

const cookieRows = [
  {
    type: "Essential",
    purpose:
      "Needed for the website and forms to work properly.",
    examples: "Session and security cookies",
  },

  {
    type: "Analytics",
    purpose:
      "Help us understand how visitors use the website so we can improve it.",
    examples: "Google Analytics, if used",
  },

  {
    type: "Advertising / Marketing",
    purpose:
      "Measure the performance of our advertisements and show relevant advertisements, where applicable.",
    examples:
      "Google Ads conversion tracking, remarketing, if used",
  },
];

const contactRows = [
  {
    label: "Business",
    value:
      "MG Consultants, Independent Real Estate Consultants | Delhi & Gurgaon",
  },

  {
    label: "Registered Office",
    value:
      "133, Ground Floor, Raja Garden, Ramesh Nagar, West Delhi, Delhi – 110015",
  },

  {
    label: "Phone",
    value: "+91 9810980014",
  },

  {
    label: "Email",
    value: "info@mg-consultants.in",
    type: "email",
  },

  {
    label: "Udyam Registration",
    value: "UDYAM-DL-11-0168382",
  },
];

const Cookies = () => {
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
            Cookie Policy
          </h1>

          <div className="mt-7 h-px w-14 bg-[var(--gold)]" />

          <p className="mt-7 max-w-2xl text-[14px] leading-[1.85] text-[var(--muted)] sm:text-[15px]">
            This Cookie Policy explains how MG Consultants uses cookies and
            similar technologies on our website.
          </p>

        </div>

      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="mx-auto w-full max-w-4xl px-6 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-32">

        <div className="max-w-3xl">

          {/* ================= COOKIE SECTIONS ================= */}
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

                {/* ================= PARAGRAPH ================= */}
                {section.type === "paragraph" && (
                  <div className="mt-5 border-l border-white/10 pl-5 text-[14px] leading-[1.85] text-[var(--muted)] sm:mt-6 sm:pl-6 sm:text-[15px] sm:leading-[1.9] lg:pl-7">

                    <p>
                      {section.content}
                    </p>

                    {/* Google Ad Settings */}
                    {section.title === "4. Managing Cookies" && (
                      <p className="mt-5">
                        You can also manage Google ad personalisation through{" "}

                        <a
                          href="https://adssettings.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--gold)] underline underline-offset-4 transition-opacity hover:opacity-80"
                        >
                          Google Ad Settings
                        </a>
                        .
                      </p>
                    )}

                  </div>
                )}

                {/* ================= COOKIES TABLE ================= */}
                {section.type === "table" && (
                  <div className="mt-5 overflow-hidden border border-white/10 sm:mt-6">

                    <div className="overflow-x-auto">

                      <table className="w-full min-w-[720px] border-collapse text-left text-[13px] sm:text-sm">

                        <thead>

                          <tr className="border-b border-white/10">

                            <th className="w-[24%] px-5 py-4 font-display text-xs uppercase tracking-[0.12em] text-[var(--ivory)] sm:px-6 sm:py-5">
                              Type
                            </th>

                            <th className="w-[40%] px-5 py-4 font-display text-xs uppercase tracking-[0.12em] text-[var(--ivory)] sm:px-6 sm:py-5">
                              Purpose
                            </th>

                            <th className="w-[36%] px-5 py-4 font-display text-xs uppercase tracking-[0.12em] text-[var(--ivory)] sm:px-6 sm:py-5">
                              Examples
                            </th>

                          </tr>

                        </thead>

                        <tbody>

                          {cookieRows.map((row, rowIndex) => (

                            <tr
                              key={row.type}
                              className={
                                rowIndex !== cookieRows.length - 1
                                  ? "border-b border-white/10"
                                  : ""
                              }
                            >

                              <td className="px-5 py-5 align-top font-medium leading-[1.7] text-[var(--ivory)] sm:px-6 sm:text-[15px]">
                                {row.type}
                              </td>

                              <td className="px-5 py-5 align-top leading-[1.8] text-[var(--muted)] sm:px-6 sm:text-[15px]">
                                {row.purpose}
                              </td>

                              <td className="px-5 py-5 align-top leading-[1.8] text-[var(--muted)] sm:px-6 sm:text-[15px]">
                                {row.examples}
                              </td>

                            </tr>

                          ))}

                        </tbody>

                      </table>

                    </div>

                  </div>
                )}

                {/* ================= CONTACT ================= */}
                {section.type === "contact" && (
                  <div className="mt-5 sm:mt-6">

                    <div className="overflow-hidden border border-white/10">

                      <div className="overflow-x-auto">

                        <table className="w-full min-w-[620px] border-collapse text-left text-[13px] sm:text-sm">

                          <tbody>

                            {contactRows.map((row, rowIndex) => (

                              <tr
                                key={row.label}
                                className={
                                  rowIndex !== contactRows.length - 1
                                    ? "border-b border-white/10"
                                    : ""
                                }
                              >

                                <td className="w-[30%] px-5 py-4 align-top font-medium text-[var(--ivory)] sm:px-6 sm:py-5">
                                  {row.label}
                                </td>

                                <td className="px-5 py-4 align-top leading-relaxed text-[var(--muted)] sm:px-6 sm:py-5">

                                  {row.type === "email" ? (
                                    <a
                                      href={`mailto:${row.value}`}
                                      className="text-[var(--muted)] underline underline-offset-4 transition-colors hover:text-[var(--gold)]"
                                    >
                                      {row.value}
                                    </a>
                                  ) : (
                                    row.value
                                  )}

                                </td>

                              </tr>

                            ))}

                          </tbody>

                        </table>

                      </div>

                    </div>

                    {/* Privacy Policy */}
                    <p className="mt-6 border-l border-white/10 pl-5 text-[14px] leading-[1.9] text-[var(--muted)] sm:pl-6 sm:text-[15px] lg:pl-7">

                      See also our{" "}

                      <a
                        href="/privacy-policy"
                        className="text-[var(--gold)] underline underline-offset-4 transition-opacity hover:opacity-80"
                      >
                        Privacy Policy
                      </a>

                      .

                    </p>

                  </div>
                )}

              </section>

            ))}

          </div>

          {/* ================= BOTTOM BACK BUTTON ================= */}
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

export default Cookies;