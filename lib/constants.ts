// ---------------------------------------------------------------------------
// All the Glory — canonical content configuration
// ---------------------------------------------------------------------------
// Every section of the site draws from this single file. Update content here
// and the entire site reflects it. Image paths point to /public/images/atg/.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "All the Glory",
  title: "All the Glory | Worship Artist",
  description:
    "All the Glory is a worship music project rooted in testimony, redemption, and music offered for the glory of God.",
  url: "https://alltheglory.co", // placeholder — update when live
  email: "hello@alltheglory.co", // placeholder — update when confirmed
  socials: {
    instagram: "#", // placeholder
    youtube: "#", // placeholder
    spotify: "#", // placeholder
    appleMusic: "#", // placeholder
    soundcloud: "#", // placeholder
    tiktok: "#", // placeholder
    facebook: "#", // placeholder
  },
  media: {
    heroVideoUrl: "/images/atg/hero-video.mp4",
  },
} as const;

// ---------------------------------------------------------------------------
// Images — centralised map for easy future swapping
// ---------------------------------------------------------------------------
export const IMAGES = {
  heroPortrait: "/images/atg/portrait-hero.jpg",
  aboutPortrait: "/images/atg/portrait-about.jpg",
  altPortrait: "/images/atg/portrait-alt.jpg",
  creativeSession: "/images/atg/creative-session.jpg",
  livePerformance: "/images/atg/live-performance.jpg",
  /** Album artwork — replace when final art is ready */
  albumCover: "/images/atg/portrait-alt.jpg", // placeholder
} as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Music", href: "/music" },
  { label: "Videos", href: "/videos" },
  { label: "Giving", href: "/giving" },
  { label: "Bookings", href: "/bookings" },
  { label: "Contact", href: "/contact" },
] as const;

// ---------------------------------------------------------------------------
// Releases
// ---------------------------------------------------------------------------
export interface Release {
  title: string;
  year: string;
  type: "Single" | "Album" | "EP" | "Feature";
  description: string;
  coverImageUrl?: string;
  primaryUrl?: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  soundcloudUrl?: string;
  youtubeUrl?: string;
  featured?: boolean;
}

export const RELEASES: Release[] = [
  {
    title: "First Worship Album",
    year: "2025",
    type: "Album",
    description:
      "The debut worship album — songs of testimony, redemption, and praise offered for the glory of God. Listen, share, and return to it whenever you need music that lifts your eyes back to Jesus.",
    coverImageUrl: "/images/atg/portrait-alt.jpg", // placeholder — replace with final album art
    primaryUrl: "#", // placeholder — replace with streaming link
    spotifyUrl: "#", // placeholder
    appleMusicUrl: "#", // placeholder
    youtubeUrl: "#", // placeholder
    featured: true,
  },
  // Add additional singles/tracks here as they become available.
  // Each entry will automatically appear in the Music section.
];

// ---------------------------------------------------------------------------
// Service / Offering categories — used by the Bookings page
// ---------------------------------------------------------------------------
export interface Offering {
  title: string;
  description: string;
  icon: string; // short label used as a visual accent
}

export const OFFERINGS: Offering[] = [
  {
    title: "Worship Events",
    description:
      "For church gatherings, worship nights, ministry settings, and faith-rooted live moments.",
    icon: "01",
  },
  {
    title: "Ministry Invitations",
    description:
      "For events and spaces where the music can serve a wider testimony and worship purpose.",
    icon: "02",
  },
  {
    title: "Artist Bookings",
    description:
      "For live appearances and select performance opportunities aligned with the heart of the project.",
    icon: "03",
  },
  {
    title: "Collaborations",
    description:
      "For meaningful creative partnerships with artists, musicians, and aligned projects.",
    icon: "04",
  },
  {
    title: "Commissioned Songs",
    description:
      "Available upon request, approached with care, sincerity, and intention.",
    icon: "05",
  },
  {
    title: "Guitar & Creative Sessions",
    description:
      "Guitar-led collaboration, musical support, and creative input where it fits naturally.",
    icon: "06",
  },
  {
    title: "Select Brand & Creative Partnerships",
    description:
      "Tasteful collaborations that align with the artistic and spiritual identity of the project. Selective by nature, not transactional.",
    icon: "07",
  },
];

// ---------------------------------------------------------------------------
// Enquiry types — used by the contact form
// ---------------------------------------------------------------------------
export const ENQUIRY_TYPES = [
  "Worship Event",
  "Ministry Invitation",
  "Artist Booking",
  "Collaboration",
  "Commissioned Song",
  "Brand Partnership",
  "General Enquiry",
] as const;

// ---------------------------------------------------------------------------
// Videos — placeholder entries; replace src with real YouTube embeds / URLs
// ---------------------------------------------------------------------------
export interface Video {
  title: string;
  description: string;
  youtubeId?: string; // YouTube video ID for embedding
  thumbnailUrl?: string; // optional custom thumbnail
  featured?: boolean;
}

export const VIDEOS: Video[] = [
  {
    title: "Worship Session",
    description: "A live worship moment captured in full.",
    youtubeId: "", // placeholder — add YouTube video ID
    featured: true,
  },
  {
    title: "Behind the Music",
    description: "The story and heart behind the songs.",
    youtubeId: "", // placeholder
  },
  {
    title: "Live Performance",
    description: "Guitar-led worship in a live setting.",
    youtubeId: "", // placeholder
  },
];
