"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, Plane, Wallet, Phone } from "lucide-react";

export function DerniersGagnantsGrid() {
  const winners = [
    {
      id: 1,
      name: "Mamadou S.",
      prize: "Villa gagnée",
      draw: "Tirage Maison",
      date: "Juin 2026",
      color: "border-red-500/40 bg-gradient-to-b from-[#102a58] to-[#041432]",
      icon: Home,
    },
    {
      id: 2,
      name: "Aïssatou N.",
      prize: "Voyage Turquie",
      draw: "Tirage Voyage",
      date: "Mai 2026",
      color: "border-blue-500/40 bg-gradient-to-b from-[#102a58] to-[#041432]",
      icon: Plane,
    },
    {
      id: 3,
      name: "Cheikh B.",
      prize: "2 000 000 FCFA / mois",
      draw: "Salaire Garanti",
      date: "Avril 2026",
      color: "border-green-500/40 bg-gradient-to-b from-[#08381c] to-[#031d0e]",
      icon: Wallet,
    },
    {
      id: 4,
      name: "Fatoumata K.",
      prize: "iPhone 15 Pro Max",
      draw: "Tirage Digital",
      date: "Mars 2026",
      color: "border-purple-500/40 bg-gradient-to-b from-[#24103c] to-[#120621]",
      icon: Phone,
    },
  ];

  return (
    <div className="mb-8">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-heading font-extrabold text-[var(--text-primary)] uppercase tracking-wide">
          NOS DERNIERS GAGNANTS
        </h2>
        <Link
          href="/resultats"
          className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)] transition-colors flex items-center gap-1"
        >
          Voir tous <ChevronRight className="w-3.5 h-3.5" />
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
                <h4 className="font-heading font-bold text-sm text-white truncate">{winner.name}</h4>
                <p className="text-xs text-[var(--color-mj-gold)] font-medium truncate">{winner.prize}</p>
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
