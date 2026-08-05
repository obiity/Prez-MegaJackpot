import { HeroSpotlightOfficial } from "@/components/dashboard/HeroSpotlightOfficial";
import { HeroSUVCard } from "@/components/dashboard/HeroSUVCard";
import { OpportunitesOfficialGrid } from "@/components/dashboard/OpportunitesOfficialGrid";
import { TicketSimulator } from "@/components/sections/TicketSimulator";
import { StepsSection } from "@/components/sections/StepsSection";
import { DrawCalendarSection } from "@/components/sections/DrawCalendarSection";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { WinnersCarousel } from "@/components/sections/WinnersCarousel";
import { PromoBanners } from "@/components/sections/PromoBanners";
import { ChangerDeVieSection } from "@/components/sections/ChangerDeVieSection";
import { ResultatsTiragesWidget } from "@/components/dashboard/ResultatsTiragesWidget";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-300">
      {/* 100% Edge-to-Edge Full Screen Hero Spotlight */}
      <HeroSpotlightOfficial />

      {/* Dashboard Main Container (Centered Max Width 7xl) */}
      <div className="container mx-auto px-4 max-w-7xl pt-10 pb-12 md:pb-16 space-y-16 text-center">
        
        {/* Nos 3 Opportunités Phares Grid */}
        <div className="mx-auto">
          <OpportunitesOfficialGrid />
        </div>

        {/* 2-Column Row: Changer De Vie (Left, No Box) + Résultats des Tirages (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left py-2">
          {/* Left: Chaque Ticket, Une Chance De Changer De Vie (Pas de case derrière) */}
          <div className="lg:col-span-6 px-2 sm:px-4">
            <ChangerDeVieSection />
          </div>

          {/* Right: Résultats Des Tirages */}
          <div className="lg:col-span-6">
            <ResultatsTiragesWidget />
          </div>
        </div>

        {/* Simulateur de Tickets ("TESTEZ VOTRE CHANCE") - Centré, séparé */}
        <div className="max-w-5xl mx-auto text-center">
          <TicketSimulator />
        </div>

        {/* Comment Ça Marche ("JOUER EN 3 ÉTAPES SIMPLES") - Centré, séparé */}
        <div className="max-w-5xl mx-auto text-center">
          <StepsSection />
        </div>

        {/* Full-Width Live Animated Winners Ticker */}
        <div className="mx-auto">
          <LiveTicker />
        </div>

        {/* Full-Width Tirage Du Mois Banner (GAGNEZ 1 SUV) */}
        <div className="mx-auto">
          <HeroSUVCard />
        </div>

        {/* Full-Width Calendrier des Prochains Tirages */}
        <div className="mx-auto">
          <DrawCalendarSection />
        </div>

        {/* Full-Width Winners & Testimonials ("ILS ONT CHANGÉ DE VIE") */}
        <div className="mx-auto">
          <WinnersCarousel />
        </div>

        {/* Full-Width Promotional Banners */}
        <div className="mx-auto">
          <PromoBanners />
        </div>

      </div>
    </div>
  );
}
