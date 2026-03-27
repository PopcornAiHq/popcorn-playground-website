"use client";

import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react/next";
import ChannelsSidebar from "./ChannelsSidebar";
import ChatSidebar from "./ChatSidebar";
import Nav from "./Nav";

// Logical size the content reflows to in windowed mode.
// Sidebars live inside this box, so their space is already accounted for.
const TARGET_W = 1600;
const TARGET_H = 900;
const SIDEBAR_W = 260;
const FRAME_TRANSITION = "all 3s ease-in-out 0.3s";
const SPRING = "linear(    0, 0.006, 0.025, 0.057 3.7%, 0.102 5.2%, 0.202 7.8%, 0.553 16.2%, 0.657 19.1%, 0.743, 0.816, 0.876, 0.924 30.4%, 0.961 33.6%, 0.986 36.5%, 1.004 39.8%, 1.015 43.3%, 1.021 47.4%, 1.02 53.6%, 1.003 77%, 1)";
const SIDEBAR_TRANSITION = `all 0.5s ${SPRING} 3.3s`;

// Fraction of the viewport the windowed container may occupy
const CONTENT_W_RATIO = 0.9;
const CONTENT_H_RATIO = 0.9;

type Dims = {
	vw: number;
	vh: number;
	scale: number;
	scaledW: number;
	scaledH: number;
	top: number;
	left: number;
};

export default function AppFrame() {
	const [windowed, setWindowed] = useState(false);
	const [dims, setDims] = useState<Dims>({
		vw: 0,
		vh: 0,
		scale: 1,
		scaledW: 0,
		scaledH: 0,
		top: 0,
		left: 0,
	});

	useEffect(() => {
		const compute = () => {
			const vw = window.innerWidth;
			const vh = window.innerHeight;
			const scale = Math.min(
				(vw * CONTENT_W_RATIO) / TARGET_W,
				(vh * CONTENT_H_RATIO) / TARGET_H,
			);
			const scaledW = TARGET_W * scale;
			const scaledH = TARGET_H * scale;
			setDims({
				vw,
				vh,
				scale,
				scaledW,
				scaledH,
				top: (vh - scaledH) / 2,
				left: (vw - scaledW) / 2,
			});
		};
		compute();
		window.addEventListener("resize", compute);
		return () => window.removeEventListener("resize", compute);
	}, []);

	return (
		<div className="min-h-screen bg-neutral-700 relative overflow-hidden"
			style={{
				background: "url('/background.png') center / cover no-repeat",
			}}
		>
			{/* Single container holds main content + both sidebars.
				It resizes to TARGET dimensions then scales to fit the viewport.
				Sidebars live inside so their height is always structurally correct. */}
			<div
				className="absolute flex overflow-hidden"
				style={{
					top: windowed ? `${dims.top}px` : "0px",
					left: windowed ? `${dims.left}px` : "0px",
					width: windowed ? `${TARGET_W}px` : dims.vw ? `${dims.vw}px` : "100vw",
					height: windowed ? `${TARGET_H}px` : dims.vh ? `${dims.vh}px` : "100vh",
					transform: `scale(${windowed ? dims.scale : 1})`,
					transformOrigin: "top left",
					// filter: windowed ? "drop-shadow(0 24px 80px rgba(0,0,0,0.18))" : "none",
					transition: FRAME_TRANSITION,
				}}
			>
				{/* Channels sidebar — fades in after container finishes scaling */}
				<div className="hidden md:block shrink-0">
					<div
						className="overflow-hidden shrink-0"
						style={{
							width: windowed ? `${SIDEBAR_W}px` : "0px",
							transition: FRAME_TRANSITION,
						}}
					>
						<ChannelsSidebar open={windowed} width={SIDEBAR_W} transition={SIDEBAR_TRANSITION} />
					</div>
				</div>

				{/* Main page content */}
				<div className="flex-1 flex flex-col relative min-w-0 min-h-full overflow-hidden bg-amber-100 z-0">
					<div className="absolute inset-0 w-full h-full -z-10">
						<UnicornScene
							projectId="8piQu3B6rsUX3zy4aDoS"
							width="100%"
							height="100%"
							scale={1}
							dpi={1.5}
							sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.5/dist/unicornStudio.umd.js"
							className="absolute inset-0 w-full h-full"
						/>
					</div>

					<Nav />

					{/* Hero + CTA — centered vertically and horizontally */}
					<div className="flex-1 flex flex-col items-center justify-center gap-8 z-10">
						{/* 3D Popcorn image */}
						<img
							alt="Popcorn"
							className="max-w-none size-50"
							src={"/popcorn-3d.png"}
						/>

						<h1
							className="text-[clamp(48px,8vw,95px)] leading-[0.9] text-center tracking-[-8px] text-black"
							style={{ fontFamily: "var(--font-alike-angular)" }}
						>
							Popcorn is Your App Chat
						</h1>

						<p
							className="text-[20px] leading-[1.3] text-center font-semibold text-black max-w-190"
							style={{ fontFamily: "var(--font-albert-sans)" }}
						>
							Team chat where every conversation contains an app. Talk about
							what you see, point at what matters, and watch it change, live.
						</p>

						{/* CTA */}
						<div className="flex flex-col items-center gap-2.5">
							<button
								className="bg-black text-white px-8 py-4 rounded-[20px] text-[18px] font-medium hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer"
								style={{ fontFamily: "var(--font-albert-sans)" }}
							>
								Sign Up
							</button>
							<p
								className="text-[14px] opacity-70 text-black text-center"
								style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
							>
								44 SPOTS AVAILABLE
							</p>
						</div>
					</div>
				</div>

				{/* Chat sidebar — fades in slightly after channels */}
				<div className="hidden md:block shrink-0">
					<div
						className="overflow-hidden shrink-0"
						style={{
							width: windowed ? `${SIDEBAR_W}px` : "0px",
							transition: FRAME_TRANSITION,
						}}
					>
						<ChatSidebar open={windowed} width={SIDEBAR_W} transition={SIDEBAR_TRANSITION} />
					</div>
				</div>
			</div>

			{/* Toggle — outside the scaled container, always visible */}
			<button
				onClick={() => setWindowed((v) => !v)}
				className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-black/80 hover:bg-black text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
				style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
			>
				<span className="text-[11px] tracking-widest uppercase">
					{windowed ? "App view" : "Full view" }
				</span>
				<span className="flex gap-1 items-center">
					<span
						className={`block h-1.5 w-1.5 rounded-full transition-colors ${windowed ? "bg-white/40" : "bg-white"}`}
					/>
					<span
						className={`block h-1.5 w-1.5 rounded-full transition-colors ${windowed ? "bg-white" : "bg-white/40"}`}
					/>
				</span>
			</button>
		</div>
	);
}
