import PageLayout from '@/react-app/components/PageLayout';
import {
  Monitor,
  BarChart3,
  Settings,
  Shield,
  Users,
  Database,
  CheckCircle,
  Activity,
  Building2,
  TrendingUp,
  FileText,
  Zap
} from 'lucide-react';

export default function TradeFramePage() {

  const mainModules = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Управление торговой сетью',
      description: 'Централизованный контроль над всеми аспектами работы сети АЗС в режиме реального времени',
      features: ['Мониторинг операций', 'Контроль KPI', 'Аналитика продаж', 'Активность точек']
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Управление торговыми точками',
      description: 'Полный контроль состояния АЗС, оборудования, цен и запасов топлива',
      features: ['Цены на топливо', 'Резервуары', 'Оборудование', 'История изменений']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Администрирование',
      description: 'Управление доступами, ролями пользователей и полный аудит действий в системе',
      features: ['Пользователи и роли', 'Права доступа', 'Журнал аудита', 'Документы']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Интеграция и настройки',
      description: 'Подключение к внешним системам автоматизации и базам данных',
      features: ['STS API', 'Внешние БД', 'Источники данных', 'Тестирование']
    }
  ];

  const targetAudience = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Владельцы и операторы сетей АЗС'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Менеджеры торговых сетей'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Технические специалисты'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Бухгалтеры и финансовые контролеры'
    }
  ];

  const advantages = [
    {
      icon: <Monitor className="w-6 h-6" />,
      text: 'Единая точка контроля всей сети АЗС'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      text: 'Реальное время мониторинга операций'
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: 'Упрощенное управление персоналом и доступом'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      text: 'Полная история изменений и аудит'
    },
    {
      icon: <Database className="w-6 h-6" />,
      text: 'Интеграция с существующими системами автоматизации'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: 'Интуитивно понятный интерфейс'
    }
  ];

  const techFeatures = [
    { label: 'Современный стек', value: 'React 18, TypeScript, Tailwind CSS' },
    { label: 'Адаптивный дизайн', value: 'Работает на любых устройствах' },
    { label: 'Безопасность', value: 'Многоуровневая аутентификация и авторизация' },
    { label: 'Производительность', value: 'Оптимизированная загрузка с React Query' },
    { label: 'Масштабируемость', value: 'Модульная архитектура для расширения' }
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
              TradeFrame
              <sup className="absolute top-0 -right-7 lg:top-0 lg:-right-10">
                <div className="w-6 h-6 lg:w-9 lg:h-9 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                  <Monitor className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-white" />
                </div>
              </sup>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 font-light">
              Платформа управления торговыми сетями АЗС
            </p>

            {/* Key features pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Мониторинг сети</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Торговые точки</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Аналитика</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Интеграция</span>
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
              Комплексное решение для управления сетями автозаправочных станций
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
              <div className="flex items-center justify-center p-8">
                <img
                  src="/images/tradeframe-platform.png"
                  alt="TradeFrame Platform"
                  className="w-3/4 h-auto"
                />
              </div>

              {/* Text */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                  Современное решение
                </h2>
                <p className="text-xl text-medium-gray leading-relaxed">
                  TradeFrame — современное веб-приложение для комплексного управления сетями автозаправочных станций. Платформа обеспечивает централизованный контроль над всеми аспектами работы торговой сети: от мониторинга операций до управления оборудованием и персоналом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-off-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                Преимущества
              </h2>
              <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
                Что получает ваш бизнес с TradeFrame
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {advantage.icon}
                  </div>
                  <p className="text-dark-gray leading-tight pt-2">
                    {advantage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="bg-light-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
              Технические особенности
            </h2>
            <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
              Современные технологии для надежной работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {feature.label}
                </h3>
                <p className="text-medium-gray leading-relaxed">
                  {feature.value}
                </p>
              </div>
            ))}
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
                TradeFrame создан для профессионалов топливной отрасли
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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