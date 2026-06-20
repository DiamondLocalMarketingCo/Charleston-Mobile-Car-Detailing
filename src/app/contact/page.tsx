import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business, serviceAreas, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Charleston Mobile Car Detailing | Mobile Detailing Charleston WV",
  description:
    "Contact Charleston Mobile Car Detailing to request mobile interior or exterior car detailing in Charleston, WV and surrounding areas.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container page-hero-inner">
            <p className="kicker">Book mobile detailing</p>
            <h1>Contact Charleston <span>Mobile Car Detailing</span></h1>
            <p>Request an appointment, ask a question, or get help choosing the right mobile detailing service for your vehicle.</p>
          </div>
        </section>

        <section className="page-section" id="book">
          <div className="container contact-layout">
            <aside className="contact-card">
              <h2>Service details</h2>
              <p><strong>Email:</strong> <a href={`mailto:${business.email}`}>{business.email}</a></p>
              <p><strong>Location:</strong> Charleston, WV</p>
              <p><strong>Service:</strong> Mobile detailing only</p>
              <p>We serve Charleston and surrounding communities. Appointment availability depends on your location, vehicle condition, and schedule.</p>
              <ul className="feature-list">
                {serviceAreas.slice(0, 5).map((area) => <li key={area.slug}>{area.city}, {area.state}</li>)}
              </ul>
            </aside>

            <section className="contact-card">
              <h2>Request an appointment</h2>
              <p>This form is ready for the future booking/contact backend. For now, it is a visual form layout and the email link can be used for real requests.</p>
              <form className="contact-form">
                <input type="text" name="name" placeholder="Full name" aria-label="Full name" />
                <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" />
                <input type="email" name="email" placeholder="Email address" aria-label="Email address" />
                <input type="text" name="vehicle" placeholder="Vehicle year, make, and model" aria-label="Vehicle year, make, and model" />
                <select name="service" aria-label="Select a service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => <option key={service.slug}>{service.title}</option>)}
                </select>
                <textarea name="message" placeholder="Tell us about the vehicle condition, location, and preferred timing." aria-label="Message" />
                <a className="button button-primary" href={`mailto:${business.email}?subject=Detailing%20appointment%20request`}>Email appointment request</a>
              </form>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
