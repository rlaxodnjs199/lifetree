import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LifeTree Clinic - Acupuncture & Herbal Medicine | Burnsville & St. Anthony, MN",
  description: "LifeTree Clinic provides high-quality and compassionate acupuncture and herbal medicine care in Burnsville and St. Anthony, Minnesota. Expert treatment for pain management, women's health, mental health, and more.",
  keywords: ["acupuncture", "herbal medicine", "traditional chinese medicine", "pain management", "women's health", "Burnsville MN", "St. Anthony MN", "holistic healing"],
  authors: [{ name: "LifeTree Clinic" }],
  creator: "LifeTree Clinic",
  publisher: "LifeTree Clinic",
  metadataBase: new URL('https://lifetreeclinic.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lifetreeclinic.com',
    siteName: 'LifeTree Clinic',
    title: 'LifeTree Clinic - Acupuncture & Herbal Medicine',
    description: 'Expert acupuncture and herbal medicine care in Burnsville and St. Anthony, MN. Comprehensive treatment for pain management, women\'s health, mental health, and more.',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'LifeTree Clinic Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LifeTree Clinic - Acupuncture & Herbal Medicine',
    description: 'Expert acupuncture and herbal medicine care in Burnsville and St. Anthony, MN.',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
