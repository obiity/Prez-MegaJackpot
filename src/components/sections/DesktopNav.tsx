"use client";

import { Home, Ticket, Trophy, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DesktopNav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isTickets = pathname === "/tickets";
  const isResultats = pathname === "/resultats";
  const isCompte = pathname === "/compte";

  return (
    <nav className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[var(--bg-surface)]/85 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-colors duration-300 rounded-[40px]">
      <div className="flex items-center justify-between px-10 h-20 w-[640px] max-w-[90vw]">
        {/* 1. Accueil */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-1 group transition-all ${
            isHome
              ? "text-[var(--color-mj-gold)] font-black scale-105 drop-shadow-[0_0_12px_rgba(251,181,5,0.5)]"
              : "text-gray-400 hover:text-white opacity-80 hover:opacity-100"
          }`}
        >
          <Home className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className={`text-[10px] uppercase tracking-wider ${isHome ? "font-black text-[var(--color-mj-gold)]" : "font-semibold"}`}>
            Accueil
          </span>
        </Link>

        {/* Central Group */}
        <div className="flex items-center gap-6">
          {/* 2. Tickets */}
          <Link
            href="/tickets"
            className={`flex flex-col items-center justify-center gap-1 group transition-all ${
              isTickets
                ? "text-[var(--color-mj-gold)] font-black scale-105 drop-shadow-[0_0_12px_rgba(251,181,5,0.5)]"
                : "text-gray-400 hover:text-white opacity-80 hover:opacity-100"
            }`}
          >
            <Ticket className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className={`text-[10px] uppercase tracking-wider ${isTickets ? "font-black text-[var(--color-mj-gold)]" : "font-semibold"}`}>
              Tickets
            </span>
          </Link>

          {/* Central Play Button */}
          <div className="flex justify-center relative -top-6 px-2">
            <button
              onClick={() => {
                const el = document.getElementById("jeux");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                else window.location.href = "/#jeux";
              }}
              className="h-20 px-12 rounded-full bg-gradient-to-br from-[var(--color-mj-red)] to-[var(--color-mj-red-dark)] flex items-center justify-center text-white shadow-xl shadow-[var(--color-mj-red)]/40 border-[6px] border-[var(--bg-surface)] transform transition-all hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span className="font-heading text-2xl uppercase tracking-widest font-black group-hover:scale-110 transition-transform duration-300 mt-1">
                JOUER
              </span>
            </button>
          </div>

          {/* 3. Résultats */}
          <Link
            href="/resultats"
            className={`flex flex-col items-center justify-center gap-1 group transition-all ${
              isResultats
                ? "text-[var(--color-mj-gold)] font-black scale-105 drop-shadow-[0_0_12px_rgba(251,181,5,0.5)]"
                : "text-gray-400 hover:text-white opacity-80 hover:opacity-100"
            }`}
          >
            <Trophy className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className={`text-[10px] uppercase tracking-wider ${isResultats ? "font-black text-[var(--color-mj-gold)]" : "font-semibold"}`}>
              Résultats
            </span>
          </Link>
        </div>

        {/* 4. Compte */}
        <Link
          href="/compte"
          className={`flex flex-col items-center justify-center gap-1 group transition-all ${
            isCompte
              ? "text-[var(--color-mj-gold)] font-black scale-105 drop-shadow-[0_0_12px_rgba(251,181,5,0.5)]"
              : "text-gray-400 hover:text-white opacity-80 hover:opacity-100"
          }`}
        >
          <User className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className={`text-[10px] uppercase tracking-wider ${isCompte ? "font-black text-[var(--color-mj-gold)]" : "font-semibold"}`}>
            Compte
          </span>
        </Link>
      </div>
    </nav>
  );
}
