"use client";

import { useEffect, useRef } from "react";

const PALETTE = {
  colorBack: "#ffffff",
  light: "#fffabb",
  mid: "#ffe956",
  strong: "#ffda1f",
};

const BAYER4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

const EDGE_PARAMS = {
  base: 0.65,
  transition: 0.38,
  waveAFreq: 4.3,
  waveAAmp: 0.021,
  waveBFreq: 2.3,
  waveBAmp: 0.04,
  waveCFreq: 1.1,
  waveCAmp: 0.035,
  band1: 0.33,
  band2: 0.62,
};

const SPEED = 0.38;
const OFFSET_X = -0.18;
const OFFSET_Y = 2.5;

function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v));
}

function fieldWaveBoundary(nx: number, ny: number, timeSec: number): number {
  const phase = timeSec * SPEED;
  const x = nx + OFFSET_X;
  const base = EDGE_PARAMS.base + OFFSET_Y * 0.02;
  const waveA = Math.sin(x * Math.PI * EDGE_PARAMS.waveAFreq + phase * 1.26) * EDGE_PARAMS.waveAAmp;
  const waveB = Math.sin(x * Math.PI * EDGE_PARAMS.waveBFreq - phase * 0.88) * EDGE_PARAMS.waveBAmp;
  const waveC = Math.sin(x * Math.PI * EDGE_PARAMS.waveCFreq + phase * 0.46) * EDGE_PARAMS.waveCAmp;
  const edge = base + waveA + waveB + waveC;
  return clamp((ny - edge) / EDGE_PARAMS.transition + 0.5, 0, 1);
}

function drawEdge(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  timeSec: number,
): void {
  const bands = [PALETTE.light, PALETTE.mid, PALETTE.strong];

  ctx.fillStyle = PALETTE.colorBack;
  ctx.fillRect(0, 0, W, H);

  const cell = 8;
  const cols = Math.ceil(W / cell) + 1;
  const rows = Math.ceil(H / cell) + 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cx = c * cell + cell * 0.5;
      const cy = r * cell + cell * 0.5;
      const nx = cx / W;
      const ny = cy / H;

      const density = fieldWaveBoundary(nx, ny, timeSec);
      if (density <= 0.001) continue;

      if (density > 0.96) {
        ctx.fillStyle = PALETTE.strong;
        ctx.fillRect(c * cell, r * cell, cell, cell);
        continue;
      }

      const threshold = (BAYER4[r & 3][c & 3] + 0.5) / 16;
      if (density < threshold) continue;

      const edgeBand = density < EDGE_PARAMS.band1 ? 0 : density < EDGE_PARAMS.band2 ? 1 : 2;
      ctx.fillStyle = bands[edgeBand];

      const fillRatio = clamp(0.26 + density * 0.66, 0.26, 0.92);
      const sq = cell * fillRatio;
      const pad = (cell - sq) * 0.5;
      ctx.fillRect(c * cell + pad, r * cell + pad, sq, sq);
    }
  }
}

interface AnimState {
  timeSec: number;
  lastTs: number;
  rafId: number;
  running: boolean;
  w: number;
  h: number;
}

export default function DitherWaveBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<AnimState>({ timeSec: 0, lastTs: 0, rafId: 0, running: false, w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    const state = stateRef.current;

    function resize() {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const rect = canvas!.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      state.w = w;
      state.h = h;
    }

    function tick(ts: number) {
      if (!state.running) return;
      if (!state.lastTs) state.lastTs = ts;
      const dt = Math.min(50, ts - state.lastTs);
      state.lastTs = ts;
      state.timeSec += dt / 1000;

      drawEdge(ctx!, state.w, state.h, state.timeSec);
      state.rafId = requestAnimationFrame(tick);
    }

    function onVisibility() {
      if (!document.hidden) state.lastTs = 0;
    }

    resize();
    state.running = true;
    state.lastTs = 0;
    state.rafId = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      state.running = false;
      cancelAnimationFrame(state.rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
