import { useState } from 'react';
import { X } from 'lucide-react';
import { natureData } from '../data/natureData';

const NatureGallery = ({ currentLang, translations }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="nature" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {translations.nature.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {translations.nature.subtitle}
          </p>
        </div>

        {/* Grid responsive: 1 col móvil, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {natureData.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedImage(item)}
              style={{
                animation: 'fadeInUp 0.6s ease-out',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Imagen con aspect ratio */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title[currentLang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                    {item.title[currentLang]}
                  </h3>
                  <p className="text-xs md:text-sm text-white/90 line-clamp-2">
                    {item.description[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <div className="max-w-4xl w-full bg-white rounded-xl md:rounded-2xl overflow-hidden">
            <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-900">
              <img
                src={selectedImage.image}
                alt={selectedImage.title[currentLang]}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 lg:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                {selectedImage.title[currentLang]}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {selectedImage.description[currentLang]}
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

export default NatureGallery;