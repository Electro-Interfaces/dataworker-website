import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative">
      <Navigation />
      <div className="pt-20 lg:pt-24">
        <main>
          {children}
        </main>
      </div>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default PageLayout;
