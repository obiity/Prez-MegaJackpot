"use client";

import { Home, Ticket, Trophy, User, Sparkles } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)] pointer-events-none">
      {/* Solid background layer */}
      <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-[var(--bg-surface)]/80 backdrop-blur-xl border-t border-[var(--border-subtle)] shadow-[0_-8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_-8px_32px_rgba(0,0,0,0.4)] pointer-events-auto" />
      
      <div className="relative z-10 flex items-end justify-between px-6 pb-4 h-24 pointer-events-auto">
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${pathname === '/' ? 'text-[var(--color-mj-gold)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          <Home className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider drop-shadow-md">Accueil</span>
        </Link>
        
        {/* Central Group */}
        <div className="flex items-end gap-0 sm:gap-2">
          <Link 
          href="/tickets" 
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${pathname === '/tickets' ? 'text-[var(--color-mj-gold)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          <Ticket className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider drop-shadow-md">Tickets</span>
        </Link>

        {/* Central Play Button */}
        <div className="flex justify-center relative -top-4">
          {/* Halo Container */}
          <div className="p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 backdrop-blur-xl shadow-lg">
            <button 
              onClick={() => { const el = document.getElementById('jeux'); if(el) el.scrollIntoView({behavior: 'smooth'}); else window.location.href = '/#jeux'; }}
              className="h-14 px-8 rounded-full bg-[var(--color-mj-red)] flex items-center justify-center text-white shadow-[0_0_20px_rgba(218,21,31,0.6)] transform transition-transform hover:scale-105 active:scale-95"
            >
              <span className="font-heading text-base uppercase tracking-widest font-bold mt-1">JOUER</span>
            </button>
          </div>
        </div>

        <Link 
          href="/resultats" 
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${pathname === '/resultats' ? 'text-[var(--color-mj-gold)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          <Trophy className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider drop-shadow-md">Résultats</span>
        </Link>
        </div>

        <Link 
          href="/compte" 
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${pathname === '/compte' ? 'text-[var(--color-mj-gold)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          <User className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider drop-shadow-md">Compte</span>
        </Link>
      </div>
    </nav>
  )
}
