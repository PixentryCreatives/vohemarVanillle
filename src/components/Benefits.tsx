import React from 'react';
import { Leaf, Sun, Package, MapPin } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "100% naturelle & biologique",
      description: "Cultivée sans pesticides ni produits chimiques, respectueuse de l'environnement"
    },
    {
      icon: <Sun className="h-12 w-12 text-amber-600" />,
      title: "Gousses longues, souples, brillantes",
      description: "Sélectionnées pour leur taille exceptionnelle et leur parfum intense"
    },
    {
      icon: <Package className="h-12 w-12 text-amber-700" />,
      title: "Emballage soigné, prêt à l'export",
      description: "Conditionnement professionnel garantissant la fraîcheur et la qualité"
    },
    {
      icon: <MapPin className="h-12 w-12 text-green-700" />,
      title: "Origine : Nord-Est de Madagascar",
      description: "Terroir d'exception de la région SAVA, berceau de la vanille Bourbon"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-16">
          Pourquoi choisir notre vanille ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-green-50 hover:from-green-50 hover:to-amber-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-amber-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;