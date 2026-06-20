import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business, reviews } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mobile Car Detailing Reviews Charleston WV | Charleston Mobile Car Detailing",
  description: "Customer reviews for mobile interior and exterior car detailing in Charleston, WV.",
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container page-hero-inner">
            <p className="kicker">Customer reviews</p>
            <h1>Mobile Car Detailing Reviews <span>Charleston, WV</span></h1>
            <p>Customer feedback helps visitors understand the quality, convenience, and care behind a mobile detailing appointment.</p>
          </div>
        </section>

        <section className="page-section dark">
          <div className="container">
            <div className="google-review-panel">
              <div>
                <p className="kicker">Google reviews</p>
                <h2>View our live <span>Google profile</span></h2>
                <p>Use the button to view the live Google review profile. The styled cards below can be replaced with verified customer comments as they are collected.</p>
              </div>
              <a className="button button-primary" href={business.googleReviewsUrl} target="_blank" rel="noreferrer">View Google reviews</a>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="page-grid-3">
              {reviews.map((review) => (
                <article className="review-page-card" key={review.name}>
                  <span className="stars" aria-label={`${review.rating} out of 5 stars`}>★★★★★</span>
                  <p>“{review.text}”</p>
                  <strong>{review.name}</strong>
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
