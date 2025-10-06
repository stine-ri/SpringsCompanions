import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16 xl:mb-20">
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-teal-700 mb-4 sm:mb-5 lg:mb-6 xl:mb-8 leading-tight">
            TESTIMONIALS
          </h1>
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 lg:mb-6 xl:mb-8 leading-tight">
            What Families Say About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-6xl mx-auto">
          {/* First Testimonial */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-teal-600 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-5 lg:mb-6">"</div>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 mb-6 sm:mb-7 lg:mb-8 leading-relaxed sm:leading-loose italic">
              Springs Companions has been a blessing to our family. The caregivers are professional, friendly, and truly care about my mother's well-being.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg lg:text-xl flex-shrink-0">
                SM
              </div>
              <div className="min-w-0">
                <p className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg xl:text-xl truncate">Sarah M.</p>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 truncate">Dallas, TX</p>
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-purple-600 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-5 lg:mb-6">"</div>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 mb-6 sm:mb-7 lg:mb-8 leading-relaxed sm:leading-loose italic">
              We finally feel peace of mind knowing our father is safe, happy, and engaged at home. The care is exceptional.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg lg:text-xl flex-shrink-0">
                JD
              </div>
              <div className="min-w-0">
                <p className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg xl:text-xl truncate">John D.</p>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 truncate">Houston, TX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;