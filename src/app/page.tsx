'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import Providers from '@/components/Providers';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <Benefits /> */}
      <About />
      <Providers />
      <Services />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
