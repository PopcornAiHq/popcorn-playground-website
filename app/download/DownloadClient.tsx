"use client";

import Image from "next/image";
import { useMemo } from "react";
import type { Platform } from "./page";
import PageFooter from "../components/PageFooter";
import SubpageNav from "../components/SubpageNav";

const LINKS = {
  mac: "#",
  ios: "#",
};

type DownloadOption = {
  id: string;
  label: string;
  href: string | null;
  icon: string;
  available: boolean;
};

function getPrimaryCTA(platform: Platform): { label: string; href: string | null; available: boolean } {
  switch (platform) {
    case "ios":
      return { label: "Get Beta", href: LINKS.ios, available: true };
    case "mac":
    default:
      return { label: "Get Beta", href: LINKS.mac, available: true };
  }
}

const allDownloads: DownloadOption[] = [
  { id: "mac", label: "macOS", href: LINKS.mac, icon: "apple", available: true },
  { id: "ios", label: "iOS", href: LINKS.ios, icon: "apple", available: true },
  { id: "windows", label: "Windows", href: null, icon: "windows", available: false },
  { id: "android", label: "Android", href: null, icon: "android", available: false },
  { id: "web", label: "Web app", href: null, icon: "web", available: false },
];

export default function DownloadClient({ platform }: { platform: Platform }) {
  const primary = useMemo(() => getPrimaryCTA(platform), [platform]);

  return (
    <main className="relative min-h-screen bg-[#FFFDF8] text-[#1a1a1a]">
      <SubpageNav />

      <section className="max-w-[1200px] mx-auto px-10 pt-20 pb-20">
        <div className="text-center">
          <div className="mx-auto mb-12 flex justify-center">
            <Image src="/assets/app-logo.png" alt="Popcorn App" width={160} height={160} className="rounded-3xl" />
          </div>

          <h1
            className="text-[56px] leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-synt)" }}
          >
            Download Popcorn
          </h1>
          <p
            className="mt-6 text-[20px] leading-relaxed text-[#1a1a1a]/60"
            style={{ fontFamily: "var(--font-albert-sans)" }}
          >
            Available for macOS and iOS. More platforms coming soon.
          </p>

          {primary.available && primary.href && (
            <div className="mt-10">
              <a
                href={primary.href}
                className="inline-flex items-center justify-center gap-3 rounded-[24px] border-[4px] border-[#5CE0D8] bg-[#1a3de8] px-12 py-5 text-[22px] font-semibold text-white hover:bg-[#1533c4] active:scale-95 transition-all shadow-lg"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                <span>{primary.label}</span>
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7H17V17" />
                </svg>
              </a>
            </div>
          )}

          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {allDownloads.map((d) => (
              <DownloadButton
                key={d.id}
                icon={d.icon}
                label={d.label}
                href={d.href}
                available={d.available}
              />
            ))}
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}

function DownloadButton({
  icon,
  label,
  href,
  available,
}: {
  icon: string;
  label: string;
  href: string | null;
  available: boolean;
}) {
  if (!available) {
    return (
      <span
        className="inline-flex items-center gap-2 px-5 py-3 rounded-[14px] bg-[#1a1a1a]/5 text-[#1a1a1a]/30 text-[15px] font-medium border-2 border-transparent cursor-default"
        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
      >
        <PlatformIcon icon={icon} disabled />
        <span>{label}</span>
        <span className="text-[11px] uppercase tracking-wider ml-1">Soon</span>
      </span>
    );
  }

  return (
    <a
      href={href!}
      className="inline-flex items-center gap-2 px-5 py-3 rounded-[14px] bg-black text-white text-[15px] font-medium hover:bg-neutral-800 active:scale-95 transition-all border-2 border-black"
      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
    >
      <PlatformIcon icon={icon} />
      <span>Download for {label}</span>
    </a>
  );
}

function PlatformIcon({ icon, disabled }: { icon: string; disabled?: boolean }) {
  const iconClass = disabled ? "w-5 h-5 text-[#1a1a1a]/30" : "w-5 h-5 text-white";

  switch (icon) {
    case "apple":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      );
    case "windows":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z" />
        </svg>
      );
    case "android":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 003 18h18a10.78 10.78 0 00-3.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
        </svg>
      );
    case "web":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      );
    default:
      return null;
  }
}
