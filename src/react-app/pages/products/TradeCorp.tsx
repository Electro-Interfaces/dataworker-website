import PageLayout from '@/react-app/components/PageLayout';
import {
  CreditCard,
  Building2,
  Users,
  BarChart3,
  Shield,
  CheckCircle,
  Banknote,
  Monitor,
  Smartphone,
  Truck,
  TrendingUp
} from 'lucide-react';

export default function TradeCorpPage() {

  const mainModules = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Контрагенты',
      description: 'Комплексное управление компаниями-клиентами, их картами, договорами и взаиморасчетами',
      features: ['Карты', 'Лимиты', 'Блокировки', 'Балансы', 'Договоры', 'Взаиморасчеты']
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Эмитенты',
      description: 'Работа с собственными и сторонними картами, Host-to-Host соединения и POS-терминалы',
      features: ['Собственные карты', 'Сторонние карты', 'Host-to-Host', 'POS-терминалы', 'Тарифы', 'Маппинг']
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Виртуальные карты',
      description: 'Цифровые топливные карты без физического носителя для современных решений',
      features: ['Мгновенный выпуск', 'QR-коды', 'Мобильные приложения', 'Онлайн управление', 'Безопасность', 'Интеграция']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Мобильное приложение',
      description: 'Управление картами и операциями со смартфона для водителей и менеджеров',
      features: ['iOS и Android', 'История операций', 'Баланс карт', 'Уведомления', 'Поиск АЗС', 'Онлайн заказы']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Аналитика и отчетность',
      description: 'Дашборды, графики, метрики и экспорт отчетов для принятия бизнес-решений',
      features: ['Дашборды', 'Статистика карт', 'Финансовая аналитика', 'Экспорт Excel/PDF']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Администрирование',
      description: 'Управление доступами, ролями, системными настройками и техническая поддержка',
      features: ['Роли пользователей', 'Системные настройки', 'Профили', 'Техподдержка']
    }
  ];

  const targetAudience = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Администраторы систем топливного процессинга'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Менеджеры компаний-контрагентов'
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: 'Бухгалтеры и финансисты предприятий'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Водители с мобильным приложением'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Диспетчеры транспортных компаний'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Аналитики по отчетам и данным'
    }
  ];

  const businessProcess = [
    { step: 1, title: 'Регистрация контрагента', description: 'в системе' },
    { step: 2, title: 'Создание договора', description: 'на обслуживание' },
    { step: 3, title: 'Выпуск топливных карт', description: 'для водителей' },
    { step: 4, title: 'Привязка карт', description: 'к транспортным средствам' },
    { step: 5, title: 'Совершение транзакций', description: 'на АЗС' },
    { step: 6, title: 'Взаиморасчеты', description: 'между участниками' },
    { step: 7, title: 'Управление картами', description: 'блокировка/восстановление' }
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
              TradeCorp
              <sup className="absolute top-0 -right-7 lg:top-0 lg:-right-10">
                <div className="w-6 h-6 lg:w-9 lg:h-9 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                  <CreditCard className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-white" />
                </div>
              </sup>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 font-light">
              Современная веб-система управления топливным процессингом.
            </p>

            {/* Key features pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Топливные карты</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Контрагенты</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Договоры</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Финансы</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Аналитика</span>
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
              Основные функции
            </h2>
            <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
              Четыре ключевых направления для полного управления топливным процессингом
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

      {/* About Platform Section */}
      <section className="bg-light-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div>
                <img
                  src="https://mocha-cdn.com/01988f5f-0cbe-7d57-99ac-bafebbffc5b0/image.png_4042.png"
                  alt="TradeCorp Technology"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                  Единая платформа
                </h2>
                <p className="text-xl text-medium-gray leading-relaxed">
                  Это современная система топливного процессинга, которая объединяет управление топливными картами, контрагентами, эмитентами, договорами и финансовыми операциями в единой платформе. Система предоставляет богатый функционал для всех участников топливного бизнеса - от администраторов до конечных пользователей карт.
                </p>
              </div>
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
                Целевая аудитория
              </h2>
              <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
                Система создана для различных специалистов топливной отрасли
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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