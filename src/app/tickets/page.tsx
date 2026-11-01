"use client";

import { useEffect, useState } from 'react';
import { TicketTabs, type TabValue } from '@/components/ui/TicketTabs';
import { PlayerTicketCard } from '@/components/ui/PlayerTicketCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { fetchUserTickets, fetchTicketsSummary, type PlayerTicket } from '@/lib/mockData';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

export default function TicketsPage() {
  const { locale, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabValue>('tous');
  const [tickets, setTickets] = useState<PlayerTicket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [summary, setSummary] = useState({ totalTickets: 0, totalSpent: 0, nextDrawDate: '-' });

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const [ticketsData, summaryData] = await Promise.all([
          fetchUserTickets(locale),
          fetchTicketsSummary(locale)
        ]);
        setTickets(ticketsData);
        setSummary(summaryData);
      } catch (error) {
        console.error("Failed to load tickets", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [locale]);

  const filteredTickets = tickets.filter(tk => activeTab === 'tous' || tk.productId === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-default)] text-[var(--text-primary)] pt-24 sm:pt-28 md:pt-32 pb-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-[var(--text-primary)] dark:text-white uppercase tracking-tight">{t.ticketsPage.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">{t.ticketsPage.subtitle}</p>
        </div>

        {/* Summary Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white dark:bg-[var(--bg-surface)] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">{t.ticketsPage.activeTickets}</p>
            <p className="text-3xl font-bold font-mono">{summary.totalTickets}</p>
          </div>
          <div className="bg-white dark:bg-[var(--bg-surface)] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">{t.ticketsPage.amountPlayed}</p>
            <p className="text-3xl font-bold font-mono text-[var(--color-mj-gold)]">{summary.totalSpent.toLocaleString(locale === 'en' ? 'en-US' : 'fr-FR')} <span className="text-lg">FCFA</span></p>
          </div>
          <div className="bg-white dark:bg-[var(--bg-surface)] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">{t.ticketsPage.nextDraw}</p>
            <p className="text-2xl font-bold text-[var(--color-mj-red)] mt-1">{summary.nextDrawDate}</p>
          </div>
        </div>
        
        <TicketTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-mj-gold)]"></div>
            </div>
          ) : filteredTickets.length > 0 ? (
            <div className="flex flex-col gap-6">
              {filteredTickets.map((ticket, index) => (
                <PlayerTicketCard key={ticket.id} ticket={ticket} index={index} />
              ))}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <EmptyState 
                title={t.ticketsPage.emptyTitle} 
                message={activeTab === 'tous' 
                  ? t.ticketsPage.emptyAllMessage 
                  : `${t.ticketsPage.emptyTabPrefix}${t.ticketsPage.tabs[activeTab]}.`}
                actionHref="/#jeux"
                actionText={t.ticketsPage.emptyCta}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
