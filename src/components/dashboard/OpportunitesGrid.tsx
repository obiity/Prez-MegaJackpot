"use client";

import React from "react";
import Link from "next/link";
import { Home, Plane, Wallet, Gift, ChevronRight } from "lucide-react";

export function OpportunitesGrid() {
  const cards = [
    {
      id: "maison",
      title: "MAISON",
      subtitle: "Gagnez une villa de rêve",
      freq: "2 tirages/an",
      bg: "bg-gradient-to-b from-[#da151f] to-[#a00c17]",
      icon: Home,
    },
    {
      id: "business",
      title: "BUSINESS LOTTERY",
      subtitle: "Voyages & 10 000 000 FCFA",
      freq: "4 tirages/an",
      bg: "bg-gradient-to-b from-[#102a58] to-[#061533]",
      icon: Plane,
    },
    {
      id: "salaire",
      title: "SALAIRE GARANTI",
      subtitle: "2 000 000 FCFA / mois pendant 36 mois",
      freq: "1 tirage/an",
      bg: "bg-gradient-to-b from-[#0a6332] to-[#043d1e]",
      icon: Wallet,
    },
    {
      id: "mensuel",
      title: "TIRAGES MENSUELS",
      subtitle: "Des lots chaque mois",
      freq: "12 tirages/an",
      bg: "bg-gradient-to-b from-[#d49600] to-[#8a6200]",
      icon: Gift,
    },
  ];

  return (
    <div className="mb-8">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-heading font-extrabold text-[var(--text-primary)] uppercase tracking-wide">
          NOS OPPORTUNITÉS
        </h2>
        <Link
          href="/tickets"
          className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)] transition-colors flex items-center gap-1"
        >
          Voir toutes les opportunités <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 4 Color Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.id} href="/tickets" className="group block">
              <div
                className={`p-6 rounded-2xl ${card.bg} text-white shadow-xl flex flex-col justify-between min-h-[190px] border border-white/10 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden`}
              >
                {/* Top Icon */}
                <div className="w-12 h-12 rounded-xl bg-black/20 backdrop-blur-md flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading font-black text-lg uppercase tracking-wider mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-white/80 font-medium leading-snug mb-3">
                    {card.subtitle}
                  </p>
                </div>

                {/* Frequency Pill */}
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70 bg-black/30 px-2.5 py-1 rounded inline-block self-start">
                  {card.freq}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
