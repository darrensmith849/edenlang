import type { Metadata } from "next";
import { AboutHero } from "./about-hero";
import { AboutStory } from "./about-story";
import { AboutMission } from "./about-mission";

export const metadata: Metadata = {
  title: "About",
  description: "Zimbabwean guitarist, producer, singer, and songwriter with over a decade of professional musical experience.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMission />
    </>
  );
}
