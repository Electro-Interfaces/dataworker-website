import PageLayout from '@/react-app/components/PageLayout';
import { Link } from 'react-router';
import {
  ArrowRight,
  CheckCircle,
  Smartphone,
  Store,
  FileText,
  Activity,
  Workflow,
  Shield,
  TrendingUp,
  Zap
} from 'lucide-react';

export default function TradeGatePage() {

  const mainModules = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Приём заказов от мобильных приложений',
      description: 'Получение и обработка данных в реальном времени',
      features: ['Прием заказов', 'Валидация данных', 'Обработка в реальном времени', 'Поддержка протоколов']
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: 'Передача заказов в торговые сети',
      description: 'Преобразование протоколов и маршрутизация в нужные системы',
      features: ['Преобразование протоколов', 'Маршрутизация', 'Интеграция с сетями', 'Синхронизация']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Отчётность',
      description: 'Корректная передача данных для отчетности и бухгалтерии',
      features: ['Отчетность', 'Документооборот', 'Экспорт данных', 'Соответствие законодательству']
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Мониторинг транзакций',
      description: 'Статус каждого заказа — ожидание, выполнен, ошибка или отмена',
      features: ['Отслеживание статусов', 'Мониторинг в реальном времени', 'Уведомления', 'Аналитика']
    }
  ];

  const advantages = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Сопряжение разных протоколов',
      description: 'Унификация обмена данными между множеством приложений и сетей'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Прозрачность',
      description: 'Все участники процесса видят актуальные статусы'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Надёжность',
      description: 'Встроенные механизмы контроля ошибок и уведомлений'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Масштабируемость',
      description: 'Лёгкое подключение новых приложений и торговых сетей'
    }
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
      icon: <Zap className="w-8 h-8" />,
      title: 'Клиенты',
      description: 'Оформление и выполнение заказов в привычных приложениях без задержек'
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
              TradeGate
              <sup className="absolute top-0 -right-7 lg:top-0 lg:-right-10">
                <div className="w-6 h-6 lg:w-9 lg:h-9 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                  <Workflow className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-white" />
                </div>
              </sup>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 font-light">
              Система интеграции онлайн-заказов между мобильными приложениями и торговыми сетями
            </p>

            {/* Key features pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Приём заказов</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Интеграция</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Мониторинг</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-sm text-white/90">Надёжность</span>
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
              Основные возможности
            </h2>
            <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
              Технологический посредник для корректного обмена данными
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

      {/* Advantages Section */}
      <section className="bg-light-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
              Преимущества
            </h2>
            <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
              Почему выбирают TradeGate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-4">
                  {advantage.title}
                </h3>
                <p className="text-medium-gray leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Platform Section */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div>
                <img
                  src="/images/tradegate-platform.png"
                  alt="TradeGate Technology"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                  Технологический посредник
                </h2>
                <p className="text-xl text-medium-gray leading-relaxed">
                  TradeGate работает как связующее звено между мобильными приложениями и торговыми сетями. Система обеспечивает корректный обмен данными между разными протоколами, унифицируя процесс приёма и передачи заказов без участия в самом процессе оформления или обработке платежей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-light-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                Для кого
              </h2>
              <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
                Решение для всех участников процесса онлайн-заказов
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {targetAudience.map((audience, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <div className="text-primary">
                      {audience.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-dark-gray mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-medium-gray leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-off-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl lg:text-4xl font-light mb-6 leading-tight">
                Готовы подключить систему интеграции?
              </h3>
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto font-light">
                Свяжитесь с нами для обсуждения интеграции TradeGate в вашу инфраструктуру
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Обсудить проект
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}