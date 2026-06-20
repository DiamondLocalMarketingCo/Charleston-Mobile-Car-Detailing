import type { Metadata } from 'next';
import { FinalCTA, ReviewsPreview } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'Mobile Car Detailing Reviews Charleston WV',
  description: 'Reviews and customer feedback for Charleston Mobile Car Detailing. Mobile interior and exterior detailing in Charleston, WV.',
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Reviews</span>
          <h1>Charleston Mobile Car Detailing Reviews</h1>
          <p className="lead">Customer reviews build trust and help local visitors decide whether to book. Replace these placeholders with real Google and Facebook reviews once available.</p>
        </div>
      </section>
      <ReviewsPreview />
      <section className="section black">
        <div className="container content-block">
          <h2>Review content strategy</h2>
          <p>Add real customer reviews as soon as possible. Strong reviews can support conversion, improve trust, and give the site more local proof for people searching for car detailing in Charleston, WV.</p>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
