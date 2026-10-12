import React from "react";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      items: [
        <>
          <strong>Information you give us:</strong> name, phone number, email
          address, preferred property type/configuration, budget and any
          message you submit through our forms, WhatsApp or phone calls.
        </>,
        <>
          <strong>Information collected automatically:</strong> IP address,
          device and browser type, pages visited, time spent, and the source
          (such as a Google ad) that brought you to the site. See our Cookie
          Policy.
        </>,
      ],
    },
    {
      title: "2. How We Use Your Information",
      items: [
        <>To respond to your enquiry and call, message or email you about the property you asked about.</>,
        <>To share details of available properties, prices and site visit arrangements.</>,
        <>To improve our website and measure the performance of our advertising.</>,
        <>To comply with legal obligations and resolve disputes.</>,
      ],
    },
    {
      title: "3. Contacting You",
      items: [
        <>
          By submitting a form, you agree to be contacted by MG Consultants by
          phone, SMS, WhatsApp or email regarding your property enquiry. You
          can ask us to stop at any time by replying "STOP" or writing to us at
          the email below.
        </>,
      ],
    },
    {
      title: "4. Sharing of Information",
      items: [
        <>
          Property owners, developers or their authorised representatives,
          where needed to process your enquiry or arrange a visit [remove if
          you do not do this].
        </>,
        <>
          Service providers who help us run our business, such as website
          hosting, CRM, communication and analytics tools (for example Google
          Analytics and Google Ads).
        </>,
        <>Authorities, where required by law.</>,
      ],
    },
    {
      title: "5. Data Retention",
      items: [
        <>
          We keep your information only as long as needed for the purposes
          above, or as required by law. [Add period, e.g. 24 months from last
          contact]
        </>,
      ],
    },
    {
      title: "6. Data Security",
      items: [
        <>
          We use reasonable security measures to protect your information.
          However, no method of transmission over the internet is completely
          secure, and we cannot guarantee absolute security.
        </>,
      ],
    },
    {
      title: "7. Your Rights",
      items: [
        <>
          Subject to applicable Indian law, including the Digital Personal Data
          Protection Act, 2023, you may request access to, correction of, or
          deletion of your personal information, or withdraw your consent to
          our use of it. To do so, contact us using the details below.
        </>,
      ],
    },
    {
      title: "8. Third-Party Links",
      items: [
        <>
          Our website may link to third-party websites (for example Google
          Maps or WhatsApp). We are not responsible for their privacy
          practices.
        </>,
      ],
    },
    {
      title: "9. Children",
      items: [
        <>
          Our services are not directed at persons under 18, and we do not
          knowingly collect their information.
        </>,
      ],
    },
    {
      title: "10. Changes to This Policy",
      items: [
        <>
          We may update this policy from time to time. The latest version will
          always be available on this page with its updated date.
        </>,
      ],
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

      {/* Page Intro */}
      <section className="mx-auto w-full max-w-4xl px-6 pb-10 pt-14 sm:px-8 sm:pb-12 sm:pt-16 lg:px-10 lg:pb-14 lg:pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--muted)] sm:text-xs">
            Legal Information
          </p>

          <h1 className="font-display text-3xl uppercase leading-tight tracking-[0.08em] text-[var(--gold)] sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>

          <div className="mt-7 h-px w-14 bg-[var(--gold)]" />
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-4xl px-6 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-32">

        <div className="max-w-3xl">

          {/* Policy Sections */}
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

                <div className="mt-5 border-l border-white/10 pl-5 sm:mt-6 sm:pl-6 lg:pl-7">
                  <ul className="list-disc space-y-4 pl-5 text-[14px] leading-[1.85] text-[var(--muted)] sm:text-[15px] sm:leading-[1.9]">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="pl-1 marker:text-[var(--gold)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>

          {/* Contact Section */}
          <section className="mt-12 sm:mt-14 lg:mt-16">
            <h2 className="font-display text-xl uppercase leading-snug tracking-[0.07em] text-[var(--gold)] sm:text-2xl lg:text-[27px]">
              11. Contact Us
            </h2>

            <div className="mt-6 overflow-hidden border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-[13px] sm:text-sm">
                  <tbody>

                    <tr className="border-b border-white/10">
                      <td className="w-[30%] px-5 py-4 align-top font-medium text-[var(--ivory)] sm:px-6 sm:py-5">
                        Business
                      </td>
                      <td className="px-5 py-4 align-top leading-relaxed text-[var(--muted)] sm:px-6 sm:py-5">
                        MG Consultants, Independent Real Estate Consultants |
                        Delhi & Gurgaon
                      </td>
                    </tr>

                    <tr className="border-b border-white/10">
                      <td className="w-[30%] px-5 py-4 align-top font-medium text-[var(--ivory)] sm:px-6 sm:py-5">
                        Registered Office
                      </td>
                      <td className="px-5 py-4 align-top leading-relaxed text-[var(--muted)] sm:px-6 sm:py-5">
                        133, Ground Floor, Raja Garden, Ramesh Nagar, West
                        Delhi, Delhi – 110015
                      </td>
                    </tr>

                    <tr className="border-b border-white/10">
                      <td className="w-[30%] px-5 py-4 align-top font-medium text-[var(--ivory)] sm:px-6 sm:py-5">
                        Phone
                      </td>
                      <td className="px-5 py-4 align-top text-[var(--muted)] sm:px-6 sm:py-5">
                        +91 9810980014
                      </td>
                    </tr>

                    <tr className="border-b border-white/10">
                      <td className="w-[30%] px-5 py-4 align-top font-medium text-[var(--ivory)] sm:px-6 sm:py-5">
                        Email
                      </td>
                      <td className="px-5 py-4 align-top leading-relaxed text-[var(--muted)] sm:px-6 sm:py-5">
                        MG Consultants, Independent Real Estate Consultants |
                        Delhi & Gurgaon
                      </td>
                    </tr>

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

          {/* Back Button */}
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

export default PrivacyPolicy;
