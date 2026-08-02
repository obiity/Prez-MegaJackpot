"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function TirageDuMoisCard() {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-[#0a1738] to-[#021028] border border-white/10 p-6 md:p-8 text-white shadow-2xl mb-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left Info Column */}
        <div className="md:col-span-7 text-left space-y-3">
          <h2 className="text-xl font-heading font-extrabold text-white uppercase tracking-wide">
            TIRAGE DU MOIS
          </h2>
          <div className="inline-block px-3 py-1 bg-[var(--color-mj-gold)] text-black font-mono font-bold text-xs rounded uppercase">
            JUILLET 2026
          </div>

          <h3 className="text-3xl font-heading font-black text-white uppercase mt-2">
            1 SUV
          </h3>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-300 font-medium py-1">
            <span>• 5 motos</span>
            <span>• 10 iPhone 15</span>
            <span>• 20 Smart TV</span>
            <span>• 500 tickets gratuits</span>
          </div>

          {/* Progress Bar */}
          <div className="pt-2">
            <div className="flex justify-between text-xs font-mono mb-1.5 text-gray-300">
              <span>Progression</span>
              <span className="font-bold text-[var(--color-mj-gold)]">65%</span>
            </div>
            <div className="w-full h-2.5 bg-black/60 rounded-full overflow-hidden border border-white/10">
              <div className="h-full bg-gradient-to-r from-[var(--color-mj-red)] to-[var(--color-mj-gold)] w-[65%] rounded-full shadow-[0_0_10px_rgba(251,181,5,0.8)]" />
            </div>
            <span className="text-[10px] font-mono text-gray-400 block mt-1">
              65 230 / 100 000 tickets vendus
            </span>
          </div>

          {/* Red CTA Button */}
          <div className="pt-3">
            <Link href="/tickets">
              <button className="w-full sm:w-auto px-8 py-3 bg-[var(--color-mj-red)] hover:bg-red-600 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer">
                PARTICIPER
              </button>
            </Link>
          </div>
        </div>

        {/* Right Gift Box Image Showcase */}
        <div className="md:col-span-5 relative flex items-center justify-center h-48 sm:h-56">
          <Image
            src="/gift_box_confetti.png"
            alt="Cadeau Tirage du Mois"
            fill
            className="object-contain object-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </div>

      </div>
    </div>
  );
}
