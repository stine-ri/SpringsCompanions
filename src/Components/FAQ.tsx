import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ChevronRight, Phone } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does Springs Companions provide?",
      answer: "Springs Companions offers comprehensive in-home care services including personal care assistance, companionship, medication reminders, meal preparation, light housekeeping, transportation to appointments, and specialized dementia and Alzheimer's care. We tailor our services to meet each client's unique needs."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the greater Texas area, including Arlington, Dallas, Houston, San Antonio, and Austin. If you're unsure whether we service your specific location, please contact us and we'll be happy to confirm coverage in your area."
    },
    {
      question: "Are your caregivers trained and certified?",
      answer: "Yes, all our caregivers undergo rigorous background checks, comprehensive training, and are certified in areas such as CPR, first aid, and specialized care techniques. We ensure our team is well-equipped to provide the highest quality care with compassion and professionalism."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies based on the level of care needed, frequency of visits, and specific services required. We offer flexible care plans to fit different budgets and needs. Please contact us for a free consultation where we can discuss your specific situation and provide a detailed quote."
    },
    {
      question: "Can I choose my caregiver?",
      answer: "Absolutely! We believe in creating the best match between clients and caregivers. We'll work with you to understand your preferences and needs, and introduce you to caregivers who align with your requirements. Your comfort and satisfaction are our top priorities."
    },
    {
      question: "What is the minimum number of hours for care?",
      answer: "We offer flexible scheduling to accommodate various needs. Our services can range from a few hours per week for companionship to 24/7 live-in care. During your free consultation, we'll discuss your specific requirements and create a care plan that works for you."
    },
    {
      question: "Do you accept insurance or Medicare/Medicaid?",
      answer: "We work with various payment options including long-term care insurance, veteran's benefits, and private pay. While Medicare typically doesn't cover non-medical home care, we can help you explore other funding options. Contact us to discuss your specific insurance situation."
    },
    {
      question: "How quickly can care services begin?",
      answer: "We understand that care needs can arise suddenly. In many cases, we can arrange for care to begin within 24-48 hours of your initial consultation. For immediate or emergency care needs, please call us directly and we'll do our best to accommodate you as quickly as possible."
    },
    {
      question: "What if I'm not satisfied with the caregiver?",
      answer: "Your satisfaction is paramount. If for any reason you're not completely satisfied with your caregiver, please let us know immediately. We'll work quickly to address your concerns and, if necessary, arrange for a different caregiver who better meets your needs at no additional cost."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply contact us via phone, email, WhatsApp, or text to schedule a free consultation. During this consultation, we'll assess your needs, answer all your questions, and create a personalized care plan. There's no obligation, and we're here to help guide you through every step of the process."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative text-white py-16 sm:py-20 lg:py-24 xl:py-32 mt-16 sm:mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2070" 
            alt="Healthcare support" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/95 via-gray-900/90 to-teal-800/95"></div>
        </div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-teal-400 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-400 rounded-full blur-2xl sm:blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-teal-300 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-teal-300 flex-shrink-0" />
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-center text-white drop-shadow-lg animate-fadeInDown leading-tight">
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg lg:text-xl xl:text-3xl leading-relaxed sm:leading-loose drop-shadow-md animate-fadeInUp text-teal-100">
              Find answers to common questions about our care services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-12 lg:py-16 xl:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 lg:p-8 text-left hover:bg-teal-50 transition-colors group"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 pr-3 sm:pr-4 group-hover:text-teal-700 transition leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-2 sm:ml-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-teal-600" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-gray-400 group-hover:text-teal-600 transition" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                    <div className="border-t border-gray-200 pt-4 sm:pt-6">
                      <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed sm:leading-loose">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-10 sm:mt-12 lg:mt-14 xl:mt-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 xl:p-12 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Still Have Questions?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-2xl text-teal-100 mb-6 sm:mb-8 leading-relaxed sm:leading-loose">
              We're here to help! Contact us today for personalized assistance.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:8174496668"
                className="bg-white text-teal-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all font-bold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 sm:gap-3"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                Call Us: (817) 449-6668
              </a>
              <a
                href="/contact"
                className="bg-teal-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-teal-950 transition-all font-bold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 sm:gap-3"
              >
                Contact Us
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out 0.3s backwards;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 25s ease-in-out infinite 5s;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
      `}</style>
      
      <Footer />
    </div>
  );
};

export default FAQ;