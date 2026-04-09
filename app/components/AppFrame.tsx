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

          <div className="flex-1 flex flex-col items-center justify-center gap-8 z-10">
            <Image alt="Popcorn" className="max-w-none size-50 mt-[-102px] mb-[-22px]" src="/popcorn-3d.png" width={200} height={200} />

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
              { src: "/assets/popcorn-2.png", left: "12%", size: 150, delay: "4.5s", rotate: "45deg", flyY: "-650px", flyX: "40px", duration: "4s", tint: "#F9D674" },
              { src: "/assets/popcorn-3.png", left: "40%", size: 130, delay: "5.8s", rotate: "192deg", flyY: "-600px", flyX: "-30px", duration: "3.8s", tint: "#9B59B6" },
              { src: "/popcorn-3d.png", left: "65%", size: 140, delay: "4.8s", rotate: "278deg", flyY: "-680px", flyX: "25px", duration: "4.2s", tint: "#DFA56E" },
              { src: "/assets/popcorn-new.png", left: "85%", size: 125, delay: "6.5s", rotate: "113deg", flyY: "-620px", flyX: "-45px", duration: "3.6s", tint: "#C18ADD" },
              { src: "/assets/popcorn-2.png", left: "30%", size: 135, delay: "7.2s", rotate: "326deg", flyY: "-660px", flyX: "35px", duration: "4.5s", tint: "#F4D3B1" },
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
                    opacity: 0.45,
                    WebkitMaskImage: `url(${p.src})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskImage: `url(${p.src})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Popcorn popping up from bottom — fills like a bucket, avoids center button */}
          <div className="absolute bottom-0 h-[200px] pointer-events-none z-10" style={{ left: "-20px", right: "-20px" }}>
            {[
              /* Dense bottom strip — full width, covers very bottom */
              { src: "/assets/popcorn-2.png", left: "69%", bottom: -50, size: 170, delay: "3.8s", rotate: "217deg" },
              { src: "/popcorn-3d.png", left: "6%", bottom: -48, size: 165, delay: "3.85s", rotate: "312deg" },
              { src: "/assets/popcorn-3.png", left: "83%", bottom: -52, size: 170, delay: "3.95s", rotate: "47deg" },
              { src: "/assets/popcorn-new.png", left: "34%", bottom: -46, size: 160, delay: "3.9s", rotate: "193deg" },
              { src: "/popcorn-3d.png", left: "55%", bottom: -50, size: 170, delay: "4.05s", rotate: "258deg" },
              { src: "/assets/popcorn-2.png", left: "13%", bottom: -48, size: 165, delay: "4.1s", rotate: "134deg" },
              { src: "/assets/popcorn-3.png", left: "90%", bottom: -52, size: 160, delay: "4.0s", rotate: "19deg" },
              { src: "/assets/popcorn-new.png", left: "48%", bottom: -46, size: 170, delay: "4.15s", rotate: "289deg" },
              { src: "/popcorn-3d.png", left: "27%", bottom: -50, size: 165, delay: "4.2s", rotate: "76deg" },
              { src: "/assets/popcorn-2.png", left: "76%", bottom: -48, size: 170, delay: "4.12s", rotate: "341deg" },
              { src: "/assets/popcorn-3.png", left: "-2%", bottom: -50, size: 170, delay: "4.25s", rotate: "162deg" },
              { src: "/assets/popcorn-new.png", left: "62%", bottom: -52, size: 160, delay: "4.3s", rotate: "243deg" },
              { src: "/popcorn-3d.png", left: "20%", bottom: -46, size: 170, delay: "4.35s", rotate: "108deg" },
              { src: "/assets/popcorn-2.png", left: "41%", bottom: -50, size: 165, delay: "4.4s", rotate: "5deg" },
              /* Middle fill — covers gaps but stays low in center */
              { src: "/assets/popcorn-3.png", left: "3%", bottom: -10, size: 160, delay: "4.5s", rotate: "276deg" },
              { src: "/popcorn-3d.png", left: "88%", bottom: -12, size: 155, delay: "4.5s", rotate: "53deg" },
              { src: "/assets/popcorn-new.png", left: "10%", bottom: -8, size: 160, delay: "4.6s", rotate: "329deg" },
              { src: "/assets/popcorn-2.png", left: "81%", bottom: -15, size: 160, delay: "4.65s", rotate: "187deg" },
              { src: "/assets/popcorn-3.png", left: "18%", bottom: -10, size: 155, delay: "4.75s", rotate: "94deg" },
              { src: "/popcorn-3d.png", left: "74%", bottom: -12, size: 160, delay: "4.7s", rotate: "231deg" },
              { src: "/assets/popcorn-new.png", left: "25%", bottom: -14, size: 155, delay: "4.8s", rotate: "148deg" },
              { src: "/assets/popcorn-2.png", left: "67%", bottom: -10, size: 160, delay: "4.85s", rotate: "302deg" },
              /* Sides climbing up — left side */
              { src: "/assets/popcorn-3.png", left: "calc(-1% - 60px)", bottom: 40, size: 155, delay: "4.95s", rotate: "267deg" },
              { src: "/popcorn-3d.png", left: "calc(7% - 60px)", bottom: 50, size: 150, delay: "5.05s", rotate: "38deg" },
              { src: "/assets/popcorn-new.png", left: "calc(14% - 60px)", bottom: 35, size: 155, delay: "5.15s", rotate: "183deg" },
              { src: "/assets/popcorn-2.png", left: "calc(3% - 60px)", bottom: 80, size: 140, delay: "5.25s", rotate: "316deg" },
              { src: "/assets/popcorn-3.png", left: "calc(12% - 60px)", bottom: 75, size: 145, delay: "5.35s", rotate: "121deg" },
              { src: "/popcorn-3d.png", left: "calc(20% - 60px)", bottom: 45, size: 150, delay: "5.2s", rotate: "209deg" },
              /* Sides climbing up — right side */
              { src: "/assets/popcorn-new.png", left: "82%", bottom: 40, size: 155, delay: "5.0s", rotate: "67deg" },
              { src: "/assets/popcorn-2.png", left: "90%", bottom: 50, size: 150, delay: "5.1s", rotate: "294deg" },
              { src: "/assets/popcorn-3.png", left: "75%", bottom: 35, size: 155, delay: "5.2s", rotate: "156deg" },
              { src: "/popcorn-3d.png", left: "88%", bottom: 80, size: 140, delay: "5.3s", rotate: "248deg" },
              { src: "/assets/popcorn-new.png", left: "78%", bottom: 75, size: 145, delay: "5.4s", rotate: "11deg" },
              { src: "/assets/popcorn-2.png", left: "70%", bottom: 45, size: 150, delay: "5.25s", rotate: "173deg" },
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
                    opacity: 0.45,
                    WebkitMaskImage: `url(${p.src})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskImage: `url(${p.src})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
