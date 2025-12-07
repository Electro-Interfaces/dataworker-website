// SVG illustrations for TradeGate modules

export function OrdersIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      {/* Background */}
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Mobile phones sending orders */}
      <g>
        {/* Phone 1 */}
        <rect x="30" y="50" width="45" height="75" rx="6" fill="#1E40AF" />
        <rect x="34" y="56" width="37" height="58" rx="4" fill="#DBEAFE" />
        <rect x="39" y="62" width="27" height="5" rx="2" fill="#3B82F6" />
        <rect x="39" y="70" width="20" height="3" rx="1" fill="#93C5FD" />
        <rect x="39" y="76" width="24" height="3" rx="1" fill="#93C5FD" />
        <rect x="39" y="86" width="27" height="16" rx="3" fill="#2563EB" />

        {/* Phone 2 */}
        <rect x="30" y="140" width="45" height="75" rx="6" fill="#1E40AF" />
        <rect x="34" y="146" width="37" height="58" rx="4" fill="#DBEAFE" />
        <rect x="39" y="152" width="27" height="5" rx="2" fill="#3B82F6" />
        <rect x="39" y="160" width="20" height="3" rx="1" fill="#93C5FD" />
        <rect x="39" y="166" width="24" height="3" rx="1" fill="#93C5FD" />
        <rect x="39" y="176" width="27" height="16" rx="3" fill="#2563EB" />
      </g>

      {/* Arrows from phones */}
      <path d="M85 90 L130 120" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5 3" />
      <path d="M85 175 L130 145" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5 3" />

      {/* Central processing hub */}
      <rect x="130" y="95" width="90" height="75" rx="12" fill="url(#gradient1)" />
      <circle cx="175" cy="132" r="22" fill="white" fillOpacity="0.2" />
      <text x="152" y="128" fill="white" fontSize="10" fontWeight="bold">ПРИЁМ</text>
      <text x="150" y="142" fill="white" fontSize="10" fontWeight="bold">ЗАКАЗОВ</text>

      {/* Queue visualization */}
      <g>
        <rect x="255" y="55" width="120" height="28" rx="5" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="270" cy="69" r="6" fill="#22C55E" />
        <rect x="282" y="63" width="45" height="5" rx="2" fill="#3B82F6" />
        <rect x="282" y="72" width="32" height="3" rx="1" fill="#93C5FD" />

        <rect x="255" y="90" width="120" height="28" rx="5" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="270" cy="104" r="6" fill="#22C55E" />
        <rect x="282" y="98" width="45" height="5" rx="2" fill="#3B82F6" />
        <rect x="282" y="107" width="38" height="3" rx="1" fill="#93C5FD" />

        <rect x="255" y="125" width="120" height="28" rx="5" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="270" cy="139" r="6" fill="#F59E0B" />
        <rect x="282" y="133" width="45" height="5" rx="2" fill="#3B82F6" />
        <rect x="282" y="142" width="40" height="3" rx="1" fill="#93C5FD" />

        <rect x="255" y="160" width="120" height="28" rx="5" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="270" cy="174" r="6" fill="#22C55E" />
        <rect x="282" y="168" width="45" height="5" rx="2" fill="#3B82F6" />
        <rect x="282" y="177" width="35" height="3" rx="1" fill="#93C5FD" />
      </g>

      {/* Arrow from hub to queue */}
      <path d="M220 132 L248 132" stroke="#3B82F6" strokeWidth="2" />

      {/* Labels */}
      <text x="280" y="42" fill="#1E40AF" fontSize="11" fontWeight="bold">Очередь заказов</text>
      <text x="30" y="38" fill="#1E40AF" fontSize="10" fontWeight="bold">Приложения</text>

      {/* Definitions */}
      <defs>
        <linearGradient id="gradient1" x1="130" y1="95" x2="220" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function RoutingIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      {/* Background */}
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Input orders */}
      <g>
        <rect x="25" y="95" width="65" height="70" rx="8" fill="url(#routeGrad1)" />
        <text x="36" y="125" fill="white" fontSize="9" fontWeight="bold">Заказы</text>
        <text x="48" y="142" fill="white" fontSize="16" fontWeight="bold">↓</text>
        <text x="36" y="157" fill="white" fontSize="8">API / XML</text>
      </g>

      {/* Router hub */}
      <g>
        <circle cx="170" cy="130" r="40" fill="url(#routeGrad2)" />
        <circle cx="170" cy="130" r="26" fill="white" fillOpacity="0.2" />
        <path d="M157 122 L170 135 L183 122" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M157 138 L170 125 L183 138" stroke="white" strokeWidth="2.5" fill="none" />
      </g>

      {/* Arrows to router */}
      <path d="M90 130 L122 130" stroke="#3B82F6" strokeWidth="2" />

      {/* Network destinations */}
      <g>
        {/* Network 1 */}
        <rect x="260" y="35" width="115" height="45" rx="6" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="270" y="44" width="12" height="12" rx="2" fill="#2563EB" />
        <rect x="288" y="46" width="50" height="4" rx="1" fill="#3B82F6" />
        <rect x="288" y="54" width="38" height="3" rx="1" fill="#93C5FD" />
        <circle cx="358" cy="57" r="6" fill="#22C55E" />

        {/* Network 2 */}
        <rect x="260" y="107" width="115" height="45" rx="6" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="270" y="116" width="12" height="12" rx="2" fill="#2563EB" />
        <rect x="288" y="118" width="50" height="4" rx="1" fill="#3B82F6" />
        <rect x="288" y="126" width="42" height="3" rx="1" fill="#93C5FD" />
        <circle cx="358" cy="129" r="6" fill="#22C55E" />

        {/* Network 3 */}
        <rect x="260" y="180" width="115" height="45" rx="6" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="270" y="189" width="12" height="12" rx="2" fill="#2563EB" />
        <rect x="288" y="191" width="50" height="4" rx="1" fill="#3B82F6" />
        <rect x="288" y="199" width="45" height="3" rx="1" fill="#93C5FD" />
        <circle cx="358" cy="202" r="6" fill="#22C55E" />
      </g>

      {/* Arrows from router to networks */}
      <path d="M207 110 L255 60" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M210 130 L255 130" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M207 150 L255 200" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Labels */}
      <text x="275" y="25" fill="#1E40AF" fontSize="11" fontWeight="bold">Торговые сети</text>

      <defs>
        <linearGradient id="routeGrad1" x1="25" y1="95" x2="90" y2="165" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="routeGrad2" x1="130" y1="90" x2="210" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MonitoringIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      {/* Background */}
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Dashboard frame */}
      <rect x="20" y="20" width="360" height="220" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <rect x="20" y="20" width="360" height="32" rx="10" fill="#1E40AF" />
      <rect x="20" y="42" width="360" height="10" fill="#1E40AF" />

      {/* Window controls */}
      <circle cx="38" cy="36" r="5" fill="#EF4444" />
      <circle cx="54" cy="36" r="5" fill="#F59E0B" />
      <circle cx="70" cy="36" r="5" fill="#22C55E" />
      <text x="200" y="40" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">Мониторинг заказов</text>

      {/* Stats cards */}
      <g>
        <rect x="35" y="65" width="100" height="50" rx="6" fill="#DBEAFE" />
        <text x="45" y="82" fill="#1E40AF" fontSize="8">Всего заказов</text>
        <text x="45" y="102" fill="#1E40AF" fontSize="18" fontWeight="bold">4,519</text>

        <rect x="150" y="65" width="100" height="50" rx="6" fill="#DCFCE7" />
        <text x="160" y="82" fill="#166534" fontSize="8">Выполнено</text>
        <text x="160" y="102" fill="#166534" fontSize="18" fontWeight="bold">4,487</text>

        <rect x="265" y="65" width="100" height="50" rx="6" fill="#FEF3C7" />
        <text x="275" y="82" fill="#92400E" fontSize="8">В обработке</text>
        <text x="275" y="102" fill="#92400E" fontSize="18" fontWeight="bold">32</text>
      </g>

      {/* Chart area */}
      <rect x="35" y="125" width="210" height="100" rx="6" fill="#F1F5F9" />
      <text x="45" y="142" fill="#475569" fontSize="8" fontWeight="bold">Активность за день</text>

      {/* Chart bars */}
      <rect x="50" y="190" width="18" height="25" rx="2" fill="#3B82F6" />
      <rect x="75" y="175" width="18" height="40" rx="2" fill="#3B82F6" />
      <rect x="100" y="165" width="18" height="50" rx="2" fill="#3B82F6" />
      <rect x="125" y="155" width="18" height="60" rx="2" fill="#2563EB" />
      <rect x="150" y="170" width="18" height="45" rx="2" fill="#3B82F6" />
      <rect x="175" y="180" width="18" height="35" rx="2" fill="#3B82F6" />
      <rect x="200" y="185" width="18" height="30" rx="2" fill="#93C5FD" />

      {/* Status list */}
      <rect x="260" y="125" width="105" height="100" rx="6" fill="#F1F5F9" />
      <text x="270" y="142" fill="#475569" fontSize="8" fontWeight="bold">Статусы</text>

      <circle cx="275" cy="162" r="5" fill="#22C55E" />
      <text x="285" y="165" fill="#475569" fontSize="9">Онлайн: 12</text>

      <circle cx="275" cy="182" r="5" fill="#F59E0B" />
      <text x="285" y="185" fill="#475569" fontSize="9">Ожидание: 3</text>

      <circle cx="275" cy="202" r="5" fill="#EF4444" />
      <text x="285" y="205" fill="#475569" fontSize="9">Ошибки: 1</text>
    </svg>
  );
}

