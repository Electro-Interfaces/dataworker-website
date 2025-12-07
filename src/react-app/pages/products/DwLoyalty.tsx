import { useState } from 'react';
import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import DeploymentOptions from '@/react-app/components/DeploymentOptions';
import {
  CustomersIllustration,
  BonusesIllustration,
  PromotionsIllustration,
  LevelsIllustration,
  CommunicationsIllustration,
  AnalyticsIllustration,
  MobileAppIllustration,
  LoyaltyAdminIllustration
} from '@/react-app/components/TradeBonusIllustrations';
import { Link } from 'react-router';
import {
  ArrowRight,
  CheckCircle2,
  Gift,
  Users,
  Star,
  Smartphone,
  BarChart3,
  Settings,
  CreditCard,
  TrendingUp,
  Heart,
  Zap,
  Target,
  Award,
  Percent,
  Bell
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function DwLoyaltyPage() {
  usePageMeta({
    title: 'TradeBonus',
    description: 'Программа лояльности и мобильное приложение для клиентов АЗС',
    keywords: 'TradeBonus, программа лояльности, бонусы, мобильное приложение, кэшбэк'
  });
  const [activeModule, setActiveModule] = useState(0);

  const systemModules = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Клиентская база',
      subtitle: '/customers',
      description: 'Единая база всех участников программы лояльности. Профили клиентов с историей покупок, бонусным балансом и персональными предпочтениями. Сегментация по активности, категориям и другим параметрам.',
      features: ['Профили клиентов', 'История покупок', 'Сегментация', 'Персонализация'],
      illustration: <CustomersIllustration />
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Бонусная программа',
      subtitle: '/bonuses',
      description: 'Гибкая настройка начисления и списания бонусов. Правила конвертации, сроки действия, категории товаров. Поддержка различных типов программ: кэшбэк, накопительные скидки, баллы.',
      features: ['Начисление бонусов', 'Правила списания', 'Сроки действия', 'Типы программ'],
      illustration: <BonusesIllustration />
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: 'Акции и скидки',
      subtitle: '/promotions',
      description: 'Создание и управление акциями любой сложности. Персональные предложения, сезонные скидки, промокоды. Автоматический расчёт скидок при покупке.',
      features: ['Конструктор акций', 'Промокоды', 'Персональные скидки', 'Приоритеты акций'],
      illustration: <PromotionsIllustration />
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Уровни лояльности',
      subtitle: '/levels',
      description: 'Многоуровневые программы с прогрессивными привилегиями. Автоматический переход между уровнями по правилам. Эксклюзивные предложения для VIP-клиентов.',
      features: ['Многоуровневость', 'Автопереход', 'Привилегии', 'VIP-программы'],
      illustration: <LevelsIllustration />
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Коммуникации',
      subtitle: '/notifications',
      description: 'Push-уведомления, SMS и email-рассылки. Триггерные кампании по событиям. Персонализированные сообщения на основе поведения клиента.',
      features: ['Push-уведомления', 'SMS и Email', 'Триггерные кампании', 'Персонализация'],
      illustration: <CommunicationsIllustration />
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Аналитика',
      subtitle: '/analytics',
      description: 'Дашборды эффективности программы лояльности. RFM-анализ клиентской базы. Отчёты по акциям, конверсиям и возврату клиентов.',
      features: ['Дашборды KPI', 'RFM-анализ', 'Отчёты по акциям', 'Прогнозы'],
      illustration: <AnalyticsIllustration />
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Мобильное приложение',
      subtitle: '/mobile',
      description: 'Брендированное приложение для клиентов. Виртуальная карта лояльности, история операций, каталог акций. Push-уведомления о новых предложениях.',
      features: ['Виртуальная карта', 'История бонусов', 'Каталог акций', 'Геолокация'],
      illustration: <MobileAppIllustration />
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Администрирование',
      subtitle: '/admin',
      description: 'Управление правилами программы лояльности. Настройка интеграций с кассами и POS-системами. Роли и права доступа для операторов.',
      features: ['Правила программы', 'Интеграции', 'Роли и права', 'Журнал аудита'],
      illustration: <LoyaltyAdminIllustration />
    }
  ];

  const advantages = [
    { icon: <Heart className="w-6 h-6" />, title: 'Удержание клиентов', description: 'Увеличение повторных покупок на 30%' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Рост среднего чека', description: 'Мотивация к увеличению суммы покупки' },
    { icon: <Target className="w-6 h-6" />, title: 'Персонализация', description: 'Индивидуальные предложения каждому' },
    { icon: <Zap className="w-6 h-6" />, title: 'Автоматизация', description: 'Минимум ручной работы операторов' },
    { icon: <Award className="w-6 h-6" />, title: 'Геймификация', description: 'Вовлечение через достижения и уровни' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Аналитика', description: 'Понимание поведения клиентов' }
  ];

  const programTypes = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Бонусная программа',
      description: 'Накопление баллов за покупки с возможностью оплаты ими до 100% следующих покупок',
      gradient: 'from-blue-700 to-indigo-800'
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: 'Накопительные скидки',
      description: 'Прогрессивные скидки в зависимости от суммы покупок за период',
      gradient: 'from-blue-700 to-indigo-800'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Кэшбэк',
      description: 'Возврат процента от покупок на бонусный счёт или карту',
      gradient: 'from-blue-700 to-indigo-800'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <HexagonPattern id="hexagons-loyalty" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">Loyalty Platform</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-[0.9] tracking-tight">
                Trade<span className="text-blue-200">Bonus</span>
              </h1>

              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-10 font-light max-w-xl">
                Платформа управления лояльностью.
                <span className="block mt-2 opacity-80 text-base">Бонусы, акции и персональные предложения для ваших клиентов.</span>
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-6 py-3 bg-white text-blue-900 rounded-xl font-bold text-base shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Запросить демо
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center h-[400px]">
              <div className="relative transform hover:scale-105 transition-all duration-500">
                <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm overflow-hidden shadow-2xl p-6">
                  {/* Loyalty Card Illustration */}
                  <div className="w-[340px] h-[200px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <Gift className="w-8 h-8 text-white" />
                        <span className="text-white font-bold text-lg">TradeBonus</span>
                      </div>
                      <div className="flex gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                    <div className="text-white/60 text-xs uppercase mb-1">Бонусный баланс</div>
                    <div className="text-white text-3xl font-bold mb-4">12,450 ₽</div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-white/60 text-[10px] uppercase">Уровень</div>
                        <div className="text-white text-sm font-medium">Gold</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white/60 text-[10px] uppercase">Кэшбэк</div>
                        <div className="text-white text-sm font-medium">5%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-8 p-4 bg-gradient-to-r from-blue-600/90 to-blue-800/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                  <span className="text-blue-100/80 text-[10px] uppercase tracking-wider block mb-1">Участников</span>
                  <span className="text-white font-bold text-xl">43,293</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 -mb-px z-20">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* System Modules - Interactive Tabs */}
      <section className="bg-gray-50 pt-6 pb-10 lg:pt-8 lg:pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-8 mx-auto max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 mx-auto">
              Функции TradeBonus
            </h2>
            <p className="text-lg text-gray-500 mx-auto">
              Полный набор инструментов для управления лояльностью клиентов
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">
            {/* Tabs - Left side */}
            <div className="lg:col-span-2 flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0">
              {systemModules.map((module, index) => (
                <button
                  key={index}
                  onClick={() => setActiveModule(index)}
                  className={`flex items-center gap-3 p-3 lg:p-3.5 rounded-xl text-left transition-all duration-300 flex-shrink-0 lg:flex-shrink ${
                    activeModule === index
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeModule === index ? 'bg-white/20' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {module.icon}
                  </div>
                  <div className="hidden lg:block">
                    <div className="font-semibold text-sm">{module.title}</div>
                  </div>
                  <span className="lg:hidden font-medium whitespace-nowrap text-sm">{module.title}</span>
                </button>
              ))}
            </div>

            {/* Content - Right side */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-5 lg:p-6 shadow-lg border border-gray-100 min-h-[600px] flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-200">
                    {systemModules[activeModule].icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{systemModules[activeModule].title}</h3>
                </div>

                <p className="text-base text-gray-600 leading-relaxed mb-5">
                  {systemModules[activeModule].description}
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {systemModules[activeModule].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-50">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Spacer to push images to bottom */}
                <div className="flex-grow min-h-4"></div>

                {/* Module Illustration */}
                {systemModules[activeModule].illustration && (
                  <div className="mt-auto group/img relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-sm group-hover/img:opacity-30 transition-opacity"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                      {systemModules[activeModule].illustration}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Types Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Типы программ лояльности
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Выберите модель, которая подходит вашему бизнесу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programTypes.map((program, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${program.gradient} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-white/80">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Преимущества TradeBonus
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Почему компании выбирают нашу платформу лояльности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 text-white">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-blue-100">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DeploymentOptions />

      {/* CTA Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Готовы повысить лояльность клиентов?
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Узнайте, как TradeBonus поможет увеличить повторные продажи
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Запросить демо
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products/trade-frame"
              className="px-8 py-4 bg-gray-100 text-gray-700 border-2 border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all duration-300"
            >
              Платформа TradeFrame
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
