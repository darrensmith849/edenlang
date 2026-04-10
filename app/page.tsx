import { Hero } from "@/components/sections/hero";
import { Positioning } from "@/components/sections/positioning";
import { ServicesPreview } from "@/components/sections/selected-work";
import { Testimony } from "@/components/sections/mission";
import { AlbumTeaser } from "@/components/sections/featured-music";
import { PartnerStrip } from "@/components/sections/trust-strip";
import { ClosingCTA } from "@/components/sections/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <ServicesPreview />
      <Testimony />
      <PartnerStrip />
      <AlbumTeaser />
      <ClosingCTA />
    </>
  );
}
