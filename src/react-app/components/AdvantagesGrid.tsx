import { ReactNode } from 'react';

interface Advantage {
  icon: ReactNode;
  title: string;
  description: string;
}

interface AdvantagesGridProps {
  title: string;
  subtitle?: string;
  advantages: Advantage[];
  variant?: 'light' | 'dark';
  columns?: 2 | 3;
}

export default function AdvantagesGrid({
  title,
  subtitle,
  advantages,
  variant = 'light',
  columns = 3,
}: AdvantagesGridProps) {
  const isDark = variant === 'dark';
  const colsClass = columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';

  return (
    <>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-navy-100' : 'text-gray-500'}`}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Grid */}
      <div className={`grid md:grid-cols-2 ${colsClass} gap-6`}>
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 transition-all duration-300 ${
              isDark
                ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
                : 'bg-gray-50 hover:shadow-lg hover:-translate-y-1'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                isDark ? 'bg-white/20 text-white' : 'bg-navy-100 text-navy-600'
              }`}
            >
              {advantage.icon}
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {advantage.title}
            </h3>
            <p className={isDark ? 'text-navy-100' : 'text-gray-600'}>
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
