# DataWorker Website Project

## Описание проекта

**DataWorker** — корпоративный сайт компании, разрабатывающей программное обеспечение для автоматизации топливного ритейла. Основной продукт — экосистема **TradeSuite**.

### Технологический стек
- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Backend (формы):** PHP (mail())

---

## Структура проекта

```
DW-project/
├── public/                    # Статические файлы (копируются в dist)
│   ├── images/               # Изображения продуктов
│   ├── favicon.png
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── send-mail.php         # Обработчик формы обратной связи
│   └── .htaccess             # Конфигурация Apache
├── src/
│   └── react-app/
│       ├── components/       # Переиспользуемые компоненты
│       ├── pages/            # Страницы сайта
│       │   ├── products/     # Страницы продуктов
│       │   └── services/     # Страницы услуг
│       ├── hooks/            # Кастомные хуки
│       ├── data/             # Данные (навигация и т.д.)
│       ├── types/            # TypeScript типы
│       ├── App.tsx           # Главный компонент с роутингом
│       ├── main.tsx          # Точка входа
│       └── index.css         # Глобальные стили
├── dist/                     # Собранный проект (генерируется)
├── .claude/                  # Настройки Claude Code
│   └── settings.md           # Конфигурация деплоя
├── index.html                # HTML шаблон
├── vite.config.ts            # Конфигурация Vite
├── tailwind.config.js        # Конфигурация Tailwind
├── tsconfig.json             # Конфигурация TypeScript
└── package.json              # Зависимости и скрипты
```

---

## Production-хостинг

### Основные данные
| Параметр | Значение |
|----------|----------|
| **URL** | https://dataworker.ru |
| **Хостинг** | reg.ru |
| **Сервер** | server268.hosting.reg.ru |
| **IP** | 31.31.197.5 |
| **PHP** | 8.3.27 (FastCGI Apache) |
| **SSL** | Let's Encrypt (авто-продление) |

### FTP доступ
```
Host: 31.31.197.5
Port: 21
Login: u3350932
Password: uP3CE5UvyO2p4e0Z
Document Root: /www/dataworker.ru/
```

### Панель управления (ISPmanager)
```
URL: https://server268.hosting.reg.ru:1500/
Login: u3350932
Password: ChUve97N4lVl5vnF
```

---

## Схема публикации (Deploy)

### Полный деплой

```bash
# 1. Сборка проекта
npm run build

# 2. Загрузка файлов на сервер
cd dist

# Корневые файлы
for file in index.html favicon.png robots.txt sitemap.xml .htaccess send-mail.php; do
  curl -s -T "$file" ftp://31.31.197.5/www/dataworker.ru/ --user u3350932:uP3CE5UvyO2p4e0Z
done

# Assets (JS/CSS)
cd assets
for file in *; do
  curl -s -T "$file" ftp://31.31.197.5/www/dataworker.ru/assets/ --user u3350932:uP3CE5UvyO2p4e0Z
done
cd ..

# Images
cd images
for file in *.png; do
  curl -s -T "$file" ftp://31.31.197.5/www/dataworker.ru/images/ --user u3350932:uP3CE5UvyO2p4e0Z
done
```

### Быстрое обновление (только код)

```bash
npm run build
cd dist/assets
for file in *; do
  curl -s -T "$file" ftp://31.31.197.5/www/dataworker.ru/assets/ --user u3350932:uP3CE5UvyO2p4e0Z
done
cd ..
curl -s -T index.html ftp://31.31.197.5/www/dataworker.ru/ --user u3350932:uP3CE5UvyO2p4e0Z
```

### Проверка деплоя

```bash
# Проверить что сайт работает
curl -sk https://dataworker.ru/ | head -5

# Проверить форму
curl -sk -X POST "https://dataworker.ru/send-mail.php" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test"}'
```

---

## Конфигурация для разных окружений

### Production (reg.ru)
**vite.config.ts:**
```typescript
base: '/'
```

**App.tsx:**
```tsx
<Router>
```

### GitHub Pages (staging)
**vite.config.ts:**
```typescript
base: '/dataworker-website/'
```

**App.tsx:**
```tsx
<Router basename="/dataworker-website">
```

---

## Email-система

### Почтовые ящики
- `info@dataworker.ru` — общие вопросы
- `support@dataworker.ru` — техподдержка

### Настройки почтового клиента
| Параметр | Значение |
|----------|----------|
| IMAP сервер | mail.dataworker.ru |
| IMAP порт | 993 (SSL) |
| SMTP сервер | mail.dataworker.ru |
| SMTP порт | 465 (SSL) / 587 (TLS) |

### Форма обратной связи
- **Endpoint:** `/send-mail.php`
- **Метод:** POST (JSON)
- **Получатель:** info@dataworker.ru

---

## Инструкции для AI-агента

### При работе с проектом

1. **Сборка:** Всегда используй `npm run build` перед деплоем
2. **Деплой:** Используй curl + FTP для загрузки файлов
3. **Проверка:** После деплоя проверь `curl -sk https://dataworker.ru/`
4. **Коммиты:** Делай осмысленные коммиты на русском или английском

### Важные файлы

- `public/.htaccess` — НЕ добавлять HTTPS редирект (делает nginx)
- `public/send-mail.php` — отправляет на info@dataworker.ru
- `vite.config.ts` — base должен быть '/' для production

### При добавлении новых страниц

1. Создать компонент в `src/react-app/pages/`
2. Добавить роут в `App.tsx`
3. Добавить в навигацию (`data/navigation.ts`)
4. Обновить `sitemap.xml`

### При изменении изображений

1. Добавить в `public/images/`
2. Использовать путь `/images/filename.png`
3. После билда загрузить на FTP

---

## Git-репозиторий

- **URL:** https://github.com/Electro-Interfaces/dataworker-website
- **Ветка:** main
- **GitHub Pages:** https://electro-interfaces.github.io/dataworker-website/

### Git-команды

```bash
# Статус
git status

# Коммит
git add .
git commit -m "Описание изменений"

# Пуш
git push
```

---

## Контакты

- **Сайт:** https://dataworker.ru
- **Email:** info@dataworker.ru
- **Поддержка:** support@dataworker.ru
