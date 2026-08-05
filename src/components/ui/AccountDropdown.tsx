import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  User,
  Bell,
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
  HeadphonesIcon,
  LogIn,
  X,
  CheckCircle2,
} from "lucide-react";

interface AccountDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ACTIVITIES = [
  {
    id: "tickets",
    label: "Mes tickets",
    sub: "Voir mes participations & tirages",
    count: "3 actifs",
    icon: Ticket,
    bgColor: "bg-[#102a58] text-white border border-blue-400/30",
    href: "/tickets",
  },
  {
    id: "gains",
    label: "Mes gains",
    sub: "Historique de mes gains & bonus",
    count: "+ 10 000 F",
    icon: Gift,
    bgColor: "bg-emerald-600 text-white border border-emerald-400/30",
    href: "/gains",
  },
  {
    id: "transactions",
    label: "Transactions",
    sub: "Dépôts, retraits, paiements",
    count: "Récents",
    icon: ArrowLeftRight,
    bgColor: "bg-[#fbb505] text-[#021a3c] border border-amber-300/50",
    href: "/transactions",
  },
  {
    id: "parrainage",
    label: "Parrainage",
    sub: "Mes filleuls & commissions",
    count: "4 filleuls",
    icon: Users,
    bgColor: "bg-purple-600 text-white border border-purple-400/30",
    href: "/parrainage",
  },
  {
    id: "favoris",
    label: "Mes favoris",
    sub: "Jeux & tirages suivis",
    count: "2 suivis",
    icon: Star,
    bgColor: "bg-[#da151f] text-white border border-red-400/30",
    href: "/favoris",
  },
  {
    id: "parametres",
    label: "Paramètres",
    sub: "Sécurité, notifications, KYC",
    count: "Vérifié",
    icon: Settings,
    bgColor: "bg-[#363636] text-white border border-gray-500/30",
    href: "/parametres",
  },
];

