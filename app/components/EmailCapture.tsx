"use client";

import { useState, useRef } from "react";

export default function EmailCapture({ variant = "hero", scrolled = false }: { variant?: "hero" | "nav" | "nav-expand"; scrolled?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(true);
    setTimeout(() => inputRef.current?.focus(), 300);
  };

  const handleMouseLeave = () => {
    if (status === "submitting") return;
    timeoutRef.current = setTimeout(() => {
      if (!email.trim()) {
        setHovered(false);
        setStatus("idle");
        setErrorMsg("");
      }
    }, 400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMsg("Please enter your email.");
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg("Please enter a valid email.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        const data = await res.json();
        if (res.status === 409) {
          setStatus("success");
          return;
        }
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  // Nav expand variant — button that reveals email field on hover
  if (variant === "nav-expand") {
    if (status === "success") {
      return (
        <span
          className="text-sm font-medium text-white px-4"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          You&apos;re in! ✓
        </span>
      );
    }

    return (
      <div className="relative">
        <form
          onSubmit={handleSubmit}
          noValidate
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center rounded-[20px] overflow-hidden transition-all duration-300 border-[3px] ${scrolled ? "border-white" : "border-transparent"} ${hovered ? "bg-white shadow-lg" : "shadow-md"}`}
          style={{ boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.4)" : undefined }}
        >
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ width: hovered ? "200px" : "0px", opacity: hovered ? 1 : 0 }}
          >
            <input
              ref={inputRef}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status === "error") { setStatus("idle"); setErrorMsg(""); } }}
              className="bg-transparent text-sm px-4 py-3.5 outline-none text-black placeholder:text-black/40 w-full"
              style={{ fontFamily: "var(--font-albert-sans)" }}
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-black text-white px-7 py-3.5 text-base font-medium hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer shrink-0 flex items-center gap-2"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            {status === "submitting" ? "Sending..." : "GET BETA"}
            {hovered && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7H17V17" />
              </svg>
            )}
          </button>
        </form>
        {status === "error" && errorMsg && (
          <div className="absolute left-0 top-full mt-2 z-50" style={{ fontFamily: "var(--font-albert-sans)" }}>
            <div className="w-2.5 h-2.5 bg-white rotate-45 absolute -top-1 left-8 z-10" />
            <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-[8px] shadow-lg relative z-10">
              <div className="w-4 h-4 rounded-[3px] bg-red-400 flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] font-bold">!</span>
              </div>
              <span className="text-[12px] text-black/80 whitespace-nowrap">{errorMsg}</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Nav variant (unused now but kept for reference)
  if (variant === "nav") {
    if (status === "success") {
      return (
        <span
          className="text-sm font-medium text-green-600 px-4"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          You&apos;re in! ✓
        </span>
      );
    }

    return (
      <form onSubmit={handleSubmit} noValidate className="flex items-center gap-0 bg-white/10 border border-white/20 rounded-[12px] overflow-hidden">
        <input
          type="email"
          placeholder="Work email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
          className="bg-transparent text-sm px-4 py-2.5 outline-none text-black placeholder:text-black/40 w-[160px]"
          style={{ fontFamily: "var(--font-albert-sans)" }}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-black text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          GET BETA
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7H17V17" />
          </svg>
        </button>
      </form>
    );
  }

  // Hero variant
  if (status === "success") {
    return (
      <div
        className="bg-white/80 backdrop-blur-sm px-12 py-5 rounded-[24px] text-[22px] font-semibold shadow-lg border-[4px] border-[#5CE0D8] text-center text-black"
        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
      >
        You&apos;re in! We&apos;ll be in touch ✓
      </div>
    );
  }

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex items-center gap-0 bg-white/80 backdrop-blur-sm rounded-[24px] shadow-lg border-[4px] border-[#5CE0D8] p-1"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === "error") { setStatus("idle"); setErrorMsg(""); } }}
          className="bg-transparent text-[18px] px-7 py-4 outline-none text-black placeholder:text-black/40 w-[320px]"
          style={{ fontFamily: "var(--font-albert-sans)" }}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-[#1a3de8] text-white px-8 py-4 text-[20px] font-semibold hover:bg-[#1533c4] active:scale-95 transition-all cursor-pointer rounded-[18px] flex items-center gap-2.5 shrink-0"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          {status === "submitting" ? "Sending..." : "GET BETA"}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7H17V17" />
          </svg>
        </button>
      </form>
      {status === "error" && errorMsg && (
        <div className="absolute left-[80px] top-full mt-2 z-50" style={{ fontFamily: "var(--font-albert-sans)" }}>
          <div className="w-3 h-3 bg-white rotate-45 absolute -top-1.5 left-6 z-10" />
          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-[10px] shadow-lg relative z-10">
            <div className="w-5 h-5 rounded-[4px] bg-red-400 flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <span className="text-[14px] text-black/80">{errorMsg}</span>
          </div>
        </div>
      )}
    </div>
  );
}
