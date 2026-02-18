import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Director from './components/Director';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';

function App() {
  useEffect(() => {
    // Handle form success message
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      alert(
        'Thank you! Your inquiry has been submitted successfully. We will contact you soon.'
      );
    }
  }, []);

  return (
    <div className="App min-w-0 overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Director />
      <Testimonials />
      <ContactFooter />
    </div>
  );
}

export default App;
