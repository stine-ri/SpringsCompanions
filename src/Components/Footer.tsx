import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mb-10 sm:mb-12 lg:mb-14 xl:mb-16">
          {/* Brand Section */}
          <div className="xs:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-5 lg:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </div>
              <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight">
                Springs Companions
              </span>
            </div>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed sm:leading-loose">
              Compassionate in-home senior care across Texas, dedicated to dignity and comfort.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-5 lg:mb-6 leading-tight">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="/" className="text-xs sm:text-sm lg:text-base xl:text-lg hover:text-teal-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-xs sm:text-sm lg:text-base xl:text-lg hover:text-teal-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-xs sm:text-sm lg:text-base xl:text-lg hover:text-teal-400 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-xs sm:text-sm lg:text-base xl:text-lg hover:text-teal-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-5 lg:mb-6 leading-tight">
              Our Services
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base xl:text-lg">
              <li className="leading-relaxed">Personal Care</li>
              <li className="leading-relaxed">Cognitive & Mobility Care</li>
              <li className="leading-relaxed">Respite Care</li>
              <li className="leading-relaxed">Medical Support</li>
              <li className="leading-relaxed">Companionship</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="xs:col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-5 lg:mb-6 leading-tight">
              Contact Info
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base xl:text-lg">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <a href="tel:8174496668" className="hover:text-teal-400 transition-colors duration-200 break-all">
                  (817) 449-6668
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <a href="mailto:info@springscompanions.com" className="hover:text-teal-400 transition-colors duration-200 break-all xs:break-normal">
                  info@springscompanions.com
                </a>
              </li>
              <li className="flex items-start gap-3 mt-4 sm:mt-6">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Serving Arlington, Dallas, Houston, San Antonio, Austin, Fort Worth</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 lg:pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm lg:text-base xl:text-lg">
          <p className="text-center sm:text-left">
            &copy; 2025 Springs Companions. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8">
            <a href="#" className="hover:text-teal-400 transition-colors duration-200 whitespace-nowrap">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors duration-200 whitespace-nowrap">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;