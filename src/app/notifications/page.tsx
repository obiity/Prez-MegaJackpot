"use client";

import { useEffect, useState } from 'react';
import { NotificationItem } from '@/components/ui/NotificationItem';
import { EmptyState } from '@/components/ui/EmptyState';
import { fetchNotifications, type AppNotification } from '@/lib/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCheck } from 'lucide-react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (error) {
        console.error("Failed to load notifications", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-default)] text-[var(--text-primary)] pt-12 pb-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-2 text-[var(--text-primary)] dark:text-white flex items-center gap-4">
              Notifications
              {unreadCount > 0 && (
                <span className="bg-[var(--color-mj-red)] text-white text-lg px-3 py-1 rounded-full shadow-lg">
                  {unreadCount}
                </span>
              )}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">Suivez votre actualité et vos opportunités.</p>
          </div>

          {unreadCount > 0 && (
            <button 
              onClick={handleMarkAllAsRead}
              className="text-sm font-semibold text-[var(--color-mj-blue)] hover:text-[var(--color-mj-gold)] transition-colors flex items-center gap-2 bg-white dark:bg-white/5 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-white/10"
            >
              <CheckCheck className="w-4 h-4" />
              Tout marquer comme lu
            </button>
          )}
        </div>

        <div className="mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-mj-gold)]"></div>
            </div>
          ) : notifications.length > 0 ? (
            <div className="flex flex-col gap-4">
              <AnimatePresence initial={false}>
                {notifications.map((notif) => (
                  <NotificationItem 
                    key={notif.id} 
                    notification={notif} 
                    onMarkAsRead={handleMarkAsRead} 
                  />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <EmptyState 
                title="Aucune notification" 
                message="Vous êtes à jour ! Dès qu'une nouveauté concernant vos tickets ou nos jeux sera disponible, vous la trouverez ici."
                icon={<Bell className="w-10 h-10 text-gray-400" />}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
