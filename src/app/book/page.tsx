import type { Metadata } from 'next';
import Link from 'next/link';
import { business, services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book Mobile Car Detailing Charleston WV',
  description: 'Book mobile car detailing in Charleston, WV. Online booking tool coming soon for interior detailing, exterior detailing, full detailing, and maintenance detailing.',
  alternates: { canonical: '/book' },
};

export default function BookPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Book Online</span>
          <h1>Book Mobile Car Detailing</h1>
          <p className="lead">The full booking tool is not built yet. This page is ready to connect to the booking flow once the CRM and scheduling system are added.</p>
        </div>
      </section>

      <section className="section light">
        <div className="container grid-2">
          <div className="content-block">
            <div className="notice">Temporary booking page: connect this to the real booking tool later.</div>
            <h2>Request an appointment</h2>
            <p>For now, customers can request a mobile detailing appointment by calling, messaging, or submitting the placeholder form.</p>
            <p><strong>Phone:</strong> <a href={business.phoneHref}>{business.phone}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${business.email}`}>{business.email}</a></p>
            <Link className="btn dark" href="/contact">Contact Us</Link>
          </div>

          <form className="content-block form">
            <h2>Booking placeholder</h2>
            <input className="input" placeholder="Full name" />
            <input className="input" placeholder="Phone number" />
            <input className="input" placeholder="Email address" />
            <input className="input" placeholder="Service address or city" />
            <select className="input" defaultValue="">
              <option value="" disabled>Select a service</option>
              {services.map((service) => <option key={service.slug}>{service.title}</option>)}
            </select>
            <input className="input" placeholder="Vehicle year, make, and model" />
            <textarea className="input" placeholder="Tell us about the vehicle condition, preferred day/time, and anything we should know." />
            <button className="btn dark" type="button">Submit Placeholder</button>
          </form>
        </div>
      </section>
    </main>
  );
}
