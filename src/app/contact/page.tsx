import type { Metadata } from 'next';
import Link from 'next/link';
import { business } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Charleston Mobile Car Detailing',
  description: 'Contact Charleston Mobile Car Detailing for mobile interior and exterior car detailing in Charleston, WV and surrounding areas.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Contact Charleston Mobile Car Detailing</h1>
          <p className="lead">Ask a question, request a detail, or get help choosing the right mobile car detailing service for your vehicle.</p>
        </div>
      </section>

      <section className="section light">
        <div className="container grid-2">
          <div className="content-block">
            <h2>Get in touch</h2>
            <p><strong>Phone:</strong> <a href={business.phoneHref}>{business.phone}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${business.email}`}>{business.email}</a></p>
            <p><strong>Service area:</strong> Charleston, WV and surrounding areas</p>
            <p>The online booking tool is not connected yet. For now, customers can use this page or the booking page as the temporary appointment request flow.</p>
            <Link href="/book" className="btn dark">Go to Booking Page</Link>
          </div>

          <form className="content-block form">
            <h2>Request information</h2>
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Phone" />
            <input className="input" placeholder="Email" />
            <input className="input" placeholder="Vehicle year, make, and model" />
            <textarea className="input" placeholder="What does your vehicle need?" />
            <button className="btn dark" type="button">Submit Placeholder</button>
            <p style={{ margin: 0, color: '#555' }}>This form is a visual placeholder until the booking/contact backend is connected.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
