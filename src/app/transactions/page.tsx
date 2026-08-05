"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowLeft,
  Search,
  Filter,
  Download,
  PlusCircle,
  ArrowUpRight,
  Wallet,
  CheckCircle2,
  Clock,
  ChevronRight,
  CreditCard,
  Building2,
  Smartphone,
} from "lucide-react";
import { toast } from "sonner";

interface Transaction {
  id: string;
  type: "Rechargement" | "Retrait" | "Achat Ticket" | "Gain Lot";
  method: string;
  amount: string;
  isPositive: boolean;
  date: string;
  status: "Réussi" | "En traitement" | "Échoué";
}

const TRANSACTIONS_DATA: Transaction[] = [
  {
    id: "TX-94821",
    type: "Rechargement",
    method: "Wave Senegal",
    amount: "+ 25 000 FCFA",
    isPositive: true,
    date: "01 Août 2026 à 14:22",
    status: "Réussi",
  },
  {
    id: "TX-93210",
    type: "Achat Ticket",
    method: "Portefeuille MJ",
    amount: "- 5 000 FCFA",
    isPositive: false,
    date: "28 Juillet 2026 à 10:15",
    status: "Réussi",
  },
  {
    id: "TX-89102",
    type: "Gain Lot",
    method: "Crédit Solde",
    amount: "+ 10 000 FCFA",
    isPositive: true,
    date: "15 Juillet 2026 à 18:30",
    status: "Réussi",
  },
  {
    id: "TX-84110",
    type: "Retrait",
    method: "Orange Money",
    amount: "- 15 000 FCFA",
    isPositive: false,
    date: "05 Juillet 2026 à 09:40",
    status: "Réussi",
  },
  {
    id: "TX-78192",
    type: "Rechargement",
    method: "Free Money",
    amount: "+ 50 000 FCFA",
    isPositive: true,
    date: "20 Juin 2026 à 16:50",
    status: "Réussi",
  },
];

export default function TransactionsPage() {
  const [filter, setFilter] = useState<"Toutes" | "Rechargement" | "Retrait" | "Achat Ticket" | "Gain Lot">("Toutes");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTxs = TRANSACTIONS_DATA.filter((tx) => {
    const matchesFilter = filter === "Toutes" || tx.type === filter;
    const matchesSearch =
      tx.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.method.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
          <button
            onClick={() => toast.info("Téléchargement du relevé de compte au format PDF...")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono font-bold text-white transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-[var(--color-mj-gold)]" /> Relevé PDF
          </button>
        </div>

        {/* Balance & Overview Card */}
        <div className="bg-gradient-to-br from-[#0c1836] via-[#051128] to-[#010919] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-[var(--color-mj-gold)] border border-[var(--color-mj-gold)]/40 flex items-center justify-center font-bold shrink-0">
                <ArrowLeftRight className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-wide text-white">
                  Historique des Transactions
                </h1>
                <p className="text-xs sm:text-sm text-gray-300">
                  Suivez tous vos dépôts, retraits et paiements en toute transparence.
                </p>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => toast.info("Ouverture du module de rechargement...")}
                className="flex-1 md:flex-none py-3 px-5 bg-[var(--color-mj-red)] hover:bg-[#a00c17] text-white font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" /> Recharger
              </button>
              <button
                onClick={() => toast.info("Ouverture du module de retrait...")}
                className="flex-1 md:flex-none py-3 px-5 bg-white/10 hover:bg-white/20 text-white font-heading font-extrabold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Retirer <ArrowUpRight className="w-4 h-4 text-[var(--color-mj-gold)]" />
              </button>
            </div>
          </div>
        </div>

        {/* Connected Payment Gateways */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { name: "Wave", status: "Actif", icon: Smartphone, color: "text-emerald-400" },
            { name: "Orange Money", status: "Actif", icon: Smartphone, color: "text-orange-400" },
            { name: "Free Money", status: "Actif", icon: Smartphone, color: "text-red-400" },
            { name: "Carte Visa / Mastercard", status: "Sécurisé", icon: CreditCard, color: "text-blue-400" },
          ].map((gateway) => {
            const IconComp = gateway.icon;
            return (
              <div
                key={gateway.name}
                className="p-3 rounded-2xl bg-[#061430] border border-white/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <IconComp className={`w-4 h-4 ${gateway.color}`} />
                  <span className="text-xs font-bold text-white">{gateway.name}</span>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  {gateway.status}
                </span>
              </div>
            );
          })}
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {(["Toutes", "Rechargement", "Retrait", "Achat Ticket", "Gain Lot"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase transition-all whitespace-nowrap cursor-pointer ${
                  filter === cat
                    ? "bg-[var(--color-mj-gold)] text-black shadow-md"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="N° de transaction, moyen..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#061430] border border-white/10 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-mj-gold)]"
            />
          </div>
        </div>

        {/* Transactions Table / List */}
        <div className="space-y-3">
          {filteredTxs.map((tx) => (
            <div
              key={tx.id}
              className="p-4 rounded-2xl bg-[#04112c] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 border ${
                    tx.isPositive
                      ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                      : "bg-red-500/15 text-red-400 border-red-500/30"
                  }`}
                >
                  {tx.isPositive ? "+" : "-"}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-heading font-extrabold text-white text-sm">
                      {tx.type}
                    </p>
                    <span className="text-[10px] font-mono text-gray-400">
                      via {tx.method}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">
                    {tx.date} • Code: <strong className="text-gray-300">{tx.id}</strong>
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`font-mono font-black text-base block ${
                    tx.isPositive ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {tx.amount}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
