"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function HeroSUVCard() {
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 26, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: prev.minutes > 0 ? prev.minutes - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-white dark:bg-[#07132a] border border-slate-200 dark:border-white/15 hover:border-[var(--color-mj-red)]/70 shadow-xl hover:shadow-2xl my-8 min-h-[440px] sm:min-h-[480px] flex flex-col justify-between group transition-all duration-500">
      
      {/* 100% Full-Frame Background Image with Interactive Hover Scale */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <Image
          src="/tirage_du_mois_suv_banner.png"
          alt="MEGA JACKPOT - Tirage du Mois SUV Blanc, Moto, iPhone 17 & TV"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-right transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Further Reduced Opacity Black Overlays for Maximum Image Clarity & Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 p-6 sm:p-10 pb-12 sm:pb-14 flex-1 flex flex-col justify-center">
        <div className="text-left space-y-4 max-w-xl sm:max-w-2xl">
          
          {/* Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[var(--color-mj-red)] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-full shadow-[0_0_15px_rgba(218,21,31,0.5)]">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              TIRAGE DU MOIS - JUILLET 2026
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md border border-[#fbb505]/40 text-[var(--color-mj-gold)] text-[11px] font-mono font-bold uppercase tracking-wider rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" />
              Tirage Certifié Huissier
            </div>
          </div>

          {/* Main Title & Prize Highlights */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tight leading-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              GAGNEZ 1 SUV
            </h2>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[var(--color-mj-gold)] uppercase tracking-wide drop-shadow-[0_0_20px_rgba(251,181,5,0.6)] mt-1">
              + MOTOS + IPHONE 17 + TV
            </div>
          </div>

          {/* Secondary Lots Checklist */}
          <ul className="space-y-1.5 py-1 text-xs sm:text-sm font-medium text-gray-100 drop-shadow-md">
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[var(--color-mj-red)] text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-md">✓</span>
              <span className="font-semibold">5 motos</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[var(--color-mj-red)] text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-md">✓</span>
              <span className="font-semibold">10 iPhone 17</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[var(--color-mj-red)] text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-md">✓</span>
              <span className="font-semibold">20 Smart TV</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[var(--color-mj-red)] text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-md">✓</span>
              <span className="font-semibold">500 tickets gratuits</span>
            </li>
          </ul>

          {/* Countdown Clock Block */}
          <div className="pt-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-200 block mb-2 font-bold drop-shadow">
              Tirage certifié dans
            </span>
            <div className="flex items-center gap-2.5">
              <div className="text-center px-3.5 py-2 bg-black/75 backdrop-blur-md rounded-xl border border-[#fbb505]/30 min-w-[54px] shadow-lg">
                <span className="font-mono font-bold text-lg text-white block">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[9px] font-mono text-[var(--color-mj-gold)] uppercase font-bold">Jours</span>
              </div>
              <div className="text-center px-3.5 py-2 bg-black/75 backdrop-blur-md rounded-xl border border-[#fbb505]/30 min-w-[54px] shadow-lg">
                <span className="font-mono font-bold text-lg text-white block">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[9px] font-mono text-[var(--color-mj-gold)] uppercase font-bold">Heures</span>
              </div>
              <div className="text-center px-3.5 py-2 bg-black/75 backdrop-blur-md rounded-xl border border-[#fbb505]/30 min-w-[54px] shadow-lg">
                <span className="font-mono font-bold text-lg text-white block">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[9px] font-mono text-[var(--color-mj-gold)] uppercase font-bold">Min</span>
              </div>
              <div className="text-center px-3.5 py-2 bg-black/75 backdrop-blur-md rounded-xl border border-[#fbb505]/30 min-w-[54px] shadow-lg">
                <span className="font-mono font-bold text-lg text-white block">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[9px] font-mono text-[var(--color-mj-gold)] uppercase font-bold">Sec</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-3">
            <Link href="/tickets">
              <button className="px-8 py-3.5 bg-gradient-to-r from-[var(--color-mj-red)] to-[#ff2a35] hover:to-[var(--color-mj-red)] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(218,21,31,0.6)] transition-all transform hover:scale-105 cursor-pointer">
                PARTICIPER À L'OPPORTUNITÉ
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
