import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { navItems } from "@/react-app/data/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [showTradeSuite, setShowTradeSuite] = useState(false);
  const location = useLocation();

  // Toggle brand name: 45s DataWorker, 15s TradeSuite
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTradeSuite((prev) => !prev);
    }, showTradeSuite ? 15000 : 45000);
    return () => clearTimeout(timeout);
  }, [showTradeSuite]);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.25)] border-b border-gray-100/50'
          : 'bg-white/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Logo - Hexagon DW */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-4 group relative z-50">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="DataWorker"
              className="w-12 h-12 rounded-2xl shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col overflow-hidden">
              <div className="relative h-7">
                <span
                  className={`font-display text-2xl font-bold tracking-tight leading-none absolute left-0 transition-all duration-500 ${
                    showTradeSuite ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
                >
                  <span className="text-dark-gray">Data</span><span className="text-blue-800">Worker</span>
                </span>
                <span
                  className={`font-display text-2xl font-bold tracking-tight leading-none absolute left-0 transition-all duration-500 ${
                    showTradeSuite ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="text-dark-gray">Trade</span><span className="text-blue-800">Suite</span>
                </span>
              </div>
              <span className="text-xs font-medium tracking-widest uppercase opacity-60 leading-none mt-1.5 text-medium-gray">
                Digital Solutions
              </span>
            </div>
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
                      className="inline-flex items-center px-5 py-3 text-base font-medium rounded-full transition-all duration-300 text-dark-gray hover:bg-primary/5 hover:text-primary"
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
                            className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 mb-2"
                            onClick={closeAllDropdowns}
                          >
                            <span className="font-semibold text-primary">Все {item.name.toLowerCase()}</span>
                            <ArrowRight className="w-5 h-5 text-primary" />
                          </Link>
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group/item"
                              onClick={closeAllDropdowns}
                            >
                              <div className="flex-1">
                                <div className="font-semibold text-dark-gray text-base group-hover/item:text-primary transition-colors">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-medium-gray text-sm mt-1 leading-relaxed">
                                  {dropdownItem.description}
                                </div>
                              </div>
                              <ArrowRight className="w-5 h-5 text-gray-300 group-hover/item:text-primary opacity-0 group-hover/item:opacity-100 transition-all transform -translate-x-2 group-hover/item:translate-x-0 mt-1" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="px-5 py-3 inline-block text-base font-medium rounded-full transition-all duration-300 text-dark-gray hover:bg-primary/5 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block pl-8">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-primary text-white hover:bg-primary-dark"
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
                    className="block font-display font-bold text-dark-gray text-xl mb-4 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="space-y-4 pl-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block text-medium-gray hover:text-primary transition-colors text-lg py-1"
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
                  className="block font-display font-bold text-dark-gray text-xl hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-6">
            <Link
              to="/contact"
              className="block w-full text-center py-5 bg-primary text-white rounded-2xl font-semibold text-xl shadow-lg active:scale-95 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
