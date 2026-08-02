"use client";

import { motion } from "framer-motion";
import { Countdown } from "./Countdown";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { playSound } from "@/lib/audioSFX";

interface NextDrawHighlightProps {
  date: string;
  productName: string;
  prize: string;
}

export function NextDrawHighlight({ 
  date = "01 Juillet 2026", 
  productName = "OPPORTUNITÉ BUSINESS", 
  prize = "15 000 000 FCFA + Voyage Dubaï" 
}: Partial<NextDrawHighlightProps> = {}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-full rounded-3xl overflow-hidden bg-[#07132a] text-white shadow-2xl mb-12 border border-[#da151f]/50 hover:border-[var(--color-mj-gold)]/70 hover:shadow-[0_25px_60px_rgba(251,181,5,0.25)] transition-all duration-500 group min-h-[240px] cursor-pointer"
    >
      {/* 100% Full-Frame Background Image with Interactive Hover Scale */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700 ease-out" 
        style={{ backgroundImage: "url('/hero_victory_dream.jpg')" }}
      />
      
      {/* Dynamic Light Sweep Flare on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

      {/* Reduced-Opacity Black Vignettes (Même réglage que le carrousel hero) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 z-10" />

      <div className="relative z-20 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-[var(--color-mj-red)] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(218,21,31,0.5)] group-hover:scale-105 transition-transform">
            <Calendar className="w-3.5 h-3.5" /> Prochain Tirage Officiel
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight group-hover:text-[var(--color-mj-gold)] transition-colors duration-300">
            {productName}
          </h2>
          <p className="text-xl md:text-2xl text-[var(--color-mj-gold)] font-heading font-extrabold drop-shadow-md group-hover:scale-[1.02] origin-left transition-transform">
            {prize}
          </p>
          <p className="text-gray-300 text-sm font-mono">Date du tirage : <strong className="text-white">{date}</strong></p>
        </div>

        <div className="flex flex-col items-center md:items-end bg-black/70 p-5 rounded-2xl backdrop-blur-md border border-white/15 shadow-2xl group-hover:border-[var(--color-mj-gold)]/40 transition-all">
          <p className="text-gray-300 text-xs font-mono uppercase font-bold tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-mj-gold)] animate-pulse" /> Temps restant
          </p>
          <Countdown className="justify-center md:justify-end scale-90 sm:scale-100 origin-center md:origin-right" />
          
          <Link href="/tickets" onClick={() => playSound.click()} className="mt-3">
            <button className="px-5 py-2 bg-gradient-to-r from-[var(--color-mj-gold)] to-yellow-400 text-black font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer active:scale-95">
              <span>PARTICIPER MAINTENANT</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
