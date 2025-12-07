import { Cloud, Server, Calculator, RefreshCw, Zap } from 'lucide-react';

export default function DeploymentOptions() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Варианты развёртывания
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий вариант размещения системы — в облаке или на вашей инфраструктуре
          </p>
        </div>

        {/* Two deployment options */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Cloud option - recommended */}
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="absolute -top-3 left-6">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                Рекомендуем
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6 mt-2">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Cloud className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Облачное решение</h3>
                <p className="text-sm text-gray-500">На серверах DataWorker</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                'Быстрый старт за несколько дней',
                'Предсказуемые ежемесячные платежи',
                'Обновления и поддержка включены',
                'Резервное копирование и мониторинг 24/7',
                'Масштабирование по мере роста',
                'Не нужны собственные IT-специалисты'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-blue-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-blue-700">Идеально для:</span> большинства сетей АЗС, которые хотят сфокусироваться на бизнесе, а не на IT
              </p>
            </div>
          </div>

          {/* On-premise option */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gray-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Server className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">На вашей инфраструктуре</h3>
                <p className="text-sm text-gray-500">On-premise развёртывание</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                'Полный контроль над данными',
                'Размещение в вашем дата-центре',
                'Соответствие внутренним политикам ИБ',
                'Интеграция с корпоративной сетью',
                'Возможность доработки под требования',
                'Техподдержка и обновления по договору'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-700">Идеально для:</span> крупных сетей с собственной IT-инфраструктурой и строгими требованиями к безопасности
              </p>
            </div>
          </div>
        </div>

        {/* Cloud benefits */}
        <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">
              Почему облако — выгодный выбор
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Calculator className="w-6 h-6" />,
                title: 'Нет капитальных затрат',
                description: 'Вместо крупной разовой инвестиции — фиксированная ежемесячная плата, которую легко планировать'
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: 'Обновления бесплатно',
                description: 'Новые функции и улучшения появляются автоматически, без дополнительных платежей'
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Экономия на IT',
                description: 'Не нужно содержать серверы, системных администраторов и закупать лицензии'
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-blue-200 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
