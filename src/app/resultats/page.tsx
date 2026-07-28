"use client";

import { useEffect, useState } from 'react';
import { NextDrawHighlight } from '@/components/ui/NextDrawHighlight';
import { FeaturedDrawCard } from '@/components/ui/FeaturedDrawCard';
import { CompactDrawRow } from '@/components/ui/CompactDrawRow';
import { SegmentedPillTabs } from '@/components/ui/SegmentedPillTabs';
import { EmptyState } from '@/components/ui/EmptyState';
import { fetchDrawResults, type DrawResult } from '@/lib/mockData';
import { motion } from 'framer-motion';

const FILTER_TABS = [
  { id: 'tous', label: 'Tous les tirages' },
  { id: 'maison', label: 'Maison' },
  { id: 'business', label: 'Business' },
  { id: 'famille', label: 'Famille' }
];

export default function ResultatsPage() {
  const [activeTab, setActiveTab] = useState('tous');
  const [results, setResults] = useState<DrawResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const data = await fetchDrawResults();
        setResults(data);
      } catch (error) {
        console.error("Failed to load results", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredResults = results.filter(result => 
    activeTab === 'tous' ? true : result.productId === activeTab
  );

  const featuredResult = filteredResults.length > 0 ? filteredResults[0] : null;
  const olderResults = filteredResults.length > 1 ? filteredResults.slice(1) : [];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-default)] text-[var(--text-primary)] pt-12 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-[var(--text-primary)] dark:text-white">
            Résultats & Gagnants
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Registre officiel des tirages certifiés et des heureux élus de nos différentes opportunités.
          </p>
        </div>

        {/* Filters */}
        <SegmentedPillTabs 
          tabs={FILTER_TABS} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        <div className="mt-12 relative">
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-mj-gold)]"></div>
            </div>
          ) : filteredResults.length > 0 || activeTab === 'tous' ? (
            <div className="relative">
              
              {/* TIMELINE TRUNK */}
              <div className="absolute left-6 md:left-[2.25rem] top-8 bottom-0 w-[3px] bg-gray-200 dark:bg-white/10" />

              <div className="flex flex-col gap-10 md:gap-14">
                
                {/* 1. Upcoming Draw Node (Top of Timeline) */}
                {(activeTab === 'tous' || activeTab === 'maison') && (
                  <div className="relative pl-16 md:pl-24">
                    {/* Node Marker */}
                    <div className="absolute left-3.5 md:left-6 top-10 w-6 h-6 rounded-full bg-white dark:bg-[#0a1628] border-[3px] border-dashed border-[var(--color-mj-gold)] shadow-[0_0_15px_rgba(251,181,5,0.3)] z-10">
                      <div className="animate-ping absolute inset-0 rounded-full bg-[var(--color-mj-gold)] opacity-40"></div>
                    </div>
                    {/* Node Content */}
                    <NextDrawHighlight />
                  </div>
                )}

                {/* 2. Featured Result Node (Most Recent) */}
                {featuredResult && (
                  <div className="relative pl-16 md:pl-24">
                    {/* Node Marker */}
                    <div 
                      className="absolute left-3.5 md:left-6 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-[#0a1628] shadow-sm z-10"
                      style={{ 
                        backgroundColor: featuredResult.productId === 'maison' ? 'var(--color-mj-gold)' : 
                                         featuredResult.productId === 'business' ? 'var(--color-mj-red)' : 'var(--color-mj-blue)' 
                      }}
                    />
                    <FeaturedDrawCard result={featuredResult} />
                  </div>
                )}

                {/* 3. Older Results Nodes */}
                {olderResults.length > 0 && (
                  <div className="flex flex-col gap-6">
                    {olderResults.map((result, index) => (
                      <div key={result.id} className="relative pl-16 md:pl-24">
                        {/* Node Marker */}
                        <div 
                          className="absolute left-[1.125rem] md:left-[1.625rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-white dark:border-[#0a1628] shadow-sm z-10"
                          style={{ 
                            backgroundColor: result.productId === 'maison' ? 'var(--color-mj-gold)' : 
                                             result.productId === 'business' ? 'var(--color-mj-red)' : 'var(--color-mj-blue)' 
                          }}
                        />
                        <CompactDrawRow result={result} />
                      </div>
                    ))}
                  </div>
                )}
                
              </div>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <EmptyState 
                title="Aucun tirage passé" 
                message={`Aucun tirage n'a encore eu lieu pour l'opportunité ${activeTab}.`}
                actionHref="/#jeux"
                actionText="Jouer pour le prochain tirage"
              />
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
