import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business, reviews as fallbackReviews } from "@/lib/site";
import { getGoogleReviewSummary } from "@/lib/googleReviews";

const googleProfileEmbedUrl =
  "https://www.google.com/maps?q=Charleston%20Mobile%20Car%20Detailing%20Charleston%20WV&output=embed";

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
          <div className="container google-profile-section">
            <div className="google-profile-copy">
              <p className="kicker">Google business profile</p>
              <h2>Reviews and business profile <span>from Google</span></h2>
              {googleSummary ? (
                <p>
                  Showing review data pulled from Google Places. {rating ? `${rating.toFixed(1)} average rating` : "Google rating available"}{totalReviews ? ` from ${totalReviews} reviews.` : "."}
                </p>
              ) : (
                <p>
                  View the embedded Google profile below, or open the full Google listing to read reviews, check details, and leave feedback. The on-site review cards below can be replaced with verified customer comments as the business collects more reviews.
                </p>
              )}
              <a className="button button-primary" href={reviewUrl} target="_blank" rel="noreferrer">Read reviews on Google</a>
            </div>

            <div className="google-profile-embed" aria-label="Embedded Google Business Profile for Charleston Mobile Car Detailing">
              <iframe
                title="Charleston Mobile Car Detailing Google profile"
                src={googleProfileEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
