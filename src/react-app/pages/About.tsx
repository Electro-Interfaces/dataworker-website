import PageLayout from '@/react-app/components/PageLayout';
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
    description: 'ElsyPlus — команда экспертов в разработке программного обеспечения для топливной отрасли',
    keywords: 'ElsyPlus, о компании, команда разработчиков, экспертиза, автоматизация АЗС'
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

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 pb-64 lg:pb-96 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/tradesuite-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-navy-950/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Команда ElsyPlus
          </h1>
        </div>

        <div className="absolute bottom-8 lg:bottom-12 left-0 right-0 z-10 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              Мы создаем технологические решения, которые помогают бизнесу работать автономно и эффективно в любых условиях
            </p>
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
                ElsyPlus — команда инженеров и разработчиков, объединённая многолетним опытом в автоматизации топливного ритейла. Мы развиваем экосистему TradeSuite — от терминалов самообслуживания до облачных платформ управления сетями АЗС.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Наша экспертиза основана на глубоком знании отрасли и десятилетиях практического опыта. Мы также предоставляем услуги заказной разработки, применяя компетенции, отточенные при создании собственных продуктов.
              </p>
              <div className="space-y-4">
                {['Собственные продукты и R&D', 'Опыт работы с крупным бизнесом', 'Полный цикл разработки'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-navy-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 rounded-2xl p-8 lg:p-12">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-navy-500/20 rounded-full blur-2xl"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl lg:text-7xl font-bold text-white mb-4">20+</div>
                  <div className="text-xl text-navy-100 mb-2">лет на рынке</div>
                  <div className="text-navy-200/60">разработки ПО</div>
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
                  <div className="w-14 h-14 bg-gradient-to-br from-navy-700 to-navy-800 rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
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
                      className="px-3 py-1 bg-navy-50 text-navy-700 text-sm rounded-full font-medium"
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
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-700 to-navy-800 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white shadow-lg">
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
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Готовы собрать команду для вашего проекта?
          </h2>
          <p className="text-lg text-navy-100 mb-8 max-w-2xl mx-auto">
            Расскажите о своей задаче, и мы подберем идеальный состав специалистов
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-navy-950 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
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
