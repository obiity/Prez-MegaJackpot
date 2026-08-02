"use client";

import React from "react";
import { ShieldCheck, CreditCard, Scale, Headphones, Smartphone } from "lucide-react";

export function TrustFooterBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Jeux 100% sécurisés",
      desc: "Vos données sont protégées",
    },
    {
      icon: CreditCard,
      title: "Paiements rapides",
      desc: "Wave, Orange Money, Free Money et cartes",
    },
    {
      icon: Scale,
      title: "Transparence totale",
      desc: "Tirages certifiés et contrôlés",
    },
    {
      icon: Headphones,
      title: "Assistance 7j/7",
      desc: "08h00 - 22h00",
    },
    {
      icon: Smartphone,
      title: "Disponible partout",
      desc: "Sur mobile, tablette et desktop",
    },
  ];

  return (
    <div className="w-full bg-[#020b18] border-t border-white/10 py-6 px-4 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-left">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-mj-gold)] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-sans leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
