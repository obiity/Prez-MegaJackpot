"use client";

import { Home, Ticket, Trophy, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isTickets = pathname === "/tickets";
  const isResultats = pathname === "/resultats";
  const isCompte = pathname === "/compte";

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)] pointer-events-none">
      {/* Background layer */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[var(--bg-surface)]/90 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.4)] pointer-events-auto" />

      {/* Grid container ensuring equal 20% width per item */}
      <div className="relative z-10 grid grid-cols-5 items-center h-16 px-1 max-w-md mx-auto pointer-events-auto">
        {/* 1. Accueil */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-0.5 py-1 transition-all ${
            isHome
              ? "text-[var(--color-mj-gold)] font-bold scale-105"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Home className="h-5 w-5" />
          <span className={`text-[10px] tracking-tight ${isHome ? "font-extrabold text-[var(--color-mj-gold)]" : "font-medium"}`}>
            Accueil
          </span>
        </Link>

        {/* 2. Tickets */}
        <Link
          href="/tickets"
          className={`flex flex-col items-center justify-center gap-0.5 py-1 transition-all ${
            isTickets
              ? "text-[var(--color-mj-gold)] font-bold scale-105"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Ticket className="h-5 w-5" />
          <span className={`text-[10px] tracking-tight ${isTickets ? "font-extrabold text-[var(--color-mj-gold)]" : "font-medium"}`}>
            Tickets
          </span>
        </Link>

        {/* 3. Central Play Button */}
        <div className="flex justify-center items-center relative -top-3">
          <div className="p-1 rounded-full border border-white/15 bg-[var(--bg-surface)]/80 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => {
                const el = document.getElementById("jeux");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                else window.location.href = "/#jeux";
              }}
              className="h-11 px-4 rounded-full bg-[var(--color-mj-red)] flex items-center justify-center text-white shadow-[0_0_16px_rgba(218,21,31,0.6)] transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="font-heading text-xs uppercase tracking-wider font-bold">
                JOUER
              </span>
            </button>
          </div>
        </div>

        {/* 4. Résultats */}
        <Link
          href="/resultats"
          className={`flex flex-col items-center justify-center gap-0.5 py-1 transition-all ${
            isResultats
              ? "text-[var(--color-mj-gold)] font-bold scale-105"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Trophy className="h-5 w-5" />
          <span className={`text-[10px] tracking-tight ${isResultats ? "font-extrabold text-[var(--color-mj-gold)]" : "font-medium"}`}>
            Résultats
          </span>
        </Link>

        {/* 5. Compte */}
        <Link
          href="/compte"
          className={`flex flex-col items-center justify-center gap-0.5 py-1 transition-all ${
            isCompte
              ? "text-[var(--color-mj-gold)] font-bold scale-105"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <User className="h-5 w-5" />
          <span className={`text-[10px] tracking-tight ${isCompte ? "font-extrabold text-[var(--color-mj-gold)]" : "font-medium"}`}>
            Compte
          </span>
        </Link>
      </div>
    </nav>
  );
}
