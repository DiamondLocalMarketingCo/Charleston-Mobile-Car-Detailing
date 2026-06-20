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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("service-areas") || route.includes("services") ? 0.85 : 0.7,
  }));
}
