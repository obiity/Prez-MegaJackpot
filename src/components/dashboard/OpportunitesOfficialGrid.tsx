"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Plane, Wallet, ChevronRight, Sparkles } from "lucide-react";

export function OpportunitesOfficialGrid() {
  const cards = [
    {
      id: "maison",
      title: "DEVENEZ PROPRIÉTAIRE",
      subtitle: "Villa ou maison d'une valeur de 80 à 120 Millions FCFA",
      freq: "2 tirages/an",
      bg: "from-[#0c1e40] via-[#051128] to-[#010919]",
      border: "border-[#fbb505]/40 hover:border-[#fbb505]",
      accent: "text-[var(--color-mj-gold)]",
      icon: Home,
      image: "/MAISON.png",
      lot: "80 à 120 Millions FCFA",
      glow: "shadow-[0_0_30px_rgba(251,181,5,0.15)]",
    },
    {
      id: "business",
      title: "DÉVELOPPEZ VOTRE PROPRE BUSINESS",
      subtitle: "Voyage + Formation + Capital de démarrage (15M FCFA)",
      freq: "4 tirages/an",
      bg: "from-[#2e0609] via-[#140204] to-[#010919]",
      border: "border-[#da151f]/70 hover:border-[#da151f]",
      accent: "text-red-400",
      icon: Plane,
      image: "/BUSINESS.png",
      lot: "15 Millions FCFA",
      glow: "shadow-[0_0_30px_rgba(218,21,31,0.3)]",
    },
    {
      id: "famille",
      title: "SÉCURISEZ LE QUOTIDIEN DE VOTRE FAMILLE",
      subtitle: "Rente sécurisée de 2M FCFA/mois pendant 36 mois",
      freq: "3 tirages/an",
      bg: "from-[#0a2048] via-[#041028] to-[#010919]",
      border: "border-[#3b82f6]/40 hover:border-[#3b82f6]",
      accent: "text-blue-400",
      icon: Wallet,
      image: "/FAMILLE.png",
      lot: "2 Millions FCFA/mois",
      glow: "shadow-[0_0_30px_rgba(16,42,88,0.3)]",
    },
  ];

  return (
    <div className="mb-10 text-center">
      {/* Header Row */}
      <div className="mb-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbb505]/10 border border-[#fbb505]/40 text-[var(--color-mj-gold)] text-[10px] font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(251,181,5,0.2)]">
          <Sparkles className="w-3.5 h-3.5" /> Vos Opportunités Majeures
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-[#021a3c] dark:text-white uppercase tracking-tighter drop-shadow-xl mb-3">
          CHOISISSEZ VOTRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mj-gold)] to-yellow-400 drop-shadow-[0_0_25px_rgba(251,181,5,0.6)]">DESTIN</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[var(--color-mj-gold)] to-transparent opacity-50 mb-4 rounded-full"></div>
        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-medium max-w-lg">
          Tentez de remporter l&apos;un de nos 3 grands lots d&apos;exception. Un ticket peut tout changer.
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.id} href="/tickets" className="group block h-full">
              <div
                className="h-full rounded-3xl bg-gradient-to-b from-[#da151f] via-[#a00c17] to-[#60050c] dark:from-[#0c1e40] dark:via-[#051128] dark:to-[#010919] text-white shadow-xl hover:shadow-2xl border border-amber-400/40 dark:border-white/15 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[350px] hover:-translate-y-1.5 group-hover:border-[var(--color-mj-gold)]"
              >
                {/* Product Image Cover Header */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-mj-gold)] flex items-center gap-1.5 shadow-md">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{card.freq}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-black text-base uppercase tracking-wider mb-1.5 text-white group-hover:text-[var(--color-mj-gold)] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-rose-100 dark:text-gray-300 leading-relaxed font-medium mb-3">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Grand Lot Highlight */}
                  <div className="pt-3.5 border-t border-white/20 dark:border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-amber-200 dark:text-gray-400 block mb-0.5">Grand Lot</span>
                      <span className={`font-heading font-extrabold text-sm sm:text-base ${card.id === 'maison' ? 'text-[#fbb505]' : card.id === 'business' ? 'text-rose-200 dark:text-red-400' : 'text-amber-300 dark:text-blue-400'}`}>{card.lot}</span>
                    </div>
                    <span className="px-3.5 py-2 bg-gradient-to-r from-[var(--color-mj-gold)] via-yellow-400 to-[var(--color-mj-gold)] text-black font-mono font-black text-[10px] uppercase rounded-xl shadow-md transition-all group-hover:scale-105">
                      Découvrir
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
