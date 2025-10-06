import React from 'react';
import { Users, Clock, Heart, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16 xl:mb-20">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-teal-700 mb-4 sm:mb-5 lg:mb-6 xl:mb-8 leading-tight">
            OUR SERVICES
          </h1>
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 lg:mb-6 xl:mb-8 leading-tight">
            Services Tailored to Your Loved One's Needs
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed sm:leading-loose">
            We provide a wide range of services to support seniors and their families
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Personal Care Services */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 shadow-lg">
              <Users className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">Personal Care Services</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-3xl text-gray-600 leading-relaxed sm:leading-loose">Bathing, dressing, grooming, feeding, and comprehensive hygiene support tailored to individual needs.</p>
          </div>

          {/* Cognitive & Mobility Care */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 shadow-lg">
              <span className="text-white text-xl sm:text-2xl lg:text-3xl">🧠</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">Cognitive & Mobility Care</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-3xl text-gray-600 leading-relaxed sm:leading-loose">Specialized dementia & Alzheimer's support, mobility assistance, exercises, and fall risk prevention.</p>
          </div>

          {/* Respite Care */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 shadow-lg">
              <Clock className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">Respite Care</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-3xl text-gray-600 leading-relaxed sm:leading-loose">Flexible temporary relief for family caregivers, including 24-hour care options for peace of mind.</p>
          </div>

          {/* Medical & Health Support */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 shadow-lg">
              <span className="text-white text-xl sm:text-2xl lg:text-3xl">🏥</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">Medical & Health Support</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-3xl text-gray-600 leading-relaxed sm:leading-loose">Chronic illness management, post-surgery care, medication reminders, and palliative care support.</p>
          </div>

          {/* Companionship */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 shadow-lg">
              <Heart className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">Companionship</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-3xl text-gray-600 leading-relaxed sm:leading-loose">Social engagement, recreational activities, emotional support, and meaningful connection.</p>
          </div>

          {/* Lifestyle Assistance */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 shadow-lg">
              <span className="text-white text-xl sm:text-2xl lg:text-3xl">🍳</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">Lifestyle Assistance</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-3xl text-gray-600 leading-relaxed sm:leading-loose">Meal preparation, light housekeeping, errands, transportation, and daily activity support.</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-14 lg:mt-16 xl:mt-20">
          <a 
            href="/services" 
            className="bg-teal-700 text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 xl:py-6 rounded-full hover:bg-teal-800 transition-all inline-flex items-center gap-2 sm:gap-3 font-semibold text-base sm:text-lg lg:text-xl xl:text-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Explore All Services
            <ChevronRight size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;