import React, { useState, useEffect } from 'react';
import { Heart, Target, Shield, Users, Brain, Award, Lightbulb, MapPin, ChevronRight, Star } from 'lucide-react';

import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about-us');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sections.find(s => s.id === hash)) {
      setActiveSection(hash);
      setTimeout(() => {
        const isMobile = window.innerWidth < 1024;
        if (isMobile) {
          const contentArea = document.getElementById('section-content');
          if (contentArea) {
            contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    }
  }, []);

  const sections = [
    { id: 'about-us', title: 'About Springs Companions', icon: Heart },
    { id: 'our-story', title: 'Our Story', icon: Lightbulb },
    { id: 'vision-mission', title: 'Vision & Mission', icon: Target },
    { id: 'objectives', title: 'Our Objectives', icon: Award },
    { id: 'values', title: 'Our Values', icon: Shield },
    { id: 'commitment', title: 'Caregiver Commitment', icon: Users },
    { id: 'local-impact', title: 'Local Impact', icon: MapPin },
    { id: 'why-choose', title: 'Why Choose Us', icon: Brain },
    { id: 'testimonials', title: 'Testimonials', icon: Star }
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    window.history.pushState(null, '', `#${sectionId}`);
    
    // Scroll to content on mobile
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      const contentArea = document.getElementById('section-content');
      if (contentArea) {
        contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const objectives = [
    { icon: Shield, text: "Ensure safety, dignity, and comfort for every client" },
    { icon: Users, text: "Offer flexible, personalized care solutions" },
    { icon: Heart, text: "Support families with respite care and emotional relief" },
    { icon: Brain, text: "Promote social engagement, cognitive well-being, and companionship" },
    { icon: Award, text: "Provide specialized care for Alzheimer's, dementia, and post-surgery recovery" }
  ];

  const values = [
    { title: "Compassion", description: "Treating every client with empathy and respect" },
    { title: "Integrity", description: "Honest, reliable care in all aspects of service" },
    { title: "Respect", description: "Honoring the dignity and individuality of every senior" },
    { title: "Excellence", description: "Continuous improvement to provide the highest quality care" }
  ];

  const testimonials = [
    {
      name: "Margaret Thompson",
      location: "Dallas, TX",
      text: "Springs Companions gave us peace of mind when we needed it most. The caregiver they assigned to my mother was patient, kind, and truly cared about her well-being.",
      rating: 5
    },
    {
      name: "Robert Chen",
      location: "Houston, TX",
      text: "After my father's surgery, we were overwhelmed. Springs Companions stepped in with professional care that helped him recover at home comfortably.",
      rating: 5
    },
    {
      name: "Linda Martinez",
      location: "Austin, TX",
      text: "My grandmother has Alzheimer's, and finding the right care was challenging. Springs Companions provided a caregiver who understands her needs and makes her smile every day.",
      rating: 5
    }
  ];

  const cities = ["Arlington", "Dallas", "Houston", "San Antonio", "Austin", "Fort Worth"];

  // Video structured data
  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "About Springs Companions - Compassionate Senior Care",
    "description": "Learn about Springs Companions and our mission to provide compassionate, professional in-home senior care across Texas. Discover our story, values, and commitment to helping seniors age gracefully at home.",
    "thumbnailUrl": "https://www.springscompanions.com/aboutImage.png",
    "uploadDate": "2024-10-01",
    "duration": "PT45S",
    "contentUrl": "https://www.springscompanions.com/videos/about-video.mp4",
    "embedUrl": "https://www.springscompanions.com/about#hero-video",
    "publisher": {
      "@type": "Organization",
      "name": "Springs Companions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.springscompanions.com/logo.png"
      }
    },
    "inLanguage": "en-US"
  };

  const renderSectionContent = () => {
    switch(activeSection) {
      case 'about-us':
        return (
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              About Springs Companions
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              <p>
                Springs Companions offers compassionate in-home senior care for those who wish to age gracefully and comfortably in the place they love most — their own homes. With a strong foundation built on integrity, respect, and empathy, we focus on building meaningful connections with every senior and family we serve.
              </p>
              <p>
                Our promise is simple: to provide safety, comfort, and peace of mind, so families can feel confident their loved ones are in caring hands.
              </p>
              <p>
                Springs Companions is dedicated to excellence in non-medical home care. We believe that caregivers are at the heart of everything we do, and our commitment is to support them so they can give the highest level of care.
              </p>
              <p>
                Though our roots are here in Texas, our vision reaches far beyond. We are deeply connected to the communities we serve. What makes us special is not just the care we provide, but the relationships we build — treating every client like family and every home like our own.
              </p>
            </div>
          </div>
        );

      case 'our-story':
        return (
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Our Story — Inspired by Compassion
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              <p>
                Springs Companions was founded out of a simple yet powerful realization: too many seniors face life's later years without the support they deserve. Our founder, moved by personal experiences witnessing the struggles of elderly neighbors and family members, felt a calling to create something different — a care service that goes beyond tasks and truly values the person behind them.
              </p>
              <div className="bg-teal-50 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl border-l-4 border-teal-600 shadow-lg my-6 sm:my-8">
                <p className="italic text-gray-800 text-base sm:text-lg lg:text-xl">
                  "I saw how isolation, memory loss, and physical limitations made life harder for seniors, and how families often felt overwhelmed trying to provide care on their own. I knew something had to change. That's when Springs Companions was born — not just as a service, but as a mission to bring dignity, comfort, and joy to every senior we touch."
                </p>
              </div>
              <p>
                This vision continues to guide us every day. Springs Companions stands as a promise to families: you don't have to do this alone. We are here to walk with you, to provide compassionate support, and to ensure your loved one's golden years are filled with peace, care, and connection.
              </p>
            </div>
          </div>
        );

      case 'vision-mission':
        return (
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
              Vision & Mission
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl shadow-xl border-2 border-teal-100">
                <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb size={24} className="text-white sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                  "To create a safe, compassionate, and empowering environment where seniors can live with dignity, independence, and joy in the comfort of their own homes."
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl shadow-xl border-2 border-teal-100">
                <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target size={24} className="text-white sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                  "To deliver personalized, professional, and reliable in-home care that enhances the safety, comfort, and overall well-being of seniors while supporting their families."
                </p>
              </div>
            </div>
          </div>
        );

      case 'objectives':
        return (
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
              Our Objectives
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {objectives.map((objective, index) => {
                const Icon = objective.icon;
                return (
                  <div key={index} className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all border-l-4 border-teal-600">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-teal-700 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">{objective.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'values':
        return (
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-xl border-2 border-teal-100 hover:shadow-2xl transition-all">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Heart size={24} className="text-white sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">{value.title}</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'commitment':
        return (
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Our Commitment to Caregivers
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-12">
              We recognize that caregivers are the backbone of quality home care.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-teal-50 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg border-2 border-teal-200">
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 leading-relaxed text-center">Ongoing training and skill development</p>
              </div>
              <div className="bg-teal-50 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg border-2 border-teal-200">
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 leading-relaxed text-center">Recognition and appreciation of our care professionals</p>
              </div>
              <div className="bg-teal-50 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg border-2 border-teal-200 sm:col-span-2 lg:col-span-1">
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 leading-relaxed text-center">Resources to deliver the best care to seniors</p>
              </div>
            </div>
          </div>
        );

      case 'local-impact':
        return (
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Our Local Impact
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-12">
              Springs Companions is proud to serve families across Texas with professional expertise and deep community connections.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 bg-gradient-to-br from-teal-50 to-white px-5 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-xl lg:rounded-2xl border-2 border-teal-200 shadow-lg hover:shadow-xl transition-all">
                  <MapPin size={20} className="text-teal-700 flex-shrink-0 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  <span className="font-bold text-gray-700 text-base sm:text-lg lg:text-xl">{city}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'why-choose':
        return (
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
              Why Choose Springs Companions
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {[
                "Experienced, compassionate, and trained caregivers",
                "Specialized care for Alzheimer's, dementia, chronic illness, and post-surgery recovery",
                "Flexible scheduling tailored to family needs",
                "Commitment to safety, dignity, and peace of mind",
                "Services across multiple Texas cities"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all border-l-4 border-teal-600">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight size={14} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-12 p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl lg:rounded-3xl shadow-2xl text-white">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5">
                Ready to Get Started?
              </h4>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed text-teal-50">
                Contact us today for a free consultation and discover how we can support your loved one.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 sm:gap-4 bg-white text-teal-700 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-7 rounded-full hover:bg-teal-50 transition-all font-bold text-base sm:text-lg lg:text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                Schedule Free Consultation
                <ChevronRight size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </a>
            </div>
          </div>
        );

      case 'testimonials':
        return (
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              What Families Say About Us
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed">
              Real experiences from real families we've had the honor to serve
            </p>
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl shadow-xl border-2 border-teal-100">
                  <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t-2 border-teal-200 pt-4 sm:pt-6">
                    <p className="font-bold text-gray-900 text-lg sm:text-xl lg:text-2xl">{testimonial.name}</p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* JSON-LD Structured Data for Video SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
      />
      
      <div className="pt-[104px] sm:pt-[116px]">
        
        {/* Hero Section with Video Background - Enhanced for SEO */}
        <section 
          id="hero-video"
          className="relative h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden"
          itemScope 
          itemType="https://schema.org/VideoObject"
        >
          {/* Schema.org microdata for video */}
          <meta itemProp="name" content="About Springs Companions - Compassionate Senior Care" />
          <meta itemProp="description" content="Learn about Springs Companions and our mission to provide compassionate, professional in-home senior care across Texas. Discover our story, values, and commitment to helping seniors age gracefully at home." />
          <meta itemProp="thumbnailUrl" content="https://www.springscompanions.com/aboutImage.png" />
          <meta itemProp="uploadDate" content="2024-10-01" />
          <meta itemProp="duration" content="PT45S" />
          <meta itemProp="contentUrl" content="https://www.springscompanions.com/videos/about-video.mp4" />
          <meta itemProp="embedUrl" content="https://www.springscompanions.com/about#hero-video" />
          
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/aboutImage.png" 
            className="absolute inset-0 w-full h-full object-cover"
            itemProp="video"
            title="About Springs Companions - Compassionate Senior Care Services"
            aria-label="Background video showcasing Springs Companions senior care services and compassionate caregiving in Texas"
          >
            <source src="/videos/about video.mp4" type="video/mp4" />
            <img 
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600" 
              alt="Senior care services by Springs Companions" 
              className="w-full h-full object-cover"
            />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4 sm:px-6 lg:px-12">
              <div className="relative">
                <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white drop-shadow-2xl animate-slideRotateLeft opacity-0">
                  About
                </span>
                {' '}
                <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white drop-shadow-2xl animate-slideRotateRight opacity-0">
                  Us
                </span>
              </div>
              <div className="mt-6 sm:mt-8 lg:mt-10 flex justify-center">
                <div className="h-1.5 sm:h-2 w-0 bg-gradient-to-r from-teal-400 via-white to-teal-400 rounded-full animate-expandPulse shadow-lg"></div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes slideRotateLeft {
            0% {
              opacity: 0;
              transform: translateX(-200px) rotate(-45deg) scale(0.5);
            }
            60% {
              transform: translateX(10px) rotate(5deg) scale(1.1);
            }
            100% {
              opacity: 1;
              transform: translateX(0) rotate(0deg) scale(1);
            }
          }

          @keyframes slideRotateRight {
            0% {
              opacity: 0;
              transform: translateX(200px) rotate(45deg) scale(0.5);
            }
            60% {
              transform: translateX(-10px) rotate(-5deg) scale(1.1);
            }
            100% {
              opacity: 1;
              transform: translateX(0) rotate(0deg) scale(1);
            }
          }

          @keyframes expandPulse {
            0% {
              width: 0;
              opacity: 0;
            }
            50% {
              opacity: 0.8;
            }
            70% {
              width: 16rem;
              opacity: 1;
            }
            85% {
              width: 14rem;
            }
            100% {
              width: 16rem;
              opacity: 1;
              box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
            }
          }

          @media (min-width: 640px) {
            @keyframes expandPulse {
              0% {
                width: 0;
                opacity: 0;
              }
              50% {
                opacity: 0.8;
              }
              70% {
                width: 20rem;
                opacity: 1;
              }
              85% {
                width: 18rem;
              }
              100% {
                width: 20rem;
                opacity: 1;
                box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
              }
            }
          }

          .animate-slideRotateLeft {
            animation: slideRotateLeft 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s forwards;
          }

          .animate-slideRotateRight {
            animation: slideRotateRight 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.6s forwards;
          }

          .animate-expandPulse {
            animation: expandPulse 1.5s ease-out 1.5s forwards;
          }
        `}</style>

        {/* Introduction Text Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-center mb-6 sm:mb-8 lg:mb-10">
              Springs Companions provides compassionate and affordable in-home senior care, elderly care, and assisted living support. We are dedicated to providing <span className="font-bold text-teal-700">peace of mind for you and your family</span>.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
              Our caregivers help seniors maintain independence while living in the comfort of their own homes. We understand that inviting a caregiver into your home is a big decision, and we're here to support you every step of the way.
            </p>
          </div>
        </section>

        {/* Main Content Section with Sticky Sidebar */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="flex flex-col lg:flex-row gap-0">
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden mx-4 sm:mx-6 mb-4 sm:mb-6 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-between text-teal-700 font-bold text-base sm:text-xl border-2 border-teal-200 hover:bg-teal-50 transition-all"
            >
              <span>About Sections</span>
              <ChevronRight className={`transform transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} size={20} />
            </button>

            {/* Sidebar - Sticky on desktop, collapsible on mobile */}
            <aside className={`lg:block ${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:w-[320px] xl:w-[400px] bg-white lg:shadow-2xl`}>
              <div className="lg:sticky lg:top-[116px] p-4 sm:p-6 lg:p-8 xl:p-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8 pb-4 lg:pb-5 border-b-4 border-teal-600">
                  Learn About Us
                </h3>
                <nav className="space-y-2 lg:space-y-3">
                  {sections.map((section) => {
                    const SectionIcon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleSectionClick(section.id)}
                        className={`w-full text-left px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5 rounded-xl lg:rounded-2xl transition-all duration-300 flex items-center gap-3 lg:gap-4 ${
                          isActive
                            ? 'bg-teal-600 text-white shadow-xl scale-105'
                            : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md'
                        }`}
                      >
                        <SectionIcon size={20} className="flex-shrink-0 lg:w-6 lg:h-6" />
                        <span className="font-semibold text-sm sm:text-base lg:text-lg leading-snug">
                          {section.title}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 px-4 sm:px-6 lg:px-12 xl:px-20 py-6 sm:py-8 lg:py-0">
              <div id="section-content" className="max-w-6xl">
                {renderSectionContent()}
              </div>
            </main>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;