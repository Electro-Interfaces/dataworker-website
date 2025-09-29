import PageLayout from '@/react-app/components/PageLayout';
import { Link } from 'react-router';
import { ArrowRight, Brain, User, Smartphone, CreditCard, MonitorSpeaker, Network } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      name: 'Разработка AI-решений',
      href: '/services/ai-solutions',
      description: 'Создаем интеллектуальные системы для автоматизации бизнес-процессов, анализа данных и прогнозирования. Используем машинное обучение для решения сложных задач вашего бизнеса.',
      approach: ['Аудит бизнес-процессов', 'R&D и прототипирование', 'Разработка MVP', 'Внедрение и масштабирование'],
      icon: <Brain className="w-12 h-12 text-white" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Создание личных кабинетов',
      href: '/services/customer-portals',
      description: 'Разрабатываем пользовательские интерфейсы и системы самообслуживания. Создаем удобные личные кабинеты для ваших клиентов с интуитивным дизайном и широким функционалом.',
      approach: ['UX/UI исследование', 'Проектирование интерфейса', 'Frontend разработка', 'Интеграция с backend'],
      icon: <User className="w-12 h-12 text-white" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Разработка мобильных приложений',
      href: '/services/mobile-apps',
      description: 'Создаем нативные iOS и Android приложения для вашего бизнеса. Современный дизайн, высокая производительность и интеграция с существующими системами.',
      approach: ['Концептуализация', 'UX/UI дизайн', 'Нативная разработка', 'Тестирование и публикация'],
      icon: <Smartphone className="w-12 h-12 text-white" />,
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Разработка процессинговых решений',
      href: '/services/processing-solutions',
      description: 'Проектируем и разрабатываем системы обработки платежей и финансовых операций. Обеспечиваем высокую безопасность, надежность и соответствие стандартам.',
      approach: ['Анализ требований', 'Архитектурное проектирование', 'Разработка и интеграция', 'Аудит безопасности'],
      icon: <CreditCard className="w-12 h-12 text-white" />,
      color: 'from-orange-500 to-amber-600'
    },
    {
      name: 'Разработка терминалов',
      href: '/services/terminal-development',
      description: 'Создаем аппаратно-программные комплексы самообслуживания: от киосков до банкоматов. Полный цикл разработки от концепции до серийного производства.',
      approach: ['Техническое задание', 'Проектирование аппаратной части', 'Разработка ПО', 'Тестирование и сертификация'],
      icon: <MonitorSpeaker className="w-12 h-12 text-white" />,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'Интеграция Host-to-Host',
      href: '/services/host-to-host',
      description: 'Реализуем прямые интеграции с банковскими и процессинговыми системами по протоколам Host-to-Host. Обеспечиваем надежность и безопасность соединений.',
      approach: ['Анализ протоколов', 'Настройка подключений', 'Реализация API', 'Мониторинг и поддержка'],
      icon: <Network className="w-12 h-12 text-white" />,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-primary py-32 lg:py-48 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(3,155,229,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 lg:mb-12 tracking-tight leading-tight">
            Услуги по разработке
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
            Создаем уникальные технологические решения под ваши конкретные задачи
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div key={service.name} className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 lg:p-12 text-center`}>
                    <div className="w-20 h-20 bg-white/20 rounded-2xl mb-8 mx-auto flex items-center justify-center backdrop-blur-sm">
                      {service.icon}
                    </div>
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-4">Экспертиза команды</h3>
                      <p className="text-white/80">Индивидуальный подход к решению нестандартных задач</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h2 className="text-3xl lg:text-5xl font-light text-primary mb-6 lg:mb-8 tracking-tight leading-tight">
                    {service.name}
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 mb-8 lg:mb-10 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Approach */}
                  <div className="mb-10 lg:mb-12">
                    <h3 className="text-lg font-semibold text-primary mb-6">Наш подход:</h3>
                    <div className="space-y-4">
                      {service.approach.map((step, stepIndex) => (
                        <div key={step} className="flex items-center">
                          <div className="w-8 h-8 bg-accent/10 rounded-full mr-4 flex items-center justify-center">
                            <span className="text-accent font-semibold text-sm">{stepIndex + 1}</span>
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.href}
                    className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-2xl font-semibold hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Обсудить проект
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
