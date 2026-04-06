import Image from "next/image";

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-11 py-5 z-10">
      {/* Logo */}
      <div
        className="h-12.5 overflow-clip relative shrink-0"
        style={{ width: "133.333px" }}
      >
        <Image alt="P" className="block size-full" src="/popcorn-logo.svg" width={133} height={50} unoptimized />
      </div>

      {/* Nav buttons */}
      <div className="flex gap-5 items-center">
        <button
          className="border border-black px-5 py-2.5 rounded-full text-sm text-black font-medium hover:bg-black hover:text-white active:scale-95 transition-all cursor-pointer"
          style={{ fontFamily: "var(--font-albert-sans)" }}
        >
          Log in
        </button>
        <button
          className="bg-black text-[#ffffee] px-5 py-2.5 rounded-[10px] text-sm font-medium hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer"
          style={{ fontFamily: "var(--font-albert-sans)" }}
        >
          Book a demo
        </button>
      </div>
    </nav>
  );
}
