import { useState } from "react";
import { tourismData } from "../data/tourismData";
import { Waves, TreePine, Music, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const icons = { Waves, TreePine, Music };

const TourismSection = ({ currentLang, translations }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const openVideo = (url, type) => {
    setSelectedVideo(url);
    setSelectedType(type);
  };

  return (
    <section
      id="tourism"
      className="bg-white dark:bg-gray-900 py-16 px-6 md:px-16 transition-colors duration-300"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {translations?.tourism?.title ?? "Turismo"}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {translations?.tourism?.subtitle ?? ""}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tourismData.map(
          ({ id, title, description, icon, videoUrl, videoType }) => {
            const Icon = icons[icon];

            return (
              <div
                key={id}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openVideo(videoUrl, videoType)}
              >
                <div className="relative aspect-video">
                  {/* 🔹 Miniatura según tipo */}
                  {videoType === "youtube" ? (
                    <iframe
                      src={videoUrl}
                      className="w-full h-full object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      src={videoUrl}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm">Ver video</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col items-center text-center">
                  {Icon && <Icon className="w-10 h-10 text-teal-500 mb-3" />}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {title[currentLang] ?? title.es}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {description[currentLang] ?? description.es}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* 🔹 MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
              aria-label="Cerrar video"
            >
              <X size={32} />
            </button>

            <motion.div
              className="relative w-full max-w-5xl max-h-[80vh] flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* 🔹 Video del modal según tipo */}
              {selectedType === "youtube" ? (
                <div className="relative w-full max-w-3xl aspect-video">
                  <iframe
                    src={selectedVideo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-xl"
                  ></iframe>
                </div>
              ) : (
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="rounded-xl w-full h-auto max-h-[80vh] object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TourismSection;
