import { useState, ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SystemModule {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  image?: string;
  illustration?: ReactNode;
}

interface ModuleTabsProps {
  title: string;
  subtitle?: string;
  modules: SystemModule[];
  bgColor?: 'gray' | 'white';
}

export default function ModuleTabs({
  title,
  subtitle,
  modules,
  bgColor = 'gray',
}: ModuleTabsProps) {
  const [activeModule, setActiveModule] = useState(0);

  const bgClass = bgColor === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`${bgClass} pt-6 pb-10 lg:pt-8 lg:pb-14`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-8 mx-auto max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 mx-auto">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-500 mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">
          {/* Tabs - Left side */}
          <div className="lg:col-span-2 flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0">
            {modules.map((module, index) => (
              <button
                key={index}
                onClick={() => setActiveModule(index)}
                className={`flex items-center gap-3 p-3 lg:p-3.5 rounded-xl text-left transition-all duration-300 flex-shrink-0 lg:flex-shrink ${
                  activeModule === index
                    ? 'bg-navy-600 text-white shadow-lg shadow-navy-500/25'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeModule === index ? 'bg-white/20' : 'bg-navy-50 text-navy-600'
                  }`}
                >
                  {module.icon}
                </div>
                <div className="hidden lg:block">
                  <div className="font-semibold text-sm">{module.title}</div>
                </div>
                <span className="lg:hidden font-medium whitespace-nowrap text-sm">
                  {module.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content - Right side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-5 lg:p-6 shadow-lg border border-gray-100 min-h-[600px] flex flex-col">
              {/* Module Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-navy-700 rounded-xl flex items-center justify-center text-white shadow-md shadow-navy-200">
                  {modules[activeModule].icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {modules[activeModule].title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed mb-5">
                {modules[activeModule].description}
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-2.5">
                {modules[activeModule].features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-50">
                    <CheckCircle2 className="w-4 h-4 text-navy-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Spacer */}
              <div className="flex-grow min-h-4"></div>

              {/* Module Image or Illustration */}
              {(modules[activeModule].image || modules[activeModule].illustration) && (
                <div className="mt-auto group/img relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-navy-500 to-navy-600 rounded-2xl opacity-20 blur-sm group-hover/img:opacity-30 transition-opacity"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-100 flex justify-center items-center min-h-[280px]">
                    {modules[activeModule].image ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${modules[activeModule].image}`}
                        alt={modules[activeModule].title}
                        className="w-full h-auto max-h-[400px] object-contain transform group-hover/img:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      modules[activeModule].illustration
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
