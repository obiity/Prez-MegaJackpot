import { HeroSpotlightOfficial } from "@/components/dashboard/HeroSpotlightOfficial";
import { HeroSUVCard } from "@/components/dashboard/HeroSUVCard";
import { OpportunitesOfficialGrid } from "@/components/dashboard/OpportunitesOfficialGrid";
import { MonPortefeuilleWidget } from "@/components/dashboard/MonPortefeuilleWidget";
import { TicketSimulator } from "@/components/sections/TicketSimulator";
import { StepsSection } from "@/components/sections/StepsSection";
import { DrawCalendarSection } from "@/components/sections/DrawCalendarSection";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { WinnersCarousel } from "@/components/sections/WinnersCarousel";
import { PromoBanners } from "@/components/sections/PromoBanners";
import { SidebarDashboard } from "@/components/dashboard/SidebarDashboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010919] text-white">
      {/* 100% Edge-to-Edge Full Screen Hero Spotlight */}
      <HeroSpotlightOfficial />

      {/* Dashboard Main Container */}
      <div className="container mx-auto px-4 max-w-7xl pt-10 pb-12 md:pb-16 space-y-12">
        {/* Balanced 2-Column Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Main Content Column (~68% width) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Mobile-only Mon Portefeuille Widget (placé juste AVANT "CHOISISSEZ VOTRE DESTIN") */}
            <div className="block lg:hidden">
              <MonPortefeuilleWidget />
            </div>

            <OpportunitesOfficialGrid />
            <TicketSimulator />
            <StepsSection />
          </div>

          {/* Right Sidebar Dashboard Column (~32% width) */}
          <div className="lg:col-span-4 sticky top-24">
            <SidebarDashboard />
          </div>
        </div>

        {/* Full-Width Live Animated Winners Ticker */}
        <LiveTicker />

        {/* Full-Width Tirage Du Mois Banner (GAGNEZ 1 SUV) */}
        <HeroSUVCard />

        {/* Full-Width Calendrier des Prochains Tirages */}
        <DrawCalendarSection />

        {/* Full-Width Winners & Testimonials ("ILS ONT CHANGÉ DE VIE") */}
        <WinnersCarousel />

        {/* Full-Width Promotional Banners */}
        <PromoBanners />
      </div>
    </div>
  );
}
