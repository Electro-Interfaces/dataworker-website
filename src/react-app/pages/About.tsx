import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import { Link } from 'react-router';
import {
  Users,
  Code,
  Palette,
  Brain,
  Bug,
  Database,
  Target,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta({
    title: 'О нас',
    description: 'DataWorker — команда экспертов в разработке программного обеспечения',
    keywords: 'DataWorker, о компании, команда разработчиков, экспертиза, инжиниринговый центр'
  });
  const teamRoles = [
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Product Manager',
      subtitle: 'Ведет проект от идеи до результата',
      skills: ['Стратегия', 'Аналитика', 'Координация']
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: 'Backend Developer',
      subtitle: 'Создает надежную серверную архитектуру',
      skills: ['API', 'Базы данных', 'Безопасность']
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: 'Frontend Developer',
      subtitle: 'Воплощает дизайн в интерфейс',
      skills: ['React', 'TypeScript', 'UI/UX']
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: 'UI/UX Designer',
      subtitle: 'Создает интуитивные интерфейсы',
      skills: ['Дизайн', 'Прототипы', 'Исследования']
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: 'AI Specialist',
      subtitle: 'Внедряет машинное обучение',
      skills: ['ML', 'Алгоритмы', 'Данные']
    },
    {
      icon: <Bug className="w-7 h-7" />,
      title: 'QA Engineer',
      subtitle: 'Гарантирует качество продукта',
      skills: ['Тестирование', 'Автоматизация', 'Контроль']
    }
  ];

  const teamPrinciples = [
    {
      icon: <Target className="w-7 h-7" />,
      title: 'Под вашу задачу',
      description: 'Команда собирается исходя из специфики проекта'
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: 'Без лишних ролей',
      description: 'Только те специалисты, которые нужны именно вам'
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Быстрый старт',
      description: 'Команда готова приступить к работе в кратчайшие сроки'
    }
  ];

  const stats = [
    { value: '20', label: 'Лет опыта' },
    { value: '50+', label: 'Проектов' },
    { value: '24/7', label: 'Поддержка' }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <HexagonPattern id="hexagons-about" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-wide uppercase">О нас</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Инжиниринговый центр DataWorker
          </h1>
          <p className="text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Мы создаем технологические решения, которые помогают бизнесу работать автономно и эффективно в любых условиях
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 lg:gap-16 border-t border-white/10 pt-8 max-w-xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs lg:text-sm text-blue-200/60 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                DataWorker развивает экосистему TradeSuite — комплекс продуктов для автоматизации топливного ритейла. От терминалов самообслуживания до облачных платформ управления сетями АЗС.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Мы также предоставляем услуги заказной разработки, применяя экспертизу, полученную при создании собственных продуктов.
              </p>
              <div className="space-y-4">
                {['Собственные продукты и R&D', 'Опыт работы с крупным бизнесом', 'Полный цикл разработки'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 rounded-2xl p-8 lg:p-12">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl lg:text-7xl font-bold text-white mb-4">20+</div>
                  <div className="text-xl text-blue-100 mb-2">лет на рынке</div>
                  <div className="text-blue-200/60">разработки ПО</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Своя команда для каждого проекта
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Мы не верим в шаблонные решения. Под каждую задачу собирается уникальная команда профессионалов.
            </p>
          </div>

          {/* Team Roles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {teamRoles.map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {role.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {role.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Principles */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Как мы работаем
              </h3>
              <p className="text-gray-500">
                Три принципа формирования проектных команд
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamPrinciples.map((principle, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white shadow-lg">
                    {principle.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Готовы собрать команду для вашего проекта?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Расскажите о своей задаче, и мы подберем идеальный состав специалистов
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Обсудить проект
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Наши продукты
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
