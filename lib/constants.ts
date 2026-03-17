export const SITE = {
  name: "Eden Lang",
  title: "Eden Lang — Producer. Composer. Artist. Creator.",
  description:
    "Zimbabwean music producer, composer, singer-songwriter, and content creator. Crafting emotionally rich music for film, television, brands, and artists.",
  url: "https://edenlangmusic.com",
  email: "hello@edenlangmusic.com",
  socials: {
    instagram: "https://www.instagram.com/edenlangmusic/",
    youtube: "https://www.youtube.com/@EdenLangMusic",
    spotify: "https://open.spotify.com/artist/4Irukws5ELYBZwUpmWSNb2",
    appleMusic: "https://music.apple.com/us/artist/eden-lang/1422676924",
    soundcloud: "https://soundcloud.com/edenlang",
    tiktok: "https://www.tiktok.com/@edenlang",
    facebook: "https://www.facebook.com/edenlangmusic/",
  },
  media: {
    heroVideoUrl:
      "https://storage.googleapis.com/msgsndr/5nJLnDKeraFuidX6On1p/media/6943bcb559a0a67e9a9ff8ae.mp4",
  },
} as const;

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
  featured?: boolean;
}

export const RELEASES: Release[] = [
  {
    title: "Sunshine Vibe",
    year: "2025",
    type: "Single",
    description:
      "A warm, radiant release carrying the energy of forward motion and light.",
    coverImageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f4/55/52/f4555234-871e-b90f-3342-1187fb271c96/199538102628.jpg/1200x1200bb.jpg",
    primaryUrl:
      "https://music.apple.com/us/album/sunshine-vibe-feat-eden-lang/1823033640?i=1823033642",
    appleMusicUrl:
      "https://music.apple.com/us/album/sunshine-vibe-feat-eden-lang/1823033640?i=1823033642",
    featured: true,
  },
  {
    title: "Maiwee",
    year: "2024",
    type: "Single",
    description:
      "A soulful meditation on regret and the desire to turn back time. Blending indie rock with traditional Zimbabwean musical elements, Maiwee is storytelling at its most honest.",
    coverImageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cd/ab/ff/cdabff2d-0c48-79d3-fb9d-ce11f7145e2f/artwork.jpg/1200x1200bb.jpg",
    primaryUrl: "https://music.apple.com/us/album/maiwee/1731999378?i=1731999379",
    appleMusicUrl:
      "https://music.apple.com/zm/album/maiwee-single/1731999378",
    soundcloudUrl: "https://soundcloud.com/edenlang",
    featured: true,
  },
  {
    title: "The Storm Is Over",
    year: "2024",
    type: "Feature",
    description:
      "A featured vocal performance on Danai Clay's stirring single — a song about resilience, faith, and finding peace after turbulence.",
    coverImageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4d/3a/9e/4d3a9e44-93ac-1e90-e378-c82a8daf13e2/artwork.jpg/1200x1200bb.jpg",
    primaryUrl:
      "https://music.apple.com/us/album/the-storm-is-over-feat-eden-lang/1753406187?i=1753406188",
    appleMusicUrl:
      "https://music.apple.com/us/album/the-storm-is-over-feat-eden-lang/1753406187?i=1753406188",
    featured: true,
  },
  {
    title: "Don't",
    year: "2022",
    type: "Feature",
    description:
      "A collaboration with Verseless from the SMILE EP. A vibrant fusion of Amapiano, pop, and Afrobeat — two Zimbabwean voices blending seamlessly.",
    coverImageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/33/3f/dd/333fddba-dd52-9d13-73ff-217c52386392/757572933440.jpg/1200x1200bb.jpg",
    primaryUrl:
      "https://music.apple.com/us/album/dont-feat-eden-lang-radio-edit/1639125346?i=1639125356",
    appleMusicUrl:
      "https://music.apple.com/us/album/dont-single/1614612616",
  },
  {
    title: "Glitter",
    year: "",
    type: "Single",
    description:
      "A fan favourite from the debut era — shimmering guitars, delicate falsettos, and the emotional clarity that defines Eden's sound.",
    coverImageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/31/9c/48/319c4861-b495-46ab-7a5d-045d1f6c3404/artwork.jpg/1200x1200bb.jpg",
    primaryUrl: "https://music.apple.com/us/album/glitter/1627340745?i=1627340747",
    appleMusicUrl:
      "https://music.apple.com/us/album/glitter/1627340745?i=1627340747",
    soundcloudUrl: "https://soundcloud.com/edenlang",
  },
  {
    title: "From Ashes to Beauty",
    year: "",
    type: "Album",
    description:
      "Eden's debut album — a collection of songs exploring heartbreak, self-discovery, and triumph. The foundation of everything that followed.",
    coverImageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/31/9c/48/319c4861-b495-46ab-7a5d-045d1f6c3404/artwork.jpg/1200x1200bb.jpg",
    primaryUrl:
      "https://music.apple.com/us/album/from-ashes-to-beauty-ep/1627340745",
    appleMusicUrl:
      "https://music.apple.com/us/album/from-ashes-to-beauty-ep/1627340745",
    soundcloudUrl: "https://soundcloud.com/edenlang",
  },
];

