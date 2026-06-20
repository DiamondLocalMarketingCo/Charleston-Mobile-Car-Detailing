import type { MetadataRoute } from "next";
import { serviceAreas, services } from "@/lib/site";

const baseUrl = "https://charlestonmobilecardetailing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    "/services",
    "/gallery",
    "/service-areas",
    "/reviews",
    "/contact",
    ...services.map((service) => `/services/${service.slug}`),
    ...serviceAreas.map((area) => `/service-areas/${area.slug}`),
  ];

  return routes.map((route) => {
    const isHome = route === "/";
    const isPriorityPage = route.includes("service-areas") || route.includes("services");
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = isHome ? "weekly" : "monthly";

    return {
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency,
      priority: isHome ? 1 : isPriorityPage ? 0.85 : 0.7,
    };
  });
}
