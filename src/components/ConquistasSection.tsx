import React from 'react';
import {
  Trophy,
  Award,
  TrendingUp,
  GraduationCap,
  Cpu,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { ACHIEVEMENTS, INSTITUTIONAL_METRICS } from '../data/schoolData';

export const ConquistasSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-7 h-7 text-amber-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 text-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-emerald-600" />;
      case 'Cpu':
        return <Cpu className="w-7 h-7 text-purple-600" />;
      default:
        return <Trophy className="w-7 h-7 text-amber-500" />;
    }
  };

  return (
    <section id="conquistas" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho de Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>Orgulho EMEFI Alda de Souza Araújo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Nossas Conquistas e Reconhecimentos
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            O empenho conjunto de estudantes, professores e equipe pedagógica se reflete em conquistas históricas nas áreas acadêmica, tecnológica, esportiva e vestibulares técnicos.
          </p>
        </div>

        {/* Métricas Principais (Cards Numéricos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {INSTITUTIONAL_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-amber-400 group-hover:h-1.5 transition-all" />
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                {metric.label}
              </p>
              <p className="text-4xl font-black text-blue-900 tracking-tight mb-2">
                {metric.value}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {metric.description}
              </p>
              {metric.trend && (
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>{metric.trend}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Grade de Conquistas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 group-hover:bg-blue-100 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider bg-amber-400 text-blue-950 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Educação Pública de Qualidade</span>
                </span>
                <span className="text-amber-600 font-bold">São José dos Campos</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
