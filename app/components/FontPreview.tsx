"use client";

import { useState } from "react";

const FONTS = [
  { name: "Synt (current)", variable: "var(--font-synt)" },
  { name: "DM Serif Display", variable: "var(--font-dm-serif-display)" },
  { name: "Libre Baskerville", variable: "var(--font-libre-baskerville)" },
  { name: "Source Serif 4", variable: "var(--font-source-serif-4)" },
  { name: "Lora", variable: "var(--font-lora)" },
  { name: "Petrona", variable: "var(--font-petrona)" },
  { name: "Fraunces", variable: "var(--font-fraunces)" },
  { name: "Instrument Serif", variable: "var(--font-instrument-serif)" },
  { name: "Playfair Display", variable: "var(--font-playfair-display)" },
];

export default function FontPreview() {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1.5 rounded-full cursor-pointer z-10"
      >
        {open ? "Hide Fonts" : "Show Fonts"}
      </button>

      {open && (
        <div className="bg-white/95 backdrop-blur border-b border-gray-200 max-h-[70vh] overflow-y-auto px-8 py-6">
          <div className="space-y-6">
            {FONTS.map((font) => (
              <div key={font.name} className="border-b border-gray-100 pb-4 last:border-0">
                <p className="text-xs text-gray-400 mb-1 font-mono">{font.name}</p>
                <h2
                  className="text-[48px] leading-[1.0] tracking-[-1.5px] text-black"
                  style={{ fontFamily: font.variable }}
                >
                  Fastest prototype playground<br />for product teams
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
