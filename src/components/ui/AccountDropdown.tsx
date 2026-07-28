import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { User, LogIn, UserPlus } from "lucide-react";
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
            className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-white dark:bg-[#021a3c] shadow-2xl border border-gray-100 dark:border-white/10 z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-black/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[var(--color-mj-blue)]/10 dark:bg-white/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-[var(--color-mj-blue)] dark:text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--text-primary)]">Mon Espace</p>
                  <p className="text-xs text-[var(--text-secondary)]">Non connecté</p>
                </div>
              </div>
            </div>
            
            <div className="p-2 flex flex-col gap-1">
              <Link href="/compte" onClick={onClose} className="w-full">
                <Button variant="secondary" className="w-full justify-start gap-2 h-10">
                  <LogIn className="w-4 h-4" />
                  Se connecter
                </Button>
              </Link>
              <Link href="/inscription" onClick={onClose} className="w-full">
                <Button variant="default" className="w-full justify-start gap-2 h-10 shadow-md">
                  <UserPlus className="w-4 h-4" />
                  S'inscrire
                </Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
