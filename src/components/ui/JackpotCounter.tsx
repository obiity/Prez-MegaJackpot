"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Trophy, Zap } from "lucide-react";

interface JackpotCounterProps {
  initialValue?: number;
  label?: string;
  currency?: string;
}

export function JackpotCounter({
  initialValue = 185000000,
  label = "CAGOOTTE NATIONALE EN JEU",
  currency = "FCFA",
}: JackpotCounterProps) {
  const [value, setValue] = useState(initialValue);

  // Micro increment to simulate live jackpot accumulation
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => prev + Math.floor(Math.random() * 5000) + 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const formattedDigits = value.toLocaleString("fr-FR").replace(/\s/g, " ");

  return (
    <div className="relative inline-flex flex-col items-center p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#0a1836]/90 to-[#021a3c]/95 border border-[var(--color-mj-gold)]/40 shadow-[0_0_50px_rgba(251,181,5,0.2)] backdrop-blur-xl max-w-2xl w-full mx-auto overflow-hidden">
      
      {/* Top Gaming Live Tag */}
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-mj-red)]/20 border border-[var(--color-mj-red)]/50 text-[var(--color-mj-red)] text-xs font-mono font-bold uppercase tracking-widest animate-pulse">
          <Zap className="w-3.5 h-3.5 fill-current" /> LIVE JACKPOT
        </span>
        <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-1">
          <Trophy className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" /> {label}
        </span>
      </div>

      {/* Arcade LED Counter Box */}
      <div className="relative px-6 py-4 rounded-xl bg-black/80 border border-[var(--color-mj-gold)]/50 shadow-[inner_0_0_20px_rgba(251,181,5,0.4)] flex items-center justify-center gap-1 md:gap-2">
        <span className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-wider text-[var(--color-mj-gold)] drop-shadow-[0_0_25px_rgba(251,181,5,0.8)] font-mono">
          {formattedDigits}
        </span>
        <span className="font-heading font-bold text-xl sm:text-2xl text-[var(--color-mj-gold)]/80 ml-2">
          {currency}
        </span>

        {/* Cyber Neon Sweep line */}
        <motion.div
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-mj-gold)] to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Bottom Subtitle */}
      <p className="mt-3 text-xs md:text-sm text-[var(--text-secondary)] font-medium text-center">
        Tirages certifiés sous contrôle d'Huissier de Justice • Mise à jour en temps réel
      </p>
    </div>
  );
}
