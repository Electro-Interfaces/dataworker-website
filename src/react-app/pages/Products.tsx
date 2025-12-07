import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import { Link } from 'react-router';
import {
  ArrowRight,
  Globe,
  Smartphone,
  CreditCard,
  Gift,
  Workflow,
  Cloud,
  RefreshCw,
  Shield,
  Zap,
  Calculator
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function ProductsPage() {
  usePageMeta({
    title: 'Продукты',
    description: 'Продукты экосистемы TradeSuite для автоматизации топливного ритейла',
    keywords: 'TradeFrame, TradePoint, TradeCorp, TradeGate, TradeBonus, продукты, топливный процессинг, автоматизация АЗС'
  });
  const products = [
    {
      name: 'TradeFrame',
      category: 'Cloud Platform',
      href: '/products/trade-frame',
      description: 'Облачная платформа для централизованного управления сетью АЗС. Ценообразование, мониторинг резервуаров, сменные отчёты, уведомления в Telegram — всё в одном интерфейсе.',
      features: ['Управление ценами по всей сети', 'Мониторинг резервуаров в реальном времени', 'Уведомления в Telegram и Email', 'RBAC с 40+ разрешениями'],
      icon: <Globe className="w-8 h-8" />,
      image: 'images/dashboard-screen.png',
      stats: { label: 'Выручка', value: '₽ 3.7M' }
    },
    {
      name: 'TradePoint',
      category: 'Front-Office',
      href: '/products/dw-terminal',
      description: 'Программные решения для управления АЗС любого типа: автоматических, с оператором или комбинированных. AutoPoint, FuelPoint, SelfPoint — единая платформа для всех форматов.',
      features: ['AutoPoint — АКАЗС без персонала', 'FuelPoint — рабочее место оператора', 'SelfPoint — терминал самообслуживания', 'Интеграция с TradeFrame'],
      icon: <Smartphone className="w-8 h-8" />,
      image: null,
      stats: { label: 'Типов терминалов', value: '5' }
    },
    {
      name: 'TradeCorp',
      category: 'B2B Processing',
      href: '/products/trade-corp',
      description: 'Система управления топливным процессингом. Топливные карты, контрагенты, договоры и финансы. Полный цикл работы с корпоративными клиентами.',
      features: ['Корпоративные топливные карты', 'Гибкие лимиты и ограничения', 'Личный кабинет для клиентов', 'Интеграция с 1С и ERP'],
      icon: <CreditCard className="w-8 h-8" />,
      image: 'images/corp-cards.png',
      stats: { label: 'Активных карт', value: '12,847' }
    },
    {
      name: 'TradeGate',
      category: 'Integration Hub',
      href: '/products/trade-gate',
      description: 'Интеграция с топливными агрегаторами: Яндекс.Заправки, СберАвто и другими. Принимайте онлайн-заказы без изменения существующей инфраструктуры.',
      features: ['Яндекс.Заправки и СберАвто', 'Обработка онлайн-заказов', 'Мониторинг транзакций', 'Автоматическая сверка'],
      icon: <Workflow className="w-8 h-8" />,
      image: null,
      stats: { label: 'Заказов сегодня', value: '4,519' }
    },
    {
      name: 'TradeBonus',
      category: 'Loyalty System',
      href: '/products/dw-loyalty',
      description: 'B2C программа лояльности для розничных клиентов. Бонусные баллы, скидки и персональные предложения для увеличения повторных покупок.',
      features: ['Бонусные баллы за покупки', 'Персональные предложения', 'Мобильное приложение', 'Аналитика поведения клиентов'],
      icon: <Gift className="w-8 h-8" />,
      image: null,
      stats: { label: 'Участников', value: '43,293' }
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-24 lg:py-32 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-navy-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-navy-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <HexagonPattern id="hexagons-products" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-navy-400 animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-wide uppercase">5 продуктов</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Экосистема TradeSuite
          </h1>
          <p className="text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Комплексная автоматизация топливного бизнеса — от терминалов самообслуживания до облачной платформы управления
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-20">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-navy-600 to-navy-700 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>

                    {/* Main container */}
                    <div className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 rounded-2xl p-6 overflow-hidden min-h-[280px] flex flex-col justify-center">
                      {/* Background decorations */}
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-navy-400/10 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-navy-500/10 rounded-full blur-2xl"></div>

                      {product.image ? (
                        /* Screenshot */
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
                          <img
                            src={`${import.meta.env.BASE_URL}${product.image}`}
                            alt={product.name}
                            className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        /* Icon-based visual */
                        <div className="text-center py-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-navy-600 to-navy-700 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl">
                            {product.icon}
                          </div>
                          <div className="text-4xl font-bold text-white mb-2">{product.stats.value}</div>
                          <div className="text-sm text-navy-200/80 uppercase tracking-wider">{product.stats.label}</div>
                        </div>
                      )}

                      {/* Stats overlay for image cards */}
                      {product.image && (
                        <div className="absolute bottom-4 right-4 p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100">
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">{product.stats.label}</div>
                          <div className="text-lg font-bold text-navy-600">{product.stats.value}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-sm font-bold text-navy-600 uppercase tracking-wide mb-3">
                    {product.category}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                          <div className="w-2 h-2 bg-navy-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={product.href}
                    className="inline-flex items-center px-6 py-3 bg-navy-950 text-white rounded-xl font-semibold hover:bg-navy-900 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Подробнее о {product.name}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section id="deployment" className="py-20 lg:py-28 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Варианты развёртывания
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий вариант размещения системы — в облаке или на вашей инфраструктуре
            </p>
          </div>

          {/* Two deployment options */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Cloud option - recommended */}
            <div className="relative bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl p-8 border-2 border-navy-200">
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 bg-navy-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                  Рекомендуем
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-navy-600 rounded-xl flex items-center justify-center text-white">
                  <Cloud className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Облачное решение</h3>
                  <p className="text-sm text-gray-500">На серверах DataWorker</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Быстрый старт за несколько дней',
                  'Предсказуемые ежемесячные платежи',
                  'Обновления и поддержка включены',
                  'Резервное копирование и мониторинг 24/7',
                  'Масштабирование по мере роста',
                  'Не нужны собственные IT-специалисты'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-navy-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-navy-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Идеально для:</span> большинства сетей АЗС, которые хотят сфокусироваться на бизнесе, а не на IT
                </p>
              </div>
            </div>

            {/* On-premise option */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center text-white">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">На вашей инфраструктуре</h3>
                  <p className="text-sm text-gray-500">On-premise развёртывание</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Полный контроль над данными',
                  'Размещение в вашем дата-центре',
                  'Соответствие внутренним политикам ИБ',
                  'Интеграция с корпоративной сетью',
                  'Возможность доработки под требования',
                  'Техподдержка и обновления по договору'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Идеально для:</span> крупных сетей с собственной IT-инфраструктурой и строгими требованиями к безопасности
                </p>
              </div>
            </div>
          </div>

          {/* Cloud benefits */}
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white">
                Почему облако — выгодный выбор
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Calculator className="w-6 h-6" />,
                  title: 'Нет капитальных затрат',
                  description: 'Вместо крупной разовой инвестиции — фиксированная ежемесячная плата, которую легко планировать'
                },
                {
                  icon: <RefreshCw className="w-6 h-6" />,
                  title: 'Обновления бесплатно',
                  description: 'Новые функции и улучшения появляются автоматически, без дополнительных платежей'
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'Экономия на IT',
                  description: 'Не нужно содержать серверы, системных администраторов и закупать лицензии'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-navy-200 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Не уверены какой вариант подходит? <Link to="/contact" className="text-navy-600 font-medium hover:underline">Проконсультируем бесплатно</Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-lg text-navy-100 mb-8 max-w-2xl mx-auto">
            Расскажем подробнее о продуктах, рассчитаем стоимость и проведём демонстрацию
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-navy-950 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Получить консультацию
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
