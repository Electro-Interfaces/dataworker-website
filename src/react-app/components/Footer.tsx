import { Link } from 'react-router';
import { Mail, MapPin } from 'lucide-react';
import { products, services, companyLinks, legalLinks } from '@/react-app/data/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="DataWorker"
                className="w-10 h-10 rounded-xl"
              />
              <span className="font-bold text-xl">
                <span className="text-white">Data</span>
                <span className="text-blue-400">Worker</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Разработка программного обеспечения для автоматизации бизнеса
            </p>
            <div className="space-y-3">
              <a href="mailto:info@dataworker.ru" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm py-1 break-all">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@dataworker.ru
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                Санкт-Петербург, Россия
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4">Продукты</h4>
            <ul className="space-y-1">
              {products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="inline-block py-1.5 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Услуги</h4>
            <ul className="space-y-1">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="inline-block py-1.5 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Компания</h4>
            <ul className="space-y-1">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="inline-block py-1.5 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="col-span-2 md:col-span-1 relative z-10">
            <h4 className="font-bold text-white mb-4">Связаться</h4>
            <p className="text-gray-400 text-sm mb-4">
              Обсудим ваш проект и подберём решение
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Написать нам
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} DataWorker. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
