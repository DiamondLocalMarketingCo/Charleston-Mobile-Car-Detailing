import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container page-hero-inner">
            <p className="kicker">{service.eyebrow}</p>
            <h1>{service.headline.split(" in ")[0]} <span>in Charleston, WV</span></h1>
            <p>{service.description}</p>
          </div>
        </section>

        <section className="page-section dark">
          <div className="container page-grid-2">
            <div>
              <p className="kicker">What this service covers</p>
              <h2 className="detail-heading">{service.title} <span>at your location</span></h2>
              <p className="page-lead">{service.summary}</p>
              <ul className="feature-list">
                {service.included.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="detail-visual">
              <Image src={service.image} alt={service.alt} fill sizes="(max-width: 820px) 100vw, 50vw" />
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="container page-grid-2">
            <div>
              <p className="kicker">Best fit</p>
              <h2>Who should book <span>{service.shortTitle}</span></h2>
            </div>
            <div>
              <ul className="feature-list">
                {service.bestFor.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div style={{ marginTop: 30 }}>
                <a className="button button-primary" href="/contact#book">Request this service</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section dark">
          <div className="container">
            <div style={{ marginBottom: 30 }}>
              <p className="kicker">More services</p>
              <h2>Other mobile detailing <span>options</span></h2>
            </div>
            <div className="page-grid-3">
              {related.map((item) => (
                <article className="seo-card" key={item.slug}>
                  <div className="card-image">
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 820px) 45vw, 360px" />
                  </div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <a href={`/services/${item.slug}`}>View service →</a>
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
