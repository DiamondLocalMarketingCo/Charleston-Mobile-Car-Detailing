import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mobile Car Detailing Services Charleston WV | Charleston Mobile Car Detailing",
  description:
    "Mobile car detailing services in Charleston, WV, including interior detailing, exterior detailing, full car detailing, and maintenance details at your location.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container page-hero-inner">
            <p className="kicker">Mobile car detailing services</p>
            <h1>Car Detailing Services <span>in Charleston, WV</span></h1>
            <p>
              Professional mobile detailing brought to your home, apartment, or workplace. Choose the service that fits your vehicle condition and schedule.
            </p>
          </div>
        </section>

        <section className="page-section dark">
          <div className="container">
            <div className="page-grid-4">
              {services.map((service) => (
                <article className="seo-card" key={service.slug}>
                  <div className="card-image">
                    <Image src={service.image} alt={service.alt} fill sizes="(max-width: 1120px) 45vw, 280px" />
                  </div>
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

        <section className="page-section">
          <div className="container page-grid-2">
            <div>
              <p className="kicker">Designed for convenience</p>
              <h2>Detailing that comes <span>to you</span></h2>
            </div>
            <div>
              <p className="page-lead">
                {business.name} focuses on mobile car detailing in Charleston, WV. That means you do not have to wait at a shop or rearrange your day around a drop-off. The service is designed for local drivers who want a cleaner vehicle with less hassle.
              </p>
              <ul className="feature-list">
                <li>Interior and exterior detailing options</li>
                <li>Service at your home, workplace, apartment, or another suitable location</li>
                <li>Clear service pages for customers comparing detailing options</li>
                <li>Local SEO structure for Charleston-area search visibility</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
