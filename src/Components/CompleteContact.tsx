import React, { useState } from 'react';
import { Phone, Mail, ChevronRight, MessageCircle, X, MapPin } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    alternatePhone: '',
    bestTime: '9:00-10:00am',
    message: '',
    howHeard: 'Search Engine'
  });
  
  const phoneNumber = "8174496668";
  const email = "info@springcompanions.us";
  const whatsappNumber = "18174496668";
  
  const areasServed = [
    { name: 'Arlington', color: 'bg-teal-500' },
    { name: 'Dallas', color: 'bg-teal-600' },
    { name: 'Houston', color: 'bg-teal-700' },
    { name: 'San Antonio', color: 'bg-teal-800' },
    { name: 'Austin', color: 'bg-teal-900' }
  ];

  const handleScheduleClick = () => {
    setShowContactModal(true);
  };

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    alternatePhone: string;
    bestTime: string;
    message: string;
    howHeard: string;
}

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
    const { name, value } = e.target;
    setFormData((prev: ContactFormData) => ({
        ...prev,
        [name]: value
    }));
};

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all required fields (Name, Email, Phone, and Message)');
      return;
    }

    // Format the message for WhatsApp
    const whatsappMessage = `
🆕 NEW INQUIRY FROM WEBSITE

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
${formData.alternatePhone ? `📞 Alternate: ${formData.alternatePhone}` : ''}
⏰ Best Time: ${formData.bestTime}
📣 How They Heard: ${formData.howHeard}

💬 Message:
${formData.message}
    `.trim();

    // Your business WhatsApp number
    const businessWhatsApp = "18174496668";
    
    // Open WhatsApp with the pre-filled message
    window.open(
      `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    );
    
    // Show confirmation
    alert('Thank you! You will be redirected to WhatsApp to send your inquiry.');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      alternatePhone: '',
      bestTime: '9:00-10:00am',
      message: '',
      howHeard: 'Search Engine'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Quote */}
      <section className="relative text-white py-24 sm:py-32 lg:py-40 mt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070" 
            alt="Caregiver with elderly person" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/95 via-gray-900/90 to-teal-800/95"></div>
        </div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-300 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center mb-10 lg:mb-14 text-white drop-shadow-lg animate-fadeInDown">
            GET IN TOUCH
          </h1>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl sm:text-2xl lg:text-4xl italic leading-relaxed font-light drop-shadow-md animate-fadeInUp">
              "Caring for those who once cared for us is one of the highest honors."
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl mt-4 text-teal-200 animate-fadeInUp">
              – Tia Walker
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-5 lg:space-y-6">
                <div>
                  <label className="block text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-lg sm:text-xl lg:text-2xl border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-lg sm:text-xl lg:text-2xl border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-lg sm:text-xl lg:text-2xl border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-2">
                    Alternate Phone
                  </label>
                  <input
                    type="tel"
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-lg sm:text-xl lg:text-2xl border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-2">
                    Best Time To Call
                  </label>
                  <select
                    name="bestTime"
                    value={formData.bestTime}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-lg sm:text-xl lg:text-2xl border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition bg-white"
                  >
                    <option>9:00-10:00am</option>
                    <option>10:00-11:00am</option>
                    <option>11:00am-12:00pm</option>
                    <option>1:00-2:00pm</option>
                    <option>2:00-3:00pm</option>
                    <option>3:00-4:00pm</option>
                    <option>4:00-5:00pm</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-lg sm:text-xl lg:text-2xl border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-2">
                    How Did You Hear About Us *
                  </label>
                  <select
                    name="howHeard"
                    value={formData.howHeard}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-lg sm:text-xl lg:text-2xl border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition bg-white"
                  >
                    <option>Search Engine</option>
                    <option>Social Media</option>
                    <option>Friend/Family Referral</option>
                    <option>Healthcare Provider</option>
                    <option>Advertisement</option>
                    <option>Other</option>
                  </select>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-teal-600 text-white px-6 py-4 sm:py-5 rounded-lg hover:bg-teal-700 transition font-bold text-xl sm:text-2xl lg:text-3xl shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6 lg:space-y-8">
              {/* Company Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Springs Companions
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 mb-1">Phone:</p>
                      <a href={`tel:${phoneNumber}`} className="text-xl sm:text-2xl lg:text-3xl text-teal-600 hover:text-teal-700 font-bold">
                        (817) 449-6668
                      </a>
                    </div>
                  </div>

                  <a
                    href={`mailto:${email}?subject=${encodeURIComponent('Care Services Inquiry')}&body=${encodeURIComponent('Hello Springs Companions,\n\nI would like to inquire about your care services.\n\nName:\nPhone:\nBest time to contact:\n\nThank you!')}`}
                    className="flex items-start gap-4 w-full text-left hover:bg-teal-50 p-4 rounded-xl transition-all group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-100 group-hover:bg-teal-200 rounded-full flex items-center justify-center flex-shrink-0 transition">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 mb-1">Email:</p>
                      <p className="text-lg sm:text-xl lg:text-2xl text-teal-600 group-hover:text-teal-700 font-semibold break-all transition">
                        info@springcompanions.us
                      </p>
                    </div>
                  </a>
                </div>

                <button
                  onClick={handleScheduleClick}
                  className="w-full mt-8 bg-gradient-to-r from-teal-600 to-teal-800 text-white px-6 py-4 sm:py-5 rounded-lg hover:from-teal-700 hover:to-teal-900 transition inline-flex items-center justify-center gap-3 font-bold text-lg sm:text-xl lg:text-2xl shadow-lg hover:shadow-xl"
                >
                  Quick Contact Options
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
              </div>

              {/* Areas We Serve Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Areas We Serve
                  </h3>
                </div>
                
                {/* Interactive Map */}
                <div className="mb-6 rounded-xl overflow-hidden border-2 border-gray-200 shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583779.0820319634!2d-99.90516754999999!3d31.168910699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Texas Service Areas Map"
                  ></iframe>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {areasServed.map((area, index) => (
                    <div
                      key={index}
                      className={`${area.color} text-white px-6 py-4 sm:py-5 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1`}
                    >
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
                        {area.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 sm:p-5 bg-teal-50 rounded-xl border-2 border-teal-200">
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 text-center leading-relaxed">
                    Serving the greater <strong>Texas</strong> area with compassionate care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Method Selection Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-6 sm:p-10 lg:p-12 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={32} />
            </button>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center pr-8">
              Choose Your Preferred Contact Method
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-10 text-center leading-relaxed">
              Select how you'd like to reach us
            </p>
            
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Call Option */}
              <button
                onClick={() => {
                  setShowContactModal(false);
                  window.location.href = `tel:${phoneNumber}`;
                }}
                className="flex flex-col items-center gap-4 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-300 rounded-2xl hover:border-gray-500 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition shadow-lg">
                  <Phone size={36} className="text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Call Us</h4>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600">Speak with us directly</p>
                </div>
              </button>

              {/* WhatsApp Option */}
              <button
                onClick={() => {
                  setShowContactModal(false);
                  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Springs Companions, I would like to schedule a free consultation.")}`, '_blank');
                }}
                className="flex flex-col items-center gap-4 p-6 sm:p-8 bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-2xl hover:border-teal-500 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-700 rounded-full flex items-center justify-center group-hover:bg-teal-800 transition shadow-lg">
                  <MessageCircle size={36} className="text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">WhatsApp</h4>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600">Message us instantly</p>
                </div>
              </button>

              {/* SMS Option */}
              <button
                onClick={() => {
                  setShowContactModal(false);
                  window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent("Hello Springs Companions, I would like to schedule a free consultation.")}`;
                }}
                className="flex flex-col items-center gap-4 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-300 rounded-2xl hover:border-gray-500 hover:shadow-xl transition-all group cursor-pointer sm:col-span-2"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition shadow-lg">
                  <MessageCircle size={36} className="text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Text/SMS</h4>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600">Send us a text message</p>
                </div>
              </button>
            </div>

            <div className="mt-8 lg:mt-10 p-5 sm:p-6 bg-gradient-to-r from-teal-50 to-gray-50 rounded-xl border-2 border-teal-200">
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 text-center leading-relaxed">
                <strong className="text-teal-700">Pro Tip:</strong> Use WhatsApp or text messaging to easily send images or documents along with your inquiry!
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
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
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
            transform: translateY(30px);
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
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
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

export default Contact;