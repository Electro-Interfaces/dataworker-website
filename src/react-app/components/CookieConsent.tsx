import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { X, Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'dw-cookie-consent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6 relative">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Icon */}
          <div className="hidden sm:flex w-12 h-12 bg-navy-100 rounded-xl items-center justify-center flex-shrink-0">
            <Cookie className="w-6 h-6 text-navy-600" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Мы используем файлы cookie для улучшения работы сайта и анализа трафика.
              Продолжая использовать сайт, вы соглашаетесь с{' '}
              <Link to="/privacy" className="text-navy-600 hover:underline font-medium">
                политикой конфиденциальности
              </Link>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-4 py-2.5 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl text-sm font-medium transition-colors"
            >
              Отклонить
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-navy-950 hover:bg-navy-900 text-white rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-navy-500/25"
            >
              Принять
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={handleDecline}
            className="absolute top-3 right-3 sm:static p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
