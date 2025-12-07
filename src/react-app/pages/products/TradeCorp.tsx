import { useState } from 'react';
import PageLayout from '@/react-app/components/PageLayout';
import ProductHero from '@/react-app/components/ProductHero';
import ModuleTabs from '@/react-app/components/ModuleTabs';
import GradientSection from '@/react-app/components/GradientSection';
import AdvantagesGrid from '@/react-app/components/AdvantagesGrid';
import CTASection from '@/react-app/components/CTASection';
import DeploymentOptions from '@/react-app/components/DeploymentOptions';
import {
  CreditCard,
  Building2,
  Users,
  BarChart3,
  CheckCircle2,
  Banknote,
  Smartphone,
  FileText,
  Settings,
  Wallet,
  Zap,
  Globe,
  Lock,
  RefreshCw,
  Eye,
  Layers,
  Share2,
  MapPin
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

// Hero Card Illustration
const HeroIllustration = () => (
  <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm overflow-hidden shadow-2xl p-6">
    <div className="w-[340px] h-[200px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>
      <div className="flex justify-between items-start mb-6">
        <div className="w-11 h-9 bg-gradient-to-br from-amber-300 to-amber-500 rounded-lg"></div>
        <CreditCard className="w-7 h-7 text-white/60" />
      </div>
      <div className="text-white/80 text-base tracking-[0.25em] mb-3">•••• •••• •••• 4589</div>
      <div className="flex justify-between items-end">
        <div>
          <div className="text-white/60 text-[10px] uppercase">Держатель</div>
          <div className="text-white text-sm font-medium">ООО "Транс Логистик"</div>
        </div>
        <div className="text-right">
          <div className="text-white/60 text-[10px] uppercase">Срок</div>
          <div className="text-white text-sm font-medium">12/27</div>
        </div>
      </div>
    </div>
    {/* Stats badge */}
    <div className="absolute -bottom-4 -left-8 p-4 bg-gradient-to-r from-blue-600/90 to-blue-800/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
      <span className="text-blue-100/80 text-[10px] uppercase tracking-wider block mb-1">Активных карт</span>
      <span className="text-white font-bold text-xl">12,847</span>
    </div>
  </div>
);

export default function TradeCorpPage() {
  usePageMeta({
    title: 'TradeCorp',
    description: 'Процессинг топливных карт и биллинг корпоративных клиентов',
    keywords: 'TradeCorp, топливные карты, процессинг, B2B, корпоративные клиенты, биллинг'
  });

  const [activeScenario, setActiveScenario] = useState(0);

  const systemModules = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Контрагенты',
      subtitle: '/contractors',
      description: 'Управление компаниями-клиентами в единой базе. Профили организаций с загрузкой учредительных документов. Кредитные линии с гибкими условиями. Группировка контрагентов по сегментам, регионам и типам деятельности. Полная история взаимодействия с каждым клиентом.',
      features: ['Профили организаций', 'Привязка карт', 'Кредитные линии', 'История взаимодействий'],
      image: 'images/corp-contractors.png'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Топливные карты',
      subtitle: '/cards',
      description: 'Выпуск и управление топливными картами любых типов. Настройка лимитов по суммам, литрам, операциям в день/неделю/месяц. Мгновенная блокировка и разблокировка. Привязка к водителям и транспортным средствам. Поддержка пластиковых и виртуальных карт.',
      features: ['Выпуск карт', 'Гибкие лимиты', 'Блокировка', 'Привязка к ТС'],
      image: 'images/corp-cards.png'
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: 'Эмитенты',
      subtitle: '/issuers',
      description: 'Работа с собственными и партнёрскими эмитентами топливных карт. Настройка Host-to-Host соединений для онлайн-авторизации. Интеграция с POS-терминалами на АЗС. Маппинг кодов топлива между системами разных эмитентов.',
      features: ['Собственные карты', 'Host-to-Host', 'POS-интеграция', 'Маппинг кодов'],
      image: 'images/corp-issuers.png'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Договоры',
      subtitle: '/contracts',
      description: 'Полный цикл работы с договорами: создание, согласование, пролонгация, закрытие. Хранение сканов и электронных документов. Автоматические уведомления об окончании срока действия. Привязка условий и скидок к конкретным договорам.',
      features: ['Жизненный цикл', 'Хранение документов', 'Автоуведомления', 'Условия и скидки'],
      image: 'images/corp-contracts.png'
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: 'Финансы',
      subtitle: '/finance',
      description: 'Управление балансами и взаиморасчётами с контрагентами. Автоматическое формирование актов сверки и счетов-фактур. Интеграция с 1С для обмена финансовыми документами. Автоблокировка карт при превышении кредитного лимита.',
      features: ['Балансы и платежи', 'Акты сверки', 'Интеграция с 1С', 'Контроль долгов'],
      image: 'images/corp-finance.png'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Аналитика',
      subtitle: '/analytics',
      description: 'Дашборды с ключевыми показателями топливного процессинга. Статистика по картам, контрагентам и операциям. Финансовая аналитика с разбивкой по периодам и сегментам. Экспорт отчётов в Excel и PDF.',
      features: ['Дашборды KPI', 'Статистика карт', 'Финансовые отчёты', 'Экспорт Excel/PDF'],
      image: 'images/corp-analytics.png'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Мобильное приложение',
      subtitle: '/mobile',
      description: 'Приложения для iOS и Android для водителей и менеджеров. Просмотр баланса и истории операций по картам. Push-уведомления о транзакциях. Поиск ближайших АЗС на карте. Оформление онлайн-заказов на заправку.',
      features: ['iOS и Android', 'Баланс и история', 'Push-уведомления', 'Поиск АЗС'],
      image: 'images/corp-mobile.png'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Администрирование',
      subtitle: '/admin',
      description: 'Управление пользователями и ролями в системе. Гибкая настройка разрешений для каждой роли. Журнал аудита всех действий пользователей. Системные настройки и конфигурация интеграций.',
      features: ['Роли и права', 'Журнал аудита', 'Системные настройки', 'Техподдержка'],
      image: 'images/corp-admin.png'
    }
  ];

  const cardScenarios = [
    {
      title: 'Собственная эмиссия',
      subtitle: 'Полный контроль',
      icon: <CreditCard className="w-8 h-8" />,
      description: 'Эмитент выпускает собственные карты с полным контролем за эмиссией и условиями. Возможность создания уникального дизайна карт.',
      features: ['Полный контроль эмиссии', 'Уникальный дизайн карт', 'Собственные условия', 'Брендирование'],
      idealFor: 'Компании с собственной сетью АЗС'
    },
    {
      title: 'Партнёрские карты',
      subtitle: 'Расширение географии',
      icon: <Share2 className="w-8 h-8" />,
      description: 'Использование карт партнёров на своей сети. Расширение географии обслуживания без инвестиций в строительство новых АЗС.',
      features: ['Расширение без инвестиций', 'Единая отчётность', 'Партнёрская сеть', 'Гибкие условия'],
      idealFor: 'Расширение без строительства АЗС'
    },
    {
      title: 'API-интеграция',
      subtitle: 'Внешние карты',
      icon: <Globe className="w-8 h-8" />,
      description: 'Подключение сторонних карт через API без прямого договора с процессингом. Централизованный доступ для корпоративных клиентов.',
      features: ['Подключение через API', 'Без прямого договора', 'Централизованный доступ', 'Универсальность'],
      idealFor: 'Работа с крупными корпоративными клиентами'
    }
  ];

  const ecosystemParticipants = [
    { icon: <CreditCard className="w-6 h-6" />, title: 'Эмитенты', description: 'Выпускают карты, управляют системой процессинга' },
    { icon: <Building2 className="w-6 h-6" />, title: 'Партнёры', description: 'Владельцы сетей АЗС, принимающие карты' },
    { icon: <Users className="w-6 h-6" />, title: 'Контрагенты', description: 'Корпоративные клиенты с топливными картами' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Точки обслуживания', description: 'АЗС, мойки, СТО и другие сервисы' },
    { icon: <Zap className="w-6 h-6" />, title: 'Поставщики услуг', description: 'Процессинговые и технические сервисы' }
  ];

  const keyAdvantages = [
    { icon: <Layers className="w-6 h-6" />, title: 'Централизация', description: 'Единая платформа для всех типов карт и операций' },
    { icon: <RefreshCw className="w-6 h-6" />, title: 'Гибкость', description: 'Модульная архитектура, подключение партнёров' },
    { icon: <CreditCard className="w-6 h-6" />, title: 'Типы карт', description: 'Пластиковые, виртуальные, внешние карты' },
    { icon: <Zap className="w-6 h-6" />, title: 'Автоматизация', description: 'Интеграция с 1С, автовыгрузка документов' },
    { icon: <Eye className="w-6 h-6" />, title: 'Прозрачность', description: 'Отчётность и аналитика в реальном времени' },
    { icon: <Lock className="w-6 h-6" />, title: 'Безопасность', description: 'Ролевая модель, аудит, шифрование данных' }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <ProductHero
        title="Trade"
        titleAccent="Corp"
        badge="V 2.1"
        badgeColor="green"
        description="Система управления топливным процессингом."
        subdescription="Топливные карты, контрагенты, договоры и финансы."
        illustration={<HeroIllustration />}
        patternId="hexagons-corp"
      />

      {/* System Modules */}
      <ModuleTabs
        title="Функции системы"
        subtitle="Полный набор инструментов для управления топливным процессингом"
        modules={systemModules}
      />

      {/* Card Scenarios Section */}
      <GradientSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Сценарии работы с картами
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Три модели интеграции для разных бизнес-задач
          </p>
        </div>

        {/* Scenario Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {cardScenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => setActiveScenario(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeScenario === index
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        {/* Active Scenario Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-white">
                {cardScenarios[activeScenario].icon}
              </div>
              <div>
                <div className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-1">
                  {cardScenarios[activeScenario].subtitle}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  {cardScenarios[activeScenario].title}
                </h3>
              </div>
            </div>

            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              {cardScenarios[activeScenario].description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {cardScenarios[activeScenario].features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-xl p-4 inline-block">
              <span className="text-blue-200 text-sm">Идеально для: </span>
              <span className="text-white font-semibold">{cardScenarios[activeScenario].idealFor}</span>
            </div>
          </div>
        </div>
      </GradientSection>

      {/* Ecosystem Participants */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Участники экосистемы
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Все участники топливного процессинга в единой платформе
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ecosystemParticipants.map((participant, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {participant.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{participant.title}</h3>
                <p className="text-sm text-gray-500">{participant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <GradientSection>
        <AdvantagesGrid
          title="Ключевые преимущества"
          subtitle="Почему компании выбирают TradeCorp"
          advantages={keyAdvantages}
          variant="dark"
        />
      </GradientSection>

      <DeploymentOptions />

      {/* CTA Section */}
      <CTASection
        title="Готовы оптимизировать процессинг?"
        subtitle="Узнайте, как TradeCorp поможет управлять топливными картами эффективнее"
        primaryLink={{ href: '/contact', text: 'Запросить демо' }}
        secondaryLink={{ href: '/products/trade-frame', text: 'Платформа TradeFrame' }}
      />
    </PageLayout>
  );
}
