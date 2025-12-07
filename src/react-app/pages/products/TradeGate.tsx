import PageLayout from '@/react-app/components/PageLayout';
import ProductHero from '@/react-app/components/ProductHero';
import ModuleTabs from '@/react-app/components/ModuleTabs';
import GradientSection from '@/react-app/components/GradientSection';
import AdvantagesGrid from '@/react-app/components/AdvantagesGrid';
import CTASection from '@/react-app/components/CTASection';
import DeploymentOptions from '@/react-app/components/DeploymentOptions';
import {
  OrdersIllustration,
  RoutingIllustration,
  MonitoringIllustration,
  ReportsIllustration,
  IntegrationsIllustration,
  AdminIllustration
} from '@/react-app/components/TradeGateIllustrations';
import {
  Smartphone,
  Store,
  FileText,
  Activity,
  Workflow,
  Shield,
  TrendingUp,
  Zap,
  RefreshCw,
  Globe,
  Settings,
  BarChart3
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

// Hero Illustration Component
const HeroIllustration = () => (
  <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm overflow-hidden shadow-2xl p-6">
    <div className="w-[380px] h-[240px] relative">
      {/* Center hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
        <Workflow className="w-10 h-10 text-white" />
      </div>
      {/* Connecting nodes */}
      <div className="absolute top-4 left-8 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
        <Smartphone className="w-6 h-6 text-white/70" />
      </div>
      <div className="absolute top-4 right-8 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
        <Store className="w-6 h-6 text-white/70" />
      </div>
      <div className="absolute bottom-4 left-8 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
        <Activity className="w-6 h-6 text-white/70" />
      </div>
      <div className="absolute bottom-4 right-8 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
        <FileText className="w-6 h-6 text-white/70" />
      </div>
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 240">
        <line x1="65" y1="60" x2="150" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="315" y1="60" x2="230" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="65" y1="180" x2="150" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="315" y1="180" x2="230" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    </div>
    {/* Stats badge */}
    <div className="absolute -bottom-4 -left-8 p-4 bg-gradient-to-r from-blue-600/90 to-blue-800/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
      <span className="text-blue-100/80 text-[10px] uppercase tracking-wider block mb-1">Обработано сегодня</span>
      <span className="text-white font-bold text-xl">4,519</span>
    </div>
  </div>
);

export default function TradeGatePage() {
  usePageMeta({
    title: 'TradeGate',
    description: 'Интеграция с топливными агрегаторами',
    keywords: 'TradeGate, интеграция, агрегаторы, мобильные приложения, API'
  });

  const systemModules = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Приём заказов',
      subtitle: '/orders',
      description: 'Получение и обработка заказов от мобильных приложений в реальном времени. Поддержка различных протоколов обмена данными. Автоматическая валидация входящих запросов и маршрутизация по правилам.',
      features: ['Прием заказов 24/7', 'Валидация данных', 'Реальное время', 'Мульти-протоколы'],
      illustration: <OrdersIllustration />
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: 'Передача в сети',
      subtitle: '/routing',
      description: 'Преобразование протоколов и маршрутизация заказов в нужные торговые сети. Автоматический выбор оптимального маршрута. Гарантированная доставка с повторными попытками при сбоях.',
      features: ['Преобразование протоколов', 'Умная маршрутизация', 'Гарантия доставки', 'Retry-механизмы'],
      illustration: <RoutingIllustration />
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Мониторинг',
      subtitle: '/monitoring',
      description: 'Отслеживание статуса каждого заказа в реальном времени. Дашборды с ключевыми метриками. Мгновенные уведомления об ошибках и критических событиях.',
      features: ['Статусы в реальном времени', 'Дашборды метрик', 'Алерты и уведомления', 'История операций'],
      illustration: <MonitoringIllustration />
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Отчётность',
      subtitle: '/reports',
      description: 'Корректная передача данных для отчетности и бухгалтерии. Автоматическое формирование документов. Экспорт в различных форматах для интеграции с учётными системами.',
      features: ['Автоотчёты', 'Документооборот', 'Экспорт Excel/PDF', 'Интеграция с 1С'],
      illustration: <ReportsIllustration />
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Интеграции',
      subtitle: '/integrations',
      description: 'Готовые коннекторы для популярных мобильных приложений и торговых сетей. Гибкий API для кастомных интеграций. Документация и SDK для разработчиков.',
      features: ['Готовые коннекторы', 'REST API', 'Webhooks', 'SDK для разработчиков'],
      illustration: <IntegrationsIllustration />
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Администрирование',
      subtitle: '/admin',
      description: 'Управление пользователями и правами доступа. Настройка правил маршрутизации. Конфигурация уведомлений и алертов. Журнал аудита всех действий.',
      features: ['Роли и права', 'Правила маршрутизации', 'Настройка алертов', 'Журнал аудита'],
      illustration: <AdminIllustration />
    }
  ];

  const advantages = [
    { icon: <Workflow className="w-6 h-6" />, title: 'Унификация протоколов', description: 'Единый формат обмена данными между множеством систем' },
    { icon: <Shield className="w-6 h-6" />, title: 'Прозрачность', description: 'Все участники видят актуальные статусы заказов' },
    { icon: <RefreshCw className="w-6 h-6" />, title: 'Надёжность', description: 'Встроенные механизмы контроля ошибок и retry' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Масштабируемость', description: 'Лёгкое подключение новых приложений и сетей' },
    { icon: <Zap className="w-6 h-6" />, title: 'Скорость', description: 'Обработка тысяч заказов в секунду' },
    { icon: <Globe className="w-6 h-6" />, title: 'Доступность', description: 'Работа 24/7 с SLA 99.9%' }
  ];

  const targetAudience = [
    {
      icon: <Store className="w-8 h-8" />,
      title: 'Торговые сети',
      description: 'Подключение к популярным сервисам заказов без сложной разработки'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Мобильные приложения',
      description: 'Доступ к широкому пулу поставщиков через единый интерфейс'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Агрегаторы',
      description: 'Централизованное управление заказами из разных источников'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <ProductHero
        title="Trade"
        titleAccent="Gate"
        badge="Integration Hub"
        badgeColor="green"
        description="Система интеграции онлайн-заказов."
        subdescription="Связующее звено между приложениями и торговыми сетями."
        illustration={<HeroIllustration />}
        patternId="hexagons-gate"
      />

      {/* System Modules */}
      <ModuleTabs
        title="Функции TradeGate"
        subtitle="Технологический посредник для корректного обмена данными"
        modules={systemModules}
      />

      {/* Advantages Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AdvantagesGrid
            title="Преимущества TradeGate"
            subtitle="Почему компании выбирают нашу платформу интеграции"
            advantages={advantages}
            variant="light"
          />
        </div>
      </section>

      {/* Target Audience Section */}
      <GradientSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Для кого TradeGate
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Решение для всех участников процесса онлайн-заказов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {targetAudience.map((audience, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
              <p className="text-blue-100">{audience.description}</p>
            </div>
          ))}
        </div>
      </GradientSection>

      <DeploymentOptions />

      {/* CTA Section */}
      <CTASection
        title="Готовы подключить интеграцию?"
        subtitle="Свяжитесь с нами для обсуждения интеграции TradeGate в вашу инфраструктуру"
        primaryLink={{ href: '/contact', text: 'Обсудить проект' }}
        secondaryLink={{ href: '/products/trade-frame', text: 'Платформа TradeFrame' }}
      />
    </PageLayout>
  );
}
