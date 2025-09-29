import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      name: 'TradeCorp',
      href: '/products/trade-corp',
      description: 'Комплексная платформа для развития корпоративного сегмента АЗС. Увеличивайте продажи, автоматизируйте обслуживание B2B клиентов и получайте максимальную прибыль от корпоративных договоров',
      image: 'https://mocha-cdn.com/01988f5f-0cbe-7d57-99ac-bafebbffc5b0/image.png_4042.png'
    },
    {
      name: 'TradeGate',
      href: '/products/trade-gate',
      description: 'Система интеграции онлайн-заказов между мобильными приложениями и торговыми сетями. Технологический посредник для корректного обмена данными между разными протоколами',
      image: '/images/tradegate-platform.png'
    },
    {
      name: 'TradeTerminal',
      href: '/products/dw-terminal',
      description: 'Уличные терминалы самообслуживания с большим 17" экраном, купюроприемником и защищенным корпусом. Работают автономно 24/7 в любых погодных условиях',
      image: 'https://mocha-cdn.com/01988f5f-0cbe-7d57-99ac-bafebbffc5b0/image.png_6766.png'
    },
    {
      name: 'TradeStation',
      href: '/products/dw-station',
      description: 'Многофункциональная платформа, объединяющая управление оборудованием АЗС, процессинг и клиентские сервисы. Ваш единый центр управления топливным бизнесом',
      image: 'https://mocha-cdn.com/01988f5f-0cbe-7d57-99ac-bafebbffc5b0/image.png_5701.png'
    },
    {
      name: 'TradeFrame',
      href: '/products/trade-frame',
      description: 'Веб-платформа для централизованного управления и аналитики всей экосистемы. Контролируйте TradeTerminal и TradeStation из любой точки мира через единый интерфейс',
      image: '/images/tradeframe-platform.png'
    }
  ];

  return (
    <section className="bg-off-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-dark-gray mb-6 leading-tight">
            Наши решения
          </h2>
          <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto">
            Технологии, которые изменят ваш бизнес сегодня
          </p>
        </div>

        {/* Products list */}
        <div className="space-y-8 lg:space-y-12">
          {products.map((product, index) => (
            <Link key={product.name} to={product.href} className="group block">
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-3xl lg:text-4xl font-light text-dark-gray mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-base lg:text-lg text-medium-gray leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="inline-flex items-center text-primary font-medium group-hover:underline">
                    <span className="mr-2">Узнать больше</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
