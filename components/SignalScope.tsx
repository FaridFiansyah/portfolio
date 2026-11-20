"use client";

import { useEffect, useRef } from "react";

/** Oscilloscope panel: two phase-shifted channels, pointer sets frequency and amplitude. */
export default function SignalScope() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const readout = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cv = canvas.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { f: 2, a: 0.6 };
    const cur = { f: 2, a: 0.6 };
    let w = 0, h = 0, t = 0, raf = 0;

    const resize = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      const y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
      target.f = 1 + x * 5;
      target.a = 0.25 + (1 - y) * 0.6;
    };
    const channel = (phase: number, color: string, amp: number) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const u = x / w;
        const y =
          h / 2 - Math.sin(u * Math.PI * 2 * cur.f + t + phase) * (h / 2.6) * amp - Math.sin(u * 40 + t * 3) * 2;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(143,163,154,0.16)";
      ctx.beginPath();
      for (let i = 1; i < 10; i++) {
        const x = (w / 10) * i;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let i = 1; i < 6; i++) {
        const y = (h / 6) * i;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();
      cur.f += (target.f - cur.f) * 0.06;
      cur.a += (target.a - cur.a) * 0.06;
      channel(0, "#d08a52", cur.a);
      channel(Math.PI / 2.5, "#9fb4ad", cur.a * 0.6);
      if (readout.current) {
        readout.current.textContent = `${(cur.f * 50).toFixed(0)} Hz · ${(cur.a * 3.3).toFixed(2)} Vpp`;
      }
      if (!reduced) {
        t += 0.04;
        raf = requestAnimationFrame(draw);
      }
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    cv.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      cv.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="scope">
      <div className="scope-bar">
        <span>CH1</span>
        <span className="ch2">CH2</span>
        <div ref={readout} className="scope-read">
          100 Hz · 2.00 Vpp
        </div>
      </div>
      <canvas
        ref={canvas}
        className="scope-screen"
        role="img"
        aria-label="Oscilloscope animation. Move the pointer to change frequency and amplitude."
      />
    </div>
  );
}
