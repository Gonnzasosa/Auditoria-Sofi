import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-shadow-bg text-slate-300 selection:bg-shadow-cyan selection:text-shadow-bg overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Process />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;