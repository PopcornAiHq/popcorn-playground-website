const SIDEBAR_W = 260;

const SYSTEM_FONT =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

const channels = [
  { name: "welcome", unread: 0, active: false, muted: false },
  { name: "home-page", unread: 0, active: true, muted: false },
  { name: "release-notes", unread: 0, active: false, muted: false },
  { name: "dashboard", unread: 0, active: false, muted: false },
  { name: "architecture-diagram", unread: 0, active: false, muted: false },
  { name: "gtm-checklist", unread: 0, active: false, muted: false },
  { name: "in-the-news", unread: 0, active: false, muted: false },
];

export default function ChannelsSidebar({ open }: { open: boolean }) {
  return (
    <div
      className="overflow-hidden shrink-0"
      style={{
        width: open ? `${SIDEBAR_W}px` : "0px",
        transition: "width 0.7s ease-in-out 0s",
      }}
    >
      <div
        className="bg-white absolute top-0 bottom-0 flex flex-col border-r border-black/8 -z-10"
        style={{
          width: `${SIDEBAR_W}px`,
          left: open ? "0px" : `${SIDEBAR_W}px`,
          transition: "left 0.7s ease-in-out 1s",
          fontFamily: SYSTEM_FONT,
        }}
      >
        {/* Workspace header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-black/8">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-yellow-300 flex items-center justify-center shrink-0 overflow-hidden">
              <div className="w-8 h-8 rounded-md bg-yellow-300 flex items-center justify-center text-[13px] font-bold text-white">
                A
              </div>
            </div>
            <div className="min-w-0">
              <p className="text-[15px] font-bold text-black leading-tight truncate">ACME Corp</p>
              <p className="text-[12px] text-black/40 leading-tight">Enterprise</p>
            </div>
          </div>
          <svg className="w-4 h-4 text-black/40 shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-black/8">
          <div className="flex items-center gap-1.5 bg-black/5 rounded-md px-2.5 py-1.5 flex-1 mr-3">
            <svg className="w-3.5 h-3.5 text-black/40 shrink-0" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-[12px] text-black/40 flex-1">Search</span>
            <kbd className="text-[10px] text-black/30 border border-black/15 rounded px-1 leading-4">⌘K</kbd>
          </div>
          <div className="flex items-center gap-2 text-black/40">
            {/* Plus */}
            <svg className="w-4 h-4 cursor-pointer hover:text-black/70 transition-colors" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {/* Pencil */}
            <svg className="w-4 h-4 cursor-pointer hover:text-black/70 transition-colors" viewBox="0 0 16 16" fill="none">
              <path d="M11 2.5l2.5 2.5-7.5 7.5H3.5V10L11 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            {/* Bell */}
            <svg className="w-4 h-4 cursor-pointer hover:text-black/70 transition-colors" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5v1M8 2.5A3.5 3.5 0 004.5 6c0 2-.5 3-1 3.5h9c-.5-.5-1-1.5-1-3.5A3.5 3.5 0 008 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M3.5 9.5h9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
              <path d="M6.5 12a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Channel list */}
        <div className="flex-1 overflow-y-auto py-2">
          <div className="px-2 mb-1">
            <p className="text-[11px] font-semibold text-black/40 uppercase tracking-wide px-2 py-1">Channels</p>
          </div>
          {channels.map((ch) => (
            <div
              key={ch.name}
              className={`flex items-center justify-between mx-1 px-2 py-[5px] rounded-md cursor-pointer group ${ch.active ? "bg-black/10" : "hover:bg-black/5"
                }`}
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <span className={`text-[14px] shrink-0 ${ch.muted ? "text-black/30" : ch.active ? "text-black/60" : "text-black/50"}`}>#</span>
                <span
                  className={`text-[14px] truncate ${ch.active
                      ? "font-semibold text-black"
                      : ch.unread > 0
                        ? "font-semibold text-black"
                        : ch.muted
                          ? "text-black/30"
                          : "text-black/60"
                    }`}
                >
                  {ch.name}
                </span>
              </div>
              {ch.unread > 0 && (
                <span className="ml-1.5 shrink-0 min-w-[18px] h-[18px] bg-black text-white text-[11px] font-semibold rounded-full flex items-center justify-center px-1">
                  {ch.unread}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* User bar */}
        <div className="flex items-center justify-between px-3 py-3 border-t border-black/8">
          <div className="flex items-center gap-2 min-w-0">
            <div className="relative shrink-0">
              <div className="w-8 h-8 rounded-md bg-yellow-300 flex items-center justify-center text-[13px] font-bold text-white">
                Y
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-black leading-tight truncate">You!!!</p>
              <p className="text-[11px] text-black/40 leading-tight">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-black/35 shrink-0">
            <svg className="w-4 h-4 cursor-pointer hover:text-black/60 transition-colors" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <svg className="w-4 h-4 cursor-pointer hover:text-black/60 transition-colors" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6 6a2 2 0 114 0c0 1.5-2 2-2 3.5M8 12.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
