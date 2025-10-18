import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import DetailedServices from './Components/DetailedServices';
import Contact from './Components/CompleteContact';
import FAQ from './Components/FAQ';
import Careers from './Components/Careers';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsOfService from './Components/TermsOfService';
import CookieConsent from './Components/CookieConsent';


function App() {
  return (
    <>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<DetailedServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/careers' element={<Careers/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      
      {/* Cookie Consent Banner - Shows on all pages */}
      <CookieConsent />
    </>
  );
}

export default App;