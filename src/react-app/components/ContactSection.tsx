import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="bg-light-bg section-spacing">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center content-spacing">
          <h2 className="text-3xl lg:text-5xl font-light text-dark-gray mb-4 leading-tight">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-medium-gray leading-relaxed">
            Обсудим ваш проект и предложим оптимальное решение
          </p>
        </div>

        {/* Contact Form */}
        <div className="dashboard-card p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  className="w-full px-4 py-3 input-light text-dark-gray placeholder-medium-gray border border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 input-light text-dark-gray placeholder-medium-gray border border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Компания"
                className="w-full px-4 py-3 input-light text-dark-gray placeholder-medium-gray border border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <textarea
                placeholder="Оставьте сообщение..."
                rows={4}
                required
                className="w-full px-4 py-3 input-light text-dark-gray placeholder-medium-gray border border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitted}
                className={`inline-flex items-center px-8 py-4 rounded-lg font-medium ${
                  isSubmitted 
                    ? 'bg-success-green text-white' 
                    : 'bg-primary text-white hover:bg-primary-dark transition-colors'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Сообщение отправлено
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Отправить сообщение
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <div>
            <div className="text-primary font-medium mb-2">Email</div>
            <div className="text-dark-gray">info@dataworker.ru</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
