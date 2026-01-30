'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { List, X } from '@phosphor-icons/react';
import ReservationModal from './ReservationModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Check if we're on a page other than home
  const isNotHomePage = pathname !== '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Change state when scrolled past the hero section (minus some offset)
      setIsScrolled(window.scrollY > window.innerHeight - 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Providers', href: '#providers' },
    { label: 'Services', href: '/services' },
    { label: 'Conditions', href: '/conditions' },
    { label: 'Locations', href: '/locations' },
    { label: 'Contact', href: '#footer' },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // If we're not on the home page and clicking a hash link, go to home page with hash
      if (pathname !== '/') {
        router.push(`/${href}`);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isNotHomePage
        ? 'bg-[#1d2415] py-1.5'
        : 'bg-transparent backdrop-blur-xs py-0.5'
    }`}>
      <div className="section-container !py-1.5">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center">
            <img 
              src="/logo.svg" 
              alt="LifeTree Clinic Logo" 
              className="h-8 w-auto object-contain"
            />
            <div className="ml-3">
              <h1 className="text-lg font-bold text-white">LifeTree Clinic</h1>
              <p className="text-xs text-white/80 -mt-1">Acupuncture & Herbal Medicine</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="text-white hover:text-[var(--bg-accent)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Reservation Button */}
          <button
            onClick={() => setIsReservationModalOpen(true)}
            className="hidden lg:block bg-[var(--bg-primary)] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[var(--bg-primary-dark)] transition-all duration-300"
          >
            Make Reservation
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left text-white hover:text-[var(--bg-accent)] transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsReservationModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="btn-primary w-full"
            >
              Make Reservation
            </button>
          </div>
        )}
      </div>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </nav>
  );
}
