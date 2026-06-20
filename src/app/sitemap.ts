import type { MetadataRoute } from 'next';
import { business, serviceAreas, services } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ['', '/services', '/service-areas', '/gallery', '/reviews', '/contact', '/book'];
  const serviceRoutes = services.map((service) => `/${service.slug}`);
  const areaRoutes = serviceAreas.map((area) => `/${area.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes].map((route) => ({
    url: `${business.url}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : route.includes('mobile-car-detailing') ? 0.85 : 0.75,
  }));
}
