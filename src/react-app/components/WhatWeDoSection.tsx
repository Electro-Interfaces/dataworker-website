import { Code, Cpu, Network } from 'lucide-react';

const WhatWeDoSection = () => {
  const directions = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Программные решения',
      description: 'Веб-платформы, системы процессинга, мобильные приложения и личные кабинеты'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Аппаратные комплексы',
      description: 'Терминалы самообслуживания и системы управления оборудованием АЗС'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Интеграции',
      description: 'Host-to-Host соединения, API для внешних систем, интеграция с 1С'
    }
  ];

  return (
    <section className="bg-off-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
            Что мы делаем
          </h2>
          <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
            Разрабатываем технологические решения для автоматизации бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {directions.map((direction, index) => (
            <div key={index} className="dashboard-card p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                {direction.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-4">
                {direction.title}
              </h3>
              <p className="text-medium-gray leading-relaxed">
                {direction.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;