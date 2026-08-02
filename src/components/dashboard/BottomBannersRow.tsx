"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function BottomBannersRow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
      
      {/* Left Red Banner - Salaire Garanti */}
      <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-gradient-to-r from-[var(--color-mj-red-dark)] via-[#da151f] to-[#800911] p-6 sm:p-8 text-white shadow-xl flex items-center justify-between border border-white/10">
        <div className="relative z-10 max-w-sm text-left">
          <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-[var(--color-mj-gold)] mb-1">
            SALAIRE GARANTI
          </h3>
          <p className="font-mono font-bold text-lg text-white mb-4">
            2 000 000 FCFA / mois <br />
            <span className="text-xs font-normal text-gray-200">pendant 36 mois</span>
          </p>
          <Link href="/tickets">
            <button className="px-6 py-2.5 bg-[var(--color-mj-gold)] hover:bg-yellow-400 text-black font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer">
              DÉCOUVRIR
            </button>
          </Link>
        </div>

        <div className="relative w-44 h-36 sm:w-56 sm:h-44 shrink-0">
          <Image
            src="/family_salaire_garanti.png"
            alt="Famille Salaire Garanti"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Right Blue Banner - Devenez Ambassadeur */}
      <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#0b1c40] via-[#051128] to-[#010919] p-6 sm:p-8 text-white shadow-xl flex items-center justify-between border border-white/10">
        <div className="relative z-10 max-w-xs text-left">
          <h3 className="font-heading font-bold text-lg uppercase text-[var(--color-mj-gold)] mb-2">
            DEVENEZ AMBASSADEUR
          </h3>
          <p className="text-xs text-gray-300 font-medium leading-relaxed mb-4">
            Parrainez vos proches et gagnez des bonus à chaque nouveau joueur !
          </p>
          <Link href="/compte">
            <button className="px-5 py-2 bg-[var(--color-mj-red)] hover:bg-red-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer">
              EN SAVOIR PLUS
            </button>
          </Link>
        </div>

        <div className="relative w-36 h-32 sm:w-44 sm:h-36 shrink-0">
          <Image
            src="/ambassador_highfive.png"
            alt="Programme Ambassadeur"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

    </div>
  );
}
