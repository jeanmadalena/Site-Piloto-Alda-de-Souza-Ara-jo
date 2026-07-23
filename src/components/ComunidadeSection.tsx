import React from 'react';
import {
  Users,
  Quote,
  GraduationCap,
  Send,
} from 'lucide-react';
import { TESTIMONIALS, SCHOOL_INFO } from '../data/schoolData';

export const ComunidadeSection: React.FC = () => {
  return (
    <section id="comunidade" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-4 h-4 text-amber-700" />
            <span>Ex-Alunos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Depoimentos de quem passou por aqui
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Confira as histórias e memórias marcantes de ex-alunos que passaram pela EMEFI Prof.ª Alda de Souza Araújo.
          </p>
        </div>

        {/* Depoimentos de Ex-Alunos */}
        <div className="mb-12">
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

        {/* Chamada para ex-alunos enviarem depoimentos */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-900 text-white p-6 sm:p-8 rounded-3xl shadow-md border border-blue-800">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-amber-300 text-base sm:text-lg">
              É ex-aluno da EMEFI Prof.ª Alda de Souza Araújo?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200">
              Compartilhe sua trajetória e seu depoimento com a nossa comunidade escolar!
            </p>
          </div>

          <a
            href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent(
              'Olá! Sou ex-aluno da EMEFI Alda de Souza Araújo e gostaria de enviar meu depoimento para o site!'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs sm:text-sm rounded-xl shadow transition-colors flex items-center gap-2 shrink-0"
          >
            <Send className="w-4 h-4 text-blue-950" />
            <span>Enviar meu Depoimento</span>
          </a>
        </div>
      </div>
    </section>
  );
};
