// SVG illustrations for TradeBonus (DwLoyalty) modules

export function CustomersIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Customer cards */}
      <g>
        {/* Customer 1 */}
        <rect x="20" y="20" width="160" height="80" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        <circle cx="52" cy="60" r="20" fill="#3B82F6" />
        <text x="44" y="66" fill="white" fontSize="14" fontWeight="bold">АК</text>
        <text x="82" y="45" fill="#1E40AF" fontSize="10" fontWeight="bold">Алексей Козлов</text>
        <text x="82" y="58" fill="#64748B" fontSize="8">Gold • 5 лет</text>
        <rect x="82" y="66" width="85" height="20" rx="4" fill="#DBEAFE" />
        <text x="90" y="80" fill="#2563EB" fontSize="8" fontWeight="bold">12,450 бонусов</text>

        {/* Customer 2 */}
        <rect x="20" y="108" width="160" height="80" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        <circle cx="52" cy="148" r="20" fill="#8B5CF6" />
        <text x="44" y="154" fill="white" fontSize="14" fontWeight="bold">МС</text>
        <text x="82" y="133" fill="#1E40AF" fontSize="10" fontWeight="bold">Мария Смирнова</text>
        <text x="82" y="146" fill="#64748B" fontSize="8">Silver • 2 года</text>
        <rect x="82" y="154" width="85" height="20" rx="4" fill="#DBEAFE" />
        <text x="90" y="168" fill="#2563EB" fontSize="8" fontWeight="bold">3,280 бонусов</text>
      </g>

      {/* Segments panel */}
      <rect x="195" y="20" width="180" height="168" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <text x="210" y="42" fill="#1E40AF" fontSize="11" fontWeight="bold">Сегменты</text>

      {/* Segment bars */}
      <rect x="205" y="52" width="160" height="26" rx="5" fill="#DCFCE7" />
      <text x="215" y="69" fill="#166534" fontSize="8" fontWeight="bold">VIP клиенты</text>
      <text x="330" y="69" fill="#166534" fontSize="8" fontWeight="bold">847</text>

      <rect x="205" y="82" width="160" height="26" rx="5" fill="#DBEAFE" />
      <text x="215" y="99" fill="#1E40AF" fontSize="8" fontWeight="bold">Активные</text>
      <text x="320" y="99" fill="#1E40AF" fontSize="8" fontWeight="bold">12,453</text>

      <rect x="205" y="112" width="160" height="26" rx="5" fill="#FEF3C7" />
      <text x="215" y="129" fill="#92400E" fontSize="8" fontWeight="bold">Спящие</text>
      <text x="325" y="129" fill="#92400E" fontSize="8" fontWeight="bold">5,892</text>

      <rect x="205" y="142" width="160" height="26" rx="5" fill="#FEE2E2" />
      <text x="215" y="159" fill="#991B1B" fontSize="8" fontWeight="bold">Ушедшие</text>
      <text x="325" y="159" fill="#991B1B" fontSize="8" fontWeight="bold">1,245</text>

      {/* Total counter */}
      <rect x="20" y="198" width="355" height="40" rx="8" fill="#1E40AF" />
      <text x="120" y="224" fill="white" fontSize="12" fontWeight="bold">Всего клиентов: 43,293</text>
    </svg>
  );
}

