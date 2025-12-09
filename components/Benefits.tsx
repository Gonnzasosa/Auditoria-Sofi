import React from 'react';
import { Zap, MessageSquareOff, ShieldCheck, FileText } from 'lucide-react';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-shadow-card border border-slate-800 p-6 rounded-xl hover:border-shadow-cyan/50 transition-all group">
    <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4 text-shadow-cyan group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-shadow-cyan/30">
      {icon}
    </div>
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#070e17]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Por qué nos eligen?</h2>
          <div className="h-1 w-20 bg-shadow-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BenefitCard 
            icon={<Zap size={24} />}
            title="Entregas Rápidas"
            desc="Comunicación clara y directa. Sin tiempos muertos ni esperas innecesarias para obtener resultados."
          />
          <BenefitCard 
            icon={<MessageSquareOff size={24} />}
            title="Sin reuniones"
            desc="Respeto tu tiempo. Todo el proceso es asíncrono y eficiente. Sin complicaciones."
          />
          <BenefitCard 
            icon={<ShieldCheck size={24} />}
            title="Metodología técnica"
            desc="Análisis basado en buenas prácticas internacionales y estándares de industria actualizados."
          />
          <BenefitCard 
            icon={<FileText size={24} />}
            title="Informes claros"
            desc="Documentación profesional, procesable y fácil de entender, sin tecnicismos innecesarios."
          />
        </div>
      </div>
    </section>
  );
};