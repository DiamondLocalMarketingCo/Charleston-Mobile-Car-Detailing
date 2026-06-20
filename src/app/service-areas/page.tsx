import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mobile Car Detailing Service Areas Charleston WV",
  description: "Charleston Mobile Car Detailing serves Charleston, South Charleston, Dunbar, Nitro, St. Albans, Cross Lanes, Teays Valley, Hurricane, and nearby WV areas.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container page-hero-inner">
            <p className="kicker">Service areas</p>
            <h1>Mobile Car Detailing <span>Near Charleston, WV</span></h1>
            <p>Mobile interior and exterior detailing across Charleston and nearby Kanawha Valley communities.</p>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="page-grid-2" style={{ marginBottom: 44 }}>
              <div>
                <p className="kicker">Local mobile service</p>
                <h2>We come to <span>your location</span></h2>
              </div>
              <p className="page-lead">These location pages help customers find mobile car detailing in their city and give each service area a clearer local search footprint.</p>
            </div>
            <div className="location-list">
              {serviceAreas.map((area) => (
                <article className="location-card" key={area.slug}>
                  <h3>{area.city}</h3>
                  <p>{area.description}</p>
                  <a href={`/service-areas/${area.slug}`}>View area →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section dark">
          <div className="container page-grid-2">
            <div>
              <p className="kicker">Map</p>
              <h2>Centered around <span>Charleston</span></h2>
              <p className="page-lead">Use the map below to view the Charleston area. Exact service availability can depend on location, schedule, and appointment requirements.</p>
            </div>
            <div className="map-embed-wrap">
              <div className="map-card" aria-label="Google map centered on Charleston, West Virginia">
                <iframe title="Charleston WV service area map" src="https://www.google.com/maps?q=Charleston,%20WV&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <a className="button button-light-outline" href="https://www.google.com/maps/search/?api=1&query=Charleston%2C%20WV" target="_blank" rel="noreferrer">Open in Google Maps →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
