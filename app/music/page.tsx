import type { Metadata } from "next";
import { MusicHero } from "./music-hero";
import { MusicReleases } from "./music-releases";
import { MusicListen } from "./music-listen";

export const metadata: Metadata = {
  title: "Music",
  description:
    "The first worship album from All the Glory is out now. Listen, share, and return to it whenever you need music that lifts your eyes back to Jesus.",
};

export default function MusicPage() {
  return (
    <>
      <MusicHero />
      <MusicReleases />
      <MusicListen />
    </>
  );
}
