"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Shield, Sparkles } from "lucide-react";

export interface TabType {
  id: string;
  label: string;
}

interface SegmentedPillTabsProps {
  tabs: TabType[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function SegmentedPillTabs({ tabs, activeTab, onTabChange }: SegmentedPillTabsProps) {
  
  const getTabIcon = (id: string, isActive: boolean) => {
    const className = `w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`;
    switch (id) {
      case 'tous': return <Sparkles className={className} />;
      case 'maison': return <Home className={className} />;
      case 'business': return <Briefcase className={className} />;
      case 'famille': return <Shield className={className} />;
      default: return null;
    }
  };

  const getTabColor = (id: string) => {
    switch (id) {
      case 'maison': return 'bg-[var(--color-mj-gold)] shadow-[var(--color-mj-gold)]/30';
      case 'business': return 'bg-[var(--color-mj-red)] shadow-[var(--color-mj-red)]/30';
      case 'famille': return 'bg-[var(--color-mj-blue)] shadow-[var(--color-mj-blue)]/30';
      default: return 'bg-gray-800 dark:bg-white shadow-black/20 dark:shadow-white/20';
    }
  };

  return (
    <div className="flex justify-center w-full my-8">
      <div className="inline-flex bg-gray-100 dark:bg-black/40 p-1.5 rounded-full shadow-inner border border-gray-200 dark:border-white/5 overflow-x-auto max-w-full no-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                isActive ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className={`absolute inset-0 rounded-full shadow-lg ${getTabColor(tab.id)}`}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {getTabIcon(tab.id, isActive)}
                <span className={isActive && tab.id === 'tous' ? 'text-white dark:text-black' : ''}>{tab.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
