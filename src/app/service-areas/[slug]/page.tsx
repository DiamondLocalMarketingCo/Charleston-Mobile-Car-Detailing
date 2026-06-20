import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { serviceAreas, services } from "@/lib/site";

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);

  if (!area) return {};

  return {
    title: `Mobile Car Detailing ${area.city} ${area.state} | Charleston Mobile Car Detailing`,
    description: `Mobile car detailing in ${area.city}, ${area.state}. Interior and exterior detailing brought to your home, apartment, or workplace.`,
  };
}

export default async function AreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);

  if (!area) notFound();

  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container page-hero-inner">
            <p className="kicker">Mobile detailing service area</p>
            <h1>{area.headline.split(" in ")[0]} <span>in {area.city}, {area.state}</span></h1>
            <p>{area.description}</p>
          </div>
        </section>

        <section className="page-section">
          <div className="container page-grid-2">
            <div>
              <p className="kicker">Local car detailing</p>
              <h2>Detailing brought to <span>{area.city}</span></h2>
              <p className="page-lead">
                Charleston Mobile Car Detailing provides mobile car detailing in {area.city}, {area.state}, including interior detailing, exterior detailing, full car detailing, and maintenance detailing. We bring the service to your location when the appointment location is suitable.
              </p>
              <ul className="feature-list">
                <li>Mobile service for homes, workplaces, apartments, and suitable locations</li>
                <li>Interior detailing for cabin surfaces, mats, carpets, cupholders, and trim</li>
                <li>Exterior detailing for a cleaner outside finish, wheels, tires, and glass</li>
                <li>Full detail appointments for customers who want the whole vehicle refreshed</li>
              </ul>
            </div>
            <div className="map-embed-wrap">
              <div className="map-card" aria-label={`Google map centered on ${area.city}, ${area.state}`}>
                <iframe title={`${area.city} ${area.state} map`} src={`https://www.google.com/maps?q=${encodeURIComponent(`${area.city}, ${area.state}`)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <a className="button button-dark-outline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${area.city}, ${area.state}`)}`} target="_blank" rel="noreferrer">Open in Google Maps →</a>
            </div>
          </div>
        </section>

        <section className="page-section dark">
          <div className="container">
            <div style={{ marginBottom: 30 }}>
              <p className="kicker">Available in {area.city}</p>
              <h2>Mobile detailing <span>services</span></h2>
            </div>
            <div className="page-grid-4">
              {services.map((service) => (
                <article className="seo-card" key={service.slug}>
                  <div className="card-content">
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <a href={`/services/${service.slug}`}>View service →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
