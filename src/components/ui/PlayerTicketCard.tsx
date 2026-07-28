"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Shield, QrCode } from "lucide-react";
import type { PlayerTicket } from "@/lib/mockData";

interface PlayerTicketCardProps {
  ticket: PlayerTicket;
  index: number;
}

export function PlayerTicketCard({ ticket, index }: PlayerTicketCardProps) {
  const isMaison = ticket.productId === 'maison';
  const isBusiness = ticket.productId === 'business';
  const isFamille = ticket.productId === 'famille';

  const accentColor = isMaison ? 'var(--color-mj-gold)' : isBusiness ? 'var(--color-mj-red)' : 'var(--color-mj-blue)';
  const bgGradient = isMaison ? 'from-yellow-50 to-transparent dark:from-yellow-900/10' : 
                     isBusiness ? 'from-red-50 to-transparent dark:from-red-900/10' : 
                     'from-blue-50 to-transparent dark:from-blue-900/10';

  const Icon = isMaison ? Home : isBusiness ? Briefcase : Shield;

  const getStatusBadge = () => {
    switch (ticket.status) {
      case 'en_attente':
        return <span className="px-3 py-1 bg-[var(--color-mj-gold)]/10 text-[var(--color-mj-gold)] border border-[var(--color-mj-gold)]/20 rounded-full text-xs font-bold uppercase tracking-wider">En attente du tirage</span>;
      case 'gagnant':
        return <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 rounded-full text-xs font-bold uppercase tracking-wider">Gagnant !</span>;
      case 'perdu':
        return <span className="px-3 py-1 bg-gray-500/10 text-gray-500 dark:text-gray-400 border border-gray-500/20 rounded-full text-xs font-bold uppercase tracking-wider">Tirage passé</span>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
      className="w-full flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden bg-white dark:bg-[var(--bg-surface)] border border-gray-100 dark:border-white/5 relative group"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
           style={{ background: `radial-gradient(circle at center, ${accentColor}1A 0%, transparent 70%)` }} />

      {/* LEFT SIDE: Details */}
      <div className={`flex-1 p-6 md:p-8 bg-gradient-to-br ${bgGradient} relative`}>
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0a1628] shadow-md flex items-center justify-center border border-gray-50 dark:border-white/10" style={{ color: accentColor }}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] dark:text-white">{ticket.productName}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Acheté le {ticket.purchaseDate}</p>
            </div>
          </div>
          {getStatusBadge()}
        </div>

        <div className="space-y-1">
          <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">Date du tirage</p>
          <p className="text-lg font-bold text-[var(--text-primary)] dark:text-gray-200">{ticket.drawDate}</p>
        </div>
      </div>

      {/* PERFORATION DIVIDER */}
      <div className="relative hidden md:flex w-8 items-center justify-center bg-white dark:bg-[var(--bg-surface)]">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l-[3px] border-dashed border-gray-200 dark:border-gray-800" />
        <div className="absolute -top-4 w-8 h-8 rounded-full bg-[var(--bg-default)] shadow-inner" />
        <div className="absolute -bottom-4 w-8 h-8 rounded-full bg-[var(--bg-default)] shadow-inner" />
      </div>

      <div className="relative md:hidden h-8 w-full flex items-center justify-center bg-white dark:bg-[var(--bg-surface)]">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t-[3px] border-dashed border-gray-200 dark:border-gray-800" />
        <div className="absolute -left-4 w-8 h-8 rounded-full bg-[var(--bg-default)] shadow-inner" />
        <div className="absolute -right-4 w-8 h-8 rounded-full bg-[var(--bg-default)] shadow-inner" />
      </div>

      {/* RIGHT SIDE: Verification / Serial */}
      <div className="w-full md:w-64 p-6 bg-gray-50/50 dark:bg-black/10 flex flex-row md:flex-col items-center justify-between md:justify-center gap-6 border-l-0 md:border-l-0">
        
        <div className="text-center">
          <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">N° de Ticket</p>
          <p className="font-mono text-sm sm:text-base font-bold bg-gray-200 dark:bg-black/40 px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 tracking-wider">
            {ticket.serialNumber}
          </p>
        </div>

        <div className="flex flex-col items-center opacity-40">
          <QrCode className="w-12 h-12 mb-1" />
          <span className="text-[8px] font-mono tracking-widest">SCAN TO VERIFY</span>
        </div>
        
      </div>
    </motion.div>
  );
}
