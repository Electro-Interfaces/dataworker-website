import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import { Link } from 'react-router';
import {
  Server,
  CreditCard,
  Network,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Activity,
  DatabaseIcon
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function ProcessingSystemsPage() {
  usePageMeta({
    title: 'Процессинговые системы',
    description: 'Разработка биллинговых и транзакционных систем',
    keywords: 'процессинг, биллинг, топливные карты, лояльность, транзакции, fintech'
  });
  const directions = [
    {
      title: 'Биллинг топливных карт',
      description: 'Полный цикл управления топливными картами: эмиссия, авторизация транзакций, управление лимитами и отчетность.',
      icon: <CreditCard className="w-8 h-8 text-white" />,
      features: ['Онлайн-авторизация', 'Управление лимитами', 'Блокировка карт', 'FMS протоколы'],
      gradient: 'from-navy-700 to-navy-900'
    },
    {
      title: 'Процессинг лояльности',
      description: 'Гибкий движок для начисления и списания бонусов. Поддержка сложных акций, уровней лояльности и персональных предложений.',
      icon: <Activity className="w-8 h-8 text-white" />,
      features: ['Real-time процессинг', 'Конструктор акций', 'Каскадные скидки', 'Сгораемые бонусы'],
      gradient: 'from-navy-700 to-navy-900'
    },
    {
      title: 'Маршрутизация заказов',
      description: 'Интеллектуальная система распределения заказов между поставщиками, курьерами и точками выдачи.',
      icon: <Network className="w-8 h-8 text-white" />,
      features: ['Гео-распределение', 'Балансировка нагрузки', 'SLA-мониторинг', 'Трекинг статусов'],
      gradient: 'from-navy-700 to-navy-900'
    },
    {
      title: 'Host-to-Host Интеграции',
      description: 'Защищенные шлюзы для прямого обмена данными с банками и ERP-системами партнеров.',
      icon: <Server className="w-8 h-8 text-white" />,
      features: ['ISO 8583', 'SOAP/REST API', 'Шифрование ГОСТ', 'Высокая отказоустойчивость'],
      gradient: 'from-navy-700 to-navy-900'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-500/10 rounded-full blur-[80px]"></div>
        </div>

        <HexagonPattern id="hexagons-processing" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <div className="w-2 h-2 rounded-full bg-navy-400 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">Fintech Core</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Процессинговые <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-400 to-navy-300">Системы</span>
            </h1>

            <p className="text-xl text-navy-100/90 leading-relaxed mb-10 font-light max-w-2xl">
              Надежные решения для обработки транзакций. Биллинг, лояльность и интеграции, способные выдержать миллионы операций в секунду.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-navy-950 text-white rounded-2xl font-bold text-lg shadow-xl shadow-navy-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Заказать систему
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Транзакционное ядро
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Мы создаем системы, где важна каждая миллисекунда и каждый цент
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {directions.map((item, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-navy-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 text-navy-500`} />
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <ShieldCheck className="w-16 h-16 text-blue-400 mb-6" />
               <h2 className="text-3xl lg:text-5xl font-bold mb-6">Безопасность банковского уровня</h2>
               <p className="text-xl text-slate-300 mb-8 max-w-lg">
                 Наши системы соответствуют стандартам PCI DSS и используют современное шифрование для защиты данных ваших клиентов.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                     </div>
                     <span className="text-slate-200">End-to-end шифрование</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                     </div>
                     <span className="text-slate-200">Защита от DDoS-атак</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                     </div>
                     <span className="text-slate-200">Регулярные аудиты безопасности</span>
                  </li>
               </ul>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
               <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                     <div className="flex items-center gap-3">
                        <DatabaseIcon className="w-6 h-6 text-slate-400" />
                        <span className="font-mono text-blue-400">Secure Transaction Log</span>
                     </div>
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     </div>
                  </div>
                  <div className="font-mono text-sm space-y-3 text-slate-400">
                     <div className="flex justify-between">
                        <span>TX_ID: 849302-A</span>
                        <span className="text-blue-400">ENCRYPTED</span>
                     </div>
                     <div className="flex justify-between">
                        <span>TX_ID: 849303-B</span>
                        <span className="text-blue-400">ENCRYPTED</span>
                     </div>
                     <div className="flex justify-between">
                        <span>TX_ID: 849304-C</span>
                        <span className="text-blue-400">ENCRYPTED</span>
                     </div>
                     <div className="h-px bg-slate-700 my-4"></div>
                     <div className="text-center text-xs text-slate-500 uppercase tracking-widest">
                        System Integrity Verified
                     </div>
                  </div>
               </div>
            </div>
         </div>
       </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Готовы запустить процессинг?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-navy-950 text-white rounded-2xl font-bold text-lg hover:bg-navy-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Связаться с экспертом
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
