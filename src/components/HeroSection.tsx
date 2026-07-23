import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  MapPin,
  Clock,
  Lock,
  Building2,
  Maximize2,
  X,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
const fachadaImg = '/fachada-escola.jpg';

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
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);

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
                className="w-full sm:w-auto px-5 py-3 bg-amber-400 hover:bg-amber-300 text-blue-950 font-black text-sm rounded-xl shadow-lg hover:shadow-amber-400/20 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Matrícula e Documentos</span>
                <ArrowRight className="w-4 h-4 text-blue-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenHorariosModal}
                className="w-full sm:w-auto px-5 py-3 bg-blue-900/90 hover:bg-blue-800 text-amber-300 border border-amber-400/40 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Horários das Disciplinas</span>
              </button>

              <button
                onClick={() => onNavigate('conquistas')}
                className="w-full sm:w-auto px-5 py-3 bg-blue-900/80 hover:bg-blue-800 text-white border border-blue-700 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Nossas Conquistas</span>
              </button>

              <button
                onClick={onOpenRestrictedModal}
                className="w-full sm:w-auto px-4 py-3 bg-blue-800/60 hover:bg-blue-700 text-slate-200 border border-blue-600/50 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Área Restrita</span>
              </button>
            </div>
          </div>

          {/* Coluna Direita: Destaque Principal da Foto da Fachada */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-lg">
              {/* Efeito de brilho dourado e azul de fundo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-blue-400 to-amber-300 rounded-3xl blur-md opacity-40 group-hover:opacity-80 transition duration-500"></div>

              <div className="relative bg-blue-900 border-2 border-amber-400/60 rounded-3xl overflow-hidden shadow-2xl">
                {/* Imagem da Fachada com proporção ampla para ver toda a placa e entrada */}
                <div 
                  onClick={() => setIsPhotoZoomed(true)}
                  className="relative cursor-pointer overflow-hidden group/img bg-slate-900"
                >
                  <img
                    src={SCHOOL_INFO.fachadaImageUrl}
                    alt="Foto da Fachada - EMEFI Prof.ª Alda de Souza Araújo"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = 'https://drive.google.com/uc?export=view&id=1pHk5PepvGq5WPqTTT1kfhL3go21hNA4A';
                      } else {
                        target.src = fachadaImg;
                      }
                    }}
                    className="w-full h-auto max-h-[380px] object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-black/20 group-hover/img:bg-black/10 transition-colors" />

                  {/* Badge de identificação no topo da foto */}
                  <div className="absolute top-3 left-3 bg-blue-950/90 text-amber-300 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md border border-amber-400/50 flex items-center gap-1.5 shadow-lg">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span>Fachada da Nossa Escola</span>
                  </div>

                  {/* Botão de Ampliar foto */}
                  <div className="absolute bottom-3 right-3 bg-blue-950/90 hover:bg-amber-400 hover:text-blue-950 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-md border border-amber-400/40 flex items-center gap-1.5 transition-colors shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Ampliar Foto</span>
                  </div>
                </div>

                {/* Legenda e Dados no Rodapé do Card */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-blue-950 to-blue-900 space-y-3">
                  <div className="flex items-center gap-3">
                    <SchoolLogo size="sm" showText={false} lightText={true} />
                    <div>
                      <h3 className="text-sm font-black text-white leading-tight">
                        EMEFI Prof.ª Alda de Souza Araújo
                      </h3>
                      <p className="text-xs text-amber-300 font-semibold">
                        Sede Própria • Ensino Fundamental Integral
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 border-t border-blue-800/80 pt-3 text-xs text-slate-200">
                    <div className="flex items-center gap-2 text-slate-200">
                      <MapPin className="w-4 h-4 shrink-0 text-amber-400" />
                      <span>Rua Barcelona, 90 - Jardim Mesquita, SJC/SP</span>
                    </div>

                    <div className="flex items-center justify-between bg-blue-900/80 p-2 rounded-xl border border-blue-700/60 text-xs mt-1">
                      <div className="flex items-center gap-1.5 font-bold text-amber-300">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>Funcionamento:</span>
                      </div>
                      <span className="font-bold text-white">07:00 às 19:45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Zoom / Lightbox para ver a foto em tamanho completo */}
      {isPhotoZoomed && (
        <div 
          onClick={() => setIsPhotoZoomed(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className="relative max-w-5xl w-full bg-blue-950 border border-amber-400/50 rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4">
            <button
              onClick={() => setIsPhotoZoomed(false)}
              className="absolute top-4 right-4 z-10 bg-amber-400 text-blue-950 hover:bg-amber-300 p-2 rounded-full shadow-lg transition-colors font-bold"
              title="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center pb-3 pt-1">
              <h3 className="text-lg font-black text-amber-300 flex items-center justify-center gap-2">
                <Building2 className="w-5 h-5 text-amber-400" />
                <span>Fachada da EMEFI Prof.ª Alda de Souza Araújo</span>
              </h3>
              <p className="text-xs text-slate-300">Rua Barcelona, 90 - Jardim Mesquita, São José dos Campos - SP</p>
            </div>

            <div className="overflow-hidden rounded-xl border border-blue-800 bg-black flex items-center justify-center">
              <img
                src={SCHOOL_INFO.fachadaImageUrl}
                alt="Foto Ampliada da Fachada da Escola"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = 'https://drive.google.com/uc?export=view&id=1pHk5PepvGq5WPqTTT1kfhL3go21hNA4A';
                  } else {
                    target.src = fachadaImg;
                  }
                }}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
