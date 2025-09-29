# DataWorker - Корпоративный веб-сайт

Корпоративный веб-сайт экосистемы DataWorker - комплексных решений для топливной отрасли.

## О проекте

Сайт представляет экосистему продуктов DataWorker:
- **TradeCorp** - Корпоративный топливный процессинг
- **TradeTerminal** - Автономные терминалы самообслуживания
- **TradeBonus** - Система лояльности клиентов
- **TradeStation** - Управление АЗС комплексами
- **TradeFrame** - Веб-платформа централизованного управления

## Технологии

- **Frontend**: React 19 + TypeScript + Vite
- **Стили**: Tailwind CSS
- **Роутинг**: React Router v7
- **Иконки**: Lucide React
- **Backend**: Hono.js
- **Деплой**: Cloudflare Pages

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для продакшена
npm run build

# Линтинг кода
npm run lint

# Проверка типов и сборки
npm run check
```

## Структура проекта

```
src/
├── react-app/
│   ├── components/     # Переиспользуемые компоненты
│   ├── pages/         # Страницы сайта
│   │   └── products/  # Страницы продуктов
│   └── App.tsx        # Главный компонент
└── server/            # Backend на Hono.js
```

Проект создан с использованием [Mocha](https://getmocha.com).
