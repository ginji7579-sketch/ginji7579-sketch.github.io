import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/contexts/CartContext';

/**
 * Home Page - Main landing page
 * Design Philosophy: Modern Business Minimalism
 * - Comprehensive showcase of company services and values
 * - Smooth scrolling between sections
 * - Professional, modern aesthetic
 */
export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
