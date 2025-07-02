import React from 'react';

const ImageSection = () => {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <img 
        src="https://images.pexels.com/photos/4110363/pexels-photo-4110363.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        alt="Gousses de vanille de Madagascar de qualité premium"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      <div className="absolute bottom-8 left-8 right-8 text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-2">
          L'art de la vanille authentique
        </h3>
        <p className="text-lg md:text-xl opacity-90">
          Chaque gousse raconte l'histoire d'un savoir-faire ancestral
        </p>
      </div>
    </section>
  );
};

export default ImageSection;