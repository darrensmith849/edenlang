import type { Metadata } from "next";
import { WorkHero } from "./work-hero";
import { WorkProof } from "./work-proof";
import { WorkPartners } from "./work-partners";
import { WorkCTA } from "./work-cta";

export const metadata: Metadata = {
  title: "Work",
  description: "Over a decade of songwriting, production, guitar, and performance. Selected visuals and creative proof.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkProof />
      <WorkPartners />
      <WorkCTA />
    </>
  );
}
