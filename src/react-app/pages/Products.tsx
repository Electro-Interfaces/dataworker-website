import PageLayout from '@/react-app/components/PageLayout';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      name: 'TradeCorp',
      href: '/products/trade-corp',
      description: 'Корпоративный топливный процессинг — единая технологическая платформа для управления топливными картами автопарков. Чиповые и виртуальные карты, личный кабинет, мобильное приложение и гибкое управление лимитами.',
      features: ['Топливные чиповые и виртуальные карты', 'Личный кабинет для управления', 'Мобильное приложение для водителей', 'Интеграция с ERP/CRM системами'],
      visual: (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl mb-6 mx-auto flex items-center justify-center relative">
            {/* Corporate processing dashboard icon */}
            <div className="w-10 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-1 h-1 bg-blue-600 rounded-sm"></div>
                <div className="w-1 h-1 bg-blue-500 rounded-sm"></div>
                <div className="w-1 h-1 bg-blue-500 rounded-sm"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-sm"></div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
            <div className="text-sm text-gray-600">Автоматизация процессов</div>
          </div>
        </div>
      )
    },
    {
      name: 'TradeTerminal',
      href: '/products/dw-terminal',
      description: 'Уличные терминалы самообслуживания с большим 17" экраном, купюроприемником и защищенным корпусом. Работают автономно 24/7 в любых погодных условиях.',
      features: ['Большой 17" сенсорный экран', 'Купюроприемник и кардридер', 'Защищенный всепогодный корпус', 'Автономная работа без интернета'],
      visual: (
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
          <div className="w-16 h-16 bg-green-600 rounded-xl mb-6 mx-auto flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-600 mb-2">Online</div>
            <div className="text-sm text-gray-600">Статус терминала</div>
          </div>
        </div>
      )
    },
    {
      name: 'TradeGate',
      href: '/products/trade-gate',
      description: 'Система интеграции онлайн-заказов между мобильными приложениями и торговыми сетями. Технологический посредник для корректного обмена данными между разными протоколами.',
      features: ['Приём заказов от мобильных приложений', 'Передача заказов в торговые сети', 'Мониторинг транзакций', 'Отчётность и аналитика'],
      visual: (
        <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8">
          <div className="w-16 h-16 bg-purple-600 rounded-xl mb-6 mx-auto flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Обработка заказов</div>
          </div>
        </div>
      )
    },
    {
      name: 'TradeStation',
      href: '/products/dw-station',
      description: 'Программный комплекс для управления оборудованием АЗС/АГЗС. Модульные заправочные станции с интеллектуальной системой управления, продвинутой безопасностью и энергоэффективными технологиями.',
      features: ['Модульная архитектура', 'Система самодиагностики', 'Многоуровневая безопасность', 'Централизованное управление'],
      visual: (
        <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-8">
          <div className="w-16 h-16 bg-orange-600 rounded-xl mb-6 mx-auto flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">87%</div>
            <div className="text-sm text-gray-600">Уровень топлива</div>
          </div>
        </div>
      )
    },
    {
      name: 'TradeFrame',
      href: '/products/trade-frame',
      description: 'Веб-платформа для централизованного управления и аналитики всей экосистемы. Единый интерфейс для контроля TradeTerminal и TradeStation из любой точки мира с продвинутой системой отчетности.',
      features: ['Единый дашборд управления', 'Продвинутая аналитика', 'Удаленная настройка', 'Многоуровневый доступ'],
      visual: (
        <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8">
          <div className="w-16 h-16 bg-slate-600 rounded-xl mb-6 mx-auto flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Онлайн управление</div>
          </div>
        </div>
      )
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
            Продукты DataWorker
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
            Готовые решения для быстрого внедрения и автоматизации бизнес-процессов
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {products.map((product, index) => (
              <div key={product.name} className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {product.visual}
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h2 className="text-3xl lg:text-5xl font-light text-primary mb-6 lg:mb-8 tracking-tight leading-tight">
                    {product.name}
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 mb-8 lg:mb-10 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-10 lg:mb-12">
                    <h3 className="text-lg font-semibold text-primary mb-6">Ключевые возможности:</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={product.href}
                    className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Подробнее о {product.name}
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
