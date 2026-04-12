"use client";

import { useRef, useCallback } from "react";
import AppFrame from "./components/AppFrame";

import StickyNav from "./components/StickyNav";
import Footer from "./components/Footer";
import { PopcornBurst, type PopcornBurstHandle } from "./components/PopcornBurst";

export default function Home() {
  const burstRef = useRef<PopcornBurstHandle>(null);

  const handleBurst = useCallback((e: React.MouseEvent) => {
    burstRef.current?.burst({ x: e.clientX, y: e.clientY, count: 11 });
  }, []);

  return (
    <>
      {/* Fixed background that stays as you scroll */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/background.jpeg" alt="" className="fixed inset-0 w-full h-full object-cover z-0" />

      <StickyNav />

      {/* Section 1: Full-screen animated intro */}
      <div id="hero-section" className="relative z-[20]">
        <AppFrame />
      </div>


      <Footer onLogoBurst={handleBurst} />

      <PopcornBurst ref={burstRef} />
    </>
  );
}
