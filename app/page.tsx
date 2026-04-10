import { Hero } from "@/components/sections/hero";
import { Positioning } from "@/components/sections/positioning";
import { SelectedWork } from "@/components/sections/selected-work";
import { FeaturedMusic } from "@/components/sections/featured-music";
import { Testimony } from "@/components/sections/mission";
import { GivingPreview } from "@/components/sections/trust-strip";
import { ClosingCTA } from "@/components/sections/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <Testimony />
      <FeaturedMusic />
      <SelectedWork />
      <GivingPreview />
      <ClosingCTA />
    </>
  );
}
