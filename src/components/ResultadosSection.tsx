import React from 'react';
import {
  ShieldCheck,
  BarChart2,
  FileCheck2,
  Building2,
  Users,
  Sparkles,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ResultadosSection: React.FC = () => {
  return (
    <section id="resultados" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Transparência e Gestão Pública</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Resultados e Indicadores de Desempenho
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Acompanhe nossos indicadores oficiais de desempenho escolar, aprovações e gestão financeira transparente.
          </p>
        </div>

        {/* Indicadores Oficiais de Desempenho */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 mb-12 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-blue-900 text-amber-400 rounded-xl">
              <BarChart2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950">
                Métricas Oficiais da Escola
              </h3>
              <p className="text-xs text-slate-500">
                Acompanhamento auditado da qualidade de ensino da unidade
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ESCOLA 5.0 E INOVAÇÃO */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold uppercase text-slate-400">
                    Educação 5.0
                  </span>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                    Inovação SJC
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-4xl font-black text-blue-900">1ª da Rede</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Primeira escola 5.0 da rede municipal de São José dos Campos, equipada com Sala Google, tecnologias educacionais e foco no aprendizado integral.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-900">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Pioneirismo em Inovação Tecnológica</span>
              </div>
            </div>

            {/* APROVAÇÕES TÉCNICAS */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase text-slate-400">
                  Aprovações Técnicas e EMBRAER
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Destaque Municipal
                </span>
              </div>
              <p className="text-4xl font-black text-blue-900">+50 Aprovados</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Média de 3 alunos aprovados no Colégio EMBRAER por ano e mais de 50 estudantes em colégios técnicos (UNIVAP, ETEC e IFSP).
              </p>
            </div>

            {/* PREPARA CURSINHO */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase text-slate-400">
                  PREPARA Cursinho
                </span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  {">"}80% de Aprovados
                </span>
              </div>
              <p className="text-4xl font-black text-blue-900">{">"}80%</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mais de 80% dos alunos aprovados nos vestibulinhos participam do PREPARA Cursinho na escola.
              </p>
            </div>
          </div>
        </div>

        {/* Informações Legais e Órgãos Colegiados (AAE e Conselho) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AAE & CNPJ */}
          <div className="bg-blue-900 text-white rounded-3xl p-8 space-y-6 shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-400 text-blue-950 rounded-2xl font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-300">
                  Associação de Amigos da Escola (AAE)
                </h3>
                <p className="text-xs text-blue-100">
                  Entidade responsável pela gestão colaborativa e melhorias estruturais
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-blue-100">
              <div className="p-3 bg-blue-800/80 rounded-xl border border-blue-700/60 flex justify-between items-center">
                <span className="font-semibold text-slate-200">CNPJ da AAE:</span>
                <span className="font-mono font-bold text-amber-300">
                  {SCHOOL_INFO.cnpjPix}
                </span>
              </div>

              <p className="leading-relaxed">
                A AAE (Associação de Amigos da Escola) garante transparência na gestão de recursos, promovendo melhorias na infraestrutura, festividades comunitárias e suporte a projetos pedagógicos.
              </p>

              <div className="pt-2 flex items-center gap-2 text-amber-300 font-bold text-xs">
                <FileCheck2 className="w-4 h-4" />
                <span>Prestação de contas e transparência aprovada pela comunidade escolar</span>
              </div>
            </div>
          </div>

          {/* Conselho de Escola */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-2xl font-bold">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-950">
                  Conselho de Escola
                </h3>
                <p className="text-xs text-slate-500">
                  Instância máxima de decisão participativa
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <p className="leading-relaxed">
                Formado por representantes de professores, funcionários, pais, alunos e equipe gestora. Acompanha as diretrizes pedagógicas e o calendário escolar.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Acompanhamento do Projeto Político Pedagógico</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Aprovação de eventos e do plano pedagógico anual</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Integração entre Conselho de Escola e AAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
