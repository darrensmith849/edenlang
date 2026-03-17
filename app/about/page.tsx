import type { Metadata } from "next";
import { AboutHero } from "./about-hero";
import { AboutStory } from "./about-story";
import { AboutMilestones } from "./about-milestones";
import { AboutPress } from "./about-press";
import { AboutMission } from "./about-mission";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Eden Lang — a self-taught Zimbabwean music producer, composer, singer-songwriter, animator, and content creator. From Harare to the world.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMilestones />
      <AboutPress />
      <AboutMission />
    </>
  );
}
