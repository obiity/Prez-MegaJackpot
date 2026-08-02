"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home, Plane, Wallet, Phone, Trophy } from "lucide-react";

export function DerniersGagnantsOfficialGrid() {
  const winners = [
    {
      id: 1,
      name: "Mamadou S.",
      city: "Dakar",
      prize: "Villa de luxe (100M FCFA)",
      draw: "Tirage Maison",
      date: "Juin 2026",
      color: "border-amber-500/40 bg-gradient-to-b from-[#122448] to-[#04122d]",
      icon: Home,
    },
    {
      id: 2,
      name: "Aïssatou N.",
      city: "Thiès",
      prize: "Voyage & Capital (15M FCFA)",
      draw: "Tirage Business",
      date: "Mai 2026",
      color: "border-red-500/40 bg-gradient-to-b from-[#2e090e] to-[#0f0204]",
      icon: Plane,
    },
    {
      id: 3,
      name: "Cheikh B.",
      city: "Saint-Louis",
      prize: "2 000 000 FCFA / mois (36 mois)",
      draw: "Tirage Famille",
      date: "Avril 2026",
      color: "border-blue-500/40 bg-gradient-to-b from-[#0a234e] to-[#03112c]",
      icon: Wallet,
    },
    {
      id: 4,
      name: "Fatoumata K.",
      city: "Ziguinchor",
      prize: "iPhone 15 Pro Max & Cash",
      draw: "Tirage Digital",
      date: "Mars 2026",
      color: "border-purple-500/40 bg-gradient-to-b from-[#251040] to-[#10051e]",
      icon: Phone,
    },
  ];

  return (
    <div className="mb-8">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-heading font-extrabold text-[var(--text-primary)] uppercase tracking-wide">
          NOS DERNIERS GAGNANTS CERTIFIÉS
        </h2>
        <Link
          href="/resultats"
          className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)] transition-colors flex items-center gap-1"
        >
          Voir tous les gagnants <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {winners.map((winner) => {
          const Icon = winner.icon;
          return (
            <div
              key={winner.id}
              className={`p-4 rounded-2xl ${winner.color} border text-white shadow-lg flex items-center gap-3 transition-transform hover:-translate-y-1`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <Icon className="w-6 h-6 text-[var(--color-mj-gold)]" />
              </div>
              <div className="text-left overflow-hidden">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-heading font-bold text-sm text-white truncate">{winner.name}</h4>
                  <span className="text-[10px] text-gray-400 font-mono">({winner.city})</span>
                </div>
                <p className="text-xs text-[var(--color-mj-gold)] font-bold truncate">{winner.prize}</p>
                <span className="text-[10px] font-mono text-gray-400 block mt-0.5">
                  {winner.draw} • {winner.date}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
