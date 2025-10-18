import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      initializeCookies(savedPreferences);
    }
  }, []);

  const initializeCookies = (prefs: typeof preferences) => {
    // Initialize analytics cookies (Google Analytics, etc.)
    if (prefs.analytics) {
      // Example: Initialize Google Analytics
      // window.gtag('config', 'YOUR-GA-ID');
      console.log('Analytics cookies enabled');
    }

    // Initialize marketing cookies
    if (prefs.marketing) {
      // Example: Initialize Facebook Pixel, Google Ads, etc.
      console.log('Marketing cookies enabled');
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    initializeCookies(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    initializeCookies(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleTogglePreference = (key: 'analytics' | 'marketing') => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-slide-up">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border-2 border-teal-200">
          {!showSettings ? (
            // Simple Banner View
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-teal-700" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                    Springs Companions uses cookies to enhance your browsing experience, analyze site traffic, 
                    and provide personalized content. By clicking "Accept All," you consent to our use of cookies. 
                    You can customize your preferences or learn more in our{' '}
                    <a href="/privacy-policy" className="text-teal-600 hover:text-teal-700 font-semibold underline">
                      Privacy Policy
                    </a>.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="bg-teal-700 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="border-2 border-teal-700 text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Customize
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleRejectAll}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            // Settings View
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-teal-700" />
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Necessary Cookies</h4>
                    <div className="bg-teal-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Always Active
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Essential cookies required for the website to function properly. These cannot be disabled.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handleTogglePreference('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-700"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Help us understand how visitors interact with our website to improve user experience.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Marketing Cookies</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handleTogglePreference('marketing')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-700"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Used to deliver relevant advertisements and track advertising campaign performance.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-teal-700 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 border-2 border-teal-700 text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Accept All
                </button>
              </div>

              <p className="text-center text-gray-500 text-xs mt-4">
                You can change your preferences at any time by clicking the cookie icon in the footer.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default CookieConsent;