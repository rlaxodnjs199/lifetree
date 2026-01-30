'use client';

import { useRouter } from 'next/navigation';

const conditionsData = [
  {
    title: 'Pain Management',
    image: '/pain_management.png',
    conditions: [
      'Acute Injuries',
      'Chronic Pain',
      'Neck & Back Pain',
      'Headaches & Migraines',
      'Muscular Tension',
      'Tendonitis',
      'Fibromyalgia',
      'Joint Pain & Arthritis',
      'Neuropathy & Nerve Pain',
      'Plantar Fasciitis',
      'Tennis & Golfer\'s Elbow',
      'Frozen Shoulder',
      'Carpal & Tarsal Tunnel',
      'Trigeminal Neuralgia',
      'TMJ',
      'Shingles'
    ]
  },
  {
    title: 'Women\'s Health',
    image: '/women_health.png',
    conditions: [
      'Fertility',
      'Pregnancy Symptoms',
      'Morning Sickness',
      'PMS',
      'Menstrual Pain',
      'Endometriosis',
      'PCOS',
      'Menopausal Symptoms',
      'Post-Partum Care',
      'Breastfeeding Support',
      'Irregular Periods',
      'Prolapse',
      'Recurrent Miscarriage',
      'Uterine Fibroids',
      'Ovarian Cysts',
      'Hormonal Imbalance'
    ]
  },
  {
    title: 'Mental Health & Related Conditions',
    image: '/mental_health.png',
    conditions: [
      'Depression',
      'Anxiety',
      'Stress',
      'PTSD',
      'Irritability',
      'Addiction Management',
      'Smoking Cessation',
      'Insomnia',
      'Sleep Disorders',
      'Fatigue',
      'Bipolar Disorder',
      'Eating Disorders',
      'Appetite Management',
      'Mood & Personality Disorders'
    ]
  }
];

export default function Services() {
  const router = useRouter();

  return (
    <section id="services" className="bg-[#F8F6EF]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#250303] mb-4 font-['Rufina']">
            Conditions Treated
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {conditionsData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#250303]/10"
            >
              <div className="flex flex-col items-center mb-6">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-16 h-16 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-[#250303] font-['Rufina'] text-center">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.conditions.map((condition, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#250303]/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4B4D39] mt-2 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push('/conditions')}
            className="bg-[#4B4D39] text-white px-9 py-3 rounded-lg font-semibold hover:bg-[#3a3d2d] transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
