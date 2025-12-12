import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { About } from './components/About';
import { SocialsAndFooter } from './components/SocialsAndFooter';
import { AiStylist } from './components/AiStylist';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Navbar />
      
      <main>
        <Hero />
        <ProductGrid />
        <About />
      </main>

      <SocialsAndFooter />
      
      {/* Floating AI Widget */}
      <AiStylist />
    </div>
  );
};

export default App;