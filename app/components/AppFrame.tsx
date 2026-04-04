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
  contentWRatio: 0.9,
  contentHRatio: 0.9,
  frameDuration: 2,
  frameDelay: 0.3,
  sidebarDuration: 0.3,
  leftDelay: 2,
  rightDelay: 2,
  autoPlayDelay: 1,
};

type Cfg = typeof DEFAULTS;

type Dims = {
  vw: number; vh: number; scale: number;
  scaledW: number; scaledH: number; top: number; left: number;
};

function NumInput({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <label className="flex items-center justify-between gap-3">
      <span className="text-white/50 text-[11px] whitespace-nowrap">{label}</span>
      <input
        type="number"
        value={value}
        step={0.1}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="w-16 bg-white/10 text-white text-[11px] rounded px-2 py-1 text-right outline-none focus:bg-white/20 transition-colors [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
    </label>
  );
}

export default function AppFrame() {
  const [windowed, setWindowed] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [cfg, setCfg] = useState<Cfg>(DEFAULTS);
  const settingsRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState<Dims>({
    vw: 0, vh: 0, scale: 1, scaledW: 0, scaledH: 0, top: 0, left: 0,
  });

  const set = (key: keyof Cfg) => (v: number) => setCfg((c) => ({ ...c, [key]: v }));

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
      setDims({ vw, vh, scale, scaledW, scaledH, top: (vh - scaledH) / 2, left: (vw - scaledW) / 2 });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [cfg.targetW, cfg.targetH, cfg.contentWRatio, cfg.contentHRatio]);

  // Close settings on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
    };
    if (settingsOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [settingsOpen]);

  const frameTransition = `all ${cfg.frameDuration}s ease-in-out ${cfg.frameDelay}s`;
  const leftTransition = `all ${cfg.sidebarDuration}s ${SPRING} ${cfg.leftDelay}s`;
  const rightTransition = `all ${cfg.sidebarDuration}s ${SPRING} ${cfg.rightDelay}s`;

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
          <div className="absolute inset-0 w-full h-full -z-10">
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

          <Nav />

          <div className="flex-1 flex flex-col items-center justify-center gap-8 z-10">
            <Image alt="Popcorn" className="max-w-none size-50" src="/popcorn-3d.png" width={200} height={200} />

            <h1
              className="text-[clamp(48px,8vw,95px)] leading-[0.9] text-center tracking-[-8px] text-black"
              style={{ fontFamily: "var(--font-alike-angular)" }}
            >
              Your prototype deserves a better conversation.
            </h1>

            <p
              className="text-[20px] leading-[1.3] text-center font-medium text-black max-w-190"
              style={{ fontFamily: "var(--font-albert-sans)" }}
            >
              Meet the product playground where every prototype spins up its own channel for feedback, updates, and the next version. Popcorn is your feedback loop, finally in one place.
            </p>

            <div className="flex flex-col items-center gap-2.5">
              <button
                className="bg-black text-white px-8 py-4 rounded-[20px] text-[18px] font-medium hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer"
                style={{ fontFamily: "var(--font-albert-sans)" }}
              >
                Sign Up
              </button>
              <p
                className="text-[14px] opacity-70 text-black text-center"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                44 SPOTS AVAILABLE
              </p>
            </div>
          </div>
        </div>

        {/* Chat sidebar */}
        <div className="hidden md:block shrink-0">
          <div
            className="overflow-hidden shrink-0"
            style={{ width: windowed ? `${cfg.sidebarW}px` : "0px", transition: frameTransition }}
          >
            <ChatSidebar open={windowed} width={cfg.sidebarW} transition={rightTransition} />
          </div>
        </div>
      </div>

      {/* Controls bar — toggle + settings */}
      <div ref={settingsRef} className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {/* Toggle */}
        <button
          onClick={() => setWindowed((v) => !v)}
          className="flex items-center gap-2 bg-black/80 hover:bg-black text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          <span className="text-[11px] tracking-widest uppercase">
            {windowed ? "App view" : "Full view"}
          </span>
          <span className={`relative inline-flex w-7 h-4 px-0.5 rounded-full transition-colors duration-200 ${windowed ? "bg-white/40" : "bg-white/20"}`}>
            <span className={`absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform duration-200 ${windowed ? "translate-x-3" : ""}`} />
          </span>
        </button>

        {/* Settings button */}
        <button
          onClick={() => setSettingsOpen((v) => !v)}
          className={`flex items-center justify-center w-9 h-9 rounded-full backdrop-blur-sm transition-colors ${settingsOpen ? "bg-black text-white" : "bg-black/80 hover:bg-black text-white/70 hover:text-white"}`}
        >
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.3071 2.79134C10.4458 2.31684 10.8809 1.99072 11.3752 1.99072L12.6249 1.99072C13.1192 1.99072 13.5543 2.31684 13.693 2.79134C13.7924 3.13133 14.0477 3.4037 14.3806 3.52485L15.6241 3.97745C15.9569 4.0986 16.3276 4.05406 16.6223 3.8575C17.0335 3.58317 17.5765 3.61302 17.9552 3.93079L18.9124 4.73404C19.2911 5.0518 19.4148 5.5813 19.2161 6.03395C19.0737 6.35828 19.0942 6.73103 19.2713 7.03779L19.9329 8.18382C20.11 8.49058 20.4226 8.69471 20.7747 8.73354C21.2661 8.78775 21.6628 9.15961 21.7486 9.64646L21.9656 10.8771C22.0515 11.364 21.8058 11.8491 21.3626 12.0681C21.0451 12.225 20.8212 12.5237 20.7597 12.8725L20.5299 14.1758C20.4684 14.5246 20.5766 14.8819 20.8213 15.1379C21.1629 15.4953 21.2278 16.0352 20.9806 16.4633L20.3558 17.5455C20.1086 17.9736 19.6086 18.1874 19.1284 18.0703C18.7842 17.9863 18.4207 18.0713 18.1494 18.2989L17.1356 19.1495C16.8643 19.3772 16.7175 19.7205 16.7404 20.074C16.7724 20.5673 16.4751 21.0226 16.0105 21.1916L14.8362 21.619C14.3717 21.7881 13.8513 21.6305 13.5587 21.232C13.349 20.9466 13.0159 20.7779 12.6617 20.7779H11.3384C10.9842 20.7779 10.6511 20.9466 10.4414 21.232C10.1488 21.6305 9.62841 21.7881 9.16387 21.619L7.9896 21.1916C7.52505 21.0226 7.22773 20.5673 7.25968 20.074C7.28257 19.7205 7.13582 19.3772 6.86447 19.1495L5.85075 18.2989C5.57941 18.0713 5.21588 17.9863 4.87175 18.0703C4.39146 18.1874 3.89149 17.9736 3.64431 17.5455L3.01949 16.4633C2.77231 16.0352 2.83719 15.4953 3.17877 15.1379C3.42351 14.8819 3.53174 14.5246 3.47023 14.1758L3.24044 12.8725C3.17893 12.5237 2.95503 12.225 2.63746 12.0681C2.19426 11.8491 1.94865 11.364 2.03449 10.8771L2.25149 9.64646C2.33733 9.15961 2.73405 8.78775 3.22543 8.73354C3.57751 8.69471 3.89008 8.49058 4.06718 8.18382L4.72884 7.03779C4.90595 6.73103 4.92645 6.35828 4.78404 6.03395C4.58529 5.5813 4.70897 5.0518 5.08768 4.73404L6.04495 3.93079C6.42365 3.61302 6.96658 3.58317 7.37784 3.8575C7.67251 4.05406 8.04316 4.0986 8.37602 3.97745L9.61953 3.52485C9.95239 3.4037 10.2077 3.13133 10.3071 2.79134Z" stroke="#F5F1FA" strokeWidth="2"/>
				<circle cx="12" cy="12" r="5.22168" stroke="#F5F1FA" strokeWidth="2"/>
			</svg>
        </button>

        {/* Settings panel */}
        {settingsOpen && (
          <div
            className="absolute top-full mt-2 right-0 w-64 bg-black/90 backdrop-blur-md rounded-2xl p-4 flex flex-col gap-4 shadow-xl"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            <section className="flex flex-col gap-2">
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Frame</p>
              <NumInput label="Duration (s)" value={cfg.frameDuration} onChange={set("frameDuration")} />
              <NumInput label="Delay (s)" value={cfg.frameDelay} onChange={set("frameDelay")} />
              <NumInput label="Auto-play (s)" value={cfg.autoPlayDelay} onChange={set("autoPlayDelay")} />
            </section>

            <div className="h-px bg-white/10" />

            <section className="flex flex-col gap-2">
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Sidebars</p>
              <NumInput label="Duration (s)" value={cfg.sidebarDuration} onChange={set("sidebarDuration")} />
              <NumInput label="Left delay (s)" value={cfg.leftDelay} onChange={set("leftDelay")} />
              <NumInput label="Right delay (s)" value={cfg.rightDelay} onChange={set("rightDelay")} />
            </section>

            <div className="h-px bg-white/10" />

            <section className="flex flex-col gap-2">
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Layout</p>
              <NumInput label="Target W (px)" value={cfg.targetW} onChange={set("targetW")} />
              <NumInput label="Target H (px)" value={cfg.targetH} onChange={set("targetH")} />
              <NumInput label="Sidebar W (px)" value={cfg.sidebarW} onChange={set("sidebarW")} />
              <NumInput label="Content W ratio" value={cfg.contentWRatio} onChange={set("contentWRatio")} />
              <NumInput label="Content H ratio" value={cfg.contentHRatio} onChange={set("contentHRatio")} />
            </section>

            <button
              onClick={() => setCfg(DEFAULTS)}
              className="text-white/30 hover:text-white/60 text-[10px] uppercase tracking-widest transition-colors text-left"
            >
              Reset to defaults
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
