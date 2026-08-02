"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Phone,
  Mail,
  FileText,
  HelpCircle,
  Search,
  ChevronRight,
  ChevronDown,
  Clock,
  ShieldCheck,
  BookOpen,
  Gift,
  PhoneCall,
  Globe,
  ArrowLeft,
  LifeBuoy,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "Comment acheter un ticket ?",
    answer:
      "Sélectionnez le jeu de votre choix (Maison, Business, Famille), choisissez vos numéros fétiches ou laissez le système le faire pour vous, puis validez votre achat en choisissant votre moyen de paiement sécurisé (Wave, Orange Money, Free Money, Visa/Mastercard).",
  },
  {
    id: "faq-2",
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons Mobile Money (Wave, Orange Money, Free Money) ainsi que les cartes bancaires Visa et Mastercard. Toutes les transactions sont 100% sécurisées.",
  },
  {
    id: "faq-3",
    question: "Comment retirer mes gains ?",
    answer:
      "Pour les petits lots, le versement est automatique sur votre compte Mobile Money. Pour les grands lots (Villa, Capital Business, Rente Famille), la remise s'effectue en mains propres lors de la cérémonie officielle en présence d'un Huissier de Justice.",
  },
  {
    id: "faq-4",
    question: "Comment fonctionne le parrainage ?",
    answer:
      "Partagez votre code de parrainage unique accessible dans la rubrique 'Mon Compte'. Pour chaque ami inscrit qui achète son premier ticket, vous recevez un ticket gratuit pour le tirage de votre choix.",
  },
  {
    id: "faq-5",
    question: "Que faire en cas de ticket non reçu ?",
    answer:
      "Vérifiez l'historique dans votre espace 'Mes Tickets'. Si le paiement a été débité mais que le ticket n'apparaît pas après 5 minutes, cliquez sur le bouton 'Chat en direct' ou contactez-nous via WhatsApp avec la référence de votre transaction.",
  },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
  const [selectedLanguage, setSelectedLanguage] = useState<"fr" | "wo">("fr");

  const filteredFaqs = FAQ_LIST.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] pt-20 pb-28 px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        
        {/* Top Navigation Back Header */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Retour à l&apos;accueil
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-mj-red)]/10 text-[var(--color-mj-red)] font-mono text-xs font-bold uppercase tracking-wider">
            <LifeBuoy className="w-3.5 h-3.5" /> Centre d&apos;Aide Official
          </div>
        </div>

        {/* 1. Header Banner with Support Agent */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[var(--color-mj-red-dark)] via-[#da151f] to-[#a00c17] text-white p-6 sm:p-10 shadow-2xl mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="relative z-10 max-w-lg text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md text-xs font-mono font-bold px-3 py-1 rounded-full mb-4 border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
              <span>En ligne • 08h – 22h</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold uppercase leading-tight mb-3">
              Nous sommes là pour vous aider !
            </h1>
            <p className="text-sm sm:text-base text-red-100 font-medium">
              Une question, un problème ? Notre équipe support est à votre entière écoute 7j/7.
            </p>
          </div>

          {/* Support Agent Image */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 shrink-0 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl bg-black/20">
            <Image
              src="/support_agent.png"
              alt="Conseillère Support Client MEGA JACKPOT"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

        </div>

        {/* 2. Grid of 6 Support Channels */}
        <div className="mb-12">
          <h2 className="text-xl font-heading font-bold text-[var(--text-primary)] uppercase mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[var(--color-mj-gold)]" />
            Comment pouvons-nous vous aider ?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Live Chat */}
            <div
              onClick={() => toast.info("Ouverture du Chat en direct...")}
              className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--color-mj-gold)] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-[var(--color-mj-red)] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">Chat en direct</h3>
                  <span className="text-[10px] font-bold text-green-500 block mb-1">En ligne</span>
                  <p className="text-xs text-[var(--text-secondary)]">Discutez avec nos conseillers</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-mj-gold)] group-hover:translate-x-1 transition-all" />
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/221771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--color-mj-gold)] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">WhatsApp</h3>
                  <span className="text-[11px] font-mono text-[var(--text-primary)] font-semibold block mb-1">+221 77 123 45 67</span>
                  <p className="text-xs text-[var(--text-secondary)]">Réponse rapide sur WhatsApp</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-mj-gold)] group-hover:translate-x-1 transition-all" />
            </a>

            {/* Phone Call */}
            <a
              href="tel:+221331234567"
              className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--color-mj-gold)] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">Appel téléphonique</h3>
                  <span className="text-[11px] font-mono text-[var(--text-primary)] font-semibold block mb-1">+221 33 123 45 67</span>
                  <p className="text-xs text-[var(--text-secondary)]">Parlez directement à un conseiller</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-mj-gold)] group-hover:translate-x-1 transition-all" />
            </a>

            {/* Email */}
            <a
              href="mailto:support@megajackpot.sn"
              className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--color-mj-gold)] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">Email</h3>
                  <span className="text-[11px] font-mono text-[var(--text-primary)] font-semibold block mb-1">support@megajackpot.sn</span>
                  <p className="text-xs text-[var(--text-secondary)]">Réponse sous 24h ouvrables</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-mj-gold)] group-hover:translate-x-1 transition-all" />
            </a>

            {/* Reclamations */}
            <div
              onClick={() => toast.info("Ouverture du Centre de réclamations...")}
              className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--color-mj-gold)] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">Centre de réclamations</h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Déposez une réclamation ou un litige</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-mj-gold)] group-hover:translate-x-1 transition-all" />
            </div>

            {/* Assistance Tickets */}
            <div
              onClick={() => toast.info("Chargement de vos tickets d'assistance...")}
              className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--color-mj-gold)] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">Mes tickets d&apos;assistance</h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Suivi de vos demandes & réclamations</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-mj-gold)] group-hover:translate-x-1 transition-all" />
            </div>

          </div>
        </div>

        {/* 3. FAQ Section with Search & Accordions */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-heading font-bold text-[var(--text-primary)] uppercase flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[var(--color-mj-gold)]" />
              Foire Aux Questions
            </h2>
          </div>

          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une question..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] focus:border-[var(--color-mj-gold)] focus:outline-none text-sm text-[var(--text-primary)] transition-all shadow-sm"
            />
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left font-heading font-bold text-sm text-[var(--text-primary)] hover:text-[var(--color-mj-gold)] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <span className="w-6 h-6 rounded-full bg-[var(--color-mj-red)] text-white flex items-center justify-center text-xs shrink-0">−</span>
                      ) : (
                        <span className="w-6 h-6 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 flex items-center justify-center text-xs shrink-0">+</span>
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] bg-black/5 dark:bg-white/5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-sm text-[var(--text-secondary)]">
                Aucune question ne correspond à votre recherche &quot;{searchQuery}&quot;.
              </div>
            )}
          </div>
        </div>

        {/* 4. Urgent Assistance Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-red-50 dark:bg-[var(--color-mj-red)]/10 border border-[var(--color-mj-red)]/30 text-center mb-12 shadow-sm">
          <div className="w-14 h-14 rounded-full bg-[var(--color-mj-red)] text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[var(--color-mj-red)]/30">
            <PhoneCall className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-1">
            Besoin d&apos;une assistance urgente ?
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-5">
            Contactez immédiatement un conseiller dédié par téléphone ou WhatsApp.
          </p>
          <a
            href="tel:+221331234567"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-mj-red)] hover:bg-red-600 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
          >
            CONTACTER UN CONSEILLER
          </a>
        </div>

        {/* 5. Other Solutions / Resource Links */}
        <div className="mb-12">
          <h2 className="text-xl font-heading font-bold text-[var(--text-primary)] uppercase mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[var(--color-mj-gold)]" />
            Autres Solutions
          </h2>

          <div className="space-y-3">
            
            <Link
              href="/comment-jouer"
              className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--color-mj-gold)] transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[var(--text-primary)]">Guide d&apos;utilisation</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Apprenez à utiliser MEGAJACKPOT</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-mj-gold)] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/support"
              className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--color-mj-gold)] transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[var(--text-primary)]">Sécurité & confidentialité</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Vos données personnelles sont 100% protégées</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-mj-gold)] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/support"
              className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--color-mj-gold)] transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[var(--text-primary)]">Règlement & conditions</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Consultez nos règles du jeu et agréments officiels</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-mj-gold)] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/compte"
              className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--color-mj-gold)] transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[var(--text-primary)]">Programme de fidélité</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Découvrez vos bonus et parrainages</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-mj-gold)] group-hover:translate-x-1 transition-all" />
            </Link>

          </div>
        </div>

        {/* 6. Availability Hours & Language Switcher */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-[var(--color-mj-gold)]" />
            <h3 className="font-heading font-bold text-base uppercase text-[var(--text-primary)]">
              Horaires de Disponibilité
            </h3>
          </div>

          <div className="space-y-2 text-sm text-[var(--text-secondary)] font-mono border-b border-[var(--border-subtle)] pb-4 mb-6">
            <div className="flex justify-between">
              <span>Lundi – Vendredi</span>
              <span className="font-bold text-[var(--text-primary)]">08h00 – 22h00</span>
            </div>
            <div className="flex justify-between">
              <span>Samedi – Dimanche</span>
              <span className="font-bold text-[var(--text-primary)]">09h00 – 20h00</span>
            </div>
            <div className="flex justify-between">
              <span>Jours fériés</span>
              <span className="font-bold text-[var(--text-primary)]">09h00 – 18h00</span>
            </div>
            <p className="text-xs text-gray-400 pt-2 font-sans">Nous répondons dès que possible.</p>
          </div>

          {/* Language Selector */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-[var(--text-secondary)] flex items-center gap-1.5">
              <Globe className="w-4 h-4" /> Langue du support
            </span>
            <div className="flex gap-1 p-1 bg-black/5 dark:bg-white/5 rounded-xl border border-[var(--border-subtle)]">
              <button
                onClick={() => setSelectedLanguage("fr")}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedLanguage === "fr"
                    ? "bg-[var(--color-mj-red)] text-white shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                Français
              </button>
              <button
                onClick={() => setSelectedLanguage("wo")}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedLanguage === "wo"
                    ? "bg-[var(--color-mj-red)] text-white shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                Wolof
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
