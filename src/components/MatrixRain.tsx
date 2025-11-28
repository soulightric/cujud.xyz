// src/components/MatrixRain.tsx
"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Responsive canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters (bisa tambah kanji kalau mau)
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()*&^%±§0123456789アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const chars = matrixChars.split("");

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    // Warna adaptive
    const getColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        main: isDark ? "#10b981" : "#7c3aed",     // emerald (dark) / purple (light)
        fade: isDark ? "#059669" : "#6d28d9",     // lebih gelap
        glow: isDark ? "#34d399" : "#a78bfa",     // glow head
      };
    };

    let colors = getColors();

    // Real-time theme change detection
    const observer = new MutationObserver(() => {
      colors = getColors();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const draw = () => {
      // Trail effect (adaptive!)
      const isDark = document.documentElement.classList.contains("dark");
      ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { main, fade, glow } = colors;

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Gradient per kolom (head lebih terang)
        const gradient = ctx.createLinearGradient(x, y - fontSize * 10, x, y);
        gradient.addColorStop(0, fade + "20");
        gradient.addColorStop(0.7, main + "60");
        gradient.addColorStop(1, glow);

        ctx.fillStyle = gradient;
        ctx.fillText(text, x, y);

        // Reset drop kalau udah lewat bawah
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-40"
    />
  );
}
