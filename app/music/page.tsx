import type { Metadata } from "next";
import { MusicHero } from "./music-hero";
import { MusicReleases } from "./music-releases";
import { MusicListen } from "./music-listen";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Selected releases by Eden Lang — original songs, collaborations, and featured work. Listen on Spotify, Apple Music, and SoundCloud.",
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
