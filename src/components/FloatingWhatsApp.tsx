import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá! Gostaria de informações sobre a E.M.E.F.I. Profª Alda de Souza Araújo.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip Hover no Desktop */}
      <span className="hidden md:block mr-3 bg-blue-950 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Fale conosco no WhatsApp
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp EMEFI Alda de Souza Araújo"
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center border-2 border-white focus:outline-none"
      >
        {/* Animação de pulso */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500 relative z-10" />
      </a>
    </div>
  );
};
