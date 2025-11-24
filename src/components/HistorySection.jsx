import { Heart, Users, Flower2, Sun } from 'lucide-react';
import { historyData } from '../data/historyData';

const HistorySection = ({ currentLang, translations }) => {
  const content = historyData[currentLang];
  const scrollToPostConflict = () => {
    const postConflictSection = document.getElementById('post-conflict');
    if (postConflictSection) {
      postConflictSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="history" className="py-20 bg-gradient-to-br from-green-100 via-blue-100 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {content.title}
          </h2>
          <p className="text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            {content.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 leading-relaxed text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {currentLang === 'es' ? 'Paz' : currentLang === 'en' ? 'Peace' : 'Paix'}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentLang === 'es'
                  ? 'Construyendo futuro'
                  : currentLang === 'en'
                  ? 'Building future'
                  : 'Construire l\'avenir'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {currentLang === 'es' ? 'Comunidad' : currentLang === 'en' ? 'Community' : 'Communauté'}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentLang === 'es'
                  ? 'Unidos por el cambio'
                  : currentLang === 'en'
                  ? 'United for change'
                  : 'Unis pour le changement'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {currentLang === 'es' ? 'Esperanza' : currentLang === 'en' ? 'Hope' : 'Espoir'}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentLang === 'es'
                  ? 'Renaciendo juntos'
                  : currentLang === 'en'
                  ? 'Reborn together'
                  : 'Renaître ensemble'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flower2 size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {currentLang === 'es' ? 'Cultura' : currentLang === 'en' ? 'Culture' : 'Culture'}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentLang === 'es'
                  ? 'Preservando raíces'
                  : currentLang === 'en'
                  ? 'Preserving roots'
                  : 'Préserver les racines'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
