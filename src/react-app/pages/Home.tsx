import Navigation from '@/react-app/components/Navigation';
import HeroSection from '@/react-app/components/HeroSection';
import ProductsSection from '@/react-app/components/ProductsSection';
import ServicesSection from '@/react-app/components/ServicesSection';
import ContactSection from '@/react-app/components/ContactSection';

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main className="pt-20 lg:pt-24">
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}
