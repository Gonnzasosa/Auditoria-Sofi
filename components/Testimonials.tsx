import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Javier M.",
    role: "Freelance Developer",
    content: "La auditoría fue rápida y al grano. Me ayudó a asegurar mi servidor personal sin vueltas ni complicaciones técnicas innecesarias.",
    initials: "JM"
  },
  {
    name: "Clara R.",
    role: "Dueña de E-commerce",
    content: "Tenía miedo de perder datos de clientes. El plan de 30 días me dio la tranquilidad que necesitaba para enfocarme en vender.",
    initials: "CR"
  },
  {
    name: "Martín G.",
    role: "Consultor TI",
    content: "Profesionalismo puro. El informe técnico fue impecable, muy fácil de leer y con pasos claros para implementar las mejoras.",
    initials: "MG"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#050A10] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-shadow-cyan/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h2>
          <div className="h-1 w-20 bg-shadow-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-shadow-card border border-slate-800 p-8 rounded-xl relative hover:border-shadow-cyan/30 transition-all hover:-translate-y-1 hover:shadow-lg group">
              <Quote className="absolute top-6 right-6 text-slate-700/30 w-10 h-10 group-hover:text-shadow-cyan/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-shadow-cyan font-bold text-lg shadow-inner">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-sm">{t.role}</div>
                </div>
              </div>
              
              <p className="text-slate-300 italic leading-relaxed text-sm md:text-base">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};