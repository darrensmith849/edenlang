import type { Metadata } from "next";
import { AboutHero } from "./about-hero";
import { AboutStory } from "./about-story";
import { AboutMilestones } from "./about-milestones";
import { AboutMission } from "./about-mission";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind All the Glory — a Zimbabwean worship music project shaped by redemption, gratitude, and a desire to point everything back to God.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMilestones />
      <AboutMission />
    </>
  );
}
