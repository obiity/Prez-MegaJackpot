"use client";

import Link from "next/link";
import { Users, ShieldCheck, Smartphone, Heart, ChevronRight, Star } from "lucide-react";

export function ChangerDeVieSection() {
  const valueProps = [
    {
      icon: Users,
      text: "Des milliers de gagnants chaque année",
    },
    {
      icon: ShieldCheck,
      text: "Tirages transparents et sécurisés",
    },
    {
      icon: Smartphone,
      text: "Jouez facilement où que vous soyez",
    },
    {
      icon: Heart,
      text: "Un impact positif sur des milliers de vies",
    },
  ];

  return (
    <div className="space-y-6 text-left py-2 relative">
      {/* Title */}
      <div>
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#021a3c] dark:text-white uppercase tracking-wide leading-tight">
          CHAQUE TICKET,
        </h2>
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-[var(--color-mj-red)] dark:text-[var(--color-mj-gold)] uppercase tracking-wide leading-tight drop-shadow-sm">
          UNE CHANCE DE CHANGER DE VIE
        </h2>
      </div>

      {/* Star Separator Line */}
      <div className="flex items-center gap-3 py-1">
        <div className="h-[1.5px] w-24 bg-gradient-to-r from-[var(--color-mj-gold)] via-[var(--color-mj-gold)]/60 to-transparent" />
        <Star className="w-4 h-4 text-[var(--color-mj-gold)] fill-[var(--color-mj-gold)] animate-pulse" />
        <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-[var(--color-mj-gold)]/60 to-transparent" />
      </div>

      {/* 4 Key Value Props */}
      <div className="space-y-3.5 py-1">
        {valueProps.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-full bg-[var(--color-mj-red)] dark:bg-[#102a58] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#da151f]/30 dark:shadow-none border border-red-400/40 dark:border-white/10 group-hover:scale-105 transition-all">
                <IconComp className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-sm sm:text-base font-bold text-[#021a3c] dark:text-white leading-snug">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <Link href="/#jeux" className="block">
          <button className="w-full sm:max-w-md py-4 px-6 rounded-full bg-gradient-to-r from-[#fbb505] via-[#ffd000] to-[#fbb505] hover:brightness-110 text-black font-heading font-black text-sm uppercase tracking-widest shadow-[0_6px_25px_rgba(251,181,5,0.45)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-between cursor-pointer">
            <span className="flex-1 text-center font-black tracking-wider text-black">
              JOUER MAINTENANT
            </span>
            <div className="w-8 h-8 rounded-full bg-white text-[#da151f] flex items-center justify-center shrink-0 shadow-md">
              <ChevronRight className="w-5 h-5 stroke-[3]" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

