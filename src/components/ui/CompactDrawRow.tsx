"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, User, Home, Briefcase, Shield } from "lucide-react";
import type { DrawResult } from "@/lib/mockData";

interface CompactDrawRowProps {
  result: DrawResult;
}

export function CompactDrawRow({ result }: CompactDrawRowProps) {
  const isMaison = result.productId === 'maison';
  const isBusiness = result.productId === 'business';
  
  const accentColor = isMaison ? 'var(--color-mj-gold)' : isBusiness ? 'var(--color-mj-red)' : 'var(--color-mj-blue)';
  const Icon = isMaison ? Home : isBusiness ? Briefcase : Shield;
  const isCurrentUser = result.winnerName.includes("Votre Ticket");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.015, x: 4 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 25 }}
      className="group relative bg-white dark:bg-[var(--bg-surface)] hover:bg-gray-50 dark:hover:bg-[#07152b] transition-all duration-300 rounded-xl border border-gray-100 dark:border-white/10 hover:border-[var(--color-mj-gold)]/50 shadow-sm hover:shadow-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer overflow-hidden"
    >
      {/* Subtle Light Sweep Flare */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

      {/* Left: Date & Product */}
      <div className="flex items-center gap-4 min-w-[200px] relative z-10">
        <div 
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/10 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
          style={{ color: accentColor }}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-400 mb-0.5">{result.drawDate}</p>
          <h4 className="font-heading font-bold text-[var(--text-primary)] dark:text-white group-hover:text-[var(--color-mj-gold)] transition-colors">
            {result.productName}
          </h4>
        </div>
      </div>

      {/* Center: Ticket Info */}
      <div className="flex-1 flex flex-col sm:items-center relative z-10">
        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-0.5">Ticket Gagnant</span>
        <span className="font-mono text-sm font-bold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-black/40 px-3 py-1 rounded-md border border-transparent group-hover:border-[var(--color-mj-gold)]/30 transition-all">
          {result.winningSerialNumber}
        </span>
      </div>

      {/* Right: Winner Info */}
      <div className="flex flex-col sm:items-end min-w-[220px] mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-white/5 w-full sm:w-auto relative z-10">
        <div className="flex items-center gap-1.5 font-bold text-sm mb-1" style={{ color: accentColor }}>
          <Trophy className="w-4 h-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
          <span>{result.prizeDescription}</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1">
            <User className={`w-3.5 h-3.5 ${isCurrentUser ? 'text-green-500' : 'text-gray-400'}`} />
            <span className={`font-semibold ${isCurrentUser ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-300'}`}>
              {result.winnerName}
            </span>
          </div>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" />
            {result.winnerCity}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
