import React from 'react';
import {
  BookOpen,
  HeartHandshake,
  Target,
  Compass,
  CheckCircle2,
  Users,
  Building,
  GraduationCap,
} from 'lucide-react';
import { BIOGRAFIA_PATRONA, MISSAO_VISAO_VALORES } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

export const SobreSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4 text-blue-700" />
            <span>Nossa História e Identidade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Sobre a EMEFI Profª Alda de Souza Araújo
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Conheça a história inspiradora da patrona da escola e os princípios de Missão, Visão e Valores que guiam nossa comunidade escolar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Coluna Esquerda: A História da Patrona */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-blue-50/70 rounded-3xl p-6 sm:p-8 border border-blue-100 space-y-4 shadow-sm">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
                Biografia da Educadora Patrona
              </span>
              <h3 className="text-2xl font-black text-blue-950">
                Profª Alda de Souza Araújo (1955 - 2020)
              </h3>
              
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {BIOGRAFIA_PATRONA.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Proposta Pedagógica em Destaque */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-3">
              <h3 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-500" />
                <span>Proposta Pedagógica de Ensino Integral</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A proposta pedagógica da E.M.E.F.I. Profª Alda de Souza Araújo baseia-se em um currículo próprio do município alinhado à BNCC e ao Currículo Paulista, com foco na educação integral, equidade e inclusão. Nossa matriz curricular desenvolve as dimensões cognitiva, emocional, cultural e física dos estudantes. Oferecemos contraturno rico em tecnologia, arte, atividades culturais, Idiomas, esportes, e reforço focado em vestibulinhos públicos.
              </p>
            </div>
          </div>

          {/* Coluna Direita: Missão, Visão e Valores */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div>
                  <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center text-blue-950 font-bold mb-3">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-amber-300 uppercase tracking-wide">
                    Missão
                  </h4>
                  <p className="mt-2 text-slate-200 text-xs sm:text-sm leading-relaxed">
                    {MISSAO_VISAO_VALORES.missao}
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-800">
                  <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center text-blue-950 font-bold mb-3">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-amber-300 uppercase tracking-wide">
                    Visão
                  </h4>
                  <p className="mt-2 text-slate-200 text-xs sm:text-sm leading-relaxed">
                    {MISSAO_VISAO_VALORES.visao}
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-800">
                  <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center text-blue-950 font-bold mb-3">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-amber-300 uppercase tracking-wide">
                    Valores
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-200">
                    {MISSAO_VISAO_VALORES.valores.map((valor, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{valor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pilares Estruturais da Escola */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-800 rounded-2xl flex items-center justify-center font-bold">
              <Building className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-blue-950">Infraestrutura Completa</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Salas preparadas, Espaço Maker, Sala Google, quadra coberta, acervo literário amplo em nossa Sala de Leitura e refeição nutritiva diária para os alunos.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-blue-950">Corpo Docente Qualificado</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipe de professores comprometida com metodologias ativas e atendimento acolhedor no desenvolvimento de cada estudante.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-blue-950">Gestão Participativa</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Conselho de Escola ativo e Associação de Amigos da Escola (AAE) atuando lado a lado com as famílias do Jardim Mesquita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
