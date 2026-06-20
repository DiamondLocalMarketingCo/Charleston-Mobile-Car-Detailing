import Link from 'next/link';
import { business } from '@/lib/site';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${business.name} home`}>
          <span className="brand-mark">CM</span>
          <span className="brand-text">Charleston<br />Mobile Detailing</span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link className="btn primary" href="/book">Book Now</Link>
        </nav>
        <Link className="mobile-menu" href="/book" aria-label="Book online">●</Link>
      </div>
    </header>
  );
}
