import type { Metadata } from 'next';
import Link from 'next/link';
import { FinalCTA } from '@/components/Sections';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mobile Car Detailing Services Charleston WV',
  description: 'Interior detailing, exterior detailing, full car detailing, and maintenance detailing in Charleston, WV. Mobile service brought to your location.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Mobile Car Detailing Services in Charleston, WV</h1>
          <p className="lead">Choose from focused mobile detailing services built around the way Charleston drivers actually use their vehicles. No paint correction. No ceramic coating. Just clear, professional car detailing.</p>
        </div>
      </section>
      <section className="section black">
        <div className="container grid-4">
          {services.map((service) => (
            <article className="card" key={service.slug}>
              <div className="image-placeholder" data-label={service.navTitle} />
              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link className="link" href={`/${service.slug}`}>View Service →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section light">
        <div className="container content-block">
          <h2>Car detailing built for convenience</h2>
          <p>Mobile car detailing is designed for customers who want a clean vehicle without rearranging the day around a shop visit. Charleston Mobile Car Detailing comes to your home, apartment, workplace, or another approved location in the Charleston area.</p>
          <p>Service recommendations depend on the condition of the vehicle, how often it is cleaned, and whether the main concern is the interior, exterior, or both.</p>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
