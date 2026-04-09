"use client";

import { useRef, useCallback } from "react";
import AppFrame from "./components/AppFrame";
import UseCaseSection from "./components/UseCaseSection";
import StickyNav from "./components/StickyNav";
import Footer from "./components/Footer";
import { PopcornBurst, type PopcornBurstHandle } from "./components/PopcornBurst";
import FontPreview from "./components/FontPreview";

export default function Home() {
  const burstRef = useRef<PopcornBurstHandle>(null);

  const handleBurst = useCallback((e: React.MouseEvent) => {
    burstRef.current?.burst({ x: e.clientX, y: e.clientY, count: 11 });
  }, []);

  return (
    <>
      {/* <FontPreview /> */}

      {/* Section 1: Full-screen animated intro */}
      <div id="hero-section" className="relative z-[20]">
        <AppFrame />
      </div>

      {/* Section 2: Use cases */}
      <div className="relative z-[20]">
        <UseCaseSection />
      </div>

      <Footer onLogoBurst={handleBurst} />

      <PopcornBurst ref={burstRef} />
    </>
  );
}
