"use client";

import { useEffect, useRef } from "react";

// Brand gradient purples (--grad2 in landing.css) plus the turtle-eye gold
// for a spot of warm contrast, rather than a generic rainbow mix.
const COLORS = ["#4b49c9", "#6664e4", "#3a389f", "#6664E4", "#E9D175"];
const PARTICLE_COUNT = 140;
const DURATION_MS = 3200;
const FADE_MS = 600;
const TICK_MS = 16;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  color: string;
};

export default function ConfettiBurst() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: -20 - Math.random() * height * 0.3,
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 3,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.3,
      size: 6 + Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let elapsed = 0;

    // A setInterval-driven tick rather than requestAnimationFrame: this is
    // a short one-off burst, not a continuous animation, so there's no
    // real cost to it — and unlike rAF, it isn't at the mercy of the tab's
    // paint/visibility state to keep ticking.
    const intervalId = window.setInterval(() => {
      elapsed += TICK_MS;
      ctx.clearRect(0, 0, width, height);

      const fadeStart = DURATION_MS - FADE_MS;
      const alpha = elapsed > fadeStart ? Math.max(0, 1 - (elapsed - fadeStart) / FADE_MS) : 1;

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.04;
        particle.rotation += particle.rotationSpeed;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.fillStyle = particle.color;
        ctx.fillRect(-particle.size / 2, -particle.size / 4, particle.size, particle.size / 2);
        ctx.restore();
      }

      if (elapsed >= DURATION_MS) {
        window.clearInterval(intervalId);
      }
    }, TICK_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 60,
      }}
    />
  );
}