export interface Credit {
  title: string;
  role: string;
  client?: string;
  category: "composition" | "production" | "content" | "performance" | "animation";
}

export const CREDITS: Credit[] = [
  {
    title: "Lead Animator",
    role: "Animation & motion design for commercial campaigns",
    client: "TBWA Zimbabwe",
    category: "animation",
  },
  {
    title: "Storyboarding Intern",
    role: "Visual storytelling and storyboard development",
    client: "Netflix",
    category: "animation",
  },
  {
    title: "Scripts and Bars Incubator",
    role: "Selected creative — British Council programme",
    client: "British Council / Kay Media Africa",
    category: "production",
  },
  {
    title: "Artist of the Week",
    role: "Featured artist spotlight",
    client: "British Council Southern Africa Arts",
    category: "performance",
  },
  {
    title: "Shoko Festival 2022",
    role: "Live performance — Moto Republik, Harare",
    category: "performance",
  },
  {
    title: "SMILE EP — Verseless",
    role: "Featured vocalist and collaborator",
    category: "production",
  },
];

export interface Service {
  title: string;
  description: string;
  details: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Composition for Film, TV & Brands",
    description:
      "Original music crafted for visual storytelling — from cinematic scores to commercial soundtracks. Emotionally precise, culturally rich, internationally ready.",
    details: [
      "Film & television scoring",
      "Commercial & campaign music",
      "Sonic branding",
      "Custom composition briefs",
    ],
  },
  {
    title: "Music Production & Artist Collaboration",
    description:
      "Full-spectrum production for artists seeking a sound that is both soulful and modern. Songwriting, arrangement, vocal production, and mixing.",
    details: [
      "Artist production",
      "Songwriting & toplining",
      "Vocal arrangement & production",
      "Co-production & collaboration",
    ],
  },
  {
    title: "Content Creation for Music-Tech Brands",
    description:
      "Authentic, engaging content that connects music technology products with real creative workflows. Built from genuine experience as a self-taught producer.",
    details: [
      "Product demos & reviews",
      "Tutorial & educational content",
      "Social media content",
      "Brand storytelling",
    ],
  },
];

export const BRAND_PARTNERS = [
  "BandLab",
  "TBWA",
  "Vochlea",
  "Baby Audio",
] as const;

export interface PressFeature {
  publication: string;
  title: string;
  url?: string;
  year: string;
}

export const PRESS: PressFeature[] = [
  {
    publication: "iNgudukazi Magazine",
    title: "Meet Eden Lang, the Zimbabwean Indie Songstress",
    url: "https://ingudukazi.co.zw/meet-eden-lang-the-zimbabwean-indie-songstress/",
    year: "2024",
  },
  {
    publication: "ZimSphere",
    title: "Music Review: Eden Lang wishes she could turn back time in 'Maiwee'",
    url: "https://www.zimsphere.co.zw/2024/03/music-review-eden-lang-maiwee.html",
    year: "2024",
  },
  {
    publication: "The Chronicle (Zimbabwe)",
    title: "Eden Lang readies single spotlighting long distance relationships",
    url: "https://www.chronicle.co.zw/eden-lang-readies-single-spotlighting-long-distance-relationships/",
    year: "",
  },
  {
    publication: "The Standard (Zimbabwe)",
    title: "Eden Lang to drop new single",
    url: "https://www.newsday.co.zw/thestandard/standard-style/article/200027079/eden-lang-to-drop-new-single",
    year: "",
  },
  {
    publication: "Music In Africa",
    title: "Artist Directory — Eden Lang",
    url: "https://www.musicinafrica.net/directory/eden-lang",
    year: "",
  },
  {
    publication: "British Council Southern Africa Arts",
    title: "Artist of the Week",
    year: "",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Music", href: "/music" },
  { label: "Contact", href: "/contact" },
] as const;

export const ENQUIRY_TYPES = [
  "Brand Partnership",
  "Sync & Licensing",
  "Artist Collaboration",
  "Press & Media",
  "General Enquiry",
] as const;