export function AccountDropdown({ isOpen, onClose }: AccountDropdownProps) {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs" onClick={onClose} />
          
          {/* Enlarged & Refined Popover Container */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-[350px] xs:w-[390px] sm:w-[430px] rounded-3xl bg-white dark:bg-[#04112c] shadow-2xl border border-slate-200 dark:border-[#fbb505]/40 z-50 overflow-hidden text-[#021a3c] dark:text-white transition-colors"
          >
            {/* Header with Title & Gold Line Accent */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-gradient-to-r dark:from-[#021a3c] dark:via-[#051838] dark:to-[#021a3c]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#102a58] text-[var(--color-mj-gold)] flex items-center justify-center font-bold shadow-sm">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base uppercase tracking-wider text-[#021a3c] dark:text-white">
                    Mon Compte
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="h-0.5 w-14 bg-[var(--color-mj-gold)] rounded-full" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-mj-gold)]" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="relative p-1.5 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10">
                  <Bell className="w-4 h-4 text-[var(--color-mj-gold)]" />
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-500 dark:text-gray-400 hover:text-[#021a3c] dark:hover:text-white rounded-full bg-slate-200/80 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/15 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Container with Generous Padding */}
            <div className="p-5 space-y-4 max-h-[540px] overflow-y-auto">
              
              {/* Ultra-Luxurious VIP Solde Portefeuille Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#e01420] via-[#b80d17] to-[#7a060d] text-white shadow-[0_15px_35px_rgba(218,21,31,0.4)] border border-red-400/40 relative overflow-hidden group">
                {/* Metallic Gold Accent Glows & Background Chips */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-[#fbb505]/25 via-[#fbb505]/5 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/30 rounded-full blur-xl pointer-events-none" />

                {/* Card Header: VIP Badge & Balance Toggle */}
                <div className="relative z-10 flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {/* Metallic Chip Visual */}
                    <div className="w-8 h-6 rounded-md bg-gradient-to-br from-amber-200 via-[#fbb505] to-amber-500 p-0.5 shadow-sm flex items-center justify-center border border-amber-100/60">
                      <div className="w-full h-full border border-amber-900/30 rounded-sm grid grid-cols-2 gap-0.5 p-0.5 opacity-80">
                        <div className="bg-amber-900/20 rounded-xs" />
                        <div className="bg-amber-900/20 rounded-xs" />
                        <div className="bg-amber-900/20 rounded-xs" />
                        <div className="bg-amber-900/20 rounded-xs" />
                      </div>
                    </div>
                    <span className="text-xs font-mono font-black uppercase tracking-widest text-amber-200 drop-shadow-sm">
                      SOLDE PRINCIPAL
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-extrabold text-emerald-300 bg-black/35 px-2.5 py-0.5 rounded-full border border-emerald-400/30 backdrop-blur-xs">
                      ● Actif
                    </span>
                    <button
                      onClick={() => setShowBalance(!showBalance)}
                      className="p-1.5 rounded-lg bg-black/25 hover:bg-black/45 text-white/90 hover:text-white transition-all cursor-pointer border border-white/10"
                      title="Masquer/Afficher solde"
                    >
                      {showBalance ? (
                        <Eye className="w-4 h-4 text-amber-200" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-amber-200" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Balance Display */}
                <div className="relative z-10 my-3">
                  <div className="font-mono font-black text-3xl sm:text-4xl text-white tracking-tight drop-shadow-md flex items-baseline gap-1.5">
                    <span>{showBalance ? "25 000" : "••••••••"}</span>
                    <span className="text-lg font-extrabold text-amber-300">FCFA</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-red-100 font-medium">
                      Bonus disponible : <strong className="text-amber-300 font-mono font-bold">+ 5 000 FCFA</strong>
                    </span>
                    <span className="text-[10px] font-mono text-white/80">
                      ID: #8842-MJ
                    </span>
                  </div>
                </div>

                {/* Side-by-Side Polished Action Buttons */}
                <div className="relative z-10 grid grid-cols-2 gap-2.5 pt-2">
                  <Link href="/compte" onClick={onClose}>
                    <button className="w-full py-2.5 px-3 bg-white hover:bg-amber-50 text-[#da151f] font-heading font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(255,255,255,0.4)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer">
                      <Plus className="w-4 h-4 text-[#da151f] stroke-[3]" />
                      Recharger
                    </button>
                  </Link>
                  <Link href="/compte" onClick={onClose}>
                    <button className="w-full py-2.5 px-3 bg-black/40 hover:bg-black/60 text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-white/30 hover:border-amber-300/60 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer backdrop-blur-xs">
                      Retirer
                      <ArrowUpRight className="w-4 h-4 text-amber-300 stroke-[2.5]" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Mes Informations Card */}
              <Link href="/compte" onClick={onClose} className="block group">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[var(--color-mj-gold)]/40 transition-all flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-mj-gold)]/20 text-[var(--color-mj-gold)] flex items-center justify-center font-bold shrink-0 border border-[var(--color-mj-gold)]/30">
                      <User className="w-5 h-5 text-[var(--color-mj-gold)]" />
                    </div>
                    <div className="text-left space-y-0.5">
                      <div className="flex items-center gap-2">
                        <p className="text-xs sm:text-sm font-extrabold text-[#021a3c] dark:text-white group-hover:text-[var(--color-mj-gold)] transition-colors leading-tight">
                          Mamadou Diop
                        </p>
                        <span className="inline-flex items-center gap-0.5 text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
                          <CheckCircle2 className="w-2.5 h-2.5" /> KYC
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 dark:text-gray-400 font-mono block">
                        +221 77 123 45 67
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 dark:text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Mes Activités List */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between px-1">
                  <h4 className="text-xs font-heading font-extrabold text-slate-600 dark:text-gray-300 uppercase tracking-wider">
                    Mes activités
                  </h4>
                  <span className="text-[10px] font-mono text-[var(--color-mj-gold)] font-bold">
                    Accès rapide
                  </span>
                </div>

                <div className="space-y-2">
                  {ACTIVITIES.map((act) => {
                    const ActIcon = act.icon;
                    return (
                      <Link
                        key={act.id}
                        href={act.href}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 hover:border-[var(--color-mj-gold)]/40 transition-all shadow-sm group"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl ${act.bgColor} flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}
                          >
                            <ActIcon className="w-4 h-4 stroke-[2.2]" />
                          </div>
                          <div className="text-left">
                            <div className="flex items-center gap-2">
                              <p className="text-xs sm:text-sm font-bold text-[#021a3c] dark:text-white group-hover:text-[var(--color-mj-gold)] transition-colors leading-tight">
                                {act.label}
                              </p>
                              <span className="text-[9px] font-mono font-bold text-[var(--color-mj-gold)] bg-[var(--color-mj-gold)]/10 px-1.5 py-0.5 rounded">
                                {act.count}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-500 dark:text-gray-400 block mt-0.5">
                              {act.sub}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 dark:text-gray-500 group-hover:text-[#021a3c] dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Popover Footer: Connection & Support Links */}
            <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-black/50 space-y-2.5">
              <Link href="/compte" onClick={onClose} className="block">
                <button className="w-full py-3 bg-[var(--color-mj-red)] hover:bg-red-600 text-white font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                  <LogIn className="w-4 h-4" /> Accéder à mon compte
                </button>
              </Link>

              <Link
                href="/support"
                onClick={onClose}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--color-mj-gold)]/10 border border-[var(--color-mj-gold)]/30 hover:bg-[var(--color-mj-gold)]/20 transition-all text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <HeadphonesIcon className="w-4 h-4 text-[var(--color-mj-gold)] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#021a3c] dark:text-white block leading-tight">
                      Aide & Support 24/7
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-gray-400">Assistance & FAQ</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--color-mj-gold)]" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


