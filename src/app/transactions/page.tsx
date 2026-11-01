"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowLeft,
  Search,
  Download,
  PlusCircle,
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

type TxFilterKey = "all" | "topUp" | "withdraw" | "ticketPurchase" | "prizeWin";
type TxId = "TX-94821" | "TX-93210" | "TX-89102" | "TX-84110" | "TX-78192";

interface TransactionMeta {
  id: TxId;
  typeKey: Exclude<TxFilterKey, "all">;
  amount: string;
  isPositive: boolean;
}

const TRANSACTIONS_META: TransactionMeta[] = [
  {
    id: "TX-94821",
    typeKey: "topUp",
    amount: "+ 25 000 FCFA",
    isPositive: true,
  },
  {
    id: "TX-93210",
    typeKey: "ticketPurchase",
    amount: "- 5 000 FCFA",
    isPositive: false,
  },
  {
    id: "TX-89102",
    typeKey: "prizeWin",
    amount: "+ 10 000 FCFA",
    isPositive: true,
  },
  {
    id: "TX-84110",
    typeKey: "withdraw",
    amount: "- 15 000 FCFA",
    isPositive: false,
  },
  {
    id: "TX-78192",
    typeKey: "topUp",
    amount: "+ 50 000 FCFA",
    isPositive: true,
  },
];

export default function TransactionsPage() {
  const { t } = useLanguage();
  const tp = t.transactionsPage;

  const [filter, setFilter] = useState<TxFilterKey>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const txList = TRANSACTIONS_META.map((meta) => {
    const localized = tp.items[meta.id];
    return {
      ...meta,
      typeLabel: tp.filters[meta.typeKey],
      method: localized.method,
      date: localized.date,
    };
  });

  const filteredTxs = txList.filter((tx) => {
    const matchesFilter = filter === "all" || tx.typeKey === filter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      tx.id.toLowerCase().includes(q) ||
      tx.method.toLowerCase().includes(q) ||
      tx.typeLabel.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#021a3c] text-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/compte"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-300 hover:text-[#fbb505] transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" /> {tp.backToAccount}
          </Link>
          <button
            onClick={() => toast.info(tp.toastPdf)}
            className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono font-bold text-white transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#fbb505]" /> {tp.pdfStatement}
          </button>
        </div>

        {/* Balance & Overview Card */}
        <div className="bg-gradient-to-br from-[#102a58] via-[#021a3c] to-[#021a3c] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#fbb505]/20 text-[#fbb505] border border-[#fbb505]/40 flex items-center justify-center font-bold shrink-0">
                <ArrowLeftRight className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-wide text-white">
                  {tp.title}
                </h1>
                <p className="text-xs sm:text-sm text-gray-300">
                  {tp.subtitle}
                </p>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => toast.info(tp.toastTopUp)}
                className="flex-1 md:flex-none min-h-[44px] py-3 px-5 bg-[#da151f] hover:bg-[#a00c17] text-white font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" /> {tp.topUp}
              </button>
              <button
                onClick={() => toast.info(tp.toastWithdraw)}
                className="flex-1 md:flex-none min-h-[44px] py-3 px-5 bg-white/10 hover:bg-white/20 text-white font-heading font-extrabold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {tp.withdraw} <ArrowUpRight className="w-4 h-4 text-[#fbb505]" />
              </button>
            </div>
          </div>
        </div>

        {/* Connected Payment Gateways */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { name: "Wave", status: tp.activeStatus, icon: Smartphone },
            { name: "Orange Money", status: tp.activeStatus, icon: Smartphone },
            { name: "Free Money", status: tp.activeStatus, icon: Smartphone },
            {
              name: tp.cardGatewayName,
              status: tp.secureStatus,
              icon: CreditCard,
            },
          ].map((gateway) => {
            const IconComp = gateway.icon;
            return (
              <div
                key={gateway.name}
                className="p-3 rounded-2xl bg-[#102a58]/70 border border-white/10 flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <IconComp className="w-4 h-4 text-[#fbb505] shrink-0" />
                  <span className="text-xs font-bold text-white truncate">
                    {gateway.name}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-[#fbb505] bg-[#fbb505]/15 px-1.5 py-0.5 rounded border border-[#fbb505]/30 shrink-0">
                  {gateway.status}
                </span>
              </div>
            );
          })}
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {(
              [
                "all",
                "topUp",
                "withdraw",
                "ticketPurchase",
                "prizeWin",
              ] as const
            ).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-heading font-bold uppercase transition-all whitespace-nowrap cursor-pointer ${
                  filter === cat
                    ? "bg-[#fbb505] text-[#021a3c] shadow-md"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tp.filters[cat]}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-300 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={tp.searchPlaceholder}
              className="w-full min-h-[44px] pl-9 pr-3 py-2 rounded-xl bg-[#102a58]/80 border border-white/10 text-xs text-white placeholder-gray-300 focus:outline-none focus:border-[#fbb505]"
            />
          </div>
        </div>

        {/* Transactions Table / List */}
        <div className="space-y-3">
          {filteredTxs.map((tx) => (
            <div
              key={tx.id}
              className="p-4 rounded-2xl bg-[#102a58]/60 border border-white/10 hover:border-white/25 transition-all flex items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 border ${
                    tx.isPositive
                      ? "bg-[#fbb505]/15 text-[#fbb505] border-[#fbb505]/30"
                      : "bg-[#da151f]/15 text-[#da151f] border-[#da151f]/30"
                  }`}
                >
                  {tx.isPositive ? "+" : "−"}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-heading font-extrabold text-white text-sm">
                      {tx.typeLabel}
                    </p>
                    <span className="text-[10px] font-mono text-gray-300">
                      {tp.viaPrefix} {tx.method}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-300 block">
                    {tx.date} • {tp.codePrefix}{" "}
                    <strong className="text-white">{tx.id}</strong>
                  </span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span
                  className={`font-mono font-black text-base block ${
                    tx.isPositive ? "text-[#fbb505]" : "text-white"
                  }`}
                >
                  {tx.amount}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#fbb505]">
                  <CheckCircle2 className="w-3 h-3" /> {tp.statusSuccess}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
