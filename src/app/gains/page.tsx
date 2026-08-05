"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Gift,
  Trophy,
  ArrowLeft,
  Calendar,
  Ticket as TicketIcon,
  CheckCircle2,
  Download,
  Sparkles,
  Search,
  Filter,
  DollarSign,
  Share2,
} from "lucide-react";
import { toast } from "sonner";

interface GainItem {
  id: string;
  title: string;
  category: "Grand Lot" | "Lot Secondaire" | "Bonus Cash";
  amount: string;
  date: string;
  ticketNumber: string;
  drawName: string;
  status: "Reçu" | "En cours de livraison" | "Disponible";
  isClaimed: boolean;
}

const GAINS_DATA: GainItem[] = [
  {
    id: "GAIN-8812",
    title: "Villa F4 Haut Standing - Saly Beach",
    category: "Grand Lot",
    amount: "150 000 000 FCFA",
    date: "30 Mai 2026",
    ticketNumber: "#MJ-MSN-00892",
    drawName: "Opportunités Maison - Tirage Hiver 2026",
    status: "Reçu",
    isClaimed: true,
  },
  {
    id: "GAIN-7741",
    title: "Virement Cash Bonus Inscription",
    category: "Bonus Cash",
    amount: "10 000 FCFA",
    date: "15 Juillet 2026",
    ticketNumber: "#BONUS-WEL-2026",
    drawName: "Bonus Bienvenue Mega Jackpot",
    status: "Reçu",
    isClaimed: true,
  },
  {
    id: "GAIN-6630",
    title: "Terrain Viabilisé 300m² - Diamniadio",
    category: "Lot Secondaire",
    amount: "15 000 000 FCFA",
    date: "01 Juin 2026",
    ticketNumber: "#MJ-MSN-00412",
    drawName: "Opportunités Maison - Tirage Spécial",
    status: "Disponible",
    isClaimed: false,
  },
  {
    id: "GAIN-5519",
    title: "Pack Commercial Voyage Dubaï",
    category: "Grand Lot",
    amount: "15 000 000 FCFA",
    date: "10 Avril 2026",
    ticketNumber: "#MJ-BUS-00129",
    drawName: "Opportunités Business - Tirage Printemps",
    status: "Reçu",
    isClaimed: true,
  },
];

export default function GainsPage() {
  const [filter, setFilter] = useState<"Tous" | "Grand Lot" | "Lot Secondaire" | "Bonus Cash">("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGains = GAINS_DATA.filter((item) => {
    const matchesFilter = filter === "Tous" || item.category === filter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.drawName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleClaim = (id: string, title: string) => {
    toast.success(`Demande de réclamation envoyée pour "${title}" ! Notre équipe vous contactera sous 24h.`);
  };

  return (
    <div className="min-h-screen bg-[#010919] text-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Breadcrumb & Back */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/compte"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-[var(--color-mj-gold)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Retour à Mon Compte
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              ● Compte Vérifié KYC
            </span>
          </div>
        </div>

        {/* Title Hero Banner */}
        <div className="bg-gradient-to-r from-[#04112c] via-[#091f48] to-[#04112c] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-700 text-white flex items-center justify-center font-bold shadow-lg shrink-0">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-wide text-white">
                  Mes Gains & Récompenses
                </h1>
                <p className="text-xs sm:text-sm text-gray-300">
                  Consultez vos lots gagnés, vos bonus et réclamez vos prix en toute sécurité.
                </p>
              </div>
            </div>

            {/* Total Gains Badge */}
            <div className="bg-[#021a3c] border border-emerald-500/40 rounded-2xl p-4 text-right min-w-[200px] shadow-md">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                Total Cumulé Gagné
              </span>
              <div className="font-mono font-black text-2xl text-emerald-400 tracking-tight">
                175 010 000 FCFA
              </div>
              <span className="text-[10px] text-gray-300 font-mono">4 victoires certifiées</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-[#061430] border border-white/10">
            <span className="text-xs text-gray-400 font-mono uppercase block mb-1">
              Grand Lot Phare
            </span>
            <p className="font-heading font-extrabold text-lg text-white">Villa F4 Saly</p>
            <span className="text-[10px] font-mono text-emerald-400">Certifié Huissier ✓</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#061430] border border-white/10">
            <span className="text-xs text-gray-400 font-mono uppercase block mb-1">
              Lots Secondaires
            </span>
            <p className="font-heading font-extrabold text-lg text-white">Terrain Diamniadio</p>
            <span className="text-[10px] font-mono text-[var(--color-mj-gold)]">Prêt à réclamer</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#061430] border border-white/10">
            <span className="text-xs text-gray-400 font-mono uppercase block mb-1">
              Bonus Cash Retirables
            </span>
            <p className="font-heading font-extrabold text-lg text-emerald-400">10 000 FCFA</p>
            <span className="text-[10px] font-mono text-gray-400">Disponible sur solde</span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {(["Tous", "Grand Lot", "Lot Secondaire", "Bonus Cash"] as const).map((cat) => (
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

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un lot..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#061430] border border-white/10 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-mj-gold)]"
            />
          </div>
        </div>

        {/* Gains List */}
        <div className="space-y-4">
          {filteredGains.map((gain) => (
            <div
              key={gain.id}
              className="p-5 rounded-2xl bg-[#04112c] border border-white/10 hover:border-[var(--color-mj-gold)]/50 transition-all shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 font-bold mt-1">
                  <Gift className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-[var(--color-mj-gold)]/20 text-[var(--color-mj-gold)] border border-[var(--color-mj-gold)]/30">
                      {gain.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {gain.id} • {gain.date}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-base text-white">
                    {gain.title}
                  </h3>

                  <p className="text-xs text-gray-300 font-mono">
                    Tirage: <strong className="text-white">{gain.drawName}</strong> (Ticket: {gain.ticketNumber})
                  </p>
                </div>
              </div>

              {/* Amount & Claim Action */}
              <div className="flex flex-col md:items-end gap-2 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                <div className="font-mono font-black text-xl text-emerald-400 tracking-tight">
                  {gain.amount}
                </div>

                {gain.isClaimed ? (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Lot Réclamé & Validé
                    </span>
                    <button
                      onClick={() => toast.info(`Téléchargement de l'attestation de gain ${gain.id}...`)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors"
                      title="Télécharger l'attestation de gain"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleClaim(gain.id, gain.title)}
                    className="py-2 px-5 bg-[var(--color-mj-red)] hover:bg-[#a00c17] text-white font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 text-[var(--color-mj-gold)]" />
                    Réclamer ce lot
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
