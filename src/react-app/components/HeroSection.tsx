import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-blue-700 py-20 lg:py-32 pb-32 lg:pb-40 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-white/90 font-medium">Инжиниринговый центр</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
            Создаем технологии
            <br />
            <span className="font-bold">для вашего бизнеса</span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            Разрабатываем программные и аппаратные решения, которые помогают бизнесу работать эффективно
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Обсудить проект
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 border border-white/20 transition-all duration-300"
            >
              О компании
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 -mb-px">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
