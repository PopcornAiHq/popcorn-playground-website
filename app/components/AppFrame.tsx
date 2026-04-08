"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import UnicornScene from "unicornstudio-react/next";
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
            <Image alt="Popcorn" className="max-w-none size-50 mt-[-32px] mb-[-22px]" src="/popcorn-3d.png" width={200} height={200} />

            <h1
              className="text-[90px] leading-[1.0] text-center tracking-[-1.5px] text-black"
              style={{ fontFamily: "var(--font-synt)" }}
            >
              Fastest<br />prototype playground<br />for product teams
            </h1>

            <p
              className="text-[20px] leading-[1.3] text-center font-medium text-black max-w-190"
              style={{ fontFamily: "var(--font-albert-sans)" }}
            >
              Seconds to plug in. One-click to share. Faster feedback than any Figma comment, Loom video, or Slack thread. The fastest way from &ldquo;I built this&rdquo; to &ldquo;let&rsquo;s ship this.&rdquo;
            </p>

            <div className="flex flex-col items-center gap-2.5">
              <button
                className="bg-[#1a3de8] text-white px-12 py-5 rounded-[24px] text-[22px] font-semibold hover:bg-[#1533c4] active:scale-95 transition-all cursor-pointer shadow-lg border-[3px] border-[#5CE0D8]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                GET SETUP
              </button>
            </div>
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
