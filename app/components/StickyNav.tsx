"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function StickyNav() {
  const [heroGone, setHeroGone] = useState(false);
  const [cardCentered, setCardCentered] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    const card = document.getElementById("usecase-card");
    if (!hero || !card) return;

    // Show when hero is fully out of viewport
    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroGone(!entry.isIntersecting),
      { threshold: 0 }
    );

    // Show when the card is in the middle band of the viewport
    const cardObserver = new IntersectionObserver(
      ([entry]) => setCardCentered(entry.isIntersecting),
      { rootMargin: "-30% 0px -30% 0px" }
    );

    heroObserver.observe(hero);
    cardObserver.observe(card);

    return () => {
      heroObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  const visible = heroGone && cardCentered;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-11 py-5 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="h-12.5 overflow-clip relative shrink-0" style={{ width: "133.333px" }}>
        <Image
          alt="Popcorn"
          className="block size-full"
          src="/popcorn-logo.svg"
          width={133}
          height={50}
          unoptimized
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      <div className="flex gap-5 items-center">
        <button
          className="border border-white px-5 py-2.5 rounded-full text-sm text-white font-medium hover:bg-white hover:text-black active:scale-95 transition-all cursor-pointer"
          style={{ fontFamily: "var(--font-albert-sans)" }}
        >
          Log in
        </button>
        <button
          className="bg-white text-black px-5 py-2.5 rounded-[10px] text-sm font-medium hover:bg-white/90 active:scale-95 transition-all cursor-pointer"
          style={{ fontFamily: "var(--font-albert-sans)" }}
        >
          Book a demo
        </button>
      </div>
    </nav>
  );
}
