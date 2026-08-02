"use client";

import React, { useRef, useEffect, useState, MouseEvent, TouchEvent } from "react";
import { motion } from "framer-motion";
import { Sparkles, Trophy, RefreshCw, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { playSound } from "@/lib/audioSFX";

export function ScratchTicket() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [revealedPercent, setRevealedPercent] = useState(0);

  // Initialize metallic gold scratch layer on canvas
  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 420;
    canvas.height = 200;

    // Fill with metallic gold gradient
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, "#fbb505");
    grad.addColorStop(0.3, "#fff2a8");
    grad.addColorStop(0.7, "#d49600");
    grad.addColorStop(1, "#fbb505");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add metallic foil texture text
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.font = "bold 16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ GRATTEZ ICI AVEC VOTRE SOURIS ✨", canvas.width / 2, canvas.height / 2);

    setIsScratched(false);
    setRevealedPercent(0);
  };

  useEffect(() => {
    initCanvas();
  }, []);

  const scratchAt = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();

    playSound.scratch();
    checkRevealedPercentage();
  };

  const checkRevealedPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentCount = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentCount++;
    }

    const percent = Math.floor((transparentCount / (pixels.length / 4)) * 100);
    setRevealedPercent(percent);

    if (percent > 35 && !isScratched) {
      setIsScratched(true);
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Auto clear remaining
      playSound.winFanfare();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#fbb505", "#ffffff"],
      });
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) scratchAt(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) scratchAt(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseUp = () => setIsDrawing(false);

  return (
    <section className="relative py-20 px-4 max-w-4xl mx-auto z-20 text-center">
      
      {/* Header Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-mj-red)]/10 border border-[var(--color-mj-red)]/50 text-[var(--color-mj-red)] text-xs font-mono font-bold uppercase tracking-widest mb-4">
        <Sparkles className="w-4 h-4" /> MINI-JEU GRATTEZ & GAGNEZ
      </div>

      <h2 className="text-h2 text-[var(--text-primary)] uppercase mb-3">
        TICKET DE GRATTE-GRATTE <span className="text-[var(--color-mj-gold)]">FOIL 3D</span>
      </h2>
      <p className="text-body text-[var(--text-secondary)] max-w-md mx-auto mb-8 font-medium">
        Glissez votre souris sur la surface dorée ci-dessous pour gratter le ticket et révéler votre lot mystère.
      </p>

      {/* Ticket Card Container */}
      <div className="relative max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-[#0c2045] to-[#021a3c] border-2 border-[var(--color-mj-gold)] shadow-[0_0_50px_rgba(251,181,5,0.3)] overflow-hidden">
        
        {/* Revealed Hidden Prize Layer Underneath */}
        <div className="relative w-full h-[200px] rounded-xl bg-black/80 border border-[var(--color-mj-gold)]/40 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-[var(--color-mj-gold)] text-black flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(251,181,5,0.6)]">
            <Trophy className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-[var(--color-mj-gold)] uppercase tracking-widest">
            {isScratched ? "RETIREZ VOTRE TICKET" : "LOT MYSTÈRE CACHÉ"}
          </span>
          <h3 className="font-heading font-black text-2xl text-white uppercase mt-1">
            VILLA 100M FCFA + CASH
          </h3>
          <span className="text-xs text-gray-400 mt-1">Tirage certifié Huissier • MJ-2026-GOLD</span>
        </div>

        {/* Scratch Canvas Overlay */}
        {!isScratched && (
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="absolute inset-0 m-auto w-[420px] h-[200px] rounded-xl cursor-pointer touch-none z-10"
          />
        )}

        {/* Reset Button */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-mono text-gray-400">
            Scratché : <strong className="text-[var(--color-mj-gold)]">{revealedPercent}%</strong>
          </span>
          <button
            onClick={initCanvas}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" /> RE-GRATTER
          </button>
        </div>
      </div>
    </section>
  );
}
