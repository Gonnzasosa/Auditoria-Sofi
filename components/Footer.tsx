import React from 'react';
import { MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="pt-20 pb-10 px-6 bg-[#03060a] border-t border-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Listo para asegurar tu entorno digital?
        </h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto">
          No esperes a tener un incidente para tomar medidas. La prevención es la inversión más inteligente.
        </p>

        <a 
          href="https://wa.me/5491163669391"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] mb-12"
        >
          <MessageCircle size={24} />
          WhatsApp: +54 911 6366 9391
        </a>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025 ShadowIA. Todos los derechos reservados.</p>
          <p>Desarrollado con estándares de seguridad.</p>
        </div>
      </div>
    </footer>
  );
};