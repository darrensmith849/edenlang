import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-13");

  const routes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/work", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/worship-album", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
