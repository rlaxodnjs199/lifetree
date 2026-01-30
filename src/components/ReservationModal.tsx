'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { X, MapPin } from '@phosphor-icons/react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const locations = [
  {
    name: 'Burnsville Clinic',
    address: '13967 West Preserve Blvd.',
    city: 'Burnsville, MN 55337',
    phone: '952-435-7349',
  },
  {
    name: 'St. Anthony Clinic',
    address: '2500 New Brighton Blvd Ste 111',
    city: 'St. Anthony, MN 55418',
    phone: '952-435-7349',
  },
];

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleLocationClick = (phone: string) => {
    window.location.href = `tel:${phone.replace(/\D/g, '')}`;
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#250303] hover:text-[#250303]/60 transition-colors"
          aria-label="Close modal"
        >
          <X size={28} weight="bold" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#250303] mb-2 font-['Rufina']">
            Select a Location
          </h2>
          <p className="text-[#250303]/70">
            Choose your preferred clinic to make a reservation
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {locations.map((location, index) => (
            <button
              key={index}
              onClick={() => handleLocationClick(location.phone)}
              className="bg-[#F8F6EF] hover:bg-[#4B4D39] hover:text-white p-6 rounded-xl transition-all duration-300 text-left group border-2 border-transparent hover:border-[#4B4D39]"
            >
              <div className="flex items-start gap-3 mb-3">
                <MapPin
                  size={24}
                  weight="fill"
                  className="text-[#4B4D39] group-hover:text-white mt-1 flex-shrink-0 transition-colors"
                />
                <h3 className="text-xl font-bold text-[#250303] group-hover:text-white font-['Rufina'] transition-colors">
                  {location.name}
                </h3>
              </div>
              <p className="text-[#250303]/80 group-hover:text-white/90 text-sm mb-2 transition-colors">
                {location.address}
              </p>
              <p className="text-[#250303]/80 group-hover:text-white/90 text-sm mb-3 transition-colors">
                {location.city}
              </p>
              <p className="text-[#4B4D39] group-hover:text-white font-semibold transition-colors">
                Call: {location.phone}
              </p>
            </button>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[#250303]/60 text-sm mt-6">
          Click a location to call and make your reservation
        </p>
      </div>
    </div>,
    document.body
  );
}
