import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shree Dental Care | Best Dentist in Kamothe, Navi Mumbai",
  description: "Trusted multispeciality dental care in Kamothe, Navi Mumbai. Expert treatments including root canals, implants, and pediatric dentistry by Dr. Sheetal Jagtap-Bhise.",
  metadataBase: new URL("https://shreedentalcare.com"), // Placeholder domain
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Shree Dental Care',
    image: 'https://shreedentalcare.com/logo.png',
    description: 'Trusted multispeciality dental care in Kamothe, Navi Mumbai.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop Number 47 Geometric, Silver Crest, Sector-25',
      addressLocality: 'Kamothe, Panvel, Navi Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '410209',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.023242',
      longitude: '73.090664'
    },
    url: 'https://shreedentalcare.com',
    telephone: '+919999999999', // Placeholder
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '113'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '10:00',
        closes: '21:00'
      }
    ]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
