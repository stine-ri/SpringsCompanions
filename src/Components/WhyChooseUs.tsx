import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header in a Row */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-teal-700 mb-4 sm:mb-6 lg:mb-8 leading-tight">
            WHY CHOOSE US
          </h1>
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Why Choose Springs Companions
          </h2>
        </div>
        
        {/* Grid with improved mobile spacing */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-10 sm:mb-12 lg:mb-16">
          {/* Experience Card */}
          <div className="text-center group p-4 sm:p-6 lg:p-0">
            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl lg:text-4xl">⭐</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">Experience</h3>
            <p className="text-base sm:text-lg lg:text-xl xl:text-3xl text-gray-600 leading-relaxed sm:leading-loose">
              Trained caregivers providing compassionate, personalized care.
            </p>
          </div>

          {/* Flexibility Card */}
          <div className="text-center group p-4 sm:p-6 lg:p-0">
            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🔄</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">Flexibility</h3>
            <p className="text-base sm:text-lg lg:text-xl xl:text-3xl text-gray-600 leading-relaxed sm:leading-loose">
              Scheduling tailored to your family's unique needs.
            </p>
          </div>

          {/* Specialized Care Card */}
          <div className="text-center group p-4 sm:p-6 lg:p-0">
            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield size={32} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-purple-600" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">Specialized Care</h3>
            <p className="text-base sm:text-lg lg:text-xl xl:text-3xl text-gray-600 leading-relaxed sm:leading-loose">
              Expertise in Alzheimer's, dementia, and post-surgery recovery.
            </p>
          </div>

          {/* Commitment Card */}
          <div className="text-center group p-4 sm:p-6 lg:p-0">
            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🛡️</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">Commitment</h3>
            <p className="text-base sm:text-lg lg:text-xl xl:text-3xl text-gray-600 leading-relaxed sm:leading-loose">
              Safety, dignity, and the highest standard of care.
            </p>
          </div>
        </div>

        {/* CTA Button with improved mobile sizing */}
        <div className="text-center px-2 sm:px-0">
          <a 
            href="/contact" 
            className="bg-teal-700 text-white px-6 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full hover:bg-teal-800 transition-all inline-flex items-center gap-2 sm:gap-3 font-semibold text-base sm:text-lg lg:text-xl xl:text-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Contact Us for a Free Consultation
            <ChevronRight size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;