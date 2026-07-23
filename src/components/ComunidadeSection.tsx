import React from 'react';
import {
  Users,
  Quote,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Send,
  Building,
} from 'lucide-react';
import { OPPORTUNITIES, TESTIMONIALS, SCHOOL_INFO } from '../data/schoolData';

export const ComunidadeSection: React.FC = () => {
  return (
    <section id="comunidade" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-4 h-4 text-amber-700" />
            <span>Nossa Comunidade e Futuro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Depoimentos de Ex-Alunos e Oportunidades
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Confira as histórias de sucesso de ex-alunos que passaram pela EMEFI Alda de Souza Araújo e acompanhe os processos seletivos abertos.
          </p>
        </div>

        {/* Depoimentos de Ex-Alunos */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-blue-950 mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-amber-500" />
            <span>Histórias de Quem Voou Longe</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((dep) => (
              <div
                key={dep.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-amber-400 opacity-60" />
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{dep.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={dep.avatarUrl}
                    alt={dep.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-amber-400"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-blue-950 text-sm">{dep.name}</h4>
                    <p className="text-[11px] font-semibold text-amber-600">
                      {dep.graduationYear}
                    </p>
                    <p className="text-[10px] text-slate-500">{dep.currentActivity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Oportunidades / Processos Seletivos */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl font-black text-blue-950">
                Processos Seletivos e Vestibulinhos
              </h3>
              <p className="text-xs text-slate-500">
                Oportunidades de bolsas, cursos técnicos e vestibulares abertos aos estudantes
              </p>
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
              Ano Letivo 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OPPORTUNITIES.map((opp) => (
              <div
                key={opp.id}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded">
                      {opp.institution}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {opp.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-blue-950 text-base">{opp.title}</h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {opp.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-1 text-[11px] text-slate-500">
                  <p>
                    Público: <span className="font-bold text-slate-700">{opp.targetAudience}</span>
                  </p>
                  <p>
                    Prazo: <span className="font-bold text-amber-700">{opp.deadline}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dica para ex-alunos enviarem depoimentos */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-blue-950 text-sm">
                É ex-aluno da EMEFI Profª Alda de Souza Araújo?
              </h4>
              <p className="text-xs text-slate-600">
                Compartilhe sua trajetória com a comunidade escolar e inspire novas gerações!
              </p>
            </div>

            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Olá! Sou ex-aluno da EMEFI Alda de Souza Araújo e gostaria de enviar meu depoimento para o site!'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Send className="w-3.5 h-3.5 text-amber-400" />
              <span>Enviar meu Depoimento</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
