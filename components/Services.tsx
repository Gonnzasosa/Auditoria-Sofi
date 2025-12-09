import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, features, ctaText, isPopular }) => {
  return (
    <div 
      className={`relative p-8 rounded-2xl flex flex-col h-full transition-all duration-300 hover:-translate-y-2 group
        ${isPopular 
          ? 'bg-shadow-card border-2 border-shadow-cyan shadow-[0_0_20px_rgba(0,229,255,0.15)] z-10 scale-100 md:scale-105' 
          : 'bg-shadow-card border border-slate-800 hover:border-shadow-cyan/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.1)]'
        }
      `}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-shadow-cyan text-shadow-bg px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
          Más Elegido
        </div>
      )}

      <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-shadow-cyan' : 'text-white'}`}>
        {title}
      </h3>
      <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
        {description}
      </p>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-1 min-w-[16px]">
              <Check size={16} className="text-shadow-cyan" />
            </div>
            <span className="text-slate-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <a 
        href="https://wa.me/5491163669391"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3 rounded-lg font-bold text-center transition-colors
          ${isPopular 
            ? 'bg-shadow-cyan text-shadow-bg hover:bg-shadow-cyanHover shadow-[0_0_15px_rgba(0,229,255,0.3)]' 
            : 'bg-slate-800 text-white hover:bg-slate-700 hover:text-shadow-cyan border border-transparent hover:border-shadow-cyan/30'
          }
        `}
      >
        {ctaText}
      </a>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Planes de Servicio</h2>
          <p className="text-slate-400">Soluciones escalables para cada nivel de exposición.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch">
          <PricingCard 
            title="Básico"
            description="Ideal para perfiles personales."
            features={[
              "Revisión de exposición digital",
              "Análisis de riesgos comunes",
              "Informe claro + recomendaciones",
              "Entrega en 48hs"
            ]}
            ctaText="Solicitar Básica"
          />

          <PricingCard 
            title="Standard"
            description="Para freelancers y PyMEs."
            features={[
              "Auditoría completa de activos",
              "Revisión de configuraciones",
              "Hardening (Endurecimiento) inicial",
              "Checklist personalizado de seguridad",
              "Soporte prioritario post-entrega"
            ]}
            ctaText="Solicitar Standard"
            isPopular={true}
          />

          <PricingCard 
            title="Premium"
            description="Auditoría profunda + Plan 30 días."
            features={[
              "Auditoría Técnica completa",
              "Hardening avanzado de sistemas",
              "Lista detallada de vulnerabilidades",
              "Plan de seguridad a 30 días",
              "Sesión de consultoría técnica"
            ]}
            ctaText="Solicitar Premium"
          />
        </div>
      </div>
    </section>
  );
};