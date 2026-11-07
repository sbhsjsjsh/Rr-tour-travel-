import type {Metadata} from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RR Travel Agency Bangalore | Tour & Travel Services',
  description: 'Book reliable travel services with RR Travel Agency in Bangalore. Get assistance with holiday packages, tour planning, local and outstation trips, and customized travel solutions at affordable prices.',
  openGraph: {
    title: 'RR Travel Agency Bangalore | Tour & Travel Services',
    description: 'Book reliable travel services with RR Travel Agency in Bangalore. Get assistance with holiday packages, tour planning, local and outstation trips, and customized travel solutions at affordable prices.',
    type: 'website',
    siteName: 'RR Travel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RR Travel Agency Bangalore | Tour & Travel Services',
    description: 'Book reliable travel services with RR Travel Agency in Bangalore. Get assistance with holiday packages, tour planning, local and outstation trips, and customized travel solutions at affordable prices.',
  },
  alternates: {
    canonical: process.env.APP_URL || '',
  },
  icons: {
    icon: '/assets/images/favicon_icon_1794080908585.jpg',
    apple: '/assets/images/favicon_icon_1794080908585.jpg',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "RR Travel",
  "image": "/assets/images/hero_nandi_hills_v2_1794081075287.jpg",
  "logo": "/assets/images/favicon_icon_1794080908585.jpg",
  "@id": process.env.APP_URL || "",
  "url": process.env.APP_URL || "",
  "telephone": "+91-80-1234-5678",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "MG Road",
    "addressLocality": "Bengaluru",
    "addressRegion": "KA",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9716,
    "longitude": 77.5946
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  },
  "description": "Book reliable travel services with RR Travel Agency in Bangalore. Holiday packages, tour planning, local and outstation trips."
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-[#FCFAF7] text-slate-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
