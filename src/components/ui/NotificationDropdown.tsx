"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCheck, ArrowRight, Bell } from "lucide-react";
import Link from "next/link";
import { NotificationItem } from "./NotificationItem";
import type { AppNotification } from "@/lib/mockData";
import { useEffect, useRef } from "react";

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: AppNotification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
}

export function NotificationDropdown({
  isOpen,
  onClose,
  notifications,
  onMarkAsRead,
  onMarkAllAsRead
}: NotificationDropdownProps) {
  const unreadCount = notifications.filter(n => !n.isRead).length;
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
          className="fixed top-[64px] left-4 right-4 sm:absolute sm:top-full sm:right-[-10px] sm:left-auto sm:mt-2 w-auto sm:w-96 max-h-[85vh] sm:max-h-[80vh] flex flex-col bg-white dark:bg-[#0a1628] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden z-[100] origin-top sm:origin-top-right"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/20">
            <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] dark:text-white flex items-center gap-2">
              Notifications
              {unreadCount > 0 && (
                <span className="bg-[var(--color-mj-red)] text-white text-[10px] px-2 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </h3>
            
            {unreadCount > 0 && (
              <button 
                onClick={onMarkAllAsRead}
                className="text-xs text-gray-500 hover:text-[var(--color-mj-gold)] transition-colors flex items-center gap-1"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                Tout marquer comme lu
              </button>
            )}
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 overscroll-contain">
            {notifications.length > 0 ? (
              <AnimatePresence initial={false}>
                {notifications.map((notif) => (
                  <NotificationItem 
                    key={notif.id} 
                    notification={notif} 
                    onMarkAsRead={onMarkAsRead} 
                  />
                ))}
              </AnimatePresence>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-4">
                  <Bell className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-medium">Aucune notification pour le moment.</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/20">
            <Link 
              href="/notifications" 
              onClick={onClose}
              className="w-full py-2.5 rounded-xl text-sm font-bold text-[var(--color-mj-blue)] dark:text-blue-400 hover:bg-[var(--color-mj-blue)]/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group"
            >
              Voir toutes les notifications
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
