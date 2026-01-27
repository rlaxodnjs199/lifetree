import { CheckCircleIcon } from '@phosphor-icons/react';

const providers = [
  {
    name: 'Dr. Kyu Hong Tae',
    title: 'DAOM, Dipl.Ac., L.Ac.',
    image: '/kyu.jpg',
    description: [
      "Accepts auto accidents, personal injuries, and worker's comp-related cases.",
      "Specialties include pain management (chronic and acute), mental health, and general wellness maintenance.",
      "Skilled in Juheng Acupuncture and Korean Medicine."
    ],
    credentials: [
      "Doctor and Master's degrees in Acupuncture and Oriental Medicine from American Academy of Acupuncture and Oriental Medicine (Roseville, Minnesota)",
      "Licensed by Minnesota Board of Medical Practice",
      "Nationally Board Certified by NCCAOM (National Certification Commission for Acupuncture and Oriental Medicine)",
      "Certified by Institute of Juheng Acupuncture and Moxibustion (Seoul, South Korea)"
    ]
  },
  {
    name: 'Dr. Ariel Selk',
    title: 'L.Ac., D.A.C.M., Dipl.Ac.',
    image: '/ariel.png',
    description: [
      "Dr. Ariel specializes in acupuncture for physical medicine and rehabilitation, pain management, joint pain, musculoskeletal disorders/imbalances, neuropathy, back pain, sciatica, neck pain, migraines/headaches, stress and anxiety.",
      "She also has experience and success treating a wide variety of health imbalances, including sleep disorders and digestive disorders."
    ],
    education: [
      "Doctor of Acupuncture and Chinese Medicine -Pacific College of Oriental Medicine, San Diego, California, 2020",
      "Master of Acupuncture and Oriental Medicine – World Medicine Institute, Honolulu, Hawaii, 2011",
      "Licensed Acupuncturist – Minnesota Board of Medical Practice",
      "National Board Certification in Acupuncture – NCCAOM"
    ],
    trainings: [
      "Advanced Acupuncture for Musculoskeletal Disorders",
      "Dietary Therapies and Lifestyle Modification Techniques",
      "National Acupuncture Detoxification Association (NADA) for Addiction Recovery",
      "Cosmetic Acupuncture Techniques"
    ]
  }
];

export default function Providers() {
  return (
    <section id="providers" className="bg-[#4B4D39]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FEFBF6] mb-4 font-['Rufina']">
           Our Providers
          </h2>
          <p className="text-xl text-[#FEFBF6]/90 max-w-3xl mx-auto">
            Expert practitioners specializing in traditional and modern therapies
          </p>
        </div>

        <div className="flex flex-col gap-24">
        {providers.map((provider, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Professional Photo */}
            <div className="lg:w-1/3 w-full">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl sticky top-24">
                <img
                  src={provider.image}
                  alt={`${provider.name} - Professional Acupuncturist`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Biography & Details */}
            <div className="lg:w-2/3 w-full">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-3xl font-bold text-[#FEFBF6] mb-2 mt-0">
                  {provider.name}
                </h3>
                <p className="text-xl text-[#FEFBF6]/80 font-medium mb-6">
                  {provider.title}
                </p>

                <div className="space-y-4 mb-8">
                  {provider.description.map((desc, i) => (
                    <p key={i} className="text-lg text-[#FEFBF6]/90 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
                
                {/* Credentials Section (Kyu) */}
                {provider.credentials && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-[#FEFBF6]/20">
                      <h4 className="text-xl font-bold text-[#FEFBF6] mb-6">
                        Credentials
                      </h4>
                      <ul className="space-y-4 m-0 p-0 list-none">
                        {provider.credentials.map((cred, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#FEFBF6]/90">
                            <CheckCircleIcon size={24} weight="fill" className="text-[#FEFBF6] flex-shrink-0 mt-1" />
                            <span>{cred}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                )}

                {/* Education Section (Ariel) */}
                {provider.education && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-[#FEFBF6]/20">
                      <h4 className="text-xl font-bold text-[#FEFBF6] mb-6">
                        Education & Licensure
                      </h4>
                      <ul className="space-y-4 m-0 p-0 list-none">
                        {provider.education.map((edu, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#FEFBF6]/90">
                            <CheckCircleIcon size={24} weight="fill" className="text-[#FEFBF6] flex-shrink-0 mt-1" />
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                )}
                
                {/* Advanced Trainings (Ariel) */}
                {provider.trainings && (
                    <div className="border border-[#FEFBF6]/30 rounded-xl p-8">
                       <h4 className="text-xl font-bold text-[#FEFBF6] mb-6 m-0">
                          Advanced Trainings
                        </h4>
                      <ul className="space-y-4 m-0 p-0 list-none">
                        {provider.trainings.map((train, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#FEFBF6]/90">
                            <div className="w-2 h-2 rounded-full bg-[#FEFBF6] mt-2.5 flex-shrink-0" />
                            <span>{train}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                )}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
