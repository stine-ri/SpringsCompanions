import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  // Add Video Schema Markup for SEO
  useEffect(() => {
    const videoSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Compassionate Senior Care at Home - Springs Companions",
      "description": "Experience compassionate in-home senior care services. Our caregivers provide dignity, comfort, and professional support for elderly loved ones in their own homes.",
      "thumbnailUrl": "https://www.springscompanions.com/heroImage.png",
      "uploadDate": "2024-01-15T08:00:00+08:00",
      "contentUrl": "https://www.springscompanions.com/videos/7522219-uhd_3840_2160_25fps.mp4",
      "embedUrl": "https://www.springscompanions.com",
      "duration": "PT30S",
      "publisher": {
        "@type": "Organization",
        "name": "Springs Companions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.springscompanions.com/logo.png"
        }
      }
    };

    // Remove existing video schema if any
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(videoSchema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
      itemScope
      itemType="https://schema.org/VideoObject"
    >
      {/* Video Background with Schema Markup */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/heroImage.png"
          className="w-full h-full object-cover"
          itemProp="video"
          title="Compassionate Senior Care Services - Springs Companions"
          aria-label="Background video showing compassionate senior care services"
        >
          <source src="/videos/7522219-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          <source src="/videos/hero-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Hidden metadata for Google */}
        <meta itemProp="name" content="Compassionate Senior Care at Home - Springs Companions" />
        <meta itemProp="description" content="Experience compassionate in-home senior care services. Our caregivers provide dignity, comfort, and professional support for elderly loved ones in their own homes." />
        <meta itemProp="thumbnailUrl" content="https://www.springscompanions.com/heroImage.png" />
        <meta itemProp="uploadDate" content="2024-01-15T08:00:00+08:00" />
        <meta itemProp="contentUrl" content="https://www.springscompanions.com/videos/7522219-uhd_3840_2160_25fps.mp4" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-10 mb-20 lg:mb-32">
        {/* New Welcome Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-teal-300">
          Welcome to Springs Companions
        </h2>
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
          Compassionate Care for Your Loved Ones, Right at Home
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 lg:mb-12 text-gray-200 max-w-4xl mx-auto font-semibold">
          Every Senior Deserves Dignity and Comfort
        </p>

        {/* Video Description for SEO */}
        <div className="max-w-3xl mx-auto mb-8 lg:mb-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <p className="text-base sm:text-lg text-white/90 leading-relaxed">
            <strong>Watch:</strong> Discover how Springs Companions provides compassionate, professional in-home care 
            that helps seniors maintain independence while receiving the support they need in the comfort of their own homes.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-stretch">
          <a 
            href="/contact" 
            className="bg-teal-600 text-white px-8 sm:px-10 py-5 rounded-full hover:bg-teal-700 transition text-base sm:text-lg font-semibold shadow-2xl inline-flex items-center justify-center gap-2 min-w-fit transform hover:-translate-y-1 duration-300"
          >
            Schedule a Free Consultation
            <ChevronRight className="w-5 h-5" />
          </a>
          <a 
            href="/services" 
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 sm:px-10 py-5 rounded-full hover:bg-white/20 transition text-base sm:text-lg font-semibold inline-flex items-center justify-center gap-2 min-w-fit transform hover:-translate-y-1 duration-300"
          >
            Learn About Our Services
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
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