export function BonusesIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Bonus card */}
      <rect x="20" y="20" width="175" height="100" rx="12" fill="url(#bonusGrad)" />
      <circle cx="48" cy="48" r="16" fill="white" fillOpacity="0.2" />
      <text x="42" y="53" fill="white" fontSize="12" fontWeight="bold">₽</text>
      <text x="75" y="44" fill="white" fontSize="9">Бонусный баланс</text>
      <text x="75" y="68" fill="white" fontSize="22" fontWeight="bold">12,450</text>
      <rect x="32" y="85" width="150" height="24" rx="5" fill="white" fillOpacity="0.2" />
      <text x="45" y="101" fill="white" fontSize="8">Кэшбэк 5% • Gold уровень</text>

      {/* Rules panel */}
      <rect x="205" y="20" width="175" height="100" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <text x="218" y="42" fill="#1E40AF" fontSize="10" fontWeight="bold">Правила начисления</text>

      <rect x="215" y="50" width="155" height="20" rx="4" fill="#DCFCE7" />
      <text x="225" y="64" fill="#166534" fontSize="8">Топливо: 5% кэшбэк</text>

      <rect x="215" y="74" width="155" height="20" rx="4" fill="#DBEAFE" />
      <text x="225" y="88" fill="#1E40AF" fontSize="8">Магазин: 3% кэшбэк</text>

      <rect x="215" y="98" width="155" height="18" rx="4" fill="#F1F5F9" />
      <text x="225" y="110" fill="#64748B" fontSize="8">Срок действия: 12 мес</text>

      {/* Transaction history */}
      <rect x="20" y="130" width="360" height="105" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <text x="35" y="152" fill="#1E40AF" fontSize="10" fontWeight="bold">История операций</text>

      <g>
        <circle cx="42" cy="176" r="8" fill="#22C55E" />
        <text x="58" y="172" fill="#475569" fontSize="9">Начислено за заправку</text>
        <text x="58" y="184" fill="#64748B" fontSize="8">Сегодня, 14:30</text>
        <text x="310" y="178" fill="#22C55E" fontSize="10" fontWeight="bold">+245 ₽</text>
      </g>

      <line x1="35" y1="196" x2="365" y2="196" stroke="#E2E8F0" />

      <g>
        <circle cx="42" cy="216" r="8" fill="#EF4444" />
        <text x="58" y="212" fill="#475569" fontSize="9">Списано за кофе</text>
        <text x="58" y="224" fill="#64748B" fontSize="8">Вчера, 09:15</text>
        <text x="310" y="218" fill="#EF4444" fontSize="10" fontWeight="bold">-150 ₽</text>
      </g>

      <defs>
        <linearGradient id="bonusGrad" x1="20" y1="20" x2="195" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PromotionsIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Promo cards */}
      <g>
        {/* Promo 1 */}
        <rect x="20" y="20" width="175" height="90" rx="10" fill="url(#promoGrad1)" />
        <rect x="30" y="30" width="50" height="20" rx="4" fill="white" fillOpacity="0.3" />
        <text x="40" y="44" fill="white" fontSize="10" fontWeight="bold">-20%</text>
        <text x="30" y="68" fill="white" fontSize="11" fontWeight="bold">Двойные бонусы</text>
        <text x="30" y="82" fill="white" fillOpacity="0.8" fontSize="8">на топливо АИ-95</text>
        <rect x="30" y="90" width="80" height="16" rx="4" fill="white" fillOpacity="0.2" />
        <text x="40" y="102" fill="white" fontSize="7">до 31 декабря</text>

        {/* Promo 2 */}
        <rect x="205" y="20" width="175" height="90" rx="10" fill="url(#promoGrad2)" />
        <rect x="215" y="30" width="55" height="20" rx="4" fill="white" fillOpacity="0.3" />
        <text x="222" y="44" fill="white" fontSize="10" fontWeight="bold">КОФЕ</text>
        <text x="215" y="68" fill="white" fontSize="11" fontWeight="bold">Бесплатный кофе</text>
        <text x="215" y="82" fill="white" fillOpacity="0.8" fontSize="8">при заправке от 40л</text>
        <rect x="215" y="90" width="80" height="16" rx="4" fill="white" fillOpacity="0.2" />
        <text x="225" y="102" fill="white" fontSize="7">постоянная акция</text>
      </g>

      {/* Promocode section */}
      <rect x="20" y="120" width="175" height="115" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <text x="32" y="142" fill="#1E40AF" fontSize="10" fontWeight="bold">Промокоды</text>

      <rect x="30" y="150" width="155" height="28" rx="6" fill="#F1F5F9" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 2" />
      <text x="65" y="169" fill="#3B82F6" fontSize="11" fontWeight="bold">WINTER2024</text>

      <rect x="30" y="185" width="75" height="40" rx="5" fill="#DCFCE7" />
      <text x="40" y="202" fill="#166534" fontSize="8">Активных</text>
      <text x="40" y="218" fill="#166534" fontSize="14" fontWeight="bold">24</text>

      <rect x="110" y="185" width="75" height="40" rx="5" fill="#DBEAFE" />
      <text x="118" y="202" fill="#1E40AF" fontSize="7">Использовано</text>
      <text x="120" y="218" fill="#1E40AF" fontSize="14" fontWeight="bold">1,892</text>

      {/* Personal offers */}
      <rect x="205" y="120" width="175" height="115" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <text x="218" y="142" fill="#1E40AF" fontSize="10" fontWeight="bold">Персональные скидки</text>

      <rect x="215" y="150" width="155" height="35" rx="5" fill="#FEF3C7" />
      <circle cx="233" cy="167" r="11" fill="#F59E0B" />
      <text x="228" y="171" fill="white" fontSize="9" fontWeight="bold">%</text>
      <text x="252" y="163" fill="#92400E" fontSize="8" fontWeight="bold">День рождения</text>
      <text x="252" y="176" fill="#92400E" fontSize="7">Скидка 15%</text>

      <rect x="215" y="190" width="155" height="35" rx="5" fill="#DCFCE7" />
      <circle cx="233" cy="207" r="11" fill="#22C55E" />
      <text x="228" y="211" fill="white" fontSize="9" fontWeight="bold">★</text>
      <text x="252" y="203" fill="#166534" fontSize="8" fontWeight="bold">VIP клиент</text>
      <text x="252" y="216" fill="#166534" fontSize="7">Доп. 2% кэшбэк</text>

      <defs>
        <linearGradient id="promoGrad1" x1="20" y1="20" x2="195" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EF4444" />
        </linearGradient>
        <linearGradient id="promoGrad2" x1="205" y1="20" x2="380" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LevelsIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Level cards */}
      <g>
        {/* Bronze */}
        <rect x="20" y="20" width="85" height="110" rx="10" fill="white" stroke="#CD7F32" strokeWidth="2" />
        <circle cx="62" cy="52" r="20" fill="#CD7F32" />
        <text x="54" y="58" fill="white" fontSize="14" fontWeight="bold">B</text>
        <text x="35" y="90" fill="#92400E" fontSize="10" fontWeight="bold">Bronze</text>
        <text x="35" y="104" fill="#64748B" fontSize="8">от 0 ₽</text>
        <text x="35" y="118" fill="#64748B" fontSize="8">Кэшбэк 2%</text>

        {/* Silver */}
        <rect x="115" y="20" width="85" height="110" rx="10" fill="white" stroke="#C0C0C0" strokeWidth="2" />
        <circle cx="157" cy="52" r="20" fill="#9CA3AF" />
        <text x="150" y="58" fill="white" fontSize="14" fontWeight="bold">S</text>
        <text x="135" y="90" fill="#475569" fontSize="10" fontWeight="bold">Silver</text>
        <text x="125" y="104" fill="#64748B" fontSize="8">от 10,000 ₽</text>
        <text x="130" y="118" fill="#64748B" fontSize="8">Кэшбэк 3%</text>

        {/* Gold */}
        <rect x="210" y="20" width="85" height="110" rx="10" fill="white" stroke="#FFD700" strokeWidth="2" />
        <circle cx="252" cy="52" r="20" fill="#F59E0B" />
        <text x="244" y="58" fill="white" fontSize="14" fontWeight="bold">G</text>
        <text x="235" y="90" fill="#92400E" fontSize="10" fontWeight="bold">Gold</text>
        <text x="220" y="104" fill="#64748B" fontSize="8">от 50,000 ₽</text>
        <text x="225" y="118" fill="#64748B" fontSize="8">Кэшбэк 5%</text>

        {/* Platinum */}
        <rect x="305" y="20" width="75" height="110" rx="10" fill="url(#platGrad)" />
        <circle cx="342" cy="52" r="20" fill="white" fillOpacity="0.3" />
        <text x="334" y="58" fill="white" fontSize="14" fontWeight="bold">P</text>
        <text x="315" y="90" fill="white" fontSize="10" fontWeight="bold">Platinum</text>
        <text x="310" y="104" fill="white" fillOpacity="0.8" fontSize="7">от 100,000 ₽</text>
        <text x="315" y="118" fill="white" fillOpacity="0.8" fontSize="8">Кэшбэк 7%</text>
      </g>

      {/* Progress bar */}
      <rect x="20" y="145" width="360" height="90" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <text x="35" y="170" fill="#1E40AF" fontSize="11" fontWeight="bold">Ваш прогресс до Gold</text>

      <rect x="35" y="182" width="330" height="12" rx="6" fill="#E2E8F0" />
      <rect x="35" y="182" width="220" height="12" rx="6" fill="url(#progressGrad)" />

      <text x="35" y="218" fill="#64748B" fontSize="9">Накоплено: 38,450 ₽</text>
      <text x="280" y="218" fill="#3B82F6" fontSize="9" fontWeight="bold">До Gold: 11,550 ₽</text>

      {/* Arrow indicators */}
      <path d="M62 135 L62 145" stroke="#CD7F32" strokeWidth="2" />
      <path d="M157 135 L157 145" stroke="#9CA3AF" strokeWidth="2" />
      <path d="M252 135 L252 145" stroke="#F59E0B" strokeWidth="2" />
      <path d="M342 135 L342 145" stroke="#6366F1" strokeWidth="2" />

      <defs>
        <linearGradient id="platGrad" x1="305" y1="20" x2="380" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="progressGrad" x1="35" y1="188" x2="365" y2="188" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CommunicationsIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Phone with push notification */}
      <rect x="20" y="20" width="100" height="170" rx="12" fill="#1E293B" />
      <rect x="25" y="28" width="90" height="155" rx="8" fill="#0F172A" />

      {/* Push notification */}
      <rect x="30" y="36" width="80" height="50" rx="6" fill="white" />
      <circle cx="44" cy="52" r="9" fill="#3B82F6" />
      <text x="40" y="56" fill="white" fontSize="7" fontWeight="bold">B</text>
      <text x="58" y="48" fill="#1E40AF" fontSize="6" fontWeight="bold">TradeBonus</text>
      <text x="58" y="58" fill="#475569" fontSize="5">Начислено 245 бонусов</text>
      <text x="58" y="68" fill="#64748B" fontSize="5">за вашу заправку!</text>
      <text x="30" y="82" fill="#94A3B8" fontSize="5">Сейчас</text>

      {/* App screen */}
      <rect x="30" y="92" width="80" height="78" rx="4" fill="#1E40AF" />
      <text x="42" y="110" fill="white" fontSize="8" fontWeight="bold">12,450 ₽</text>
      <text x="38" y="122" fill="white" fillOpacity="0.7" fontSize="5">бонусный баланс</text>
      <rect x="36" y="132" width="68" height="30" rx="4" fill="white" fillOpacity="0.2" />

      {/* Channels */}
      <rect x="135" y="20" width="245" height="55" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <text x="148" y="40" fill="#1E40AF" fontSize="10" fontWeight="bold">Каналы коммуникации</text>

      <rect x="145" y="50" width="50" height="18" rx="4" fill="#22C55E" />
      <text x="157" y="63" fill="white" fontSize="7">Push</text>

      <rect x="200" y="50" width="45" height="18" rx="4" fill="#3B82F6" />
      <text x="210" y="63" fill="white" fontSize="7">SMS</text>

      <rect x="250" y="50" width="50" height="18" rx="4" fill="#F59E0B" />
      <text x="262" y="63" fill="white" fontSize="7">Email</text>

      <rect x="305" y="50" width="45" height="18" rx="4" fill="#8B5CF6" />
      <text x="316" y="63" fill="white" fontSize="7">Бот</text>

      {/* Campaign list */}
      <rect x="135" y="85" width="245" height="150" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <text x="148" y="105" fill="#1E40AF" fontSize="10" fontWeight="bold">Триггерные кампании</text>

      <rect x="145" y="115" width="225" height="35" rx="5" fill="#DCFCE7" />
      <circle cx="163" cy="132" r="9" fill="#22C55E" />
      <text x="158" y="136" fill="white" fontSize="7">✓</text>
      <text x="178" y="128" fill="#166534" fontSize="8" fontWeight="bold">День рождения</text>
      <text x="178" y="140" fill="#166534" fontSize="7">Автопоздравление + скидка</text>

      <rect x="145" y="155" width="225" height="35" rx="5" fill="#DBEAFE" />
      <circle cx="163" cy="172" r="9" fill="#3B82F6" />
      <text x="158" y="176" fill="white" fontSize="7">↺</text>
      <text x="178" y="168" fill="#1E40AF" fontSize="8" fontWeight="bold">Реактивация</text>
      <text x="178" y="180" fill="#1E40AF" fontSize="7">Не был 30 дней → скидка 10%</text>

      <rect x="145" y="195" width="225" height="35" rx="5" fill="#FEF3C7" />
      <circle cx="163" cy="212" r="9" fill="#F59E0B" />
      <text x="158" y="216" fill="white" fontSize="7">★</text>
      <text x="178" y="208" fill="#92400E" fontSize="8" fontWeight="bold">Новый уровень</text>
      <text x="178" y="220" fill="#92400E" fontSize="7">Поздравление при апгрейде</text>
    </svg>
  );
}

