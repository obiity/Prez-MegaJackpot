"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Gift,
  Trophy,
  ArrowLeft,
  CheckCircle2,
  Download,
  Sparkles,
  Search,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

type CategoryKey = "all" | "grand" | "secondary" | "bonus";
type GainId = "GAIN-8812" | "GAIN-7741" | "GAIN-6630" | "GAIN-5519";

interface GainMeta {
  id: GainId;
  categoryKey: Exclude<CategoryKey, "all">;
  amount: string;
  ticketNumber: string;
  isClaimed: boolean;
}

const GAINS_META: GainMeta[] = [
  {
    id: "GAIN-8812",
    categoryKey: "grand",
    amount: "150 000 000 FCFA",
    ticketNumber: "#MJ-MSN-00892",
    isClaimed: true,
  },
  {
    id: "GAIN-7741",
    categoryKey: "bonus",
    amount: "10 000 FCFA",
    ticketNumber: "#BONUS-WEL-2026",
    isClaimed: true,
  },
  {
    id: "GAIN-6630",
    categoryKey: "secondary",
    amount: "15 000 000 FCFA",
    ticketNumber: "#MJ-MSN-00412",
    isClaimed: false,
  },
  {
    id: "GAIN-5519",
    categoryKey: "grand",
    amount: "15 000 000 FCFA",
    ticketNumber: "#MJ-BUS-00129",
    isClaimed: true,
  },
];

export default function GainsPage() {
  const { t } = useLanguage();
  const g = t.gainsPage;

  const [filter, setFilter] = useState<CategoryKey>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const gainsList = GAINS_META.map((meta) => {
    const localized = g.items[meta.id];
    return {
      ...meta,
      title: localized.title,
      date: localized.date,
      drawName: localized.drawName,
      categoryLabel: g.categories[meta.categoryKey],
    };
  });

  const filteredGains = gainsList.filter((item) => {
    const matchesFilter = filter === "all" || item.categoryKey === filter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.ticketNumber.toLowerCase().includes(q) ||
      item.drawName.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const handleClaim = (title: string) => {
    toast.success(`${g.toastClaimPrefix}"${title}"${g.toastClaimSuffix}`);
  };

  return (
    <div className="min-h-screen bg-[#021a3c] text-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Breadcrumb & Back */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/compte"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-300 hover:text-[#fbb505] transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" /> {g.backToAccount}
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#fbb505]/15 text-[#fbb505] border border-[#fbb505]/30">
              {g.verifiedKyc}
            </span>
          </div>
        </div>

        {/* Title Hero Banner */}
        <div className="bg-gradient-to-r from-[#021a3c] via-[#102a58] to-[#021a3c] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#fbb505]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#fbb505] text-[#021a3c] flex items-center justify-center font-bold shadow-lg shrink-0">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-wide text-white">
                  {g.title}
                </h1>
                <p className="text-xs sm:text-sm text-gray-300">{g.subtitle}</p>
              </div>
            </div>

            {/* Total Gains Badge */}
            <div className="bg-[#021a3c] border border-[#fbb505]/40 rounded-2xl p-4 text-right min-w-[200px] shadow-md">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-300 block">
                {g.totalWonLabel}
              </span>
              <div className="font-mono font-black text-2xl text-[#fbb505] tracking-tight">
                175 010 000 FCFA
              </div>
              <span className="text-[10px] text-gray-300 font-mono">
                {g.certifiedWinsCount}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-[#102a58]/70 border border-white/10">
            <span className="text-xs text-gray-300 font-mono uppercase block mb-1">
              {g.flagshipPrizeLabel}
            </span>
            <p className="font-heading font-extrabold text-lg text-white">
              {g.flagshipPrizeValue}
            </p>
            <span className="text-[10px] font-mono text-[#fbb505]">
              {g.certifiedBailiff}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#102a58]/70 border border-white/10">
            <span className="text-xs text-gray-300 font-mono uppercase block mb-1">
              {g.secondaryPrizesLabel}
            </span>
            <p className="font-heading font-extrabold text-lg text-white">
              {g.secondaryPrizesValue}
            </p>
            <span className="text-[10px] font-mono text-[#fbb505]">
              {g.readyToClaim}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#102a58]/70 border border-white/10">
            <span className="text-xs text-gray-300 font-mono uppercase block mb-1">
              {g.withdrawableBonusLabel}
            </span>
            <p className="font-heading font-extrabold text-lg text-[#fbb505]">
              10 000 FCFA
            </p>
            <span className="text-[10px] font-mono text-gray-300">
              {g.availableOnBalance}
            </span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {(["all", "grand", "secondary", "bonus"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-heading font-bold uppercase transition-all whitespace-nowrap cursor-pointer ${
                  filter === cat
                    ? "bg-[#fbb505] text-[#021a3c] shadow-md"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {g.categories[cat]}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-300 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={g.searchPlaceholder}
              className="w-full min-h-[44px] pl-9 pr-3 py-2 rounded-xl bg-[#102a58]/80 border border-white/10 text-xs text-white placeholder-gray-300 focus:outline-none focus:border-[#fbb505]"
            />
          </div>
        </div>

        {/* Gains List */}
        <div className="space-y-4">
          {filteredGains.map((gain) => (
            <div
              key={gain.id}
              className="p-5 rounded-2xl bg-[#102a58]/60 border border-white/10 hover:border-[#fbb505]/50 transition-all shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#fbb505]/15 border border-[#fbb505]/30 text-[#fbb505] flex items-center justify-center shrink-0 font-bold mt-1">
                  <Gift className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-[#fbb505]/20 text-[#fbb505] border border-[#fbb505]/30">
                      {gain.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono text-gray-300">
                      {gain.id} • {gain.date}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-base text-white">
                    {gain.title}
                  </h3>

                  <p className="text-xs text-gray-300 font-mono">
                    {g.drawPrefix}{" "}
                    <strong className="text-white">{gain.drawName}</strong> (
                    {g.ticketPrefix} {gain.ticketNumber})
                  </p>
                </div>
              </div>

              {/* Amount & Claim Action */}
              <div className="flex flex-col md:items-end gap-2 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                <div className="font-mono font-black text-xl text-[#fbb505] tracking-tight">
                  {gain.amount}
                </div>

                {gain.isClaimed ? (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#fbb505] bg-[#fbb505]/10 px-3 py-1.5 rounded-full border border-[#fbb505]/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {g.claimedBadge}
                    </span>
                    <button
                      onClick={() =>
                        toast.info(`${g.toastDownloadPrefix}${gain.id}...`)
                      }
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors cursor-pointer"
                      title={g.downloadTitle}
                      aria-label={g.downloadTitle}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleClaim(gain.title)}
                    className="min-h-[44px] py-2.5 px-5 bg-[#da151f] hover:bg-[#a00c17] text-white font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#fbb505]" />
                    {g.claimCta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
