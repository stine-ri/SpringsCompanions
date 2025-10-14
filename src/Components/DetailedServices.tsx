import React, { useState, useEffect } from 'react';
import { ChevronRight, Heart, Users, Clock, Brain, Activity, Pill, Shield, Plus } from 'lucide-react';

import Navbar from './Navbar';
import Footer from './Footer';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('companionship');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && services.find(s => s.id === hash)) {
      setActiveService(hash);
      setTimeout(() => {
        const contentArea = document.getElementById('service-content');
        if (contentArea) {
          contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const services = [
    {
      id: 'companionship',
      title: 'Companionship and Emotional Support',
      icon: Users,
      description: 'Social connection and engagement are essential for seniors\' mental, emotional, and physical health. Our caregivers provide meaningful companionship to reduce feelings of stress, loneliness, and depression, while encouraging cognitive stimulation and overall well-being. Caregivers tailor activities to each individual\'s preferences and needs, helping seniors feel valued, engaged, and connected.',
      image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg',
      details: [
        'Engaging in conversation and sharing stories',
        'Playing games, puzzles, and memory-boosting activities',
        'Supporting hobbies, interests, and creative projects',
        'Preparing light meals and sharing mealtimes together',
        'Going for walks or spending time outdoors',
        'Reading books, newspapers, or magazines aloud',
        'Attending social events and group activities'
      ]
    },
    {
      id: 'personal-care',
      title: 'Personal Care Services',
      icon: Heart,
      description: 'Our caregivers assist seniors with daily personal care tasks to ensure they maintain dignity, comfort, and independence in their own homes. Care is tailored to each individual\'s needs, providing support while respecting their privacy and preferences.',
      image: 'https://images.pexels.com/photos/7551677/pexels-photo-7551677.jpeg',
      details: [
        'Bathing, showering, and general hygiene',
        'Dressing and grooming assistance',
        'Oral care and skincare support',
        'Toileting and incontinence care',
        'Mobility and transfer assistance',
        'Help with exercises and range-of-motion activities',
        'Meal preparation and feeding assistance',
        'Applying moisturizers and skin care routines'
      ]
    },
    {
      id: 'respite-care',
      title: 'Respite Care',
      icon: Clock,
      description: 'Caring for a loved one can be rewarding, but it can also be physically and emotionally exhausting. Respite care provides family caregivers with temporary relief, allowing them to rest, recharge, and maintain balance in their own lives. Our caregivers step in to provide compassionate, reliable support, ensuring your loved one continues to receive excellent care.',
      image: 'https://images.pexels.com/photos/7551683/pexels-photo-7551683.jpeg',
      details: [
        'Short-term or scheduled in-home care',
        'Assistance with personal care, grooming, and hygiene',
        'Meal preparation and feeding support',
        'Companionship and engagement in meaningful activities',
        'Light housekeeping and errands',
        'Support for seniors with dementia, Alzheimer\'s, physical limitations, or chronic illnesses',
        'Around-the-clock care if needed for extended periods'
      ]
    },
    {
      id: 'dementia-care',
      title: 'Dementia Care Support',
      icon: Brain,
      description: 'Caring for someone with memory loss requires understanding, patience, and specialized attention. Early stages may involve gentle reminders for daily tasks, personal hygiene, or medication. As dementia progresses, clients may need more hands-on support, and behavioral changes can be challenging for family members to manage. Our experienced caregivers provide compassionate care tailored to each individual, combining personal care, homemaking, and companionship with specialized support.',
      image: 'https://images.pexels.com/photos/7345452/pexels-photo-7345452.jpeg',
      details: [
        'Reintroducing themselves at each visit to provide comfort and familiarity',
        'Preparing meals that are easy to manage for those with utensil or swallowing difficulties',
        'Engaging clients in cognitive activities to stimulate memory and focus',
        'Communicating in a way that respects their current perception of reality',
        'Encouraging reminiscence and helping them celebrate meaningful life experiences'
      ]
    },
    {
      id: 'post-surgery',
      title: 'Post-Surgery Care Support',
      icon: Activity,
      description: 'Recovering at home after surgery can be challenging, requiring careful attention and assistance to ensure safety and a smooth recovery. Our caregivers provide compassionate support to help seniors regain strength and independence while reducing stress on family members. In addition to personal care, homemaking, and companionship, post-surgery care includes:',
      image: 'https://images.pexels.com/photos/18271866/pexels-photo-18271866.jpeg',
      details: [
        'Assistance with mobility and transfers to prevent falls',
        'Support with daily activities such as bathing, dressing, and grooming',
        'Meal preparation tailored to dietary needs during recovery',
        'Reminders and monitoring for medications and wound care',
        'Assistance with physical therapy exercises as recommended',
        'Emotional support and encouragement to promote confidence and well-being'
      ]
    },
    {
      id: 'alzheimers',
      title: 'Alzheimer\'s Care Support',
      icon: Brain,
      description: 'Caring for someone with Alzheimer\'s requires patience, understanding, and a gentle approach to daily routines. Our caregivers provide personalized assistance to maintain safety, comfort, and dignity. Alongside personal care, homemaking, and companionship, Alzheimer\'s care includes:',
      image: 'https://images.pexels.com/photos/7345460/pexels-photo-7345460.jpeg',
      details: [
        'Guiding daily activities and maintaining structured routines',
        'Offering memory stimulation exercises to engage cognitive function',
        'Assisting with dressing, grooming, and hygiene needs',
        'Preparing meals and helping with eating as needed',
        'Providing reassurance and emotional support during moments of confusion or agitation',
        'Ensuring a safe environment to reduce falls and accidents'
      ]
    },
    {
      id: 'parkinsons',
      title: 'Parkinson\'s Disease Care',
      icon: Activity,
      description: 'Living with Parkinson\'s disease can affect mobility, balance, and daily functioning, making everyday tasks more challenging. Our caregivers provide compassionate support that helps seniors maintain independence while ensuring safety and comfort. In addition to personal care, homemaking, and companionship, Parkinson\'s care includes:',
      image: 'https://images.pexels.com/photos/7345459/pexels-photo-7345459.jpeg',
      details: [
        'Assisting with walking, transfers, and mobility exercises to reduce the risk of falls',
        'Helping with daily activities such as dressing, grooming, and eating',
        'Providing medication reminders and monitoring adherence',
        'Offering emotional support and encouragement to reduce stress and frustration',
        'Supporting participation in physical or occupational therapy exercises'
      ]
    },
    {
      id: 'chronic-illness',
      title: 'Chronic Illness Care',
      icon: Shield,
      description: 'Managing a chronic illness at home can be challenging, requiring daily attention to medications, routines, and lifestyle adjustments. Our caregivers provide compassionate support to help seniors maintain their health and independence. In addition to personal care, homemaking, and companionship, chronic illness care includes:',
      image: 'https://images.pexels.com/photos/8949917/pexels-photo-8949917.jpeg',
      details: [
        'Medication reminders and adherence monitoring',
        'Assistance with daily activities such as bathing, dressing, and mobility',
        'Supporting dietary needs and meal preparation for specific conditions',
        'Encouraging healthy habits and routines',
        'Emotional support and companionship to reduce stress and anxiety',
        'Observing and reporting any changes in health to family or medical providers'
      ]
    },
    {
      id: 'medication-management',
      title: 'Medication Management',
      icon: Pill,
      description: 'Ensuring medications are taken correctly and on time is crucial for maintaining health and preventing complications. Our caregivers provide reliable support to help seniors stay on track with their prescribed treatments.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800',
      details: [
        'Organizing and scheduling medications',
        'Providing timely reminders for each dose',
        'Monitoring adherence and reporting any issues to family or healthcare providers',
        'Coordinating with doctors and pharmacies as needed',
        'Offering guidance on safe medication storage and handling'
      ]
    },
    {
      id: 'mobility-fall-risk',
      title: 'Mobility & Fall Risk Care',
      icon: Activity,
      description: 'Maintaining safety and mobility at home is essential for seniors who may be at risk of falls or have difficulty moving independently. Our caregivers provide attentive support to reduce accidents while promoting confidence and independence.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800',
      details: [
        'Supervision and assistance during walking, transfers, and daily activities',
        'Fall risk assessment and home safety modifications',
        'Guided exercises to improve balance, strength, and flexibility',
        'Support with mobility aids such as walkers, canes, or wheelchairs',
        'Encouragement and coaching to maintain safe movement throughout the home'
      ]
    },
    {
      id: 'additional-services',
      title: 'Additional Services',
      icon: Plus,
      description: 'We offer a wide range of additional services to support seniors in maintaining their independence and quality of life at home.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800',
      details: [
        'Recreational activities like games, hobbies, cognitive stimulation',
        'Transportation services like doctor appointments, errands, social outings',
        'Escort to Church or other community events',
        'Taking out trash',
        'Checking mail',
        'Checking for expired foods',
        'Seasonal tasks like changing linens, preparing home for winter/summer',
        'Technology assistance like help with phones, tablets, video calls with family',
        'Pet care like feeding, walking, and grooming pets',
        'Plant care like watering, pruning, general upkeep',
        'Cleaning refrigerator'
      ]
    },
    {
      id: 'around-clock',
      title: 'Around-the-Clock Care',
      icon: Clock,
      description: 'When your loved one needs continuous support, Springs Companions offers flexible options for care around-the-clock, providing peace of mind for both clients and their families. Our Care Professionals ensure safety, comfort, and companionship at all hours.',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800',
      details: [
        'Live-In Care: Caregiver resides in your loved one\'s home with a private bedroom',
        'Overnight Care: Support during nighttime hours with toileting and medication reminders',
        '24-Hour Care: Continuous care with team of Caregivers working in shifts',
        'Morning meal preparation and personal care to start the day',
        'Continuous supervision and assistance with daily activities',
        'Detailed care notes and coordination with healthcare providers',
        'Extra supervision to prevent falls during the night'
      ]
    }
  ];

  const currentService = services.find(s => s.id === activeService) || services[0];
  const Icon = currentService.icon;

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
    setIsMobileMenuOpen(false);
    window.history.pushState(null, '', `#${serviceId}`);
    
    const contentArea = document.getElementById('service-content');
    if (contentArea) {
      contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <Navbar />
      
      <div className="pt-[104px] sm:pt-[116px]">
        
        {/* Hero Section with Video Background and Animated Text */}
        <section className="relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[800px] overflow-hidden">
          {/* Video Background */}
         <video
  autoPlay
  loop
  muted
  playsInline
  poster="/serviceHelping.png"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/helping.mp4" type="video/mp4" />
  <img 
    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600" 
    alt="Senior care" 
    className="w-full h-full object-cover"
  />
</video>
          
          {/* Gradient Overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          
          {/* Animated Text - Coming Together */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="relative">
                {/* "Care" - Slides from left and rotates */}
                <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl animate-slideRotateLeft opacity-0">
                  Care
                </span>
                {' '}
                {/* "Services" - Slides from right and rotates */}
                <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl animate-slideRotateRight opacity-0">
                  Services
                </span>
              </div>
              {/* Expanding line with pulse effect */}
              <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
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
              width: 12rem;
              opacity: 1;
            }
            85% {
              width: 11rem;
            }
            100% {
              width: 12rem;
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
                width: 16rem;
                opacity: 1;
              }
              85% {
                width: 15rem;
              }
              100% {
                width: 16rem;
                opacity: 1;
                box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
              }
            }
          }

          @media (min-width: 1024px) {
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
        <section className="bg-white py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-6 sm:mb-8">
              Springs Companions provides compassionate and affordable in-home senior care, elderly care, and assisted living support. We are dedicated to providing <span className="font-bold">peace of mind for you and your family</span>. Our caregivers help seniors maintain independence while living in the comfort of their own homes.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              We understand that inviting a caregiver into your home is a big decision. That's why Springs Companions works closely with you to understand your needs and provide caregivers best suited to your individual situation. Once care begins, we continually assess your needs to ensure satisfaction. Communication and compatibility matter to us — we aim to build relationships based on trust, respect, and personalized attention.
            </p>
          </div>
        </section>

        {/* Main Content Section with Sidebar */}
        <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="flex flex-col lg:flex-row gap-0">
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden mx-4 sm:mx-6 mb-4 sm:mb-6 bg-white p-4 sm:p-5 rounded-xl shadow-lg flex items-center justify-between text-teal-700 font-bold text-base sm:text-lg border-2 border-teal-200 hover:bg-teal-50 transition-all"
            >
              <span>Our Services</span>
              <ChevronRight className={`transform transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} size={20} />
            </button>

            {/* Sidebar - Full Height, Edge to Edge on Desktop */}
            <aside className={`lg:block ${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:w-[350px] xl:w-[400px] lg:min-h-screen bg-white lg:shadow-2xl`}>
              <div className="lg:sticky lg:top-[116px] p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-7 pb-3 sm:pb-4 border-b-4 border-teal-600">
                  Our Services
                </h3>
                <nav className="space-y-2 sm:space-y-2.5">
                  {services.map((service) => {
                    const ServiceIcon = service.icon;
                    const isActive = activeService === service.id;
                    return (
                      <button
                        key={service.id}
                        onClick={() => handleServiceClick(service.id)}
                        className={`w-full text-left px-4 sm:px-5 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center gap-3 sm:gap-3.5 ${
                          isActive
                            ? 'bg-teal-600 text-white shadow-xl scale-105'
                            : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md'
                        }`}
                      >
                        <ServiceIcon size={20} className="flex-shrink-0 sm:w-5 sm:h-5" />
                        <span className="font-semibold text-sm sm:text-base leading-snug">
                          {service.title}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main id="service-content" className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="max-w-6xl">
                
                {/* Service Image */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-2xl sm:rounded-3xl mb-8 sm:mb-10 shadow-2xl">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                      <div className="bg-white/95 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl shadow-lg">
                        <Icon size={24} className="text-teal-600 sm:w-6 sm:h-6" />
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-2xl leading-tight">
                        {currentService.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10 md:mb-12">
                  {currentService.description}
                </p>

                {/* Service Details */}
                <div className="mb-8 sm:mb-10 md:mb-12">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-teal-600 rounded-full"></div>
                    Services Include:
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {currentService.details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-200 border-l-4 border-teal-600"
                      >
                        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-teal-600 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl shadow-2xl text-white">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                    Ready to Get Started?
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed text-teal-50">
                    Contact us today for a free consultation and discover how we can support your loved one.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 sm:gap-3 bg-white text-teal-700 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full hover:bg-teal-50 transition-all font-bold text-sm sm:text-base shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                  >
                    Get Free Consultation
                    <ChevronRight size={18} className="sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </main>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              Don't See a Service You Need?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 text-teal-50 leading-relaxed">
              At Springs Companions, your loved one's needs come first. If there's a type of care you're looking for that isn't listed, we're happy to create a personalized solution.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 bg-white text-teal-700 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full hover:bg-teal-50 transition-all font-bold text-sm sm:text-base shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Contact Us Today
              <ChevronRight size={18} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </section>
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Services;