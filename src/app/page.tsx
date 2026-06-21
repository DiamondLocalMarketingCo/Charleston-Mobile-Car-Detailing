import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business, faqs, reviews as fallbackReviews, serviceAreas, services } from "@/lib/site";
import { getGoogleReviewSummary } from "@/lib/googleReviews";

const results = [
  {
    title: "Interior Reset",
    image: "/images/INTERIORRESET.png",
    alt: "Interior before and after detailing result",
  },
  {
    title: "Wheel Refresh",
    image: "/images/WHEELREFRSH.png",
    alt: "Wheel cleaning before and after result",
  },
  {
    title: "Cabin Clean",
    image: "/images/CABINCLEAN.png",
    alt: "Cabin before and after detailing result",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-9" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4m10-4v4M3 10h18" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 3 5 5c-1.7 1.7.6 6.8 4.5 10.5S18.3 21 20 19l2-3-5-2-1.5 2c-2-1-6.5-5.5-7.5-7.5L10 7 8 3Z" />
    </svg>
  );
}

export default async function Home() {
  const googleSummary = await getGoogleReviewSummary();
  const featuredReview = googleSummary?.reviews[0] ?? fallbackReviews[0];
  const averageRating = googleSummary?.rating ? googleSummary.rating.toFixed(1) : "5.0";
  const reviewLabel = googleSummary?.totalReviews ? `${googleSummary.totalReviews} Google reviews` : "Google review";

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home" aria-labelledby="hero-heading">
          <Image
            className="hero-background"
            src="/images/HERO.png"
            alt="Mobile car detailing in Charleston WV"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="container hero-content">
            <p className="eyebrow"><span /> Charleston&apos;s mobile detailing team</p>
            <h1 id="hero-heading">
              Mobile Car Detailing <span>in Charleston, WV</span>
            </h1>
            <p className="hero-lead">
              Professional interior and exterior detailing brought directly to your home,
              apartment, or workplace.
            </p>
            <div className="hero-actions">
              <a className="button button-primary button-large" href={business.bookingUrl}>
                <CalendarIcon /> Book online
              </a>
              <a className="button button-secondary button-large" href="/contact">
                <PhoneIcon /> Call or message
              </a>
            </div>
          </div>

          <div className="container hero-trust" aria-label="Service highlights">
            <div className="hero-trust-item">
              <span className="trust-symbol truck-symbol" aria-hidden="true">◆</span>
              <p><strong>Mobile service</strong><span>We come to you</span></p>
            </div>
            <div className="hero-trust-item">
              <span className="trust-symbol" aria-hidden="true">✦</span>
              <p><strong>Interior &amp; exterior</strong><span>Complete vehicle care</span></p>
            </div>
            <div className="hero-trust-item">
              <span className="trust-symbol"><PinIcon /></span>
              <p><strong>Charleston &amp; nearby</strong><span>Local mobile service</span></p>
            </div>
            <div className="hero-trust-item">
              <span className="trust-symbol shield-symbol" aria-hidden="true">◇</span>
              <p><strong>Satisfaction focused</strong><span>Care in every detail</span></p>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Why customers choose us">
          <div className="container proof-grid">
            <a className="proof-item proof-rating" href="/reviews">
              <span className="google-g" aria-hidden="true">G</span>
              <p><span className="stars" aria-label="5 out of 5 stars">★★★★★</span><strong>{averageRating} Star Rating</strong><small>{reviewLabel}</small></p>
            </a>
            <div className="proof-item">
              <span className="proof-icon" aria-hidden="true">✦</span>
              <p><strong>Trusted locally</strong><small>By Charleston-area customers</small></p>
            </div>
            <div className="proof-item">
              <span className="proof-icon"><CheckIcon /></span>
              <p><strong>Fully mobile service</strong><small>Professional care at your location</small></p>
            </div>
            <div className="proof-item">
              <span className="proof-icon"><PinIcon /></span>
              <p><strong>Charleston, WV area</strong><small>Local and convenient</small></p>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-heading">
          <div className="container">
            <div className="section-heading centered light-heading">
              <p className="kicker">Our services</p>
              <h2 id="services-heading">Professional Detailing, <span>Wherever You Are</span></h2>
              <p>Purposeful vehicle care, delivered to your driveway or workplace.</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-visual">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 560px) calc(100vw - 32px), (max-width: 1120px) 45vw, 280px"
                    />
                  </div>
                  <div className="service-card-body">
                    <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <a href={`/services/${service.slug}`} aria-label={`Learn more about ${service.title}`}>
                      Learn more <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section results-section" id="gallery" aria-labelledby="results-heading">
          <div className="container">
            <div className="section-heading centered">
              <p className="kicker">Real results</p>
              <h2 id="results-heading">See the Difference</h2>
              <p>Every detail adds up to a vehicle that feels refreshed.</p>
            </div>
            <div className="results-grid">
              {results.map((result) => (
                <article key={result.title}>
                  <div className="comparison-visual">
                    <Image
                      src={result.image}
                      alt={result.alt}
                      fill
                      sizes="(max-width: 560px) 88vw, (max-width: 820px) 45vw, 380px"
                    />
                  </div>
                  <h3>{result.title}</h3>
                </article>
              ))}
            </div>
            <div className="centered-action">
              <a className="button button-dark-outline" href="/gallery">View more photos <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="convenience-section" aria-labelledby="convenience-heading">
          <div className="container convenience-grid">
            <div className="convenience-copy">
              <p className="kicker">Why mobile detailing?</p>
              <h2 id="convenience-heading">Convenience Without <span>Compromise</span></h2>
              <p>
                We bring professional detailing equipment and products directly to you, so you
                can save time while keeping your vehicle looking its best.
              </p>
              <ul>
                {[
                  "No waiting in line",
                  "No driving to a shop",
                  "We work around your schedule",
                  "Professional results at your doorstep",
                ].map((item) => (
                  <li key={item}><span><CheckIcon /></span>{item}</li>
                ))}
              </ul>
              <a className="text-link" href="/services">See how it works <ArrowIcon /></a>
            </div>
            <div className="detail-scene">
              <Image
                src="/images/whymobiledetailing.png"
                alt="Mobile detailing service at customer location"
                fill
                sizes="(max-width: 820px) 100vw, 60vw"
              />
            </div>
          </div>
        </section>

        <section className="section areas-section" id="service-areas" aria-labelledby="areas-heading">
          <div className="container">
            <div className="section-heading centered">
              <p className="kicker">Service areas</p>
              <h2 id="areas-heading">Proudly Serving Charleston <span>and Surrounding Areas</span></h2>
              <p>Mobile car detailing across Charleston, WV and nearby communities.</p>
            </div>
            <div className="areas-layout">
              <div className="area-list">
                {serviceAreas.map((area) => (
                  <a key={area.slug} href={`/service-areas/${area.slug}`}><span><PinIcon /></span>{area.city}</a>
                ))}
              </div>
              <div style={{ display: "grid", gap: "18px" }}>
                <div className="map-card" aria-label="Google map centered on Charleston, West Virginia">
                  <iframe
                    title="Charleston, WV service area map"
                    src="https://www.google.com/maps?q=Charleston,%20WV&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                  />
                </div>
                <a
                  className="button button-dark-outline"
                  href="/service-areas"
                  style={{ justifySelf: "start" }}
                >
                  View all service areas <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about-reviews" id="reviews" aria-label="About and reviews">
          <div className="container about-reviews-grid">
            <article className="about-card" style={{ display: "block" }}>
              <div className="about-copy">
                <p className="kicker">About us</p>
                <h2>Locally Owned. <span>Customer Focused.</span></h2>
                <p>
                  Charleston Mobile Car Detailing is a local mobile detailing business serving
                  Charleston, WV. We bring attentive interior detailing and exterior detailing
                  directly to you without taking more time out of your day.
                </p>
                <a className="button button-primary" href="/contact">Get to know us <ArrowIcon /></a>
              </div>
            </article>
            <article className="review-card">
              <p className="kicker">What our clients say</p>
              <div className="review-rating">
                <span className="stars" aria-label={`${featuredReview.rating} out of 5 stars`}>★★★★★</span>
                <p><strong>{averageRating} average rating</strong><small>{reviewLabel}</small></p>
              </div>
              <blockquote>“{featuredReview.text}”</blockquote>
              <p className="review-author">— {featuredReview.name}</p>
              <a className="button button-light-outline" href="/reviews">Read more reviews <ArrowIcon /></a>
            </article>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-heading centered">
              <p className="kicker">Answers, before we arrive</p>
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <p>Everything you need to know about mobile car detailing in Charleston, WV.</p>
            </div>
            <div className="faq-grid">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact" aria-labelledby="cta-heading">
          <Image
            className="final-cta-background"
            src="/images/CLEANCARSTARTSHERE.png"
            alt="Clean car after mobile detailing in Charleston WV"
            fill
            sizes="100vw"
          />
          <div className="container final-cta-inner">
            <p className="kicker">Your clean car starts here</p>
            <h2 id="cta-heading">Ready to Get Your Vehicle <span>Looking Its Best?</span></h2>
            <p>Book your appointment online in minutes. We&apos;ll come to you.</p>
            <a className="button button-primary button-large" href={business.bookingUrl}>
              <CalendarIcon /> Book your appointment
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
