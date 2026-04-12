"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import UnicornScene from "unicornstudio-react/next";
import EmailCapture from "./EmailCapture";
import ChannelsSidebar from "./ChannelsSidebar";
import ChatSidebar from "./ChatSidebar";
import Nav from "./Nav";

const SPRING = "linear(0, 0.006, 0.025, 0.057 3.7%, 0.102 5.2%, 0.202 7.8%, 0.553 16.2%, 0.657 19.1%, 0.743, 0.816, 0.876, 0.924 30.4%, 0.961 33.6%, 0.986 36.5%, 1.004 39.8%, 1.015 43.3%, 1.021 47.4%, 1.02 53.6%, 1.003 77%, 1)";

const DEFAULTS = {
  targetW: 1600,
  targetH: 900,
  sidebarW: 260,
  rightSidebarW: 340,
  contentWRatio: 0.9,
  contentHRatio: 0.9,
  frameDuration: 2,
  frameDelay: 0.3,
  sidebarDuration: 0.3,
  leftDelay: 2,
  rightDelay: 2,
  autoPlayDelay: 1,
  toolbarDelay: 2.3,
  toolbarDuration: 0.3,
};

type Cfg = typeof DEFAULTS;

type Dims = {
  vw: number; vh: number; scale: number;
  scaledW: number; scaledH: number; top: number; left: number;
};

