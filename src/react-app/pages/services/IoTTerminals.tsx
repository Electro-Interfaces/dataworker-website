import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import { Link } from 'react-router';
import {
  Cpu,
  Wifi,
  Terminal,
  ArrowRight,
  CheckCircle2,
  Settings,
  Monitor,
  HardDrive
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function IoTTerminalsPage() {
  usePageMeta({
    title: 'IoT и Терминалы',
    description: 'Разработка ПО для IoT-устройств и терминалов самообслуживания',
    keywords: 'IoT, терминалы самообслуживания, киоски, embedded, промышленная автоматизация'
  });
  const directions = [
    {
      title: 'Встраиваемое ПО',
      description: 'Разработка прошивок и низкоуровневого ПО для аппаратных контроллеров, датчиков и умных устройств.',
      icon: <Cpu className="w-8 h-8 text-white" />,
      features: ['C/C++ разработки', 'Embedded Linux', 'RTOS', 'Оптимизация драйверов'],
      gradient: 'from-navy-700 to-navy-900'
    },
    {
      title: 'Киоски самообслуживания',
      description: 'Создание интерфейсов для терминалов, касс самообслуживания и вендинговых аппаратов.',
      icon: <Terminal className="w-8 h-8 text-white" />,
      features: ['Защищенный режим (Kiosk Mode)', 'Интеграция периферии', 'Touch-friendly UI', 'Удаленное обновление'],
      gradient: 'from-navy-700 to-navy-900'
    },
    {
      title: 'IoT Облако',
      description: 'Платформа для сбора телеметрии, мониторинга состояния и удаленного управления парком устройств.',
      icon: <Wifi className="w-8 h-8 text-white" />,
      features: ['MQTT протокол', 'Real-time мониторинг', 'OTA обновления', 'Предиктивная аналитика'],
      gradient: 'from-navy-700 to-navy-900'
    },
    {
      title: 'Промышленная автоматизация',
      description: 'Интеграция с промышленным оборудованием (ТЭК, насосы, счетчики) по стандартным и проприетарным протоколам.',
      icon: <Settings className="w-8 h-8 text-white" />,
      features: ['Modbus/CAN', 'SCADA интеграция', 'Отказоустойчивость', 'Работа в оффлайне'],
      gradient: 'from-navy-700 to-navy-900'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-navy-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-navy-500/10 rounded-full blur-[80px]"></div>
        </div>

        <HexagonPattern id="hexagons-iot" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <div className="w-2 h-2 rounded-full bg-navy-400 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">Hardware & Software</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              IoT и <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-400 to-navy-300">Терминалы</span>
            </h1>

            <p className="text-xl text-navy-100/90 leading-relaxed mb-10 font-light max-w-2xl">
              Объединяем «железо» и софт. Разрабатываем решения для автоматизации физического мира: от умных колонок до киосков самообслуживания.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-navy-950 text-white rounded-2xl font-bold text-lg shadow-xl shadow-navy-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Обсудить задачу
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
              На стыке технологий
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Наш опыт позволяет создавать надежные системы самообслуживания
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

       {/* Hardware Banner */}
       <section className="bg-zinc-900 text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="relative order-2 lg:order-1">
                   {/* Abstract Terminal Representation */}
                   <div className="relative w-full aspect-square max-w-md mx-auto">
                       <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl animate-pulse"></div>
                       <div className="relative h-full bg-zinc-800 border-4 border-zinc-700 rounded-3xl p-6 shadow-2xl flex flex-col">
                           <div className="h-8 bg-zinc-900 rounded-full mb-6 flex items-center px-4 gap-2">
                               <div className="w-2 h-2 rounded-full bg-red-500"></div>
                               <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                               <div className="w-2 h-2 rounded-full bg-green-500"></div>
                           </div>
                           <div className="flex-1 bg-zinc-900 rounded-xl border border-zinc-700 flex items-center justify-center overflow-hidden relative">
                               <div className="absolute inset-0 flex items-center justify-center">
                                   <div className="text-navy-500 font-mono text-sm">System Ready...</div>
                               </div>
                               {/* Scanning line */}
                               <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500/50 blur-sm animate-[scan_2s_ease-in-out_infinite]"></div>
                           </div>
                           <div className="mt-6 h-16 bg-zinc-700 rounded-xl flex items-center justify-center gap-4">
                               <div className="w-12 h-2 bg-zinc-600 rounded-full"></div>
                               <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                           </div>
                       </div>
                   </div>
               </div>

               <div className="order-1 lg:order-2">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-6">Работаем с любым оборудованием</h2>
                  <p className="text-xl text-zinc-400 mb-8">
                     У нас есть опыт интеграции с сотнями моделей устройств: от фискальных регистраторов до промышленных контроллеров.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                          <HardDrive className="w-8 h-8 text-blue-400" />
                          <h4 className="font-bold">Периферия</h4>
                          <p className="text-sm text-zinc-500">Принтеры, сканеры, купюроприемники, диспенсеры карт</p>
                      </div>
                       <div className="flex flex-col gap-2">
                          <Monitor className="w-8 h-8 text-blue-400" />
                          <h4 className="font-bold">Интерфейсы</h4>
                          <p className="text-sm text-zinc-500">Разработка Touch-интерфейсов любой сложности</p>
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
            Нужна автоматизация?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-navy-950 text-white rounded-2xl font-bold text-lg hover:bg-navy-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Связаться с инженерами
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
