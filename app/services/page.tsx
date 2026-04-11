import type { Metadata } from "next";
import { ServicesHero } from "./services-hero";
import { ServicesList } from "./services-list";
import { ServicesCTA } from "./services-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom songs, commissioned songwriting, recorded guitar for brands and campaigns, production, worship bookings, and select partnerships.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  );
}
