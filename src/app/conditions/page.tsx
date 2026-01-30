'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const conditionsData = [
  {
    title: 'Pain Management',
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
    conditions: [
      'Fertility',
      'Pregnancy Symptoms',
      'Morning Sickness',
      'PMS',
      'Menstrual Pain',
      'Endometriosis',
      'PCOS',
      'Menopausal Symptoms',
      'Postpartum Care',
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
  },
  {
    title: 'Autoimmune & Endocrine Disorders',
    conditions: [
      'Rheumatoid Arthritis',
      'Lupus',
      'Lyme Disease',
      'Multiple Sclerosis',
      'Psoriasis',
      'Psoriatic Arthritis',
      'Mast Cell Activation Syndrome',
      'Type I & 2 Diabetes',
      'Raynaud\'s Syndrome',
      'Myasthenia Gravis',
      'Muscular Dystrophy',
      'Guillain Barre Syndrome',
      'Sjogren\'s Syndrome',
      'Grave\'s Disease',
      'Hashimoto\'s Disease',
      'Hypothyroidism',
      'Immunodeficiency Disorders'
    ]
  },
  {
    title: 'Digestive Disorders',
    conditions: [
      'Constipation',
      'Diarrhea',
      'Abdominal Pain',
      'Cramping',
      'Bloating',
      'Nausea & Vomiting',
      'Food Allergies & Sensitivities',
      'GERD & Acid Reflux',
      'Irritable Bowel Syndrome',
      'Inflammatory Bowel Diseases',
      'Celiac Disease',
      'Ulcerative Colitis',
      'Crohn\'s Disease'
    ]
  },
  {
    title: 'Respiratory & Skin Conditions',
    conditions: [
      'Environmental & Seasonal Allergies',
      'Cold & Flu Prevention and Treatment',
      'Asthma',
      'COPD',
      'Emphysema',
      'Eczema',
      'Psoriasis',
      'Dermatitis',
      'Acne',
      'Rashes',
      'Hives',
      'Scar Therapy',
      'Facial Rejuvination'
    ]
  },
  {
    title: 'Pediatric Specialty Care',
    conditions: [
      'Autism',
      'ADHD',
      'Anxiety & Depression',
      'Sensory Processing Disorder',
      'Pediatric Sleep Disorders',
      'Other Behavioral Disorders',
      'Frequent Ear Infections',
      'Recurrent Illness',
      'Juvenile Rheumatoid Arthritis',
      'Acid Reflux',
      'Pediatric Digestive Disorders',
      'Food Allergy Management',
      'Bedwetting',
      'Night Terrors'
    ]
  },
  {
    title: 'Geriatric Specialty Care',
    conditions: [
      'High Blood Pressure',
      'Diabetes',
      'High Cholesterol',
      'Post-Stroke Rehabilitation',
      'Heart Disease',
      'Incontinence',
      'Prostate Health',
      'Dementia',
      'Alzheimer\'s',
      'Arthritis',
      'Edema',
      'Hemorrhoids'
    ]
  }
];

export default function ConditionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#F8F6EF] md:pt-12">
        <div className="section-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#250303] mb-4 font-['Rufina']">
              Conditions Treated
            </h1>
            <p className="text-xl text-[#250303]/80 max-w-3xl mx-auto">
              We provide comprehensive care for a wide range of health conditions using acupuncture and herbal medicine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {conditionsData.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#250303]/10"
              >
                <h3 className="text-xl font-bold text-[#250303] font-['Rufina'] text-center mb-6">
                  {category.title}
                </h3>
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
