const SIDEBAR_W = 260; // logical px within TARGET_W

const messages = [
  {
    name: "Brina Lee",
    avatarColor: "#ff699b",
    initial: "B",
    body: "this is awesome! make the logo spin in 3d space, and use our typography",
    status: "✓ Popcorn updated.",
  },
  {
    name: "Ben Garrett",
    avatarColor: "#faad00",
    initial: "B",
    body: "oh this is good. but it's feeling a little empty. i want the background to feel like i'm floating in a pool of butter",
    status: "→ Popcorn is generating gooey vibes...",
  },
];

export default function ChatSidebar({ open }: { open: boolean }) {
  return (
    // placeholder, keeps space for sidebar reveal
    <div
      className="overflow-hidden"
      style={{
        width: open ? `${SIDEBAR_W}px` : "0px",
        // transition: aspect duration easing delay [, multiple]
        transition: "width 0.7s ease-in-out 0s",
      }}
    >
      {/* The real channel sidebar content */}
      <div
        className="bg-white absolute top-0 bottom-0 -z-40"
        style={{
          width: `${SIDEBAR_W + 1}px`,
          right: open ? "0px" : `${SIDEBAR_W}px`,
          transition: "right 0.6s ease-in-out 1s",
        }}
      >
        {/* Thread header */}
        <div className="px-3 py-3 border-b border-black/8 shrink-0">
          <p
            className="text-[11px] font-semibold text-black/40"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            NEW CHAT THREAD
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-4">
          {messages.map((msg) => (
            <div key={msg.name} className="flex gap-2 items-start">
              <div
                className="h-6.5 w-6.5 rounded-full shrink-0 relative"
                style={{ backgroundColor: msg.avatarColor }}
              >
                <span
                  className="absolute mix-blend-overlay text-[14px] leading-none text-black"
                  style={{
                    fontFamily: "var(--font-questrial)",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {msg.initial}
                </span>
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0 text-[#212121]">
                <p
                  className="text-[13px] leading-[1.1] font-medium whitespace-nowrap"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {msg.name}
                </p>
                <p
                  className="text-[13px] leading-[1.3]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {msg.body}
                </p>
                <p
                  className="text-[13px] leading-[1.3] opacity-50 italic"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {msg.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="shrink-0 px-3 py-3 border-t border-black/8">
          <div className="flex items-center gap-2 bg-black/5 rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Message…"
              readOnly
              className="flex-1 bg-transparent text-[13px] text-black/40 placeholder:text-black/30 outline-none min-w-0"
              style={{ fontFamily: "var(--font-inter)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
