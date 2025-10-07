import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Facebook} from 'lucide-react';
import { FaTiktok } from "react-icons/fa";


const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  const contactInfo = {
    phone: '8174496668',
    phoneDisplay: '(817) 449-6668',
    additionalPhone: '+14699655019',
    additionalPhoneDisplay: '+1 (469) 965-5019',
    email: 'info@springscompanions.com',
    facebook: 'https://www.facebook.com/profile.php?id=61581776879950',
    linkedin: 'https://linkedin.com',
    tiktok: 'https://www.tiktok.com/@springscompanion',
    instagram: 'https://www.instagram.com/springscompan817/?hl=en'
  };

  const navItems = [
    { href: "/", label: "Home" },
    { 
      href: "/about", 
      label: "About",
      subItems: [
        { href: "/about#about-us", label: "About Us" },
        { href: "/about#our-story", label: "Our Story" },
        { href: "/about#vision-mission", label: "Vision & Mission" },
        { href: "/about#testimonials", label: "Testimonials" }
      ]
    },
    { 
      href: "/services", 
      label: "Services",
      subItems: [
        { href: "/services#personal-care", label: "Personal Care Services" },
        { href: "/services#companionship", label: "Companionship & Support" },
        { href: "/services#respite-care", label: "Respite Care" },
        { href: "/services#dementia-care", label: "Dementia Care" },
        { href: "/services#alzheimers", label: "Alzheimer's Care" },
        { href: "/services#post-surgery", label: "Post-Surgery Care" },
        { href: "/services#parkinsons", label: "Parkinson's Care" },
        { href: "/services#chronic-illness", label: "Chronic Illness Care" },
        { href: "/services#medication-management", label: "Medication Management" },
        { href: "/services#mobility-fall-risk", label: "Mobility & Fall Risk" },
        { href: "/services#additional-services", label: "Additional Services" },
        { href: "/services#around-clock", label: "24/7 Care" }
      ]
    },
    { 
      href: "/contact", 
      label: "Contact Us",
      subItems: [
        { href: "/contact#contact-form", label: "Get In Touch" },
        { href: "/faq#faq", label: "FAQ" }
      ]
    }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);

    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      if (path && path !== window.location.pathname) {
        window.location.href = href;
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      window.location.href = href;
    }
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === label ? null : label);
  };

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing
    setDropdownTimeout(timeout);
  };

  return (
    <>
      {/* Top Bar - Reduced height */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-1.5 sm:py-2 md:py-2.5 fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2 md:gap-2.5 text-xs sm:text-sm md:text-base">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2 md:gap-3 lg:gap-4">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1 sm:gap-1.5 hover:text-teal-100 transition-colors">
                <Phone size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                <span className="font-bold text-xs sm:text-sm">{contactInfo.phoneDisplay}</span>
              </a>
              <span className="text-teal-200 mx-1 hidden sm:inline">|</span>
              <a href={`tel:${contactInfo.additionalPhone}`} className="flex items-center gap-1 sm:gap-1.5 hover:text-teal-100 transition-colors">
                <Phone size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                <span className="font-bold text-xs sm:text-sm">{contactInfo.additionalPhoneDisplay}</span>
              </a>
              <span className="text-teal-200 mx-1 hidden sm:inline">|</span>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1 sm:gap-1.5 hover:text-teal-100 transition-colors">
                <Mail size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                <span className="hidden sm:inline font-bold text-xs sm:text-sm">{contactInfo.email}</span>
                <span className="sm:hidden font-bold text-xs">Email</span>
              </a>
            </div>

            {/* Right Side - CTA & Social */}
            <div className="flex items-center gap-2 sm:gap-2 md:gap-3">
              <a 
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                className="bg-white text-teal-700 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full hover:bg-teal-50 transition-all font-bold text-[9px] sm:text-xs md:text-sm whitespace-nowrap shadow-sm hover:shadow"
              >
                FREE CONSULTATION
              </a>
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                <span className="text-xs sm:text-sm hidden lg:inline font-bold">Follow Us</span>
                <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-teal-100 transition-transform hover:scale-110">
                  <Facebook size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </a>
                <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-teal-100 transition-transform hover:scale-110">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href={contactInfo.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-teal-100 transition-transform hover:scale-110">
                  <FaTiktok size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Adjusted top spacing to match reduced teal bar height */}
      <nav className="bg-white/98 backdrop-blur-md shadow-lg fixed top-[40px] sm:top-[44px] md:top-[48px] left-0 right-0 z-40 border-b border-gray-100">
        <div className="w-full px-4 sm:px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="flex justify-between items-center h-16 sm:h-16 md:h-18 lg:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0 min-w-0">
              <a 
                href="/" 
                onClick={(e) => handleNavClick(e, '/')} 
                className="flex items-center gap-2 sm:gap-2 md:gap-3 hover:opacity-90 transition-opacity"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center overflow-hidden shadow-md flex-shrink-0">
                  <img 
                    src="/logo.jpeg" 
                    alt="Springs Companions Logo" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <span class="text-white font-bold text-sm sm:text-base md:text-lg">SC</span>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-teal-700 leading-tight whitespace-nowrap">Springs Companions</span>
                  <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-600 font-semibold hidden sm:block whitespace-nowrap">Compassionate Senior Care</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation - Full Width Spread */}
            <div className="hidden lg:flex items-center justify-between flex-1 mx-8 xl:mx-16">
              {navItems.map((item) => (
                <div 
                  key={item.href} 
                  className="relative group"
                  onMouseEnter={() => item.subItems && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-700 hover:text-teal-700 font-bold transition-colors duration-200 py-2 px-3 xl:px-4 relative flex items-center gap-1.5 cursor-pointer text-lg xl:text-xl whitespace-nowrap"
                  >
                    {item.label}
                    {item.subItems && (
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-700 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                  
                  {/* Desktop Dropdown Menu */}
                  {item.subItems && openDropdown === item.label && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-80 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 max-h-[70vh] overflow-y-auto z-50"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(e, subItem.href)}
                          className="block px-5 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-150 text-base font-medium border-b border-gray-100 last:border-b-0"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-teal-700 transition-all p-2 rounded-lg hover:bg-teal-50 active:scale-95 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} className="sm:w-7 sm:h-7 md:w-8 md:h-8" /> : <Menu size={26} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
            <div className="px-4 sm:px-3 py-3 sm:py-3 space-y-1 sm:space-y-1 max-h-[calc(100vh-120px)] sm:max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-140px)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between text-gray-700 hover:text-teal-700 font-semibold py-3 sm:py-2.5 md:py-3 px-3 sm:px-3 md:px-4 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 active:scale-98 text-sm sm:text-sm md:text-base"
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={18} 
                          className={`sm:w-[18px] sm:h-[18px] transition-transform duration-300 ${mobileOpenDropdown === item.label ? 'rotate-180 text-teal-700' : ''}`}
                        />
                      </button>
                      {mobileOpenDropdown === item.label && (
                        <div className="ml-2 sm:ml-2 mt-1 sm:mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.href}
                              href={subItem.href}
                              onClick={(e) => handleNavClick(e, subItem.href)}
                              className="block text-gray-600 hover:text-teal-700 py-2 sm:py-2 md:py-2.5 px-3 sm:px-3 md:px-4 pl-4 sm:pl-4 md:pl-6 rounded-lg hover:bg-teal-50 transition-all duration-150 text-sm sm:text-xs md:text-sm border-l-2 border-transparent hover:border-teal-600 ml-1 sm:ml-2"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block text-gray-700 hover:text-teal-700 font-semibold py-3 sm:py-2.5 md:py-3 px-3 sm:px-3 md:px-4 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 text-sm sm:text-sm md:text-base active:scale-98"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <a 
                href={`tel:${contactInfo.phone}`}
                className="block bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 sm:px-4 md:px-6 py-3 sm:py-3 md:py-4 rounded-lg sm:rounded-xl hover:from-teal-700 hover:to-teal-800 text-center font-bold shadow-lg mt-3 sm:mt-3 transition-all duration-200 active:scale-98 text-sm sm:text-sm md:text-base"
              >
                Call Now: {contactInfo.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;