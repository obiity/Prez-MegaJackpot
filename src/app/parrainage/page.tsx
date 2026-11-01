"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  ArrowLeft,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

type ReferralId = "FIL-01" | "FIL-02" | "FIL-03" | "FIL-04";
type ReferralStatusKey = "registered" | "kycValidated" | "firstTicket";

interface ReferralMeta {
  id: ReferralId;
  name: string;
  phone: string;
  statusKey: ReferralStatusKey;
  commissionAmount: string | null;
}

const REFERRALS_META: ReferralMeta[] = [
  {
    id: "FIL-01",
    name: "Ibrahima Sow",
    phone: "+221 77 *** 44 12",
    statusKey: "firstTicket",
    commissionAmount: "5 000 FCFA",
  },
  {
    id: "FIL-02",
    name: "Awa Ndiaye",
    phone: "+221 78 *** 99 88",
    statusKey: "kycValidated",
    commissionAmount: "5 000 FCFA",
  },
  {
    id: "FIL-03",
    name: "Ousmane Kane",
    phone: "+221 70 *** 11 22",
    statusKey: "firstTicket",
    commissionAmount: "5 000 FCFA",
  },
  {
    id: "FIL-04",
    name: "Fatou Bintou",
    phone: "+221 76 *** 55 44",
    statusKey: "registered",
    commissionAmount: null,
  },
];

export default function ParrainagePage() {
  const { t } = useLanguage();
  const p = t.parrainagePage;

  const [referralCode] = useState("MEGA-DIOP-77");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `https://megajackpot.sn/inscription?ref=${referralCode}`
    );
    setCopied(true);
    toast.success(p.toastLinkCopied);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#021a3c] text-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/compte"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-300 hover:text-[#fbb505] transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" /> {p.backToAccount}
          </Link>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#fbb505]/15 text-[#fbb505] border border-[#fbb505]/30">
            {p.vipBadge}
          </span>
        </div>

        {/* Title Hero Banner */}
        <div className="bg-gradient-to-r from-[#021a3c] via-[#102a58] to-[#021a3c] rounded-3xl p-6 sm:p-8 border border-[#fbb505]/30 shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#fbb505]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#da151f] text-white flex items-center justify-center font-bold shadow-lg shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-wide text-white">
                  {p.title}
                </h1>
                <p className="text-xs sm:text-sm text-gray-200">
                  {p.subtitlePrefix}
                  <strong className="text-[#fbb505]">5 000 FCFA</strong>
                  {p.subtitleSuffix}
                </p>
              </div>
            </div>

            {/* Total Earnings Badge */}
            <div className="bg-[#021a3c] border border-[#fbb505]/40 rounded-2xl p-4 text-right min-w-[200px]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-300 block">
                {p.earnedCommissions}
              </span>
              <div className="font-mono font-black text-2xl text-[#fbb505] tracking-tight">
                20 000 FCFA
              </div>
              <span className="text-[10px] text-gray-300 font-mono">
                {p.registeredReferrals}
              </span>
            </div>
          </div>
        </div>

        {/* Share Referral Link Box */}
        <div className="p-6 rounded-3xl bg-[#102a58]/70 border border-white/10 shadow-xl mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#fbb505]" /> {p.shareBoxTitle}
            </h3>
            <span className="text-[10px] font-mono text-gray-300">
              {p.shareBoxSub}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full flex-1 relative">
              <input
                type="text"
                readOnly
                value={`https://megajackpot.sn/inscription?ref=${referralCode}`}
                className="w-full min-h-[44px] pl-4 pr-4 py-3 rounded-xl bg-[#021a3c] border border-[#fbb505]/40 font-mono text-xs font-bold text-[#fbb505] outline-none"
              />
            </div>
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto min-h-[44px] py-3 px-6 bg-[#fbb505] hover:opacity-90 text-[#021a3c] font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? p.copiedBtn : p.copyLinkBtn}
            </button>
          </div>
        </div>

        {/* How it works steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-[#102a58]/60 border border-white/10 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#fbb505]/20 text-[#fbb505] font-mono font-bold flex items-center justify-center mx-auto text-xs">
              1
            </div>
            <h4 className="font-heading font-bold text-xs uppercase text-white">
              {p.step1Title}
            </h4>
            <p className="text-[11px] text-gray-300">{p.step1Desc}</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#102a58]/60 border border-white/10 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#fbb505]/20 text-[#fbb505] font-mono font-bold flex items-center justify-center mx-auto text-xs">
              2
            </div>
            <h4 className="font-heading font-bold text-xs uppercase text-white">
              {p.step2Title}
            </h4>
            <p className="text-[11px] text-gray-300">{p.step2Desc}</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#102a58]/60 border border-white/10 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#fbb505]/20 text-[#fbb505] font-mono font-bold flex items-center justify-center mx-auto text-xs">
              3
            </div>
            <h4 className="font-heading font-bold text-xs uppercase text-white">
              {p.step3Title}
            </h4>
            <p className="text-[11px] text-gray-300">{p.step3Desc}</p>
          </div>
        </div>

        {/* Referrals List */}
        <div className="space-y-3">
          <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white px-1">
            {p.myReferralsTitle}
          </h3>

          {REFERRALS_META.map((ref) => (
            <div
              key={ref.id}
              className="p-4 rounded-2xl bg-[#102a58]/60 border border-white/10 flex items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#fbb505]/20 text-[#fbb505] flex items-center justify-center font-bold shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white leading-tight truncate">
                    {ref.name}
                  </p>
                  <span className="text-[10px] font-mono text-gray-300">
                    {ref.phone} • {p.registeredOnPrefix} {p.dates[ref.id]}
                  </span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="font-mono font-bold text-[#fbb505] block">
                  {ref.commissionAmount ?? p.pendingCommission}
                </span>
                <span className="text-[9px] font-mono text-white bg-white/10 px-2 py-0.5 rounded border border-white/15">
                  {p.statuses[ref.statusKey]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
