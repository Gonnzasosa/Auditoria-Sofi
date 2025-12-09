import React, { useEffect, useRef, useState } from 'react';
import { Mail, Database, Search, FileBarChart, Wrench, ArrowDown, ArrowRight } from 'lucide-react';

const Step: React.FC<{ 
  number: string; 
  icon: React.ReactNode; 
  title: string; 
  desc: string; 
  isLast?: boolean;
  index: number;
  isVisible: boolean;
}> = ({ number, icon, title, desc, isLast, index, isVisible }) => {
  // Base delay plus staggered delay based on index
  const delay = index * 200;

  return (
    <div 
      className={`flex flex-col items-center relative flex-1 group transition-all duration-700 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon Container */}
      <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-shadow-cyan mb-6 relative z-10 group-hover:border-shadow-cyan group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300">
        {icon}
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-xs font-bold text-white">
          {number}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-white font-bold text-lg mb-2 text-center">{title}</h3>
      <p className="text-slate-400 text-center text-sm leading-relaxed px-2">{desc}</p>

      {/* Connector Line/Arrow */}
      {!isLast && (
        <div className={`hidden md:block absolute top-8 left-1/2 w-full h-[2px] -z-0 transition-opacity duration-1000 delay-[${delay + 300}ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
           <div className="w-full h-full bg-gradient-to-r from-slate-800 to-slate-800 relative">
             <div className="absolute right-0 -top-2 text-slate-700 transform translate-x-1/2">
                <ArrowRight size={20} />
             </div>
           </div>
        </div>
      )}
      {!isLast && (
        <div className={`md:hidden my-4 text-slate-700 transition-opacity duration-500 delay-[${delay + 100}ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <ArrowDown size={24} />
        </div>
      )}
    </div>
  );
};

export const Process: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run animation once
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section 
      id="como-funciona" 
      ref={sectionRef}
      className="py-20 px-6 bg-[#070e17] border-y border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cómo Funciona</h2>
          <p className="text-shadow-cyan font-medium">Proceso 100% online, sin llamadas innecesarias.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-start">
          <Step 
            number="1"
            icon={<Mail size={28} />}
            title="Contacto"
            desc="Me escribes por WhatsApp para iniciar el proceso."
            index={0}
            isVisible={isVisible}
          />
          <Step 
            number="2"
            icon={<Database size={28} />}
            title="Datos Básicos"
            desc="Te solicito 2-3 datos puntuales para iniciar el análisis."
            index={1}
            isVisible={isVisible}
          />
          <Step 
            number="3"
            icon={<Search size={28} />}
            title="Auditoría"
            desc="Realizo el análisis técnico y de exposición."
            index={2}
            isVisible={isVisible}
          />
          <Step 
            number="4"
            icon={<FileBarChart size={28} />}
            title="Informe"
            desc="Recibís un PDF profesional en 24-72 hs."
            index={3}
            isVisible={isVisible}
          />
          <Step 
            number="5"
            icon={<Wrench size={28} />}
            title="Mejoras"
            desc="Aplicamos mejoras técnicas guiadas (Opcional)."
            isLast={true}
            index={4}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};