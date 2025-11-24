import { Heart, MapPin, Music, Users } from 'lucide-react';

const Footer = ({ translations }) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Identidad */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl">María La Baja</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              {translations.footer.tagline}
            </p>
            <div className="flex items-start space-x-2 text-gray-400 text-sm">
              <MapPin size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
              <span>{translations.footer.location}</span>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h3 className="font-bold text-lg mb-4">{translations.footer.explore}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('culture')}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {translations.nav.culture}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('nature')}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {translations.nav.nature}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gastronomy')}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {translations.nav.gastronomy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('bullerengue')}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {translations.nav.bullerengue}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tourism')}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {translations.nav.tourism}
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Destacados */}
          <div>
            <h3 className="font-bold text-lg mb-4">{translations.footer.essence}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Music className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300 text-sm">
                    {translations.footer.highlights.festival}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300 text-sm">
                    {translations.footer.highlights.tradition}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300 text-sm">
                    {translations.footer.highlights.peace}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {translations.footer.description}
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>© {currentYear} {translations.footer.rights}</span>
              <Heart size={16} className="text-orange-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;