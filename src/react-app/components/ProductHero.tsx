import { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import HexagonPattern from './HexagonPattern';

interface ProductHeroProps {
  title: string;
  titleAccent: string;
  badge?: string;
  badgeColor?: 'green' | 'blue' | 'purple';
  description: string;
  subdescription?: string;
  illustration?: ReactNode;
  ctaText?: string;
  ctaLink?: string;
  patternId?: string;
}

const badgeColors = {
  green: 'bg-green-400',
  blue: 'bg-navy-400',
  purple: 'bg-purple-400',
};

export default function ProductHero({
  title,
  titleAccent,
  badge,
  badgeColor = 'green',
  description,
  subdescription,
  illustration,
  ctaText = 'Запросить демо',
  ctaLink = '/contact',
  patternId = 'hexagons-product',
}: ProductHeroProps) {
  return (
    <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden relative">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-navy-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-navy-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <HexagonPattern id={patternId} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="text-left">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <div className={`w-2 h-2 rounded-full ${badgeColors[badgeColor]} animate-pulse`} />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">{badge}</span>
              </div>
            )}

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-[0.9] tracking-tight">
              {title}<span className="text-navy-200">{titleAccent}</span>
            </h1>

            <p className="text-lg lg:text-xl text-navy-100 leading-relaxed mb-10 font-light max-w-xl">
              {description}
              {subdescription && (
                <span className="block mt-2 opacity-80 text-base">{subdescription}</span>
              )}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to={ctaLink}
                className="px-6 py-3 bg-white text-navy-950 rounded-xl font-bold text-base shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Illustration */}
          {illustration && (
            <div className="relative hidden lg:flex items-center justify-center h-[400px]">
              <div className="relative transform hover:scale-105 transition-all duration-500">
                {illustration}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 -mb-px z-20">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
}
