import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

// TODO: Замените на ваш Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function ContactPage() {
  usePageMeta({
    title: 'Контакты',
    description: 'Свяжитесь с DataWorker для обсуждения вашего проекта',
    keywords: 'контакты, связаться, DataWorker, консультация, техподдержка'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch {
      setError('Не удалось отправить сообщение. Попробуйте позже или напишите на info@dataworker.ru');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Общие вопросы',
      value: 'info@dataworker.ru',
      href: 'mailto:info@dataworker.ru'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Техподдержка',
      value: 'support@dataworker.ru',
      href: 'mailto:support@dataworker.ru'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Офис',
      value: 'Санкт-Петербург, Россия',
      href: '#'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <HexagonPattern id="hexagons-contact" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-wide uppercase">Контакты</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Свяжитесь с нами
          </h1>
          <p className="text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Готовы обсудить ваш проект, ответить на вопросы или предоставить демо наших продуктов
          </p>
        </div>
      </section>

      {/* Contact Cards + Form Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Контактная информация
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Выберите удобный способ связи или заполните форму — мы ответим в течение рабочего дня.
                </p>
              </div>

              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{contact.title}</div>
                      <div className="font-semibold text-gray-900">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Время работы</h3>
                <div className="space-y-2 text-blue-100">
                  <div className="flex justify-between">
                    <span>Пн — Пт</span>
                    <span className="font-medium text-white">9:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Сб — Вс</span>
                    <span className="font-medium text-white">Выходной</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-sm">Техподдержка 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Отправьте сообщение
                </h2>
                <p className="text-gray-500 mb-8">
                  Заполните форму и мы свяжемся с вами
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Сообщение отправлено!</h3>
                    <p className="text-gray-500 mb-6">Мы свяжемся с вами в ближайшее время</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Отправить ещё одно сообщение
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ваше имя *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-gray-50 rounded-xl text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-gray-50 rounded-xl text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="ivan@company.ru"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Компания
                      </label>
                      <input
                        type="text"
                        name="company"
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="Название компании"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Тема обращения
                      </label>
                      <select
                        name="subject"
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl text-gray-900 border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      >
                        <option>Консультация по продуктам TradeSuite</option>
                        <option>Заказная разработка</option>
                        <option>Техническая поддержка</option>
                        <option>Партнерство</option>
                        <option>Другое</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Сообщение *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                        placeholder="Опишите вашу задачу или вопрос..."
                      ></textarea>
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 bg-gradient-to-r from-blue-700 to-indigo-800 text-white hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Отправить сообщение
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Хотите узнать больше?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Напишите нам для демонстрации продуктов TradeSuite
          </p>
          <a
            href="mailto:info@dataworker.ru"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            info@dataworker.ru
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
