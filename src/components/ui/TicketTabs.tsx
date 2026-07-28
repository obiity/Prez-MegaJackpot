"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Shield, List } from "lucide-react";

export type TabValue = 'tous' | 'maison' | 'business' | 'famille';

interface TicketTabsProps {
  activeTab: TabValue;
  onTabChange: (tab: TabValue) => void;
}

const TABS = [
  { id: 'tous', label: 'Tous', icon: List, color: 'var(--text-primary)' },
  { id: 'maison', label: 'Maison', icon: Home, color: 'var(--color-mj-gold)' },
  { id: 'business', label: 'Business', icon: Briefcase, color: 'var(--color-mj-red)' },
  { id: 'famille', label: 'Famille', icon: Shield, color: 'var(--color-mj-blue)' },
];

export function TicketTabs({ activeTab, onTabChange }: TicketTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10 relative z-10">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        // Custom styling for active state based on product color
        const activeStyle = isActive && tab.id === 'maison' ? { background: 'var(--color-mj-gold)', color: 'var(--color-mj-blue-dark)', boxShadow: '0 10px 25px -5px rgba(251,181,5,0.5)' } :
                            isActive && tab.id === 'business' ? { background: 'var(--color-mj-red)', color: 'white', boxShadow: '0 10px 25px -5px rgba(218,21,31,0.5)' } :
                            isActive && tab.id === 'famille' ? { background: 'var(--color-mj-blue)', color: 'white', boxShadow: '0 10px 25px -5px rgba(16,42,88,0.5)' } :
                            isActive ? { background: 'var(--text-primary)', color: 'var(--bg-base)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)' } :
                            { background: 'transparent', color: 'var(--text-secondary)' };

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id as TabValue)}
            className="relative overflow-hidden group rounded-xl transition-all duration-300"
            style={{
              transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
              color: isActive ? activeStyle.color : 'var(--text-secondary)',
            }}
          >
            {/* The Ticket Stub Shape background */}
            <div 
              className="absolute inset-0 transition-colors duration-300"
              style={{
                ...activeStyle,
                // Create the perforated edge look with CSS masking if supported, or just use rounded borders
                // For a true stub look, we use radial gradients to cut out semi-circles on the sides
                maskImage: 'radial-gradient(circle at 0 50%, transparent 6px, black 6.5px), radial-gradient(circle at 100% 50%, transparent 6px, black 6.5px)',
                maskComposite: 'intersect',
                WebkitMaskImage: 'radial-gradient(circle at 0 50%, transparent 6px, black 6.5px), radial-gradient(circle at 100% 50%, transparent 6px, black 6.5px)',
                WebkitMaskComposite: 'source-in',
                border: isActive ? 'none' : '1px solid var(--border-subtle)',
                backgroundColor: isActive ? activeStyle.background : 'rgba(255, 255, 255, 0.05)',
                backdropFilter: isActive ? 'none' : 'blur(8px)',
              }}
            />

            {/* Inner Content */}
            <div className="relative z-10 px-6 py-3 flex items-center gap-2 font-bold tracking-wide">
              <Icon 
                className="w-4 h-4 transition-colors duration-300" 
                style={{ color: isActive ? 'inherit' : tab.color }} 
              />
              <span className="uppercase text-sm drop-shadow-sm">{tab.label}</span>
            </div>

            {/* Shine effect on hover for inactive tabs */}
            {!isActive && (
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            )}
          </button>
        );
      })}
    </div>
  );
}
