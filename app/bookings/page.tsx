import type { Metadata } from "next";
import { BookingsHero } from "./bookings-hero";
import { BookingsOfferings } from "./bookings-offerings";
import { BookingsCTA } from "./bookings-cta";

export const metadata: Metadata = {
  title: "Bookings",
  description:
    "Worship events, ministry invitations, live artist bookings, collaborations, and creative partnerships. Enquire about working with All the Glory.",
};

export default function BookingsPage() {
  return (
    <>
      <BookingsHero />
      <BookingsOfferings />
      <BookingsCTA />
    </>
  );
}
