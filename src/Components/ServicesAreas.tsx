import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

const ServiceAreas: React.FC = () => {
  const cities = ['Arlington', 'Dallas', 'Houston', 'San Antonio', 'Austin'];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Centered Header in a Row */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-teal-100 mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight">
            SERVICE AREAS
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            Serving Families Across Texas
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl text-teal-100 max-w-3xl mx-auto leading-relaxed px-2">
            We proudly provide in-home senior care for families across the state of Texas. Our caregivers bring professionalism, compassion, and dedication to every home we visit.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {cities.map((city) => (
            <div key={city} className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto mb-2 sm:mb-3 md:mb-4" />
              <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{city}</p>
            </div>
          ))}
        </div>

        {/* Interactive Map */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445728.4448373467!2d-99.34171469999999!3d31.16858395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full sm:h-[350px] md:h-[400px] lg:h-[450px]"
          ></iframe>
        </div>

        <div className="text-center px-2">
          <a href="/contact" className="bg-white text-teal-700 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full hover:bg-gray-100 transition inline-flex items-center gap-2 sm:gap-3 font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Request Care in Your Area
            <ChevronRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;