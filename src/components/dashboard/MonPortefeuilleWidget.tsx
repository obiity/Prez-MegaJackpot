"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  PlusCircle,
  ArrowUpRight,
  Ticket,
  Wallet,
  History,
  Users,
} from "lucide-react";
import { toast } from "sonner";

export function MonPortefeuilleWidget() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0c1a3a] to-[#04112c] border border-white/10 text-white shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-300 flex items-center gap-1.5 font-bold">
          <Wallet className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" /> MON PORTEFEUILLE
        </span>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="text-gray-400 hover:text-white transition-colors p-1 cursor-pointer"
          title="Afficher/Masquer le solde"
        >
          {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>
      </div>

      {/* Balance Display */}
      <div className="font-mono font-bold text-2xl sm:text-3xl text-white mb-5 tracking-tight text-left">
        {showBalance ? "125 750 FCFA" : "•••••••• FCFA"}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <button
          onClick={() => toast.info("Ouverture du rechargement...")}
          className="py-2.5 bg-[var(--color-mj-red)] hover:bg-red-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
        >
          <PlusCircle className="w-3.5 h-3.5" /> RECHARGER
        </button>
        <button
          onClick={() => toast.info("Ouverture du formulaire de retrait...")}
          className="py-2.5 bg-black/40 hover:bg-black/60 text-white border border-white/15 font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
        >
          <ArrowUpRight className="w-3.5 h-3.5" /> RETIRER
        </button>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-4 gap-2 pt-4 border-t border-white/10 text-center">
        <Link href="/tickets" className="group flex flex-col items-center">
          <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-[var(--color-mj-gold)]/20 flex items-center justify-center mb-1 text-gray-300 group-hover:text-[var(--color-mj-gold)] transition-all">
            <Ticket className="w-4 h-4" />
          </div>
          <span className="text-[9px] text-gray-400 group-hover:text-white font-medium">Mes tickets</span>
        </Link>

        <Link href="/tickets" className="group flex flex-col items-center">
          <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-[var(--color-mj-gold)]/20 flex items-center justify-center mb-1 text-gray-300 group-hover:text-[var(--color-mj-gold)] transition-all">
            <Wallet className="w-4 h-4" />
          </div>
          <span className="text-[9px] text-gray-400 group-hover:text-white font-medium">Participations</span>
        </Link>

        <Link href="/compte" className="group flex flex-col items-center">
          <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-[var(--color-mj-gold)]/20 flex items-center justify-center mb-1 text-gray-300 group-hover:text-[var(--color-mj-gold)] transition-all">
            <History className="w-4 h-4" />
          </div>
          <span className="text-[9px] text-gray-400 group-hover:text-white font-medium">Transactions</span>
        </Link>

        <Link href="/compte" className="group flex flex-col items-center">
          <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-[var(--color-mj-gold)]/20 flex items-center justify-center mb-1 text-gray-300 group-hover:text-[var(--color-mj-gold)] transition-all">
            <Users className="w-4 h-4" />
          </div>
          <span className="text-[9px] text-gray-400 group-hover:text-white font-medium">Parrainage</span>
        </Link>
      </div>
    </div>
  );
}
