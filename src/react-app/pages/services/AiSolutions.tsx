import PageLayout from '@/react-app/components/PageLayout';
import HexagonPattern from '@/react-app/components/HexagonPattern';
import { Link } from 'react-router';
import {
  Brain,
  Eye,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Network
} from 'lucide-react';
import { usePageMeta } from '@/react-app/hooks/usePageMeta';

export default function AiSolutionsPage() {
  usePageMeta({
    title: 'AI Решения',
    description: 'Внедрение искусственного интеллекта и машинного обучения',
    keywords: 'AI, искусственный интеллект, машинное обучение, предиктивная аналитика, компьютерное зрение, NLP'
  });
  const directions = [
    {
      title: 'Предиктивная аналитика',
      description: 'Прогнозирование спроса, оттока клиентов и складских запасов с точностью до 98%.',
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      features: ['Временные ряды (Time Series)', 'Скоринг клиентов', 'Оптимизация запасов', 'Выявление аномалий'],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Компьютерное зрение',
      description: 'Автоматизация процессов через распознавание видеопотока: от номеров автомобилей до контроля выкладки товаров.',
      icon: <Eye className="w-8 h-8 text-white" />,
      features: ['Pay-by-Plate (оплата по номеру)', 'Контроль очередей', 'Безопасность', 'Face ID'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'NLP и Чат-боты',
      description: 'Умные ассистенты, понимающие естественный язык. Автоматизация поддержки и обработки документов.',
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      features: ['LLM (Large Language Models)', 'Классификация обращений', 'Извлечение данных (OCR)', 'Голосовые помощники'],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Smart Pricing',
      description: 'Системы динамического ценообразования, реагирующие на конкурентов, погоду и остатки в реальном времени.',
      icon: <Brain className="w-8 h-8 text-white" />,
      features: ['Анализ эластичности', 'Мониторинг конкурентов', 'Максимизация маржи', 'Персонализация'],
      gradient: 'from-sky-500 to-blue-600'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[80px]"></div>
        </div>

        <HexagonPattern id="hexagons-ai" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">Artificial Intelligence</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Решения на базе <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI</span>
            </h1>

            <p className="text-xl text-blue-100/90 leading-relaxed mb-10 font-light max-w-2xl">
              Превращаем данные в конкурентное преимущество. Используем передовые алгоритмы машинного обучения для автоматизации рутины и поиска скрытых закономерностей.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Внедрить AI
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Практическая польза
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Мы не занимаемся "хайпом", мы решаем конкретные бизнес-задачи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {directions.map((item, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 text-blue-500`} />
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Neuron/Data Section */}
       <section className="bg-black text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
         {/* Animated Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
         
         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-blue-500">Data-Driven</span> подход к разработке
               </h2>
               <p className="text-xl text-gray-400 mb-8">
                  AI — это не магия, это математика. Мы начинаем с аудита ваших данных, строим гипотезы и только потом обучаем модели.
               </p>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-700 flex-shrink-0">
                        <Cpu className="w-6 h-6 text-blue-400" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">Собственные модели</h4>
                        <p className="text-gray-400 text-sm">Fine-tuning LLaMA, BERT и других open-source моделей под ваши задачи. Данные не покидают ваш контур.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center border border-indigo-700 flex-shrink-0">
                        <Network className="w-6 h-6 text-indigo-400" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">Интеграция по API</h4>
                        <p className="text-gray-400 text-sm">Встраиваем ML-сервисы в существующую микросервисную архитектуру через REST/gRPC.</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
               <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm">
                   <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono text-gray-500">PREDICTION_CONFIDENCE</span>
                      <span className="text-xs font-mono text-green-400">98.4%</span>
                   </div>
                   {/* Visualization bars */}
                   <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                           <span>Demand Forecast (Day +1)</span>
                           <span>High</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500 w-[85%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                           <span>Demand Forecast (Day +7)</span>
                           <span>Medium</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                           <div className="h-full bg-indigo-500 w-[60%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                           <span>Anomaly Probability</span>
                           <span>Low</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                           <div className="h-full bg-cyan-500 w-[5%]"></div>
                        </div>
                      </div>
                   </div>
               </div>
            </div>
         </div>
       </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Готовы к цифровой трансформации?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Консультация AI-архитектора
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}