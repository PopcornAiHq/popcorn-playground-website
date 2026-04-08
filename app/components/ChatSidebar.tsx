"use client";

const SYSTEM_FONT =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

const MESSAGE_DEFS = [
  {
    id: "m1",
    name: "Brina Lee",
    avatarGradient: "linear-gradient(135deg, #FF0C51, #F69224, #EFFF00)",
    initial: "B",
    minutesAgo: 5,
    body: "Hey all! New landing page incoming. Check it out and let me know what you think!",
    reactions: undefined as string[] | undefined,
    isAgent: false,
  },
  {
    id: "m2",
    name: "Ben Garrett",
    avatarGradient: "linear-gradient(135deg, #D1FF03, #EAC501, #FF9804)",
    initial: "B",
    minutesAgo: 3,
    body: "This is great! Excited for this new landing page. It feels a little empty, make the background feel like a floating pool of buttttter....",
    reactions: ["👀"],
    isAgent: false,
  },
  {
    id: "m3",
    name: "Brina Lee",
    avatarGradient: "linear-gradient(135deg, #FF0C51, #F69224, #EFFF00)",
    initial: "B",
    minutesAgo: 2,
    body: "/update",
    reactions: undefined as string[] | undefined,
    isAgent: false,
  },
  {
    id: "m4",
    name: "Popcorn",
    isAgent: true,
    avatarGradient: "linear-gradient(135deg, #F69224, #FF0C51)",
    initial: "P",
    minutesAgo: 1,
    body: "Done! ✅ Floating pool of butter for buttery vibes and some fun shader tech.",
    reactions: undefined as string[] | undefined,
  },
];

function MessageAvatar({ gradient, initial, size = 34 }: { gradient: string; initial: string; size?: number }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center text-white font-bold"
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        background: gradient,
        fontSize: size * 0.38,
        fontFamily: SYSTEM_FONT,
      }}
    >
      {initial}
    </div>
  );
}

export default function ChatSidebar({ open, width, transition }: { open: boolean; width: number; transition: string }) {
  const now = new Date();
  const messages = MESSAGE_DEFS.map((m) => {
    const t = new Date(now.getTime() - m.minutesAgo * 60_000);
    return { ...m, time: formatTime(t) };
  });

  return (
    <div
      className="bg-[#FCFAF6] absolute top-0 bottom-0 flex flex-col -z-40 border-l-[3px] border-black rounded-r-[10px] overflow-hidden"
      style={{
        width: `${width + 50}px`,
        paddingLeft: "50px",
        right: open ? "0px" : `${width}px`,
        transition,
        fontFamily: SYSTEM_FONT,
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 border-b shrink-0"
        style={{ height: 60, minHeight: 60, borderColor: "#E6E0D6" }}
      >
        <h3 className="text-[14px] font-semibold text-[#3B3B3C]">Landing page</h3>
        <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-black/5 transition-colors text-[#79747E] hover:text-[#3B3B3C]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto flex flex-col">
        {messages.map((msg) => (
          <div key={msg.id} className="flex gap-3 px-4 pt-2 pb-1 hover:bg-[#e5e7eb]/50 group">
            <MessageAvatar gradient={msg.avatarGradient} initial={msg.initial} />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-2">
                <span
                  className="text-[14px] text-[#3B3B3C] shrink-0"
                  style={{ fontWeight: msg.isAgent ? 600 : 700 }}
                >
                  {msg.name}
                </span>
                {msg.isAgent && (
                  <span className="text-[10px] font-bold text-[#909090] bg-[#909090]/10 px-1 py-0.5 rounded">
                    AGENT
                  </span>
                )}
                <span className="text-[12px] text-[#79747E] whitespace-nowrap">{msg.time}</span>
              </div>
              <p className="text-[14px] leading-[1.5] text-[#3B3B3C] mt-0.5">{msg.body}</p>

              {/* Reactions */}
              {msg.reactions && (
                <div className="flex gap-1 mt-1">
                  {msg.reactions.map((r) => (
                    <span key={r} className="text-[13px] bg-black/5 rounded-full px-2 py-0.5 cursor-pointer hover:bg-black/10 transition-colors">
                      {r}
                    </span>
                  ))}
                  <button className="text-[#79747E] hover:text-[#3B3B3C] transition-colors px-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
                      <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <div className="shrink-0 border-t" style={{ borderColor: "#E6E0D6" }}>
        <div className="flex flex-col bg-white focus-within:bg-[#00B86E]/5 transition-colors" style={{ minHeight: 100 }}>
          {/* Editor area */}
          <div className="flex-1 px-3 pt-3">
            <p className="text-[13px] text-[#79747E]">Message #landing-page</p>
          </div>
          {/* Actions bar */}
          <div className="flex items-center justify-between px-3 pb-3">
            {/* Plus menu */}
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#79747E] hover:bg-black/5 hover:text-[#3B3B3C] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            {/* Send button */}
            <button className="h-10 px-3.5 rounded-[14px] flex items-center justify-center gap-1.5 text-[13px] font-medium text-[#909090] hover:text-[#3B3B3C] hover:bg-[#00B86E]/10 transition-all">
              Send
              <kbd className="text-[15px] opacity-50">↵</kbd>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
