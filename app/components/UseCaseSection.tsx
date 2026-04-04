"use client";

import Image from "next/image";

export default function UseCaseSection() {
  return (
    <section id="usecase-section" className="pt-40 pb-20 px-8 flex justify-center">
      <div
        id="usecase-card"
        className="relative w-full max-w-[1436px] rounded-[10px] border-2 border-black bg-[#FFFFEE] flex"
        style={{ boxShadow: "10px 10px 0px black", minHeight: "693px" }}
      >
        {/* Left: copy */}
        <div className="flex flex-col justify-center gap-7 px-16 py-16 w-[520px] shrink-0">
          <p
            className="text-[12px] uppercase text-black"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            It&apos;s that simple
          </p>

          <h2
            className="text-[55px] leading-[0.9] tracking-[-2px] text-black"
            style={{ fontFamily: "var(--font-alike-angular)" }}
          >
            Iterate on your prototypes together
          </h2>

          <p
            className="text-[14px] leading-[1.3] font-medium text-black/75"
            style={{ fontFamily: "var(--font-albert-sans)" }}
          >
            Drop in a prototype link with /pop. Popcorn spins up a channel
            around it instantly. Your team can jump in and give feedback through
            chat or out loud through voice. Everyone contributes to the next
            version together, all without leaving the conversation.
          </p>
        </div>

        {/* Character — z-10, positioned relative to card */}
        <Image
          src="/thumbsup.png"
          alt=""
          className="absolute w-36 z-10"
          width={144}
          height={144}
          style={{ top: "104px", left: "425px" }}
        />

        {/* Right: video — z-20 so it sits in front of character */}
        <div className="flex-1 m-6 ml-0 rounded-[8px] bg-gray-50 border border-gray-200 flex items-center justify-center z-20 relative">
          <p
            className="text-[11px] uppercase tracking-widest text-black/30"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Video
          </p>
        </div>
      </div>
    </section>
  );
}
