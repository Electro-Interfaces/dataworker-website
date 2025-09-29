import { useState, useEffect } from 'react';
import PageLayout from '@/react-app/components/PageLayout';
import { Fuel, CreditCard, Settings, Infinity, Monitor, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function ProductDwStationPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-scroll through features for demo effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const platformFeatures = [
    {
      icon: <Fuel className="w-8 h-8" />,
      title: 'Тотальный контроль топлива',
      description: 'От резервуара до бака автомобиля. Контролируйте каждую каплю.'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Платежи и технологии вместе',
      description: 'Объедините финансовые и технологические операции в одном бесшовном процессе.'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Управление всей сетью',
      description: 'Меняйте цены и следите за остатками на всех станциях из центрального офиса.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Простая интеграция',
      description: 'Готовые модули для связи с вашей бухгалтерией, ERP и внешними системами.'
    }
  ];

  const keyFeatures = [
    {
      title: 'Управление отпуском топлива',
      description: 'Поддержка любых ТРК и форматов АЗС. Полная защита от несанкционированных действий.',
      highlight: 'fuel-management'
    },
    {
      title: 'Процессинг и расчёты',
      description: 'Приём всех видов оплат: от наличных до мобильных приложений. Гибкая поддержка корпоративных карт и программ лояльности.',
      highlight: 'payment-processing'
    },
    {
      title: 'Маркетинг и сервис',
      description: 'Запускайте акции, управляйте купонами и предоставляйте клиентам удобные личные кабинеты и мобильные приложения.',
      highlight: 'marketing-service'
    },
    {
      title: 'Оперативное управление',
      description: 'Централизованно меняйте цены, анализируйте продажи в реальном времени и получайте кастомные отчеты для принятия решений.',
      highlight: 'operational-management'
    }
  ];

  const integrationLogos = [
    { name: '1С', logo: '1С' },
    { name: 'Парус', logo: 'ПАРУС' },
    { name: 'SAP', logo: 'SAP' },
    { name: 'Oracle', logo: 'Oracle' }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-primary hero-spacing pb-32 lg:pb-40 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(3,155,229,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-6xl lg:text-9xl xl:text-[12rem] font-extralight text-white content-spacing tracking-tighter leading-none">
                <span className="font-black bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">TradeStation</span>
              </h1>
              <h2 className="text-3xl lg:text-6xl xl:text-7xl font-bold text-accent mb-12 lg:mb-16 tracking-tight leading-tight">
                Полный контроль. В одном решении.
              </h2>
              <p className="text-2xl lg:text-3xl xl:text-4xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto lg:mx-0">
                Многофункциональная платформа, объединяющая управление оборудованием АЗС, процессинг и клиентские сервисы. Ваш единый центр управления топливным бизнесом.
              </p>
            </div>

            {/* Clean Station Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-[500px] h-[400px] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center p-8 hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://mocha-cdn.com/01988f5f-0cbe-7d57-99ac-bafebbffc5b0/dw-station-clean.png" 
                    alt="TradeStation Management System"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Clean accent elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent rounded-full opacity-60"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-white/20 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 -mb-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="bg-white section-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center content-spacing">
            <h2 className="text-6xl lg:text-8xl xl:text-9xl font-extralight text-primary content-spacing tracking-tighter leading-none">
              Единая платформа
              <br />
              <span className="font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">для любых задач</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-accent/10 to-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8 lg:mb-12 group-hover:from-accent/20 group-hover:to-accent/30 group-hover:scale-110 transition-all duration-700">
                  <div className="text-accent">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-6 lg:mb-8 leading-tight tracking-tight group-hover:text-accent transition-colors duration-700">
                  {feature.title}
                </h3>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Key Features Section */}
      <section className="bg-light-bg section-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center content-spacing">
            <h2 className="text-6xl lg:text-8xl xl:text-9xl font-extralight text-primary content-spacing tracking-tighter leading-none">
              Ключевые
              <br />
              <span className="font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">возможности</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-start">
            {/* Fixed Visual */}
            <div className="lg:sticky lg:top-32">
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100/50">
                  <img 
                    src="https://mocha-cdn.com/01988f5f-0cbe-7d57-99ac-bafebbffc5b0/dw-station-control.jpg" 
                    alt="TradeStation Dashboard Interface"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  
                  {/* Interactive overlay highlighting different sections */}
                  <div className="absolute inset-8 lg:inset-12 pointer-events-none">
                    <div className={`absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl transition-opacity duration-1000 ${
                      activeFeature === 0 ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-l from-green-500/20 to-transparent rounded-2xl transition-opacity duration-1000 ${
                      activeFeature === 1 ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-2xl transition-opacity duration-1000 ${
                      activeFeature === 2 ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent rounded-2xl transition-opacity duration-1000 ${
                      activeFeature === 3 ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Features */}
            <div className="space-y-24 lg:space-y-32">
              {keyFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-700 ${
                    activeFeature === index ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <h3 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-primary mb-8 lg:mb-12 leading-tight tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xl lg:text-2xl xl:text-3xl text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-white section-spacing">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          {/* Section header */}
          <div className="content-spacing">
            <h2 className="text-6xl lg:text-8xl xl:text-9xl font-extralight text-primary content-spacing tracking-tighter leading-none">
              Создан для работы
              <br />
              <span className="font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">с вашими системами</span>
            </h2>
          </div>

          {/* Integration Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 xl:gap-24 mb-16 lg:mb-24">
            {integrationLogos.map((integration, index) => (
              <div key={index} className="flex-shrink-0 group">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-700">
                  <span className="text-2xl lg:text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-700">
                    {integration.logo}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Plus Sign */}
            <div className="text-6xl lg:text-8xl text-accent font-light mx-8">+</div>
            
            {/* DataWorker API */}
            <div className="group">
              <div className="w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-accent/10 to-accent/20 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-700 border-2 border-accent/30">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-black text-accent mb-2">DW</div>
                  <div className="text-lg lg:text-xl font-semibold text-primary">API</div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl lg:text-2xl xl:text-3xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto">
            TradeStation легко подключается к «1С», «Парус» и другим корпоративным системам. Наш открытый API позволяет реализовать интеграцию любой сложности для обмена данными и построения электронного документооборота.
          </p>
        </div>
      </section>

      {/* SaaS Model Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 section-spacing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-16 lg:mb-20">
            <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-12 lg:mb-16">
              <div className="relative">
                <Cloud className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                <div className="absolute -top-2 -right-2">
                  <Infinity className="w-8 h-8 text-accent" />
                </div>
              </div>
            </div>
            
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-extralight text-white content-spacing tracking-tighter leading-none">
              Начните с малого.
              <br />
              <span className="font-black bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Растите без ограничений.</span>
            </h2>
          </div>

          <p className="text-xl lg:text-2xl xl:text-3xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
            TradeStation предоставляется по подписочной модели (SaaS). Это означает низкие первоначальные затраты, отсутствие расходов на серверы и простое масштабирование вашего бизнеса. Вы платите только за то, что используете.
          </p>
        </div>
      </section>

      {/* TradeFrame Integration Section */}
      <section className="bg-white section-spacing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-light-bg rounded-3xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Monitor className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
              Управляется через TradeFrame
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Все станции TradeStation централизованно управляются через веб-платформу TradeFrame.
              Контролируйте цены, остатки топлива, получайте аналитику и управляйте сетью из единого центра.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Fuel className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Управление топливом</h3>
                <p className="text-gray-600 text-sm">Мониторинг остатков и заказ поставок</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Настройка цен</h3>
                <p className="text-gray-600 text-sm">Централизованное изменение тарифов</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Облачная аналитика</h3>
                <p className="text-gray-600 text-sm">Отчеты и прогнозы по всей сети</p>
              </div>
            </div>

            <Link
              to="/products/trade-frame"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Узнать больше о TradeFrame
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-light-bg section-spacing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="content-spacing">
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-extralight text-primary content-spacing tracking-tighter leading-none">
              Готовы централизовать
              <br />
              <span className="font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">управление?</span>
            </h2>
          </div>

          <button className="inline-flex items-center px-16 py-8 bg-gradient-to-r from-accent to-blue-600 text-white rounded-3xl font-bold text-2xl xl:text-3xl premium-button shadow-2xl hover:scale-105 transition-all duration-700">
            Запросить демонстрацию платформы
          </button>
        </div>
      </section>
    </PageLayout>
  );
}
