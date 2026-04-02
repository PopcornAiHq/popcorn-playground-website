"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";

const PopcornCanvas = dynamic(() => import("./PopcornCanvas"), { ssr: false });

// Sparkle definitions: size (tailwind w-X in px), bottom/top, left/right as % of footer width
const SPARKLES = [
  { src: "/red-sparkle.png",    size: 56, anchor: { bottom: 224, left: 0.12 } },
  { src: "/yellow-sparkle.png", size: 64, anchor: { top:  80,   right: 0.18 } },
  { src: "/red-sparkle.png",    size: 48, anchor: { top: 176,   right: 0.10 } },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const sparkleRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const STIFFNESS = 600;
    const DAMPING = 6;
    const MASS = 0.5;

    const PUSH_RADIUS = 40;

    const btnPos = { x: 0, y: 0 };
    const btnPrev = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    let isInside = false;

    // Per-sparkle state
    const sparkleCur = SPARKLES.map(() => ({ x: 0, y: 0 }));
    const sparkleVel = SPARKLES.map(() => ({ x: 0, y: 0 }));

    let last = performance.now();
    let raf: number;

    const getSparkleHome = (i: number): { x: number; y: number } => {
      const footer = footerRef.current;
      if (!footer) return { x: 0, y: 0 };
      const rect = footer.getBoundingClientRect();
      const canvasH = 800;
      const s = SPARKLES[i];
      const anchor = s.anchor as Record<string, number>;
      const px = 'left' in anchor ? anchor.left * rect.width : rect.width - anchor.right * rect.width;
      const py = 'top' in anchor ? anchor.top : canvasH - anchor.bottom;
      // position relative to footer center
      return { x: px - rect.width / 2, y: py - rect.height / 2 };
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Button spring (only when outside)
      if (!isInside) {
        const ax = (-STIFFNESS * (cur.x - target.x) - DAMPING * vel.x) / MASS;
        const ay = (-STIFFNESS * (cur.y - target.y) - DAMPING * vel.y) / MASS;
        vel.x += ax * dt;
        vel.y += ay * dt;
        cur.x += vel.x * dt;
        cur.y += vel.y * dt;
      }

      if (btnRef.current) {
        btnRef.current.style.transform = `translate(${cur.x}px, ${cur.y}px)`;
      }

      const footer = footerRef.current;
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const btn = btnRef.current;
        const btnW = btn ? btn.offsetWidth : 320;
        const btnH = btn ? btn.offsetHeight : 88;
        // Button is centered in the 800px canvas zone (top of footer)
        const btnAbsX = cur.x + rect.width / 2;
        const btnAbsY = cur.y + 400;

        SPARKLES.forEach((s, i) => {
          const el = sparkleRefs.current[i];
          if (!el) return;
          const half = s.size / 2;
          const home = getSparkleHome(i);

          // Friction + integrate
          sparkleVel[i].x *= 0.99;
          sparkleVel[i].y *= 0.99;
          sparkleCur[i].x += sparkleVel[i].x * dt;
          sparkleCur[i].y += sparkleVel[i].y * dt;

          const absX = home.x + rect.width / 2 + sparkleCur[i].x;
          const absY = home.y + rect.height / 2 + sparkleCur[i].y;

          // AABB collision
          const overlapX = Math.min(absX + half, btnAbsX + btnW / 2) - Math.max(absX - half, btnAbsX - btnW / 2);
          const overlapY = Math.min(absY + half, btnAbsY + btnH / 2) - Math.max(absY - half, btnAbsY - btnH / 2);

          if (overlapX > 0 && overlapY > 0) {
            if (overlapX < overlapY) {
              const dir = absX < btnAbsX ? -1 : 1;
              sparkleCur[i].x += dir * overlapX;
              sparkleVel[i].x = dir * Math.abs(sparkleVel[i].x) + dir * 200;
            } else {
              const dir = absY < btnAbsY ? -1 : 1;
              sparkleCur[i].y += dir * overlapY;
              sparkleVel[i].y = dir * Math.abs(sparkleVel[i].y) + dir * 200;
            }
          }

          // Wall bounce (constrain within the 800px canvas zone)
          const canvasH = 800;
          const nx = home.x + rect.width / 2 + sparkleCur[i].x;
          const ny = home.y + rect.height / 2 + sparkleCur[i].y;
          if (nx - half < 0)           { sparkleCur[i].x += half - nx;              sparkleVel[i].x = Math.abs(sparkleVel[i].x) * 0.5; }
          if (nx + half > rect.width)  { sparkleCur[i].x -= (nx + half - rect.width); sparkleVel[i].x = -Math.abs(sparkleVel[i].x) * 0.5; }
          if (ny - half < 0)           { sparkleCur[i].y += half - ny;              sparkleVel[i].y = Math.abs(sparkleVel[i].y) * 0.5; }
          if (ny + half > canvasH)     { sparkleCur[i].y -= (ny + half - canvasH);  sparkleVel[i].y = -Math.abs(sparkleVel[i].y) * 0.5; }

          el.style.transform = `translate(${sparkleCur[i].x}px, ${sparkleCur[i].y}px)`;
        });
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      const footer = footerRef.current;
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      const inFooter = e.clientY >= rect.top && e.clientY <= rect.bottom &&
                       e.clientX >= rect.left && e.clientX <= rect.right;
      const newX = e.clientX - rect.left - rect.width / 2;
      const rawY = e.clientY - rect.top - rect.height / 2;

      if (inFooter) {
        isInside = true;
        // Clamp so the button's top edge doesn't go above the top of the 800px canvas zone.
        // Button neutral center is 400px from footer top; with cur.y offset,
        // button top edge = 400 + cur.y - btnHeight/2. Must be >= 0.
        // → cur.y >= btnHeight/2 - 400
        const btn = btnRef.current;
        const btnHeight = btn ? btn.offsetHeight : 88;
        const minY = btnHeight / 2 - 400;
        const clampedY = Math.max(rawY, minY);
        const hitTop = rawY < minY;
        if (hitTop) {
          isInside = false;
          target.x = 0;
          target.y = 0;
        } else {
          cur.x = newX;
          cur.y = clampedY;
          vel.x = 0;
          vel.y = 0;
        }
      } else {
        isInside = false;
        target.x = 0;
        target.y = 0;
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-[#FEFABB] flex flex-col items-center">
      {/* Full-footer sparkle + button overlay — sits on top of everything */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {/* Sparkles */}
        <img ref={el => { sparkleRefs.current[0] = el; }} src="/red-sparkle.png"    alt="" className="absolute w-14 pointer-events-none" style={{ bottom: "224px", left: "12%" }} />
        <img ref={el => { sparkleRefs.current[1] = el; }} src="/yellow-sparkle.png" alt="" className="absolute w-16 pointer-events-none" style={{ top:  "80px",  right: "18%" }} />
        <img ref={el => { sparkleRefs.current[2] = el; }} src="/red-sparkle.png"    alt="" className="absolute w-12 pointer-events-none" style={{ top: "176px",  right: "10%" }} />

        {/* Book a demo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: 0, height: "800px" }}>
          <button
            ref={btnRef}
            className="bg-[#4B6FFF] text-white px-16 py-6 rounded-[20px] text-[40px] font-medium tracking-tight hover:bg-[#3a5fee] active:scale-95 cursor-pointer pointer-events-auto"
            style={{ fontFamily: "var(--font-albert-sans)" }}
          >
            Book a demo
          </button>
        </div>
      </div>

      {/* 3D Popcorn */}
      <div className="relative z-10 w-full" style={{ height: "800px" }}>
        <PopcornCanvas />
      </div>

      {/* Wordmark */}
      <div className="relative z-10 -mt-56 mb-0">
        <img src="/popcorn-logo.svg" alt="Popcorn" style={{ height: "clamp(96px,17vw,216px)" }} />
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10 w-full flex items-center justify-between px-12 py-6 -mt-32 pb-40"
        style={{ fontFamily: "var(--font-albert-sans)" }}
      >
        <div className="flex items-center gap-8">
          <a href="#" aria-label="X" className="hover:opacity-60 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-60 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-[18px] text-black hover:opacity-60 transition-opacity">Terms</a>
          <a href="#" className="text-[18px] text-black hover:opacity-60 transition-opacity">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
