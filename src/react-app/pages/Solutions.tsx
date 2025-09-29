import PageLayout from '@/react-app/components/PageLayout';
import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Building2, Building, Truck, Factory, ChevronRight } from 'lucide-react';

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState('gas-networks');

  const solutions = {
    'gas-networks': {
      title: 'Сети АЗС',
      description: 'Комплексные решения для федеральных и региональных сетей автозаправочных станций',
      icon: <Building2 className="w-8 h-8" />,
      problems: [
        {
          problem: 'Разрозненность систем учета и управления',
          solution: 'TradeStation',
          description: 'Единая система управления всеми станциями сети'
        },
        {
          problem: 'Низкая лояльность клиентов',
          solution: 'TradeBonus',
          description: 'Программа лояльности с мобильным приложением'
        },
        {
          problem: 'Неэффективная работа с корпоративными клиентами',
          solution: 'TradeCorp',
          description: 'Корпоративный топливный процессинг'
        },
        {
          problem: 'Отсутствие аналитики и прогнозирования',
          solution: 'DW AI',
          description: 'Интеллектуальная система аналитики'
        },
        {
          problem: 'Сложность управления сетью',
          solution: 'TradeFrame',
          description: 'Централизованная веб-платформа управления'
        }
      ],
      architecture: 'TradeFrame (веб-управление) → Станции с TradeStation → Терминалы TradeTerminal → Интеграция с TradeCorp и TradeBonus'
    },
    'independent': {
      title: 'Независимые АЗС',
      description: 'Готовые решения для отдельных заправочных станций и небольших сетей',
      icon: <Building className="w-8 h-8" />,
      problems: [
        {
          problem: 'Высокие затраты на IT-инфраструктуру',
          solution: 'TradeTerminal',
          description: 'Автономные терминалы без сложной инфраструктуры'
        },
        {
          problem: 'Ограниченные возможности привлечения клиентов',
          solution: 'TradeBonus',
          description: 'Доступная программа лояльности'
        },
        {
          problem: 'Сложность работы с корпоративными клиентами',
          solution: 'TradeCorp',
          description: 'Простое решение для корпоративных продаж'
        },
        {
          problem: 'Отсутствие детальной аналитики',
          solution: 'DW AI',
          description: 'Базовая аналитика и отчетность'
        }
      ],
      architecture: 'TradeTerminal (автономный) → Опциональная интеграция с TradeCorp → Базовая аналитика DW AI'
    },
    'fleet': {
      title: 'Автопарки и логистика',
      description: 'Решения для транспортных компаний и управления корпоративными автопарками',
      icon: <Truck className="w-8 h-8" />,
      problems: [
        {
          problem: 'Хищения и нецелевое использование топлива',
          solution: 'TradeCorp',
          description: 'Строгий контроль топливных карт с лимитами'
        },
        {
          problem: 'Отсутствие контроля заправок в поездках',
          solution: 'TradeTerminal',
          description: 'Сеть терминалов на ключевых маршрутах'
        },
        {
          problem: 'Неэффективное планирование маршрутов',
          solution: 'DW AI',
          description: 'Оптимизация логистики и прогнозирование'
        },
        {
          problem: 'Сложность интеграции с GPS-мониторингом',
          solution: 'Custom API',
          description: 'Интеграция с системами мониторинга транспорта'
        }
      ],
      architecture: 'TradeCorp (центральное управление) → TradeTerminal (на маршрутах) → Интеграция с GPS → Аналитика DW AI'
    },
    'industry': {
      title: 'Промышленные предприятия',
      description: 'Системы учета и контроля топлива для производственных объектов',
      icon: <Factory className="w-8 h-8" />,
      problems: [
        {
          problem: 'Отсутствие учета топлива по подразделениям',
          solution: 'TradeCorp',
          description: 'Система доступа с разграничением по центрам затрат'
        },
        {
          problem: 'Высокие затраты на топливо для техники',
          solution: 'TradeStation',
          description: 'Внутренняя топливная инфраструктура'
        },
        {
          problem: 'Неоптимальное планирование закупок',
          solution: 'DW AI',
          description: 'Прогнозирование потребности и оптимизация запасов'
        },
        {
          problem: 'Сложность интеграции с ERP',
          solution: 'Custom API',
          description: 'Интеграция с промышленными ERP-системами'
        }
      ],
      architecture: 'ERP интеграция → TradeStation (внутренние АЗС) → TradeCorp (контроль доступа) → DW AI (аналитика энергоэффективности)'
    }
  };

  const currentSolution = solutions[activeTab as keyof typeof solutions];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-primary hero-spacing relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(3,155,229,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-6xl lg:text-9xl xl:text-[12rem] font-extralight text-white content-spacing tracking-tighter leading-none">
            Решения
            <br />
            <span className="font-black bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">для бизнеса</span>
          </h1>
          <p className="text-2xl lg:text-4xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto text-spacing">
            Выберите вашу отрасль и узнайте, какие продукты решат ваши задачи
          </p>
        </div>
      </section>

      {/* Interactive Solutions Section */}
      <section className="bg-white section-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
            {/* Tabs */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl lg:text-5xl font-light text-primary mb-12 lg:mb-16 tracking-tight leading-tight">
                Выберите отрасль
              </h2>
              <div className="space-y-4">
                {Object.entries(solutions).map(([key, solution]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left p-6 lg:p-8 rounded-3xl transition-all duration-700 group ${
                      activeTab === key
                        ? 'bg-gradient-to-r from-accent to-primary text-white scale-105'
                        : 'bg-gray-50 hover:bg-white border border-transparent hover:border-accent/20 hover:shadow-lg hover:scale-102'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-700 ${
                        activeTab === key
                          ? 'bg-white/20 text-white'
                          : 'bg-accent/10 text-accent group-hover:bg-accent/20'
                      }`}>
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg lg:text-xl font-bold transition-all duration-700 ${
                          activeTab === key ? 'text-white' : 'text-primary group-hover:text-accent'
                        }`}>
                          {solution.title}
                        </h3>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-all duration-700 ${
                        activeTab === key ? 'text-white rotate-90' : 'text-gray-400 group-hover:text-accent'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-2xl border border-gray-100">
                <div className="flex items-start space-x-6 mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center text-white">
                    {currentSolution.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4 tracking-tight">
                      {currentSolution.title}
                    </h3>
                    <p className="text-xl text-gray-600 font-light leading-relaxed">
                      {currentSolution.description}
                    </p>
                  </div>
                </div>

                {/* Problems & Solutions */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-primary mb-8">Проблема → Решение DataWorker</h4>
                  <div className="space-y-6">
                    {currentSolution.problems.map((item, index) => (
                      <div key={index} className="grid md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-2xl">
                        <div>
                          <h5 className="font-semibold text-red-600 mb-2">Проблема:</h5>
                          <p className="text-gray-700">{item.problem}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-accent mb-2">Решение: {item.solution}</h5>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-primary mb-4">Типовая архитектура решения:</h4>
                  <p className="text-gray-700 leading-relaxed font-mono text-sm bg-white rounded-lg p-4">
                    {currentSolution.architecture}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="bg-light-bg section-spacing">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-light text-primary mb-12 lg:mb-16 tracking-tight leading-tight">
            Готовы начать?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-16">
            Изучите конкретные продукты или посмотрите, как они работают в экосистеме
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link
              to="/products"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-500">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Выбрать продукт</h3>
              <p className="text-gray-600">Изучите детальные характеристики каждого продукта</p>
            </Link>

            <Link
              to="/ecosystem"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-500">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Экосистема</h3>
              <p className="text-gray-600">Посмотрите, как продукты работают в единой платформе</p>
            </Link>

            <Link
              to="/cases"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-all duration-500">
                <Factory className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Кейсы внедрений</h3>
              <p className="text-gray-600">Реальные примеры успешных проектов</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-spacing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-6xl font-light text-primary mb-8 lg:mb-12 tracking-tight leading-tight">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
              Расскажите о ваших задачах, и мы предложим оптимальное решение
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Связаться с нами
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-2xl font-semibold text-lg hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
            >
              Наши услуги
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
