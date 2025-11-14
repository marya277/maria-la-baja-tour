import VideoPlayer from './VideoPlayer';
import { cultureData } from '../data/cultureData';

const CultureSection = ({ currentLang, translations }) => {
  return (
    <section id="culture" className="py-12 md:py-20 bg-gradient-to-br from-orange-100 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {translations.culture.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {translations.culture.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {cultureData.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp animate-delay-${index * 100}`}
            >
              <div className="mb-4 md:mb-5">
                <VideoPlayer
                  videoUrl={item.videoUrl}
                  videoType={item.videoType}
                  title={item.title[currentLang]}
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  {item.title[currentLang]}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.description[currentLang]}
                </p>
              </div>

              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 text-xs font-medium">
                📹 Video
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;