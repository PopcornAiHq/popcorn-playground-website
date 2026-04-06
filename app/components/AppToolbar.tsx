import Image from 'next/image'

export default function AppToolbar({ open, transition }: { open: boolean, transition: string }) {
    return (
        <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-4xl p-2 gap-2 rounded-3xl inline-flex w-fit items-center p-2 backdrop-blur-[20px] rounded-[22px] border border-black/5 z-20"
            style={{
                bottom: open ? "20px" : "-60px",
                transition,
            }}
        >
            <button type="button" className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[14px] text-text-primary/70 transition-[transform,background,color] duration-150 ease-out bg-black/5 hover:bg-black/20 ">
                <Image
                    className="opacity-60"
                    src="/refresh.svg"
                    width={16}
                    height={16}
                    alt="icon"
                />
            </button>

            <button
                className="gap-2 flex h-[40px] items-center overflow-hidden rounded-[14px] border border-black/10 hover:border-black/30 hover:bg-black/3 bg-surface px-2 text-left transition-[width,background-color,border-color] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            >
                <div
                    className="rounded-lg flex items-center justify-center font-semibold flex-shrink-0 w-8 h-8 text-sm !h-[26px] !w-[26px] !rounded-[8px] !text-[10px] ring-1 ring-black/[0.08] dark:ring-white/[0.12]"
                    style={{ background: "linear-gradient(135deg, rgb(245, 166, 35), rgb(242, 101, 34))", color: "white" }}
                >P</div>
                <Image
                    className="opacity-40"
                    src="/chevron-down.svg"
                    width={12}
                    height={12}
                    alt="icon"
                />
            </button>

            <button className="bg-[#F1D4B3] flex h-[40px] items-center justify-center gap-2 rounded-[14px] bg-button-primary px-4 text-[13px] font-semibold whitespace-nowrap text-on-primary transition-all duration-200 ease-out hover:bg-[#EDB676]" title="Start recording">
                <Image
                    src="/cursor.svg"
                    width={16}
                    height={16}
                    alt="icon"
                />
                <span>Talk<span className="hidden min-[900px]:inline"> through</span></span>
            </button>

            <button type="button" className="bg-black/5 grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[14px] text-text-primary/70 transition-[transform,background,color] duration-150 ease-out hover:bg-black/20">
                <Image
                    className="opacity-60"
                    src="/chat.svg"
                    width={16}
                    height={16}
                    alt="icon"
                />
            </button>

            <button type="button" className="bg-black/5 grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[14px] text-text-primary/70 transition-[transform,background,color] duration-150 ease-out hover:bg-black/20">
                <Image
                    className="opacity-60"
                    src="/expand.svg"
                    width={16}
                    height={16}
                    alt="icon"
                />
            </button>
        </div>
    );
}
