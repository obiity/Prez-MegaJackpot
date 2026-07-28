"use client";

import { Home, Ticket, Trophy, User, Sparkles } from "lucide-react"
import Link from "next/link"

export function DesktopNav() {
  return (
    <nav className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[var(--bg-surface)]/80 backdrop-blur-xl border border-[var(--border-subtle)] shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors duration-300 rounded-[40px]">
      <div className="flex items-center justify-between px-10 h-20 w-[600px] max-w-[90vw]">
        <Link href="/" className="flex flex-col items-center justify-center gap-1 text-[var(--text-primary)] group transition-colors">
          <Home className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Accueil</span>
        </Link>
        
        {/* Central Group */}
        <div className="flex items-center gap-2">
          <Link href="/tickets" className="flex flex-col items-center justify-center gap-1 text-[var(--text-secondary)] opacity-70 hover:opacity-100 hover:text-[var(--color-mj-gold)] group transition-all">
          <Ticket className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Tickets</span>
        </Link>

        {/* Central Play Button */}
        <div className="flex justify-center relative -top-6 px-4">
          <button 
            onClick={() => { const el = document.getElementById('jeux'); if(el) el.scrollIntoView({behavior: 'smooth'}) }}
            className="h-20 px-12 rounded-full bg-gradient-to-br from-[var(--color-mj-red)] to-[var(--color-mj-red-dark)] flex items-center justify-center text-white shadow-xl shadow-[var(--color-mj-red)]/30 border-[6px] border-[var(--bg-surface)] transform transition-all hover:scale-105 active:scale-95 group"
          >
            <span className="font-heading text-2xl uppercase tracking-widest font-bold group-hover:scale-110 transition-transform duration-300 mt-1">JOUER</span>
          </button>
        </div>

        <Link href="/resultats" className="flex flex-col items-center justify-center gap-1 text-[var(--text-secondary)] opacity-70 hover:opacity-100 hover:text-[var(--color-mj-gold)] group transition-all">
          <Trophy className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Résultats</span>
        </Link>
        </div>

        <Link href="/compte" className="flex flex-col items-center justify-center gap-1 text-[var(--text-secondary)] opacity-70 hover:opacity-100 hover:text-[var(--color-mj-gold)] group transition-all">
          <User className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Compte</span>
        </Link>
      </div>
    </nav>
  )
}
