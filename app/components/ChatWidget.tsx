export default function ChatWidget() {
  return (
    <div
      className="absolute w-[343px] rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col gap-0.5"
      style={{
        left: "calc(50% + 207.5px)",
        top: "calc(50% - 272.5px)",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Thread header */}
      <div className="bg-white p-3 rounded-sm">
        <p
          className="text-[12px] leading-[1.1] text-black/50 font-semibold"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          NEW CHAT THREAD
        </p>
      </div>

      {/* Messages */}
      <div className="bg-white p-3 flex flex-col gap-4 rounded-sm">
        {/* Brina Lee */}
        <div className="flex gap-2 items-start">
          <div
            className="h-[25.749px] w-[26.039px] rounded-full shrink-0 relative"
            style={{ backgroundColor: "#ff699b" }}
          >
            <span
              className="absolute mix-blend-overlay text-[13.824px] leading-[1.1] text-black"
              style={{
                fontFamily: "var(--font-questrial)",
                left: "calc(50% - 5.02px)",
                top: "calc(50% - 7.87px)",
              }}
            >
              B
            </span>
          </div>
          <div className="flex flex-col gap-1 flex-1 text-[#212121]">
            <p
              className="text-[14px] leading-[1.1] font-medium whitespace-nowrap"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Brina Lee
            </p>
            <p
              className="text-[15px] leading-[1.2] tracking-[-0.15px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              this is awesome! make the logo spin in 3d space, and use our
              typography
            </p>
            <p
              className="text-[15px] leading-[1.2] tracking-[-0.15px] opacity-50 italic"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              ✓ Popcorn updated.
            </p>
          </div>
        </div>

        {/* Ben Garrett */}
        <div className="flex gap-2 items-start">
          <div
            className="h-[25.749px] w-[26.039px] rounded-full shrink-0 relative"
            style={{ backgroundColor: "#faad00" }}
          >
            <span
              className="absolute mix-blend-overlay text-[13.824px] leading-[1.1] text-black"
              style={{
                fontFamily: "var(--font-questrial)",
                left: "calc(50% - 5.02px)",
                top: "calc(50% - 7.87px)",
              }}
            >
              B
            </span>
          </div>
          <div className="flex flex-col gap-1 flex-1 text-[#212121]">
            <p
              className="text-[14px] leading-[1.1] font-medium whitespace-nowrap"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Ben Garrett
            </p>
            <p
              className="text-[15px] leading-[1.2] tracking-[-0.15px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              oh this is good. but it&apos;s feeling a little empty. i want the
              background to feel like i&apos;m floating in a pool of butter
            </p>
            <p
              className="text-[15px] leading-[1.2] tracking-[-0.15px] opacity-50 italic"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              → Popcorn is generating gooey vibes...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