export function AnalyticsIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* KPI cards */}
      <g>
        <rect x="20" y="15" width="115" height="50" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        <text x="30" y="32" fill="#64748B" fontSize="8">Участников</text>
        <text x="30" y="52" fill="#1E40AF" fontSize="16" fontWeight="bold">43,293</text>
        <text x="95" y="52" fill="#22C55E" fontSize="8">+12%</text>

        <rect x="145" y="15" width="115" height="50" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        <text x="155" y="32" fill="#64748B" fontSize="8">Retention</text>
        <text x="155" y="52" fill="#1E40AF" fontSize="16" fontWeight="bold">68%</text>
        <text x="202" y="52" fill="#22C55E" fontSize="8">+5%</text>

        <rect x="270" y="15" width="110" height="50" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        <text x="280" y="32" fill="#64748B" fontSize="8">Ср. чек</text>
        <text x="280" y="52" fill="#1E40AF" fontSize="16" fontWeight="bold">2,450 ₽</text>
      </g>

      {/* Chart */}
      <rect x="20" y="75" width="235" height="160" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <text x="35" y="95" fill="#1E40AF" fontSize="10" fontWeight="bold">Динамика участников</text>

      {/* Line chart */}
      <path d="M40 185 L80 165 L120 175 L160 145 L200 125 L230 115" stroke="#3B82F6" strokeWidth="2" fill="none" />
      <circle cx="40" cy="185" r="4" fill="#3B82F6" />
      <circle cx="80" cy="165" r="4" fill="#3B82F6" />
      <circle cx="120" cy="175" r="4" fill="#3B82F6" />
      <circle cx="160" cy="145" r="4" fill="#3B82F6" />
      <circle cx="200" cy="125" r="4" fill="#3B82F6" />
      <circle cx="230" cy="115" r="4" fill="#3B82F6" />

      {/* X-axis labels */}
      <text x="35" y="215" fill="#64748B" fontSize="7">Июл</text>
      <text x="75" y="215" fill="#64748B" fontSize="7">Авг</text>
      <text x="115" y="215" fill="#64748B" fontSize="7">Сен</text>
      <text x="155" y="215" fill="#64748B" fontSize="7">Окт</text>
      <text x="195" y="215" fill="#64748B" fontSize="7">Ноя</text>
      <text x="225" y="215" fill="#64748B" fontSize="7">Дек</text>

      {/* RFM Analysis */}
      <rect x="265" y="75" width="115" height="160" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <text x="278" y="95" fill="#1E40AF" fontSize="10" fontWeight="bold">RFM анализ</text>

      {/* RFM segments */}
      <rect x="273" y="105" width="100" height="28" rx="4" fill="#DCFCE7" />
      <text x="282" y="118" fill="#166534" fontSize="7" fontWeight="bold">Чемпионы</text>
      <text x="282" y="130" fill="#166534" fontSize="10" fontWeight="bold">2,847</text>

      <rect x="273" y="137" width="100" height="28" rx="4" fill="#DBEAFE" />
      <text x="282" y="150" fill="#1E40AF" fontSize="7" fontWeight="bold">Лояльные</text>
      <text x="282" y="162" fill="#1E40AF" fontSize="10" fontWeight="bold">8,923</text>

      <rect x="273" y="169" width="100" height="28" rx="4" fill="#FEF3C7" />
      <text x="282" y="182" fill="#92400E" fontSize="7" fontWeight="bold">Под угрозой</text>
      <text x="282" y="194" fill="#92400E" fontSize="10" fontWeight="bold">3,456</text>

      <rect x="273" y="201" width="100" height="28" rx="4" fill="#FEE2E2" />
      <text x="282" y="214" fill="#991B1B" fontSize="7" fontWeight="bold">Потерянные</text>
      <text x="282" y="226" fill="#991B1B" fontSize="10" fontWeight="bold">1,245</text>
    </svg>
  );
}

