"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Eye,
  EyeOff,
  Plus,
  ArrowUpRight,
  ChevronRight,
  Ticket,
  Gift,
  ArrowLeftRight,
  Star,
  Shield,
  Users,
  Settings,
  Wallet,
  CheckCircle2,
} from "lucide-react";

export function MonCompteSection() {
  const [showBalance, setShowBalance] = useState(true);

  const activities = [
    {
      id: "tickets",
      title: "Mes tickets",
      sub: "Voir mes participations et tirages en cours",
      count: "3 tickets actifs",
      icon: Ticket,
      iconBg: "bg-[#102a58] text-white border border-blue-400/30",
      href: "/tickets",
    },
    {
      id: "gains",
      title: "Mes gains",
      sub: "Historique de mes gains et récompenses",
      count: "+ 10 000 FCFA",
      icon: Gift,
      iconBg: "bg-emerald-600 text-white border border-emerald-400/30",
      href: "/compte",
    },
    {
      id: "transactions",
      title: "Transactions",
      sub: "Consultez l'historique des dépôts, retraits et paiements",
      count: "Dernier: +25 000 FCFA",
      icon: ArrowLeftRight,
      iconBg: "bg-[#fbb505] text-[#021a3c] border border-amber-300/50",
      href: "/compte",
    },
    {
      id: "parrainage",
      title: "Parrainage",
      sub: "Invitez vos proches et suivez vos gains de filleuls",
      count: "4 filleuls actifs",
      icon: Users,
      iconBg: "bg-purple-600 text-white border border-purple-400/30",
      href: "/compte",
    },
    {
      id: "favoris",
      title: "Mes favoris",
      sub: "Retrouvez vos jeux et tirages préférés",
      count: "2 tirages suivis",
      icon: Star,
      iconBg: "bg-[#da151f] text-white border border-red-400/30",
      href: "/#jeux",
    },
    {
      id: "parametres",
      title: "Paramètres",
      sub: "Gérez vos informations, sécurité, notifications et KYC",
      count: "KYC Vérifié",
      icon: Settings,
      iconBg: "bg-[#363636] text-white border border-gray-500/30",
      href: "/compte",
    },
  ];

  return (
    <section className="relative my-10 p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-[#0c1a3a] via-[#061430] to-[#04112c] border border-white/15 text-white shadow-2xl overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbb505]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#da151f]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            {/* User Avatar Circle Badge */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#021a3c] border-2 border-[var(--color-mj-gold)] text-[var(--color-mj-gold)] flex items-center justify-center shrink-0 shadow-lg">
              <User className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
                MON COMPTE
              </h2>
              {/* Gold Divider Line ending with a Gold Circle Dot */}
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="h-1 w-32 bg-[var(--color-mj-gold)] rounded-full" />
                <div className="w-2 h-2 rounded-full bg-[var(--color-mj-gold)] shrink-0" />
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md">
            Gérez facilement votre compte, consultez votre solde et retrouvez toutes vos activités en un seul endroit.
          </p>
        </div>

        {/* Top 2-Column Hero Dashboard Row: Solde Portefeuille Card + Mes Informations Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. Solde Portefeuille Card (Gold Theme) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#fbb505] via-[#f7b003] to-[#e69f00] text-[#021a3c] shadow-xl border border-[#fbb505]/50 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#021a3c] text-[var(--color-mj-gold)] flex items-center justify-center font-bold">
                  <Wallet className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#021a3c]/90">
                  Solde portefeuille
                </span>
              </div>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="p-1.5 rounded-lg bg-[#021a3c]/10 hover:bg-[#021a3c]/20 transition-colors text-[#021a3c]"
                title="Masquer/Afficher solde"
              >
                {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
            </div>

            <div className="my-2">
              <div className="font-mono font-black text-3xl sm:text-4xl text-[#021a3c] tracking-tight">
                {showBalance ? "25 000 FCFA" : "•••••••• FCFA"}
              </div>
              <span className="text-[11px] font-mono text-[#021a3c]/70 font-semibold mt-1 block">
                Paiements & Retraits sécurisés
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#021a3c]/15">
              <Link href="/compte">
                <button className="w-full py-3 bg-[#021a3c] hover:bg-[#102a58] text-white font-heading font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <Plus className="w-4 h-4 text-[var(--color-mj-gold)]" /> Recharger
                </button>
              </Link>
              <Link href="/compte">
                <button className="w-full py-3 bg-black/15 hover:bg-black/25 text-[#021a3c] border border-[#021a3c]/30 font-heading font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <ArrowUpRight className="w-4 h-4" /> Retirer
                </button>
              </Link>
            </div>
          </div>

          {/* 2. Mes Informations Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-black/40 border border-white/15 text-white shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                Mes informations
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/30">
                <CheckCircle2 className="w-3 h-3" /> Vérifié (KYC)
              </span>
            </div>

            <div className="flex items-center gap-4 my-2">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-mj-gold)]/20 border border-[var(--color-mj-gold)]/40 text-[var(--color-mj-gold)] flex items-center justify-center font-bold text-xl shrink-0">
                <User className="w-7 h-7" />
              </div>
              <div className="text-left space-y-1">
                <p className="font-heading font-extrabold text-lg text-white leading-tight">
                  Mamadou Diop
                </p>
                <p className="text-xs font-mono text-gray-400">
                  +221 77 123 45 67
                </p>
                <span className="text-[10px] font-mono text-gray-400 block">
                  Membre VIP • Dakar, Sénégal
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link href="/compte">
                <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10">
                  Gérer mon profil <ChevronRight className="w-4 h-4 text-[var(--color-mj-gold)]" />
                </button>
              </Link>
            </div>
          </div>

        </div>

        {/* Section Title: Mes Activités */}
        <div className="pt-2">
          <h3 className="font-heading font-extrabold text-lg uppercase text-white tracking-wide flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-mj-gold)]" /> Mes activités
          </h3>

          {/* 6 Activity Cards Grid (Exact match to Mockup Items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {activities.map((act) => {
              const ActIcon = act.icon;
              return (
                <Link key={act.id} href={act.href} className="group block">
                  <div className="p-5 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/10 hover:border-[var(--color-mj-gold)]/50 transition-all duration-300 shadow-md space-y-3 h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-xl ${act.iconBg} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}
                        >
                          <ActIcon className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <div>
                          <h4 className="font-heading font-extrabold text-sm text-white group-hover:text-[var(--color-mj-gold)] transition-colors leading-tight">
                            {act.title}
                          </h4>
                          <span className="text-[10px] font-mono text-[var(--color-mj-gold)] font-bold block mt-0.5">
                            {act.count}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      {act.sub}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Global Action CTA Button */}
        <div className="pt-4 flex justify-center sm:justify-end">
          <Link href="/compte">
            <button className="px-8 py-3.5 bg-[var(--color-mj-red)] hover:bg-red-600 text-white font-heading font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-xl hover:shadow-red-600/30 transition-all cursor-pointer flex items-center gap-2">
              Accéder à l&apos;espace complet <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}


