import type { Metadata } from "next";
import { AlbumHero } from "./album-hero";
import { AlbumContent } from "./album-content";

export const metadata: Metadata = {
  title: "Worship",
  description: "The worship project lives at alltheglory.co.za. Explore the latest release, videos, and worship-centred music.",
};

export default function WorshipAlbumPage() {
  return (
    <>
      <AlbumHero />
      <AlbumContent />
    </>
  );
}
