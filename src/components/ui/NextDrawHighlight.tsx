"use client";

import { motion } from "framer-motion";
import { Countdown } from "./Countdown";
import { Sparkles, Calendar } from "lucide-react";

interface NextDrawHighlightProps {
  date: string;
  productName: string;
  prize: string;
}

export function NextDrawHighlight({ 
  date = "30 Novembre 2024", 
  productName = "OPPORTUNITÉ MAISON", 
  prize = "80 à 120 millions FCFA" 
}: Partial<NextDrawHighlightProps> = {}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="relative w-full rounded-3xl overflow-hidden bg-[var(--color-mj-blue-dark)] text-white shadow-2xl mb-12"
    >
      {/* Background Effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/IMG2.png?v=1')" }}
      />
      {/* Gradient to ensure text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-mj-blue-dark)] via-[var(--color-mj-blue-dark)]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--color-mj-gold)]/10 to-transparent opacity-50" />

      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <div className="inline-flex items-center gap-2 bg-[var(--color-mj-red)] text-white text-xs font-bold px-3 py-1 rounded-sm mb-6 uppercase tracking-wider shadow-[0_0_15px_rgba(218,21,31,0.5)]">
            <Calendar className="w-3 h-3" /> Prochain Tirage
          </div>
          <h2 className="text-3xl md:text-4xl font-heading mb-2">{productName}</h2>
          <p className="text-xl md:text-2xl text-[var(--color-mj-gold)] font-medium mb-2 drop-shadow-md">{prize}</p>
          <p className="text-blue-200">Date du tirage : <strong className="text-white">{date}</strong></p>
        </div>

        <div className="flex flex-col items-center md:items-end bg-black/30 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Temps restant</p>
          <Countdown className="justify-center md:justify-end scale-90 sm:scale-100 origin-center md:origin-right" />
        </div>
      </div>
    </motion.div>
  );
}
