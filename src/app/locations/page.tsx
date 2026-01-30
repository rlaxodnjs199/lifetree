'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@phosphor-icons/react';

const locations = [
  {
    name: 'Burnsville Clinic',
    address: '13967 West Preserve Blvd.',
    city: 'Burnsville, MN 55337',
    phone: '952-435-7349',
    fax: '952-417-6159',
    email: 'info@lifetreeclinicmn.com',
    hours: [
      { day: 'Monday', time: '10am-6pm' },
      { day: 'Tuesday', time: '10am-3pm' },
      { day: 'Wednesday', time: '7am-10am' },
      { day: 'Thursday', time: '10am-6pm' },
      { day: 'Friday', time: '7am-10am' },
      { day: 'Saturday', time: '8am-11am' },
      { day: 'Sunday', time: 'Closed' },
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.8!2d-93.3056!3d44.7586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62a8c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2s13967%20W%20Preserve%20Blvd%2C%20Burnsville%2C%20MN%2055337!5e0!3m2!1sen!2sus!4v1234567890',
  },
  {
    name: 'St. Anthony Clinic',
    address: '2500 New Brighton Blvd Ste 111',
    city: 'St. Anthony, MN 55418',
    phone: '952-435-7349',
    fax: '952-417-6159',
    email: 'info@lifetreeclinicmn.com',
    hours: [
      { day: 'Monday - Friday', time: '10:00am - 5:00pm' },
      { day: 'Saturday - Sunday', time: 'Closed' },
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.2!2d-93.2445!3d45.0158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d8c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2s2500%20New%20Brighton%20Blvd%20%23111%2C%20St%20Anthony%2C%20MN%2055418!5e0!3m2!1sen!2sus!4v1234567890',
  },
];

export default function LocationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="bg-[#F8F6EF] md:pt-12">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#250303] mb-4 font-['Rufina']">
              Locations
            </h2>
            <p className="text-xl text-[#250303] max-w-2xl mx-auto">
              Visit us at either of our convenient Minnesota locations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="card h-full flex flex-col">
                <h3 className="text-3xl font-medium mb-6 text-[#250303] font-['Rufina']">
                  {location.name}
                </h3>

                {/* Google Map */}
                <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  ></iframe>
                </div>

                {/* Location Details */}
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start gap-3">
                    <MapPinIcon size={24} weight="fill" className="text-[#250303] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#250303] mb-1">Address</p>
                      <p className="text-[#250303]">
                        {location.address}<br />
                        {location.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneIcon size={24} weight="fill" className="text-[#250303] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#250303] mb-1">Contact</p>
                      <p className="text-[#250303]">
                        Phone: <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="hover:underline">{location.phone}</a>
                      </p>
                      {location.fax && <p className="text-[#250303]">Fax: {location.fax}</p>}
                      {location.email && (
                        <p className="text-[#250303]">
                          Email: <a href={`mailto:${location.email}`} className="hover:underline">{location.email}</a>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ClockIcon size={24} weight="fill" className="text-[#250303] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#250303] mb-2">Hours</p>
                      <div className="space-y-1">
                        {location.hours.map((hour, idx) => (
                          <div key={idx} className="flex justify-between text-[#250303] text-sm">
                            <span className="font-medium min-w-[100px]">{hour.day}:</span>
                            <span>{hour.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Directions Button */}
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    location.address + ', ' + location.city
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block w-full text-center bg-[#250303] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#250303]/90 transition-all duration-300"
                >
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
