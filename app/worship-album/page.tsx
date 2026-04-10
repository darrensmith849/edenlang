import type { Metadata } from "next";
import { AlbumHero } from "./album-hero";
import { AlbumContent } from "./album-content";

export const metadata: Metadata = {
  title: "Worship Album",
  description:
    "The worship project lives on its own dedicated site. Visit All the Glory to explore the latest release, videos, and worship-centred music.",
};

export default function WorshipAlbumPage() {
  return (
    <>
      <AlbumHero />
      <AlbumContent />
    </>
  );
}
