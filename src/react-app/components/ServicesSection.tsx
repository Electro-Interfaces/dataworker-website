import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      name: 'Разработка AI-решений',
      href: '/services/ai-solutions',
      description: 'Разрабатываем и внедряем алгоритмы машинного обучения для прогнозирования спроса, анализа данных и оптимизации операционной деятельности. Превращаем ваши данные в конкурентное преимущество.'
    },
    {
      name: 'Создание личных кабинетов',
      href: '/services/customer-portals',
      description: 'Проектируем и создаем удобные и функциональные веб-порталы для ваших клиентов и партнеров. Обеспечиваем доступ к данным, отчетам и управлению услугами в интуитивно понятном интерфейсе.'
    },
    {
      name: 'Разработка мобильных приложений',
      href: '/services/mobile-apps',
      description: 'Создаем нативные и кроссплатформенные мобильные приложения, которые решают конкретные бизнес-задачи: от оплаты услуг и программ лояльности до управления оборудованием и персоналом.'
    },
    {
      name: 'Разработка процессинговых решений',
      href: '/services/processing-solutions',
      description: 'Проектируем и строим надежные и высокопроизводительные процессинговые платформы для обработки транзакций, управления счетами и интеграции с финансовыми институтами.'
    },
    {
      name: 'Разработка терминалов',
      href: '/services/terminal-development',
      description: 'Полный цикл создания программного обеспечения терминалов самообслуживания, комплектация терминалов и интеграции в вашу IT-инфраструктуру.'
    },
    {
      name: 'Интеграция Host-to-Host',
      href: '/services/host-to-host',
      description: 'Обеспечиваем надежное и безопасное прямое соединение между вашей системой и внешними платформами для обмена данными в реальном времени, минимизируя издержки и затраты на оборудование.'
    }
  ];

  return (
    <section className="bg-light-bg section-spacing">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center content-spacing max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-light text-dark-gray mb-4 leading-tight">
            Наши услуги
          </h2>
          <p className="text-xl text-medium-gray leading-relaxed">
            Персонализированные технологии нового поколения
          </p>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 content-spacing auto-rows-fr">
          {services.map((service) => (
            <Link key={service.name} to={service.href} className="group block h-full">
              <div className="dashboard-card p-8 hover-lift relative h-full flex flex-col">
                {/* Service content */}
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-dark-gray group-hover:text-primary transition-colors mb-6 leading-tight">
                    {service.name}
                  </h3>
                  
                  <p className="text-medium-gray leading-relaxed text-lg flex-grow pb-12">
                    {service.description}
                  </p>
                </div>

                {/* Arrow indicator at bottom */}
                <div className="absolute bottom-8 right-8 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Все услуги
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
