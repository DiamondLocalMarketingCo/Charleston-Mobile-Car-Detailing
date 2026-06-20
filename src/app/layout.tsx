import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mobile Car Detailing Charleston WV | Charleston Mobile Car Detailing",
  description:
    "Professional mobile car detailing in Charleston, WV. Interior and exterior detailing brought directly to your home, apartment, or workplace.",
  keywords: [
    "mobile car detailing Charleston WV",
    "car detailing Charleston WV",
    "interior detailing Charleston WV",
    "exterior detailing Charleston WV",
  ],
  openGraph: {
    title: "Charleston Mobile Car Detailing",
    description:
      "Professional interior and exterior detailing brought directly to you in Charleston, WV.",
    type: "website",
    locale: "en_US",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Charleston Mobile Car Detailing",
  description:
    "Professional mobile interior and exterior car detailing serving Charleston, West Virginia and surrounding communities.",
  email: "hello@charlestonmobilecardetailing.com",
  areaServed: [
    "Charleston",
    "South Charleston",
    "Dunbar",
    "Nitro",
    "St. Albans",
    "Cross Lanes",
    "Teays Valley",
    "Hurricane",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charleston",
    addressRegion: "WV",
    addressCountry: "US",
  },
  serviceType: [
    "Mobile car detailing",
    "Interior car detailing",
    "Exterior car detailing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
