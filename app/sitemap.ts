import type { MetadataRoute } from "next";

const routes = [
  "",
  "/for-schools",
  "/solutions",
  "/courses",
  "/pricing",
  "/about",
  "/contact",
  "/login",
  "/dashboard",
  "/dashboard-preview",
  "/proposal",
  "/courses/ai-foundations-for-educators",
  "/courses/prompting-for-educators",
  "/courses/lesson-planning-with-ai",
  "/courses/assessment-and-feedback-with-ai",
  "/courses/presentations-and-visuals-with-ai",
  "/courses/responsible-ai-for-schools"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://facultyos.ai${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
