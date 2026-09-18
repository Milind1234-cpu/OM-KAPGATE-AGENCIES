import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { HowItWorks, Reviews, TrustStrip, UseCases, WhoWeServe, WhyUs } from "./components/Sections";
import Products from "./components/Products";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactBlock from "./components/ContactBlock";
import Footer from "./components/Footer";
import { MobileActionBar, WhatsAppFab } from "./components/Overlays";
import { waLink, waProductMsg } from "./lib/config";

export default function App() {
  const [prefill, setPrefill] = useState("");

  /**
   * Product enquiry behaviour:
   * - WhatsApp configured  → open chat with the product-specific message.
   * - Not yet configured   → prefill the contact form and scroll to it.
   */
  function handleEnquire(productName: string) {
    const link = waLink(waProductMsg(productName));
    if (link) {
      window.open(link, "_blank", "noopener");
      return;
    }
    setPrefill(productName);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Products onEnquire={handleEnquire} />
        <WhyUs />
        <WhoWeServe />
        <About />
        <UseCases />
        <HowItWorks />
        <Gallery />
        <Reviews />
        <ContactBlock prefill={prefill} />
      </main>
      <Footer />
      {/* Spacer so the fixed mobile bar never covers content */}
      <div aria-hidden className="h-[62px] md:hidden" />
      <WhatsAppFab />
      <MobileActionBar />
    </>
  );
}
