import { AlertTriangle, Users, Droplet, TreePine, Sprout, Music } from 'lucide-react';
import { postConflictData } from '../data/postConflictData';
import ContactForm from '../ContactForm';

const PostConflictAndContactSection = ({ currentLang, translations }) => {
  const getIcon = (iconName, size = 24) => {
    const icons = {
      AlertTriangle,
      Users,
      Droplet,
      TreePine,
      Sprout,
      Music
    };
    const Icon = icons[iconName];
    return Icon ? <Icon size={size} className="text-white" /> : null;
  };

  return (
    <section id="post-conflict" className="w-full py-12 md:py-10 bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100">
      <div className="px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {translations.postConflict.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            {translations.postConflict.subtitle}
          </p>
        </div>

        <div className="mb-12 rounded-xl md:rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 md:p-8 text-center transform hover:-translate-y-1 transition-all duration-300">
          <h3 className="font-bold text-xl md:text-2xl mb-2">
            {translations.postConflict.contextTitle}
          </h3>
          <p className="text-base md:text-lg">
            {translations.postConflict.contextDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {postConflictData.map((item, index) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp animate-delay-${index * 100}`}
                >
                  <div className="relative w-full h-32 bg-gray-200 overflow-hidden">
                    <img
                      src={item.image}
                      alt={translations.postConflict.cards[item.key].title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className={`absolute top-3 right-3 w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      {getIcon(item.icon, 20)}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {translations.postConflict.cards[item.key].title}
                    </h3>
                    <p className="text-sm text-teal-600 font-medium mb-3">
                      {translations.postConflict.cards[item.key].subtitle}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description[currentLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 md:p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-md">
              <h4 className="font-bold text-yellow-800 text-base md:text-lg mb-2">
                {translations.postConflict.noteTitle}
              </h4>
              <p className="text-yellow-700 text-sm md:text-base leading-relaxed">
                {translations.postConflict.noteDescription}
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ContactForm currentLang={currentLang} translations={translations} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostConflictAndContactSection;