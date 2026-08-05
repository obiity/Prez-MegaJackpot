"use client";

import { Button } from "@/components/ui/Button";
import { Gift, Share2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function PromoBanners() {
  return (
    <div className="py-2 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Welcome Offer */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-600 to-[var(--color-mj-red-dark)] text-white p-8 sm:p-10 shadow-lg"
        >
          {/* Guilloche Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 0 0, transparent 0, transparent 10px, white 10px, white 11px), repeating-linear-gradient(-45deg, transparent 0, transparent 10px, white 10px, white 11px)",
            }}
          />

          {/* Shine Animation */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_3s_infinite] skew-x-12" />

          <div className="absolute top-0 right-0 -mt-8 -mr-8 text-white/10 group-hover:scale-110 transition-transform duration-700">
            <Gift className="w-48 h-48" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full mb-6 border border-white/30 shadow-sm uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[var(--color-mj-gold)]" /> NOUVEAU JOUEUR
            </div>
            <h3 className="font-heading text-3xl mb-3 drop-shadow-md">Offre de Bienvenue</h3>
            <p className="text-red-100 font-medium mb-6 max-w-sm mx-auto leading-relaxed drop-shadow-sm">
              Inscrivez-vous aujourd&apos;hui et recevez votre{" "}
              <strong className="text-white">premier ticket 100% offert</strong>.
            </p>

            <Link href="/inscription">
              <Button className="bg-white text-[var(--color-mj-red)] hover:bg-rose-50 font-bold rounded-xl px-8 shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)] transition-all border-none">
                Créer mon compte
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Referral Offer */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-mj-blue)] to-[var(--color-mj-blue-dark)] text-white p-8 sm:p-10 shadow-lg"
        >
          {/* Guilloche Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 100% 100%, transparent 0, transparent 10px, white 10px, white 11px), repeating-linear-gradient(45deg, transparent 0, transparent 10px, white 10px, white 11px)",
            }}
          />

          {/* Shine Animation */}
          <div
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-mj-gold)]/20 to-transparent animate-[shimmer_3s_infinite] skew-x-12"
            style={{ animationDelay: "1.5s" }}
          />

          <div className="absolute top-0 right-0 -mt-8 -mr-8 text-white/5 group-hover:scale-110 transition-transform duration-700">
            <Share2 className="w-48 h-48" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-block bg-[var(--color-mj-gold)]/10 backdrop-blur-md text-[var(--color-mj-gold)] text-[10px] font-bold px-3 py-1 rounded-full border border-[#fbb505]/40 mb-6 shadow-sm uppercase tracking-wider">
              PROGRAMME FIDÉLITÉ
            </div>
            <h3 className="font-heading text-3xl mb-3 text-[var(--color-mj-gold)] drop-shadow-md">
              Parrainez et Gagnez
            </h3>
            <p className="text-blue-100 font-medium mb-6 max-w-sm mx-auto leading-relaxed drop-shadow-sm">
              Invitez vos amis et recevez{" "}
              <strong className="text-white">des tickets gratuits</strong> pour chaque filleul inscrit.
            </p>

            <Button
              onClick={() => {
                const section = document.getElementById("jeux");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[var(--color-mj-gold)] text-[var(--color-mj-blue-dark)] hover:bg-yellow-400 dark:hover:bg-amber-500 font-bold rounded-xl px-8 shadow-[0_4px_14px_0_rgba(251,181,5,0.39)] hover:shadow-[0_6px_20px_rgba(251,181,5,0.23)] border-none transition-all"
            >
              Découvrir
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
