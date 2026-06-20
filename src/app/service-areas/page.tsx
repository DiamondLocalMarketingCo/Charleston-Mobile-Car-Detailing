import type { Metadata } from 'next';
import Link from 'next/link';
import { FinalCTA } from '@/components/Sections';
import { serviceAreas } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mobile Car Detailing Service Areas Charleston WV',
  description: 'Charleston Mobile Car Detailing serves Charleston, South Charleston, Dunbar, Nitro, St. Albans, Cross Lanes, Teays Valley, Hurricane, and surrounding WV areas.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Service Areas</span>
          <h1>Mobile Car Detailing Service Areas</h1>
          <p className="lead">We provide mobile interior and exterior car detailing throughout Charleston, WV and surrounding Kanawha Valley communities.</p>
        </div>
      </section>

      <section className="section light">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Local SEO Pages</span>
            <h2 className="h2">Detailing brought to your location</h2>
            <p className="lead">Each service area page is designed to target local searches while giving customers clear information about mobile detailing availability in their city.</p>
            <div className="area-grid">
              {serviceAreas.map((area) => (
                <Link className="area-link" key={area.slug} href={`/${area.slug}`}>{area.city}, {area.state}</Link>
              ))}
            </div>
          </div>
          <div className="map-panel">Charleston, WV and Nearby Service Areas</div>
        </div>
      </section>

      <section className="section black">
        <div className="container content-block">
          <h2>Mobile detailing throughout the Charleston area</h2>
          <p>Customers commonly search by city when they need a local mobile detailer. This page connects the main website to dedicated city pages for Charleston, South Charleston, Dunbar, Nitro, St. Albans, Cross Lanes, Teays Valley, Hurricane, and surrounding areas.</p>
          <p>As the business grows, these pages can be expanded with photos, reviews, city-specific FAQs, and real booking availability.</p>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
