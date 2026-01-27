'use client';

import { NeedleIcon, LeafIcon, TeaBagIcon, PintGlassIcon } from '@phosphor-icons/react';

const services = [
  {
    icon: NeedleIcon,
    title: 'Acupuncture',
    description: 'Traditional needle therapy to restore balance and promote natural healing',
  },
  {
    icon: LeafIcon,
    title: 'Manual Therapy',
    description: 'Hands-on techniques to relieve pain and improve mobility',
  },
  {
    icon: TeaBagIcon,
    title: 'Herbal Medicine',
    description: 'Custom herbal formulations to support your wellness journey',
  },
  {
    icon: NeedleIcon,
    title: 'Cranio Sacral Therapy',
    description: 'Gentle touch therapy to release tension in the central nervous system',
  },
  {
    icon: PintGlassIcon,
    title: 'Fire Cupping',
    description: 'Ancient technique to improve circulation and reduce muscle tension',
  },
  {
    icon: NeedleIcon,
    title: 'NADA Protocol',
    description: 'Ear acupuncture for addiction recovery and stress relief',
  },
  {
    icon: NeedleIcon,
    title: 'Battlefield Protocol',
    description: 'Specialized treatment for PTSD and trauma recovery',
  },
  {
    icon: NeedleIcon,
    title: 'Electro Acupuncture',
    description: 'Enhanced acupuncture with gentle electrical stimulation',
  },
  {
    icon: LeafIcon,
    title: 'Medical Tui Na',
    description: 'Chinese therapeutic massage for musculoskeletal conditions',
  },
  {
    icon: LeafIcon,
    title: 'Gua Sha',
    description: 'Traditional scraping technique to promote healing and circulation',
  },
  {
    icon: LeafIcon,
    title: 'Qi Gong',
    description: 'Mindful movement and breathing exercises for energy cultivation',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F8F6EF]">
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
          const IconComponent = service.icon;
          
          return (
            <div
              key={index}
              className="card group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 text-[#250303] group-hover:text-[var(--bg-accent)] transition-colors duration-300">
                  <IconComponent size={64} weight="light" />
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
  );
}
