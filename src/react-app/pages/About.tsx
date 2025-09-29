import Navigation from '@/react-app/components/Navigation';
import WhatWeDoSection from '@/react-app/components/WhatWeDoSection';
import { Link } from 'react-router';
import { Users, Code, Palette, Brain, Bug, Database, Target, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const teamRoles = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Product Manager',
      subtitle: 'Ведет проект от идеи до результата',
      skills: ['Стратегия', 'Аналитика', 'Координация']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Developer',
      subtitle: 'Создает надежную серверную архитектуру',
      skills: ['API', 'Базы данных', 'Безопасность']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Developer',
      subtitle: 'Воплощает дизайн в интерфейс',
      skills: ['React', 'TypeScript', 'UI/UX']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Designer',
      subtitle: 'Создает интуитивные интерфейсы',
      skills: ['Дизайн', 'Прототипы', 'Исследования']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Specialist',
      subtitle: 'Внедряет машинное обучение',
      skills: ['ML', 'Алгоритмы', 'Данные']
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: 'QA Engineer',
      subtitle: 'Гарантирует качество продукта',
      skills: ['Тестирование', 'Автоматизация', 'Контроль']
    }
  ];

  const teamPrinciples = [
    {
      title: 'Под вашу задачу',
      description: 'Команда собирается исходя из специфики проекта'
    },
    {
      title: 'Без лишних ролей',
      description: 'Только те специалисты, которые нужны именно вам'
    },
    {
      title: 'Быстрый старт',
      description: 'Команда готова приступить к работе в кратчайшие сроки'
    }
  ];

  return (
    <div className="relative">
      <Navigation />
      <main className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="bg-primary py-32 lg:py-48 pb-40 lg:pb-56 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(3,155,229,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 lg:mb-12 tracking-tight leading-tight">
            Инжиниринговый центр DataWorker
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
            Мы создаем технологические решения, которые помогают бизнесу работать автономно и эффективно в любых условиях
          </p>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 -mb-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <WhatWeDoSection />

      {/* Team Section */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center content-spacing max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-light text-dark-gray mb-6 leading-tight">
              Своя команда для каждого проекта
            </h2>
            <p className="text-xl lg:text-2xl text-medium-gray leading-relaxed">
              Мы не верим в шаблонные решения. Под каждую задачу собирается уникальная команда профессионалов.
            </p>
          </div>

          {/* Team Roles Grid */}
          <div className="content-spacing">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
              {teamRoles.map((role, index) => (
                <div key={index} className="dashboard-card p-8 hover-lift cursor-pointer transition-all duration-500 h-full flex flex-col">
                  {/* Role Header */}
                  <div className="flex items-start space-x-4 mb-6 flex-1">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                      {role.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-dark-gray mb-2 leading-tight">
                        {role.title}
                      </h3>
                      <p className="text-medium-gray leading-relaxed">
                        {role.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {role.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-light-bg text-dark-gray text-sm rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Active State Indicator */}
                  <div className="h-1 rounded-full bg-gray-200" />
                </div>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div className="bg-off-white rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
              <h3 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                Как мы работаем
              </h3>
              <p className="text-xl text-medium-gray leading-relaxed">
                Три принципа формирования проектных команд
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {teamPrinciples.map((principle, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    {index === 0 ? <Target className="w-8 h-8" /> : index === 1 ? <Lightbulb className="w-8 h-8" /> : <TrendingUp className="w-8 h-8" />}
                  </div>
                  <h4 className="text-2xl font-bold text-dark-gray mb-4">
                    {principle.title}
                  </h4>
                  <p className="text-lg text-medium-gray leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center content-spacing">
            <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-light mb-6 leading-tight">
                  Готовы собрать команду для вашего проекта?
                </h3>
                <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto font-light">
                  Расскажите о своей задаче, и мы подберем идеальный состав специалистов
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Обсудить проект
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
