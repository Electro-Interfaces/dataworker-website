import PageLayout from '@/react-app/components/PageLayout';
import { Link } from 'react-router';
import {
  Shield,
  CreditCard,
  Wrench,
  Clock,
  Monitor,
  CheckCircle,
  Zap,
  Building2,
  ArrowRight
} from 'lucide-react';

export default function TradeTerminalPage() {

  const mainModules = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Два режима работы',
      description: 'Полноценная система управления автоматическими АЗС или дополнительный модуль для обслуживания клиентов',
      features: ['Автономная АЗС', 'Дополнительный пост', 'Гибкая настройка', 'Универсальность']
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Способы оплаты',
      description: 'Принимает все современные способы оплаты с минимальными комиссиями',
      features: ['Банковские карты', 'Наличные', 'NFC платежи', 'QR-коды', 'Онлайн заказы']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Отчеты и интеграция',
      description: 'Сменные отчеты, интеграция с 1С и гибкое управление ценами',
      features: ['Сменные отчеты', 'Интеграция 1С', 'Изменение цен', 'Аналитика']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Надежность работы',
      description: 'Система самодиагностики и удаленный мониторинг состояния терминала',
      features: ['Самодиагностика', 'Автоуведомления', 'Удаленный контроль', 'Мониторинг']
    }
  ];

  const targetAudience = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Автоматические АЗС'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ведомственные станции'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Дополнительный модуль на стационарных АЗС'
    }
  ];


  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24 pb-24 lg:pb-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main heading with icon */}
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight inline-block relative">
              TradeTerminal
              <sup className="absolute top-0 -right-7 lg:top-0 lg:-right-10">
                <div className="w-6 h-6 lg:w-9 lg:h-9 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                  <Monitor className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-white" />
                </div>
              </sup>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 font-light">
              Уличные терминалы самообслуживания для работы 24/7
            </p>

            {/* Key features pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Автономность</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Все виды оплаты</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Защита IP65</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">24/7</span>
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

      {/* Main Functions Section */}
      <section className="bg-off-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
              Ключевые возможности
            </h2>
            <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
              Надежное оборудование для бесперебойного обслуживания клиентов
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {mainModules.map((module, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 lg:p-10 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
                {/* Icon and Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {module.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light text-dark-gray leading-tight">
                    {module.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-lg text-medium-gray leading-relaxed mb-6">
                  {module.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {module.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-medium-gray text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Product Section */}
      <section className="bg-light-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="flex items-center justify-center p-8 lg:p-12">
                <img
                  src="https://mocha-cdn.com/01988f5f-0cbe-7d57-99ac-bafebbffc5b0/image.png_6766.png"
                  alt="TradeTerminal"
                  className="w-3/4 h-auto"
                />
              </div>

              {/* Text */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                  Универсальное решение
                </h2>
                <p className="text-xl text-medium-gray leading-relaxed mb-6">
                  TradeTerminal — уличные терминалы самообслуживания с большим экраном, купюроприемником и защищенным корпусом. Работают автономно 24/7 в любых погодных условиях.
                </p>
                <p className="text-xl text-medium-gray leading-relaxed">
                  Терминал может работать как полноценная система управления автозаправочными автоматическими станциями, так и как дополнительный модуль для обслуживания клиентов на обычных АЗС с операторами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TradeFrame Integration Section */}
      <section className="bg-light-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
            <div className="text-center mb-12 lg:mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Monitor className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                Управляется через TradeFrame
              </h2>

              <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto mb-12">
                Все терминалы TradeTerminal централизованно управляются через веб-платформу TradeFrame. Мониторьте состояние, изменяйте настройки и получайте аналитику в режиме реального времени.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark-gray mb-3">Удаленное управление</h3>
                <p className="text-medium-gray leading-relaxed">Настройка и контроль всех терминалов</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark-gray mb-3">Мониторинг 24/7</h3>
                <p className="text-medium-gray leading-relaxed">Отслеживание статуса в реальном времени</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark-gray mb-3">Аналитика продаж</h3>
                <p className="text-medium-gray leading-relaxed">Детальная отчетность и статистика</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/products/trade-frame"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors shadow-lg"
              >
                Узнать больше о TradeFrame
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                Для кого
              </h2>
              <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
                TradeTerminal создан для различных отраслей бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {targetAudience.map((audience, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                    <div className="text-primary">
                      {audience.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-dark-gray leading-tight">
                    {audience.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}