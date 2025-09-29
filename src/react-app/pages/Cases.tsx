import PageLayout from '@/react-app/components/PageLayout';
import { Link } from 'react-router';
import { ArrowRight, TrendingUp, Users, Clock, Shield } from 'lucide-react';

export default function CasesPage() {
  const cases = [
    {
      title: 'Федеральная сеть АЗС: Полная цифровизация',
      client: 'Федеральная сеть АЗС (300+ станций)',
      industry: 'Топливно-энергетический комплекс',
      challenge: 'Разрозненность систем учета, высокие операционные расходы, отсутствие единой системы лояльности для клиентов',
      solution: 'Внедрение полной экосистемы DataWorker: TradeStation для управления АЗС, TradeCorp для корпоративных клиентов, TradeBonus для программы лояльности, DW AI для аналитики и прогнозирования',
      results: [
        { metric: '40%', description: 'снижение операционных расходов' },
        { metric: '25%', description: 'рост продаж корпоративным клиентам' },
        { metric: '300K+', description: 'активных участников программы лояльности' },
        { metric: '99.98%', description: 'доступность системы' }
      ],
      timeline: '18 месяцев',
      products: ['TradeStation', 'TradeCorp', 'TradeBonus', 'TradeFrame', 'DW AI'],
      testimonial: 'DataWorker полностью трансформировали нашу операционную модель. Теперь мы имеем полную прозрачность процессов и можем принимать решения на основе данных в реальном времени.',
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Региональная нефтебаза: Автоматизация логистики',
      client: 'Региональная нефтебаза (150+ автоцистерн)',
      industry: 'Логистика и дистрибуция',
      challenge: 'Неэффективное планирование поставок, большие потери топлива, отсутствие контроля над автопарком',
      solution: 'Внедрение TradeCorp для управления топливными картами автопарка, DW AI для прогнозирования спроса и оптимизации маршрутов, интеграция с GPS-мониторингом',
      results: [
        { metric: '35%', description: 'сокращение логистических расходов' },
        { metric: '90%', description: 'точность прогнозирования спроса' },
        { metric: '60%', description: 'снижение потерь топлива' },
        { metric: '4x', description: 'ускорение обработки документов' }
      ],
      timeline: '8 месяцев',
      products: ['TradeCorp', 'DW AI', 'Custom API'],
      testimonial: 'Система предсказывает наши потребности лучше, чем мы сами. Это позволило нам кардинально оптимизировать закупки и снизить складские запасы.',
      icon: <Users className="w-8 h-8 text-white" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Транспортная компания: Контроль топливных затрат',
      client: 'Транспортная компания (1000+ автомобилей)',
      industry: 'Грузовые перевозки',
      challenge: 'Хищения топлива, превышение нормативов расхода, сложность контроля заправок по маршрутам',
      solution: 'Развертывание сети терминалов TradeTerminal на ключевых маршрутах, внедрение системы топливных карт TradeCorp с жесткими лимитами, интеграция с системой GPS-мониторинга',
      results: [
        { metric: '25%', description: 'экономия на топливных расходах' },
        { metric: '95%', description: 'сокращение хищений топлива' },
        { metric: '50%', description: 'снижение времени на заправку' },
        { metric: '100%', description: 'прозрачность топливных операций' }
      ],
      timeline: '12 месяцев',
      products: ['TradeTerminal', 'TradeCorp', 'TradeFrame'],
      testimonial: 'Теперь мы знаем, где, когда и сколько топлива заправляет каждый водитель. Хищения практически прекратились, а экономия превзошла все ожидания.',
      icon: <Shield className="w-8 h-8 text-white" />,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Промышленное предприятие: Оптимизация энергопотребления',
      client: 'Металлургический комбинат',
      industry: 'Тяжелая промышленность',
      challenge: 'Высокие затраты на топливо для промышленной техники, отсутствие учета потребления по подразделениям',
      solution: 'Создание внутренней топливной инфраструктуры на базе TradeStation, внедрение системы TradeCorp для контроля доступа техники к топливу, DW AI для анализа энергоэффективности',
      results: [
        { metric: '30%', description: 'оптимизация топливных запасов' },
        { metric: '20%', description: 'снижение простоев техники' },
        { metric: '45%', description: 'улучшение планирования закупок' },
        { metric: '100%', description: 'прозрачность учета по центрам затрат' }
      ],
      timeline: '14 месяцев',
      products: ['TradeStation', 'TradeCorp', 'TradeFrame', 'DW AI'],
      testimonial: 'Получили полный контроль над одной из самых больших статей расходов. Система окупилась уже в первый год эксплуатации.',
      icon: <Clock className="w-8 h-8 text-white" />,
      color: 'from-orange-500 to-amber-600'
    }
  ];

  const metrics = [
    { value: '500+', label: 'Успешных внедрений' },
    { value: '40%', label: 'Средняя экономия клиентов' },
    { value: '99.98%', label: 'Надежность систем' },
    { value: '24/7', label: 'Техническая поддержка' }
  ];

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
            Кейсы
            <br />
            <span className="font-black bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">внедрений</span>
          </h1>
          <p className="text-2xl lg:text-4xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto text-spacing">
            Реальные истории цифровой трансформации наших клиентов
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white section-spacing">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
                  {metric.value}
                </div>
                <p className="text-gray-600 text-lg">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-light-bg section-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {cases.map((caseItem) => (
              <div key={caseItem.title} className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className={`bg-gradient-to-r ${caseItem.color} p-10 lg:p-16 text-white`}>
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      {caseItem.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">{caseItem.title}</h2>
                      <div className="grid md:grid-cols-2 gap-6 text-white/90">
                        <div>
                          <span className="font-semibold">Клиент:</span> {caseItem.client}
                        </div>
                        <div>
                          <span className="font-semibold">Отрасль:</span> {caseItem.industry}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-16">
                  <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column */}
                    <div>
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold text-primary mb-6">Вызов</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{caseItem.challenge}</p>
                      </div>

                      <div className="mb-12">
                        <h3 className="text-2xl font-bold text-primary mb-6">Решение</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{caseItem.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-6">Использованные продукты</h3>
                        <div className="flex flex-wrap gap-3">
                          {caseItem.products.map((product) => (
                            <span key={product} className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium">
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold text-primary mb-6">Результаты</h3>
                        <div className="grid grid-cols-2 gap-6">
                          {caseItem.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="text-center p-6 bg-gray-50 rounded-2xl">
                              <div className="text-3xl font-bold text-accent mb-2">{result.metric}</div>
                              <p className="text-gray-600">{result.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-12">
                        <h3 className="text-2xl font-bold text-primary mb-6">Срок внедрения</h3>
                        <div className="text-xl text-accent font-bold">{caseItem.timeline}</div>
                      </div>

                      <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8">
                        <h3 className="text-xl font-bold text-primary mb-4">Отзыв клиента</h3>
                        <p className="text-gray-700 leading-relaxed italic">"{caseItem.testimonial}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-spacing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-light text-primary mb-12 lg:mb-16 tracking-tight leading-tight">
            Ваша история успеха — следующая
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-16">
            Присоединяйтесь к сотням компаний, которые уже трансформировали свой бизнес с DataWorker
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-accent text-white rounded-3xl font-bold text-xl hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Обсудить ваш проект
              <ArrowRight className="w-6 h-6 ml-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-10 py-5 bg-white text-primary border-2 border-primary rounded-3xl font-bold text-xl hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
            >
              Выбрать решение
              <ArrowRight className="w-6 h-6 ml-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
