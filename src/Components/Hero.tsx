import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/7522219-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-10 mb-20 lg:mb-32">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 lg:mb-8 leading-tight">
          Compassionate Care for Your Loved Ones, Right at Home
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 lg:mb-8 text-gray-200 max-w-4xl mx-auto font-semibold">
          Every Senior Deserves Dignity and Comfort
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 lg:mb-10 text-gray-300 max-w-6xl mx-auto leading-relaxed">
          At Springs Companions, we believe that every senior deserves to live safely, comfortably, and with dignity in their own home. Our trained caregivers provide personalized, compassionate support for seniors facing Alzheimer's, dementia, chronic illness, post-surgery recovery, and mobility challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-stretch">
          <a href="/contact" className="bg-teal-600 text-white px-8 sm:px-10 py-5 rounded-full hover:bg-teal-700 transition text-lg sm:text-xl font-semibold shadow-2xl inline-flex items-center justify-center gap-2 min-w-fit">
            Schedule a Free Consultation
            <ChevronRight className="w-5 h-5" />
          </a>
          <a href="/services" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 sm:px-10 py-5 rounded-full hover:bg-white/20 transition text-lg sm:text-xl font-semibold inline-flex items-center justify-center gap-2 min-w-fit">
            Learn About Our Services
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;