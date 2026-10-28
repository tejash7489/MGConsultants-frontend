import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import TopNav from "@/components/site/TopNav";
import HeroSlider from "@/components/site/HeroSlider";
import Marquee from "@/components/site/Marquee";
import Intro from "@/components/site/Intro";
import LuxuryHighlights from "@/components/site/LuxuryHighlights";
import Amenities from "@/components/site/Amenities";
import Residences from "@/components/site/Residences";
import Location from "@/components/site/Location";
import GalleryCarousel from "@/components/site/GalleryCarousel";
import ContactPanel from "@/components/site/ContactPanel";
import SiteFooter from "@/components/site/SiteFooter";
import Floating from "@/components/site/Floating";
import Legal from "@/components/site/Legal";
import { NAV } from "@/data/site";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import TermsAndConditions from "./components/Pages/TermsAndConditions";
import Disclaimer from "./components/Pages/Disclaimer";
import Cookies from "./components/Pages/Cookies";
import Properties from "./components/site/Properties"; 
import DlfMangolias from "./components/Pages/DlfMangolias";
import ThankYou from "./components/Pages/ThankYou";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return <div className="flex min-h-screen items-center justify-center bg-[#0A0907] text-[var(--ivory)]">Something went wrong. Please refresh the page.</div>;
    }
    return this.props.children;
  }
}

const ScrollReset = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LEGAL = {
  privacy: {
    title: "Privacy Policy",
    paragraphs: [
      "MG Consultants respects your privacy. When you submit an enquiry through this website, we collect the details you provide — your name, mobile number, email address and the configuration you are interested in — solely to respond to your enquiry and share information about Valeur Residences, Worli.",
      "Enquiry details are stored securely in this website's database and are used only by MG Consultants representatives to contact you about this project. We do not sell or share your personal information with any third party for their own marketing purposes.",
      "You may ask us to update or remove your details at any time by writing to info@mg-consultants.in.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    paragraphs: [
      "This website provides general information about Valeur Residences, Worli, presented exclusively by MG Consultants. Prices (starting from ₹ 6.8 Cr*), areas, floor plans and availability are indicative, subject to change, and do not constitute an offer or contract.",
      "By submitting an enquiry, you authorise MG Consultants representatives to call, SMS, email or WhatsApp you about this project, as per the consent provided in the enquiry form.",
      "All content on this website is for information purposes only and is copyright MG Consultants.",
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    paragraphs: [
      "MG Consultants is an independent real estate consultancy and is not DLF Ltd., Smartworld Developers, or the official website of any developer/project mentioned on this website.",
      "All trademarks and brand names belong to their respective owners. Project prices, availability and details are subject to change and should be independently verified. Images are for representation only.",
    ],
  },
  cookies: {
    title: "Cookie Policy",
    paragraphs: [
      "This website does not use advertising or third-party tracking cookies. Only essential functionality required to operate the site and store your enquiry is used.",
      "Details submitted through the enquiry forms are stored in the website's secure database and handled as described in our Privacy Policy.",
    ],
  },
};

const Home = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href");
      if (hash.length > 1 && document.querySelector(hash)) {
        e.preventDefault();
        lenis.scrollTo(hash, { offset: -76 });
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const onScroll = () => {
      const y = window.scrollY + 160;
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Floating />
      <TopNav active={active} />
      <main>
        <HeroSlider />
        <Marquee />
        <Intro />
        <LuxuryHighlights />
        <Amenities />
        <Residences />

        <Properties />

        <Location />
        <GalleryCarousel />
        <ContactPanel />
      </main>
      <SiteFooter />
      <Toaster
        position="top-center"
        theme="dark"
        toastOptions={{
          style: { background: "#15120D", border: "1px solid rgba(212,165,60,0.4)", color: "#F4EDE4" },
        }}
      />
    </>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollReset />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/privacy-policy" element={<Legal {...LEGAL.privacy} />} /> */}
          {/* <Route path="/terms" element={<Legal {...LEGAL.terms} />} /> */}
          {/* <Route path="/disclaimer" element={<Legal {...LEGAL.disclaimer} />} /> */}
          {/* <Route path="/cookie-policy" element={<Legal {...LEGAL.cookies} />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookie-policy" element={<Cookies />} />
          <Route path="/dlf-mangoliyas" element={<DlfMangolias />} />
          <Route path="*" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
