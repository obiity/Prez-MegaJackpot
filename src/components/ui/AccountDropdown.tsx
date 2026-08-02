import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { User, LogIn, UserPlus, HeadphonesIcon, Wallet, PlusCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface AccountDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccountDropdown({ isOpen, onClose }: AccountDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-white dark:bg-[#021a3c] shadow-2xl border border-gray-100 dark:border-white/10 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-black/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-mj-blue)]/10 dark:bg-white/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-[var(--color-mj-blue)] dark:text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--text-primary)] dark:text-white">Mon Espace</p>
                  <p className="text-xs text-[var(--text-secondary)]">Espace Utilisateur</p>
                </div>
              </div>
            </div>

            {/* Mon Portefeuille Widget Section inside Menu */}
            <div className="p-3 bg-gradient-to-br from-[#0c1836] to-[#041028] text-white border-b border-white/10">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-300 flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" /> Mon Portefeuille
                </span>
                <span className="text-[9px] font-mono bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded font-bold">Actif</span>
              </div>
              <div className="font-mono font-bold text-lg text-white mb-2 tracking-tight">
                125 750 FCFA
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/compte" onClick={onClose}>
                  <button className="w-full py-1.5 bg-[var(--color-mj-red)] hover:bg-red-600 text-white font-mono font-bold text-[10px] uppercase rounded-lg transition-colors flex items-center justify-center gap-1">
                    <PlusCircle className="w-3 h-3" /> Recharger
                  </button>
                </Link>
                <Link href="/compte" onClick={onClose}>
                  <button className="w-full py-1.5 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-[10px] uppercase rounded-lg transition-colors flex items-center justify-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> Retirer
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="p-2 flex flex-col gap-1">
              <Link href="/compte" onClick={onClose} className="w-full">
                <Button variant="secondary" className="w-full justify-start gap-2 h-9 text-xs">
                  <LogIn className="w-4 h-4" />
                  Se connecter / Mon compte
                </Button>
              </Link>
              <Link href="/inscription" onClick={onClose} className="w-full">
                <Button variant="default" className="w-full justify-start gap-2 h-9 text-xs shadow-md">
                  <UserPlus className="w-4 h-4" />
                  S'inscrire
                </Button>
              </Link>
              
              {/* Permanent Aide & Support Link inside Mon Espace Menu */}
              <Link
                href="/support"
                onClick={onClose}
                className="w-full mt-1 pt-1.5 border-t border-gray-100 dark:border-white/10 block"
              >
                <div className="flex items-center justify-between p-2 rounded-lg bg-[var(--color-mj-gold)]/10 border border-[var(--color-mj-gold)]/30 hover:bg-[var(--color-mj-gold)]/20 transition-all text-left">
                  <div className="flex items-center gap-2">
                    <HeadphonesIcon className="w-4 h-4 text-[var(--color-mj-gold)] shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-[var(--text-primary)] dark:text-white block leading-tight">
                        Aide & Support 24/7
                      </span>
                      <span className="text-[10px] text-[var(--text-secondary)]">Assistance & FAQ</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
