import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { Stats } from './components/sections/Stats';
import { Services } from './components/sections/Services';
import { WhyBytevanta } from './components/sections/WhyBytevanta';
import { Process } from './components/sections/Process';
import { Solutions } from './components/sections/Solutions';
import { FeaturedProduct } from './components/sections/FeaturedProduct';
import { Technologies } from './components/sections/Technologies';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import { CallToAction } from './components/sections/CallToAction';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Corporate Website Structure */}
      <main id="main-content">
        <Hero />
        <Stats />
        <Services />
        <WhyBytevanta />
        <Process />
        <Solutions />
        <FeaturedProduct />
        <Technologies />
        <Projects />
        <About />
        <CallToAction />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
