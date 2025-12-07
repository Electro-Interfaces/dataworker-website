import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta({
    title: '404 — Страница не найдена',
    description: 'Запрашиваемая страница не существует или была перемещена. Перейдите на главную страницу DataWorker.',
    keywords: '404, страница не найдена, ошибка, DataWorker'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-navy-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-navy-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Hexagon Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{maskImage: 'radial-gradient(ellipse 90% 80% at center, transparent 0%, black 100%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at center, transparent 0%, black 100%)'}}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons-404" width="60" height="104" patternUnits="userSpaceOnUse">
              <path d="M30 2 L55 17 L55 47 L30 62 L5 47 L5 17 Z" fill="none" stroke="white" strokeWidth="1" />
              <path d="M60 54 L85 69 L85 99 L60 114 L35 99 L35 69 Z" fill="none" stroke="white" strokeWidth="1" />
              <path d="M0 54 L25 69 L25 99 L0 114 L-25 99 L-25 69 Z" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons-404)" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[150px] lg:text-[200px] font-bold text-white/10 leading-none select-none">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
          Страница не найдена
        </h1>
        <p className="text-lg lg:text-xl text-navy-100/80 mb-10 max-w-md mx-auto">
          Запрашиваемая страница не существует или была перемещена
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-700 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            На главную
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-navy-200/60 text-sm mb-4">Возможно, вы искали:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/products" className="px-4 py-2 bg-white/10 text-white/80 rounded-lg text-sm hover:bg-white/20 transition-colors">
              Продукты
            </Link>
            <Link to="/services" className="px-4 py-2 bg-white/10 text-white/80 rounded-lg text-sm hover:bg-white/20 transition-colors">
              Услуги
            </Link>
            <Link to="/contact" className="px-4 py-2 bg-white/10 text-white/80 rounded-lg text-sm hover:bg-white/20 transition-colors">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
