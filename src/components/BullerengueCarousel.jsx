import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Music, Mic2, Sparkles, Flame } from 'lucide-react';
import { bullerengueData } from '../data/bullerengueData';

const iconMap = {
  Music,
  Mic2,
  Sparkles,
  Flame
};

const BullerengueCarousel = ({ language = 'es' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bullerengueData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? bullerengueData.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bullerengueData.length);
    setIsAutoPlaying(false);
  };

  const currentSlide = bullerengueData[currentIndex];
  const IconComponent = iconMap[currentSlide.icon];

  return (
    <section  id="bullerengue" className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img
          src={currentSlide.image}
          alt={currentSlide.title[language]}
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          {/* Ícono y título */}
          <div className="mb-6 md:mb-8 animate-fade-in">
            <div className={`inline-flex items-center gap-3 mb-4 p-3 rounded-full bg-gradient-to-r ${currentSlide.gradient} bg-opacity-20 backdrop-blur-sm`}>
              <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              {currentSlide.title[language]}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              {currentSlide.description[language]}
            </p>
          </div>

          {/* Controles de navegación */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Botones anterior/siguiente */}
            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={goToNext}
                className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Indicadores de puntos */}
            <div className="flex gap-2">
              {bullerengueData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 md:w-12 h-2 md:h-2.5 bg-white'
                      : 'w-2 md:w-2.5 h-2 md:h-2.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                />
              ))}
            </div>

            {/* Contador */}
            <div className="ml-auto text-white/80 text-sm md:text-base font-medium hidden sm:block">
              {currentIndex + 1} / {bullerengueData.length}
            </div>
          </div>
        </div>
      </div>

      {/* Botón de pausa/reproducción */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
        aria-label={isAutoPlaying ? 'Pausar' : 'Reproducir'}
      >
        {isAutoPlaying ? (
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default BullerengueCarousel;