'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { X, MapPin, ArrowLeft } from '@phosphor-icons/react';

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
    reservationUrl: 'https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=83df888a08d327805b22e2c94964e3bc2745a3b69f9421d65500b4d178208612405c8176170639bd4c4cb80208e5c580debf17855dc5f624',
  },
  {
    name: 'St. Anthony Clinic',
    address: '2500 New Brighton Blvd Ste 111',
    city: 'St. Anthony, MN 55418',
    phone: '952-435-7349',
    reservationUrl: 'https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=83df888a08d327805b22e2c94964e3bc2a43d087dc08a67e5500b4d178208612405c8176170639bd4c4cb80208e5c580debf17855dc5f624',
  },
];

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setSelectedLocation(null);
    }
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleLocationClick = (location: typeof locations[0]) => {
    setSelectedLocation(location);
  };

  const handleBack = () => {
    setSelectedLocation(null);
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative bg-white shadow-2xl w-full transition-all ${
        selectedLocation
          ? 'h-full md:h-[95vh] md:max-w-5xl md:mx-4 md:my-4 md:rounded-2xl'
          : 'max-w-2xl mx-4 rounded-2xl p-8'
      }`}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#250303] hover:text-[#250303]/60 transition-colors z-10 bg-white rounded-full p-1"
          aria-label="Close modal"
        >
          <X size={28} weight="bold" />
        </button>

        {/* Back button (shown when location is selected) */}
        {selectedLocation && (
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 text-[#250303] hover:text-[#250303]/60 transition-colors z-10 flex items-center gap-2 bg-white rounded-full px-3 py-1"
            aria-label="Go back"
          >
            <ArrowLeft size={24} weight="bold" />
            <span className="font-semibold hidden md:inline">Back</span>
          </button>
        )}

        {!selectedLocation ? (
          <>
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
                  onClick={() => handleLocationClick(location)}
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
                    {location.phone}
                  </p>
                </button>
              ))}
            </div>

            {/* Footer note */}
            <p className="text-center text-[#250303]/60 text-sm mt-6">
              Click a location to book your reservation online
            </p>
          </>
        ) : (
          <div className="h-full flex flex-col">
            {/* Header with selected location */}
            <div className="text-center pt-5 pb-4 md:pt-8 md:pb-6 px-4 flex-shrink-0">
              <h2 className="text-xl md:text-3xl font-bold text-[#250303] mb-2 font-['Rufina']">
                {selectedLocation.name}
              </h2>
              <p className="text-[#250303]/70 text-sm md:text-base">
                {selectedLocation.address}, {selectedLocation.city}
              </p>
            </div>

            {/* Reservation iframe container */}
            <div className="flex-1 md:px-6 md:pb-6 overflow-hidden">
              <iframe
                src={selectedLocation.reservationUrl}
                className="w-full h-full md:rounded-lg md:border-2 md:border-[#4B4D39]/20"
                style={{ overflow: 'hidden' }}
                frameBorder="0"
                title={`${selectedLocation.name} Reservation`}
              />
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
