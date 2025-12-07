import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';
import { Link } from 'react-router';
import {
  ArrowRight,
  Cpu,
  Globe,
  Smartphone,
  CheckCircle2,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Home() {
  usePageMeta({
    title: 'Главная',
    description: 'DataWorker — разработка программного обеспечения для автоматизации бизнеса. Экосистема TradeSuite для управления сетью АЗС и топливного ритейла.',
    keywords: 'АЗС, автоматизация, топливный ритейл, TradeSuite, DataWorker, программное обеспечение'
  });
  const products = [
    {
      name: 'TradeFrame',
      category: 'Cloud Platform',
      description: 'Флагманская платформа для централизованного управления сетью АЗС. Мониторинг, ценообразование и аналитика в едином окне.',
      image: '/images/tradeframe-preview.png',
      gradient: 'from-navy-600 to-navy-800',
      link: '/products/trade-frame',
      icon: <Globe className="w-6 h-6 text-white" />,
      featured: true // Флагманский продукт
    },
    {
      name: 'TradeCorp',
      category: 'Fintech Core',
      description: 'Процессинг топливных карт и биллинг корпоративных клиентов.',
      gradient: 'from-navy-600 to-navy-800',
      link: '/products/trade-corp',
      icon: <ShieldCheck className="w-6 h-6 text-white" />
    },
    {
      name: 'TradeGate',
      category: 'Integration Hub',
      description: 'Интеграция с топливными агрегаторами: Яндекс.Заправки, СберАвто и другими. Приём онлайн-заказов.',
      gradient: 'from-navy-600 to-navy-800',
      link: '/products/trade-gate',
      icon: <Globe className="w-6 h-6 text-white" />
    },
    {
      name: 'TradePoint',
      category: 'Front-Office',
      description: 'Системы управления для любых типов АЗС: автоматических, ведомственных и классических с оператором.',
      gradient: 'from-navy-600 to-navy-800',
      link: '/products/dw-terminal',
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      name: 'TradeBonus',
      category: 'Loyalty System',
      description: 'Маркетинговая платформа и мобильное приложение для клиентов.',
      gradient: 'from-navy-600 to-navy-800',
      link: '/products/dw-loyalty',
      icon: <Smartphone className="w-6 h-6 text-white" />
    }
  ];

  const services = [
    { name: 'AI Решения', icon: <Zap className="w-6 h-6" />, desc: 'Прогнозы и ML' },
    { name: 'Web Платформы', icon: <Globe className="w-6 h-6" />, desc: 'High-load порталы' },
    { name: 'Мобильная разработка', icon: <Smartphone className="w-6 h-6" />, desc: 'iOS & Android' },
    { name: 'IoT Решения', icon: <Cpu className="w-6 h-6" />, desc: 'Киоски и терминалы' }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-navy-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-navy-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <HexagonPattern id="hexagons-home" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="flex flex-col items-center w-full mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <div className="w-2 h-2 rounded-full bg-navy-400 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">TradeSuite Ecosystem</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight tracking-tight w-full whitespace-nowrap text-center">
              Создаем цифровой фундамент бизнеса
            </h1>

            <div className="flex flex-col items-center max-w-4xl mx-auto">
              <p className="text-lg lg:text-xl text-navy-100/90 leading-relaxed mb-8 font-light text-center">
                DataWorker развивает экосистему TradeSuite — комплекс продуктов и услуг для управления сетью торговых объектов на рынке нефтепродуктообеспечения.
              </p>

              <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up mb-12">
                <Link to="/products" className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-navy-950 rounded-2xl font-bold text-base lg:text-lg shadow-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Продукты TradeSuite
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="px-6 py-3 lg:px-8 lg:py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold text-base lg:text-lg hover:bg-white/20 transition-all duration-300">
                  Услуги разработки
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-16 border-t border-white/10 pt-8">
               <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">20</div>
                  <div className="text-xs lg:text-sm text-navy-200/60 uppercase tracking-wider font-medium">Лет опыта</div>
               </div>
               <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs lg:text-sm text-navy-200/60 uppercase tracking-wider font-medium">Проектов</div>
               </div>
               <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs lg:text-sm text-navy-200/60 uppercase tracking-wider font-medium">Поддержка</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* TradeSuite Ecosystem Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Экосистема <span className="text-navy-600">TradeSuite</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-4">
              Полный цикл автоматизации топливного ритейла: от управления оборудованием на АЗС до облачной аналитики и программ лояльности.
            </p>
            <Link
              to="/products#deployment"
              className="inline-flex items-center gap-3 mt-2 px-5 py-2.5 bg-gradient-to-r from-navy-100/50 to-navy-200/50 hover:from-navy-100 hover:to-navy-200 border border-navy-300 hover:border-navy-400 rounded-full text-sm font-medium text-navy-800 hover:text-navy-900 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <span>SaaS-подписка с гибким развёртыванием — облако или On-Premise</span>
              <svg className="w-4 h-4 text-navy-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.name}
                to={product.link}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 flex flex-col ${
                    product.featured
                      ? 'lg:col-span-3 lg:flex-row lg:items-stretch bg-gray-900 text-white hover:bg-gray-800 border border-gray-800 hover:border-gray-700 hover:shadow-2xl p-0'
                      : 'bg-gray-50 hover:bg-white border border-gray-100 hover:border-navy-100 hover:shadow-2xl p-8'
                }`}
              >
                <div className={`${product.featured ? 'lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center' : ''} relative z-10`}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                      {product.icon}
                    </div>
                    <div className={`text-sm font-bold mb-2 uppercase tracking-wide ${product.featured ? 'text-navy-400' : 'text-navy-600'}`}>
                        {product.category}
                    </div>
                    <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${product.featured ? 'text-white' : 'text-gray-900 group-hover:text-navy-700'} transition-colors`}>
                      {product.name}
                    </h3>
                    <p className={`leading-relaxed mb-6 ${product.featured ? 'text-gray-300 text-lg' : 'text-gray-600'}`}>
                      {product.description}
                    </p>
                    
                    <div className={`flex items-center font-semibold group-hover:translate-x-2 transition-transform ${product.featured ? 'text-white' : 'text-navy-600'}`}>
                        Подробнее <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                </div>
                
                {/* Decorative Background for Standard Cards */}
                {!product.featured && (
                    <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${product.gradient} opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity pointer-events-none`}></div>
                )}
                
                {/* Featured Card Visual */}
                {product.featured && (
                    <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden border-l border-white/10">
                        {/* Background decorations */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-navy-400/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-navy-500/20 rounded-full blur-3xl"></div>

                        {/* Dashboard Screenshot */}
                        <div className="relative z-10 p-6 h-full flex items-center">
                          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
                            <img
                              src={`${import.meta.env.BASE_URL}images/dashboard-screen.png`}
                              alt={product.name}
                              className="w-full h-auto"
                              loading="lazy"
                            />
                          </div>

                          {/* Stats overlay */}
                          <div className="absolute bottom-8 right-8 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl">
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Выручка сегодня</div>
                            <div className="text-xl font-bold text-navy-600">₽ 3,717,407</div>
                          </div>
                        </div>
                    </div>
                )}
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-navy-600 font-medium transition-colors">
              Перейти в каталог решений <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-navy-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-navy-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                   Профессиональная разработка
                </h2>
                <p className="text-xl text-navy-100 mb-10 leading-relaxed">
                   Не подходит готовое решение? Наша команда инженеров создаст уникальный продукт под ваши задачи. От микроконтроллеров до нейросетей.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                   {services.map((service) => (
                     <div key={service.name} className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
                        <div className="p-2 bg-white/20 rounded-lg text-white">
                           {service.icon}
                        </div>
                        <div>
                           <div className="font-bold text-white">{service.name}</div>
                           <div className="text-sm text-navy-200/70">{service.desc}</div>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mt-12">
                   <Link to="/services" className="px-8 py-4 bg-white text-navy-800 rounded-2xl font-bold hover:bg-navy-50 transition-colors inline-flex items-center shadow-xl">
                      Все услуги
                      <ArrowRight className="w-5 h-5 ml-2" />
                   </Link>
                </div>
              </div>

              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12">
                 <div className="space-y-8">
                    <div className="flex items-start gap-6">
                       <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-6 h-6 text-green-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-white mb-2">Полный цикл (Full Cycle)</h3>
                          <p className="text-navy-100/70">Берем на себя всё: от бизнес-анализа и прототипирования до поддержки серверов 24/7.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6">
                       <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-6 h-6 text-purple-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-white mb-2">Собственный R&D</h3>
                          <p className="text-navy-100/70">Интегрируем передовые технологии (AI, IoT), которые тестируем в собственных продуктах.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6">
                       <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-6 h-6 text-orange-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-white mb-2">Enterprise-уровень</h3>
                          <p className="text-navy-100/70">Опыт работы с федеральными сетями, банками и нефтяными компаниями.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Давайте обсудим вашу задачу
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Оставьте заявку, и мы покажем демо наших продуктов или оценим стоимость разработки.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-navy-950 text-white rounded-2xl font-bold text-xl hover:bg-navy-900 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
          >
            Связаться с нами
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