export function ReportsIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      {/* Background */}
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Document 1 - Main report */}
      <g>
        <rect x="30" y="25" width="150" height="210" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        <rect x="30" y="25" width="150" height="32" rx="8" fill="#2563EB" />
        <rect x="30" y="48" width="150" height="9" fill="#2563EB" />
        <text x="75" y="45" fill="white" fontSize="11" fontWeight="bold">ОТЧЁТ</text>

        {/* Table header */}
        <rect x="40" y="68" width="130" height="20" rx="4" fill="#DBEAFE" />
        <text x="50" y="82" fill="#1E40AF" fontSize="8" fontWeight="bold">Дата</text>
        <text x="90" y="82" fill="#1E40AF" fontSize="8" fontWeight="bold">Заказы</text>
        <text x="135" y="82" fill="#1E40AF" fontSize="8" fontWeight="bold">Сумма</text>

        {/* Table rows */}
        <line x1="40" y1="98" x2="170" y2="98" stroke="#E2E8F0" />
        <text x="50" y="112" fill="#475569" fontSize="8">01.12</text>
        <text x="100" y="112" fill="#475569" fontSize="8">156</text>
        <text x="135" y="112" fill="#475569" fontSize="8">₽ 847K</text>

        <line x1="40" y1="120" x2="170" y2="120" stroke="#E2E8F0" />
        <text x="50" y="134" fill="#475569" fontSize="8">02.12</text>
        <text x="100" y="134" fill="#475569" fontSize="8">189</text>
        <text x="135" y="134" fill="#475569" fontSize="8">₽ 1.2M</text>

        <line x1="40" y1="142" x2="170" y2="142" stroke="#E2E8F0" />
        <text x="50" y="156" fill="#475569" fontSize="8">03.12</text>
        <text x="100" y="156" fill="#475569" fontSize="8">201</text>
        <text x="135" y="156" fill="#475569" fontSize="8">₽ 1.1M</text>

        <line x1="40" y1="164" x2="170" y2="164" stroke="#E2E8F0" />
        <text x="50" y="178" fill="#475569" fontSize="8">04.12</text>
        <text x="100" y="178" fill="#475569" fontSize="8">178</text>
        <text x="135" y="178" fill="#475569" fontSize="8">₽ 956K</text>

        {/* Total */}
        <rect x="40" y="190" width="130" height="20" rx="4" fill="#1E40AF" />
        <text x="50" y="204" fill="white" fontSize="8" fontWeight="bold">Итого:</text>
        <text x="135" y="204" fill="white" fontSize="8" fontWeight="bold">₽ 4.1M</text>
      </g>

      {/* Export buttons */}
      <g>
        <rect x="210" y="35" width="80" height="35" rx="6" fill="#22C55E" />
        <text x="230" y="58" fill="white" fontSize="11" fontWeight="bold">Excel</text>

        <rect x="300" y="35" width="75" height="35" rx="6" fill="#EF4444" />
        <text x="322" y="58" fill="white" fontSize="11" fontWeight="bold">PDF</text>

        <rect x="210" y="80" width="165" height="35" rx="6" fill="#F59E0B" />
        <text x="250" y="103" fill="white" fontSize="11" fontWeight="bold">Выгрузка в 1С</text>
      </g>

      {/* Auto-report schedule */}
      <rect x="210" y="130" width="165" height="90" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <text x="225" y="152" fill="#1E40AF" fontSize="10" fontWeight="bold">Автоотчёты</text>

      <circle cx="228" cy="175" r="5" fill="#22C55E" />
      <text x="240" y="178" fill="#475569" fontSize="9">Ежедневный — 09:00</text>

      <circle cx="228" cy="200" r="5" fill="#22C55E" />
      <text x="240" y="203" fill="#475569" fontSize="9">Недельный — Пн</text>
    </svg>
  );
}

