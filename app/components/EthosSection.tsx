"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function EthosSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);


  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!card || !content || !section || !sticky) return;

    const onScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const vh = window.innerHeight;

      // Animate from when use-case section is halfway scrolled to when ethos hits viewport top
      const useCase = document.getElementById("usecase-section");
      const ucHeight = useCase ? useCase.offsetHeight : 800;
      const animStart = ucHeight * 0.5;
      const animEnd = vh * 0.2; // ethos section top reaches viewport top
      const raw = (animStart - sectionTop) / (animStart - animEnd);
      const progress = Math.max(0, Math.min(1, raw)); // removed easeOutCubic for now

      const vw = window.innerWidth;

      const finalW = vw * 0.3;
      const finalH = finalW * (9 / 16);
      const finalLeft = vw * 0.055;
      const finalTop = animEnd + content.offsetTop + 80;

      const w = lerp(vw, finalW, progress);
      const h = lerp(vh, finalH, progress);
      const left = lerp(0, finalLeft, progress);
      const top = lerp(0, finalTop, progress);
      const radius = lerp(0, 10, progress);
      const shadow = lerp(0, 10, progress);

      card.style.width = `${w}px`;
      card.style.height = `${h}px`;
      card.style.borderRadius = `${radius}px`;
      card.style.boxShadow = progress > 0.05 ? `${shadow}px ${shadow}px 0px black` : "none";
      card.style.borderWidth = `${lerp(0, 2, progress)}px`;

      // Two phases:
      // 1. Animating (progress < 1): lerp position, card is fixed
      // 2. Landed (progress >= 1): scroll with the page
      card.style.position = "fixed";
      if (progress < 1) {
        card.style.left = `${left}px`;
        card.style.top = `${top}px`;
      } else {
        card.style.left = `${finalLeft}px`;
        card.style.top = `${finalTop + (sectionTop - animEnd)}px`;
      }

      content.style.opacity = String(Math.max(0, (progress - 0.55) / 0.45));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const span = spanRef.current;
    const canvas = canvasRef.current;
    if (!span || !canvas) return;

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      life: number; maxLife: number;
      size: number; rotation: number; rotSpeed: number;
      color: string;
    };

    // --- Sparkle controls ---
    const COLORS = ["#ffffff", "#FFD700"];
    const SPEED_MIN = 0.4;        // minimum launch speed
    const SPEED_MAX = 1;        // added on top of SPEED_MIN (random)
    const SIZE_MIN = 6;         // minimum star size in px
    const SIZE_MAX = 8;         // added on top of SIZE_MIN (random)
    const LIFE_MIN = 1.6;       // minimum lifetime (arbitrary units)
    const LIFE_MAX = 0.6;       // added on top of LIFE_MIN (random)
    const DECAY = 0.02;         // life lost per frame (higher = faster fade/shrink)
    const SPAWN_BURST = 10;     // particles on initial hover
    const SPAWN_CONTINUOUS = 1; // particles per frame while hovering
    const SPREAD_X = 1.1;       // horizontal spawn spread as fraction of word width
    const SPREAD_Y = 0.9;       // vertical spawn spread as fraction of word height
    const ANGLE_VARIANCE = 0.3; // radians of random jitter added to outward direction
    // ------------------------

    const particles: Particle[] = [];
    let rafId: number;
    let running = false;
    let mouseX = 0;
    let mouseY = 0;

    const spawnParticles = (count: number) => {
      const rect = span.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2 - canvasRect.left;
      const cy = rect.top + rect.height / 2 - canvasRect.top;
      for (let i = 0; i < count; i++) {
        const speed = SPEED_MIN + Math.random() * SPEED_MAX;
        const sx = cx + (Math.random() - 0.5) * rect.width * SPREAD_X;
        const sy = cy + (Math.random() - 0.5) * rect.height * SPREAD_Y;
        const baseAngle = Math.atan2(sy - mouseY, sx - mouseX);
        const angle = baseAngle + (Math.random() - 0.5) * 2 * ANGLE_VARIANCE;
        particles.push({
          x: sx,
          y: sy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: LIFE_MIN + Math.random() * LIFE_MAX,
          size: SIZE_MIN + Math.random() * SIZE_MAX,
          rotation: 0,
          rotSpeed: 0,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    // Draw a 4-pointed star
    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rot: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const r = i % 2 === 0 ? size : size * 0.4;
        const a = (Math.PI / 4) * i;
        i === 0 ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const tick = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= DECAY / p.maxLife;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.globalAlpha = 1;
        ctx.fillStyle = p.color;
        drawStar(ctx, p.x, p.y, p.size * p.life, p.rotation);
      }
      ctx.globalAlpha = 1;

      if (running) spawnParticles(SPAWN_CONTINUOUS);
      if (particles.length > 0 || running) rafId = requestAnimationFrame(tick);
    };

    const isSectionFullyVisible = () => {
      const content = contentRef.current;
      if (!content) return false;
      return parseFloat(content.style.opacity) >= 0.99;
    };

    const onEnter = () => {
      if (!isSectionFullyVisible()) return;
      running = true;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      spawnParticles(SPAWN_BURST);
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tick);
    };

    const onLeave = () => { running = false; };

    const onMouseMove = (e: MouseEvent) => {
      const canvasRect = canvas.getBoundingClientRect();
      mouseX = e.clientX - canvasRect.left;
      mouseY = e.clientY - canvasRect.top;
    };

    span.addEventListener("mouseenter", onEnter);
    span.addEventListener("mouseleave", onLeave);
    span.addEventListener("mousemove", onMouseMove);
    return () => {
      span.removeEventListener("mouseenter", onEnter);
      span.removeEventListener("mouseleave", onLeave);
      span.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
    >
      <div ref={stickyRef} className="z-[4]">
        {/* Shrinking hero card — starts full-screen, lands as small left card */}
        <div
          ref={cardRef}
          className="fixed border-black border-solid overflow-hidden z-5"
          style={{
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            borderRadius: 0,
            borderWidth: 0,
            borderStyle: "solid",
          }}
        >
          <Image
            src="/background.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Right column text — fades in as card lands */}
        <div
          ref={contentRef}
          className="relative flex flex-col z-6 p-20 pl-[40%]"
        >
          <p
            className="text-[45px] leading-[1.05] tracking-[-1px] text-black"
            style={{ fontFamily: "var(--font-alike-angular)" }}
          >
            The way we build has changed completely. Teams are shipping
            prototypes in hours and iterating with AI. Your team is spending
            less time in design tools and more time in code. Give them a space
            to come together around what they&apos;re building.
          </p>

          <p
            className="mt-8 text-[45px] leading-[1.05] tracking-[-1px] text-black"
            style={{ fontFamily: "var(--font-alike-angular)" }}
          >
            It&apos;s a new dawn for team communication.
          </p>

          <p
            className="mt-8 text-[45px] leading-[1.05] tracking-[-1px] text-black"
            style={{ fontFamily: "var(--font-alike-angular)" }}
          >
            We call it the{" "}
            <span ref={spanRef} className="text-[#FF5555] cursor-default">product playground</span>.
          </p>
        </div>
      </div>

      {/* Full-viewport canvas for sparkle particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-6"
        style={{ width: "100vw", height: "100vh" }}
      />
    </section>
  );
}
