
const sections = [
  {
    label: "Getting Started",
    channels: [
      { name: "how-to-popcorn", active: false, unread: false },
    ],
  },
  {
    label: "Marketing",
    channels: [
      { name: "daily-email-campaign", active: false, unread: false },
      { name: "landing-page", active: true, unread: false },
    ],
  },
  {
    label: "Customer Prototypes",
    channels: [
      { name: "analytics-dash", active: false, unread: false },
      { name: "health-monitor", active: false, unread: false },
      { name: "onboarding-flow", active: false, unread: false },
    ],
  },
  {
    label: "Daily",
    channels: [
      { name: "ai-news", active: false, unread: false },
      { name: "launch-schedule", active: false, unread: false },
      { name: "releases-versions", active: false, unread: false },
      { name: "backend-services", active: false, unread: false },
    ],
  },
];

export default function ChannelsSidebar({ open, width, transition }: { open: boolean; width: number; transition: string }) {
  return (
    <div
      className="bg-[#f8f5f0] absolute top-0 bottom-0 flex flex-col -z-10 border-r-[3px] border-black rounded-l-[10px] overflow-hidden"
      style={{
        width: `${width + 50}px`,
        paddingRight: "50px",
        left: open ? "0px" : `${width}px`,
        transition,
        fontFamily: "'Wix Madefor Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Workspace header */}
      <div className="flex items-center gap-2.5 mx-2 px-3 py-2 mt-2 rounded-[6px] hover:bg-black/5 cursor-pointer">
        <img src="/assets/app-logo.png" alt="Popcorn" className="w-9 h-9 rounded-[8px] shrink-0" />
        <div className="min-w-0 flex-1">
          <img src="/popcorn-logo.svg" alt="Popcorn" className="h-6" style={{ filter: "brightness(0)" }} />
        </div>
        <svg className="w-4 h-4 text-black/30 shrink-0" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-1 px-4 py-2">
        {/* Search */}
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-black/40 hover:bg-black/5 hover:text-black/70 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
        {/* Compose */}
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-black/40 hover:bg-black/5 hover:text-black/70 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
        </button>
        <div className="flex-1" />
        {/* Activity */}
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-black/40 hover:bg-black/5 hover:text-black/70 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </div>

      {/* Channel sections */}
      <div className="flex-1 overflow-y-auto px-0 mt-1">
        {sections.map((section) => (
          <div key={section.label}>
            <div className="flex items-center gap-1 px-3 pt-3 pb-1">
              <svg className="w-3 h-3 text-black/40" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[11px] uppercase tracking-[0.5px] text-black/40 font-semibold">{section.label}</span>
            </div>
            <div className="mt-0.5">
              {section.channels.map((ch) => (
                <div
                  key={ch.name}
                  className={`flex items-center gap-2.5 mx-2 px-3 h-8 rounded-[6px] cursor-pointer transition-colors ${
                    ch.active ? "bg-black text-white" : "hover:bg-black/5"
                  }`}
                  style={{ width: "calc(100% - 16px)" }}
                >
                  <svg className={`w-3.5 h-3.5 shrink-0 ${ch.active ? "text-white/60" : "text-black/40"}`} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.474,2.784L14.897,6.958c.481,.176,.467,.861-.021,1.018l-5.228,1.673-1.673,5.228c-.156,.488-.842,.502-1.018,.021L2.784,3.474c-.157-.43,.26-.847,.69-.69Z" /></svg>
                  <span
                    className={`text-[14px] truncate tracking-[-0.2px] leading-[1.2] ${
                      ch.active ? "font-bold text-white" : ch.unread ? "font-semibold text-black" : "text-black/60"
                    }`}
                  >
                    {ch.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* User card */}
      <div className="mx-3 mb-3 rounded-[8px] border border-black/10 bg-white px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <div className="relative shrink-0">
              <img src="/assets/brina.jpg" alt="Brina" className="w-8 h-8 rounded-[6px] object-cover" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-black leading-tight truncate">Brina</p>
              <p className="text-[11px] text-black/40 leading-tight">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {/* Theme toggle */}
            <button className="w-8 h-8 rounded-[6px] flex items-center justify-center text-black/30 hover:bg-black/5 hover:text-black/60 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </button>
            {/* Settings */}
            <button className="w-8 h-8 rounded-[6px] flex items-center justify-center text-black/30 hover:bg-black/5 hover:text-black/60 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 17H5" />
                <path d="M19 7h-9" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
