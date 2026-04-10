import type { Metadata } from "next";
import { VideosHero } from "./videos-hero";
import { VideosGrid } from "./videos-grid";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch performances, music videos, and moments that give more context to the heart behind the songs from All the Glory.",
};

export default function VideosPage() {
  return (
    <>
      <VideosHero />
      <VideosGrid />
    </>
  );
}
