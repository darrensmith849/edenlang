import type { Metadata } from "next";
import { ServicesHero } from "./services-hero";
import { ServicesList } from "./services-list";
import { ServicesCTA } from "./services-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom songs, commissioned music, guitar-led creative work for companies, production collaboration, worship bookings, and select creative partnerships.",
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
