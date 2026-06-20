import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const galleryItems = [
  { title: "Interior Reset", image: "/images/INTERIORRESET.png", alt: "Interior detailing result in Charleston WV" },
  { title: "Wheel Refresh", image: "/images/WHEELREFRSH.png", alt: "Wheel cleaning result in Charleston WV" },
  { title: "Cabin Clean", image: "/images/CABINCLEAN.png", alt: "Cabin cleaning result in Charleston WV" },
];

export const metadata: Metadata = {
  title: "Car Detailing Gallery Charleston WV | Charleston Mobile Car Detailing",
  description: "Mobile car detailing photo gallery in Charleston, WV with interior detailing, exterior detailing, wheel cleaning, and cabin cleaning results.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container page-hero-inner">
            <p className="kicker">Detailing photo gallery</p>
            <h1>Car Detailing Gallery <span>Charleston, WV</span></h1>
            <p>View mobile detailing results from interior resets, wheel refreshes, cabin cleaning, and future customer work.</p>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <article className="gallery-card" key={item.title}>
                  <div className="card-image">
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 820px) 45vw, 380px" />
                  </div>
                  <h3>{item.title}</h3>
                </article>
              ))}
              {Array.from({ length: 6 }).map((_, index) => (
                <article className="gallery-card" key={`placeholder-${index}`}>
                  <div className="placeholder-gallery">
                    <p>Upload another real detailing photo here as the business grows.</p>
                  </div>
                  <h3>Future Result {index + 1}</h3>
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
