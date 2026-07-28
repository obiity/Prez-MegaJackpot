"use client";

import { Ticket, CreditCard, Gift } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"

export function StepsSection() {
  const paymentIcons = (
    <>
      <Image src="/Wave.png" alt="Wave" width={100} height={56} className="h-10 sm:h-14 w-auto object-contain block drop-shadow-md hover:drop-shadow-lg transition-all hover:scale-105" />
      <Image src="/OrangeMoney.png" alt="Orange Money" width={100} height={56} className="h-10 sm:h-14 w-auto object-contain block drop-shadow-md hover:drop-shadow-lg transition-all hover:scale-105" />
      <Image src="/FreeMoney.png" alt="Free Money" width={100} height={56} className="h-10 sm:h-14 w-auto object-contain block drop-shadow-md hover:drop-shadow-lg transition-all hover:scale-105" />
      <Image src="/Visa-MasterCard.png" alt="Visa/Mastercard" width={100} height={56} className="h-10 sm:h-14 w-auto object-contain block drop-shadow-md hover:drop-shadow-lg transition-all hover:scale-105" />
    </>
  );

  const steps = [
    {
      id: 1,
      icon: <Ticket className="w-8 h-8" />,
      title: "Choisissez votre opportunité",
      desc: "Sélectionnez le lot de vos rêves (Maison, Business, Famille) et le nombre de tickets."
    },
    {
      id: 2,
      icon: <CreditCard className="w-8 h-8" />,
      title: "Validez votre participation",
      desc: "Payez en toute sécurité via nos moyens de paiement partenaires.",
      hasPaymentsDesktop: true,
      hasPaymentsMobile: false
    },
    {
      id: 3,
      icon: <Gift className="w-8 h-8" />,
      title: "Patientez pour le tirage",
      desc: "Suivez le tirage en direct. Si vous gagnez, nous vous contactons immédiatement !",
      hasPaymentsDesktop: false,
      hasPaymentsMobile: true
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-[var(--bg-surface)] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-[var(--text-primary)] mb-4 transition-colors">JOUER EN 3 ÉTAPES SIMPLES</h2>
          <p className="text-[var(--text-secondary)] transition-colors">Participer n&apos;a jamais été aussi facile. En quelques clics, votre ticket est validé.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Connecting line for desktop (Perforated ticket style) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] border-t-2 border-dashed border-[var(--border-subtle)] -z-10 transition-colors" />

          {steps.map((step) => (
            <motion.div key={step.id} variants={itemVariants} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-[var(--bg-base)] border-8 border-[var(--bg-surface)] flex items-center justify-center text-[var(--color-mj-blue)] dark:text-white shadow-sm mb-6 relative transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,42,88,0.15)] dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-mj-red)] text-white font-bold flex items-center justify-center text-sm border-4 border-[var(--bg-surface)] transition-colors">
                  {step.id}
                </div>
                {step.icon}
              </div>

              <h3 className="font-heading text-xl text-[var(--text-primary)] mb-3 transition-colors">{step.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 transition-colors">
                {step.desc}
              </p>

              {step.hasPaymentsDesktop && (
                <div className="hidden md:flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6">
                  {paymentIcons}
                </div>
              )}
              {step.hasPaymentsMobile && (
                <div className="flex md:hidden flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6">
                  {paymentIcons}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