export function IntegrationsIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      {/* Background */}
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Center API hub */}
      <circle cx="200" cy="130" r="45" fill="url(#apiGrad)" />
      <text x="177" y="125" fill="white" fontSize="13" fontWeight="bold">REST</text>
      <text x="184" y="142" fill="white" fontSize="13" fontWeight="bold">API</text>

      {/* Connected services */}
      {/* Top left - Mobile app */}
      <g>
        <rect x="35" y="25" width="75" height="55" rx="8" fill="white" stroke="#3B82F6" strokeWidth="2" />
        <rect x="48" y="34" width="48" height="32" rx="5" fill="#DBEAFE" />
        <rect x="54" y="41" width="36" height="4" rx="1" fill="#3B82F6" />
        <rect x="54" y="48" width="28" height="3" rx="1" fill="#93C5FD" />
        <rect x="54" y="54" width="32" height="3" rx="1" fill="#93C5FD" />
        <text x="52" y="92" fill="#1E40AF" fontSize="9" fontWeight="bold">Яндекс</text>
      </g>
      <path d="M110 60 L158 105" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 3" />

      {/* Top right - Another app */}
      <g>
        <rect x="290" y="25" width="75" height="55" rx="8" fill="white" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="327" cy="48" r="16" fill="#DBEAFE" />
        <text x="320" y="53" fill="#3B82F6" fontSize="12" fontWeight="bold">2G</text>
        <text x="308" y="92" fill="#1E40AF" fontSize="9" fontWeight="bold">2ГИС</text>
      </g>
      <path d="M290 60 L242 105" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 3" />

      {/* Left - Aggregator */}
      <g>
        <rect x="20" y="105" width="75" height="50" rx="8" fill="white" stroke="#22C55E" strokeWidth="2" />
        <rect x="32" y="115" width="50" height="30" rx="5" fill="#DCFCE7" />
        <text x="42" y="135" fill="#166534" fontSize="10" fontWeight="bold">API</text>
        <text x="28" y="168" fill="#166534" fontSize="9" fontWeight="bold">Агрегатор</text>
      </g>
      <path d="M95 130 L155 130" stroke="#22C55E" strokeWidth="2" strokeDasharray="4 3" />

      {/* Right - Network */}
      <g>
        <rect x="305" y="105" width="75" height="50" rx="8" fill="white" stroke="#F59E0B" strokeWidth="2" />
        <rect x="317" y="115" width="50" height="30" rx="5" fill="#FEF3C7" />
        <text x="328" y="135" fill="#92400E" fontSize="10" fontWeight="bold">Сеть</text>
        <text x="305" y="168" fill="#92400E" fontSize="9" fontWeight="bold">TradeFrame</text>
      </g>
      <path d="M245 130 L305 130" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 3" />

      {/* Bottom - Webhook */}
      <g>
        <rect x="140" y="195" width="120" height="45" rx="8" fill="white" stroke="#8B5CF6" strokeWidth="2" />
        <text x="167" y="218" fill="#8B5CF6" fontSize="10" fontWeight="bold">Webhooks</text>
        <text x="160" y="232" fill="#A78BFA" fontSize="8">Уведомления</text>
      </g>
      <path d="M200 175 L200 195" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 3" />

      {/* SDK badge */}
      <rect x="305" y="195" width="70" height="28" rx="5" fill="#1E40AF" />
      <text x="325" y="214" fill="white" fontSize="10" fontWeight="bold">SDK</text>

      <defs>
        <linearGradient id="apiGrad" x1="155" y1="85" x2="245" y2="175" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AdminIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ overflow: 'hidden' }}>
      {/* Background */}
      <rect width="400" height="260" fill="#F8FAFC" />

      {/* Admin panel frame */}
      <rect x="20" y="15" width="360" height="230" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />

      {/* Sidebar */}
      <rect x="20" y="15" width="80" height="230" rx="10" fill="#1E3A5F" />
      <rect x="90" y="15" width="10" height="230" fill="#1E3A5F" />

      {/* Sidebar menu items */}
      <rect x="30" y="32" width="60" height="24" rx="5" fill="#2563EB" />
      <rect x="38" y="40" width="8" height="8" rx="2" fill="white" />
      <rect x="52" y="42" width="28" height="4" rx="1" fill="white" />

      <rect x="30" y="64" width="60" height="24" rx="5" fill="transparent" />
      <rect x="38" y="72" width="8" height="8" rx="2" fill="#64748B" />
      <rect x="52" y="74" width="28" height="4" rx="1" fill="#64748B" />

      <rect x="30" y="96" width="60" height="24" rx="5" fill="transparent" />
      <rect x="38" y="104" width="8" height="8" rx="2" fill="#64748B" />
      <rect x="52" y="106" width="28" height="4" rx="1" fill="#64748B" />

      <rect x="30" y="128" width="60" height="24" rx="5" fill="transparent" />
      <rect x="38" y="136" width="8" height="8" rx="2" fill="#64748B" />
      <rect x="52" y="138" width="28" height="4" rx="1" fill="#64748B" />

      {/* Main content area header */}
      <text x="115" y="38" fill="#1E40AF" fontSize="11" fontWeight="bold">Управление пользователями</text>

      {/* Users table */}
      <rect x="115" y="50" width="250" height="24" rx="4" fill="#DBEAFE" />
      <text x="125" y="66" fill="#1E40AF" fontSize="8" fontWeight="bold">Имя</text>
      <text x="205" y="66" fill="#1E40AF" fontSize="8" fontWeight="bold">Роль</text>
      <text x="295" y="66" fill="#1E40AF" fontSize="8" fontWeight="bold">Статус</text>

      {/* User rows */}
      <g>
        <circle cx="135" cy="92" r="10" fill="#3B82F6" />
        <text x="132" y="96" fill="white" fontSize="8" fontWeight="bold">А</text>
        <text x="152" y="96" fill="#475569" fontSize="9">Алексей К.</text>
        <rect x="205" y="84" width="55" height="16" rx="4" fill="#2563EB" />
        <text x="215" y="95" fill="white" fontSize="8">Админ</text>
        <circle cx="310" cy="92" r="5" fill="#22C55E" />
        <text x="320" y="95" fill="#475569" fontSize="9">Онлайн</text>
      </g>

      <line x1="115" y1="110" x2="365" y2="110" stroke="#E2E8F0" />

      <g>
        <circle cx="135" cy="128" r="10" fill="#8B5CF6" />
        <text x="132" y="132" fill="white" fontSize="8" fontWeight="bold">М</text>
        <text x="152" y="132" fill="#475569" fontSize="9">Мария С.</text>
        <rect x="205" y="120" width="55" height="16" rx="4" fill="#22C55E" />
        <text x="210" y="131" fill="white" fontSize="8">Менеджер</text>
        <circle cx="310" cy="128" r="5" fill="#22C55E" />
        <text x="320" y="131" fill="#475569" fontSize="9">Онлайн</text>
      </g>

      <line x1="115" y1="146" x2="365" y2="146" stroke="#E2E8F0" />

      <g>
        <circle cx="135" cy="164" r="10" fill="#F59E0B" />
        <text x="132" y="168" fill="white" fontSize="8" fontWeight="bold">И</text>
        <text x="152" y="168" fill="#475569" fontSize="9">Иван П.</text>
        <rect x="205" y="156" width="55" height="16" rx="4" fill="#6B7280" />
        <text x="210" y="167" fill="white" fontSize="8">Оператор</text>
        <circle cx="310" cy="164" r="5" fill="#9CA3AF" />
        <text x="320" y="167" fill="#475569" fontSize="9">Офлайн</text>
      </g>

      {/* Audit log section */}
      <rect x="115" y="185" width="250" height="50" rx="5" fill="#F1F5F9" />
      <text x="125" y="202" fill="#475569" fontSize="9" fontWeight="bold">Журнал аудита</text>
      <text x="125" y="217" fill="#64748B" fontSize="8">10:45 — Алексей К. изменил права доступа</text>
      <text x="125" y="230" fill="#64748B" fontSize="8">10:32 — Мария С. создала нового пользователя</text>
    </svg>
  );
}

// Export all illustrations as a map
export const tradeGateIllustrations = {
  'orders': OrdersIllustration,
  'routing': RoutingIllustration,
  'monitoring': MonitoringIllustration,
  'reports': ReportsIllustration,
  'integrations': IntegrationsIllustration,
  'admin': AdminIllustration,
};
