import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import { Link } from 'react-router';
import {
  Smartphone,
  Tablet,
  Layers,
  Zap,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function MobileDevelopmentPage() {
  usePageMeta({
    title: 'Мобильная разработка',
    description: 'Нативные и кроссплатформенные мобильные приложения',
    keywords: 'мобильная разработка, iOS, Android, React Native, Flutter, Swift, Kotlin'
  });
  const directions = [
    {
      title: 'Нативные приложения',
      description: 'Максимальная производительность и доступ к API устройства. Swift для iOS и Kotlin для Android.',
      icon: <Smartphone className="w-8 h-8 text-white" />,
      features: ['Высокая производительность', 'Доступ к Bluetooth/NFC', 'Сложные анимации', 'Лучший UX'],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Кроссплатформенность',
      description: 'Единый код для iOS и Android на React Native или Flutter. Оптимальный выбор для быстрого запуска.',
      icon: <Layers className="w-8 h-8 text-white" />,
      features: ['Единая кодовая база', 'Быстрый Time-to-Market', 'Экономия бюджета', 'Простота поддержки'],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'SuperApps',
      description: 'Многофункциональные приложения-экосистемы, объединяющие множество сервисов в одном интерфейсе.',
      icon: <Zap className="w-8 h-8 text-white" />,
      features: ['Мини-приложения', 'Единая авторизация', 'Встроенный кошелек', 'Программа лояльности'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Enterprise Mobility',
      description: 'Защищенные корпоративные приложения для сотрудников: курьеров, инженеров, менеджеров.',
      icon: <Tablet className="w-8 h-8 text-white" />,
      features: ['MDM-профили', 'Оффлайн-режим', 'Защита данных', 'Интеграция с CRM'],
      gradient: 'from-sky-500 to-blue-600'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[80px]"></div>
        </div>

        <HexagonPattern id="hexagons-mobile" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">Mobile First</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Мобильные <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Экосистемы</span>
            </h1>

            <p className="text-xl text-blue-100/90 leading-relaxed mb-10 font-light max-w-2xl">
              Создаем красивые и быстрые мобильные приложения, которые любят пользователи и App Store. От MVP до масштабных SuperApps.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Заказать приложение
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Экспертиза в мобильной разработке
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Полный цикл создания мобильных продуктов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {directions.map((item, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 text-blue-500`} />
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       {/* Tech Stack Banner */}
       <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <h2 className="text-3xl font-bold mb-12">Технологии, которые мы используем</h2>
             <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-70">
                <div className="flex flex-col items-center gap-2">
                    <Code2 className="w-10 h-10" />
                    <span className="font-mono text-sm">Swift</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Code2 className="w-10 h-10" />
                    <span className="font-mono text-sm">Kotlin</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Cpu className="w-10 h-10" />
                    <span className="font-mono text-sm">React Native</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Layers className="w-10 h-10" />
                    <span className="font-mono text-sm">Flutter</span>
                </div>
             </div>
          </div>
       </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Есть идея приложения?
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Превратим вашу идею в продукт, который установят тысячи пользователей
          </p>
            <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Рассчитать стоимость
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