export function MobileAppIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Phone 1 - Main screen */}
      <rect x="25" y="20" width="100" height="200" rx="14" fill="#1E293B" />
      <rect x="30" y="30" width="90" height="180" rx="10" fill="#0F172A" />

      {/* App header */}
      <rect x="30" y="30" width="90" height="40" rx="10" fill="#2563EB" />
      <text x="45" y="50" fill="white" fontSize="9" fontWeight="bold">TradeBonus</text>
      <text x="40" y="62" fill="white" fillOpacity="0.8" fontSize="7">Добро пожаловать!</text>

      {/* Balance card */}
      <rect x="35" y="76" width="80" height="45" rx="6" fill="url(#appGrad1)" />
      <text x="42" y="92" fill="white" fillOpacity="0.7" fontSize="6">Баланс</text>
      <text x="42" y="110" fill="white" fontSize="14" fontWeight="bold">12,450 ₽</text>

      {/* Menu items */}
      <rect x="35" y="126" width="80" height="24" rx="4" fill="white" fillOpacity="0.1" />
      <text x="44" y="142" fill="white" fontSize="7">🎁  Мои бонусы</text>

      <rect x="35" y="154" width="80" height="24" rx="4" fill="white" fillOpacity="0.1" />
      <text x="44" y="170" fill="white" fontSize="7">📍  Карта АЗС</text>

      <rect x="35" y="182" width="80" height="22" rx="4" fill="white" fillOpacity="0.1" />
      <text x="44" y="196" fill="white" fontSize="7">🔥  Акции</text>

      {/* Phone 2 - Virtual card */}
      <rect x="145" y="20" width="100" height="200" rx="14" fill="#1E293B" />
      <rect x="150" y="30" width="90" height="180" rx="10" fill="#0F172A" />

      <text x="162" y="48" fill="white" fontSize="8" fontWeight="bold">Виртуальная карта</text>

      {/* QR code placeholder */}
      <rect x="165" y="56" width="60" height="60" rx="6" fill="white" />
      <rect x="173" y="64" width="44" height="44" rx="4" fill="#1E40AF" />
      <rect x="181" y="72" width="28" height="28" rx="2" fill="white" />
      <rect x="186" y="77" width="18" height="18" fill="#1E40AF" />

      {/* Card info */}
      <text x="162" y="132" fill="white" fillOpacity="0.7" fontSize="6">Номер карты</text>
      <text x="158" y="148" fill="white" fontSize="10" fontWeight="bold">**** 4521</text>

      <rect x="155" y="158" width="80" height="40" rx="5" fill="url(#appGrad2)" />
      <text x="164" y="176" fill="white" fontSize="6">Уровень Gold</text>
      <text x="164" y="190" fill="white" fontSize="8" fontWeight="bold">Кэшбэк 5%</text>

      {/* Phone 3 - Promotions */}
      <rect x="265" y="20" width="100" height="200" rx="14" fill="#1E293B" />
      <rect x="270" y="30" width="90" height="180" rx="10" fill="#0F172A" />

      <text x="295" y="48" fill="white" fontSize="8" fontWeight="bold">Акции</text>

      {/* Promo cards */}
      <rect x="276" y="56" width="78" height="50" rx="5" fill="url(#appGrad3)" />
      <text x="284" y="74" fill="white" fontSize="8" fontWeight="bold">-20%</text>
      <text x="284" y="86" fill="white" fillOpacity="0.8" fontSize="6">на топливо</text>
      <text x="284" y="98" fill="white" fillOpacity="0.6" fontSize="5">до 31.12</text>

      <rect x="276" y="110" width="78" height="50" rx="5" fill="url(#appGrad4)" />
      <text x="284" y="128" fill="white" fontSize="8" fontWeight="bold">Кофе</text>
      <text x="284" y="140" fill="white" fillOpacity="0.8" fontSize="6">в подарок</text>
      <text x="284" y="152" fill="white" fillOpacity="0.6" fontSize="5">от 40л</text>

      <rect x="276" y="164" width="78" height="40" rx="5" fill="white" fillOpacity="0.1" />
      <text x="286" y="182" fill="white" fontSize="7">Ещё 12 акций</text>
      <text x="310" y="196" fill="#3B82F6" fontSize="8">→</text>

      <defs>
        <linearGradient id="appGrad1" x1="35" y1="76" x2="115" y2="121" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="appGrad2" x1="155" y1="158" x2="235" y2="198" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EF4444" />
        </linearGradient>
        <linearGradient id="appGrad3" x1="276" y1="56" x2="354" y2="106" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EF4444" />
        </linearGradient>
        <linearGradient id="appGrad4" x1="276" y1="110" x2="354" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LoyaltyAdminIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Admin panel */}
      <rect x="20" y="20" width="360" height="220" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />

      {/* Sidebar */}
      <rect x="20" y="20" width="85" height="220" rx="10" fill="#1E3A5F" />
      <rect x="95" y="20" width="10" height="220" fill="#1E3A5F" />

      {/* Menu */}
      <rect x="28" y="35" width="70" height="22" rx="5" fill="#2563EB" />
      <text x="38" y="50" fill="white" fontSize="8">Программа</text>

      <rect x="28" y="62" width="70" height="22" rx="5" fill="transparent" />
      <text x="38" y="77" fill="#94A3B8" fontSize="8">Клиенты</text>

      <rect x="28" y="89" width="70" height="22" rx="5" fill="transparent" />
      <text x="38" y="104" fill="#94A3B8" fontSize="8">Акции</text>

      <rect x="28" y="116" width="70" height="22" rx="5" fill="transparent" />
      <text x="38" y="131" fill="#94A3B8" fontSize="8">Интеграции</text>

      <rect x="28" y="143" width="70" height="22" rx="5" fill="transparent" />
      <text x="38" y="158" fill="#94A3B8" fontSize="8">Отчёты</text>

      {/* Main content */}
      <text x="118" y="42" fill="#1E40AF" fontSize="11" fontWeight="bold">Настройки программы</text>

      {/* Rules cards */}
      <rect x="118" y="52" width="250" height="52" rx="6" fill="#F1F5F9" />
      <text x="130" y="70" fill="#1E40AF" fontSize="10" fontWeight="bold">Правила начисления</text>
      <rect x="130" y="78" width="58" height="18" rx="4" fill="#DCFCE7" />
      <text x="138" y="91" fill="#166534" fontSize="7">Топливо: 5%</text>
      <rect x="193" y="78" width="58" height="18" rx="4" fill="#DBEAFE" />
      <text x="201" y="91" fill="#1E40AF" fontSize="7">Магазин: 3%</text>
      <rect x="256" y="78" width="55" height="18" rx="4" fill="#FEF3C7" />
      <text x="266" y="91" fill="#92400E" fontSize="7">Кафе: 2%</text>

      <rect x="118" y="110" width="250" height="52" rx="6" fill="#F1F5F9" />
      <text x="130" y="128" fill="#1E40AF" fontSize="10" fontWeight="bold">Уровни программы</text>
      <rect x="130" y="136" width="45" height="18" rx="4" fill="#CD7F32" fillOpacity="0.3" />
      <text x="137" y="149" fill="#92400E" fontSize="7">Bronze</text>
      <rect x="180" y="136" width="45" height="18" rx="4" fill="#9CA3AF" fillOpacity="0.3" />
      <text x="190" y="149" fill="#475569" fontSize="7">Silver</text>
      <rect x="230" y="136" width="40" height="18" rx="4" fill="#F59E0B" fillOpacity="0.3" />
      <text x="240" y="149" fill="#92400E" fontSize="7">Gold</text>
      <rect x="275" y="136" width="50" height="18" rx="4" fill="#8B5CF6" fillOpacity="0.3" />
      <text x="283" y="149" fill="#6D28D9" fontSize="7">Platinum</text>

      {/* Integrations */}
      <rect x="118" y="170" width="120" height="58" rx="6" fill="#F1F5F9" />
      <text x="130" y="190" fill="#1E40AF" fontSize="10" fontWeight="bold">Интеграции</text>
      <circle cx="143" cy="210" r="8" fill="#22C55E" />
      <text x="156" y="213" fill="#166534" fontSize="8">POS подключен</text>

      {/* Audit log */}
      <rect x="245" y="170" width="123" height="58" rx="6" fill="#F1F5F9" />
      <text x="255" y="190" fill="#1E40AF" fontSize="10" fontWeight="bold">Аудит</text>
      <text x="255" y="206" fill="#64748B" fontSize="7">Изменены правила</text>
      <text x="255" y="220" fill="#94A3B8" fontSize="6">Админ • 10:45</text>
    </svg>
  );
}

export const tradeBonusIllustrations = {
  'customers': CustomersIllustration,
  'bonuses': BonusesIllustration,
  'promotions': PromotionsIllustration,
  'levels': LevelsIllustration,
  'communications': CommunicationsIllustration,
  'analytics': AnalyticsIllustration,
  'mobile': MobileAppIllustration,
  'admin': LoyaltyAdminIllustration,
};
