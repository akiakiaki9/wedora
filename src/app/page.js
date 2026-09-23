import Nav from '@/components/wedora/Nav';
import Hero from '@/components/wedora/Hero';
import Features from '@/components/wedora/Features';
import HowItWorks from '@/components/wedora/HowItWorks';
import Showcase from '@/components/wedora/Showcase';
import VideoDemo from '@/components/wedora/VideoDemo';
import Pricing from '@/components/wedora/Pricing';
import FAQ from '@/components/wedora/FAQ';
import Contact from '@/components/wedora/Contact';
import Footer from '@/components/wedora/Footer';

export default function WedoraHome() {
  return (
    <main className="wedora-main">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Showcase />
      <VideoDemo />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}