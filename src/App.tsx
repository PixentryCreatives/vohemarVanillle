import React from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import ImageSection from './components/ImageSection';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Benefits />
      <ImageSection />
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;