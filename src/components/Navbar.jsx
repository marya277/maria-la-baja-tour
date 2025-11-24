import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = ({ currentLang, onLanguageChange, translations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="font-bold text-xl text-gray-800 hidden sm:block">
              María La Baja
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {translations.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('culture')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {translations.nav.culture}
            </button>
            <button
              onClick={() => scrollToSection('nature')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {translations.nav.nature}
            </button>
            <button
              onClick={() => scrollToSection('gastronomy')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {translations.nav.gastronomy}
            </button>
            <button
              onClick={() => scrollToSection('history')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {translations.nav.history}
            </button>
            <button
              onClick={() => scrollToSection('tourism')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {translations.nav.tourism}
            </button>
            <button
              onClick={() => scrollToSection('bullerengue')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {translations.nav.bullerengue}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {translations.nav.contact}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
              >
                <Globe size={20} />
                <span className="font-medium">{currentLang.toUpperCase()}</span>
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-orange-50 transition-colors ${currentLang === lang.code ? 'text-orange-500 font-medium' : 'text-gray-700'
                        }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="text-gray-700"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
            >
              {translations.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('culture')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
            >
              {translations.nav.culture}
            </button>
            <button
              onClick={() => scrollToSection('nature')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
            >
              {translations.nav.nature}
            </button>
            <button
              onClick={() => scrollToSection('gastronomy')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
            >
              {translations.nav.gastronomy}
            </button>
            <button
              onClick={() => scrollToSection('history')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
            >
              {translations.nav.history}
            </button>
            <button
              onClick={() => scrollToSection('tourism')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
            >
              {translations.nav.tourism}
            </button>
            <button
              onClick={() => scrollToSection('bullerengue')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
            >
              {translations.nav.bullerengue}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
            >
              {translations.nav.contact}
            </button>
          </div>
        </div>
      )}

      {showLangMenu && (
        <div className="md:hidden bg-white border-t px-4 py-2">
          <div className="flex space-x-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setShowLangMenu(false);
                }}
                className={`px-4 py-2 rounded-md ${currentLang === lang.code
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700'
                  }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;