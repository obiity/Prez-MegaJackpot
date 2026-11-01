"use client";

import Link from "next/link";
import { Users, ShieldCheck, Smartphone, Heart, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ChangerDeVieSection() {
  const { t } = useLanguage();
  const icons = [Users, ShieldCheck, Smartphone, Heart];

  return (
    <div className="space-y-6 text-center flex flex-col items-center py-2 relative">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#021a3c] dark:text-white uppercase tracking-wide leading-tight">
          {t.changerDeVie.line1}
        </h2>
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-[var(--color-mj-red)] dark:text-[var(--color-mj-gold)] uppercase tracking-wide leading-tight drop-shadow-sm">
          {t.changerDeVie.line2}
        </h2>
      </div>

      {/* Star Separator Line - Centered */}
      <div className="flex items-center justify-center gap-3 py-1 w-full">
        <div className="h-[1.5px] w-20 sm:w-28 bg-gradient-to-r from-transparent via-[var(--color-mj-gold)]/60 to-[var(--color-mj-gold)]" />
        <Star className="w-4 h-4 text-[var(--color-mj-gold)] fill-[var(--color-mj-gold)] animate-pulse shrink-0" />
        <div className="h-[1.5px] w-20 sm:w-28 bg-gradient-to-r from-[var(--color-mj-gold)] via-[var(--color-mj-gold)]/60 to-transparent" />
      </div>

      {/* 4 Key Value Props */}
      <div className="space-y-3.5 py-1 text-left w-full max-w-md">
        {t.changerDeVie.props.map((text, idx) => {
          const IconComp = icons[idx];
          return (
            <div key={idx} className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-full bg-[var(--color-mj-red)] dark:bg-[#102a58] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#da151f]/30 dark:shadow-none border border-red-400/40 dark:border-white/10 group-hover:scale-105 transition-all">
                <IconComp className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-sm sm:text-base font-bold text-[#021a3c] dark:text-white leading-snug">
                {text}
              </span>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="pt-2 w-full flex justify-center">
        <Link href="/#jeux" className="block w-full max-w-md">
          <button className="w-full py-4 px-6 rounded-full bg-[var(--color-mj-gold)] hover:brightness-110 text-[#021a3c] font-heading font-black text-sm uppercase tracking-widest shadow-[0_6px_25px_rgba(251,181,5,0.45)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-between cursor-pointer">
            <span className="flex-1 text-center font-black tracking-wider text-[#021a3c]">
              {t.changerDeVie.cta}
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
