"use client";

import { motion } from "framer-motion";
import { Ticket, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

interface EmptyStateProps {
  title: string;
  message: string;
  icon?: React.ReactNode;
  actionHref?: string;
  actionText?: string;
}

export function EmptyState({ title, message, icon, actionHref, actionText }: EmptyStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-[var(--bg-surface)] rounded-3xl shadow-lg border border-gray-100 dark:border-white/5 p-12 flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-mj-gold)]/5 to-transparent pointer-events-none" />
      
      <div className="w-24 h-24 bg-gray-50 dark:bg-black/20 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-inner">
        {icon || <Ticket className="w-10 h-10 text-gray-400 dark:text-gray-500" />}
      </div>
      
      <h2 className="text-2xl font-bold mb-3 font-heading text-[var(--text-primary)] dark:text-white">{title}</h2>
      
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md relative z-10 text-lg">
        {message}
      </p>
      
      {actionHref && actionText && (
        <Link href={actionHref} className="relative z-10">
          <Button size="lg" className="bg-[var(--color-mj-red)] hover:bg-[var(--color-mj-red-dark)] text-white font-bold rounded-xl px-8 shadow-lg shadow-[var(--color-mj-red)]/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            <Search className="w-5 h-5" />
            {actionText}
          </Button>
        </Link>
      )}
    </motion.div>
  );
}
