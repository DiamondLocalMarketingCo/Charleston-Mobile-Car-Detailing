import Image from "next/image";
import { business, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="/" aria-label="Charleston Mobile Car Detailing home">
            <Image
              className="brand-logo footer-logo"
              src="/images/charleston-logo-transparent.png"
              alt="Charleston Mobile Car Detailing"
              width={170}
              height={99}
            />
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
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/service-areas">Service areas</a>
          <a href="/reviews">Reviews</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          {services.map((service) => (
            <a href={`/services/${service.slug}`} key={service.title}>{service.title}</a>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <h3>Contact</h3>
          <span>Charleston, WV</span>
          <span>Mobile service only</span>
          <a href={`mailto:${business.email}`}>Email us</a>
          <a href={business.bookingUrl}>Request an appointment</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Charleston Mobile Car Detailing. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
