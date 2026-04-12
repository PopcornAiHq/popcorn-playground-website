"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import EmailCapture from "./EmailCapture";

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-11 py-5 transition-all duration-700 ease-in-out"
      style={{
        background: scrolled
          ? "linear-gradient(to bottom, rgba(30,60,180,0.3) 0%, rgba(30,60,180,0.15) 40%, transparent 100%)"
          : "linear-gradient(to bottom, rgba(30,60,180,0) 0%, transparent 100%)",
        paddingBottom: scrolled ? "60px" : "20px",
      }}
    >
      <div className="h-12.5 overflow-clip relative shrink-0" style={{ width: "133.333px" }}>
        <Image
          alt="Popcorn"
          className="block size-full transition-[filter] duration-700"
          src="/popcorn-logo.svg"
          width={133}
          height={50}
          unoptimized
          style={{ filter: scrolled
            ? "brightness(0) drop-shadow(1px 0 0 white) drop-shadow(-1px 0 0 white) drop-shadow(0 1px 0 white) drop-shadow(0 -1px 0 white) drop-shadow(1px 1px 0 white) drop-shadow(-1px -1px 0 white) drop-shadow(1px -1px 0 white) drop-shadow(-1px 1px 0 white)"
            : "brightness(0) drop-shadow(1px 0 0 transparent) drop-shadow(-1px 0 0 transparent) drop-shadow(0 1px 0 transparent) drop-shadow(0 -1px 0 transparent) drop-shadow(1px 1px 0 transparent) drop-shadow(-1px -1px 0 transparent) drop-shadow(1px -1px 0 transparent) drop-shadow(-1px 1px 0 transparent)"
          }}
        />
      </div>

      <EmailCapture variant="nav-expand" scrolled={scrolled} />
    </nav>
  );
}
