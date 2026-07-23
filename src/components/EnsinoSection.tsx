import React, { useState } from 'react';
import {
  GraduationCap,
  Globe,
  Cpu,
  Dumbbell,
  Sparkles,
  CheckCircle,
  Clock,
  Calendar,
} from 'lucide-react';

interface EnsinoSectionProps {
  onOpenHorariosModal?: () => void;
}

export const EnsinoSection: React.FC<EnsinoSectionProps> = ({
  onOpenHorariosModal,
}) => {
  const [activeTab, setActiveTab] = useState<string>('preparasjc');

  const programs = [
    {
      id: 'preparasjc',
      title: 'PREPARA Cursinho',
      subtitle: 'Preparatório municipal para vestibulinhos técnicos',
      icon: GraduationCap,
      color: 'amber',
      badge: 'Destaque Municipal',
      description:
        'Aulas preparatórias intensivas para vestibulinhos concorridos (Colégio EMBRAER, ETECs, UNIVAP e Instituto Federal). Mais de 80% dos alunos aprovados nos exames seletores participam do PREPARA Cursinho na própria escola.',
      highlights: [
        'Média de aprovação no Colégio EMBRAER de 3 alunos por ano',
        'Mais de 50 alunos aprovados em colégios técnicos (UNIVAP, ETEC e IFSP)',
        'Mais de 80% dos aprovados realizam o PREPARA Cursinho',
        'Material didático e simulados focados em bancas examinadoras',
      ],
      stats: '>80% de aprovados no PREPARA',
    },
    {
      id: 'idiomas',
      title: 'Prepara Idiomas (Língua Inglesa)',
      subtitle: 'Desenvolvimento prático e conversação em Língua Inglesa',
      icon: Globe,
      color: 'blue',
      badge: 'Língua Inglesa',
      description:
        'A EMEFI Profª Alda de Souza Araújo oferece ensino focado em Língua Inglesa no programa Prepara Idiomas, garantindo imersão concentrada e de qualidade na língua inglesa para comunicação global.',
      highlights: [
        'Aulas exclusivamente focadas na Língua Inglesa',
        'Atividades práticas de escuta, leitura e conversação',
        'Foco em comunicação e expansão de vocabulário acadêmico',
        'Projetos interativos e expressão oral para os estudantes',
      ],
      stats: 'Foco exclusivo em Língua Inglesa',
    },
    {
      id: 'tecnologia',
      title: 'Tecnologia e Inovação',
      subtitle: 'Campeã Nacional no SPRIX Campeonato 2025 – Brasil',
      icon: Cpu,
      color: 'purple',
      badge: 'Campeã SPRIX 2025',
      description:
        'A escola sagrou-se campeã no SPRIX Campeonato 2025 – Brasil. A competição nacional de programação e tecnologia reuniu estudantes do Ensino Fundamental para o desenvolvimento de jogos digitais e projetos tecnológicos na plataforma QUREO.',
      highlights: [
        'Título de Campeã Nacional no SPRIX Campeonato 2025 – Brasil',
        'Desenvolvimento de jogos e projetos digitais na plataforma QUREO',
        'Estímulo ao raciocínio lógico e programação em blocos',
        'Resolução de problemas do mundo real através de inovação tecnológica',
      ],
      stats: 'Campeã Nacional SPRIX 2025',
    },
    {
      id: 'esportes',
      title: 'Cultura, Esportes e Lazer',
      subtitle: 'Conquistas municipais em diversas modalidades esportivas',
      icon: Dumbbell,
      color: 'emerald',
      badge: 'Bicampeã de Futsal',
      description:
        'Formação esportiva completa com títulos expressivos na rede municipal: Bicampeã de futsal feminino, Vice-campeã de Handebol masculino, Campeã de queimada mista e inúmeras medalhas no atletismo.',
      highlights: [
        'Bicampeã de futsal feminino na rede municipal de ensino',
        'Vice-campeã de Handebol masculino',
        'Campeã de queimada mista',
        'Inúmeras medalhas conquistadas no atletismo',
      ],
      stats: 'Multicampeã municipal',
    },
  ];

  const currentProgram = programs.find((p) => p.id === activeTab) || programs[0];

  return (
    <section id="ensino" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Educação Integral em Tempo Integral</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Programa de Ensino e Atividades
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Nossa rotina escolar integra a matriz curricular com o PREPARA Cursinho, Língua Inglesa no Prepara Idiomas, tecnologia e inovação, e esportes de alta performance.
          </p>
        </div>

        {/* Abas dos Programas */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {programs.map((prog) => {
            const Icon = prog.icon;
            const isSelected = activeTab === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm ${
                  isSelected
                    ? 'bg-blue-900 text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isSelected ? 'text-amber-400' : 'text-slate-400'
                  }`}
                />
                <span>{prog.title}</span>
              </button>
            );
          })}
        </div>

        {/* Card do Programa Selecionado */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="bg-amber-400 text-blue-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {currentProgram.badge}
                </span>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {currentProgram.stats}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-blue-950">
                  {currentProgram.title}
                </h3>
                <p className="text-sm font-semibold text-amber-600 mt-1">
                  {currentProgram.subtitle}
                </p>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {currentProgram.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Principais Destaques:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProgram.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800 leading-snug">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ilustração Visual do Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-blue-950 text-white p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-inner">
              <div className="space-y-3">
                <div className="w-14 h-14 bg-amber-400 rounded-2xl flex items-center justify-center text-blue-950 shadow-lg">
                  {React.createElement(currentProgram.icon, { className: 'w-8 h-8' })}
                </div>
                <h4 className="text-xl font-black text-white">
                  Educação Integral de Excelência
                </h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Ambiente seguro e acolhedor das 07:00 às 19:45, oferecendo ensino de qualidade, alimentação balanceada e oficinas que transformam a vida dos estudantes.
                </p>
              </div>

              <div className="p-4 bg-blue-800/60 rounded-xl border border-blue-700/50 space-y-2">
                <p className="text-xs font-bold text-amber-300">
                  Secretaria Escolar:
                </p>
                <p className="text-[11px] text-slate-200">
                  Atendimento oficial das 08:00 às 11:00 e das 13:00 às 15:00.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Banner do Botão de Acesso aos Horários e Dias das Disciplinas */}
        <div className="mt-8 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-blue-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-amber-400 text-blue-950 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <Clock className="w-7 h-7 text-blue-950" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1">
                <Calendar className="w-3 h-3 text-amber-400" />
                <span>Horário Oficial 2026</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                Horários e Dias das Disciplinas
              </h4>
              <p className="text-xs sm:text-sm text-blue-200 mt-1 max-w-2xl">
                Consulte a grade semanal completa de aulas dos Anos Finais (6º, 7º, 8º e 9º Anos) com divisão por turnos (Manhã e Tarde), turmas, horários e matérias.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenHorariosModal}
            className="w-full md:w-auto px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-blue-950 font-black text-sm rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-400/20 hover:scale-105 shrink-0 flex items-center justify-center gap-2.5"
          >
            <Clock className="w-5 h-5 text-blue-950" />
            <span>Acessar Grade de Horários</span>
          </button>
        </div>
      </div>
    </section>
  );
};
