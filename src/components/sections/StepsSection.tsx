"use client";

import { Ticket, CreditCard, Gift } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

export function StepsSection() {
  const steps = [
    {
      id: 1,
      icon: <Ticket className="w-7 h-7 text-[var(--color-mj-gold)]" />,
      title: "Choisissez votre opportunité",
      desc: "Sélectionnez le lot de vos rêves (Maison, Business, Famille) et le nombre de tickets."
    },
    {
      id: 2,
      icon: <CreditCard className="w-7 h-7 text-[var(--color-mj-gold)]" />,
      title: "Validez votre participation",
      desc: "Payez en toute sécurité via nos moyens de paiement partenaires.",
    },
    {
      id: 3,
      icon: <Gift className="w-7 h-7 text-[var(--color-mj-gold)]" />,
      title: "Patientez pour le tirage",
      desc: "Suivez le tirage en direct. Si vous gagnez, nous vous contactons immédiatement !"
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="py-8 bg-transparent text-[var(--text-primary)]">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#021a3c] dark:text-white uppercase mb-2">JOUER EN 3 ÉTAPES SIMPLES</h2>
        <p className="text-xs text-slate-600 dark:text-gray-400 font-mono">Participer n&apos;a jamais été aussi facile. En quelques clics, votre ticket est validé.</p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step) => (
          <motion.div
            key={step.id}
            variants={itemVariants}
            className="flex flex-col items-center text-center p-6 rounded-3xl bg-gradient-to-b from-[#da151f] via-[#a00c17] to-[#60050c] dark:from-[#0c1a3a] dark:via-[#061430] dark:to-[#04112c] border border-amber-400/40 dark:border-white/10 text-white shadow-xl group hover:border-[#fbb505] transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-black/40 border border-amber-400/40 text-[var(--color-mj-gold)] flex items-center justify-center shadow-md mb-4 relative group-hover:scale-105 transition-transform">
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-mj-gold)] text-black font-mono font-black text-xs flex items-center justify-center shadow-md">
                {step.id}
              </div>
              {step.icon}
            </div>

            <h3 className="font-heading font-black text-sm text-white uppercase mb-2">{step.title}</h3>
            <p className="text-xs text-red-100 dark:text-gray-300 leading-relaxed font-sans">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Payment Methods Strip right at the bottom */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-white dark:bg-black/40 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-mj-gold)] block font-bold">
            PAIEMENTS 100% SÉCURISÉS
          </span>
          <p className="text-xs text-slate-600 dark:text-gray-300 font-medium mt-0.5">
            Achetez vos tickets instantanément via vos moyens locaux et cartes bancaires partenaires
          </p>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 shrink-0">
          <Image src="/Wave.png" alt="Wave Mobile Money" width={100} height={56} className="h-7 sm:h-9 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform" />
          <Image src="/OrangeMoney.png" alt="Orange Money" width={100} height={56} className="h-7 sm:h-9 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform" />
          <Image src="/FreeMoney.png" alt="Free Money" width={100} height={56} className="h-7 sm:h-9 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform" />
          <Image src="/Visa-MasterCard.png" alt="Visa & Mastercard" width={100} height={56} className="h-7 sm:h-9 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform" />
        </div>
      </div>
    </div>
  );
}
