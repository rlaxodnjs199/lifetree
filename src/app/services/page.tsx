'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    icon: '/acupuncture.png',
    title: 'Acupuncture',
    description: 'Traditional needle therapy to restore balance and promote natural healing',
  },
  {
    icon: '/massage.png',
    title: 'Manual Therapy',
    description: 'Hands-on techniques to relieve pain and improve mobility',
  },
  {
    icon: '/herbal_medicine.png',
    title: 'Herbal Medicine',
    description: 'Custom herbal formulations to support your wellness journey',
  },
  {
    icon: '/cranio_sacral_therapy.png',
    title: 'Cranio Sacral Therapy',
    description: 'Gentle touch therapy to release tension in the central nervous system',
  },
  {
    icon: '/fire_cupping.png',
    title: 'Fire Cupping',
    description: 'Ancient technique to improve circulation and reduce muscle tension',
  },
  {
    icon: '/nada_protocol.png',
    title: 'NADA Protocol',
    description: 'Ear acupuncture for addiction recovery and stress relief',
  },
  {
    icon: '/battlefield_protocol.png',
    title: 'Battlefield Protocol',
    description: 'Specialized treatment for PTSD and trauma recovery',
  },
  {
    icon: '/electro_acupucture.png',
    title: 'Electro Acupuncture',
    description: 'Enhanced acupuncture with gentle electrical stimulation',
  },
  {
    icon: '/massage.png',
    title: 'Medical Tui Na',
    description: 'Chinese therapeutic massage for musculoskeletal conditions',
  },
  {
    icon: '/massage.png',
    title: 'Gua Sha',
    description: 'Traditional scraping technique to promote healing and circulation',
  },
  {
    icon: '/qi_gong.png',
    title: 'Qi Gong',
    description: 'Mindful movement and breathing exercises for energy cultivation',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="bg-[#F8F6EF] md:pt-12">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#250303] mb-4 font-['Rufina']">
              Our Services
            </h2>
            <p className="text-xl text-[#250303] max-w-2xl mx-auto">
              Comprehensive healing treatments tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="card group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-6 relative group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-[#250303] font-['Rufina']">
                    {service.title}
                  </h3>
                  <p className="text-[#250303] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
