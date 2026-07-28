import { HeaderV2 } from "@/components/sections/HeaderV2"
import { HeroCarousel } from "@/components/sections/HeroCarousel"
import { LiveTicker } from "@/components/sections/LiveTicker"
import { Products } from "@/components/sections/Products"
import { StepsSection } from "@/components/sections/StepsSection"
import { TrustStats } from "@/components/sections/TrustStats"
import { WinnersCarousel } from "@/components/sections/WinnersCarousel"
import { PromoBanners } from "@/components/sections/PromoBanners"

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Products />
      <StepsSection />
      <TrustStats />
      <LiveTicker />
      <WinnersCarousel />
      <PromoBanners />
    </>
  )
}

