import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import { Link } from 'react-router';
import {
  Globe,
  Layout,
  Users,
  Shield,
  Server,
  ArrowRight,
  CheckCircle2,
  ShoppingCart
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function DigitalPlatformsPage() {
  usePageMeta({
    title: 'Web Платформы',
    description: 'Разработка высоконагруженных веб-сервисов и SaaS-решений',
    keywords: 'веб-разработка, SaaS, B2B, личные кабинеты, маркетплейсы, high-load'
  });
  const directions = [
    {
      title: 'B2B Личные кабинеты',
      description: 'Порталы самообслуживания для корпоративных клиентов. Управление заказами, документами и балансами в реальном времени.',
      icon: <Users className="w-8 h-8 text-white" />,
      features: ['Ролевая модель доступа', 'Электронный документооборот', 'История операций', 'Интеграция с ERP'],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'SaaS Решения',
      description: 'Разработка облачных программных продуктов по модели подписки. Масштабируемая архитектура и мультитеннантность.',
      icon: <Globe className="w-8 h-8 text-white" />,
      features: ['Мультитеннантность', 'Биллинг подписок', 'API для интеграций', 'Высокая доступность'],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Маркетплейсы',
      description: 'Торговые площадки для взаимодействия множества поставщиков и покупателей. Сложные каталоги и поиск.',
      icon: <Layout className="w-8 h-8 text-white" />,
      features: ['Управление каталогом', 'Умный поиск (ElasticSearch)', 'Корзина и чекаут', 'Кабинет поставщика'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'High-Load Системы',
      description: 'Порталы, рассчитанные на миллионы пользователей и пиковые нагрузки. Оптимизированный бэкенд и кэширование.',
      icon: <Server className="w-8 h-8 text-white" />,
      features: ['Микросервисы', 'Балансировка нагрузки', 'Redis/Memcached', 'Очереди сообщений'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Интернет-магазины',
      description: 'Разработка e-commerce платформ любой сложности. От небольших магазинов до крупных онлайн-ритейлеров с тысячами товаров.',
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      features: ['Каталог и фильтры', 'Корзина и оплата', 'Интеграция с 1С', 'Личный кабинет покупателя'],
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[80px]"></div>
        </div>

        <HexagonPattern id="hexagons-digital" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">Web Development</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Цифровые <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Платформы</span>
            </h1>

            <p className="text-xl text-blue-100/90 leading-relaxed mb-10 font-light max-w-2xl">
              Разрабатываем сложные веб-сервисы, личные кабинеты и экосистемы, которые трансформируют бизнес-процессы и улучшают клиентский опыт.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Обсудить проект
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Grid (Replacement for Tabs) */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Что мы создаем
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Решения, заточенные под масштаб и высокие нагрузки
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

      {/* Tech Stack Section */}
      <section className="bg-slate-900 py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Технологический стек
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Мы используем современные и проверенные инструменты для обеспечения производительности, безопасности и масштабируемости ваших проектов.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <Layout className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Frontend</div>
                    <div className="text-slate-400">React, TypeScript, TailwindCSS, Next.js</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                    <Server className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Backend</div>
                    <div className="text-slate-400">Node.js, Go, Python, PostgreSQL</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">DevOps & Security</div>
                    <div className="text-slate-400">Docker, Kubernetes, CI/CD, OAuth2</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-slate-800/50 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Uptime</div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">0.1s</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Latency</div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-1">High</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Security</div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Support</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Нужна надежная платформа?
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Давайте обсудим архитектуру вашего будущего проекта
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Начать сотрудничество
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

    </PageLayout>
  );
}
