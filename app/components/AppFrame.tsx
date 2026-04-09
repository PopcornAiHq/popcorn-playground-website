"use client";

import Image from "next/image";
import DitherWaveBg from "./DitherWaveBg";

const TINT_COLORS = ["#F9D674", "#F4D3B1", "#DFA56E", "#9B59B6", "#C18ADD"];

export default function AppFrame() {
  return (
    <div className="h-screen relative overflow-hidden bg-[#fffabb]">
      {/* Logo top-left */}
      <div className="absolute top-6 left-8 z-20">
        <Image alt="Popcorn" src="/assets/popcorn-wordmark.png" width={140} height={40} />
      </div>

      <div className="flex-1 flex flex-col relative min-w-0 min-h-full overflow-hidden">

          <div className="flex-1 flex flex-col items-center justify-center gap-8 z-10 mt-[-50px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Popcorn" className="max-w-none size-64 mt-[-102px] mb-[-22px] animate-tint-filter" src="/assets/popcorn_animated.webp" width={256} height={256} />

            <h1
              className="text-[76px] leading-[1.0] text-center tracking-[-1.5px] text-black"
              style={{ fontFamily: "var(--font-source-serif-4)" }}
            >
              Fastest prototype playground<br />for product teams
            </h1>

            <p
              className="text-[20px] leading-[1.3] text-center font-medium text-black max-w-190"
              style={{ fontFamily: "var(--font-albert-sans)" }}
            >
              <span className="font-extrabold">Seconds to plug in. One-click to share.</span><br /><br />Faster feedback than any Figma comment, Loom video, or Slack thread.<br />The fastest way from &ldquo;I built this&rdquo; to &ldquo;let&rsquo;s ship this.&rdquo;
            </p>

            <div className="flex flex-col items-center gap-2.5 relative z-20">
              <button
                className="bg-[#9B59B6] text-white px-5 py-3 rounded-[20px] text-[18px] font-semibold hover:bg-[#8A4EA3] active:scale-95 transition-all cursor-pointer shadow-lg border-0 flex items-center justify-center gap-1.5"
                style={{ fontFamily: "var(--font-source-serif-4)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Get Setup
              </button>
            </div>
          </div>

          {/* Digital dither wave behind popcorn */}
          <DitherWaveBg />

          {/* Flying popcorn — pops from bottom and flies up behind content */}
          <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
            {[
              { src: "/assets/popcorn-3.png", left: "15%", size: 195, delay: "6s", rotate: "38deg", flyY: "-650px", flyX: "40px", duration: "5s", tint: "#F9D674" },
              { src: "/popcorn-3d.png", left: "55%", size: 180, delay: "9s", rotate: "211deg", flyY: "-600px", flyX: "-30px", duration: "4.8s", tint: "#9B59B6" },
              { src: "/assets/popcorn-2.png", left: "80%", size: 185, delay: "12s", rotate: "307deg", flyY: "-680px", flyX: "25px", duration: "5.2s", tint: "#DFA56E" },
            ].map((p, i) => (
              <div
                key={`fly-${i}`}
                className="absolute bottom-[-100px] animate-pop-fly"
                style={{
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  "--pop-delay": p.delay,
                  "--pop-rotate": p.rotate,
                  "--fly-y": p.flyY,
                  "--fly-x": p.flyX,
                  "--fly-duration": p.duration,
                } as React.CSSProperties}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt="" className="w-full h-full" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: p.tint,
                    mixBlendMode: "multiply",
                    opacity: 0.7,
                    WebkitMaskImage: `url(${p.src})`,
                    WebkitMaskSize: "100% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "0 0",
                    maskImage: `url(${p.src})`,
                    maskSize: "100% 100%",
                    maskRepeat: "no-repeat",
                    maskPosition: "0 0",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Popcorn popping up from bottom — fills like a bucket, avoids center button */}
          {/* Solid bar at very bottom to kill any gaps */}
          <div className="absolute bottom-0 left-0 right-0 h-[30px] bg-[#fffabb] z-[9]" />
          <div className="absolute bottom-0 h-[320px] pointer-events-none z-10" style={{ left: "-20px", right: "-20px" }}>
            {[
              /* Bottom row — tightly packed, overlapping edges */
              { src: "/assets/popcorn-2.png", left: "-6%", bottom: -60, size: 175, delay: "3.8s", rotate: "217deg" },
              { src: "/popcorn-3d.png", left: "2%", bottom: -58, size: 170, delay: "3.82s", rotate: "312deg" },
              { src: "/assets/popcorn-3.png", left: "10%", bottom: -62, size: 175, delay: "3.84s", rotate: "47deg" },
              { src: "/assets/popcorn-new.png", left: "18%", bottom: -56, size: 170, delay: "3.86s", rotate: "193deg" },
              { src: "/popcorn-3d.png", left: "26%", bottom: -60, size: 175, delay: "3.88s", rotate: "258deg" },
              { src: "/assets/popcorn-2.png", left: "34%", bottom: -58, size: 170, delay: "3.9s", rotate: "134deg" },
              { src: "/assets/popcorn-3.png", left: "42%", bottom: -62, size: 175, delay: "3.92s", rotate: "19deg" },
              { src: "/assets/popcorn-new.png", left: "50%", bottom: -56, size: 170, delay: "3.94s", rotate: "289deg" },
              { src: "/popcorn-3d.png", left: "58%", bottom: -60, size: 175, delay: "3.96s", rotate: "76deg" },
              { src: "/assets/popcorn-2.png", left: "66%", bottom: -58, size: 170, delay: "3.98s", rotate: "341deg" },
              { src: "/assets/popcorn-3.png", left: "74%", bottom: -62, size: 175, delay: "4.0s", rotate: "162deg" },
              { src: "/assets/popcorn-new.png", left: "82%", bottom: -56, size: 170, delay: "4.02s", rotate: "243deg" },
              { src: "/popcorn-3d.png", left: "90%", bottom: -60, size: 175, delay: "4.04s", rotate: "95deg" },
              { src: "/assets/popcorn-2.png", left: "98%", bottom: -58, size: 170, delay: "4.06s", rotate: "228deg" },
              /* Second row — offset to fill gaps between first row */
              { src: "/assets/popcorn-3.png", left: "-2%", bottom: -25, size: 170, delay: "4.12s", rotate: "108deg" },
              { src: "/popcorn-3d.png", left: "6%", bottom: -22, size: 165, delay: "4.14s", rotate: "5deg" },
              { src: "/assets/popcorn-new.png", left: "14%", bottom: -28, size: 170, delay: "4.16s", rotate: "276deg" },
              { src: "/assets/popcorn-2.png", left: "22%", bottom: -20, size: 165, delay: "4.18s", rotate: "148deg" },
              { src: "/assets/popcorn-3.png", left: "30%", bottom: -26, size: 170, delay: "4.2s", rotate: "53deg" },
              { src: "/popcorn-3d.png", left: "38%", bottom: -22, size: 165, delay: "4.22s", rotate: "302deg" },
              { src: "/assets/popcorn-new.png", left: "46%", bottom: -28, size: 170, delay: "4.24s", rotate: "187deg" },
              { src: "/assets/popcorn-2.png", left: "54%", bottom: -20, size: 165, delay: "4.26s", rotate: "38deg" },
              { src: "/assets/popcorn-3.png", left: "62%", bottom: -26, size: 170, delay: "4.28s", rotate: "265deg" },
              { src: "/popcorn-3d.png", left: "70%", bottom: -22, size: 165, delay: "4.3s", rotate: "121deg" },
              { src: "/assets/popcorn-new.png", left: "78%", bottom: -28, size: 170, delay: "4.32s", rotate: "342deg" },
              { src: "/assets/popcorn-2.png", left: "86%", bottom: -20, size: 165, delay: "4.34s", rotate: "67deg" },
              { src: "/assets/popcorn-3.png", left: "94%", bottom: -26, size: 170, delay: "4.36s", rotate: "209deg" },
              /* Third row — fill gaps */
              { src: "/assets/popcorn-3.png", left: "8%", bottom: 10, size: 165, delay: "4.32s", rotate: "267deg" },
              { src: "/popcorn-3d.png", left: "25%", bottom: 15, size: 160, delay: "4.35s", rotate: "38deg" },
              { src: "/assets/popcorn-new.png", left: "42%", bottom: 8, size: 165, delay: "4.38s", rotate: "183deg" },
              { src: "/assets/popcorn-2.png", left: "58%", bottom: 12, size: 170, delay: "4.4s", rotate: "316deg" },
              { src: "/assets/popcorn-3.png", left: "75%", bottom: 10, size: 160, delay: "4.43s", rotate: "121deg" },
              { src: "/popcorn-3d.png", left: "92%", bottom: 14, size: 165, delay: "4.45s", rotate: "209deg" },
              /* Sides climbing up — left side */
              { src: "/assets/popcorn-new.png", left: "calc(-1% - 60px)", bottom: 50, size: 155, delay: "4.5s", rotate: "267deg" },
              { src: "/assets/popcorn-2.png", left: "calc(7% - 60px)", bottom: 65, size: 150, delay: "4.55s", rotate: "38deg" },
              { src: "/assets/popcorn-3.png", left: "calc(14% - 60px)", bottom: 45, size: 155, delay: "4.6s", rotate: "183deg" },
              { src: "/popcorn-3d.png", left: "calc(3% - 60px)", bottom: 95, size: 145, delay: "4.65s", rotate: "316deg" },
              { src: "/assets/popcorn-new.png", left: "calc(12% - 60px)", bottom: 90, size: 150, delay: "4.7s", rotate: "121deg" },
              { src: "/assets/popcorn-2.png", left: "calc(20% - 60px)", bottom: 55, size: 155, delay: "4.58s", rotate: "209deg" },
              /* Sides climbing up — right side */
              { src: "/assets/popcorn-3.png", left: "82%", bottom: 50, size: 155, delay: "4.52s", rotate: "67deg" },
              { src: "/popcorn-3d.png", left: "90%", bottom: 65, size: 150, delay: "4.57s", rotate: "294deg" },
              { src: "/assets/popcorn-new.png", left: "75%", bottom: 45, size: 155, delay: "4.62s", rotate: "156deg" },
              { src: "/assets/popcorn-2.png", left: "88%", bottom: 95, size: 145, delay: "4.67s", rotate: "248deg" },
              { src: "/assets/popcorn-3.png", left: "78%", bottom: 90, size: 150, delay: "4.72s", rotate: "11deg" },
              { src: "/popcorn-3d.png", left: "70%", bottom: 55, size: 155, delay: "4.6s", rotate: "173deg" },
              /* Extra middle fill at bottom to cover any gaps */
              { src: "/assets/popcorn-2.png", left: "-3%", bottom: -55, size: 175, delay: "3.78s", rotate: "95deg" },
              { src: "/assets/popcorn-new.png", left: "93%", bottom: -48, size: 170, delay: "3.83s", rotate: "228deg" },
            ].map((p, i) => (
              <div
                key={i}
                className="absolute animate-pop-in"
                style={{
                  left: p.left,
                  bottom: p.bottom,
                  width: p.size,
                  height: p.size,
                  "--pop-delay": p.delay,
                  "--pop-rotate": p.rotate,
                } as React.CSSProperties}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt="" className="w-full h-full" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: TINT_COLORS[i % TINT_COLORS.length],
                    mixBlendMode: "multiply",
                    opacity: 0.7,
                    WebkitMaskImage: `url(${p.src})`,
                    WebkitMaskSize: "100% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "0 0",
                    maskImage: `url(${p.src})`,
                    maskSize: "100% 100%",
                    maskRepeat: "no-repeat",
                    maskPosition: "0 0",
                  }}
                />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
