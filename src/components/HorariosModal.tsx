import React, { useState } from 'react';
import {
  X,
  Clock,
  Sun,
  Moon,
  Search,
  Filter,
  Printer,
  BookOpen,
  Calendar,
  Sparkles,
  Info,
} from 'lucide-react';
import {
  HORARIOS_MANHA_GRID,
  HORARIOS_TARDE_GRID,
  TURMAS_MANHA,
  TURMAS_TARDE,
  LISTA_MATERIAS,
} from '../data/horariosData';

interface HorariosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HorariosModal: React.FC<HorariosModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [periodo, setPeriodo] = useState<'manha' | 'tarde'>('manha');
  const [selectedTurma, setSelectedTurma] = useState<string>('TODAS');
  const [selectedDia, setSelectedDia] = useState<string>('Segunda');
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (!isOpen) return null;

  const currentTurmas = periodo === 'manha' ? TURMAS_MANHA : TURMAS_TARDE;
  const currentGridData = periodo === 'manha' ? HORARIOS_MANHA_GRID : HORARIOS_TARDE_GRID;

  // Cor do badge de cada matéria
  const getMateriaStyle = (text: string) => {
    if (!text) return 'bg-slate-100 text-slate-700 border-slate-200';
    const lower = text.toLowerCase();

    if (lower.includes('port')) return 'bg-rose-100 text-rose-950 border-rose-300 font-semibold';
    if (lower.includes('mat')) return 'bg-blue-100 text-blue-950 border-blue-300 font-semibold';
    if (lower.includes('histó')) return 'bg-amber-100 text-amber-950 border-amber-300 font-semibold';
    if (lower.includes('geog')) return 'bg-emerald-100 text-emerald-950 border-emerald-300 font-semibold';
    if (lower.includes('ciên')) return 'bg-teal-100 text-teal-950 border-teal-300 font-semibold';
    if (lower.includes('ingl')) return 'bg-indigo-100 text-indigo-950 border-indigo-300 font-semibold';
    if (lower.includes('art')) return 'bg-purple-100 text-purple-950 border-purple-300 font-semibold';
    if (lower.includes('físic')) return 'bg-orange-100 text-orange-950 border-orange-300 font-semibold';
    if (lower.includes('curric') || lower.includes('enr')) return 'bg-cyan-100 text-cyan-950 border-cyan-300 font-semibold';

    return 'bg-slate-100 text-slate-800 border-slate-200';
  };

  // Imprimir ou salvar
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/90 backdrop-blur-xs flex items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-6xl sm:rounded-3xl shadow-2xl border-0 sm:border border-slate-200 overflow-hidden flex flex-col">
        {/* Cabeçalho do Modal */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white p-4 sm:p-6 flex items-start justify-between gap-3 border-b border-blue-800 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Horário Escolar Oficial 2026</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white leading-tight">
              Dias e Horários das Disciplinas
            </h2>
            <p className="text-[11px] sm:text-sm text-blue-200 mt-0.5">
              EMEFI Prof.ª Alda de Souza Araújo • Anos Finais (6º ao 9º Ano)
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-2 rounded-xl border border-white/20 transition-all"
              title="Imprimir grade de horários"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none"
              title="Fechar janela"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Barra de Controles e Filtros */}
        <div className="bg-slate-50 p-3 sm:p-5 border-b border-slate-200 shrink-0 space-y-3">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            {/* Seletor do Período (Manhã vs Tarde) */}
            <div className="flex items-center bg-slate-200 p-1 rounded-2xl gap-1 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => {
                  setPeriodo('manha');
                  setSelectedTurma('TODAS');
                }}
                className={`flex-1 lg:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                  periodo === 'manha'
                    ? 'bg-amber-500 text-blue-950 shadow-md'
                    : 'text-slate-700 hover:text-blue-950'
                }`}
              >
                <Sun className="w-4 h-4 text-amber-950" />
                <span>Manhã (8º / 9º)</span>
              </button>
              <button
                onClick={() => {
                  setPeriodo('tarde');
                  setSelectedTurma('TODAS');
                }}
                className={`flex-1 lg:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                  periodo === 'tarde'
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'text-slate-700 hover:text-blue-950'
                }`}
              >
                <Moon className="w-4 h-4 text-amber-300" />
                <span>Tarde (6º / 7º)</span>
              </button>
            </div>

            {/* Campo de Pesquisa Geral */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar disciplina (ex: Matemática, Português...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {/* Seletor de Turma ou Dia */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-2 border-t border-slate-200">
            {/* Botões de Filtro de Turma (Com Rolagem Horizontal Suave em Telas Menores) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
              <span className="text-xs font-bold text-slate-500 shrink-0 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Turma:
              </span>
              <button
                onClick={() => setSelectedTurma('TODAS')}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold shrink-0 transition-all ${
                  selectedTurma === 'TODAS'
                    ? 'bg-blue-950 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                Todas
              </button>
              {currentTurmas.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTurma(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold shrink-0 transition-all ${
                    selectedTurma === t
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Seletor de Dia da Semana */}
            {selectedTurma === 'TODAS' && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                <span className="text-xs font-bold text-slate-500 shrink-0 mr-1">Dia:</span>
                {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDia(d)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold shrink-0 transition-all ${
                      selectedDia === d
                        ? 'bg-amber-500 text-blue-950 shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Conteúdo Principal do Modal (Scrollable) */}
        <div className="p-3 sm:p-6 overflow-y-auto flex-1 space-y-4 sm:space-y-6 bg-white">
          {/* Legenda das Disciplinas */}
          <div className="bg-slate-50 p-2.5 sm:p-4 rounded-2xl border border-slate-200 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-extrabold text-blue-950 mr-1 flex items-center gap-1 w-full sm:w-auto">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" /> Disciplinas:
            </span>
            {LISTA_MATERIAS.map((mat, i) => (
              <span
                key={i}
                className={`text-[11px] sm:text-xs px-2 py-0.5 rounded-md border font-semibold ${mat.cor}`}
              >
                {mat.completo}
              </span>
            ))}
          </div>

          {/* VISÃO 1: TURMA INDIVIDUAL SELECIONADA */}
          {selectedTurma !== 'TODAS' ? (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-blue-50 p-3.5 sm:p-4 rounded-2xl border border-blue-200">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-blue-950">
                    Grade Semanal da Turma {selectedTurma}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {periodo === 'manha'
                      ? 'Manhã: 7h00 às 11h25 (6 Aulas Diárias)'
                      : 'Tarde: 12h30 às 16h55 (6 Aulas Diárias)'}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedTurma('TODAS')}
                  className="text-xs font-bold text-blue-900 bg-white px-3 py-1.5 rounded-lg border border-blue-300 hover:bg-blue-100 transition-colors"
                >
                  ← Ver Todas as Turmas
                </button>
              </div>

              {/* Tabela de Horário Semanal da Turma Otimizada */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-blue-950 text-white text-xs font-extrabold uppercase">
                      <th className="p-2.5 sm:p-3 border-b border-blue-900 w-24 sticky left-0 bg-blue-950 z-10">Horário</th>
                      {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map((dia) => (
                        <th key={dia} className="p-2.5 sm:p-3 border-b border-blue-900 text-center min-w-[130px]">
                          {dia}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {currentGridData[0].aulas.map((aulaRef, index) => {
                      const hora = aulaRef.hora;
                      return (
                        <tr key={hora} className="hover:bg-slate-50 transition-colors">
                          <td className="p-2 sm:p-3 font-bold text-slate-900 bg-slate-100 sticky left-0 border-r border-slate-200 z-10 text-xs">
                            {hora}
                          </td>
                          {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map((dia) => {
                            const diaObj = currentGridData.find((d) => d.dia === dia);
                            const materiaText = diaObj?.aulas[index]?.turmas[selectedTurma] || '-';
                            const matchesSearch =
                              searchTerm &&
                              materiaText.toLowerCase().includes(searchTerm.toLowerCase());

                            return (
                              <td
                                key={dia}
                                className={`p-1.5 sm:p-2 text-center border-r border-slate-100 ${
                                  matchesSearch ? 'ring-2 ring-amber-500 bg-amber-50' : ''
                                }`}
                              >
                                <span
                                  className={`inline-block w-full py-1.5 px-2 rounded-lg border text-xs font-bold leading-snug ${getMateriaStyle(
                                    materiaText
                                  )}`}
                                >
                                  {materiaText}
                                </span>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* VISÃO 2: TODAS AS TURMAS PARA UM DIA ESPECÍFICO */
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-amber-50 p-3.5 sm:p-4 rounded-2xl border border-amber-200">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-blue-950 flex flex-wrap items-center gap-2">
                    <span>Grade de {selectedDia}</span>
                    <span className="text-[11px] bg-amber-200 text-amber-950 font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                      {periodo === 'manha' ? 'Período Manhã' : 'Período Tarde'}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Toque no nome de qualquer turma para isolar o horário semanal completo dela.
                  </p>
                </div>
              </div>

              {/* Tabela de Grade por Dia */}
              {(() => {
                const diaData = currentGridData.find((d) => d.dia === selectedDia);
                if (!diaData) return null;

                return (
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                      <thead>
                        <tr className="bg-blue-950 text-white text-xs font-extrabold uppercase">
                          <th className="p-2.5 sm:p-3 border-b border-blue-900 sticky left-0 bg-blue-950 z-10 w-20">
                            Horário
                          </th>
                          {currentTurmas.map((t) => (
                            <th
                              key={t}
                              className="p-2 sm:p-2.5 border-b border-blue-900 text-center min-w-[115px]"
                            >
                              <button
                                onClick={() => setSelectedTurma(t)}
                                className="hover:underline text-amber-300 font-extrabold text-xs bg-blue-900/80 px-2 py-0.5 rounded-md border border-amber-400/30"
                                title={`Clique para ver apenas a turma ${t}`}
                              >
                                {t}
                              </button>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {diaData.aulas.map((aula, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="p-2 sm:p-2.5 font-bold text-slate-900 bg-slate-100 sticky left-0 border-r border-slate-200 z-10 text-xs">
                              {aula.hora}
                            </td>
                            {currentTurmas.map((turma) => {
                              const materia = aula.turmas[turma] || '-';
                              const matchesSearch =
                                searchTerm &&
                                materia.toLowerCase().includes(searchTerm.toLowerCase());

                              return (
                                <td
                                  key={turma}
                                  className={`p-1.5 text-center border-r border-slate-100 ${
                                    matchesSearch ? 'bg-amber-100 ring-2 ring-amber-500' : ''
                                  }`}
                                >
                                  <span
                                    className={`inline-block w-full py-1.5 px-1.5 rounded-md border text-xs font-bold leading-tight ${getMateriaStyle(
                                      materia
                                    )}`}
                                  >
                                    {materia}
                                  </span>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Card de Horários de Intervalo e Observações */}
          <div className="bg-slate-50 p-3.5 sm:p-5 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0" />
              <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                Horários de Intervalo e Recreio
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs text-slate-700">
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-2xs">
                <p className="font-extrabold text-blue-950">8ºs ANOS (Manhã)</p>
                <p className="text-amber-700 font-bold mt-0.5">9h30 às 9h45</p>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-2xs">
                <p className="font-extrabold text-blue-950">9ºs ANOS (Manhã)</p>
                <p className="text-amber-700 font-bold mt-0.5">10h20 às 10h35</p>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-2xs">
                <p className="font-extrabold text-blue-950">6ºs ANOS (Tarde)</p>
                <p className="text-amber-700 font-bold mt-0.5">15h00 às 15h15</p>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-2xs">
                <p className="font-extrabold text-blue-950">7ºs ANOS (Tarde)</p>
                <p className="text-amber-700 font-bold mt-0.5">15h50 às 16h05</p>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-2xs sm:col-span-2">
                <p className="font-extrabold text-blue-950">Observação Pedagógica</p>
                <p className="text-slate-600 mt-0.5">
                  Os números ao lado das matérias correspondem aos códigos de professores/salas.
                  <strong> LP* / P(SL)</strong> indica aula de Língua Portuguesa na Sala de Leitura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
