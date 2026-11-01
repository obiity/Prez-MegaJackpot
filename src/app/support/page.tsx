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
import { useLanguage, getDictionary } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/config";

export default function SupportPage() {
  const { locale, setLocale, t } = useLanguage();
  const s = t.supportPage;

  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const filteredFaqs = s.faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleLanguageChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    setLocale(nextLocale);
    toast.success(getDictionary(nextLocale).languageSwitcher.toastSwitched);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] pt-24 sm:pt-28 pb-32 px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        {/* Top Navigation Back Header */}
        <div className="flex items-center justify-between mb-6 gap-2 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[#fbb505] transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" /> {s.backToHome}
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#da151f]/10 text-[#da151f] font-mono text-xs font-bold uppercase tracking-wider">
            <LifeBuoy className="w-3.5 h-3.5" /> {s.officialHelpBadge}
          </div>
        </div>

        {/* 1. Header Banner with Support Agent */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#a00c17] via-[#da151f] to-[#a00c17] text-white p-6 sm:p-10 shadow-2xl mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-lg text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md text-xs font-mono font-bold px-3 py-1 rounded-full mb-4 border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fbb505] animate-ping" />
              <span>{s.onlineHoursBadge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold uppercase leading-tight mb-3">
              {s.heroTitle}
            </h1>
            <p className="text-sm sm:text-base text-white/90 font-medium">
              {s.heroSubtitle}
            </p>
          </div>

          {/* Support Agent Image */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 shrink-0 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl bg-black/20">
            <Image
              src="/support_agent.png"
              alt={s.agentAlt}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* 2. Grid of 6 Support Channels */}
        <div className="mb-12">
          <h2 className="text-xl font-heading font-bold text-[var(--text-primary)] uppercase mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#fbb505]" />
            {s.channelsHeading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Live Chat */}
            <button
              type="button"
              onClick={() => toast.info(s.toastLiveChat)}
              className="text-left p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#fbb505] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#da151f]/10 text-[#da151f] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    {s.liveChatTitle}
                  </h3>
                  <span className="text-[10px] font-bold text-[#fbb505] block mb-1">
                    {s.onlineStatus}
                  </span>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {s.liveChatDesc}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#fbb505] group-hover:translate-x-1 transition-all shrink-0" />
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/221771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#fbb505] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#102a58]/15 text-[#fbb505] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    WhatsApp
                  </h3>
                  <span className="text-[11px] font-mono text-[var(--text-primary)] font-semibold block mb-1">
                    +221 77 123 45 67
                  </span>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {s.whatsappDesc}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#fbb505] group-hover:translate-x-1 transition-all shrink-0" />
            </a>

            {/* Phone Call */}
            <a
              href="tel:+221331234567"
              className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#fbb505] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#102a58]/15 text-[#102a58] dark:text-[#fbb505] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    {s.phoneTitle}
                  </h3>
                  <span className="text-[11px] font-mono text-[var(--text-primary)] font-semibold block mb-1">
                    +221 33 123 45 67
                  </span>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {s.phoneDesc}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#fbb505] group-hover:translate-x-1 transition-all shrink-0" />
            </a>

            {/* Email */}
            <a
              href="mailto:support@megajackpot.sn"
              className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#fbb505] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#fbb505]/15 text-[#fbb505] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    Email
                  </h3>
                  <span className="text-[11px] font-mono text-[var(--text-primary)] font-semibold block mb-1">
                    support@megajackpot.sn
                  </span>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {s.emailDesc}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#fbb505] group-hover:translate-x-1 transition-all shrink-0" />
            </a>

            {/* Claims */}
            <button
              type="button"
              onClick={() => toast.info(s.toastClaims)}
              className="text-left p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#fbb505] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#da151f]/10 text-[#da151f] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    {s.claimsTitle}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    {s.claimsDesc}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#fbb505] group-hover:translate-x-1 transition-all shrink-0" />
            </button>

            {/* Support Tickets */}
            <button
              type="button"
              onClick={() => toast.info(s.toastSupportTickets)}
              className="text-left p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#fbb505] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex items-start justify-between"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#fbb505]/15 text-[#fbb505] flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    {s.supportTicketsTitle}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    {s.supportTicketsDesc}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#fbb505] group-hover:translate-x-1 transition-all shrink-0" />
            </button>
          </div>
        </div>

        {/* 3. FAQ Section with Search & Accordions */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-heading font-bold text-[var(--text-primary)] uppercase flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#fbb505]" />
              {s.faqHeading}
            </h2>
          </div>

          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={s.searchPlaceholder}
              className="w-full min-h-[48px] pl-12 pr-4 py-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] focus:border-[#fbb505] focus:outline-none text-sm text-[var(--text-primary)] transition-all shadow-sm"
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
                      className="w-full min-h-[52px] px-6 py-4 flex items-center justify-between gap-3 text-left font-heading font-bold text-sm text-[var(--text-primary)] hover:text-[#fbb505] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <span className="w-6 h-6 rounded-full bg-[#da151f] text-white flex items-center justify-center text-xs shrink-0">
                          −
                        </span>
                      ) : (
                        <span className="w-6 h-6 rounded-full bg-black/5 dark:bg-white/10 text-[var(--text-primary)] flex items-center justify-center text-xs shrink-0">
                          +
                        </span>
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-2 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] bg-black/5 dark:bg-white/5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-sm text-[var(--text-secondary)]">
                {s.noFaqMatchPrefix} &quot;{searchQuery}&quot;.
              </div>
            )}
          </div>
        </div>

        {/* 4. Urgent Assistance Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#da151f]/10 border border-[#da151f]/30 text-center mb-12 shadow-sm">
          <div className="w-14 h-14 rounded-full bg-[#da151f] text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
            <PhoneCall className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-1">
            {s.urgentTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-5">
            {s.urgentDesc}
          </p>
          <a
            href="tel:+221331234567"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3.5 bg-[#da151f] hover:bg-[#a00c17] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
          >
            {s.urgentCta}
          </a>
        </div>

        {/* 5. Other Solutions / Resource Links */}
        <div className="mb-12">
          <h2 className="text-xl font-heading font-bold text-[var(--text-primary)] uppercase mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#fbb505]" />
            {s.otherSolutionsHeading}
          </h2>

          <div className="space-y-3">
            <Link
              href="/#comment-jouer"
              className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#fbb505] transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#fbb505]/15 text-[#fbb505] flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    {s.userGuideTitle}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {s.userGuideDesc}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#fbb505] group-hover:translate-x-1 transition-all shrink-0" />
            </Link>

            <Link
              href="/parametres"
              className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#fbb505] transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#102a58]/15 text-[#fbb505] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    {s.securityTitle}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {s.securityDesc}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#fbb505] group-hover:translate-x-1 transition-all shrink-0" />
            </Link>

            <Link
              href="/support"
              className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#fbb505] transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#da151f]/10 text-[#da151f] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    {s.rulesTitle}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {s.rulesDesc}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#fbb505] group-hover:translate-x-1 transition-all shrink-0" />
            </Link>

            <Link
              href="/parrainage"
              className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#fbb505] transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#fbb505]/15 text-[#fbb505] flex items-center justify-center shrink-0">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    {s.loyaltyTitle}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {s.loyaltyDesc}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#fbb505] group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          </div>
        </div>

        {/* 6. Availability Hours & Global Language Switcher */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-[#fbb505]" />
            <h3 className="font-heading font-bold text-base uppercase text-[var(--text-primary)]">
              {s.hoursHeading}
            </h3>
          </div>

          <div className="space-y-2 text-sm text-[var(--text-secondary)] font-mono border-b border-[var(--border-subtle)] pb-4 mb-6">
            <div className="flex justify-between">
              <span>{s.monFri}</span>
              <span className="font-bold text-[var(--text-primary)]">
                08h00 – 22h00
              </span>
            </div>
            <div className="flex justify-between">
              <span>{s.satSun}</span>
              <span className="font-bold text-[var(--text-primary)]">
                09h00 – 20h00
              </span>
            </div>
            <div className="flex justify-between">
              <span>{s.holidays}</span>
              <span className="font-bold text-[var(--text-primary)]">
                09h00 – 18h00
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] pt-2 font-sans">
              {s.replyNote}
            </p>
          </div>

          {/* Global Site & Support Language Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-mono uppercase text-[var(--text-secondary)] flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#fbb505]" /> {s.siteLanguageLabel}
            </span>
            <div className="flex gap-1 p-1 bg-black/5 dark:bg-white/5 rounded-xl border border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={() => handleLanguageChange("fr")}
                className={`flex-1 sm:flex-none min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  locale === "fr"
                    ? "bg-[#da151f] text-white shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                🇫🇷 Français
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`flex-1 sm:flex-none min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  locale === "en"
                    ? "bg-[#da151f] text-white shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
