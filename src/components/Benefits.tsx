import { LeafIcon, MoonIcon, ShieldPlusIcon } from '@phosphor-icons/react';
import PainIcon from '@/assets/icons/pain.svg';
import CalmIcon from '@/assets/icons/calm.svg';

const benefits = [
  {
    icon: PainIcon,
    title: 'Pain Relief',
    description: 'Effective treatment for back pain, neck pain, arthritis, and more',
    image: 'https://images.pexels.com/photos/8312866/pexels-photo-8312866.jpeg',
    isSvg: true,
  },
  {
    icon: CalmIcon,
    title: 'Stress Reduction',
    description: 'Calm your mind and reduce anxiety naturally',
    image: 'https://pixabay.com/get/ga1909751a8e09a959226100885153afbb7a7388f783cad7b44a8353b096df2f2deb3890535f3a840613ad98d776e8d03.jpg',
    isSvg: true,
  },
  {
    icon: MoonIcon,
    title: 'Improved Sleep',
    description: 'Experience deeper, more restful sleep',
    image: 'https://images.pexels.com/photos/298947/pexels-photo-298947.jpeg',
    isSvg: false,
  },
  {
    icon: ShieldPlusIcon,
    title: 'Enhanced Immunity',
    description: 'Strengthen your body\'s natural defense system',
    image: 'https://pixabay.com/get/g14fb60d821c0ab08352c23951c720f5134a7e079181f5479e9fa5314db618ac9b8a4cee62f3cf098878ae25ad6f4c5a7.jpg',
    isSvg: false,
  },
  {
    icon: LeafIcon,
    title: 'Natural Healing',
    description: 'Address root causes, not just symptoms',
    image: 'https://pixabay.com/get/ge3b1f71b77dfc46bc0dbaaced7e7b96bab917ac0f57bc2ae16177dd7f5505fc1745a86fe37ae6894d8c1c25438c5854f.jpg',
    isSvg: false,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section-container bg-[var(--bg-light-green)]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
          Why Choose Acupuncture
        </h2>
        <p className="text-xl text-[var(--text-secondary)]">
          The Benefits of Natural Healing
        </p>
      </div>

      <div className="space-y-24">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="max-w-lg">
                  <div className="w-16 h-16 mb-6 text-[var(--bg-primary)]">
                    {benefit.isSvg ? (
                      <IconComponent className="w-full h-full" />
                    ) : (
                      <IconComponent size={64} weight="light" />
                    )}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
