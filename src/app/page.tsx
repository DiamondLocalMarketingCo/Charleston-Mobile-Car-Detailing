import Link from 'next/link';
import { FAQSection, FinalCTA, ResultsSection, ReviewsPreview, ServiceAreasPreview, ServicesPreview, TrustBar, WhyMobile } from '@/components/Sections';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-placeholder" aria-hidden="true" />
        <div className="hero-art" aria-hidden="true" />
        <div className="container hero-content">
          <h1>Mobile Car Detailing in <span>Charleston, WV</span></h1>
          <p>Professional interior and exterior car detailing brought directly to your home, apartment, or workplace in Charleston and surrounding areas.</p>
          <div className="hero-actions">
            <Link className="btn primary" href="/book">Book Online</Link>
            <Link className="btn secondary" href="/contact">Call or Message</Link>
          </div>
          <div className="hero-points">
            <span>Mobile Service</span>
            <span>Interior & Exterior</span>
            <span>Charleston Area</span>
            <span>No Paint Correction or Ceramic Coating</span>
          </div>
        </div>
      </section>
      <TrustBar />
      <ServicesPreview />
      <ResultsSection />
      <WhyMobile />
      <ServiceAreasPreview />
      <section className="section black">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">About Us</span>
            <h2 className="h2">Local mobile detailing for Charleston drivers</h2>
            <p className="lead">Charleston Mobile Car Detailing is built around convenience, clear communication, and quality mobile detailing. The goal is simple: make it easier to keep your vehicle clean without taking time out of your day to visit a shop.</p>
            <p className="lead">We currently focus only on car detailing services. That keeps the website clear, the booking flow simple, and the service offering easy for customers to understand.</p>
          </div>
          <div className="content-block">
            <h3>What we detail</h3>
            <ul className="simple-list">
              <li>Daily drivers</li>
              <li>Family vehicles</li>
              <li>SUVs and trucks</li>
              <li>Vehicles with dirt, crumbs, dust, and everyday buildup</li>
              <li>Cars being cleaned before sale or trade-in</li>
            </ul>
          </div>
        </div>
      </section>
      <ReviewsPreview />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
