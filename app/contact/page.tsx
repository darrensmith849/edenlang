import type { Metadata } from "next";
import { ContactHero } from "./contact-hero";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "For custom songs, commissioned work, guitar-led creative projects, collaborations, bookings, or partnerships, get in touch with Daniel Jenkins / All the Glory.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="relative bg-eden-charcoal grain">
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
