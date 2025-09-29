import Navigation from '@/react-app/components/Navigation';
import { useState } from 'react';
import { Send, CheckCircle, Mail } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contacts = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Общие вопросы',
      email: 'info@dataworker.ru'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Отдел продаж',
      email: 'sales@dataworker.ru'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Техническая поддержка',
      email: 'support@dataworker.ru'
    }
  ];

  return (
    <div className="relative">
      <Navigation />
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24 pb-24 lg:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
                Свяжитесь с нами
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                Готовы обсудить ваш проект или ответить на вопросы
              </p>
            </div>
          </div>

          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 -mb-px">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="bg-off-white py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                Контакты
              </h2>
              <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
                Напишите нам на электронную почту
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {contacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                      {contact.icon}
                    </div>
                    <h3 className="text-xl font-medium text-dark-gray mb-4">
                      {contact.title}
                    </h3>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-light-bg py-8 lg:py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
                Отправьте сообщение
              </h2>
              <p className="text-xl text-medium-gray leading-relaxed">
                Мы свяжемся с вами в течение рабочего дня
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-off-white rounded-lg text-dark-gray placeholder-medium-gray border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-off-white rounded-lg text-dark-gray placeholder-medium-gray border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="ivan@company.ru"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Компания
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-off-white rounded-lg text-dark-gray placeholder-medium-gray border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Название компании"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-off-white rounded-lg text-dark-gray placeholder-medium-gray border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="+7 (900) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Тема обращения
                  </label>
                  <select className="w-full px-4 py-3 bg-off-white rounded-lg text-dark-gray border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                    <option>Консультация по продуктам</option>
                    <option>Техническая поддержка</option>
                    <option>Разработка решения</option>
                    <option>Партнерство</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-off-white rounded-lg text-dark-gray placeholder-medium-gray border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Оставьте сообщение..."
                  ></textarea>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className={`inline-flex items-center px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 ${
                      isSubmitted
                        ? 'bg-green-600 text-white'
                        : 'bg-primary text-white hover:bg-primary/90 hover:scale-105'
                    } shadow-lg`}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Отправлено
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Отправить
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}