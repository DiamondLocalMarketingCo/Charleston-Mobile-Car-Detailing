import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FAQSection, FinalCTA, ResultsSection, ServiceAreasPreview } from '@/components/Sections';
import { business, serviceAreas, services } from '@/lib/site';

export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...serviceAreas.map((area) => ({ slug: area.slug })),
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (service) {
    return {
      title: service.seoTitle,
      description: service.seoDescription,
      alternates: { canonical: `/${service.slug}` },
    };
  }

  const area = serviceAreas.find((item) => item.slug === params.slug);
  if (area) {
    return {
      title: `Mobile Car Detailing ${area.city} ${area.state} | Charleston Mobile Car Detailing`,
      description: `Mobile car detailing in ${area.city}, ${area.state}. Interior and exterior detailing brought to your home, apartment, or workplace.`,
      alternates: { canonical: `/${area.slug}` },
    };
  }

  return {};
}

export default function SlugPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (service) return <ServicePage service={service} />;

  const area = serviceAreas.find((item) => item.slug === params.slug);
  if (area) return <AreaPage area={area} />;

  notFound();
}

function ServicePage({ service }: { service: typeof services[number] }) {
  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Mobile Detailing Service</span>
          <h1>{service.title} in Charleston, WV</h1>
          <p className="lead">{service.hero}</p>
          <div className="hero-actions" style={{ marginTop: 26 }}>
            <Link className="btn primary" href="/book">Book Online</Link>
            <Link className="btn secondary" href="/contact">Ask a Question</Link>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container split-list">
          <div className="content-block">
            <h2>What is included</h2>
            <ul className="simple-list">
              {service.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="content-block">
            <h2>Best for</h2>
            <ul className="simple-list">
              {service.bestFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section black">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Charleston, WV</span>
            <h2 className="h2">Mobile {service.navTitle.toLowerCase()} at your location</h2>
            <p className="lead">This service is available throughout Charleston and nearby areas. We bring mobile detailing to your home, apartment, workplace, or another approved location so you do not have to drop your vehicle off at a shop.</p>
            <p className="lead">Every vehicle is different, so the exact process may depend on vehicle size, condition, access, and the service requested.</p>
          </div>
          <div className="image-placeholder" data-label="Upload Service Photo" />
        </div>
      </section>

      <ResultsSection />

      <section className="section black">
        <div className="container">
          <span className="eyebrow">Related Services</span>
          <h2 className="h2">More mobile detailing options</h2>
          <div className="grid-3" style={{ marginTop: 26 }}>
            {otherServices.map((item) => (
              <article className="card" key={item.slug}>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <Link className="link" href={`/${item.slug}`}>View Service →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <FinalCTA />
    </main>
  );
}

function AreaPage({ area }: { area: typeof serviceAreas[number] }) {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Service Area</span>
          <h1>Mobile Car Detailing in {area.city}, {area.state}</h1>
          <p className="lead">Professional interior and exterior car detailing brought directly to your home, apartment, or workplace in {area.city}, {area.state} and nearby areas.</p>
          <div className="hero-actions" style={{ marginTop: 26 }}>
            <Link className="btn primary" href="/book">Book Online</Link>
            <Link className="btn secondary" href="/services">View Services</Link>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container grid-2">
          <div className="content-block">
            <h2>{area.city} mobile detailing</h2>
            <p>{business.name} provides mobile car detailing in {area.city}, {area.state}, including interior detailing, exterior detailing, full car detailing, and maintenance detailing.</p>
            <p>Mobile service helps you keep your vehicle clean without driving to a detail shop or waiting around for your appointment to finish. We come to your location and perform the requested detailing service there when the location is suitable.</p>
            <p>This page is built specifically for customers searching for mobile car detailing in {area.city}, {area.state} and nearby communities.</p>
          </div>
          <div className="map-panel">{area.city}, {area.state}<br />Mobile Detailing Area</div>
        </div>
      </section>

      <section className="section black">
        <div className="container">
          <span className="eyebrow">Available Services</span>
          <h2 className="h2">Detailing services in {area.city}</h2>
          <div className="grid-4" style={{ marginTop: 26 }}>
            {services.map((service) => (
              <article className="card" key={service.slug}>
                <div className="card-body">
                  <h3>{service.navTitle}</h3>
                  <p>{service.summary}</p>
                  <Link className="link" href={`/${service.slug}`}>Learn More →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasPreview />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
