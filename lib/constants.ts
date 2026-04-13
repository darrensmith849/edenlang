// ---------------------------------------------------------------------------
// Daniel Jenkins — site configuration
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Daniel Jenkins",
  title: "Daniel Jenkins | Guitarist, Producer, Singer & Songwriter",
  description:
    "Zimbabwean guitarist, producer, singer, and songwriter. Custom songs, recorded guitar for brands and campaigns, production, and select worship bookings. Enquire today.",
  url: "https://danieljenkins.co",
  email: "hello@danieljenkins.co",
  albumSiteUrl: "https://www.alltheglory.co.za",
  socials: {
    instagram: "#",
    youtube: "#",
    spotify: "#",
    appleMusic: "#",
    tiktok: "#",
  },
} as const;

// ---------------------------------------------------------------------------
// Images
// ---------------------------------------------------------------------------
export const IMAGES = {
  /** Moody door/guitar — hero poster, dark sections */
  hero: "/images/atg/portrait-hero.jpg",
  /** Rooftop guitar leap — the strongest cinematic shot */
  rooftop: "/images/atg/portrait-about.jpg",
  /** Graffiti wall walk — urban/creative energy */
  street: "/images/atg/live-performance.jpg",
  /** Studio console — production credibility */
  studio: "/images/atg/creative-session.jpg",
  /** Rooftop casual — secondary portrait */
  portrait: "/images/atg/portrait-alt.jpg",
} as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Worship", href: "/worship-album" },
  { label: "Contact", href: "/contact" },
] as const;

// ---------------------------------------------------------------------------
// Services
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
      "Songs written and recorded around your story. Personal, reflective, or celebratory — each one is crafted with genuine care, not off a template.",
    icon: "01",
  },
  {
    title: "Commissioned Songwriting",
    description:
      "Original songs commissioned for specific projects, moments, or concepts. No formula. No filler.",
    icon: "02",
  },
  {
    title: "Guitar for Brands & Campaigns",
    description:
      "Recorded guitar for film, advertising, branded content, and creative projects. Expressive, human, distinctive.",
    icon: "03",
  },
  {
    title: "Production & Songwriting",
    description:
      "Collaboration across songwriting, arrangement, and production. For artists, projects, and ideas that need musical depth.",
    icon: "04",
  },
  {
    title: "Worship & Ministry",
    description:
      "Select bookings for worship nights, ministry events, and faith-rooted gatherings.",
    icon: "05",
  },
  {
    title: "Partnerships",
    description:
      "Selective collaboration with aligned brands, platforms, and creative projects.",
    icon: "06",
  },
];

// ---------------------------------------------------------------------------
// Partners
// ---------------------------------------------------------------------------
export const PARTNERS = [{ name: "BandLab" }] as const;

// ---------------------------------------------------------------------------
// Enquiry types
// ---------------------------------------------------------------------------
export const ENQUIRY_TYPES = [
  "Custom Song",
  "Commissioned Songwriting",
  "Guitar for Brand / Campaign",
  "Production Collaboration",
  "Worship / Ministry Booking",
  "Partnership",
  "General Enquiry",
] as const;

// ---------------------------------------------------------------------------
// Proof points
// ---------------------------------------------------------------------------
export const PROOF_POINTS = [
  { label: "Years in Music", value: "10+" },
  { label: "Reach", value: "Global" },
  { label: "Core Instrument", value: "Guitar" },
  { label: "Projects Delivered", value: "100+" },
] as const;
