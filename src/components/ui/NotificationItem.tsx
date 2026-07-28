"use client";

import { motion } from "framer-motion";
import { Trophy, Clock, Megaphone, Check } from "lucide-react";
import type { AppNotification } from "@/lib/mockData";

interface NotificationItemProps {
  notification: AppNotification;
  onMarkAsRead: (id: string) => void;
}

export function NotificationItem({ notification, onMarkAsRead }: NotificationItemProps) {
  const isGain = notification.type === 'gain';
  const isRappel = notification.type === 'rappel';
  const isPromo = notification.type === 'promo';

  const accentColor = isGain ? 'var(--color-mj-gold)' : isRappel ? 'var(--color-mj-blue)' : 'var(--color-mj-red)';
  const bgGradient = isGain ? 'from-yellow-50 to-transparent dark:from-yellow-900/10' : 
                     isRappel ? 'from-blue-50 to-transparent dark:from-blue-900/10' : 
                     'from-red-50 to-transparent dark:from-red-900/10';

  const Icon = isGain ? Trophy : isRappel ? Clock : Megaphone;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -10 }}
      onClick={() => !notification.isRead && onMarkAsRead(notification.id)}
      className={`relative p-4 rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden ${
        notification.isRead 
          ? 'bg-gray-50/50 dark:bg-white/5 border-transparent opacity-75 hover:opacity-100' 
          : `bg-gradient-to-br ${bgGradient} border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md`
      }`}
    >
      {!notification.isRead && (
        <div 
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
          style={{ backgroundColor: accentColor }}
        />
      )}

      <div className="flex gap-4">
        <div 
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
            notification.isRead ? 'bg-gray-200 dark:bg-black/40 text-gray-400' : 'bg-white dark:bg-[#0a1628] shadow-sm'
          }`}
          style={{ color: notification.isRead ? undefined : accentColor }}
        >
          <Icon className="w-5 h-5" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2 mb-1">
            <h4 className={`text-sm font-bold truncate ${notification.isRead ? 'text-gray-600 dark:text-gray-400' : 'text-[var(--text-primary)] dark:text-white'}`}>
              {notification.title}
            </h4>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {notification.timestamp}
            </span>
          </div>
          <p className={`text-xs line-clamp-2 ${notification.isRead ? 'text-gray-500 dark:text-gray-500' : 'text-gray-600 dark:text-gray-300'}`}>
            {notification.message}
          </p>
        </div>

        {!notification.isRead && (
          <div className="flex-shrink-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-500 hover:text-green-500">
              <Check className="w-3 h-3" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
