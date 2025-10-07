import React, { useState } from 'react';
import { Phone, Mail, ChevronRight, MessageCircle, Image as ImageIcon, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  
  const phoneNumber = "8174496668";
  const email = "info@springscompanions.com";
  const whatsappNumber = "18173746460"; // Format: country code + number
  
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-teal-300 leading-tight">
            Contact Us
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 leading-relaxed sm:leading-tight">
            Ready to Learn How We Can<br className="hidden xs:block" />
            Support Your Loved One?
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg mb-8 sm:mb-10 text-gray-300 leading-relaxed">
            Your loved one deserves the best care. Let us provide it.
          </p>
          
          {/* Contact Methods */}
          <div className="flex flex-col xs:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-10 flex-wrap">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 text-base hover:text-teal-300 transition-all group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-teal-700 transition-all shadow-lg flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-semibold whitespace-nowrap">(817) 449-6668</span>
            </a>
            
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-base hover:text-teal-300 transition-all group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-teal-700 transition-all shadow-lg flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-semibold break-all xs:break-normal text-base">info@springscompanions.com</span>
            </a>
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={handleScheduleClick}
            className="bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-teal-700 transition-all inline-flex items-center gap-2 font-semibold text-base shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1 duration-300"
          >
            Schedule Your Free Consultation Today
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </section>

      {/* Contact Method Selection Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative animate-fadeIn mx-2">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Choose Your Preferred Contact Method
            </h3>
            <p className="text-sm text-gray-600 mb-8 text-center">
              Select how you'd like to reach us
            </p>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
              {/* Email Option */}
              <button
                onClick={handleEmailContact}
                className="flex flex-col items-center gap-3 p-5 bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-xl hover:border-teal-500 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-teal-700 transition-all shadow-lg">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div className="text-center">
                  <h4 className="text-base font-bold text-gray-900 mb-2">Email Us</h4>
                  <p className="text-sm text-gray-600 leading-tight">Send an email with your details</p>
                </div>
              </button>

              {/* Phone Call Option */}
              <button
                onClick={handlePhoneContact}
                className="flex flex-col items-center gap-3 p-5 bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-xl hover:border-teal-500 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-teal-700 transition-all shadow-lg">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div className="text-center">
                  <h4 className="text-base font-bold text-gray-900 mb-2">Call Us</h4>
                  <p className="text-sm text-gray-600 leading-tight">Speak with us directly</p>
                </div>
              </button>

              {/* WhatsApp Option */}
              <button
                onClick={handleWhatsAppContact}
                className="flex flex-col items-center gap-3 p-5 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl hover:border-green-500 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-all shadow-lg">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <div className="text-center">
                  <h4 className="text-base font-bold text-gray-900 mb-2">WhatsApp</h4>
                  <p className="text-sm text-gray-600 leading-tight">Message us with images</p>
                </div>
              </button>

              {/* SMS Option */}
              <button
                onClick={handleSMSContact}
                className="flex flex-col items-center gap-3 p-5 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-all shadow-lg">
                  <ImageIcon className="text-white w-6 h-6" />
                </div>
                <div className="text-center">
                  <h4 className="text-base font-bold text-gray-900 mb-2">Text/SMS</h4>
                  <p className="text-sm text-gray-600 leading-tight">Send us a text message</p>
                </div>
              </button>
            </div>

            <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-sm text-gray-700 text-center leading-relaxed">
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