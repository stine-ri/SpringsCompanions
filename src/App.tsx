import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import DetailedServices from './Components/DetailedServices';
import Contact from './Components/CompleteContact';
import FAQ from './Components/FAQ';
function App() {
  return (
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<DetailedServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/faq' element={<FAQ/>}/>
      </Routes>
    </main>
  );
}

export default App;