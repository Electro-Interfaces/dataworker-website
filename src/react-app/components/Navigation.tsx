import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Главная', href: '/' },
    { 
      name: 'Продукты', 
      href: '/products', 
      hasDropdown: true,
      dropdownKey: 'products',
      dropdownItems: [
        { name: 'TradeCorp', href: '/products/trade-corp', description: 'Корпоративный топливный процессинг' },
        { name: 'TradeGate', href: '/products/trade-gate', description: 'Система интеграции онлайн-заказов' },
        { name: 'TradeFrame', href: '/products/trade-frame', description: 'Веб-платформа управления и аналитики' },
        { name: 'TradeTerminal', href: '/products/dw-terminal', description: 'Автономные терминалы оплаты' },
        { name: 'TradeStation', href: '/products/dw-station', description: 'Программный комплекс для управления оборудованием АЗС/АГЗС' },
      ]
    },
    {
      name: 'Услуги',
      href: '/services',
      hasDropdown: true,
      dropdownKey: 'services',
      dropdownItems: [
        { name: 'Разработка AI-решений', href: '/services/ai-solutions', description: 'Создание интеллектуальных систем' },
        { name: 'Создание личных кабинетов', href: '/services/customer-portals', description: 'Разработка пользовательских интерфейсов' },
        { name: 'Разработка мобильных приложений', href: '/services/mobile-apps', description: 'iOS и Android приложения' },
        { name: 'Разработка процессинговых решений', href: '/services/processing-solutions', description: 'Системы обработки платежей' },
        { name: 'Разработка терминалов', href: '/services/terminal-development', description: 'Аппаратно-программные комплексы' },
        { name: 'Интеграция Host-to-Host', href: '/services/host-to-host', description: 'Прямые интеграции с банками' },
      ]
    },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <div className="text-dark-gray group-hover:text-primary transition-colors duration-300">
              <span className="font-display text-xl lg:text-2xl font-bold">
                Data<span className="text-primary">Worker</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-baseline space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (item.dropdownKey === 'products') setProductsDropdownOpen(true);
                      if (item.dropdownKey === 'services') setServicesDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.dropdownKey === 'products') setProductsDropdownOpen(false);
                      if (item.dropdownKey === 'services') setServicesDropdownOpen(false);
                    }}
                  >
                    <button
                      className="inline-flex items-center px-4 py-2 text-base font-medium text-dark-gray hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        (item.dropdownKey === 'products' && productsDropdownOpen) ||
                        (item.dropdownKey === 'services' && servicesDropdownOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    {((item.dropdownKey === 'products' && productsDropdownOpen) ||
                      (item.dropdownKey === 'services' && servicesDropdownOpen)) && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[320px] overflow-hidden">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-3 hover:bg-primary/5 transition-colors duration-200 group"
                            >
                              <div className="font-semibold text-dark-gray group-hover:text-primary transition-colors duration-200 text-sm">
                                {dropdownItem.name}
                              </div>
                              <div className="text-medium-gray text-xs mt-0.5">
                                {dropdownItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="px-4 py-2 inline-block text-base font-medium text-dark-gray hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-dark-gray hover:bg-primary/5 hover:text-primary transition-all duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="absolute top-full left-0 right-0 bg-white backdrop-blur-md shadow-lg border-t border-gray-100">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <div className="block font-semibold text-dark-gray mb-3 text-sm">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-3 mb-4">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block text-medium-gray hover:text-primary transition-colors duration-200 text-sm font-medium"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-dark-gray hover:text-primary transition-colors duration-200 font-semibold text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
