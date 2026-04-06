import AppFrame from "./components/AppFrame";
import UseCaseSection from "./components/UseCaseSection";
import StickyNav from "./components/StickyNav";
import EthosSection from "./components/EthosSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
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
