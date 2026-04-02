"use client";

import { useEffect, useRef } from "react";

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
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const spot = spotRef.current;
    if (content && spot) {
      const onMouseMove = (e: MouseEvent) => {
        const rect = content.getBoundingClientRect();
        spot.style.transform = `translate(${e.clientX - rect.left}px, ${e.clientY - rect.top}px)`;
        spot.style.opacity = "1";
      };
      const onMouseLeave = () => { spot.style.opacity = "0"; };
      content.addEventListener("mousemove", onMouseMove);
      content.addEventListener("mouseleave", onMouseLeave);
      return () => {
        content.removeEventListener("mousemove", onMouseMove);
        content.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    const section = sectionRef.current;
    if (!card || !content || !section) return;

    const onScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const vh = window.innerHeight;

      // Start when the use case section has 5% of its height still visible at the top
      const useCase = document.getElementById("usecase-section");
      const ucHeight = useCase ? useCase.offsetHeight : 800;
      const animStart = ucHeight * 0.5;
      const animEnd = animStart - vh * 0.7;
      const raw = (animStart - sectionTop) / (animStart - animEnd);
      const progress = easeOutCubic(Math.max(0, Math.min(1, raw)));

      // Final card: 38vw wide, 30vh tall, sitting top-left with margin
      const vw = window.innerWidth;

      const finalW = vw * 0.3;
      const finalH = finalW * (9 / 16);
      const finalLeft = vw * 0.055;
      const finalTop = vh * 0.18;

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

      // Once animation is done, switch to absolute so it scrolls with the section
      if (progress >= 1) {
        card.style.position = "absolute";
        card.style.left = `${finalLeft}px`;
        card.style.top = `${finalTop}px`;
      } else {
        card.style.position = "fixed";
        card.style.left = `${left}px`;
        card.style.top = `${top}px`;
      }

      content.style.opacity = String(Math.max(0, (progress - 0.55) / 0.45));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FEFABB]"
      style={{ height: "105vh" }}
    >
      <div className="sticky top-0 overflow-hidden bg-[#FEFABB] z-[4] relative" style={{ height: "80vh" }}>
        {/* Shrinking hero card — starts full-screen, lands as small left card */}
        <div
          ref={cardRef}
          className="fixed border-black border-solid overflow-hidden z-[5]"
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
          <div
            className="w-full h-full"
            style={{ background: "url('/background.jpeg') center / cover no-repeat" }}
          />
        </div>

        {/* Right column text — fades in as card lands */}
        <div
          ref={contentRef}
          className="absolute h-full flex flex-col justify-start z-[6]"
          style={{ left: "40vw", right: "5.5vw", opacity: 0, top: "18vh", isolation: "isolate" }}
        >
          {/* Mouse-following red spotlight */}
          <div
            ref={spotRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "320px",
              height: "320px",
              marginLeft: "-160px",
              marginTop: "-160px",
              background: "radial-gradient(circle, rgba(255,85,85,0.95) 0%, transparent 68%)",
              mixBlendMode: "screen",
              pointerEvents: "none",
              opacity: 0,
              transition: "opacity 0.3s ease, transform 0.05s ease",
              borderRadius: "50%",
            }}
          />
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
            <span className="text-[#FF5555]">product playground</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
