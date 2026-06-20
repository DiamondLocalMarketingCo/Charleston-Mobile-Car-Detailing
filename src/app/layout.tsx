import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { business, faqs } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: 'Mobile Car Detailing Charleston WV | Charleston Mobile Car Detailing',
    template: '%s | Charleston Mobile Car Detailing',
  },
  description: business.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mobile Car Detailing Charleston WV',
    description: business.description,
    url: business.url,
    siteName: business.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    url: business.url,
    telephone: business.phone,
    areaServed: 'Charleston, WV and surrounding areas',
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: 'US',
    },
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior Car Detailing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exterior Car Detailing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Car Detailing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance Detailing' } },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
