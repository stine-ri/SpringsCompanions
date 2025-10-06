import React from 'react';
import { ChevronRight } from 'lucide-react';
import happyDoctor from '../assets/images/i-m-very-happy-be-able-walk-again-doctor.jpg';
import Doctor2 from '../assets/images/nurse-taking-care-woman-wheelchair.jpg';
import Doctor3 from '../assets/images/old-woman-nursing-home-walking-with-crutches-with-help-from-female-nurse.jpg';
import Doctor4 from '../assets/images/pexels-kampus-7551627.jpg';
import Doctor5 from '../assets/images/pexels-olly-3791666.jpg';
import Doctor6 from '../assets/images/hands.jpg';

const Welcome: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-teal-700 leading-tight">
            WELCOME TO SPRINGS COMPANIONS
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Text Content - Order changes on mobile */}
          <div className="order-1 lg:order-2">
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Every Senior Deserves Dignity and Comfort
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-4 sm:mb-5 lg:mb-8 leading-relaxed sm:leading-loose">
              At Springs Companions, we believe that every senior deserves to live safely, comfortably, and with dignity in their own home. Our trained caregivers provide <span className="font-semibold text-gray-900">personalized, compassionate support</span> for seniors facing Alzheimer's, dementia, chronic illness, post-surgery recovery, and mobility challenges.
            </p>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 sm:mb-7 lg:mb-10 leading-relaxed sm:leading-loose">
              We help families find peace of mind, offering reliable, professional care that keeps your loved ones safe, happy, and engaged every day.
            </p>
            <a 
              href="/about" 
              className="bg-teal-700 text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 xl:py-6 rounded-full hover:bg-teal-800 transition-all inline-flex items-center gap-2 sm:gap-3 font-semibold text-sm sm:text-base lg:text-lg xl:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Learn More About Us
              <ChevronRight size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </a>
          </div>

          {/* Image Grid - Order changes on mobile */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[520px] xl:h-[640px]">
                {/* Caregiver with elderly - 1 */}
                <div className="bg-teal-100 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img 
                    src={happyDoctor} 
                    alt="Professional caregiver assisting elderly patient" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Caregiver with elderly - 2 */}
                <div className="bg-teal-100 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img 
                    src={Doctor2}
                    alt="Caregiver helping elderly with mobility" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Caregiver with elderly - 3 */}
                <div className="bg-teal-100 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img 
                    src={Doctor3}
                    alt="Caregiver providing companionship to elderly" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Caregiver with elderly - 4 */}
                <div className="bg-teal-100 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img 
                    src={Doctor4} 
                    alt="Healthcare caregiver with elderly patient" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Caregiver with elderly - 5 */}
                <div className="bg-teal-100 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img 
                    src={Doctor5}
                    alt="Caregiver assisting elderly with daily activities" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Caregiver with elderly - 6 */}
                <div className="bg-teal-100 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img 
                    src={Doctor6}
                    alt="Caregiver providing compassionate elderly care" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>

              {/* Experience Badge - Responsive positioning and sizing */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 lg:-bottom-6 lg:-right-6 bg-teal-700 text-white p-4 sm:p-5 lg:p-6 xl:p-8 rounded-xl sm:rounded-2xl shadow-xl max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] lg:max-w-[200px] xl:max-w-xs z-10">
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2">15+</p>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-tight">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;