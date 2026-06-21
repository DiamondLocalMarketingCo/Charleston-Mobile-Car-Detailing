import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business, reviews as fallbackReviews } from "@/lib/site";
import { getGoogleReviewSummary } from "@/lib/googleReviews";

export const metadata: Metadata = {
  title: "Mobile Car Detailing Reviews Charleston WV | Charleston Mobile Car Detailing",
  description:
    "Read Google reviews and customer feedback for mobile interior and exterior car detailing in Charleston, WV.",
};

export default async function ReviewsPage() {
  const googleSummary = await getGoogleReviewSummary();
  const reviews = googleSummary?.reviews.length ? googleSummary.reviews : fallbackReviews;
  const reviewUrl = googleSummary?.profileUrl ?? business.googleReviewsUrl;
  const rating = googleSummary?.rating;
  const totalReviews = googleSummary?.totalReviews;

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
                <h2>Review profile <span>from Google</span></h2>
                {googleSummary ? (
                  <p>
                    Showing review data pulled from Google Places. {rating ? `${rating.toFixed(1)} average rating` : "Google rating available"}{totalReviews ? ` from ${totalReviews} reviews.` : "."}
                  </p>
                ) : (
                  <p>
                    This page is ready to pull live Google reviews when GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID are added in Vercel. Until then, the button links directly to the Google review profile.
                  </p>
                )}
              </div>
              <a className="button button-primary" href={reviewUrl} target="_blank" rel="noreferrer">View Google reviews</a>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="page-grid-3">
              {reviews.map((review) => (
                <article className="review-page-card" key={`${review.name}-${review.text.slice(0, 24)}`}>
                  <span className="stars" aria-label={`${review.rating} out of 5 stars`}>★★★★★</span>
                  <p>“{review.text}”</p>
                  <strong>{review.name}</strong>
                  {"relativeTime" in review && review.relativeTime ? <small>{review.relativeTime}</small> : null}
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
