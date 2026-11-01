import { getDictionary } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/config";

export type ProductType = 'maison' | 'business' | 'famille';
export type TicketStatus = 'en_attente' | 'gagnant' | 'perdu';

export interface PlayerTicket {
  id: string;
  productId: ProductType;
  productName: string;
  serialNumber: string;
  purchaseDate: string;
  drawDate: string;
  status: TicketStatus;
}

export interface DrawResult {
  id: string;
  productId: ProductType;
  productName: string;
  drawDate: string;
  winningSerialNumber: string;
  prizeDescription: string;
  winnerName: string;
  winnerCity: string;
}

// [SAMPLE DATA] - Mock data for development
export const MOCK_TICKETS: PlayerTicket[] = [
  {
    id: "tkt-001",
    productId: "maison",
    productName: "Opportunité Maison",
    serialNumber: "MJ-2026-X8B9-1042",
    purchaseDate: "12 Mai 2026",
    drawDate: "15 Août 2026",
    status: "en_attente"
  },
  {
    id: "tkt-002",
    productId: "business",
    productName: "Opportunité Business",
    serialNumber: "MJ-2026-B4L2-8831",
    purchaseDate: "03 Juin 2026",
    drawDate: "01 Juil 2026",
    status: "perdu"
  },
  {
    id: "tkt-003",
    productId: "famille",
    productName: "Opportunité Famille",
    serialNumber: "MJ-2026-F9P1-0023",
    purchaseDate: "10 Jan 2026",
    drawDate: "20 Fév 2026",
    status: "gagnant"
  },
  {
    id: "tkt-004",
    productId: "business",
    productName: "Opportunité Business",
    serialNumber: "MJ-2026-B8C2-9910",
    purchaseDate: "15 Juin 2026",
    drawDate: "01 Juil 2026",
    status: "en_attente"
  }
];

// [SAMPLE DATA] - Mock data for development
export const MOCK_RESULTS: DrawResult[] = [
  {
    id: "res-001",
    productId: "maison",
    productName: "Opportunité Maison",
    drawDate: "15 Déc 2025",
    winningSerialNumber: "MJ-2025-••••-8812",
    prizeDescription: "Villa de Luxe (Valeur 100M FCFA)",
    winnerName: "Mamadou S.",
    winnerCity: "Dakar"
  },
  {
    id: "res-002",
    productId: "famille",
    productName: "Opportunité Famille",
    drawDate: "20 Fév 2026",
    winningSerialNumber: "MJ-2026-••••-0023",
    prizeDescription: "Rente de 2M FCFA/mois (36 mois)",
    winnerName: "Votre Ticket", // Simulating the current user won
    winnerCity: "Bouaké"
  },
  {
    id: "res-003",
    productId: "business",
    productName: "Opportunité Business",
    drawDate: "15 Jan 2026",
    winningSerialNumber: "MJ-2026-••••-4921",
    prizeDescription: "Capital de 15M FCFA + Voyage Dubaï",
    winnerName: "Amadou K.",
    winnerCity: "Abidjan"
  }
];

export async function fetchUserTickets(locale: Locale = "fr"): Promise<PlayerTicket[]> {
  const dict = getDictionary(locale);
  const localized = MOCK_TICKETS.map((ticket) => {
    const tr = dict.mockData.tickets[ticket.id as keyof typeof dict.mockData.tickets];
    return tr ? { ...ticket, ...tr } : ticket;
  });
  return new Promise(resolve => setTimeout(() => resolve(localized), 400));
}

export async function fetchDrawResults(locale: Locale = "fr"): Promise<DrawResult[]> {
  const dict = getDictionary(locale);
  const localized = MOCK_RESULTS.map((result) => {
    const tr = dict.mockData.results[result.id as keyof typeof dict.mockData.results];
    return tr ? { ...result, ...tr } : result;
  });
  return new Promise(resolve => setTimeout(() => resolve(localized), 400));
}

export async function fetchTicketsSummary(locale: Locale = "fr") {
  const dict = getDictionary(locale);
  return new Promise<{ totalTickets: number; totalSpent: number; nextDrawDate: string }>(resolve => setTimeout(() => resolve({
    totalTickets: 4,
    totalSpent: 40000,
    nextDrawDate: dict.mockData.summaryNextDrawDate
  }), 400));
}

export type NotificationType = 'gain' | 'rappel' | 'promo';

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

export const MOCK_NOTIFICATIONS: AppNotification[] = [
  {
    id: "notif-001",
    type: "gain",
    title: "Résultats Disponibles !",
    message: "Le tirage Famille de février est terminé. Vérifiez vos tickets pour voir si vous avez gagné.",
    timestamp: "Il y a 10 min",
    isRead: false
  },
  {
    id: "notif-002",
    type: "rappel",
    title: "Tirage imminent",
    message: "Le grand tirage Opportunité Business a lieu demain. Il est encore temps de participer !",
    timestamp: "Il y a 2h",
    isRead: false
  },
  {
    id: "notif-003",
    type: "promo",
    title: "Offre Spéciale",
    message: "Invitez un ami et recevez un ticket gratuit pour le prochain tirage Maison.",
    timestamp: "Hier",
    isRead: true
  }
];

export async function fetchNotifications(locale: Locale = "fr"): Promise<AppNotification[]> {
  const dict = getDictionary(locale);
  const localized = MOCK_NOTIFICATIONS.map((notif) => {
    const tr = dict.mockData.notifications[notif.id as keyof typeof dict.mockData.notifications];
    return tr ? { ...notif, ...tr } : { ...notif };
  });
  return new Promise(resolve => setTimeout(() => resolve(localized), 300));
}
