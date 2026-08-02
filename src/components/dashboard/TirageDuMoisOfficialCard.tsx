"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Trophy, Gift } from "lucide-react";

export function TirageDuMoisOfficialCard() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#0c1836] via-[#051128] to-[#010919] border border-white/10 p-6 md:p-8 text-white shadow-2xl mb-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left Info Column */}
        <div className="md:col-span-7 text-left space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-heading font-extrabold text-white uppercase tracking-wide">
              PROCHAIN TIRAGE GRAND LOT
            </h2>
            <span className="px-2.5 py-0.5 bg-[var(--color-mj-gold)] text-black font-mono font-bold text-[10px] rounded uppercase">
              CERTIFIÉ HUISSIER
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-black text-[var(--color-mj-gold)] uppercase mt-1">
            VILLA OU MAISON DE RÊVE
          </h3>
          <p className="text-xs text-gray-300 font-mono">Valeur cible : 80 à 120 Millions FCFA</p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-gray-300 font-medium py-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mj-gold)]" /> Lots Cash secondaires
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mj-gold)]" /> Terrains constructibles
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mj-gold)]" /> Tickets gratuits offerts
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mj-gold)]" /> Tirage sous contrôle d'Huissier
            </span>
          </div>

          {/* Progress Bar */}
          <div className="pt-2">
            <div className="flex justify-between text-xs font-mono mb-1.5 text-gray-300">
              <span>Progression du tirage</span>
              <span className="font-bold text-[var(--color-mj-gold)]">65%</span>
            </div>
            <div className="w-full h-3 bg-black/60 rounded-full overflow-hidden border border-white/10">
              <div className="h-full bg-gradient-to-r from-[var(--color-mj-red)] to-[var(--color-mj-gold)] w-[65%] rounded-full shadow-[0_0_12px_rgba(251,181,5,0.8)]" />
            </div>
            <span className="text-[10px] font-mono text-gray-400 block mt-1">
              65 230 / 100 000 tickets enregistrés
            </span>
          </div>

          {/* Red CTA Button */}
          <div className="pt-3">
            <Link href="/tickets">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-mj-red)] hover:bg-red-600 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer">
                ACHETER MON TICKET DE TIRAGE
              </button>
            </Link>
          </div>
        </div>

        {/* Right Villa Showcase */}
        <div className="md:col-span-5 relative h-52 sm:h-64 rounded-2xl overflow-hidden border border-white/15 shadow-md">
          <Image
            src="/MAISON.png"
            alt="Villa de luxe MEGA JACKPOT"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-mj-gold)] block">Grand Lot Star</span>
            <span className="font-heading font-bold text-sm text-white">Villa de Luxe avec Piscine</span>
          </div>
        </div>

      </div>
    </div>
  );
}