export default function AppFrame() {
  const [windowed, setWindowed] = useState(false);
  const [cfg] = useState<Cfg>(DEFAULTS);
  const [dims, setDims] = useState<Dims>({
    vw: 0, vh: 0, scale: 1, scaledW: 0, scaledH: 0, top: 0, left: 0,
  });

  // Auto-play: trigger windowed state after configured delay
  useEffect(() => {
    const t = setTimeout(() => setWindowed(true), cfg.autoPlayDelay * 1000);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scale = Math.min(
        (vw * cfg.contentWRatio) / cfg.targetW,
        (vh * cfg.contentHRatio) / cfg.targetH,
      );
      const scaledW = cfg.targetW * scale;
      const scaledH = cfg.targetH * scale;
      const navHeight = 90; // space for sticky nav
      const centeredTop = (vh - scaledH) / 2;
      const top = Math.max(navHeight, centeredTop);
      setDims({ vw, vh, scale, scaledW, scaledH, top, left: (vw - scaledW) / 2 });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [cfg.targetW, cfg.targetH, cfg.contentWRatio, cfg.contentHRatio]);

  const frameTransition = `all ${cfg.frameDuration}s ease-in-out ${cfg.frameDelay}s`;
  const leftTransition = `all ${cfg.sidebarDuration}s ${SPRING} ${cfg.leftDelay}s`;
  const rightTransition = `all ${cfg.sidebarDuration}s ${SPRING} ${cfg.rightDelay}s`;
  const toolbarTransition = `all ${cfg.toolbarDuration}s ${SPRING} ${cfg.toolbarDelay}s`;

  return (
    <div
      className="h-screen relative overflow-hidden"
    >
      {/* Single container holds main content + both sidebars */}
      <div
        className="absolute flex overflow-hidden"
        style={{
          top: windowed ? `${dims.top}px` : "0px",
          left: windowed ? `${dims.left}px` : "0px",
          width: windowed ? `${cfg.targetW}px` : dims.vw ? `${dims.vw}px` : "100vw",
          height: windowed ? `${cfg.targetH}px` : dims.vh ? `${dims.vh}px` : "100vh",
          transform: `scale(${windowed ? dims.scale : 1})`,
          transformOrigin: "top left",
          transition: frameTransition,
        }}
      >
        {/* Channels sidebar */}
        <div className="hidden md:block shrink-0">
          <div
            className="overflow-hidden shrink-0"
            style={{ width: windowed ? `${cfg.sidebarW}px` : "0px", transition: frameTransition }}
          >
            <ChannelsSidebar open={windowed} width={cfg.sidebarW} transition={leftTransition} />
          </div>
        </div>

        {/* Main page content */}
        <div className="flex-1 flex flex-col relative min-w-0 min-h-full overflow-hidden bg-amber-100 z-0">
          <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none [&_*]:!pointer-events-none">
            <UnicornScene
              projectId="Dy4crfooAOZD6FlsT7Xl"
              width="100%"
              height="100%"
              scale={1}
              dpi={1.5}
              sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.5/dist/unicornStudio.umd.js"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Navigation */}
          <Nav />

          <div className="flex-1 flex flex-col items-center justify-center gap-8 z-10">
            <Image alt="Popcorn" className="max-w-none size-50 mt-[-102px] mb-[-22px]" src="/popcorn-3d.png" width={200} height={200} />

            <h1
              className="text-[100px] leading-[1.0] text-center tracking-[-1.5px] text-black"
              style={{ fontFamily: "var(--font-synt)" }}
            >
              Team playground<br />for builders
            </h1>

            <p
              className="text-[23px] leading-[1.3] text-center font-medium text-black max-w-190"
              style={{ fontFamily: "var(--font-albert-sans)" }}
            >
              Where your build goes multiplayer. Show your team what you&rsquo;re building. Run your team on what you&rsquo;ve built.
            </p>

            <div className="flex flex-col items-center gap-2.5 relative z-20">
              <EmailCapture variant="hero" />
            </div>
          </div>

          {/* Popcorn popping up from bottom — fills like a bucket, avoids center button */}
          <div className="absolute bottom-0 h-[200px] pointer-events-none z-10" style={{ left: "-20px", right: "-20px" }}>
            {[
              /* Dense bottom strip — full width, covers very bottom */
              { src: "/assets/popcorn-2.png", left: "69%", bottom: -50, size: 170, delay: "3.8s", rotate: "88deg" },
              { src: "/popcorn-3d.png", left: "6%", bottom: -48, size: 165, delay: "3.85s", rotate: "145deg" },
              { src: "/assets/popcorn-3.png", left: "83%", bottom: -52, size: 170, delay: "3.95s", rotate: "-35deg" },
              { src: "/assets/popcorn-new.png", left: "34%", bottom: -46, size: 160, delay: "3.9s", rotate: "72deg" },
              { src: "/popcorn-3d.png", left: "55%", bottom: -50, size: 170, delay: "4.05s", rotate: "-110deg" },
              { src: "/assets/popcorn-2.png", left: "13%", bottom: -48, size: 165, delay: "4.1s", rotate: "25deg" },
              { src: "/assets/popcorn-3.png", left: "90%", bottom: -52, size: 160, delay: "4.0s", rotate: "-160deg" },
              { src: "/assets/popcorn-new.png", left: "48%", bottom: -46, size: 170, delay: "4.15s", rotate: "-45deg" },
              { src: "/popcorn-3d.png", left: "27%", bottom: -50, size: 165, delay: "4.2s", rotate: "130deg" },
              { src: "/assets/popcorn-2.png", left: "76%", bottom: -48, size: 170, delay: "4.12s", rotate: "-80deg" },
              { src: "/assets/popcorn-3.png", left: "-2%", bottom: -50, size: 170, delay: "4.25s", rotate: "55deg" },
              { src: "/assets/popcorn-new.png", left: "62%", bottom: -52, size: 160, delay: "4.3s", rotate: "-65deg" },
              { src: "/popcorn-3d.png", left: "20%", bottom: -46, size: 170, delay: "4.35s", rotate: "15deg" },
              { src: "/assets/popcorn-2.png", left: "41%", bottom: -50, size: 165, delay: "4.4s", rotate: "-140deg" },
              /* Middle fill — covers gaps but stays low in center */
              { src: "/assets/popcorn-3.png", left: "3%", bottom: -10, size: 160, delay: "4.5s", rotate: "170deg" },
              { src: "/popcorn-3d.png", left: "88%", bottom: -12, size: 155, delay: "4.5s", rotate: "-25deg" },
              { src: "/assets/popcorn-new.png", left: "10%", bottom: -8, size: 160, delay: "4.6s", rotate: "95deg" },
              { src: "/assets/popcorn-2.png", left: "81%", bottom: -15, size: 160, delay: "4.65s", rotate: "-120deg" },
              { src: "/assets/popcorn-3.png", left: "18%", bottom: -10, size: 155, delay: "4.75s", rotate: "50deg" },
              { src: "/popcorn-3d.png", left: "74%", bottom: -12, size: 160, delay: "4.7s", rotate: "-175deg" },
              { src: "/assets/popcorn-new.png", left: "25%", bottom: -14, size: 155, delay: "4.8s", rotate: "38deg" },
              { src: "/assets/popcorn-2.png", left: "67%", bottom: -10, size: 160, delay: "4.85s", rotate: "-58deg" },
              /* Sides climbing up — left side */
              { src: "/assets/popcorn-3.png", left: "calc(-1% - 60px)", bottom: 40, size: 155, delay: "4.95s", rotate: "-90deg" },
              { src: "/popcorn-3d.png", left: "calc(7% - 60px)", bottom: 50, size: 150, delay: "5.05s", rotate: "110deg" },
              { src: "/assets/popcorn-new.png", left: "calc(14% - 60px)", bottom: 35, size: 155, delay: "5.15s", rotate: "-10deg" },
              { src: "/assets/popcorn-2.png", left: "calc(3% - 60px)", bottom: 80, size: 140, delay: "5.25s", rotate: "68deg" },
              { src: "/assets/popcorn-3.png", left: "calc(12% - 60px)", bottom: 75, size: 145, delay: "5.35s", rotate: "-155deg" },
              { src: "/popcorn-3d.png", left: "calc(20% - 60px)", bottom: 45, size: 150, delay: "5.2s", rotate: "42deg" },
              /* Sides climbing up — right side */
              { src: "/assets/popcorn-new.png", left: "82%", bottom: 40, size: 155, delay: "5.0s", rotate: "155deg" },
              { src: "/assets/popcorn-2.png", left: "90%", bottom: 50, size: 150, delay: "5.1s", rotate: "-78deg" },
              { src: "/assets/popcorn-3.png", left: "75%", bottom: 35, size: 155, delay: "5.2s", rotate: "22deg" },
              { src: "/popcorn-3d.png", left: "88%", bottom: 80, size: 140, delay: "5.3s", rotate: "-85deg" },
              { src: "/assets/popcorn-new.png", left: "78%", bottom: 75, size: 145, delay: "5.4s", rotate: "140deg" },
              { src: "/assets/popcorn-2.png", left: "70%", bottom: 45, size: 150, delay: "5.25s", rotate: "-32deg" },
            ].map((p, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={p.src}
                alt=""
                className="absolute animate-pop-in"
                style={{
                  left: p.left,
                  bottom: p.bottom,
                  width: p.size,
                  height: p.size,
                  "--pop-delay": p.delay,
                  "--pop-rotate": p.rotate,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        {/* Chat sidebar */}
        <div className="hidden md:block shrink-0">
          <div
            className="overflow-hidden shrink-0"
            style={{ width: windowed ? `${cfg.rightSidebarW}px` : "0px", transition: frameTransition }}
          >
            <ChatSidebar open={windowed} width={cfg.rightSidebarW} transition={rightTransition} />
          </div>
        </div>
      </div>

    </div>
  );
}
