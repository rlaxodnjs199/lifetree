import { QuotesIcon } from '@phosphor-icons/react';

const testimonials = [
  {
    quote: "I've suffered from chronic back pain for years. After just a few sessions with Dr. Chen, I'm finally pain-free!",
    author: 'Jennifer M.',
    featured: true,
  },
  {
    quote: 'The acupuncture treatments have been life-changing for my anxiety and sleep issues.',
    author: 'Michael R.',
    featured: false,
  },
  {
    quote: "Dr. Chen's expertise and caring approach made all the difference in my healing journey.",
    author: 'Lisa K.',
    featured: false,
  },
  {
    quote: 'Highly recommend! Professional, knowledgeable, and truly cares about her patients.',
    author: 'David P.',
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-container bg-gradient-to-b from-[var(--bg-light-green)] to-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
          What Our Patients Say
        </h2>
        <p className="text-xl text-[var(--text-secondary)]">
          Real stories from real people
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`card relative ${
              testimonial.featured ? 'lg:col-span-2 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-accent)] text-white' : 'bg-white'
            }`}
          >
            <div className="absolute top-6 left-6 opacity-20">
              <QuotesIcon 
                size={48} 
                weight="fill"
                className={testimonial.featured ? 'text-white' : 'text-[var(--bg-primary)]'}
              />
            </div>
            
            <div className="relative pt-8">
              <p className={`text-lg md:text-xl leading-relaxed mb-6 ${
                testimonial.featured ? 'text-white' : 'text-[var(--text-secondary)]'
              }`}>
                {testimonial.quote}
              </p>
              <p className={`font-semibold ${
                testimonial.featured ? 'text-white' : 'text-[var(--text-primary)]'
              }`}>
                — {testimonial.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
