// src/components/MatrixWorms.tsx
"use client";

import { useEffect, useRef } from "react";

export default function MatrixWorms() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const worms: any[] = [];

    // Warna cacing — adaptive ke tema
    const lightColors = ["#8b5cf6", "#a78bfa", "#c4b5fd", "#e9d5ff"];
    const darkColors = ["#10b981", "#34d399", "#6ee7b7", "#86efac"]; // emerald-green vibe Soulightric

    const isDark = document.documentElement.classList.contains("dark");
    const colors = isDark ? darkColors : lightColors;

    class Worm {
      x: number;
      y: number;
      length: number;
      speed: number;
      direction: number;
      segments: { x: number; y: number }[];
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.length = Math.floor(Math.random() * 80) + 40;
        this.speed = Math.random() * 2 + 1;
        this.direction = Math.random() * Math.PI * 2;
        this.segments = [];
        this.color = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < this.length; i++) {
          this.segments.push({ x: this.x, y: this.y });
        }
      }

      update() {
        this.direction += (Math.random() - 0.5) * 0.3;
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;

        // Wrap around screen
        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;

        this.segments.shift();
        this.segments.push({ x: this.x, y: this.y });
      }

      draw() {
        ctx!.strokeStyle = this.color;
        ctx!.lineWidth = 2;
        ctx!.globalAlpha = 0.8;
        ctx!.beginPath();
        this.segments.forEach((seg, i) => {
          if (i === 0) ctx!.moveTo(seg.x, seg.y);
          else ctx!.lineTo(seg.x, seg.y);
        });
        ctx!.stroke();
      }
    }

    // Spawn worms
    for (let i = 0; i < 12; i++) {
      worms.push(new Worm());
    }

    const animate = () => {
      // Trail effect — adaptive ke tema!
      const isDarkNow = document.documentElement.classList.contains("dark");
      ctx.fillStyle = isDarkNow 
        ? "rgba(0, 0, 0, 0.06)"     // dark mode: hitam halus
        : "rgba(255, 255, 255, 0.06)"; // light mode: putih halus

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      worms.forEach((worm) => {
        worm.update();
        worm.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-30"
    />
  );
}