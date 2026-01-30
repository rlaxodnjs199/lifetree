'use client';

import { useState } from 'react';
import ReservationModal from './ReservationModal';

export default function Footer() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <footer id="footer" className="bg-[#4B4D39] text-[#FEFBF6] pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {/* Locations Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-medium mb-2 md:mb-4 uppercase tracking-wider font-['Rufina']">Locations</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-1">Burnsville</p>
                <p>13967 West Preserve Blvd.</p>
                <p>Burnsville, MN 55337</p>
              </div>
              <div>
                <p className="font-semibold mb-1">St. Anthony</p>
                <p>2500 New Brighton Blvd Ste 111</p>
                <p>St. Anthony, MN 55418</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-medium mb-2 md:mb-4 uppercase tracking-wider font-['Rufina']">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p>Phone: 952-435-7349</p>
                <p>Fax: 952-417-6159</p>
                <a
                  href="mailto:info@lifetreeclinicmn.com"
                  className="hover:text-[#FEFBF6]/80 transition-colors block"
                >
                  info@lifetreeclinicmn.com
                </a>
              </div>
              <button
                onClick={() => setIsReservationModalOpen(true)}
                className="bg-[var(--bg-primary)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--bg-primary-dark)] transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
              >
                Make Appointment
              </button>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center font-['Rufina'] gap-6">
             <div className="flex gap-4">
                <img src="/award1.png" alt="Award 1" className="h-24 object-contain" />
                <img src="/award2.jpg" alt="Award 2" className="h-24 object-contain" />
             </div>

            </div>
        </div>

        <div className="text-[#FEFBF6]/60 text-sm text-center w-full pt-8 md:pt-12">
          <p>© 2026 LifeTree Acupuncture Minnesota. All rights reserved.</p>
        </div>
      </div>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </footer>
  );
}
