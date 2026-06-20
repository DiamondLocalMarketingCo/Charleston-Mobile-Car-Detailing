import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">404</span>
          <h1>Page not found</h1>
          <p className="lead">The page you are looking for does not exist. Return to the homepage or view mobile detailing services.</p>
          <div className="hero-actions" style={{ marginTop: 26 }}>
            <Link className="btn primary" href="/">Home</Link>
            <Link className="btn secondary" href="/services">Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
