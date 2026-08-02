"use client";

import React from "react";
import { Home, Ticket, Layers, Gift } from "lucide-react";

export function CommentCaMarcheGrid() {
  const steps = [
    { num: 1, title: "Choisissez votre jeu", icon: Home },
    { num: 2, title: "Achetez vos tickets", icon: Ticket },
    { num: 3, title: "Participez au tirage", icon: Layers },
    { num: 4, title: "Gagnez et changez de vie", icon: Gift },
  ];

  return (
    <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-[#07132c] to-[#010919] border border-white/10 text-white shadow-xl">
      <h2 className="text-xl font-heading font-extrabold text-white uppercase tracking-wide mb-6 text-left">
        COMMENT ÇA MARCHE ?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.num} className="flex flex-col items-center text-center group">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/15 flex items-center justify-center text-white shadow-md group-hover:border-[#fbb505] group-hover:scale-105 transition-all">
                  <Icon className="w-7 h-7 text-[var(--color-mj-gold)]" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-mj-red)] text-white font-mono font-bold text-xs flex items-center justify-center shadow-md">
                  {step.num}
                </span>
              </div>
              <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wide">
                {step.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
