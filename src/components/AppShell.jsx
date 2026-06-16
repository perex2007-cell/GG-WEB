import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Commitment from './Commitment';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import FloatingIA from './FloatingIA';
import FloatingWhatsapp from './FloatingWhatsapp';

export default function AppShell() {
  return (
    <div className="bg-background text-on-background selection:bg-industrial-orange selection:text-white">
      <Header />
      <main className="pt-[64px]">
        <Hero />
        <Services />
        <Commitment />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingIA />
      <FloatingWhatsapp />
    </div>
  );
}
