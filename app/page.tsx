import AppFrame from "./components/AppFrame";
import UseCaseSection from "./components/UseCaseSection";
import StickyNav from "./components/StickyNav";
import EthosSection from "./components/EthosSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Base yellow layer — always behind everything */}
      <div className="fixed inset-0 -z-20 bg-[#FEFABB]" />

      {/* Fixed background image — sits on top of yellow */}
      <div
        className="fixed inset-0 -z-10"
        style={{ background: "url('/background.jpeg') center / cover no-repeat" }}
      />

      <StickyNav />

      {/* Section 1: Full-screen animated intro */}
      <div id="hero-section" className="relative z-[20]">
        <AppFrame />
      </div>

      {/* Section 2: Use cases */}
      <div className="relative z-[20]">
        <UseCaseSection />
      </div>

      {/* Section 3: Ethos */}
      <EthosSection />

      <Footer />
    </>
  );
}
