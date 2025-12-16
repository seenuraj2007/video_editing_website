import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Showreel from '@/components/Showreel';
import Awards from '@/components/Awards';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Portfolio />
      <Showreel />
      <Awards />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}