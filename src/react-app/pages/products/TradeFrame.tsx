import { useState } from 'react';
import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import DeploymentOptions from '@/react-app/components/DeploymentOptions';
import { Link } from 'react-router';
import {
  Shield,
  Database,
  FileText,
  Bell,
  Smartphone,
  Fuel,
  BarChart3,
  ArrowRight,
  Zap,
  CheckCircle2,
  Settings
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function TradeFramePage() {
  usePageMeta({
    title: 'TradeFrame',
    description: 'Облачная платформа для управления сетью АЗС',
    keywords: 'TradeFrame, облачная платформа, управление сетью АЗС, SaaS, топливный бизнес'
  });
  const [activeModule, setActiveModule] = useState(0);

  const systemModules = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Обзор сети',
      subtitle: '/network/overview',
      description: 'Дашборд с общей статистикой сети: KPI-карточки (выручка, объём продаж, количество транзакций, средний чек), интерактивная карта с маркерами АЗС и цветовыми статусами станций.',
      features: ['KPI-карточки', 'Карта сети', 'Статусы: Онлайн / Внимание / Критично', 'Сравнение периодов'],
      image: 'images/network-overview.png'
    },
    {
      icon: <Fuel className="w-6 h-6" />,
      title: 'Ценообразование',
      subtitle: '/network/pricing',
      description: 'Централизованное управление ценами на топливо по всей сети АЗС. Просмотр текущих и запланированных цен на всех станциях в едином интерфейсе. Быстрое изменение цены на одной АЗС, группе станций или всей сети одним действием. Гибкое расписание автоматического изменения цен с привязкой к дате и времени. История всех изменений с возможностью анализа динамики цен на графиках.',
      features: ['Таблица цен по АЗС', 'Массовое изменение', 'Расписание применения', 'История с графиками'],
      image: 'images/pricing.png'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Операции',
      subtitle: '/network/operations',
      description: 'Полный контроль над всеми транзакциями сети в реальном времени. Детальная информация по каждой операции: точное время, объём отпуска в литрах, сумма платежа, способ оплаты, номер ТРК и ответственный оператор. Мощные фильтры для поиска и анализа данных. Возможность экспорта отчётов в различных форматах для бухгалтерии и аналитики.',
      features: ['Фильтры по датам и АЗС', 'По типу топлива', 'По способу оплаты', 'Детали транзакций'],
      image: 'images/operations.png'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Остатки топлива',
      subtitle: '/network/fuel-inventory',
      description: 'Мониторинг остатков топлива в резервуарах с наглядной цветовой индикацией уровней. Интеллектуальный учёт с функцией автокалибровки на основе анализа данных отпуска с ТРК, температуры и плотности топлива. Прогнозирование времени исчерпания запасов для своевременного планирования поставок. Автоматические оповещения при достижении критических уровней.',
      features: ['Норма >30% / Внимание 10-30% / Критично <10%', 'Автокалибровка', 'Прогноз исчерпания', 'Температура и плотность'],
      image: 'images/fuel-tanks-monitoring.png'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Сменные отчёты',
      subtitle: '/network/shift-reports',
      description: 'Полный журнал поступлений топлива с детализацией по каждой поставке: дата, время, поставщик, заявленный и фактический объём. Автоматическая сверка данных для выявления расхождений. Формирование сменных отчётов с детализацией по операторам и ТРК. Бесшовная интеграция с 1С для автоматической выгрузки данных. Контроль открытия и закрытия смен.',
      features: ['Журнал поступлений', 'Сверка объёмов', 'Автовыгрузка в 1С', 'Статусы смен'],
      image: 'images/shift-reports.png'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Оборудование',
      subtitle: '/point/equipment',
      description: 'Статусы всего оборудования АЗС: ТРК (статус, счётчик отпуска), купюроприемники (уровень заполнения), платёжные терминалы, контроллеры датчиков уровня и температуры.',
      features: ['ТРК: статус и счётчик', 'Купюроприемники', 'Платёжные терминалы', 'Онлайн / Офлайн / Предупреждение'],
      image: 'images/equipment-monitoring.png'
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Уведомления',
      subtitle: '/settings/notifications',
      description: 'Telegram Bot и Email оповещения. Автопроверки: критический уровень топлива (каждые 4ч), оборудование offline (каждые 30мин), переполнение купюроприемника, незакрытые смены.',
      features: ['Telegram @TradeFrameDW_Bot', 'Email-канал', 'Приоритеты событий', 'Режим "Не беспокоить"'],
      image: 'images/notifications.png'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Администрирование',
      subtitle: '/admin/*',
      description: 'Полноценный центр управления сетями, станциями и пользователями системы. Гибкая ролевая модель с 5 предустановленными ролями: Администратор, Менеджер сети, Менеджер АЗС, Оператор, Аналитик. Более 40 гранулярных разрешений для точной настройки доступа. Привязка пользователей к конкретным сетям и станциям. Подробный журнал аудита всех действий: кто, когда и какие изменения внёс в систему. Управление правовыми документами и согласиями пользователей.',
      features: ['RBAC 40+ разрешений', 'Привязка к сетям и АЗС', 'Журнал аудита', '5 предустановленных ролей'],
      image: 'images/administration.png'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Мобильная версия',
      subtitle: 'PWA',
      description: 'Адаптивный интерфейс для работы с любого устройства. Полноценный доступ к функциям системы со смартфона или планшета без установки приложения.',
      features: ['Работа с любого устройства', 'Офлайн-режим', 'Push-уведомления', 'Быстрый доступ к ключевым функциям'],
      images: ['images/mobile-version.png', 'images/mobile-version-2.png']
    }
  ];

  const tradePointTypes = [
    {
      code: 'FP',
      name: 'FuelPoint',
      description: 'Классическая АЗС с оператором',
      fullDescription: 'Традиционная автозаправочная станция с операторским обслуживанием. Полный контроль через TradeFrame с интеграцией кассового ПО.',
      icon: <Fuel className="w-8 h-8" />,
      gradient: 'from-blue-700 to-indigo-800',
      features: ['Операторский режим', 'Кассовое ПО STS POS', 'Магазин и кафе', 'Любые виды топлива']
    },
    {
      code: 'AP',
      name: 'AutoPoint',
      description: 'Автоматическая АЗС',
      fullDescription: 'Полностью автоматизированная станция без персонала. Круглосуточная работа с удалённым мониторингом и управлением.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Container body - horizontal tank */}
          <rect x="1" y="12" width="22" height="14" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
          {/* Panel divisions */}
          <line x1="8" y1="12" x2="8" y2="26" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4"/>
          <line x1="15" y1="12" x2="15" y2="26" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4"/>
          {/* Fuel dispenser column */}
          <rect x="26" y="8" width="5" height="18" rx="1" fill="currentColor"/>
          {/* Dispenser screen */}
          <rect x="27" y="10" width="3" height="4" rx="0.5" fill="currentColor" fillOpacity="0.3"/>
          {/* Nozzle holder */}
          <circle cx="28.5" cy="18" r="1.5" fill="currentColor" fillOpacity="0.3"/>
          {/* Flat canopy over dispenser */}
          <rect x="24" y="5" width="8" height="2" rx="0.5" fill="currentColor"/>
          {/* Canopy support */}
          <line x1="28" y1="7" x2="28" y2="8" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      gradient: 'from-blue-700 to-indigo-800',
      features: ['Без персонала 24/7', 'Удалённое управление', 'Видеонаблюдение', 'Автоинкассация']
    },
    {
      code: 'FP+SP',
      name: 'FuelPoint + SelfPoint',
      description: 'Гибридный режим работы',
      fullDescription: 'SelfPoint устанавливается как дополнительный модуль к станции с оператором. Днём — два потока клиентов, ночью — автоматический режим без персонала.',
      icon: <Smartphone className="w-8 h-8" />,
      gradient: 'from-blue-700 to-indigo-800',
      features: ['Ускорение обслуживания', 'Круглосуточная работа', 'Экономия на сменах', 'Гибкое переключение']
    },
    {
      code: 'GP',
      name: 'GasPoint',
      description: 'АГЗС для сжиженного газа',
      fullDescription: 'Автогазозаправочная станция для СУГ (пропан-бутан). Специализированный учёт и контроль заправки газового топлива.',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-blue-700 to-indigo-800',
      features: ['Учёт СУГ', 'Контроль давления', 'Температурная коррекция', 'Специальные датчики']
    },
    {
      code: 'CP',
      name: 'CorpPoint',
      description: 'Корпоративная заправка',
      fullDescription: 'Закрытая заправочная станция на территории предприятия. Авторизация по корпоративным картам, учёт топлива по водителям и транспортным средствам.',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-blue-700 to-indigo-800',
      features: ['Корпоративные карты', 'Учёт по водителям', 'Лимиты топлива', 'Закрытый доступ']
    }
  ];


  return (
    <PageLayout>
      {/* Hero Section - Keep existing */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <HexagonPattern id="hexagons-frame" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">System Online v2.4</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-[0.9] tracking-tight">
                Trade<span className="text-blue-200">Frame</span>
              </h1>

              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-10 font-light max-w-xl">
                Облачная экосистема для управления сетью торговых точек.
                <span className="block mt-2 opacity-80 text-base">Контроль, аналитика и автоматизация в одном окне.</span>
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-6 py-3 bg-white text-blue-900 rounded-xl font-bold text-base shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Запросить демо
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Desktop Hero Image */}
            <div className="relative hidden lg:flex items-center justify-center h-[500px]">
              <div className="relative transform hover:scale-105 transition-all duration-500">
                <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm overflow-hidden shadow-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}images/dashboard-screen.png`}
                    alt="TradeFrame Dashboard"
                    className="w-[550px] h-auto"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="absolute -bottom-4 -left-8 p-4 bg-gradient-to-r from-blue-600/90 to-blue-800/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                  <span className="text-blue-100/80 text-[10px] uppercase tracking-wider block mb-1">Выручка сегодня</span>
                  <span className="text-white font-bold text-xl">₽ 3,717,407</span>
                </div>
              </div>
            </div>

            {/* Mobile Hero Image */}
            <div className="lg:hidden mt-8">
              <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm overflow-hidden shadow-xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/dashboard-screen.png`}
                  alt="TradeFrame Dashboard"
                  className="w-full h-auto"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 -mb-px z-20">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* System Modules - Interactive Tabs */}
      <section className="bg-gray-50 pt-6 pb-10 lg:pt-8 lg:pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-8 mx-auto max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 mx-auto">
              Функции TradeFrame
            </h2>
            <p className="text-lg text-gray-500 mx-auto">
              Всё необходимое для управления топливным бизнесом
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">
            {/* Tabs - Left side */}
            <div className="lg:col-span-2 relative">
              {/* Scroll indicator gradient - mobile only */}
              <div className="lg:hidden absolute right-0 top-0 bottom-3 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
              <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 scrollbar-hide">
              {systemModules.map((module, index) => (
                <button
                  key={index}
                  onClick={() => setActiveModule(index)}
                  className={`flex items-center gap-3 p-3 lg:p-3.5 rounded-xl text-left transition-all duration-300 flex-shrink-0 lg:flex-shrink ${
                    activeModule === index
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeModule === index ? 'bg-white/20' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {module.icon}
                  </div>
                  <div className="hidden lg:block">
                    <div className="font-semibold text-sm">{module.title}</div>
                  </div>
                  <span className="lg:hidden font-medium whitespace-nowrap text-sm">{module.title}</span>
                </button>
              ))}
              </div>
            </div>

            {/* Content - Right side */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-5 lg:p-6 shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-200">
                    {systemModules[activeModule].icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{systemModules[activeModule].title}</h3>
                </div>

                <p className="text-base text-gray-600 leading-relaxed mb-5">
                  {systemModules[activeModule].description}
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {systemModules[activeModule].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-50">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Spacer to push images to bottom */}
                <div className="flex-grow min-h-4"></div>

                {/* Module Image(s) */}
                {systemModules[activeModule].image && (
                  <div className="mt-auto group/img relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-sm group-hover/img:opacity-30 transition-opacity"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-200 flex justify-center">
                      <img
                        src={`${import.meta.env.BASE_URL}${systemModules[activeModule].image}`}
                        alt={systemModules[activeModule].title}
                        className="w-full h-auto max-h-[400px] object-contain transform group-hover/img:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {systemModules[activeModule].images && (
                  <div className="mt-auto group/img relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-sm group-hover/img:opacity-30 transition-opacity"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-100 flex justify-center items-end gap-4 p-4">
                      {systemModules[activeModule].images?.map((img, idx) => (
                        <img
                          key={idx}
                          src={`${import.meta.env.BASE_URL}${img}`}
                          alt={`${systemModules[activeModule].title} ${idx + 1}`}
                          className="h-auto max-h-[350px] object-contain rounded-xl shadow-lg transform group-hover/img:scale-[1.02] transition-transform duration-500"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Point Types - Detailed Cards */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Типы торговых точек
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              TradeFrame работает с любым форматом топливного бизнеса — от классических АЗС до автоматических станций
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {tradePointTypes.map((point, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${point.gradient} rounded-2xl lg:rounded-3xl flex items-center justify-center text-white shadow-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      {point.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-xs font-bold tracking-widest px-2 py-1 rounded bg-gradient-to-r ${point.gradient} text-white`}>
                          {point.code}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{point.name}</h3>
                      <p className="text-gray-500 font-medium">{point.description}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-base lg:text-lg">
                    {point.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {point.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 bg-gradient-to-r ${point.gradient} text-white rounded-full p-0.5`} />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-8 text-center">
            <p className="text-gray-500">
              Комбинируйте типы точек в единую сеть с централизованным управлением
            </p>
          </div>
        </div>
      </section>

      <DeploymentOptions />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Готовы автоматизировать вашу сеть?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Получите персональную демонстрацию платформы TradeFrame
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Запросить демо
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Все продукты
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
