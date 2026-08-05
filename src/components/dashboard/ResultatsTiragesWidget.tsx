"use client";

import React from "react";
import Link from "next/link";
import { Trophy, ArrowUpRight, Home, Wallet, Plane } from "lucide-react";

export function ResultatsTiragesWidget() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#da151f] via-[#a00c17] to-[#60050c] dark:from-[#0c1a3a] dark:via-[#061430] dark:to-[#04112c] border border-amber-400/40 dark:border-white/15 text-white shadow-xl relative overflow-hidden transition-colors">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-extrabold text-base uppercase text-white tracking-wide flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[var(--color-mj-gold)]" /> RÉSULTATS DES TIRAGES
        </h3>
        <Link
          href="/resultats"
          className="text-[10px] text-[var(--color-mj-gold)] font-mono hover:underline flex items-center gap-1 font-bold"
        >
          Voir tout <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Timeline Trunk Line matching Résultats page */}
      <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/30 dark:before:bg-white/15">
        
        {/* 1. LATEST FEATURED GRAND RESULT: OPPORTUNITÉ BUSINESS */}
        <div className="relative group">
          <div className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[var(--color-mj-gold)] border-2 border-white dark:border-[#04112c] shadow-md z-10 transition-transform duration-300 group-hover:scale-125 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/20 dark:border-white/15 hover:border-[var(--color-mj-gold)]/60 transition-all space-y-2.5 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[var(--color-mj-gold)]/20 text-[var(--color-mj-gold)] flex items-center justify-center shrink-0 border border-[#fbb505]/40">
                  <Plane className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xs text-white leading-none">Opportunité Business</h4>
                  <span className="text-[9px] font-mono text-rose-100 dark:text-gray-400 block mt-0.5">Dubaï 2026 • Hier à 20h00</span>
                </div>
              </div>
              <span className="font-mono text-[9px] font-extrabold text-black bg-[var(--color-mj-gold)] px-2.5 py-0.5 rounded-full shadow-sm">
                MJ-2026-BUS-9901
              </span>
            </div>

            <div className="pt-2 border-t border-white/20 dark:border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 font-extrabold text-[var(--color-mj-gold)]">
                <Trophy className="w-3.5 h-3.5" />
                <span>15 Millions FCFA + Voyage Dubaï</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-white font-mono font-bold">
                <span>Awa N.</span>
                <span className="text-amber-200/60">•</span>
                <span className="text-rose-100 dark:text-gray-400">Thiès</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SECONDARY RESULT: OPPORTUNITÉ MAISON */}
        <div className="relative group">
          <div className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-300 border-2 border-white dark:border-[#04112c] shadow-sm z-10 transition-transform duration-300 group-hover:scale-150 flex items-center justify-center">
            <span className="animate-ping absolute inset-0 rounded-full bg-[var(--color-mj-gold)] opacity-0 group-hover:opacity-100" />
          </div>

          <div className="p-3.5 rounded-xl bg-black/30 border border-white/15 dark:border-white/10 hover:border-[#fbb505]/40 transition-all space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[var(--color-mj-gold)]/15 text-[var(--color-mj-gold)] flex items-center justify-center shrink-0 border border-[#fbb505]/30">
                  <Home className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-white leading-none">Opportunité Maison</h4>
                  <span className="text-[9px] font-mono text-rose-100 dark:text-gray-400 block mt-0.5">15 Déc 2025</span>
                </div>
              </div>
              <span className="font-mono text-[9px] font-bold text-[var(--color-mj-gold)] bg-black/40 px-2 py-0.5 rounded border border-amber-300/30">
                MJ-2025-••••-8812
              </span>
            </div>

            <div className="pt-2 border-t border-white/15 dark:border-white/10 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1 font-bold text-[var(--color-mj-gold)]">
                <Trophy className="w-3 h-3" />
                <span>Villa 100M FCFA</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-white font-mono">
                <span>Mamadou S.</span>
                <span className="text-amber-200/60">•</span>
                <span className="text-rose-100 dark:text-gray-400">Dakar</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. TERTIARY RESULT: OPPORTUNITÉ FAMILLE */}
        <div className="relative group">
          <div className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 border-2 border-white dark:border-[#04112c] shadow-sm z-10 transition-transform duration-300 group-hover:scale-150 flex items-center justify-center">
            <span className="animate-ping absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100" />
          </div>

          <div className="p-3.5 rounded-xl bg-black/30 border border-white/15 dark:border-white/10 hover:border-blue-400/40 transition-all space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-blue-400/20 text-blue-200 flex items-center justify-center shrink-0 border border-blue-300/30">
                  <Wallet className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-white leading-none">Opportunité Famille</h4>
                  <span className="text-[9px] font-mono text-rose-100 dark:text-gray-400 block mt-0.5">20 Fév 2026</span>
                </div>
              </div>
              <span className="font-mono text-[9px] font-bold text-blue-200 bg-black/40 px-2 py-0.5 rounded border border-blue-300/30">
                MJ-2026-••••-0023
              </span>
            </div>

            <div className="pt-2 border-t border-white/15 dark:border-white/10 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1 font-bold text-blue-200">
                <Trophy className="w-3 h-3" />
                <span>2M FCFA/mois (36 mois)</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-white font-mono">
                <span>Cheikh S.</span>
                <span className="text-amber-200/60">•</span>
                <span className="text-rose-100 dark:text-gray-400">St-Louis</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Full Results CTA */}
      <div className="mt-6">
        <Link href="/resultats">
          <button className="w-full py-3 bg-black/40 hover:bg-black/60 border border-amber-400/50 text-[var(--color-mj-gold)] font-heading font-bold text-sm uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md">
            CONSULTER TOUS LES RÉSULTATS
          </button>
        </Link>
      </div>
    </div>
  );
}
