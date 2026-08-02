"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Headphones, X, MessageSquare, PhoneCall, ChevronRight, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingSupportButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-8 sm:right-6 z-40">
      {/* Quick Popup Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 sm:w-80 p-5 rounded-3xl bg-[#030d22]/95 border border-[#fbb505]/40 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-white space-y-4"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[var(--color-mj-gold)]/20 text-[var(--color-mj-gold)] flex items-center justify-center border border-[#fbb505]/30">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xs text-white">Assistance 24/7</h4>
                  <span className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Équipe en ligne
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Action Links */}
            <div className="space-y-2">
              <a
                href="https://wa.me/221770000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-green-400" />
                  <span className="font-medium text-white">Discussion WhatsApp</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+221770000000"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                  <span className="font-medium text-white">Appel Direct Service Client</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/support"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-mj-gold)]/10 hover:bg-[var(--color-mj-gold)]/20 border border-[#fbb505]/40 text-xs text-[var(--color-mj-gold)] font-bold transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4" />
                  <span>Centre d&apos;Aide & FAQ</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#0c2045] to-[#04122d] border border-[#fbb505]/50 text-white shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(251,181,5,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
        aria-label="Aide et support"
      >
        <div className="relative">
          <Headphones className="w-5 h-5 text-[var(--color-mj-gold)] group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#04122d]" />
        </div>
        <span className="hidden sm:inline font-heading font-extrabold text-xs uppercase tracking-wider text-white">
          Aide & Support
        </span>
      </button>
    </div>
  );
}
