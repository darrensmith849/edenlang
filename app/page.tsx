import { Hero } from "@/components/sections/hero";
import { Positioning } from "@/components/sections/positioning";
import { SelectedWork } from "@/components/sections/selected-work";
import { FeaturedMusic } from "@/components/sections/featured-music";
import { Mission } from "@/components/sections/mission";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ClosingCTA } from "@/components/sections/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <SelectedWork />
      <FeaturedMusic />
      <Mission />
      <TrustStrip />
      <ClosingCTA />
    </>
  );
}
