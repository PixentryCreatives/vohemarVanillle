import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Vanille Bourbon Madagascar</h3>
            <p className="text-amber-200">
              L'excellence de la vanille authentique, directement des plantations malgaches.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:klaus.schaaf@pebge.eu" className="hover:text-amber-200 transition-colors">
                  klaus.schaaf@pebge.eu
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+4915150512722" className="hover:text-amber-200 transition-colors">
                  +49 1515 0512722
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Origine</h4>
            <div className="flex items-center justify-center md:justify-end">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-amber-200">Madagascar, Région SAVA</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 pt-8 text-center text-amber-200">
          <p>&copy; 2025 Vanille Bourbon Madagascar. Tous droits réservés.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;