import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, User } from "lucide-react";
import { Link, useLocation } from "react-router";
import { navItems } from "@/react-app/data/navigation";
import LoginModal from "./LoginModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative.group\\/menu')) {
        setProductsDropdownOpen(false);
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownToggle = (dropdownKey: 'products' | 'services') => {
    if (dropdownKey === 'products') {
      setProductsDropdownOpen(!productsDropdownOpen);
      setServicesDropdownOpen(false);
    }
    if (dropdownKey === 'services') {
      setServicesDropdownOpen(!servicesDropdownOpen);
      setProductsDropdownOpen(false);
    }
  };

  const handleDropdownEnter = (dropdownKey: 'products' | 'services') => {
    if (dropdownKey === 'products') setProductsDropdownOpen(true);
    if (dropdownKey === 'services') setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = (dropdownKey: 'products' | 'services') => {
    if (dropdownKey === 'products') setProductsDropdownOpen(false);
    if (dropdownKey === 'services') setServicesDropdownOpen(false);
  };

  const isDropdownOpen = (dropdownKey: 'products' | 'services') => {
    return dropdownKey === 'products' ? productsDropdownOpen : servicesDropdownOpen;
  };

  const closeAllDropdowns = () => {
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.25)] border-b border-gray-100/50'
          : 'bg-white/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group relative z-50">
            <span className="font-display text-3xl font-bold tracking-tight leading-none">
              <span className="text-navy-700">Elsy</span><span className="text-navy-500 font-extrabold">Plus</span>
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-navy-400/70 leading-none mt-1">
              IT & Automation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group/menu">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.dropdownKey)}
                    onMouseLeave={() => handleDropdownLeave(item.dropdownKey)}
                  >
                    <button
                      onClick={() => handleDropdownToggle(item.dropdownKey)}
                      className="inline-flex items-center px-5 py-3 text-base font-medium rounded-full transition-all duration-300 text-navy-600 hover:bg-navy-50 hover:text-navy-800"
                    >
                      {item.name}
                      <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                        isDropdownOpen(item.dropdownKey) ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen(item.dropdownKey) && (
                      <div className="absolute top-full left-0 pt-4 z-50 w-[380px]">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 overflow-hidden animate-fade-in">
                          {/* Link to main section */}
                          <Link
                            to={item.href}
                            className="flex items-center justify-between p-4 rounded-xl bg-navy-50 hover:bg-navy-100 transition-colors duration-200 mb-2"
                            onClick={closeAllDropdowns}
                          >
                            <span className="font-semibold text-navy-600">Все {item.name.toLowerCase()}</span>
                            <ArrowRight className="w-5 h-5 text-navy-600" />
                          </Link>
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-start p-4 rounded-xl hover:bg-navy-50 transition-colors duration-200 group/item"
                              onClick={closeAllDropdowns}
                            >
                              <div className="flex-1">
                                <div className="font-semibold text-navy-700 text-base group-hover/item:text-navy-600 transition-colors">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-medium-gray text-sm mt-1 leading-relaxed">
                                  {dropdownItem.description}
                                </div>
                              </div>
                              <ArrowRight className="w-5 h-5 text-gray-300 group-hover/item:text-navy-600 opacity-0 group-hover/item:opacity-100 transition-all transform -translate-x-2 group-hover/item:translate-x-0 mt-1" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="px-5 py-3 inline-block text-base font-medium rounded-full transition-all duration-300 text-navy-600 hover:bg-navy-50 hover:text-navy-800"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 pl-8">
            <button
              onClick={() => setLoginModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold transition-all duration-300 border-2 border-navy-600 text-navy-600 hover:bg-navy-50"
            >
              <User className="w-5 h-5" />
              Личный кабинет
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-navy-600 text-white hover:bg-navy-700"
            >
              Связаться с нами
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-all duration-200 text-dark-gray hover:bg-gray-100"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white pt-28 px-6 overflow-y-auto transition-all duration-300 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="space-y-8">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-100 pb-6 last:border-0">
              {item.hasDropdown ? (
                <>
                  <Link
                    to={item.href}
                    className="block font-display font-bold text-navy-600 text-xl mb-4 hover:text-navy-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="space-y-4 pl-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block text-navy-500 hover:text-navy-700 transition-colors text-lg py-1"
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
                  className="block font-display font-bold text-navy-600 text-xl hover:text-navy-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-6 space-y-4">
            <button
              onClick={() => { setIsOpen(false); setLoginModalOpen(true); }}
              className="flex items-center justify-center gap-2 w-full py-5 border-2 border-navy-600 text-navy-600 rounded-2xl font-semibold text-xl active:scale-95 transition-transform"
            >
              <User className="w-6 h-6" />
              Личный кабинет
            </button>
            <Link
              to="/contact"
              className="block w-full text-center py-5 bg-navy-600 text-white rounded-2xl font-semibold text-xl shadow-lg active:scale-95 transition-transform hover:bg-navy-700"
              onClick={() => setIsOpen(false)}
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      </div>
    </nav>

    <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </>
  );
};

export default Navigation;
