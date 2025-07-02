import React from 'react';
import { ArrowDown } from 'lucide-react';

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Plantation de vanille Madagascar"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-amber-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
            Découvrez l'excellence de la
            <span className="block text-green-700">Vanille Bourbon</span>
            <span className="block text-amber-800">de Madagascar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Qualité gourmet • 100% naturelle • Origine certifiée Madagascar
          </p>
          
          <button 
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Commander maintenant
            <ArrowDown className="ml-2 h-5 w-5 inline-block group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-amber-700" />
      </div>
    </header>
  );
};

export default Header;