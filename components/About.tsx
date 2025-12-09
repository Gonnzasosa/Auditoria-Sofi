import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-900 to-shadow-bg border border-slate-800 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10 shadow-2xl">
        
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-6">
            Sobre <span className="text-shadow-cyan"><span className="inline-block drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]">S</span>hadowIA</span>
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Micro-estudio fundado por <strong>Sofía Zilijosky</strong>, especializado en auditorías rápidas y hardening técnico.
            </p>
            <p>
              En un mundo digital saturado de burocracia, mi enfoque es radicalmente simple: 
              <span className="text-white font-medium ml-1">Servicios profesionales, entregas rápidas y precios accesibles.</span>
            </p>
            <p>
              Sin agencias intermediarias, sin costos inflados. Solo seguridad efectiva para quienes realmente la necesitan.
            </p>
          </div>
        </div>

        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-800 flex items-center justify-center border-2 border-shadow-cyan shadow-[0_0_30px_rgba(0,229,255,0.15)] flex-shrink-0">
          <span className="text-4xl md:text-6xl font-bold text-shadow-cyan drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">S</span>
        </div>

      </div>
    </section>
  );
};