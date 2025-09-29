import Navigation from '@/react-app/components/Navigation';
import ContactSection from '@/react-app/components/ContactSection';
import { Monitor, CheckCircle } from 'lucide-react';

export default function ServiceTerminalDevelopmentPage() {
  const mainModules = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Аппаратная часть',
      description: 'Проектирование и разработка оборудования',
      features: ['Корпус', 'Периферия', 'Защита', 'Эргономика']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Программное обеспечение',
      description: 'Разработка ПО и пользовательских интерфейсов',
      features: ['ОС терминала', 'UI/UX', 'Диагностика', 'Обновления']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Интеграции',
      description: 'Связь с внешними системами',
      features: ['Backend', 'Платежные системы', 'Мониторинг', 'API']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Панель управления',
      description: 'Централизованное управление парком терминалов',
      features: ['Мониторинг', 'Обновления', 'Статистика', 'Уведомления']
    }
  ];

  const targetAudience = [
    { title: 'Сети АЗС' },
    { title: 'Банки' },
    { title: 'Торговые центры' },
    { title: 'Транспортные компании' }
  ];

  return (
    <div className="relative">
      <Navigation />
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24 pb-24 lg:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight inline-block relative">
                Разработка терминалов
                <sup className="absolute top-0 -right-7 lg:top-0 lg:-right-10">
                  <div className="w-6 h-6 lg:w-9 lg:h-9 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                    <Monitor className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-white" />
                  </div>
                </sup>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 font-light">
                Аппаратно-программные комплексы самообслуживания
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <span className="text-sm text-white/90">Полный цикл</span>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <span className="text-sm text-white/90">Надежность</span>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <span className="text-sm text-white/90">Вандалостойкость</span>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <span className="text-sm text-white/90">Сертификация</span>
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
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                Этапы разработки
              </h2>
              <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
                От концепции до серийного производства
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {mainModules.map((module, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 lg:p-10 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {module.icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-light text-dark-gray leading-tight">
                      {module.title}
                    </h3>
                  </div>

                  <p className="text-lg text-medium-gray leading-relaxed mb-6">
                    {module.description}
                  </p>

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

        {/* Target Audience Section */}
        <section className="bg-light-bg py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                  Для кого подходит
                </h2>
                <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
                  Терминалы для различных отраслей
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="dashboard-card p-6 text-center hover-lift">
                    <h3 className="text-lg font-medium text-dark-gray leading-tight">
                      {audience.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
}