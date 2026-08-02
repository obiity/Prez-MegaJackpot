"use client";

import React, { useState, useEffect } from "react";
import { Search, X, ChevronRight, Home, Briefcase, Users, Trophy, Ticket, HelpCircle, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUICK_SEARCH_ITEMS = [
  { title: "Opportunité Maison", category: "Jeu & Tirage", href: "/#jeux", icon: Home, color: "text-[var(--color-mj-gold)]" },
  { title: "Opportunité Business", category: "Jeu & Tirage", href: "/#jeux", icon: Briefcase, color: "text-red-400" },
  { title: "Opportunité Famille", category: "Jeu & Tirage", href: "/#jeux", icon: Users, color: "text-blue-400" },
  { title: "Résultats & Gagnants certifiés", category: "Registre officiel", href: "/resultats", icon: Trophy, color: "text-amber-400" },
  { title: "Mes Tickets & Participations", category: "Espace joueur", href: "/tickets", icon: Ticket, color: "text-purple-400" },
  { title: "Aide & Support 24/7", category: "Assistance", href: "/support", icon: HelpCircle, color: "text-green-400" },
  { title: "Mon Compte & Portefeuille", category: "Solde & Retraits", href: "/compte", icon: User, color: "text-blue-300" },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = QUICK_SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-[#030d22] border border-white/15 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white overflow-hidden z-10"
          >
            {/* Search Input Header */}
            <div className="flex items-center px-5 py-4 border-b border-white/10 gap-3">
              <Search className="w-5 h-5 text-[var(--color-mj-gold)] shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher une opportunité, résultat, ticket, aide..."
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none font-sans"
                autoFocus
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-gray-400 hover:text-white p-1">
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="px-2.5 py-1 text-xs font-mono bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 transition-colors shrink-0"
              >
                ESC
              </button>
            </div>

            {/* Search Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2 no-scrollbar">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-9 h-9 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center ${item.color}`}>
                          <ItemIcon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-sm text-white group-hover:text-[var(--color-mj-gold)] transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono text-gray-400 block mt-0.5">{item.category}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
                    </Link>
                  );
                })
              ) : (
                <div className="text-center py-10 text-gray-400 text-sm font-mono">
                  Aucun résultat trouvé pour &quot;{query}&quot;
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
