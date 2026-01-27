'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/1.jpg"
          alt="Acupuncture therapy background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white px-4">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Trust Indicators */}
          {/* <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm font-semibold">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-2xl">✓</span>
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-2xl">✓</span>
              <span>Licensed & Certified</span>
            </div>
          </div> */}

          {/* Main Headline */}
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight font-['Rufina']">
            Compassionate Care for<br />
            <span className="text-[#F9EEB0]">A Flourishing Life</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-10 font-light text-gray-200 max-w-2xl mx-auto">
            Your trusted partner in health, providing holistic healing through acupuncture, herbal medicine, and honest guidance.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
