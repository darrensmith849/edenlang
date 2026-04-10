import type { Metadata } from "next";
import { AboutHero } from "./about-hero";
import { AboutStory } from "./about-story";
import { AboutMission } from "./about-mission";

export const metadata: Metadata = {
  title: "About",
  description:
    "Daniel Jenkins is a Zimbabwean guitarist, producer, singer, and songwriter whose work brings together musical craft, emotional depth, and a heart for worship.",
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
