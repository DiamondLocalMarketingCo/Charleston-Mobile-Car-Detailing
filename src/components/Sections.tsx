import Link from 'next/link';
import { faqs, serviceAreas, services } from '@/lib/site';

export function TrustBar() {
  const items = [
    ['Mobile Service', 'We come to your home, apartment, or workplace.'],
    ['Interior & Exterior', 'Professional car detailing for the whole vehicle.'],
    ['Charleston Area', 'Serving Charleston and nearby WV communities.'],
    ['Easy Booking', 'Online booking page ready for the future tool.'],
  ];
  return (
    <div className="trust-bar">
      <div className="container trust-grid">
        {items.map(([title, text]) => <div className="trust-item" key={title}><strong>{title}</strong><p>{text}</p></div>)}
      </div>
    </div>
  );
}

export function ServicesPreview() {
  return (
    <section className="section black">
      <div className="container">
        <span className="eyebrow">Our Services</span>
        <h2 className="h2">Professional detailing, wherever you are</h2>
        <p className="lead">We focus on mobile car detailing only: interior detailing, exterior detailing, full vehicle detailing, and ongoing maintenance detailing for Charleston area drivers.</p>
        <div className="grid-4" style={{ marginTop: 34 }}>
          {services.map((service) => (
            <article className="card" key={service.slug}>
              <div className="image-placeholder" data-label={service.navTitle} />
              <div className="card-body">
                <h3>{service.navTitle}</h3>
                <p>{service.summary}</p>
                <Link href={`/${service.slug}`} className="link">Learn More →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResultsSection() {
  return (
    <section className="section light">
      <div className="container results-wrap">
        <div>
          <span className="eyebrow">Real Results</span>
          <h2 className="h2">Built to show the difference</h2>
          <p className="lead">Before and after photos are one of the strongest conversion points for a detailing website. These placeholders are ready for your real work photos once you upload them.</p>
          <Link href="/gallery" className="btn light-outline" style={{ marginTop: 22 }}>View Gallery</Link>
        </div>
        <div className="before-after">
          <div className="ba-box"><span>Before</span></div>
          <div className="ba-box after"><span>After</span></div>
        </div>
      </div>
    </section>
  );
}

export function WhyMobile() {
  return (
    <section className="section why">
      <div className="container grid-2">
        <div>
          <span className="eyebrow">Why Mobile Detailing?</span>
          <h2 className="h2">Convenience without driving to a shop</h2>
          <p className="lead">Charleston Mobile Car Detailing brings detailing directly to your location. Instead of waiting at a car wash or leaving your vehicle at a shop, you can book service at your home, apartment, workplace, or another approved location.</p>
          <ul className="check-list">
            <li>No waiting in line at a detail shop</li>
            <li>No driving across town before or after your appointment</li>
            <li>Interior and exterior detailing options available</li>
            <li>Good fit for busy families, professionals, students, and daily drivers</li>
          </ul>
        </div>
        <div className="content-block">
          <h3>SEO-focused local content</h3>
          <p>This website is structured to help rank for searches like mobile car detailing Charleston WV, interior car detailing Charleston WV, and car detailing near me.</p>
          <p>Each service and location page has its own page title, description, H1, local content, FAQ support, and internal links.</p>
        </div>
      </div>
    </section>
  );
}

export function ServiceAreasPreview() {
  return (
    <section className="section light">
      <div className="container grid-2">
        <div>
          <span className="eyebrow">Service Areas</span>
          <h2 className="h2">Serving Charleston and surrounding areas</h2>
          <p className="lead">Mobile detailing is available throughout Charleston and nearby Kanawha Valley communities. Each area page is built for local search visibility.</p>
          <div className="area-grid">
            {serviceAreas.map((area) => <Link className="area-link" key={area.slug} href={`/${area.slug}`}>{area.city}</Link>)}
          </div>
        </div>
        <div className="map-panel">Charleston, WV<br />Service Area Map Placeholder</div>
      </div>
    </section>
  );
}

export function ReviewsPreview() {
  const reviews = [
    ['Very convenient', 'Great mobile service and very easy to schedule. My car looked much cleaner without having to take it anywhere.'],
    ['Strong attention to detail', 'The interior looked better than it had in months. Good option for busy schedules.'],
    ['Professional service', 'Reliable, clear communication, and the vehicle looked noticeably better after the detail.'],
  ];
  return (
    <section className="section light">
      <div className="container">
        <span className="eyebrow">Reviews</span>
        <h2 className="h2">Trust-building proof for local customers</h2>
        <div className="grid-3" style={{ marginTop: 26 }}>
          {reviews.map(([title, text]) => <div className="review-card" key={title}><div className="stars">★★★★★</div><strong>{title}</strong><p>{text}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="section light">
      <div className="container">
        <span className="eyebrow">FAQ</span>
        <h2 className="h2">Frequently asked questions</h2>
        <p className="lead">Clear FAQ content helps customers understand how mobile detailing works and adds useful search content to the page.</p>
        <div className="faq-list">
          {faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="section cta">
      <div className="container">
        <span className="eyebrow">Book Mobile Detailing</span>
        <h2 className="h2">Ready to get your vehicle looking its best?</h2>
        <p className="lead">Book your mobile car detailing appointment in Charleston, WV. The full booking tool will connect here when it is ready.</p>
        <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 24 }}>
          <Link href="/book" className="btn primary">Book Online</Link>
          <Link href="/contact" className="btn secondary">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
