import Link from 'next/link';
import { business, serviceAreas, services } from '@/lib/site';

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>{business.name}</h3>
            <p>{business.description}</p>
            <p>{business.city}, {business.state} | Fully mobile service</p>
          </div>
          <div>
            <h4>Pages</h4>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/service-areas">Service Areas</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Services</h4>
            {services.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`}>{service.navTitle}</Link>
            ))}
          </div>
          <div>
            <h4>Areas</h4>
            {serviceAreas.slice(0, 6).map((area) => (
              <Link key={area.slug} href={`/${area.slug}`}>{area.city}, {area.state}</Link>
            ))}
          </div>
        </div>
      </footer>
      <div className="sticky-mobile">
        <Link className="btn primary" href="/book">Book Online</Link>
      </div>
    </>
  );
}
