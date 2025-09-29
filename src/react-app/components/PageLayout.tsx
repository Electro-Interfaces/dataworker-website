import { ReactNode } from 'react';
import Navigation from './Navigation';
import ContactSection from './ContactSection';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative">
      <Navigation />
      <main className="pt-20 lg:pt-24">
        {children}
        <ContactSection />
      </main>
    </div>
  );
};

export default PageLayout;
