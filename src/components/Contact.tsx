'use client';

import { useState, FormEvent } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from '@phosphor-icons/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
          Schedule Your Appointment
        </h2>
        <p className="text-xl text-[var(--text-secondary)]">
          Begin your journey to better health
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div>
          {submitted && (
            <div className="mb-6 p-4 bg-[var(--bg-light-green)] border-2 border-[var(--bg-primary)] rounded-lg flex items-center gap-3">
              <CheckCircleIcon size={24} weight="fill" className="text-[var(--bg-primary)]" />
              <p className="text-[var(--text-primary)] font-medium">
                Your message has been sent! We'll get back to you within 24 hours.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:border-[var(--bg-primary)] focus:outline-none transition-colors`}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-[var(--bg-primary)] focus:outline-none transition-colors`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:border-[var(--bg-primary)] focus:outline-none transition-colors`}
                placeholder="(555) 123-4567"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:border-[var(--bg-primary)] focus:outline-none transition-colors resize-none`}
                placeholder="Tell us about your health concerns"
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Practice Information */}
        <div className="space-y-8">
          <div className="card">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              Visit Us
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPinIcon size={24} weight="fill" className="text-[var(--bg-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">Address</p>
                  <p className="text-[var(--text-secondary)]">
                    123 Wellness Way, Suite 200<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <PhoneIcon size={24} weight="fill" className="text-[var(--bg-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">Phone</p>
                  <p className="text-[var(--text-secondary)]">(415) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <EnvelopeIcon size={24} weight="fill" className="text-[var(--bg-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">Email</p>
                  <p className="text-[var(--text-secondary)]">info@lifetreeacupuncture.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ClockIcon size={24} weight="fill" className="text-[var(--bg-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">Hours</p>
                  <div className="text-[var(--text-secondary)] space-y-1">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zen Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://pixabay.com/get/ge3b1f71b77dfc46bc0dbaaced7e7b96bab917ac0f57bc2ae16177dd7f5505fc1745a86fe37ae6894d8c1c25438c5854f.jpg"
              alt="Zen stones and bamboo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
