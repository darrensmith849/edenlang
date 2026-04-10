import type { Metadata } from "next";
import { GivingHero } from "./giving-hero";
import { GivingContent } from "./giving-content";

export const metadata: Metadata = {
  title: "Giving",
  description:
    "The music is freely available. If you feel led to support the work behind All the Glory, you are welcome to give.",
};

export default function GivingPage() {
  return (
    <>
      <GivingHero />
      <GivingContent />
    </>
  );
}
