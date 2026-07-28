"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, User, Home, Briefcase, Shield } from "lucide-react";
import type { DrawResult } from "@/lib/mockData";

interface PastDrawCardProps {
  result: DrawResult;
  index: number;
}

export function PastDrawCard({ result, index }: PastDrawCardProps) {
  const isMaison = result.productId === 'maison';
  const isBusiness = result.productId === 'business';
  
  const accentColor = isMaison ? 'var(--color-mj-gold)' : isBusiness ? 'var(--color-mj-red)' : 'var(--color-mj-blue)';
  const bgGradient = isMaison ? 'from-yellow-50 to-transparent dark:from-yellow-900/10' : 
                     isBusiness ? 'from-red-50 to-transparent dark:from-red-900/10' : 
                     'from-blue-50 to-transparent dark:from-blue-900/10';

  const Icon = isMaison ? Home : isBusiness ? Briefcase : Shield;
  const isCurrentUser = result.winnerName.includes("Votre Ticket");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col md:flex-row bg-white dark:bg-[var(--bg-surface)] rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden group"
    >
      {/* Date sidebar */}
      <div className="w-full md:w-32 bg-gray-50 dark:bg-black/20 p-4 md:p-6 flex flex-row md:flex-col items-center justify-between md:justify-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5 text-center">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-0 md:mb-1">Date</span>
        <span className="font-bold text-[var(--text-primary)] dark:text-white">{result.drawDate}</span>
      </div>

      {/* Main content */}
      <div className={`flex-1 p-6 md:p-8 bg-gradient-to-br ${bgGradient}`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white dark:bg-[#0a1628] shadow-sm border border-gray-50 dark:border-white/10" style={{ color: accentColor }}>
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-xl text-[var(--text-primary)] dark:text-white">{result.productName}</h3>
          </div>
          <div className="bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10">
            <span className="text-[10px] uppercase text-gray-500 block mb-0.5">Ticket Gagnant</span>
            <span className="font-mono text-sm font-bold text-gray-700 dark:text-gray-300">{result.winningSerialNumber}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Lot Remporté</p>
            <p className="text-lg font-bold text-[var(--text-primary)] dark:text-gray-100 flex items-center gap-2">
              <Trophy className="w-5 h-5" style={{ color: accentColor }} />
              {result.prizeDescription}
            </p>
          </div>
          
          <div className={`p-4 rounded-xl border ${isCurrentUser ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-white dark:bg-black/20 border-gray-100 dark:border-white/5'}`}>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Gagnant</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className={`w-4 h-4 ${isCurrentUser ? 'text-green-600' : 'text-gray-400'}`} />
                <span className={`font-bold ${isCurrentUser ? 'text-green-700 dark:text-green-400' : 'text-[var(--text-primary)] dark:text-white'}`}>
                  {result.winnerName}
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <MapPin className="w-3.5 h-3.5" />
                {result.winnerCity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
