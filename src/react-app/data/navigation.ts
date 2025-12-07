// Types
export interface NavLink {
  name: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavItemWithDropdown {
  name: string;
  href: string;
  hasDropdown: true;
  dropdownKey: 'products' | 'services';
  dropdownItems: NavLink[];
}

export interface NavItemSimple {
  name: string;
  href: string;
  hasDropdown?: false;
}

export type NavItem = NavItemWithDropdown | NavItemSimple;

// Products data
export const products: NavLink[] = [
  {
    name: 'TradeFrame',
    href: '/products/trade-frame',
    description: 'Облачная платформа управления сетью АЗС',
    icon: 'monitor',
  },
  {
    name: 'TradePoint',
    href: '/products/dw-terminal',
    description: 'Системы управления АЗС',
    icon: 'smartphone',
  },
  {
    name: 'TradeCorp',
    href: '/products/trade-corp',
    description: 'B2B процессинг и карты',
    icon: 'briefcase',
  },
  {
    name: 'TradeGate',
    href: '/products/trade-gate',
    description: 'Интеграция агрегаторов',
    icon: 'share',
  },
  {
    name: 'TradeBonus',
    href: '/products/dw-loyalty',
    description: 'Программа лояльности',
    icon: 'gift',
  },
];

// Services data
export const services: NavLink[] = [
  {
    name: 'AI Решения',
    href: '/services/ai-solutions',
    description: 'Прогнозы и компьютерное зрение',
  },
  {
    name: 'Цифровые платформы',
    href: '/services/digital-platforms',
    description: 'Web-порталы, SaaS и ЛК',
  },
  {
    name: 'Мобильная разработка',
    href: '/services/mobile-development',
    description: 'iOS, Android и SuperApps',
  },
  {
    name: 'Процессинговые системы',
    href: '/services/processing-systems',
    description: 'Биллинг и маршрутизация',
  },
  {
    name: 'IoT и Терминалы',
    href: '/services/iot-terminals',
    description: 'ПО для оборудования и киосков',
  },
];

// Company links
export const companyLinks: NavLink[] = [
  { name: 'О нас', href: '/about' },
  { name: 'Контакты', href: '/contact' },
];

// Legal links
export const legalLinks: NavLink[] = [
  { name: 'Политика конфиденциальности', href: '/privacy' },
  { name: 'Условия использования', href: '/terms' },
];

// Main navigation items for header
export const navItems: NavItem[] = [
  { name: 'Главная', href: '/' },
  {
    name: 'Продукты',
    href: '/products',
    hasDropdown: true,
    dropdownKey: 'products',
    dropdownItems: products,
  },
  {
    name: 'Услуги',
    href: '/services',
    hasDropdown: true,
    dropdownKey: 'services',
    dropdownItems: services,
  },
  { name: 'О нас', href: '/about' },
];

// Product categories for homepage
export interface ProductCategory {
  name: string;
  category: string;
  description: string;
  gradient: string;
  link: string;
  featured?: boolean;
}

export const productCategories: ProductCategory[] = [
  {
    name: 'TradeFrame',
    category: 'Cloud Platform',
    description: 'Флагманская платформа для централизованного управления сетью АЗС. Мониторинг, ценообразование и аналитика в едином окне.',
    gradient: 'from-navy-700 to-navy-800',
    link: '/products/trade-frame',
    featured: true,
  },
  {
    name: 'TradeCorp',
    category: 'Fintech Core',
    description: 'Процессинг топливных карт и биллинг корпоративных клиентов.',
    gradient: 'from-navy-700 to-navy-800',
    link: '/products/trade-corp',
  },
  {
    name: 'TradeGate',
    category: 'Integration Hub',
    description: 'Интеграция с топливными агрегаторами: Яндекс.Заправки, СберАвто и другими. Приём онлайн-заказов.',
    gradient: 'from-navy-700 to-navy-800',
    link: '/products/trade-gate',
  },
  {
    name: 'TradePoint',
    category: 'Front-Office',
    description: 'Системы управления для любых типов АЗС: автоматических, ведомственных и классических с оператором.',
    gradient: 'from-navy-700 to-navy-800',
    link: '/products/dw-terminal',
  },
  {
    name: 'TradeBonus',
    category: 'Loyalty System',
    description: 'Маркетинговая платформа и мобильное приложение для клиентов.',
    gradient: 'from-navy-700 to-navy-800',
    link: '/products/dw-loyalty',
  },
];

// Service categories for homepage
export interface ServiceCategory {
  name: string;
  desc: string;
  href: string;
}

export const serviceCategories: ServiceCategory[] = [
  { name: 'AI Решения', desc: 'Прогнозы и ML', href: '/services/ai-solutions' },
  { name: 'Web Платформы', desc: 'High-load порталы', href: '/services/digital-platforms' },
  { name: 'Мобильная разработка', desc: 'iOS & Android', href: '/services/mobile-development' },
  { name: 'IoT Решения', desc: 'Киоски и терминалы', href: '/services/iot-terminals' },
];
