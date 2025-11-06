import { useState } from 'react';
import { X } from 'lucide-react';
import { gastronomyData } from '../data/gastronomyData';

const GastronomySection = ({ currentLang, translations }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <section id="gastronomy" className="py-12 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {translations.gastronomy.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {translations.gastronomy.subtitle}
          </p>
        </div>

        {/* Grid responsive: 1 col móvil, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {gastronomyData.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedDish(item)}
              style={{
                animation: 'fadeInUp 0.6s ease-out',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Imagen */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 bg-gray-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name[currentLang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay sutil en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Contenido */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {item.name[currentLang]}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
                  {item.description[currentLang]}
                </p>
                
                {/* Badge decorativo */}
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-red-100 to-orange-100 text-red-700 text-xs font-medium">
                  🍽️ Sabor Caribeño
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de plato ampliado */}
      {selectedDish && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedDish(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedDish(null)}
          >
            <X size={32} />
          </button>

          <div className="max-w-4xl w-full bg-white rounded-xl md:rounded-2xl overflow-hidden">
            <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-900">
              <img
                src={selectedDish.image}
                alt={selectedDish.name[currentLang]}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 lg:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                {selectedDish.name[currentLang]}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {selectedDish.description[currentLang]}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animación CSS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default GastronomySection;