"use client";



const SYSTEM_FONT =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

// minutesAgo: offset from "now" (Popcorn's message = 0 = current time)
const MESSAGE_DEFS = [
  {
    id: "root",
    name: "Brina Lee",
    avatarColor: "#e8490f",
    avatarColor2: "#f5a623",
    initial: "B",
    minutesAgo: 2,
    body: (
      <> hey everyone, here is the landing page we've been working on </>
    ),
    status: null as string | null,
    isRoot: true,
    reactions: undefined as string[] | undefined,
    isAgent: false,
  },
  {
    id: "r1",
    name: "Ben Garrett",
    avatarColor: "#faad00",
    avatarColor2: "#f5821f",
    initial: "B",
    minutesAgo: 1,
    body: (
      <>oh this is good! but it&apos;s feeling a little empty. i want the background to feel like i&apos;m floating in a pool of butter</>
    ),
    status: null as string | null,
    isRoot: false,
    reactions: ["👀"],
    isAgent: false,
  },
  {
    id: "r2",
    name: "Popcorn",
    isAgent: true,
    avatarColor: "#f26522",
    avatarColor2: "#f5a623",
    initial: "P",
    minutesAgo: 0,
    body: (
      <>Updated the page for more buttery vibes with a shader background.</>
    ),
    status: null as string | null,
    isRoot: false,
    reactions: undefined as string[] | undefined,
  },
];

function Avatar({ color, color2, initial }: { color: string; color2: string; initial: string }) {
  return (
    <div
      className="w-6 h-6 rounded-sm shrink-0 flex items-center justify-center text-white/70 text-[10px] font-bold"
      style={{
        background: `linear-gradient(135deg, ${color2}, ${color})`,
        fontFamily: SYSTEM_FONT,
      }}
    >
      {initial}
    </div>
  );
}

export default function ChatSidebar({ open, width, transition }: { open: boolean, width: number, transition: string }) {
  const now = new Date();
  const messages = MESSAGE_DEFS.map((m) => {
    const t = new Date(now.getTime() - m.minutesAgo * 60_000);
    return { ...m, time: formatTime(t) };
  });

  return (
      <div
        className="bg-white absolute top-0 bottom-0 flex flex-col -z-40"
        style={{
          width: `${width+50}px`,
          paddingLeft: "50px",
          right: open ? "0px" : `${width}px`,
          transition,
          fontFamily: SYSTEM_FONT,
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-black/8 shrink-0">
          <span className="text-[15px] font-bold text-black">Thread</span>
          {/* <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-black/6 transition-colors text-black/40 hover:text-black/70">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button> */}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto py-3 flex flex-col gap-2">
          {messages.map((msg, i) => (
            <div key={msg.id}>
              {/* Replies divider after root message */}
              {i === 1 && (
                <div className="flex items-center gap-2 px-4 py-2 my-1">
                  <div className="h-px flex-1 bg-black/8" />
                  <span className="text-[12px] text-black/40 whitespace-nowrap">
                    {messages.length - 1} replies · {new Set(messages.map(m => m.name)).size} participants
                  </span>
                  <div className="h-px flex-1 bg-black/8" />
                </div>
              )}

              <div className="flex gap-2 items-start px-2 py-1 hover:bg-black/2 group">
                <Avatar color={msg.avatarColor} color2={msg.avatarColor2} initial={msg.initial} />
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  {/* Name + agent badge + time */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[14px] font-semibold text-black leading-tight">{msg.name}</span>
                    {msg.isAgent && (
                      <span className="text-[10px] font-semibold text-black/40 bg-black/5 rounded px-1 py-px leading-tight tracking-wide">
                        AGENT
                      </span>
                    )}
                    <span className="text-[12px] text-black/35">{msg.time}</span>
                  </div>
                  {/* Body */}
                  <p className="text-[14px] leading-[1.45] text-[#1d1c1d]">{msg.body}</p>
                  {/* Status */}
                  {msg.status && (
                    <p className="text-[12px] text-black/40 italic">{msg.status}</p>
                  )}
                  {/* Reactions */}
                  {msg.reactions && (
                    <div className="flex gap-1 mt-0.5">
                      {msg.reactions.map((r) => (
                        <span key={r} className="text-[13px] bg-black/5 rounded-full px-2 py-0.5 cursor-pointer hover:bg-black/10 transition-colors">
                          {r}
                        </span>
                      ))}
                      <button className="text-black/25 hover:text-black/50 transition-colors px-1">
                        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.25" />
                          <path d="M5.5 9.5s.8 1 2.5 1 2.5-1 2.5-1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                          <circle cx="6" cy="7" r=".75" fill="currentColor" />
                          <circle cx="10" cy="7" r=".75" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reply input */}
        <div className="shrink-0 px-3 py-3 border-t border-black/8">
          <div className="flex items-center gap-2 border border-black/12 rounded-xl px-3 py-2.5">
            <button className="text-black/35 hover:text-black/60 transition-colors shrink-0">
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Reply in thread..."
              readOnly
              className="flex-1 bg-transparent text-[13px] text-black/35 placeholder:text-black/35 outline-none min-w-0"
              style={{ fontFamily: SYSTEM_FONT }}
            />
            <button className="w-7 h-7 bg-black/8 rounded-lg flex items-center justify-center shrink-0 hover:bg-black/15 transition-colors">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-black/40">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  );
}
