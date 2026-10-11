import type { MetadataRoute } from "next";
import { allLessons } from "@/features/learn/lessons";
import { siteConfig } from "@/lib/site-config";

const staticRoutes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "daily" },
  { path: "/learn", priority: 0.9, changeFrequency: "weekly" },
  { path: "/exchanges", priority: 0.9, changeFrequency: "weekly" },
  { path: "/markets", priority: 0.8, changeFrequency: "daily" },
  { path: "/tools", priority: 0.7, changeFrequency: "monthly" },
  { path: "/glossary", priority: 0.7, changeFrequency: "monthly" },
  { path: "/quiz", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.3, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...allLessons.map((lesson) => ({
      url: `${siteConfig.url}/learn/${lesson.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
