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
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold tracking-tight leading-none">
                <span className="text-white">Elsy</span><span className="text-navy-400 font-extrabold">Plus</span>
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-500 leading-none mt-1">
                IT & Automation
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Разработка программного обеспечения для автоматизации бизнеса
            </p>
            <div className="space-y-3">
              <a href="mailto:info@elsyplus.ru" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm py-1 break-all">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@elsyplus.ru
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
              className="inline-flex items-center px-5 py-2.5 bg-navy-600 text-white rounded-xl font-semibold text-sm hover:bg-navy-700 transition-colors cursor-pointer"
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
              © {currentYear} ElsyPlus. Все права защищены.
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
