"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, User, Home, Briefcase, Shield, Sparkles } from "lucide-react";
import type { DrawResult } from "@/lib/mockData";

interface FeaturedDrawCardProps {
  result: DrawResult;
}

export function FeaturedDrawCard({ result }: FeaturedDrawCardProps) {
  const isMaison = result.productId === 'maison';
  const isBusiness = result.productId === 'business';
  
  const accentColor = isMaison ? 'var(--color-mj-gold)' : isBusiness ? 'var(--color-mj-red)' : 'var(--color-mj-blue)';
  const bgGradient = isMaison ? 'from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-900/5' : 
                     isBusiness ? 'from-red-100 to-red-50 dark:from-red-900/20 dark:to-red-900/5' : 
                     'from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/5';

  const Icon = isMaison ? Home : isBusiness ? Briefcase : Shield;
  const isCurrentUser = result.winnerName.includes("Votre Ticket");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`relative w-full rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-white/10 bg-gradient-to-br ${bgGradient}`}
    >
      {/* Glow/Shine effect */}
      <div className="absolute inset-0 bg-white/20 dark:bg-white/5 opacity-50 mix-blend-overlay pointer-events-none" />

      {/* Featured Badge */}
      <div className="absolute top-0 right-0 bg-[var(--text-primary)] dark:bg-white text-white dark:text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-md">
        <Sparkles className="w-3.5 h-3.5" />
        Dernier Tirage
      </div>

      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center relative z-10">
        
        {/* Left: Product Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-white dark:bg-[#0a1628] shadow-sm" style={{ color: accentColor }}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold opacity-70 mb-0.5">{result.drawDate}</p>
              <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] dark:text-white">
                {result.productName}
              </h3>
            </div>
          </div>
          
          <div className="inline-block bg-white/50 dark:bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/40 dark:border-white/10">
            <span className="text-xs uppercase font-semibold opacity-60 block mb-0.5">Ticket Gagnant</span>
            <span className="font-mono text-lg font-bold tracking-wider">{result.winningSerialNumber}</span>
          </div>
        </div>

        {/* Right: Winner Info */}
        <div className="flex-1 w-full flex flex-col justify-center bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-xl p-5 border border-white/50 dark:border-white/5 shadow-sm">
          <div className="mb-4">
            <p className="text-[10px] uppercase font-bold tracking-widest opacity-50 mb-1">Lot Remporté</p>
            <p className="text-xl md:text-2xl font-bold flex items-center gap-2" style={{ color: accentColor }}>
              <Trophy className="w-6 h-6" />
              {result.prizeDescription}
            </p>
          </div>
          
          <div className={`p-3 rounded-lg border ${isCurrentUser ? 'bg-green-100/50 dark:bg-green-900/30 border-green-200 dark:border-green-800' : 'bg-white/40 dark:bg-white/5 border-transparent'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className={`w-4 h-4 ${isCurrentUser ? 'text-green-600' : 'opacity-50'}`} />
                <span className={`font-bold ${isCurrentUser ? 'text-green-700 dark:text-green-400' : 'text-[var(--text-primary)] dark:text-white'}`}>
                  {result.winnerName}
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium opacity-60">
                <MapPin className="w-4 h-4" />
                {result.winnerCity}
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
