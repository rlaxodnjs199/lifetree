'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircleIcon, XCircleIcon } from '@phosphor-icons/react';

const acceptedInsurance = [
  'Aetna',
  'Blue Cross Blue Shield',
  'Cigna',
  'HealthPartners',
  'Medica',
  'Preferred One',
  'UCare',
  'UMR',
  'United HealthCare',
  'Veteran\'s Affairs Community Care Network',
  'Medical Assistance Programs',
  'Auto Insurance',
  'Work Comp'
];

export default function InsurancePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#F8F6EF] md:pt-12">
        <div className="section-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#250303] mb-4 font-['Rufina']">
              Insurance & Payment
            </h1>
            <p className="text-xl text-[#250303]/80 max-w-3xl mx-auto">
              We work with most major insurance providers to make your care accessible and affordable.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Insurance Coverage Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#250303]/10">
              <h2 className="text-3xl font-bold text-[#250303] mb-6 font-['Rufina']">
                Insurance Coverage for Acupuncture
              </h2>
              <div className="space-y-4 text-lg text-[#250303]/80 leading-relaxed">
                <p>
                  Many insurances will cover acupuncture; however, specific plans vary. We recommend checking
                  your plan's acupuncture benefits in advance of your appointment. Some plans have limitations
                  on the conditions treated and number of treatments allowed. You may have a copay, co-insurance
                  and/or deductible.

                  Understanding your benefits in advance will help prevent unexpected costs.

                  If your insurance does not cover acupuncture, you might have out-of-network benefits.
                  Please check with your insurance provider for details.
                </p>
              </div>
            </div>
            
            {/* Accepted Insurance Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#250303]/10">
              <h2 className="text-3xl font-bold text-[#250303] mb-6 font-['Rufina']">
                We Accept the Following Insurance
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {acceptedInsurance.map((insurance, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" className="text-[#4B4D39] flex-shrink-0" />
                    <span className="text-lg text-[#250303]">{insurance}</span>
                  </div>
                ))}
              </div>

              {/* Medicare Note */}
              <div className="bg-[#F8F6EF] rounded-xl p-6 border-l-4 border-[#250303]">
                <div className="flex items-start gap-3 mb-4">
                  <XCircleIcon size={24} weight="fill" className="text-[#250303] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#250303] text-lg mb-2">We DO NOT accept Medicare.</p>
                    <p className="text-[#250303]/80 leading-relaxed">
                      While we don't accept Medicare, we do offer self-pay discounts for patients 65 and older.
                      We also offer discounts for children under 18, and military. Please ask for more details.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-8 pt-6 border-t border-[#250303]/10">
                <p className="text-lg text-[#250303]/80">
                  We accept <span className="font-semibold text-[#250303]">HSA and FSA cards</span> for payment in addition to cash, check, debit and credit cards.
                </p>
              </div>
            </div>

            {/* Cancellation Policy Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#250303]/10">
              <h2 className="text-3xl font-bold text-[#250303] mb-6 font-['Rufina']">
                Cancellation Policy
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#4B4D39] mt-2.5 flex-shrink-0" />
                  <p className="text-lg text-[#250303]/80 leading-relaxed">
                    <span className="font-semibold text-[#250303]">24 hours' notice is required</span> for
                    cancelling or rescheduling an appointment to avoid charges.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#4B4D39] mt-2.5 flex-shrink-0" />
                  <p className="text-lg text-[#250303]/80 leading-relaxed">
                    After 3 no-show appointments, we may refer you to another clinic.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#4B4D39] mt-2.5 flex-shrink-0" />
                  <p className="text-lg text-[#250303]/80 leading-relaxed">
                    We understand unexpected things such as illness and emergencies happen. Please contact
                    us prior to your appointment if you cannot make it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
