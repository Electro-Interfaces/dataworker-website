import { useState } from 'react';
import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import DeploymentOptions from '@/react-app/components/DeploymentOptions';
import { Link } from 'react-router';
import {
  Shield,
  CreditCard,
  Monitor,
  CheckCircle2,
  Zap,
  Building2,
  ArrowRight,
  Receipt,
  Fuel,
  Users,
  Settings,
  Wifi,
  BarChart3
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function TradeTerminalPage() {
  usePageMeta({
    title: 'TradePoint',
    description: 'Программные решения для управления АЗС любого типа',
    keywords: 'TradePoint, управление АЗС, автоматизация АЗС, топливные карты, касса АЗС'
  });

  const [activeModule, setActiveModule] = useState(0);

  const systemModules = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Главный экран',
      subtitle: '/main',
      description: 'Интуитивный интерфейс для клиента: выбор колонки, вида топлива и способа оплаты. Крупные кнопки и понятная навигация для быстрой заправки без помощи оператора. Отображение текущих цен и акций на всех видах топлива.',
      features: ['Выбор колонки', 'Вид топлива', 'Способ оплаты', 'Сумма заправки'],
      visual: (
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-white/80 text-xs font-bold">Выберите колонку</span>
            <span className="text-green-300 text-xs">● Online</span>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {[1,2,3,4].map(n => (
              <div key={n} className={`${n===2 ? 'bg-white text-blue-600' : 'bg-white/20 text-white'} rounded-lg p-2 text-center font-bold text-sm`}>
                ТРК {n}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-white/20 rounded-lg p-2 text-center"><div className="text-white font-bold text-sm">АИ-92</div><div className="text-blue-200 text-xs">₽54.90</div></div>
            <div className="bg-white/30 border-2 border-white rounded-lg p-2 text-center"><div className="text-white font-bold text-sm">АИ-95</div><div className="text-blue-200 text-xs">₽59.90</div></div>
            <div className="bg-white/20 rounded-lg p-2 text-center"><div className="text-white font-bold text-sm">ДТ</div><div className="text-blue-200 text-xs">₽62.50</div></div>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center mb-2">
            <div className="text-blue-200 text-xs">Сумма</div>
            <div className="text-white font-bold text-xl">₽ 2,000</div>
          </div>
          <div className="bg-white rounded-lg py-2 text-center text-blue-700 font-bold text-sm">Далее →</div>
        </div>
      )
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Оплата',
      subtitle: '/payment',
      description: 'Поддержка всех современных способов оплаты в одном терминале. Наличные через встроенный купюроприёмник, банковские карты (Visa, MasterCard, МИР) через пинпад с поддержкой NFC. Топливные карты популярных операторов. Онлайн-заказы через мобильное приложение.',
      features: ['Наличные (купюры)', 'Банковские карты', 'Топливные карты', 'Онлайн-заказы'],
      visual: (
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-4">
          <div className="text-white/80 text-xs font-bold mb-3">Способ оплаты</div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-white/20 rounded-lg p-3 text-center hover:bg-white/30 transition-colors">
              <div className="w-8 h-8 mx-auto mb-1 bg-green-400 rounded-lg flex items-center justify-center text-white text-lg">₽</div>
              <div className="text-white text-xs font-medium">Наличные</div>
            </div>
            <div className="bg-white/30 border-2 border-white rounded-lg p-3 text-center">
              <div className="w-8 h-8 mx-auto mb-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg"></div>
              <div className="text-white text-xs font-medium">Карта</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="w-8 h-8 mx-auto mb-1 bg-blue-400 rounded-lg flex items-center justify-center"><Wifi className="w-4 h-4 text-white" /></div>
              <div className="text-white text-xs font-medium">NFC</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="w-8 h-8 mx-auto mb-1 bg-purple-400 rounded-lg grid grid-cols-3 gap-0.5 p-1">
                {[...Array(9)].map((_,i) => <div key={i} className="bg-white rounded-sm"></div>)}
              </div>
              <div className="text-white text-xs font-medium">QR-код</div>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-2 flex items-center gap-2">
            <div className="w-10 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded"></div>
            <div className="text-white/80 text-xs">Приложите карту к терминалу</div>
          </div>
        </div>
      )
    },
    {
      icon: <Fuel className="w-6 h-6" />,
      title: 'Резервуары',
      subtitle: '/tanks',
      description: 'Интеграция с датчиками уровня топлива для автоматического мониторинга остатков. Контроль температуры и плотности для точного учёта. Автоматические уведомления при достижении критических уровней. Приёмка топлива с ТТН прямо через терминал.',
      features: ['Мониторинг уровня', 'Температура топлива', 'Автоуведомления', 'Приёмка топлива (ТТН)'],
      visual: (
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-4">
          <div className="text-white/80 text-xs font-bold mb-3">Уровень топлива</div>
          <div className="flex gap-3 justify-center mb-3">
            {[{name:'АИ-92', level:75, color:'bg-green-400'}, {name:'АИ-95', level:45, color:'bg-yellow-400'}, {name:'ДТ', level:85, color:'bg-green-400'}].map((tank,i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-24 bg-white/20 rounded-lg relative overflow-hidden mb-1">
                  <div className={`absolute bottom-0 left-0 right-0 ${tank.color} transition-all`} style={{height: `${tank.level}%`}}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">{tank.level}%</div>
                </div>
                <div className="text-white text-xs">{tank.name}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <div className="text-blue-200 text-xs">Температура</div>
              <div className="text-white font-bold">+18°C</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <div className="text-blue-200 text-xs">Плотность</div>
              <div className="text-white font-bold">0.755</div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Сервисное меню',
      subtitle: '/service',
      description: 'Полный функционал для обслуживающего персонала: открытие и закрытие смен, формирование X и Z отчётов, работа с МПС-ридером. Приёмка топлива, прокачка и диагностика оборудования. Доступ по PIN-коду или картой сотрудника.',
      features: ['Смены и отчёты', 'Приёмка топлива', 'Прокачка ТРК', 'Диагностика'],
      visual: (
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center"><Settings className="w-3 h-3 text-white" /></div>
            <span className="text-white/80 text-xs font-bold">Сервисное меню</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {['Открыть смену', 'X-отчёт', 'Z-отчёт', 'Закрыть смену'].map((item,i) => (
              <div key={i} className={`${i===0 ? 'bg-green-500/30 border border-green-400' : 'bg-white/10'} rounded-lg p-2 text-center`}>
                <div className="text-white text-xs font-medium">{item}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-lg p-2 mb-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Смена #247</span>
              <span className="text-green-400">● Открыта</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Оператор:</span>
              <span className="text-white">Иванов И.И.</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-blue-500/30 rounded-lg p-2 text-center text-white text-xs">Прокачка ТРК</div>
            <div className="bg-orange-500/30 rounded-lg p-2 text-center text-white text-xs">Диагностика</div>
          </div>
        </div>
      )
    },
    {
      icon: <Receipt className="w-6 h-6" />,
      title: 'Чеки и купоны',
      subtitle: '/receipts',
      description: 'Автоматическая печать фискальных чеков после каждой операции. Купоны на остаток средств при оплате наличными — клиент может использовать их при следующей заправке. Электронные чеки на email или SMS для экономии бумаги.',
      features: ['Фискальные чеки', 'Купоны на остаток', 'Email-чеки', 'SMS-уведомления'],
      visual: (
        <div className="flex gap-3 justify-center">
          <div className="bg-white rounded-lg p-3 w-32 shadow-lg">
            <div className="border-b border-dashed border-gray-300 pb-2 mb-2">
              <div className="text-center text-xs font-bold text-gray-800">ЧЕК</div>
              <div className="text-center text-[10px] text-gray-500">АЗС «Центральная»</div>
            </div>
            <div className="space-y-1 text-[10px] mb-2">
              <div className="flex justify-between"><span className="text-gray-500">АИ-95</span><span className="text-gray-800">30.5 л</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Цена</span><span className="text-gray-800">₽59.90</span></div>
              <div className="flex justify-between font-bold"><span className="text-gray-700">Итого</span><span className="text-gray-900">₽1,826.95</span></div>
            </div>
            <div className="border-t border-dashed border-gray-300 pt-2">
              <div className="w-12 h-12 mx-auto bg-gray-100 grid grid-cols-4 gap-0.5 p-1">
                {[...Array(16)].map((_,i) => <div key={i} className={`${Math.random()>0.5?'bg-gray-800':'bg-white'}`}></div>)}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-lg p-3 w-32 shadow-lg">
            <div className="text-center text-white text-xs font-bold mb-1">КУПОН</div>
            <div className="text-center text-white/80 text-[10px] mb-2">на остаток средств</div>
            <div className="bg-white rounded-lg p-2 text-center mb-2">
              <div className="text-green-600 font-bold text-lg">₽173.05</div>
            </div>
            <div className="text-center text-white/80 text-[10px]">Действует 30 дней</div>
          </div>
        </div>
      )
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Аналитика',
      subtitle: '/analytics',
      description: 'Полная статистика работы терминала в TradeFrame: количество транзакций, объёмы продаж, популярные виды топлива. Отчёты по способам оплаты и времени суток. Сравнение с другими точками сети для оптимизации бизнеса.',
      features: ['Статистика продаж', 'Отчёты по оплате', 'Сравнение точек', 'Экспорт данных'],
      visual: (
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-white/80 text-xs font-bold">Продажи за неделю</span>
            <span className="text-green-300 text-xs">+12.5%</span>
          </div>
          <div className="flex items-end gap-1 h-20 mb-3">
            {[40,65,45,80,60,90,75].map((h,i) => (
              <div key={i} className="flex-1 bg-white/30 rounded-t" style={{height:`${h}%`}}>
                <div className="w-full bg-white rounded-t" style={{height:'60%'}}></div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <div className="text-white font-bold text-sm">₽847K</div>
              <div className="text-blue-200 text-[10px]">Выручка</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <div className="text-white font-bold text-sm">1,247</div>
              <div className="text-blue-200 text-[10px]">Транзакций</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <div className="text-white font-bold text-sm">14.2K</div>
              <div className="text-blue-200 text-[10px]">Литров</div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Удалённое управление',
      subtitle: '/remote',
      description: 'Полный контроль терминала через облачную платформу TradeFrame. Изменение цен, блокировка/разблокировка колонок, перезагрузка оборудования. Получение уведомлений о проблемах в Telegram. Удалённая диагностика и обновление ПО.',
      features: ['Изменение цен', 'Управление ТРК', 'Telegram-уведомления', 'Обновление ПО'],
      visual: (
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                <Wifi className="w-3 h-3 text-white" />
              </div>
              <span className="text-white/80 text-xs font-bold">TradeFrame Cloud</span>
            </div>
            <span className="text-green-300 text-xs">● Подключено</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-xs font-bold">АЗС «Центральная»</div>
                <div className="text-blue-200 text-[10px]">Терминал SelfPoint #12</div>
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/10 rounded-lg p-2 text-center text-white text-xs">
              <div className="text-lg mb-0.5">📱</div>Telegram
            </div>
            <div className="bg-white/10 rounded-lg p-2 text-center text-white text-xs">
              <div className="text-lg mb-0.5">🔄</div>Обновить
            </div>
            <div className="bg-green-500/30 rounded-lg p-2 text-center text-white text-xs">
              <div className="text-lg mb-0.5">💲</div>Цены
            </div>
            <div className="bg-orange-500/30 rounded-lg p-2 text-center text-white text-xs">
              <div className="text-lg mb-0.5">⚡</div>ТРК
            </div>
          </div>
        </div>
      )
    }
  ];

  const terminalTypes = [
    {
      code: 'AP',
      name: 'AutoPoint',
      description: 'Полностью автоматическая АЗС',
      fullDescription: 'Автоматическая заправочная станция без персонала. SelfPoint управляет всем: оплатой, ТРК и резервуарами. Работа 24/7 с минимальными затратами на обслуживание.',
      icon: <Building2 className="w-8 h-8" />,
      gradient: 'from-blue-700 to-indigo-800',
      features: ['Без персонала 24/7', 'Контроль резервуаров', 'Удалённое управление', 'Минимальные затраты']
    },
    {
      code: 'FP',
      name: 'FuelPoint',
      description: 'Рабочее место оператора АЗС',
      fullDescription: 'Классическая система управления для станций с персоналом. Кассовый терминал объединяет управление топливораздаточными колонками, приём оплаты и продажу товаров магазина.',
      icon: <Monitor className="w-8 h-8" />,
      gradient: 'from-blue-700 to-indigo-800',
      features: ['Рабочее место кассира', 'Управление ТРК', 'Магазин и Кафе', 'Поддержка всех оплат']
    },
    {
      code: 'FP+SP',
      name: 'FuelPoint + SelfPoint',
      description: 'Терминал как модуль к АЗС',
      fullDescription: 'SelfPoint устанавливается как дополнительный модуль к станции с оператором. Днём — два потока клиентов, ночью — автоматический режим без персонала.',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-blue-700 to-indigo-800',
      features: ['Ускорение обслуживания', 'Круглосуточная работа', 'Экономия на сменах', 'Гибкое переключение']
    },
    {
      code: 'GP',
      name: 'GasPoint',
      description: 'Терминал для АГЗС',
      fullDescription: 'Специализированная конфигурация для автогазозаправочных станций. Учёт особенностей работы с СУГ: температурная коррекция, контроль давления.',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-blue-700 to-indigo-800',
      features: ['Учёт СУГ', 'Температурная коррекция', 'Контроль давления', 'Специальные датчики']
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <HexagonPattern id="hexagons-terminal" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">Front-Office Ecosystem</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-[0.9] tracking-tight">
                Trade<span className="text-blue-200">Point</span>
              </h1>

              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-10 font-light max-w-xl">
                Единая экосистема управления продажами на АЗС.
                <span className="block mt-2 opacity-80 text-base">Объединяет кассы FuelPoint, терминалы SelfPoint и контроллеры GasPoint.</span>
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-6 py-3 bg-white text-blue-900 rounded-xl font-bold text-base shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Запросить демо
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center h-[500px]">
              <div className="relative transform hover:scale-105 transition-all duration-500">
                {/* Terminal Illustration */}
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-20 blur-2xl"></div>

                  {/* Terminal Body */}
                  <div className="relative w-[320px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-3 shadow-2xl border border-white/10">
                    {/* Top Speaker/Camera */}
                    <div className="flex justify-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                      <div className="w-16 h-2 rounded-full bg-slate-700"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>

                    {/* Screen */}
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-4 mb-3 shadow-inner">
                      {/* Screen Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-white/90 text-xs font-bold uppercase tracking-wider">SelfPoint</div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                          <span className="text-green-300 text-[10px]">Online</span>
                        </div>
                      </div>

                      {/* Fuel Selection */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center border border-white/30">
                          <div className="text-white font-bold text-sm">АИ-92</div>
                          <div className="text-blue-200 text-[10px]">₽54.90</div>
                        </div>
                        <div className="bg-white/30 backdrop-blur rounded-lg p-2 text-center border-2 border-white">
                          <div className="text-white font-bold text-sm">АИ-95</div>
                          <div className="text-blue-200 text-[10px]">₽59.90</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center border border-white/30">
                          <div className="text-white font-bold text-sm">ДТ</div>
                          <div className="text-blue-200 text-[10px]">₽62.50</div>
                        </div>
                      </div>

                      {/* Amount Display */}
                      <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center mb-3">
                        <div className="text-blue-200 text-[10px] uppercase tracking-wider mb-1">Сумма заправки</div>
                        <div className="text-white font-bold text-2xl">₽ 2,000</div>
                      </div>

                      {/* Action Button */}
                      <div className="bg-white rounded-xl py-2.5 text-center">
                        <span className="text-blue-700 font-bold text-sm">Оплатить картой</span>
                      </div>
                    </div>

                    {/* Card Reader */}
                    <div className="flex gap-2 mb-3">
                      <div className="flex-1 bg-slate-700 rounded-lg p-2 flex items-center gap-2">
                        <div className="w-8 h-5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded"></div>
                        <div className="text-slate-400 text-[10px]">Приложите карту</div>
                      </div>
                      <div className="w-12 bg-slate-700 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full border-2 border-slate-500 flex items-center justify-center">
                          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Receipt Slot */}
                    <div className="bg-slate-950 rounded-lg h-3 flex items-center justify-center">
                      <div className="w-20 h-0.5 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-8 p-4 bg-gradient-to-r from-blue-600/90 to-blue-800/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                  <span className="text-blue-100/80 text-[10px] uppercase tracking-wider block mb-1">Режим работы</span>
                  <span className="text-white font-bold text-xl">24/7</span>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-2 -right-6 p-3 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl">
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider block">Транзакций</span>
                  <span className="text-gray-900 font-bold text-lg">1,247</span>
                </div>
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
              Функции терминала
            </h2>
            <p className="text-lg text-gray-500 mx-auto">
              Всё необходимое для автономной работы
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">
            {/* Tabs - Left side */}
            <div className="lg:col-span-2 flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0">
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

                {/* Spacer to push visual to bottom */}
                <div className="flex-grow min-h-4"></div>

                {/* Module Visual */}
                {systemModules[activeModule].visual && (
                  <div className="mt-auto group/img relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-sm group-hover/img:opacity-30 transition-opacity"></div>
                    <div className="relative transform group-hover/img:scale-[1.01] transition-transform duration-500">
                      {systemModules[activeModule].visual}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Types - Detailed Cards */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Программные решения
            </h2>
            <p className="text-xl lg:text-2xl text-gray-500 max-w-3xl mx-auto">
              Конфигурации управления оборудованием АЗС, интегрированные с платформой TradeFrame
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {terminalTypes.map((type, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${type.gradient} rounded-2xl lg:rounded-3xl flex items-center justify-center text-white shadow-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      {type.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-xs font-bold tracking-widest px-2 py-1 rounded bg-gradient-to-r ${type.gradient} text-white`}>
                          {type.code}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{type.name}</h3>
                      <p className="text-gray-500 font-medium">{type.description}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-base lg:text-lg">
                    {type.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {type.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 bg-gradient-to-r ${type.gradient} text-white rounded-full p-0.5`} />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-lg">
              Все терминалы управляются через единую платформу TradeFrame
            </p>
          </div>
        </div>
      </section>

      <DeploymentOptions />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Готовы к автоматизации?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Узнайте, как SelfPoint поможет вашему топливному бизнесу работать эффективнее
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
              to="/products/trade-frame"
              className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Платформа TradeFrame
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}