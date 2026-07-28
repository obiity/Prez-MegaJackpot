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
    productId: "business",
    productName: "Opportunité Business",
    drawDate: "01 Juil 2026",
    winningSerialNumber: "MJ-2026-••••-4921",
    prizeDescription: "Capital de 15M FCFA + Voyage Dubaï",
    winnerName: "Amadou K.",
    winnerCity: "Abidjan"
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
    productId: "maison",
    productName: "Opportunité Maison",
    drawDate: "15 Déc 2025",
    winningSerialNumber: "MJ-2025-••••-8812",
    prizeDescription: "Villa de Luxe (Valeur 100M FCFA)",
    winnerName: "Sarah M.",
    winnerCity: "Yamoussoukro"
  }
];

export async function fetchUserTickets(): Promise<PlayerTicket[]> {
  // Simulate network delay
  return new Promise(resolve => setTimeout(() => resolve(MOCK_TICKETS), 800));
}

export async function fetchDrawResults(): Promise<DrawResult[]> {
  // Simulate network delay
  return new Promise(resolve => setTimeout(() => resolve(MOCK_RESULTS), 800));
}

export async function fetchTicketsSummary() {
  return new Promise(resolve => setTimeout(() => resolve({
    totalTickets: 4,
    totalSpent: 40000,
    nextDrawDate: "01 Juil 2026"
  }), 800));
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

export async function fetchNotifications(): Promise<AppNotification[]> {
  return new Promise(resolve => setTimeout(() => resolve([...MOCK_NOTIFICATIONS]), 500));
}
