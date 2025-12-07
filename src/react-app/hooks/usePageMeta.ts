import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description?: string;
  keywords?: string;
}

const SITE_NAME = 'DataWorker';
const DEFAULT_DESCRIPTION = 'DataWorker — разработка программного обеспечения для автоматизации бизнеса. Экосистема TradeSuite для управления сетью АЗС.';

export function usePageMeta({ title, description = DEFAULT_DESCRIPTION, keywords }: PageMetaProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | ${SITE_NAME}`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', `${title} | ${SITE_NAME}`);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    // Cleanup
    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description, keywords]);
}
