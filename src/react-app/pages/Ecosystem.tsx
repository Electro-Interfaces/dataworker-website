import PageLayout from '@/react-app/components/PageLayout';
import { Link } from 'react-router';
import { ArrowRight, Zap, Database, Monitor, Users, CreditCard, Building2 } from 'lucide-react';

export default function EcosystemPage() {
  const products = [
    {
      name: 'TradeCorp',
      position: 'left-top',
      description: 'Корпоративный топливный процессинг',
      icon: <CreditCard className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      href: '/products/trade-corp'
    },
    {
      name: 'TradeTerminal',
      position: 'right-top',
      description: 'Автономные терминалы оплаты',
      icon: <Building2 className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      href: '/products/dw-terminal'
    },
    {
      name: 'TradeBonus',
      position: 'left-bottom',
      description: 'Система лояльности клиентов',
      icon: <Users className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      href: '/products/dw-loyalty'
    },
    {
      name: 'TradeStation',
      position: 'right-bottom',
      description: 'Управление АЗС комплексами',
      icon: <Database className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      href: '/products/dw-station'
    },
    {
      name: 'TradeFrame',
      position: 'center',
      description: 'Веб-платформа управления',
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-slate-500 to-slate-600',
      href: '/products/trade-frame'
    }
  ];

  const integrations = [
    { name: '1С', type: 'Учетные системы' },
    { name: 'SAP', type: 'ERP системы' },
    { name: 'Oracle', type: 'Базы данных' },
    { name: 'Salesforce', type: 'CRM системы' },
    { name: 'REST API', type: 'Открытые интерфейсы' },
    { name: 'WebHooks', type: 'Событийная интеграция' }
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

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-6xl lg:text-9xl xl:text-[12rem] font-extralight text-white content-spacing tracking-tighter leading-none">
            Экосистема
            <br />
            <span className="font-black bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">DataWorker</span>
          </h1>
          <p className="text-2xl lg:text-4xl text-white/80 font-light leading-relaxed max-w-5xl mx-auto text-spacing">
            Единая технологическая платформа для комплексной автоматизации топливного бизнеса
          </p>
        </div>
      </section>

      {/* Ecosystem Visualization */}
      <section className="bg-white section-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Central Management Hub */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central TradeFrame */}
            <div className="flex justify-center mb-24">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-slate-600">TradeFrame</h3>
                      <p className="text-slate-600/70 text-sm">Центр управления</p>
                    </div>
                  </div>
                </div>
                {/* Pulse rings */}
                <div className="absolute inset-0 w-80 h-80 border-4 border-slate-400/30 rounded-full animate-ping"></div>
                <div className="absolute -inset-4 w-88 h-88 border-2 border-slate-400/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-20 lg:gap-32 max-w-5xl mx-auto">
              {products.filter(product => product.position !== 'center').map((product) => (
                <Link 
                  key={product.name} 
                  to={product.href}
                  className="group block text-center"
                >
                  {/* Connection line to center */}
                  <div className="relative">
                    <div className={`w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br ${product.color} rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-700 text-white`}>
                      {product.icon}
                    </div>
                    
                    {/* Connection line */}
                    <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-b from-accent/50 to-transparent transform -translate-x-1/2 -translate-y-full"></div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-700">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {product.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="mt-32 lg:mt-48 text-center max-w-5xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-light text-primary mb-12 lg:mb-16 tracking-tight leading-tight">
              Как работает экосистема
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mt-24">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/20 rounded-3xl mx-auto mb-8 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">Единая платформа</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Все продукты работают на единой технологической платформе с общими API и базами данных
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-500/10 to-slate-500/20 rounded-3xl mx-auto mb-8 flex items-center justify-center">
                  <Monitor className="w-10 h-10 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">TradeFrame в центре</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  TradeFrame объединяет все продукты и предоставляет централизованное управление и аналитику
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/10 to-green-500/20 rounded-3xl mx-auto mb-8 flex items-center justify-center">
                  <Database className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">Масштабируемость</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Начните с одного продукта и добавляйте новые по мере роста бизнеса
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="bg-light-bg section-spacing">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-light text-primary mb-12 lg:mb-16 tracking-tight leading-tight">
            Интеграционные возможности
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-16 lg:mb-24">
            Экосистема DataWorker легко интегрируется с вашими существующими системами
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {integrations.map((integration) => (
              <div key={integration.name} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                <h3 className="text-xl font-bold text-primary mb-2">{integration.name}</h3>
                <p className="text-gray-600">{integration.type}</p>
              </div>
            ))}
          </div>

          <Link
            to="/integrations"
            className="inline-flex items-center px-10 py-5 bg-primary text-white rounded-3xl font-bold text-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Все интеграции
            <ArrowRight className="w-6 h-6 ml-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-spacing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-light text-primary mb-12 lg:mb-16 tracking-tight leading-tight">
            Готовы к трансформации?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-16">
            Начните с одного продукта или внедрите полную экосистему сразу
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center px-10 py-5 bg-accent text-white rounded-3xl font-bold text-xl hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Выбрать продукт
              <ArrowRight className="w-6 h-6 ml-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-white text-primary border-2 border-primary rounded-3xl font-bold text-xl hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
            >
              Обсудить внедрение
              <ArrowRight className="w-6 h-6 ml-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
