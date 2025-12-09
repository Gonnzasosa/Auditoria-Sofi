import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-shadow-cyan/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-shadow-cyan text-xs font-semibold mb-6 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-shadow-cyan animate-pulse"></span>
          Seguridad Digital Simplificada
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
          Transforma tu presencia digital en un <span className="text-transparent bg-clip-text bg-gradient-to-r from-shadow-cyan to-blue-500">entorno seguro</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
          Micro-estudio fundado por Sofía Zilijosky.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#servicios" 
            onClick={(e) => handleNavClick(e, '#servicios')}
            className="w-full sm:w-auto px-8 py-4 bg-shadow-cyan text-shadow-bg font-bold rounded-lg hover:bg-shadow-cyanHover transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transform hover:-translate-y-1"
          >
            Ver Planes
            <ArrowRight size={20} />
          </a>
          <a 
            href="#como-funciona"
            onClick={(e) => handleNavClick(e, '#como-funciona')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-white font-medium rounded-lg hover:border-shadow-cyan hover:text-shadow-cyan transition-all flex items-center justify-center gap-2"
          >
            Cómo Funciona
          </a>
        </div>
      </div>
    </section>
  );
};