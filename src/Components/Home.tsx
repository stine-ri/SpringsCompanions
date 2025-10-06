import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Welcome from '../Components/Welcome';
import Services from '../Components/Services';
import WhyChooseUs from '../Components/WhyChooseUs';
import ServiceAreas from '../Components/ServicesAreas';
import Testimonials from '../Components/Testimonials';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;