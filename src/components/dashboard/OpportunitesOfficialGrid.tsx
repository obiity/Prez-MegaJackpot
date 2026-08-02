"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Plane, Wallet, ChevronRight, Sparkles } from "lucide-react";

export function OpportunitesOfficialGrid() {
  const cards = [
    {
      id: "maison",
      title: "OPPORTUNITÉS MAISON",
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
      title: "OPPORTUNITÉS BUSINESS",
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
      title: "OPPORTUNITÉS FAMILLE",
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
      <div className="mb-6 flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbb505]/10 border border-[#fbb505]/40 text-[var(--color-mj-gold)] text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
          <Sparkles className="w-3 h-3" /> Vos Opportunités Majeures
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight">
          CHOISISSEZ VOTRE <span className="text-[var(--color-mj-gold)]">DESTIN</span>
        </h2>
        <p className="text-xs text-gray-400 font-mono mt-1">
          Tentez de remporter l&apos;un de nos 3 grands lots d&apos;exception.
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.id} href="/tickets" className="group block">
              <div
                className={`rounded-3xl bg-gradient-to-b ${card.bg} text-white ${card.glow} border ${card.border} transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[350px] hover:-translate-y-1.5`}
              >
                {/* Product Image Cover Header */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  
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
                    <p className="text-xs text-gray-300 leading-relaxed font-medium mb-3">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Grand Lot Highlight */}
                  <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 block mb-0.5">Grand Lot</span>
                      <span className={`font-heading font-extrabold text-sm sm:text-base ${card.accent}`}>{card.lot}</span>
                    </div>
                    <span className="px-3.5 py-2 bg-gradient-to-r from-[var(--color-mj-red)] to-red-600 group-hover:from-red-600 group-hover:to-[var(--color-mj-red)] text-white font-mono font-bold text-[10px] uppercase rounded-xl shadow-md transition-all">
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
