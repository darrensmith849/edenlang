import type { Metadata } from "next";
import { WorkHero } from "./work-hero";
import { WorkServices } from "./work-services";
import { WorkCredits } from "./work-credits";
import { WorkPartners } from "./work-partners";
import { WorkCTA } from "./work-cta";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Composition for film, TV, and brands. Music production. Content creation for music technology companies. Explore Eden Lang's creative services and selected credits.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkServices />
      <WorkCredits />
      <WorkPartners />
      <WorkCTA />
    </>
  );
}
