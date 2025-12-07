import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import { Link } from 'react-router';
import {
  ArrowRight,
  Zap,
  Globe,
  Smartphone,
  Cpu,
  CreditCard,
  CheckCircle2,
  Code,
  Users,
  HeadphonesIcon
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function ServicesPage() {
  usePageMeta({
    title: 'Услуги',
    description: 'Профессиональная разработка ПО: AI, Web, Mobile, IoT, Процессинг',
    keywords: 'разработка ПО, AI, машинное обучение, веб-разработка, мобильная разработка, IoT, процессинг'
  });
  const services = [
    {
      name: 'AI Решения',
      subtitle: 'Прогнозы и ML',
      href: '/services/ai-solutions',
      description: 'Внедрение искусственного интеллекта для анализа данных, прогнозирования спроса, оптимизации процессов и компьютерного зрения. Разработка и обучение моделей машинного обучения под ваши задачи.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Прогнозирование спроса', 'Анализ данных', 'Компьютерное зрение', 'Рекомендательные системы']
    },
    {
      name: 'Web Платформы',
      subtitle: 'High-load порталы',
      href: '/services/digital-platforms',
      description: 'Создание высоконагруженных веб-сервисов, личных кабинетов, SaaS-решений и корпоративных порталов. Архитектура, выдерживающая миллионы пользователей.',
      icon: <Globe className="w-8 h-8" />,
      features: ['SaaS-платформы', 'Личные кабинеты', 'Корпоративные порталы', 'API и интеграции']
    },
    {
      name: 'Мобильная разработка',
      subtitle: 'iOS & Android',
      href: '/services/mobile-development',
      description: 'Нативные приложения для iOS и Android, кроссплатформенные решения на Flutter и React Native. От концепции до публикации в App Store и Google Play.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['iOS и Android', 'Flutter / React Native', 'Публикация в сторах', 'Push-уведомления']
    },
    {
      name: 'Процессинговые системы',
      subtitle: 'Fintech & Billing',
      href: '/services/processing-systems',
      description: 'Разработка биллинговых систем, процессинга карт и транзакционных ядер высокой надёжности. Интеграция с платёжными системами и банками.',
      icon: <CreditCard className="w-8 h-8" />,
      features: ['Процессинг карт', 'Биллинговые системы', 'Интеграция с банками', 'Высокая надёжность']
    },
    {
      name: 'IoT Решения',
      subtitle: 'Киоски и терминалы',
      href: '/services/iot-terminals',
      description: 'Программное обеспечение для терминалов самообслуживания, киосков, промышленного оборудования. Интеграция с датчиками, контроллерами и периферией.',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Терминалы и киоски', 'Интеграция оборудования', 'Промышленные протоколы', 'Удалённый мониторинг']
    }
  ];

  const advantages = [
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: 'green',
      title: 'Полный цикл (Full Cycle)',
      description: 'Берем на себя всё: от бизнес-анализа и прототипирования до поддержки серверов 24/7.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      color: 'purple',
      title: 'Собственный R&D',
      description: 'Интегрируем передовые технологии (AI, IoT), которые тестируем в собственных продуктах.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      color: 'orange',
      title: 'Enterprise-уровень',
      description: 'Опыт работы с федеральными сетями, банками и нефтяными компаниями.'
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      color: 'blue',
      title: 'Поддержка 24/7',
      description: 'Техническая поддержка и SLA для критически важных систем вашего бизнеса.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      green: 'bg-green-500/20 text-green-500',
      purple: 'bg-purple-500/20 text-purple-500',
      orange: 'bg-orange-500/20 text-orange-500',
      blue: 'bg-blue-500/20 text-blue-500'
    };
    return colors[color] || colors.blue;
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <HexagonPattern id="hexagons-services" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">Custom Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Профессиональная разработка
              </h1>
              <p className="text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-xl">
                Не подходит готовое решение? Наша команда инженеров создаст уникальный продукт под ваши задачи. От микроконтроллеров до нейросетей.
              </p>
            </div>

            {/* Right - Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-20 blur-2xl"></div>

                {/* Main visual - Code/Development themed */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="ml-3 text-white/40 text-xs font-mono">development.tsx</span>
                  </div>

                  {/* Code lines */}
                  <div className="font-mono text-sm space-y-2 mb-6">
                    <div><span className="text-purple-400">const</span> <span className="text-blue-300">solution</span> <span className="text-white">=</span> <span className="text-yellow-300">{`{`}</span></div>
                    <div className="pl-4"><span className="text-blue-200">ai</span><span className="text-white">:</span> <span className="text-green-300">"ML & Vision"</span><span className="text-white">,</span></div>
                    <div className="pl-4"><span className="text-blue-200">web</span><span className="text-white">:</span> <span className="text-green-300">"High-load"</span><span className="text-white">,</span></div>
                    <div className="pl-4"><span className="text-blue-200">mobile</span><span className="text-white">:</span> <span className="text-green-300">"iOS & Android"</span><span className="text-white">,</span></div>
                    <div className="pl-4"><span className="text-blue-200">iot</span><span className="text-white">:</span> <span className="text-green-300">"Terminals"</span></div>
                    <div><span className="text-yellow-300">{`}`}</span><span className="text-white">;</span></div>
                  </div>

                  {/* Tech icons row */}
                  <div className="grid grid-cols-5 gap-3">
                    {[
                      { icon: <Zap className="w-5 h-5" />, label: 'AI', color: 'from-purple-500 to-indigo-500' },
                      { icon: <Globe className="w-5 h-5" />, label: 'Web', color: 'from-blue-500 to-cyan-500' },
                      { icon: <Smartphone className="w-5 h-5" />, label: 'Mobile', color: 'from-green-500 to-emerald-500' },
                      { icon: <CreditCard className="w-5 h-5" />, label: 'Fintech', color: 'from-orange-500 to-amber-500' },
                      { icon: <Cpu className="w-5 h-5" />, label: 'IoT', color: 'from-pink-500 to-rose-500' }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                          {item.icon}
                        </div>
                        <span className="text-white/50 text-[10px]">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 p-3 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <span className="text-gray-900 font-bold text-sm">Full Cycle</span>
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-xl">
                  <span className="text-white font-bold text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Направления разработки
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Экспертиза в ключевых технологических областях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-1"
              >
                {/* Background glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                      {service.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-1">
                        {service.subtitle}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Подробнее
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Преимущества работы с командой DataWorker
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(advantage.color)}`}>
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Обсудим ваш проект?
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Расскажите о своей задаче, и мы предложим оптимальное решение с оценкой сроков и бюджета
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Связаться с нами
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 bg-gray-100 text-gray-700 border-2 border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all duration-300"
            >
              Готовые продукты
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
