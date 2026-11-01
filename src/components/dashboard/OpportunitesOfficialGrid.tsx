"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Plane, Wallet, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function OpportunitesOfficialGrid() {
  const { t } = useLanguage();

  const cards = [
    {
      id: "maison",
      title: t.opportunities.cards.maison.title,
      subtitle: t.opportunities.cards.maison.subtitle,
      freq: t.opportunities.cards.maison.freq,
      icon: Home,
      image: "/MAISON.png",
      lot: t.opportunities.cards.maison.lot,
    },
    {
      id: "business",
      title: t.opportunities.cards.business.title,
      subtitle: t.opportunities.cards.business.subtitle,
      freq: t.opportunities.cards.business.freq,
      icon: Plane,
      image: "/BUSINESS.png",
      lot: t.opportunities.cards.business.lot,
    },
    {
      id: "famille",
      title: t.opportunities.cards.famille.title,
      subtitle: t.opportunities.cards.famille.subtitle,
      freq: t.opportunities.cards.famille.freq,
      icon: Wallet,
      image: "/FAMILLE.png",
      lot: t.opportunities.cards.famille.lot,
    },
  ];

  return (
    <div className="mb-10 text-center">
      {/* Header Row */}
      <div className="mb-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbb505]/10 border border-[#fbb505]/40 text-[var(--color-mj-gold)] text-[10px] font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(251,181,5,0.2)]">
          <Sparkles className="w-3.5 h-3.5" /> {t.opportunities.badge}
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-[#021a3c] dark:text-white uppercase tracking-tighter drop-shadow-xl mb-3">
          {t.opportunities.headingPart1}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mj-gold)] to-amber-500 drop-shadow-[0_0_25px_rgba(251,181,5,0.6)]">
            {t.opportunities.headingHighlight}
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[var(--color-mj-gold)] to-transparent opacity-50 mb-4 rounded-full"></div>
        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-medium max-w-lg">
          {t.opportunities.subtitle}
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.id} href="/tickets" className="group block h-full">
              <div
                className="h-full rounded-3xl bg-gradient-to-b from-[#da151f] to-[#a00c17] dark:from-[#102a58] dark:to-[#021a3c] text-white shadow-xl hover:shadow-2xl border border-[#fbb505]/40 dark:border-white/15 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[350px] hover:-translate-y-1.5 group-hover:border-[var(--color-mj-gold)]"
              >
                {/* Product Image Cover Header */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:brightness-110 transition-[filter] duration-500"
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
                    <p className="text-xs text-red-100 dark:text-gray-300 leading-relaxed font-medium mb-3">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Grand Lot Highlight */}
                  <div className="pt-3.5 border-t border-white/20 dark:border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-amber-200 dark:text-gray-400 block mb-0.5">
                        {t.opportunities.grandPrizeLabel}
                      </span>
                      <span
                        className={`font-heading font-extrabold text-sm sm:text-base ${
                          card.id === "maison"
                            ? "text-[#fbb505]"
                            : card.id === "business"
                            ? "text-white dark:text-[var(--color-mj-red)]"
                            : "text-[#fbb505]"
                        }`}
                      >
                        {card.lot}
                      </span>
                    </div>
                    <span className="px-3.5 py-2 bg-[var(--color-mj-gold)] text-[#021a3c] font-mono font-black text-[10px] uppercase rounded-xl shadow-md transition-all group-hover:scale-105">
                      {t.opportunities.discoverCta}
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
