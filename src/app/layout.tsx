import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LifeTree Acupuncture - Transform Your Health Through Ancient Healing",
  description: "Experience natural, holistic healing through traditional Chinese medicine and acupuncture. Licensed practitioner with 20+ years of experience.",
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
