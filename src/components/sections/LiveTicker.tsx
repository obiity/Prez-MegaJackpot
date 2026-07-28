"use client";

import { useEffect, useState } from "react";
import { Trophy, Gift, ArrowRight } from "lucide-react";
import { fetchDrawResults, type DrawResult } from "@/lib/mockData";

export function LiveTicker() {
  const [winners, setWinners] = useState<DrawResult[]>([]);

  useEffect(() => {
    fetchDrawResults().then(data => {
      setWinners(data);
    });
  }, []);

  if (winners.length === 0) return null;

  return (
    <div className="w-full bg-[#0a0a0a] dark:bg-black border-y border-[var(--border-subtle)] overflow-hidden flex items-center h-10 group relative z-20 shadow-md">
      {/* Gradient Fades for Smooth Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-[#0a0a0a] dark:from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-[#0a0a0a] dark:from-black to-transparent z-10 pointer-events-none" />
      
      {/* Marquee Wrapper */}
      <div className="flex w-max animate-[scrollX_30s_linear_infinite] hover:[animation-play-state:paused] active:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:w-full motion-reduce:py-2">
        {/* We render the list twice to create the seamless loop. In motion-reduce mode, we only render it once. */}
        
        {/* First Set */}
        <div className="flex items-center shrink-0 motion-reduce:flex-wrap motion-reduce:justify-center">
          {winners.map((winner, index) => (
            <TickerItem key={`first-${winner.id}-${index}`} winner={winner} />
          ))}
        </div>
        
        {/* Second Set (Duplicate for seamless scroll) */}
        <div aria-hidden="true" className="flex items-center shrink-0 motion-reduce:hidden">
          {winners.map((winner, index) => (
            <TickerItem key={`second-${winner.id}-${index}`} winner={winner} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TickerItem({ winner }: { winner: DrawResult }) {
  return (
    <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 border-r border-white/10 last:border-none motion-reduce:border-none motion-reduce:py-1">
      {winner.productId === 'business' ? (
        <ArrowRight className="w-4 h-4 text-[var(--color-mj-red)] shrink-0" />
      ) : winner.productId === 'maison' ? (
        <Gift className="w-4 h-4 text-[var(--color-mj-gold)] shrink-0" />
      ) : (
        <Trophy className="w-4 h-4 text-[var(--color-mj-blue)] shrink-0" />
      )}
      <span className="font-mono text-[10px] md:text-xs text-white/70 whitespace-nowrap uppercase tracking-widest">
        <span className="text-white font-heading font-bold text-xs md:text-sm">{winner.winnerName}</span> ({winner.winnerCity}) a gagné
      </span>
      <span className={`font-mono text-[10px] md:text-xs font-bold whitespace-nowrap uppercase tracking-widest ${
        winner.productId === 'maison' ? 'text-[var(--color-mj-gold)] drop-shadow-[0_0_10px_rgba(251,181,5,0.6)]' :
        winner.productId === 'business' ? 'text-[var(--color-mj-red)] drop-shadow-[0_0_10px_rgba(218,21,31,0.6)]' :
        'text-[var(--color-mj-blue)] drop-shadow-[0_0_10px_rgba(16,42,88,0.6)]'
      }`}>
        — {winner.prizeDescription}
      </span>
    </div>
  );
}
