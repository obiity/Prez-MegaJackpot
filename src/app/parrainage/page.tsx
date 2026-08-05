"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  ArrowLeft,
  Copy,
  Check,
  Share2,
  Gift,
  Award,
  Sparkles,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { toast } from "sonner";

interface Referral {
  id: string;
  name: string;
  phone: string;
  date: string;
  status: "Inscrit" | "KYC Validé" | "Premier Ticket";
  commission: string;
}

const REFERRALS_DATA: Referral[] = [
  {
    id: "FIL-01",
    name: "Ibrahima Sow",
    phone: "+221 77 *** 44 12",
    date: "01 Août 2026",
    status: "Premier Ticket",
    commission: "5 000 FCFA",
  },
  {
    id: "FIL-02",
    name: "Awa Ndiaye",
    phone: "+221 78 *** 99 88",
    date: "28 Juillet 2026",
    status: "KYC Validé",
    commission: "5 000 FCFA",
  },
  {
    id: "FIL-03",
    name: "Ousmane Kane",
    phone: "+221 70 *** 11 22",
    date: "20 Juillet 2026",
    status: "Premier Ticket",
    commission: "5 000 FCFA",
  },
  {
    id: "FIL-04",
    name: "Fatou Bintou",
    phone: "+221 76 *** 55 44",
    date: "10 Juillet 2026",
    status: "Inscrit",
    commission: "En attente",
  },
];

export default function ParrainagePage() {
  const [referralCode] = useState("MEGA-DIOP-77");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://megajackpot.sn/inscription?ref=${referralCode}`);
    setCopied(true);
    toast.success("Lien de parrainage copié dans le presse-papier !");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#010919] text-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/compte"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-[var(--color-mj-gold)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Retour à Mon Compte
          </Link>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
            ★ VIP Parrain Gold
          </span>
        </div>

        {/* Title Hero Banner */}
        <div className="bg-gradient-to-r from-[#04112c] via-[#1a0836] to-[#04112c] rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-800 text-white flex items-center justify-center font-bold shadow-lg shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-wide text-white">
                  Programme de Parrainage
                </h1>
                <p className="text-xs sm:text-sm text-purple-200">
                  Invitez vos proches et gagnez <strong className="text-[var(--color-mj-gold)]">5 000 FCFA</strong> par filleul actif !
                </p>
              </div>
            </div>

            {/* Total Earnings Badge */}
            <div className="bg-[#061430] border border-purple-500/40 rounded-2xl p-4 text-right min-w-[200px]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                Commissions Gagnées
              </span>
              <div className="font-mono font-black text-2xl text-[var(--color-mj-gold)] tracking-tight">
                20 000 FCFA
              </div>
              <span className="text-[10px] text-purple-300 font-mono">4 filleuls enregistrés</span>
            </div>
          </div>
        </div>

        {/* Share Referral Link Box */}
        <div className="p-6 rounded-3xl bg-[#061430] border border-white/10 shadow-xl mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--color-mj-gold)]" /> Votre Code & Link de Parrainage
            </h3>
            <span className="text-[10px] font-mono text-gray-400">Bonus 5000 FCFA offert à chaque ami</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full flex-1 relative">
              <input
                type="text"
                readOnly
                value={`https://megajackpot.sn/inscription?ref=${referralCode}`}
                className="w-full pl-4 pr-12 py-3 rounded-xl bg-[#010919] border border-purple-500/40 font-mono text-xs font-bold text-[var(--color-mj-gold)] outline-none"
              />
            </div>
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto py-3 px-6 bg-[var(--color-mj-gold)] hover:bg-yellow-400 text-black font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "COPIÉ !" : "COPIER LE LIEN"}
            </button>
          </div>
        </div>

        {/* How it works steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-[#04112c] border border-white/10 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-mono font-bold flex items-center justify-center mx-auto text-xs">
              1
            </div>
            <h4 className="font-heading font-bold text-xs uppercase text-white">1. Partagez votre lien</h4>
            <p className="text-[11px] text-gray-400">Envoyez votre code par SMS, WhatsApp ou réseaux sociaux.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#04112c] border border-white/10 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-mono font-bold flex items-center justify-center mx-auto text-xs">
              2
            </div>
            <h4 className="font-heading font-bold text-xs uppercase text-white">2. Votre ami s'inscrit</h4>
            <p className="text-[11px] text-gray-400">Il valide son compte KYC et achète son 1er ticket.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#04112c] border border-white/10 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-mono font-bold flex items-center justify-center mx-auto text-xs">
              3
            </div>
            <h4 className="font-heading font-bold text-xs uppercase text-white">3. Recevez 5 000 FCFA</h4>
            <p className="text-[11px] text-gray-400">Votre prime est créditée immédiatement sur votre solde.</p>
          </div>
        </div>

        {/* Referrals List */}
        <div className="space-y-3">
          <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white px-1">
            Mes Filleuls (4)
          </h3>

          {REFERRALS_DATA.map((ref) => (
            <div
              key={ref.id}
              className="p-4 rounded-2xl bg-[#04112c] border border-white/10 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600/20 text-purple-300 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white leading-tight">{ref.name}</p>
                  <span className="text-[10px] font-mono text-gray-400">{ref.phone} • Inscrit le {ref.date}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-mono font-bold text-emerald-400 block">{ref.commission}</span>
                <span className="text-[9px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  {ref.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
