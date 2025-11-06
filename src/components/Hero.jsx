import { ChevronDown } from 'lucide-react';
import iglesiaMariaBaja from '../assets/iglesia maria la  baja.jpg';

const Hero = ({ translations }) => {
  const scrollToExplore = () => {
    const cultureSection = document.getElementById('culture');
    if (cultureSection) {
      cultureSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${iglesiaMariaBaja})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl animate-fade-in">
          {translations.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
          {translations.hero.subtitle}
        </p>
        <button
          onClick={scrollToExplore}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-2xl"
        >
          {translations.hero.button}
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={40} className="text-white/80" />
      </div>
    </section>
  );
};

export default Hero;