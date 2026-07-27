import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles, Clock, Calendar, Megaphone, Quote } from 'lucide-react';

export interface CarouselSlide {
  id: string;
  driveId: string;
  imageUrl: string;
  fallbackUrl: string;
  caption: string;
  badge?: string;
  eventTitle?: string;
  date?: string;
  schedules?: { anos: string; horario: string }[];
  comunicacaoEspecial?: string;
  slogan?: string;
}

export const HERO_SLIDES: CarouselSlide[] = [
  {
    id: 'reuniao-de-pais-2026',
    driveId: '1sRG3jRqhJvZ1ukBL03OZVCgdVyhYZxhQ',
    imageUrl: 'https://lh3.googleusercontent.com/d/1sRG3jRqhJvZ1ukBL03OZVCgdVyhYZxhQ=s1600',
    fallbackUrl: 'https://drive.google.com/uc?export=view&id=1sRG3jRqhJvZ1ukBL03OZVCgdVyhYZxhQ',
    eventTitle: 'Reunião de Pais',
    badge: 'Sábado Letivo • Destaque',
    date: '01/08/2026',
    caption: 'Sábado Letivo - Reunião de Pais na EMEFI Profª Alda de Souza Araújo',
    schedules: [
      { anos: '8º e 9º Anos', horario: 'das 8:30 às 9:50' },
      { anos: '6º e 7º Anos', horario: 'das 10:10 às 11:30' },
    ],
    comunicacaoEspecial: 'Combos de coxinha e açaí a venda no local.',
    slogan: 'Aprender é voar fora da asa',
  },
  {
    id: 'sprix-champions-1',
    driveId: '1BmTMxvYjh0JBg5VZx3fenDmuf9SKYGNo',
    imageUrl: 'https://lh3.googleusercontent.com/d/1BmTMxvYjh0JBg5VZx3fenDmuf9SKYGNo=s1600',
    fallbackUrl: 'https://drive.google.com/uc?export=view&id=1BmTMxvYjh0JBg5VZx3fenDmuf9SKYGNo',
    eventTitle: 'Campeões Nacionais no SPRIX Brasil Championship',
    badge: '1º Lugar Nacional • SPRIX',
    caption: '1° Campeonato Nacional de programação para estudantes. Parabéns a GP Aline Sagioro, Professor Marcelo, e aos alunos Miguel, Wendel, Renan, Rafaela e Ana Marcela!!!!',
  },
  {
    id: 'sprix-champions-2',
    driveId: '1z1qesHXMDQQ42yaKGPKg3rj3EGK0U7J2',
    imageUrl: 'https://lh3.googleusercontent.com/d/1z1qesHXMDQQ42yaKGPKg3rj3EGK0U7J2=s1600',
    fallbackUrl: 'https://drive.google.com/uc?export=view&id=1z1qesHXMDQQ42yaKGPKg3rj3EGK0U7J2',
    eventTitle: 'Campeões Nacionais no SPRIX Brasil Championship',
    badge: '1º Lugar Nacional • SPRIX',
    caption: '1° Campeonato Nacional de programação para estudantes. Parabéns a GP Aline Sagioro, Professor Marcelo, e aos alunos Miguel, Wendel, Renan, Rafaela e Ana Marcela!!!!',
  },
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

        {/* Rodapé do Carrossel com Legenda e Detalhes do Slide Ativo */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-blue-950 to-blue-900 border-t border-blue-800/80 space-y-3">
          {currentSlide.eventTitle ? (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2 border-b border-blue-800/60 pb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {currentSlide.eventTitle}
                  </h3>
                </div>
                {currentSlide.date && (
                  <span className="text-xs font-bold text-blue-950 bg-amber-400 px-2.5 py-0.5 rounded-md shadow-xs">
                    {currentSlide.date}
                  </span>
                )}
              </div>

              {currentSlide.caption && (
                <p className="text-xs sm:text-sm font-medium text-slate-100 leading-relaxed">
                  {currentSlide.caption}
                </p>
              )}

              {/* Horários dos Anos */}
              {currentSlide.schedules && currentSlide.schedules.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentSlide.schedules.map((sch, i) => (
                    <div
                      key={i}
                      className="bg-blue-900/90 border border-amber-400/30 rounded-xl p-2 flex items-center justify-between shadow-inner"
                    >
                      <span className="font-black text-amber-300">{sch.anos}:</span>
                      <span className="text-slate-100 font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {sch.horario}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Comunicação Especial */}
              {currentSlide.comunicacaoEspecial && (
                <div className="flex items-start gap-2 bg-amber-400/10 border border-amber-400/40 rounded-xl p-2.5 text-xs text-amber-200">
                  <Megaphone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black uppercase text-[10px] bg-amber-400 text-blue-950 px-1.5 py-0.5 rounded mr-1.5">
                      Comunicação Especial
                    </span>
                    <span className="font-medium text-slate-100">"{currentSlide.comunicacaoEspecial}"</span>
                  </div>
                </div>
              )}

              {/* Slogan Oficial */}
              {currentSlide.slogan && (
                <div className="text-right pt-1">
                  <span className="inline-flex items-center gap-1 text-xs italic font-black text-amber-300/90">
                    <Quote className="w-3 h-3 text-amber-400 inline" />
                    <span>"{currentSlide.slogan}"</span>
                  </span>
                </div>
              )}
            </div>
          ) : (
            <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed min-h-[44px] flex items-center">
              {currentSlide.caption}
            </p>
          )}

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
            className="relative max-w-5xl w-full bg-blue-950 border border-amber-400/50 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setZoomedSlide(null)}
              className="absolute top-4 right-4 z-20 bg-amber-400 text-blue-950 hover:bg-amber-300 p-2 rounded-full shadow-lg transition-colors font-bold"
              title="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="pr-12 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase text-amber-400 bg-blue-900 px-2.5 py-1 rounded border border-amber-400/30">
                  {zoomedSlide.badge || 'Foto do Destaque'}
                </span>
                {zoomedSlide.date && (
                  <span className="text-xs font-bold text-blue-950 bg-amber-400 px-2.5 py-1 rounded">
                    Data: {zoomedSlide.date}
                  </span>
                )}
              </div>

              {zoomedSlide.eventTitle ? (
                <>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {zoomedSlide.eventTitle}
                  </h3>
                  {zoomedSlide.caption && (
                    <p className="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed">
                      {zoomedSlide.caption}
                    </p>
                  )}
                </>
              ) : (
                <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                  {zoomedSlide.caption}
                </p>
              )}

              {/* Detalhes de Horários no Modal */}
              {zoomedSlide.schedules && zoomedSlide.schedules.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {zoomedSlide.schedules.map((sch, i) => (
                    <div key={i} className="bg-blue-900/80 border border-amber-400/40 p-2.5 rounded-xl text-xs flex justify-between items-center text-white">
                      <span className="font-extrabold text-amber-300">{sch.anos}:</span>
                      <span className="font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-700">{sch.horario}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Comunicação Especial no Modal */}
              {zoomedSlide.comunicacaoEspecial && (
                <div className="bg-amber-400/15 border border-amber-400/50 p-3 rounded-xl text-xs sm:text-sm text-amber-100 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-extrabold text-amber-300 block text-xs uppercase">Comunicação Especial:</span>
                    <span className="italic font-medium">"{zoomedSlide.comunicacaoEspecial}"</span>
                  </div>
                </div>
              )}

              {/* Slogan Oficial no Modal */}
              {zoomedSlide.slogan && (
                <p className="text-sm italic font-black text-amber-300 text-right">
                  Slogan Oficial: "{zoomedSlide.slogan}"
                </p>
              )}
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
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
