import ChatWidget from "./components/ChatWidget";

const img3DPopcorn = "/popcorn-3d.png";
const imgN = "/logo-n.svg";
const imgR = "/logo-r.svg";
const imgO = "/logo-o.svg";
const imgC = "/logo-c.svg";
const imgP = "/logo-p.svg";
const imgP1 = "/logo-p-upper.svg";

export default function Home() {
  return (
    <div className="bg-[#fefabb] min-h-screen relative overflow-hidden">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-11 py-5 z-10">
        {/* Logo — individual letters with rotations */}
        <div
          className="h-12.5 overflow-clip relative shrink-0"
          style={{ width: "133.333px" }}
        >
          <img alt="P" className="block size-full" src="/popcorn-logo.svg" />
        </div>

        {/* Nav buttons */}
        <div className="flex gap-5 items-center">
          <button
            className="border border-black px-5 py-2.5 rounded-full text-sm text-black font-medium"
            style={{ fontFamily: "var(--font-albert-sans)" }}
          >
            Log in
          </button>
          <button
            className="bg-black text-[#ffffee] px-5 py-2.5 rounded-[10px] text-sm font-medium"
            style={{ fontFamily: "var(--font-albert-sans)" }}
          >
            Book a demo
          </button>
        </div>
      </nav>

      {/* Hero — centered vertically and horizontally */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-14 px-16 max-w-[1728px] w-full">
          {/* Text + CTA */}
          <div className="flex flex-col items-center gap-8">
            {/* 3D Popcorn image */}
            <img
              alt="Popcorn"
              className="max-w-none size-50"
              src={img3DPopcorn}
            />

            <h1
              className="text-[104px] leading-[0.9] text-center tracking-[-8.32px] text-black"
              style={{ fontFamily: "var(--font-alike-angular)" }}
            >
              Popcorn is Your App Chat
            </h1>

            <p
              className="text-[20px] leading-[1.3] text-center font-semibold text-black max-w-[760px]"
              style={{ fontFamily: "var(--font-albert-sans)" }}
            >
              Team chat where every conversation contains an app. Talk about
              what you see, point at what matters, and watch it change, live.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-2.5">
            <button
              className="bg-black text-white px-[30px] py-[20px] rounded-[20px] text-[18px] font-medium tracking-[0.18px]"
              style={{ fontFamily: "var(--font-albert-sans)" }}
            >
              Sign Up
            </button>
            <p
              className="text-[14px] leading-[1.1] tracking-[0.28px] opacity-70 text-black text-center"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              44 SPOTS AVAILABLE
            </p>
          </div>
        </div>
      </div>

      {/* <ChatWidget /> */}
    </div>
  );
}
