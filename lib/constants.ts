// ---------------------------------------------------------------------------
// All the Glory — canonical content configuration
// ---------------------------------------------------------------------------
// Business-first site for Daniel Jenkins / All the Glory.
// Services and enquiries are primary. Worship album is a secondary
// destination with outbound referral to www.alltheglory.co.za.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "All the Glory",
  businessLabel: "Daniel Jenkins / All the Glory",
  title:
    "All the Glory | Custom Songs, Guitar, Production & Creative Music",
  description:
    "Daniel Jenkins of All the Glory offers custom songs, commissioned music, guitar-led creative work for companies and projects, production collaboration, and select worship-rooted bookings.",
  url: "https://alltheglory.co", // placeholder — update when live
  email: "hello@alltheglory.co", // placeholder — update when confirmed
  albumSiteUrl: "https://www.alltheglory.co.za",
  socials: {
    instagram: "#", // placeholder
    youtube: "#", // placeholder
    spotify: "#", // placeholder
    appleMusic: "#", // placeholder
    tiktok: "#", // placeholder
  },
  media: {
    heroVideoUrl: "/images/atg/hero-video.mp4",
  },
} as const;

// ---------------------------------------------------------------------------
// Images — centralised map for easy future swapping
// ---------------------------------------------------------------------------
export const IMAGES = {
  /** Strongest cinematic image — hero & featured sections */
  heroPortrait: "/images/atg/portrait-hero.jpg",
  /** About section portrait */
  aboutPortrait: "/images/atg/portrait-about.jpg",
  /** Services / work credibility */
  altPortrait: "/images/atg/portrait-alt.jpg",
  /** Creative session / studio imagery */
  creativeSession: "/images/atg/creative-session.jpg",
  /** Live performance / guitar imagery */
  livePerformance: "/images/atg/live-performance.jpg",
  /** Worship album teaser image */
  albumCover: "/images/atg/portrait-alt.jpg", // placeholder
} as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Worship Album", href: "/worship-album" },
  { label: "Contact", href: "/contact" },
] as const;

// ---------------------------------------------------------------------------
// Services — the core of the site
// ---------------------------------------------------------------------------
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    title: "Custom Songs",
    description:
      "Custom recorded songs developed with care for the story behind them — whether personal, reflective, celebratory, or deeply meaningful.",
    icon: "01",
  },
  {
    title: "Commissioned Songs",
    description:
      "Commissioned songwriting for those looking for something original, sincere, and crafted with depth rather than formula.",
    icon: "02",
  },
  {
    title: "Guitar for Companies & Creative Projects",
    description:
      "Expressive guitar work for companies, creative campaigns, visual storytelling, branded content, and projects that need something more human and emotionally resonant.",
    icon: "03",
  },
  {
    title: "Production & Songwriting Collaboration",
    description:
      "Creative collaboration across songwriting, arrangement, production direction, and musical development.",
    icon: "04",
  },
  {
    title: "Worship & Ministry Bookings",
    description:
      "Select bookings for worship nights, ministry events, and spaces where the music serves something deeper than performance alone.",
    icon: "05",
  },
  {
    title: "Partnerships",
    description:
      "Selective collaboration with aligned creative brands, platforms, and projects where the partnership feels honest and fitting.",
    icon: "06",
  },
];

// ---------------------------------------------------------------------------
// Partners — tasteful proof strip
// ---------------------------------------------------------------------------
export const PARTNERS = [
  { name: "BandLab" },
  // Add additional partners here as they are confirmed.
] as const;

// ---------------------------------------------------------------------------
// Enquiry types — used by the contact form
// ---------------------------------------------------------------------------
export const ENQUIRY_TYPES = [
  "Custom Song",
  "Commissioned Song",
  "Guitar for Company / Project",
  "Collaboration",
  "Worship / Ministry Booking",
  "Partnership",
  "General Enquiry",
] as const;

// ---------------------------------------------------------------------------
// Proof points — used in work/credibility sections
// ---------------------------------------------------------------------------
export const PROOF_POINTS = [
  { label: "Years in Music", value: "10+" },
  { label: "International Experience", value: "Yes" },
  { label: "Core Instrument", value: "Guitar" },
  { label: "Creative Range", value: "Full" },
] as const;
