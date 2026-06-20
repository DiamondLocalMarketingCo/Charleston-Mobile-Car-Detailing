import { Header } from "../components/Header";

const services = [
  {
    key: "interior",
    number: "01",
    title: "Interior Detailing",
    description:
      "A careful reset for seats, carpets, trim, cupholders, and the hard-to-reach places that collect everyday mess.",
  },
  {
    key: "exterior",
    number: "02",
    title: "Exterior Detailing",
    description:
      "A thorough exterior clean designed to remove road film and bring back a crisp, freshly detailed finish.",
  },
  {
    key: "full",
    number: "03",
    title: "Full Car Detailing",
    description:
      "Interior and exterior detailing combined for a complete, top-to-bottom vehicle refresh at your location.",
  },
  {
    key: "maintenance",
    number: "04",
    title: "Maintenance Detail",
    description:
      "Consistent care that helps your vehicle stay clean, comfortable, and ready for whatever the week brings.",
  },
];

const areas = [
  "Charleston",
  "South Charleston",
  "Dunbar",
  "Nitro",
  "St. Albans",
  "Cross Lanes",
  "Teays Valley",
  "Hurricane",
];

const faqs = [
  {
    question: "Do you come to my home or workplace?",
    answer:
      "Yes. We are a fully mobile service and can detail your vehicle at your home, apartment, or workplace when the location is suitable for service.",
  },
  {
    question: "How long does detailing service take?",
    answer:
      "Service time depends on your vehicle, its condition, and the detailing service selected. We will provide a clear time estimate when your appointment is confirmed.",
  },
  {
    question: "Do I need to provide water or electricity?",
    answer:
      "Requirements can vary by appointment. We will confirm access needs with you before arrival so there are no surprises on service day.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Charleston and nearby communities including South Charleston, Dunbar, Nitro, St. Albans, Cross Lanes, Teays Valley, and Hurricane.",
  },
  {
    question: "How much does detailing cost?",
    answer:
      "Pricing depends on vehicle size, condition, and the service requested. Contact us for a straightforward quote tailored to your vehicle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Accepted payment methods will be confirmed when you schedule. We keep the process simple and explain everything before your appointment.",
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

function ServiceVisual({ type }: { type: string }) {
  return (
    <div className={`service-visual service-visual-${type}`} aria-hidden="true">
      <span className="visual-noise" />
      <span className="visual-car-body" />
      <span className="visual-window" />
      <span className="visual-wheel visual-wheel-one" />
      <span className="visual-wheel visual-wheel-two" />
      <span className="visual-detail visual-detail-one" />
      <span className="visual-detail visual-detail-two" />
    </div>
  );
}

function ComparisonVisual({ type }: { type: "seats" | "wheel" | "door" }) {
  return (
    <div className={`comparison-visual comparison-${type}`} aria-hidden="true">
      <div className="comparison-half comparison-before">
        <span className="comparison-object" />
        <span className="grime grime-one" />
        <span className="grime grime-two" />
        <b>Before</b>
      </div>
      <div className="comparison-half comparison-after">
        <span className="comparison-object" />
        <span className="clean-shine">✦</span>
        <b>After</b>
      </div>
      <span className="comparison-divider" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home" aria-labelledby="hero-heading">
          <div className="hero-skyline" aria-hidden="true">
            <span className="building building-one" />
            <span className="building building-two" />
            <span className="building building-three" />
            <span className="capitol-dome" />
          </div>
          <div className="hero-car" aria-hidden="true">
            <span className="car-shadow" />
            <span className="car-roof" />
            <span className="car-windshield" />
            <span className="car-body" />
            <span className="car-window car-window-one" />
            <span className="car-window car-window-two" />
            <span className="car-light" />
            <span className="car-grille" />
            <span className="car-wheel car-wheel-one" />
            <span className="car-wheel car-wheel-two" />
            <span className="car-reflection" />
          </div>

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
              <a className="button button-primary button-large" href="#contact">
                <CalendarIcon /> Book online
              </a>
              <a className="button button-secondary button-large" href="#contact">
                <PhoneIcon /> Call now
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
            <div className="proof-item proof-rating">
              <span className="google-g" aria-hidden="true">G</span>
              <p><span className="stars" aria-label="5 out of 5 stars">★★★★★</span><strong>5.0 Star Rating</strong><small>Google rating placeholder</small></p>
            </div>
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
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <ServiceVisual type={service.key} />
                  <div className="service-card-body">
                    <span className="service-number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact" aria-label={`Ask about ${service.title}`}>
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
              <article><ComparisonVisual type="seats" /><h3>Interior reset</h3></article>
              <article><ComparisonVisual type="wheel" /><h3>Wheel refresh</h3></article>
              <article><ComparisonVisual type="door" /><h3>Cabin cleanup</h3></article>
            </div>
            <div className="centered-action">
              <a className="button button-dark-outline" href="#gallery">View more photos <ArrowIcon /></a>
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
              <a className="text-link" href="#contact">See how it works <ArrowIcon /></a>
            </div>
            <div className="detail-scene" aria-label="Mobile detailing photo placeholder" role="img">
              <span className="scene-sun" />
              <span className="scene-van"><b>CHARLESTON</b><small>Mobile detailing</small></span>
              <span className="scene-car"><i className="scene-foam" /></span>
              <span className="scene-worker"><i /></span>
              <span className="scene-spray" />
              <span className="photo-label">Mobile service • Charleston, WV</span>
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
                {areas.map((area) => (
                  <div key={area}><span><PinIcon /></span>{area}</div>
                ))}
              </div>
              <div className="map-card" aria-label="Stylized service area map placeholder" role="img">
                <span className="map-river river-one" />
                <span className="map-river river-two" />
                <span className="map-road road-one" />
                <span className="map-road road-two" />
                <span className="map-road road-three" />
                <span className="map-ring map-ring-large" />
                <span className="map-ring map-ring-small" />
                <span className="map-pin"><PinIcon /></span>
                <strong>Charleston</strong>
                <small>Mobile service area</small>
                <span className="map-label label-one">Hurricane</span>
                <span className="map-label label-two">St. Albans</span>
                <span className="map-label label-three">Dunbar</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-reviews" id="reviews" aria-label="About and reviews">
          <div className="container about-reviews-grid">
            <article className="about-card">
              <div className="about-copy">
                <p className="kicker">About us</p>
                <h2>Locally Owned. <span>Customer Focused.</span></h2>
                <p>
                  Charleston Mobile Car Detailing is a local mobile detailing business serving
                  Charleston, WV. We bring attentive interior detailing and exterior detailing
                  directly to you—without taking more time out of your day.
                </p>
                <a className="button button-primary" href="#contact">Get to know us <ArrowIcon /></a>
              </div>
              <div className="about-visual" aria-hidden="true">
                <span className="about-rim" />
                <span className="about-fender" />
                <span className="about-light" />
              </div>
            </article>
            <article className="review-card">
              <p className="kicker">What our clients say</p>
              <div className="review-rating">
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                <p><strong>5.0 average rating</strong><small>Placeholder review preview</small></p>
              </div>
              <blockquote>
                “Add a real customer review here to highlight the quality, convenience, and care
                behind your mobile detailing service.”
              </blockquote>
              <p className="review-author">— Review placeholder</p>
              <a className="button button-light-outline" href="#reviews">Read more reviews <ArrowIcon /></a>
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
          <div className="cta-car" aria-hidden="true"><span /><i /></div>
          <div className="container final-cta-inner">
            <p className="kicker">Your clean car starts here</p>
            <h2 id="cta-heading">Ready to Get Your Vehicle <span>Looking Its Best?</span></h2>
            <p>Book your appointment online in minutes. We&apos;ll come to you.</p>
            <a className="button button-primary button-large" href="mailto:hello@charlestonmobilecardetailing.com?subject=Detailing%20appointment%20request">
              <CalendarIcon /> Book your appointment
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#home" aria-label="Charleston Mobile Car Detailing home">
              <span className="brand-mark" aria-hidden="true"><span className="brand-car" /><span className="brand-spark brand-spark-one">✦</span></span>
              <span className="brand-copy"><strong>Charleston</strong><span>Mobile Car Detailing</span></span>
            </a>
            <p>Premium mobile car detailing, brought to you in Charleston, WV.</p>
            <div className="social-links" aria-label="Social links placeholders">
              <span aria-label="Facebook placeholder">f</span>
              <span aria-label="Instagram placeholder">◎</span>
              <span aria-label="Google placeholder">G</span>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick links</h3>
            <a href="#home">Home</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#service-areas">Service areas</a><a href="#reviews">Reviews</a>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            {services.map((service) => <a href="#services" key={service.title}>{service.title}</a>)}
          </div>
          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <span>Charleston, WV</span>
            <span>Mobile service only</span>
            <a href="mailto:hello@charlestonmobilecardetailing.com">Email us</a>
            <a href="#contact">Request an appointment</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Charleston Mobile Car Detailing. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
