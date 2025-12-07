import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

interface CTALink {
  href: string;
  text: string;
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryLink: CTALink;
  secondaryLink?: CTALink;
  bgColor?: 'white' | 'gray';
}

export default function CTASection({
  title,
  subtitle,
  primaryLink,
  secondaryLink,
  bgColor = 'white',
}: CTASectionProps) {
  const bgClass = bgColor === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section className={`${bgClass} py-16 lg:py-20`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-gray-500 mb-8">
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={primaryLink.href}
            className="px-8 py-4 bg-navy-950 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-navy-900 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            {primaryLink.text}
            <ArrowRight className="w-5 h-5" />
          </Link>
          {secondaryLink && (
            <Link
              to={secondaryLink.href}
              className="px-8 py-4 bg-gray-100 text-gray-700 border-2 border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all duration-300"
            >
              {secondaryLink.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
