import React, { useState } from 'react';
import {
  FileText,
  CheckSquare,
  Square,
  Printer,
  Info,
  HelpCircle,
  PhoneCall,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { MATRICULA_DOCUMENTS, SCHOOL_INFO } from '../data/schoolData';

export const MatriculaSection: React.FC = () => {
  const [checkedDocIds, setCheckedDocIds] = useState<string[]>([]);
  const [filterCategory, setFilterCategory] = useState<'all' | 'required' | 'optional'>('all');

  const toggleDoc = (id: string) => {
    if (checkedDocIds.includes(id)) {
      setCheckedDocIds(checkedDocIds.filter((item) => item !== id));
    } else {
      setCheckedDocIds([...checkedDocIds, id]);
    }
  };

  const requiredCount = MATRICULA_DOCUMENTS.filter((d) => d.required).length;
  const checkedRequiredCount = MATRICULA_DOCUMENTS.filter(
    (d) => d.required && checkedDocIds.includes(d.id)
  ).length;

  const progressPercent = Math.round((checkedRequiredCount / requiredCount) * 100);

  const filteredDocs = MATRICULA_DOCUMENTS.filter((doc) => {
    if (filterCategory === 'required') return doc.required;
    if (filterCategory === 'optional') return !doc.required;
    return true;
  });

  const handlePrintChecklist = () => {
    window.print();
  };

  return (
    <section id="matricula" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-4 h-4 text-blue-700" />
            <span>Guia de Matrículas e Transferências</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Documentação Necessária para Matrícula
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Utilize nosso checklist interativo para organizar os documentos antes de comparecer à secretaria escolar.
          </p>
        </div>

        {/* Barra de Progresso do Checklist */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-bold text-blue-950 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Seu Progresso de Documentos</span>
              </h3>
              <p className="text-xs text-slate-500">
                {checkedRequiredCount} de {requiredCount} documentos obrigatórios separados ({progressPercent}%)
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrintChecklist}
                className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                title="Imprimir lista de documentos"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Imprimir Checklist</span>
              </button>
            </div>
          </div>

          {/* Barra Visual */}
          <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-amber-400 h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {progressPercent === 100 && (
            <div className="mt-4 p-3 bg-emerald-100 text-emerald-900 rounded-xl text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Parabéns! Você já tem todos os documentos obrigatórios separados para efetuar a matrícula na secretaria!
              </span>
            </div>
          )}
        </div>

        {/* Filtros e Lista de Documentos */}
        <div className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Filtrar:
              </span>
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterCategory === 'all'
                    ? 'bg-blue-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Todos ({MATRICULA_DOCUMENTS.length})
              </button>
              <button
                onClick={() => setFilterCategory('required')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterCategory === 'required'
                    ? 'bg-blue-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Obrigatórios ({requiredCount})
              </button>
            </div>

            <span className="text-xs text-slate-500 italic">
              Clique na caixa para marcar os documentos prontos
            </span>
          </div>

          {/* Grid de Cards de Documentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDocs.map((doc) => {
              const isChecked = checkedDocIds.includes(doc.id);
              return (
                <div
                  key={doc.id}
                  onClick={() => toggleDoc(doc.id)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    isChecked
                      ? 'bg-blue-50/80 border-blue-300 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    className="mt-1 focus:outline-none shrink-0"
                    aria-label={`Marcar documento ${doc.name}`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-6 h-6 text-blue-700" />
                    ) : (
                      <Square className="w-6 h-6 text-slate-300 hover:text-slate-400" />
                    )}
                  </button>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4
                        className={`text-base font-bold ${
                          isChecked ? 'text-blue-950 line-through' : 'text-blue-950'
                        }`}
                      >
                        {doc.name}
                      </h4>
                      {doc.required ? (
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-red-100 text-red-800">
                          Obrigatório
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          Opcional
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {doc.description}
                    </p>

                    {doc.notes && (
                      <p className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md mt-2 flex items-center gap-1">
                        <Info className="w-3.5 h-3.5 shrink-0" />
                        <span>{doc.notes}</span>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Passos e FAQ de Matrícula */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Passos da Matrícula */}
          <div className="bg-blue-900 text-white rounded-3xl p-8 space-y-6">
            <h3 className="text-2xl font-black text-amber-300">
              Passo a Passo para Matrícula
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-amber-400 text-blue-950 rounded-full font-black flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Separação de Documentos</h4>
                  <p className="text-blue-100 text-xs mt-0.5">
                    Utilize o checklist para separar originais e cópias simples.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-amber-400 text-blue-950 rounded-full font-black flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Atendimento na Secretaria</h4>
                  <p className="text-blue-100 text-xs mt-0.5">
                    Compareça à R. Barcelona, 90 nos horários da secretaria: das 08:00 às 11:00 e das 13:00 às 15:00.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-amber-400 text-blue-950 rounded-full font-black flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Assinatura dos Termos</h4>
                  <p className="text-blue-100 text-xs mt-0.5">
                    Assinatura da ficha de saúde, termo de responsabilidade e confirmação da turma.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dúvidas Frequentes / Dica de Atendimento */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
            <h3 className="text-2xl font-black text-blue-950 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-500" />
              <span>Horários e Atendimento</span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-blue-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Horários de Atendimento da Secretaria:</span>
                </h4>
                <p className="text-slate-800 text-xs font-bold">
                  Segunda a Sexta-feira: 08:00 às 11:00 e das 13:00 às 15:00.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-blue-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Horário de Funcionamento para Alunos:</span>
                </h4>
                <p className="text-slate-800 text-xs font-bold">
                  Segunda a Sexta-feira: 07:00 às 19:45.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent(
                    'Olá! Tenho dúvidas sobre os documentos de matrícula na EMEFI Alda de Souza Araújo.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Tirar Dúvidas via WhatsApp ({SCHOOL_INFO.whatsapp})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
