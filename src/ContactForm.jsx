import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = ({ translations, currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Éxito
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Resetear después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setIsError(true);

      // Ocultar error después de 5 segundos
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  // Traducciones dinámicas para mensajes adicionales
  const dynamicTranslations = {
    es: {
      sending: 'Enviando...',
      responseMessage: 'Te responderemos pronto.',
      errorMessage: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
    },
    en: {
      sending: 'Sending...',
      responseMessage: 'We will respond soon.',
      errorMessage: 'There was an error sending the message. Please try again.',
    },
    fr: {
      sending: 'Envoi en cours...',
      responseMessage: 'Nous vous répondrons bientôt.',
      errorMessage: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.',
    },
  };

  const t = dynamicTranslations[currentLang] || dynamicTranslations.es;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-100 to-teal-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {translations.contact.title}
          </h2>
          <p className="text-xl text-gray-600">
            {translations.contact.subtitle}
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white rounded-2xl p-12 shadow-xl text-center animate-fadeIn">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {translations.contact.success}
            </h3>
            <p className="text-gray-600 mt-2">{t.responseMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
            {isError && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-start gap-3 animate-fadeIn">
                <AlertCircle size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{t.errorMessage}</p>
              </div>
            )}

            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                {translations.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder={translations.contact.namePlaceholder}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                {translations.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder={translations.contact.emailPlaceholder}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                {translations.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                disabled={isLoading}
                placeholder={translations.contact.messagePlaceholder}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <span>{t.sending}</span>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </>
              ) : (
                <>
                  <span>{translations.contact.button}</span>
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;