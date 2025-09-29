import PageLayout from '@/react-app/components/PageLayout';
import { Link } from 'react-router';
import { ArrowRight, Database, Cloud, Smartphone, CreditCard, Building2, Truck, ShoppingCart, Users } from 'lucide-react';

export default function IntegrationsPage() {
  const integrationCategories = [
    {
      title: 'Учетные системы',
      description: 'Интеграция с системами бухгалтерского и управленческого учета',
      icon: <Database className="w-8 h-8 text-accent" />,
      integrations: [
        { name: '1С:Предприятие 8', description: 'Полная интеграция с конфигурациями УТ, УПП, ERP', status: 'ready' },
        { name: '1С:Розница', description: 'Синхронизация товаров, цен и остатков', status: 'ready' },
        { name: 'СБИС', description: 'Обмен документами и отчетностью', status: 'ready' },
        { name: 'Контур.Эльба', description: 'Автоматическая выгрузка операций', status: 'development' }
      ]
    },
    {
      title: 'ERP системы',
      description: 'Подключение к корпоративным системам управления ресурсами',
      icon: <Building2 className="w-8 h-8 text-accent" />,
      integrations: [
        { name: 'SAP ERP', description: 'Модули FI, MM, SD для крупных предприятий', status: 'ready' },
        { name: 'Oracle ERP Cloud', description: 'Финансы, закупки, управление проектами', status: 'ready' },
        { name: 'Microsoft Dynamics 365', description: 'CRM и ERP функциональность', status: 'ready' },
        { name: 'Галактика ERP', description: 'Российская ERP для среднего и крупного бизнеса', status: 'ready' }
      ]
    },
    {
      title: 'CRM системы',
      description: 'Управление взаимоотношениями с клиентами и продажами',
      icon: <Users className="w-8 h-8 text-accent" />,
      integrations: [
        { name: 'Salesforce', description: 'Лидирующая мировая CRM платформа', status: 'ready' },
        { name: 'AmoCRM', description: 'Популярная российская CRM система', status: 'ready' },
        { name: 'Битрикс24', description: 'CRM и корпоративный портал', status: 'ready' },
        { name: 'HubSpot', description: 'Комплексная маркетинговая платформа', status: 'development' }
      ]
    },
    {
      title: 'Платежные системы',
      description: 'Интеграция с банками и платежными сервисами',
      icon: <CreditCard className="w-8 h-8 text-accent" />,
      integrations: [
        { name: 'Сбербанк Эквайринг', description: 'Прием банковских карт', status: 'ready' },
        { name: 'ЮКасса (Яндекс)', description: 'Онлайн и офлайн платежи', status: 'ready' },
        { name: 'CloudPayments', description: 'Облачный эквайринг', status: 'ready' },
        { name: 'Тинькофф Эквайринг', description: 'API для приема платежей', status: 'ready' },
        { name: 'СБП (Система Быстрых Платежей)', description: 'Мгновенные переводы по номеру телефона', status: 'ready' }
      ]
    },
    {
      title: 'Логистика и склады',
      description: 'Системы управления складом и логистикой',
      icon: <Truck className="w-8 h-8 text-accent" />,
      integrations: [
        { name: 'WMS Lighthouse', description: 'Система управления складом', status: 'ready' },
        { name: 'Axelot WMS', description: 'Российская WMS система', status: 'ready' },
        { name: 'Яндекс.Доставка', description: 'Служба курьерской доставки', status: 'development' },
        { name: 'СДЭК', description: 'Экспресс-доставка по России', status: 'development' }
      ]
    },
    {
      title: 'E-commerce платформы',
      description: 'Интеграция с платформами электронной коммерции',
      icon: <ShoppingCart className="w-8 h-8 text-accent" />,
      integrations: [
        { name: 'Shopify', description: 'Глобальная платформа электронной торговли', status: 'ready' },
        { name: 'WooCommerce', description: 'Плагин для WordPress', status: 'ready' },
        { name: 'InSales', description: 'Российская SaaS платформа', status: 'ready' },
        { name: 'Магазин на Маркете', description: 'Яндекс.Маркет для продавцов', status: 'development' }
      ]
    }
  ];

  const apiFeatures = [
    {
      title: 'REST API',
      description: 'Современный RESTful API для всех операций',
      icon: <Cloud className="w-6 h-6 text-accent" />
    },
    {
      title: 'WebHooks',
      description: 'Мгновенные уведомления о событиях',
      icon: <Smartphone className="w-6 h-6 text-accent" />
    },
    {
      title: 'GraphQL',
      description: 'Гибкие запросы для мобильных приложений',
      icon: <Database className="w-6 h-6 text-accent" />
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ready':
        return <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Готово</span>;
      case 'development':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">В разработке</span>;
      default:
        return null;
    }
  };

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
            Интеграции
            <br />
            <span className="font-black bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">без границ</span>
          </h1>
          <p className="text-2xl lg:text-4xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto text-spacing">
            Подключайтесь к любым системам через открытые API и готовые коннекторы
          </p>
        </div>
      </section>

      {/* API Features */}
      <section className="bg-white section-spacing">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-light text-primary mb-12 lg:mb-16 tracking-tight leading-tight">
            Открытая архитектура
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-24">
            {apiFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/20 rounded-3xl mx-auto mb-8 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl p-12 lg:p-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Полная документация API</h3>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Подробная техническая документация, примеры кода и SDK для быстрой интеграции
            </p>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Документация API
              <ArrowRight className="w-5 h-5 ml-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="bg-light-bg section-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24 lg:mb-32">
            <h2 className="text-5xl lg:text-7xl font-light text-primary mb-12 lg:mb-16 tracking-tight leading-tight">
              Готовые интеграции
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Более 50 готовых интеграций с популярными системами. Не нашли нужную? Создадим под заказ.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {integrationCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-3xl p-10 lg:p-16 shadow-xl">
                <div className="flex items-center mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl flex items-center justify-center mr-6">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{category.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{category.description}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {category.integrations.map((integration) => (
                    <div key={integration.name} className="border border-gray-200 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-500">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-primary">{integration.name}</h4>
                        {getStatusBadge(integration.status)}
                      </div>
                      <p className="text-gray-600 leading-relaxed">{integration.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration CTA */}
      <section className="bg-white section-spacing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-light text-primary mb-12 lg:mb-16 tracking-tight leading-tight">
            Нужна особая интеграция?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-16">
            Наша команда создаст интеграцию с любой системой под ваши требования
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">7 дней</div>
              <p className="text-gray-600">Средний срок создания интеграции</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">99.9%</div>
              <p className="text-gray-600">Надежность интеграций</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">24/7</div>
              <p className="text-gray-600">Техническая поддержка</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-accent text-white rounded-3xl font-bold text-xl hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Заказать интеграцию
              <ArrowRight className="w-6 h-6 ml-4" />
            </Link>
            <Link
              to="/ecosystem"
              className="inline-flex items-center px-10 py-5 bg-white text-primary border-2 border-primary rounded-3xl font-bold text-xl hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
            >
              Экосистема DataWorker
              <ArrowRight className="w-6 h-6 ml-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
