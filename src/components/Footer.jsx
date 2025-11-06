import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = ({ translations }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl">María La Baja</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {translations.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{translations.footer.description}</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              {translations.footer.description}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              {translations.nav.contact}
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} María La Baja: Tierra que renace.</span>
            <span>{translations.footer.rights}.</span>
            <Heart size={16} className="text-orange-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
