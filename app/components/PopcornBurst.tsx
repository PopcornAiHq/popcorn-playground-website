"use client";

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useAnimationFrame } from "framer-motion";

type Particle = {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  src: string;
  opacity: number;
  scale: number;
  createdAt: number;
};

export type PopcornBurstHandle = {
  burst: (opts: { x: number; y: number; count?: number }) => void;
};

const IMAGES = [
  "/assets/popcorn-new.png",
  "/assets/popcorn-2.png",
  "/assets/popcorn-3.png",
];

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

const GRAVITY = 800;        // px/s^2
const RESTITUTION = 0.45;   // bounce energy
const FLOOR_PAD_DESKTOP = -40;  // px above viewport bottom for desktop (lg+)
const FLOOR_PAD_MOBILE = 20;    // px above viewport bottom for mobile/tablet
const FADE_START = 2200;    // ms
const FADE_DURATION = 1200; // ms
const MAX_LIFETIME = FADE_START + FADE_DURATION + 300;

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

export const PopcornBurst = forwardRef<PopcornBurstHandle>(function PopcornBurst(_, ref) {
  const [mounted, setMounted] = useState(false);
  const [, setRenderTick] = useState(0); // just to force re-render
  const particlesRef = useRef<Particle[]>([]);
  const lastTRef = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  useImperativeHandle(ref, () => ({
    burst: ({ x, y, count = 10 }) => {
      const now = performance.now();
      const next: Particle[] = [];

      for (let i = 0; i < count; i++) {
        // mostly upward cone
        const angle = rand(-Math.PI * 0.85, -Math.PI * 0.15);
        const speed = rand(240, 520);

        next.push({
          id: uid(),
          x,
          y,
          vx: Math.cos(angle) * speed + rand(-60, 60),
          vy: Math.sin(angle) * speed + rand(-80, 0),
          rotation: rand(0, 360),
          rotationSpeed: rand(-420, 420),
          src: IMAGES[(Math.random() * IMAGES.length) | 0],
          opacity: 1,
          scale: rand(0.45, 0.85),
          createdAt: now,
        });
      }

      particlesRef.current = [...particlesRef.current, ...next];
      setRenderTick((t) => t + 1);
    },
  }));

  useAnimationFrame((t) => {
    const lastT = lastTRef.current;
    lastTRef.current = t;
    if (lastT == null) return;

    const dt = Math.min(0.033, (t - lastT) / 1000);
    const now = performance.now();
    const floorPad = window.innerWidth >= 1024 ? FLOOR_PAD_DESKTOP : FLOOR_PAD_MOBILE;
    const floorY = window.innerHeight - floorPad;

    const updated: Particle[] = [];

    for (const p of particlesRef.current) {
      const age = now - p.createdAt;
      if (age > MAX_LIFETIME) continue;

      let vx = p.vx;
      let vy = p.vy + GRAVITY * dt;

      // mild drag
      vx *= 0.995;
      vy *= 0.999;

      let x = p.x + vx * dt;
      let y = p.y + vy * dt;

      // bounce bottom
      if (y >= floorY) {
        y = floorY;
        vy = -vy * RESTITUTION;
        vx *= 0.85;
        if (Math.abs(vy) < 40) vy = 0;
      }

      // fade
      let opacity = 1;
      if (age > FADE_START) {
        const k = (age - FADE_START) / FADE_DURATION;
        opacity = clamp(1 - k, 0, 1);
      }

      updated.push({
        ...p,
        x,
        y,
        vx,
        vy,
        rotation: p.rotation + p.rotationSpeed * dt,
        opacity,
      });
    }

    particlesRef.current = updated;
    if (updated.length) setRenderTick((v) => v + 1);
  });

  if (!mounted) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      aria-hidden
    >
      {particlesRef.current.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            transform: `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.rotation}deg) scale(${p.scale})`,
            transformOrigin: "center",
            opacity: p.opacity,
            willChange: "transform, opacity",
          }}
        >
          {/* IMPORTANT: <img>, not next/image, in portals */}
          <img
            src={p.src}
            alt=""
            draggable={false}
            style={{
              width: 120,
              height: 120,
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        </div>
      ))}
    </div>,
    document.body
  );
});
