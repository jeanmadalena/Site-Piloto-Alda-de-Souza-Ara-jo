import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from 'lucide-react';

export interface CarouselSlide {
  id: string;
  driveId: string;
  imageUrl: string;
  fallbackUrl: string;
  caption: string;
  badge?: string;
}

export const HERO_SLIDES: CarouselSlide[] = [
  {
    id: 'escola-5-0',
    driveId: '1pqrJ9LTg3hBxcqg-F7CKBN4lIaOtsI-c',
    imageUrl: 'https://lh3.googleusercontent.com/d/1pqrJ9LTg3hBxcqg-F7CKBN4lIaOtsI-c=s1600',
    fallbackUrl: 'https://drive.google.com/uc?export=view&id=1pqrJ9LTg3hBxcqg-F7CKBN4lIaOtsI-c',
    caption: 'Primeira escola 5.0 de São José dos Campos',
    badge: 'Inovação e Tecnologia',
  },
  {
    id: 'aluna-ana-beatriz',
    driveId: '1V_i8FyiEiqmeLRmOSXYd6QLQ3M4ipcCn',
    imageUrl: 'https://lh3.googleusercontent.com/d/1V_i8FyiEiqmeLRmOSXYd6QLQ3M4ipcCn=s1600',
    fallbackUrl: 'https://drive.google.com/uc?export=view&id=1V_i8FyiEiqmeLRmOSXYd6QLQ3M4ipcCn',
    caption: 'Nossa aluna Ana Beatriz, que, com determinação e talento, foi selecionada entre os 160 melhores do país para participar de um projeto de iniciação científica. Na foto: Ana Beatriz e sua mãe, Dayse Jéssica',
    badge: 'Orgulho Acadêmico',
  },
  {
    id: 'sala-google',
    driveId: '1SGdwTQfIf5fb6jMR-G6QLT90nGVjUJYM',
    imageUrl: 'https://lh3.googleusercontent.com/d/1SGdwTQfIf5fb6jMR-G6QLT90nGVjUJYM=s1600',
    fallbackUrl: 'https://drive.google.com/uc?export=view&id=1SGdwTQfIf5fb6jMR-G6QLT90nGVjUJYM',
    caption: 'Sala Google',
    badge: 'Ambiente de Aprendizagem',
  },
  {
    id: 'sede-escola',
    driveId: '1B92pi2F1ys6qvZ8Fgiu905fBES806cLF',
    imageUrl: 'https://lh3.googleusercontent.com/d/1B92pi2F1ys6qvZ8Fgiu905fBES806cLF=s1600',
    fallbackUrl: 'https://drive.google.com/uc?export=view&id=1B92pi2F1ys6qvZ8Fgiu905fBES806cLF',
    caption: 'EMEFI Prof.ª Alda de Souza Araújo',
    badge: 'Nossa Escola',
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomedSlide, setZoomedSlide] = useState<CarouselSlide | null>(null);

  // Auto-play do carrossel a cada 6 segundos
  useEffect(() => {
    if (isPaused || zoomedSlide !== null) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, zoomedSlide]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <div
      className="relative group w-full max-w-xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Moldura com efeito de brilho suave */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-blue-500 to-amber-300 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500" />

      <div className="relative bg-blue-950 border-2 border-amber-400/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Container da Imagem */}
        <div 
          onClick={() => setZoomedSlide(currentSlide)}
          className="relative h-64 sm:h-80 md:h-96 w-full cursor-pointer bg-slate-900 overflow-hidden"
        >
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.caption}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = slide.fallbackUrl;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Sombra gradiente no rodapé da imagem para facilitar leitura da legenda */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/30 to-transparent" />

                {/* Badge no topo esquerdo */}
                {slide.badge && (
                  <div className="absolute top-3 left-3 z-20 bg-blue-950/90 text-amber-300 text-xs font-black px-3 py-1 rounded-full border border-amber-400/40 shadow-md backdrop-blur-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{slide.badge}</span>
                  </div>
                )}
              </div>
            );
          })}

          {/* Botão para ampliar foto */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomedSlide(currentSlide);
            }}
            className="absolute bottom-3 right-3 z-20 bg-blue-950/90 hover:bg-amber-400 hover:text-blue-950 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-xl border border-amber-400/40 flex items-center gap-1.5 transition-colors shadow-lg backdrop-blur-md"
            title="Ampliar Foto"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Ampliar</span>
          </button>

          {/* Setas de Navegação Manual */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-blue-950/80 hover:bg-amber-400 text-amber-300 hover:text-blue-950 p-2 rounded-full border border-amber-400/30 shadow-lg transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-blue-950/80 hover:bg-amber-400 text-amber-300 hover:text-blue-950 p-2 rounded-full border border-amber-400/30 shadow-lg transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Rodapé do Carrossel com Legenda do Slide Ativo */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-blue-950 to-blue-900 border-t border-blue-800/80 space-y-3">
          <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed min-h-[44px] flex items-center">
            {currentSlide.caption}
          </p>

          {/* Indicadores / Bolinhas de Navegação */}
          <div className="flex items-center justify-between pt-2 border-t border-blue-800/60 text-xs">
            <div className="flex items-center gap-1.5">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-7 bg-amber-400'
                      : 'w-2.5 bg-blue-700/80 hover:bg-blue-600'
                  }`}
                  aria-label={`Ir para o slide ${idx + 1}`}
                />
              ))}
            </div>

            <span className="text-[11px] font-mono text-amber-300/90 font-bold bg-blue-900 px-2 py-0.5 rounded border border-blue-700">
              {currentIndex + 1} / {HERO_SLIDES.length}
            </span>
          </div>
        </div>
      </div>

      {/* Modal Zoom / Lightbox da Imagem */}
      {zoomedSlide && (
        <div
          onClick={() => setZoomedSlide(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-blue-950 border border-amber-400/50 rounded-2xl overflow-hidden shadow-2xl p-3 sm:p-5 space-y-4"
          >
            <button
              onClick={() => setZoomedSlide(null)}
              className="absolute top-4 right-4 z-20 bg-amber-400 text-blue-950 hover:bg-amber-300 p-2 rounded-full shadow-lg transition-colors font-bold"
              title="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="pr-12">
              <span className="text-xs font-bold uppercase text-amber-400 bg-blue-900 px-2.5 py-1 rounded">
                {zoomedSlide.badge || 'Foto do Destaque'}
              </span>
              <p className="mt-2 text-sm sm:text-base font-bold text-white leading-relaxed">
                {zoomedSlide.caption}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-blue-800 bg-black flex items-center justify-center min-h-[300px]">
              <img
                src={zoomedSlide.imageUrl}
                alt={zoomedSlide.caption}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = zoomedSlide.fallbackUrl;
                  }
                }}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
