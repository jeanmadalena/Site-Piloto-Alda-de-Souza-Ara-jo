import React from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Award,
  Clock,
  Lock,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { HeroCarousel } from './HeroCarousel';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenRestrictedModal: () => void;
  onOpenHorariosModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenRestrictedModal,
  onOpenHorariosModal,
}) => {
  return (
    <section className="relative bg-blue-950 text-white overflow-hidden py-10 lg:py-16">
      {/* Gradientes e Elementos Decorativos de Fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 z-0" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna Esquerda: Texto e Botões */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-800/80 border border-blue-600/40 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-amber-300 backdrop-blur-sm shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Educação Municipal Integral de Excelência • 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              E.M.E.F.I. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                Profª Alda de Souza Araújo
              </span>
            </h1>

            <div className="py-2 border-y border-blue-800/60 max-w-2xl mx-auto lg:mx-0">
              <p className="text-amber-300 font-extrabold text-lg sm:text-xl md:text-2xl tracking-widest uppercase italic">
                "{SCHOOL_INFO.slogan}"
              </p>
            </div>

            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Formando cidadãos conscientes, inovadores e preparados para os desafios do futuro através da Educação Integral, e incentivo permanente à autonomia dos nossos estudantes.
            </p>

            {/* Badges de Destaque */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-blue-100">
              <div className="flex items-center gap-1.5 bg-blue-900/60 px-3 py-1.5 rounded-lg border border-blue-700/50">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>PREPARA Cursinho</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-900/60 px-3 py-1.5 rounded-lg border border-blue-700/50">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Língua Inglesa (Prepara Idiomas)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-900/60 px-3 py-1.5 rounded-lg border border-blue-700/50">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Campeã SPRIX 2025</span>
              </div>
            </div>

            {/* Grupo de Botões Principal */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <button
                onClick={() => onNavigate('matricula')}
                className="w-full sm:w-auto px-5 py-3 bg-amber-400 hover:bg-amber-300 text-blue-950 font-black text-sm rounded-xl shadow-lg hover:shadow-amber-400/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Matrícula e Documentos</span>
                <ArrowRight className="w-4 h-4 text-blue-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenHorariosModal}
                className="w-full sm:w-auto px-5 py-3 bg-blue-900/90 hover:bg-blue-800 text-amber-300 border border-amber-400/40 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Horários das Disciplinas</span>
              </button>

              <button
                onClick={() => onNavigate('conquistas')}
                className="w-full sm:w-auto px-5 py-3 bg-blue-900/80 hover:bg-blue-800 text-white border border-blue-700 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Nossas Conquistas</span>
              </button>

              <button
                onClick={onOpenRestrictedModal}
                className="w-full sm:w-auto px-4 py-3 bg-blue-800/60 hover:bg-blue-700 text-slate-200 border border-blue-600/50 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Área Restrita</span>
              </button>
            </div>
          </div>

          {/* Coluna Direita: Carrossel de Fotos Destaque */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

