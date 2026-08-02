"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wallet,
  Home,
  Briefcase,
  Heart,
  Plane,
  Trophy,
  Users,
  ArrowUpRight,
  Sparkles,
  MapPin,
  User,
} from "lucide-react";
import { MonPortefeuilleWidget } from "./MonPortefeuilleWidget";

export function SidebarDashboard() {
  return (
    <div className="space-y-6">
      {/* Widget 1: MON PORTEFEUILLE (Desktop only, mobile renders before opportunities) */}
      <div className="hidden lg:block">
        <MonPortefeuilleWidget />
      </div>

      {/* Widget 2: RÉSULTATS DES TIRAGES */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#0c1a3a] via-[#061430] to-[#04112c] border border-white/15 text-white shadow-xl relative overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-heading font-extrabold text-sm uppercase text-white tracking-wide flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-[var(--color-mj-gold)]" /> RÉSULTATS DES TIRAGES
          </h3>
          <Link href="/resultats" className="text-[10px] text-[var(--color-mj-gold)] font-mono hover:underline flex items-center gap-1">
            Voir tout <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Timeline Trunk Line matching Résultats page */}
        <div className="relative pl-7 space-y-4 text-left">
          {/* Vertical Timeline Trunk Line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[var(--color-mj-gold)] via-red-500 to-blue-500 opacity-30 z-0" />

          {/* 1. UPCOMING DRAW NODE: OPPORTUNITÉ BUSINESS */}
          <div className="relative group">
            {/* Red Node Marker (Blinks ONLY on hover) */}
            <div className="absolute -left-[23px] top-4 w-3.5 h-3.5 rounded-full bg-[var(--color-mj-red)] border-2 border-[#04112c] shadow-[0_0_10px_rgba(218,21,31,0.8)] z-10 transition-transform duration-300 group-hover:scale-125 flex items-center justify-center">
              <span className="animate-ping absolute inset-0 rounded-full bg-[var(--color-mj-red)] opacity-0 group-hover:opacity-100" />
            </div>

            {/* Next Draw Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#da151f]/60 p-4 shadow-xl space-y-3 transition-all group-hover:border-[#da151f] min-h-[170px] flex flex-col justify-between">
              
              {/* 100% Full Background Image */}
              <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                <Image
                  src="/hero_victory_dream.jpg"
                  alt="Opportunité Business Prochain Tirage"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/35 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 z-10" />
              </div>

              {/* Top Row Header */}
              <div className="relative z-20 flex items-center justify-between gap-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--color-mj-red)] text-white text-[9px] font-mono font-bold uppercase tracking-wider shadow-md">
                  Prochain Tirage
                </span>
                <span className="text-[9px] font-mono text-gray-300 font-bold uppercase">01 Juillet 2026</span>
              </div>

              {/* Title & Prize */}
              <div className="relative z-20 space-y-0.5">
                <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider">
                  OPPORTUNITÉ BUSINESS
                </h4>
                <p className="text-xs font-heading font-extrabold text-[var(--color-mj-gold)] drop-shadow-md">
                  15 000 000 FCFA + Voyage Dubaï
                </p>
              </div>

              {/* Countdown / Time remaining pill */}
              <div className="relative z-20 pt-2 border-t border-white/15 flex items-center justify-between gap-2 text-[10px] font-mono">
                <div className="bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mj-gold)] animate-pulse" />
                  <span className="text-gray-300 font-bold">Dans 12 jours (20h00 GMT)</span>
                </div>

                <Link href="/tickets">
                  <button className="px-3 py-1 bg-[var(--color-mj-gold)] hover:bg-yellow-400 text-black font-heading font-black text-[9px] uppercase tracking-wider rounded-md shadow-md transition-all cursor-pointer">
                    Réserver
                  </button>
                </Link>
              </div>

            </div>
          </div>

          {/* 2. SECONDARY RESULT: OPPORTUNITÉ MAISON */}
          <div className="relative group">
            {/* Gold Node Marker (Blinks ONLY on hover) */}
            <div className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[var(--color-mj-gold)] border-2 border-[#04112c] shadow-sm z-10 transition-transform duration-300 group-hover:scale-150 flex items-center justify-center">
              <span className="animate-ping absolute inset-0 rounded-full bg-[var(--color-mj-gold)] opacity-0 group-hover:opacity-100" />
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-[var(--color-mj-gold)]/40 transition-all space-y-2 group-hover:bg-black/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[var(--color-mj-gold)]/15 text-[var(--color-mj-gold)] flex items-center justify-center shrink-0 border border-[#fbb505]/30">
                    <Home className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-white leading-none">Opportunité Maison</h4>
                    <span className="text-[9px] font-mono text-gray-400 block mt-0.5">15 Déc 2025</span>
                  </div>
                </div>
                <span className="font-mono text-[9px] font-bold text-gray-300 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                  MJ-2025-••••-8812
                </span>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 font-bold text-[var(--color-mj-gold)]">
                  <Trophy className="w-3 h-3" />
                  <span>Villa 100M FCFA</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-300 font-mono">
                  <span>Mamadou S.</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">Dakar</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. TERTIARY RESULT: OPPORTUNITÉ FAMILLE */}
          <div className="relative group">
            {/* Blue Node Marker (Blinks ONLY on hover) */}
            <div className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 border-2 border-[#04112c] shadow-sm z-10 transition-transform duration-300 group-hover:scale-150 flex items-center justify-center">
              <span className="animate-ping absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100" />
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-blue-500/40 transition-all space-y-2 group-hover:bg-black/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Wallet className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-white leading-none">Opportunité Famille</h4>
                    <span className="text-[9px] font-mono text-gray-400 block mt-0.5">20 Fév 2026</span>
                  </div>
                </div>
                <span className="font-mono text-[9px] font-bold text-gray-300 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                  MJ-2026-••••-0023
                </span>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 font-bold text-blue-400">
                  <Trophy className="w-3 h-3" />
                  <span>2M FCFA/mois (36 mois)</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-300 font-mono">
                  <span>Cheikh S.</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">St-Louis</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full Results CTA */}
        <div className="mt-5">
          <Link href="/resultats">
            <button className="w-full py-2.5 bg-black/50 hover:bg-black/70 border border-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 hover:border-[var(--color-mj-gold)]/40">
              CONSULTER TOUS LES RÉSULTATS
            </button>
          </Link>
        </div>
      </div>

      {/* Widget 3: MEGAJACKPOT EN CHIFFRES */}
      <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0c1a3a] to-[#04112c] border border-white/10 text-white shadow-xl">
        <h3 className="font-heading font-extrabold text-sm uppercase text-white tracking-wide mb-4 text-left">
          MEGAJACKPOT EN CHIFFRES
        </h3>

        <div className="grid grid-cols-2 gap-3 text-left">
          <div className="p-3 rounded-xl bg-black/30 border border-white/5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-500/15 text-red-500 flex items-center justify-center shrink-0">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono font-bold text-lg text-white block">58</span>
              <span className="text-[9px] text-gray-400 leading-tight block">Maisons attribuées</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-black/30 border border-white/5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono font-bold text-lg text-white block">132</span>
              <span className="text-[9px] text-gray-400 leading-tight block">Entreprises financées</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-black/30 border border-white/5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono font-bold text-lg text-white block">18 750</span>
              <span className="text-[9px] text-gray-400 leading-tight block">Gagnants mensuels</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-black/30 border border-white/5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono font-bold text-lg text-white block">1 286</span>
              <span className="text-[9px] text-gray-400 leading-tight block">Familles accompagnées</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
