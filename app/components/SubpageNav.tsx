"use client";

import Link from "next/link";
import Image from "next/image";
import EmailCapture from "./EmailCapture";

export default function SubpageNav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-11 py-5 bg-[#FFFDF8]/60 backdrop-blur-sm">
      <Link href="/">
        <div className="h-12.5 overflow-clip relative shrink-0" style={{ width: "133.333px" }}>
          <Image alt="Popcorn" src="/popcorn-logo.svg" width={133} height={50} className="block size-full" style={{ filter: "brightness(0)" }} />
        </div>
      </Link>
      <EmailCapture variant="nav-expand" />
    </nav>
  );
}
