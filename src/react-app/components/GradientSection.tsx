import { ReactNode } from 'react';

interface GradientSectionProps {
  children: ReactNode;
  className?: string;
  withBlobs?: boolean;
}

export default function GradientSection({
  children,
  className = '',
  withBlobs = true,
}: GradientSectionProps) {
  return (
    <section className={`bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 py-16 lg:py-24 relative overflow-hidden ${className}`}>
      {withBlobs && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
