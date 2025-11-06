import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CultureSection from './components/CultureSection';
import NatureGallery from './components/NatureGallery';
import GastronomySection from './components/GastronomySection';
import HistorySection from './components/HistorySection';
import ContactForm from './ContactForm';
import Footer from './components/Footer';

import esTranslations from './i18n/es.json';
import enTranslations from './i18n/en.json';
import frTranslations from './i18n/fr.json';

const translations = {
  es: esTranslations,
  en: enTranslations,
  fr: frTranslations,
};

function App() {
  const [currentLang, setCurrentLang] = useState('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'es';
    setCurrentLang(savedLang);
  }, []);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[currentLang];

  return (
    <div className="font-sans">
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        translations={t}
      />
      <Hero translations={t} />
      <CultureSection currentLang={currentLang} translations={t} />
      <NatureGallery currentLang={currentLang} translations={t} />
      <GastronomySection currentLang={currentLang} translations={t} />
      <HistorySection currentLang={currentLang} translations={t} />
      <ContactForm translations={t} />
      <Footer translations={t} />
    </div>
  );
}

export default App;
