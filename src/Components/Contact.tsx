import React, { useState } from 'react';
import { Phone, Mail, ChevronRight, MessageCircle, Image as ImageIcon, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  
  const phoneNumber = "8174496668";
  const email = "info@springcompanions.us";
  const whatsappNumber = "18174496668"; // Format: country code + number
  
  const handleScheduleClick = () => {
    setShowContactModal(true);
  };
  
  const handleEmailContact = () => {
    window.location.href = `mailto:${email}?subject=Free Consultation Request&body=Hello Springs Companions,%0D%0A%0D%0AI would like to schedule a free consultation.%0D%0A%0D%0AName:%0D%0APhone:%0D%0APreferred Date/Time:%0D%0AAdditional Notes:`;
    setShowContactModal(false);
  };
  
  const handlePhoneContact = () => {
    window.location.href = `tel:${phoneNumber}`;
    setShowContactModal(false);
  };
  
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hello Springs Companions, I would like to schedule a free consultation.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setShowContactModal(false);
  };
  
  const handleSMSContact = () => {
    const message = encodeURIComponent("Hello Springs Companions, I would like to schedule a free consultation.");
    window.location.href = `sms:${phoneNumber}?body=${message}`;
    setShowContactModal(false);
  };

  return (
    <>
      <section id="contact" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-teal-500 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10 xl:mb-12 text-teal-300 leading-tight">
            Contact Us
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 lg:mb-6 xl:mb-8 leading-relaxed sm:leading-tight">
            Ready to Learn How We Can<br className="hidden xs:block" />
            Support Your Loved One?
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl xl:text-3xl mb-8 sm:mb-10 lg:mb-12 xl:mb-16 text-gray-300 leading-relaxed sm:leading-loose">
            Your loved one deserves the best care. Let us provide it.
          </p>
          
          {/* Contact Methods */}
          <div className="flex flex-col xs:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-10 lg:mb-12 xl:mb-16 flex-wrap">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg lg:text-xl xl:text-3xl hover:text-teal-300 transition-all group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-teal-700 transition-all shadow-lg flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
              </div>
              <span className="font-semibold whitespace-nowrap">(817) 449-6668</span>
            </a>
            
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg lg:text-xl xl:text-3xl hover:text-teal-300 transition-all group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-teal-700 transition-all shadow-lg flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
              </div>
              <span className="font-semibold break-all xs:break-normal text-sm sm:text-base">info@springcompanions.us</span>
            </a>
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={handleScheduleClick}
            className="bg-teal-600 text-white px-6 sm:px-8 lg:px-10 xl:px-14 py-3 sm:py-4 lg:py-5 xl:py-7 rounded-full hover:bg-teal-700 transition-all inline-flex items-center gap-2 sm:gap-3 font-bold text-base sm:text-lg lg:text-xl xl:text-3xl shadow-xl hover:shadow-teal-500/50 transform hover:-translate-y-1 duration-300"
          >
            Schedule Your Free Consultation Today
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
          </button>
        </div>
      </section>

      {/* Contact Method Selection Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full p-4 sm:p-6 lg:p-8 xl:p-12 relative animate-fadeIn mx-2">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </button>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-center leading-tight">
              Choose Your Preferred Contact Method
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-2xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 text-center leading-relaxed">
              Select how you'd like to reach us
            </p>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {/* Email Option */}
              <button
                onClick={handleEmailContact}
                className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 xl:p-8 bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-xl sm:rounded-2xl hover:border-teal-500 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-teal-700 transition-all shadow-lg">
                  <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
                </div>
                <div className="text-center">
                  <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Email Us</h4>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-xl text-gray-600 leading-tight">Send an email with your details</p>
                </div>
              </button>

              {/* Phone Call Option */}
              <button
                onClick={handlePhoneContact}
                className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 xl:p-8 bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-xl sm:rounded-2xl hover:border-teal-500 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-teal-700 transition-all shadow-lg">
                  <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
                </div>
                <div className="text-center">
                  <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Call Us</h4>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-xl text-gray-600 leading-tight">Speak with us directly</p>
                </div>
              </button>

              {/* WhatsApp Option */}
              <button
                onClick={handleWhatsAppContact}
                className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 xl:p-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl sm:rounded-2xl hover:border-green-500 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-all shadow-lg">
                  <MessageCircle className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
                </div>
                <div className="text-center">
                  <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">WhatsApp</h4>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-xl text-gray-600 leading-tight">Message us with images</p>
                </div>
              </button>

              {/* SMS Option */}
              <button
                onClick={handleSMSContact}
                className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 xl:p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl sm:rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-all shadow-lg">
                  <ImageIcon className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
                </div>
                <div className="text-center">
                  <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Text/SMS</h4>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-xl text-gray-600 leading-tight">Send us a text message</p>
                </div>
              </button>
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-10 p-3 sm:p-4 lg:p-6 bg-teal-50 rounded-lg sm:rounded-xl border border-teal-200">
              <p className="text-xs sm:text-sm lg:text-base xl:text-xl text-gray-700 text-center leading-relaxed">
                <strong>Pro Tip:</strong> Use WhatsApp or your phone's messaging app to easily send images or documents along with your inquiry!
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Contact;