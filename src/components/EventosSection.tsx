import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  ChevronRight,
  X,
  Instagram,
  Filter,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  FileText,
  BookOpen,
} from 'lucide-react';
import { CRONOGRAMA_EVENTOS, SCHOOL_INFO } from '../data/schoolData';
import { EventItem } from '../types';

export const EventosSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const categories = ['Todos', 'Reunião', 'Cultural'];

  const filteredEvents =
    selectedCategory === 'Todos'
      ? CRONOGRAMA_EVENTOS
      : CRONOGRAMA_EVENTOS.filter((evt) => evt.category === selectedCategory);

  const bimestres = [
    {
      periodo: '1º Bimestre',
      datas: '05/02/2026 a 17/04/2026',
      dias: '51 dias letivos',
      destaque: 'Início do Ano Letivo (05/02), Diagnósticas e Reunião de Pais',
      status: 'Concluído',
      cor: 'bg-blue-100 border-blue-200 text-blue-900',
    },
    {
      periodo: '2º Bimestre',
      datas: '20/04/2026 a 08/07/2026',
      dias: '52 dias letivos',
      destaque: 'Avaliações de Meio de Ano e Projetos de Tecnologia',
      status: 'Concluído',
      cor: 'bg-emerald-100 border-emerald-200 text-emerald-900',
    },
    {
      periodo: 'Recesso Escolar',
      datas: '09/07/2026 a 27/07/2026',
      dias: 'Férias Escolares',
      destaque: 'Recesso Escolar de Meio de Ano para Alunos',
      status: 'Férias',
      cor: 'bg-amber-100 border-amber-200 text-amber-900',
    },
    {
      periodo: '3º Bimestre',
      datas: '28/07/2026 a 09/10/2026',
      dias: '50 dias letivos',
      destaque: 'Sábados Letivos, Prova EMBRAER (Ago), Conselho, AAE e Mostra Cultural',
      status: 'Em Andamento',
      cor: 'bg-purple-100 border-purple-200 text-purple-900',
    },
    {
      periodo: '4º Bimestre',
      datas: '14/10/2026 a 19/12/2026',
      dias: '47 dias letivos',
      destaque: 'Vestibulinhos IFSP/UNIVAP, Recuperação Final e Encerramento (19/12)',
      status: 'Em Breve',
      cor: 'bg-rose-100 border-rose-200 text-rose-900',
    },
  ];

  // Meses para a Arte do Calendário Anual 2026
  const calendarioArteMeses = [
    {
      mes: 'Fevereiro',
      numero: '02',
      destaques: [
        { dia: '05/02', desc: 'Início do Ano Letivo e Volta às Aulas', tipo: 'inicio' },
        { dia: '09 a 13/02', desc: 'Avaliações Diagnósticas de Entrada', tipo: 'pedagogico' },
      ],
    },
    {
      mes: 'Março',
      numero: '03',
      destaques: [
        { dia: '10/03', desc: 'Reunião Inicial de Pais e Responsáveis', tipo: 'reuniao' },
        { dia: '25/03', desc: 'Início das Aulas do PREPARA Cursinho', tipo: 'preparatorio' },
      ],
    },
    {
      mes: 'Abril',
      numero: '04',
      destaques: [
        { dia: '17/04', desc: 'Término do 1º Bimestre', tipo: 'fim' },
        { dia: '20/04', desc: 'Início do 2º Bimestre', tipo: 'inicio' },
        { dia: '21/04', desc: 'Feriado: Tiradentes', tipo: 'feriado' },
      ],
    },
    {
      mes: 'Maio',
      numero: '05',
      destaques: [
        { dia: '01/05', desc: 'Feriado: Dia do Trabalho', tipo: 'feriado' },
        { dia: '15/05', desc: 'Simulado de Treino para a OBMEP', tipo: 'prova' },
      ],
    },
    {
      mes: 'Junho',
      numero: '06',
      destaques: [
        { dia: '04/06', desc: 'Corpus Christi (Ponto Facultativo)', tipo: 'feriado' },
        { dia: '22 a 26/06', desc: 'Semana de Projetos de Tecnologia e Feira', tipo: 'cultural' },
      ],
    },
    {
      mes: 'Julho',
      numero: '07',
      destaques: [
        { dia: '08/07', desc: 'Término do 2º Bimestre', tipo: 'fim' },
        { dia: '09 a 27/07', desc: 'Recesso Escolar de Meio de Ano (Alunos)', tipo: 'recesso' },
        { dia: '28/07', desc: 'Retorno às Aulas - Início do 3º Bimestre', tipo: 'inicio' },
      ],
    },
    {
      mes: 'Agosto',
      numero: '08',
      destaques: [
        { dia: '01/08', desc: 'SÁBADO LETIVO: Reunião de Pais e Entregas', tipo: 'reuniao' },
        { dia: 'Agosto/26', desc: 'PROVA DO PROCESSO SELETIVO COLÉGIO EMBRAER', tipo: 'destaque-prova' },
      ],
    },
    {
      mes: 'Setembro',
      numero: '09',
      destaques: [
        { dia: '02/09', desc: 'Conselho de Escola e Reunião da AAE', tipo: 'reuniao' },
        { dia: '07/09', desc: 'Feriado: Independência do Brasil', tipo: 'feriado' },
        { dia: '26/09', desc: 'MOSTRA CULTURAL E TECNOLÓGICA DA EMEFI', tipo: 'cultural' },
        { dia: 'Set-Out/26', desc: 'Abertura de Inscrições IFSP / UNIVAP / ETEC', tipo: 'preparatorio' },
      ],
    },
    {
      mes: 'Outubro',
      numero: '10',
      destaques: [
        { dia: '09/10', desc: 'Término do 3º Bimestre', tipo: 'fim' },
        { dia: '14/10', desc: 'Início do 4º Bimestre', tipo: 'inicio' },
        { dia: '12/10', desc: 'Feriado: N. Sra. Aparecida / Dia das Crianças', tipo: 'feriado' },
        { dia: '17/10', desc: 'SÁBADO LETIVO: Encontro de Pais e Comunidade', tipo: 'reuniao' },
      ],
    },
    {
      mes: 'Novembro',
      numero: '11',
      destaques: [
        { dia: '02/11', desc: 'Feriado: Finados', tipo: 'feriado' },
        { dia: '15/11', desc: 'Feriado: Proclamação da República', tipo: 'feriado' },
        { dia: '20/11', desc: 'Feriado: Dia da Consciência Negra', tipo: 'feriado' },
        { dia: '25 a 30/11', desc: 'Provas Finais e Fechamento Acadêmico', tipo: 'prova' },
      ],
    },
    {
      mes: 'Dezembro',
      numero: '12',
      destaques: [
        { dia: '01 a 11/12', desc: 'Período de Recuperação Final Intensiva', tipo: 'prova' },
        { dia: '15/12', desc: 'Conselho de Classe Final e Apuração', tipo: 'reuniao' },
        { dia: '19/12', desc: 'ENCERRAMENTO DO ANO LETIVO 2026', tipo: 'fim' },
      ],
    },
  ];

  return (
    <section id="eventos" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-4 h-4 text-amber-700" />
            <span>Calendário Oficial 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Calendário Anual e Cronograma de Eventos
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Acompanhe o calendário escolar anual, bimestres, sábados letivos, reuniões do Conselho de Escola e AAE e os principais eventos do ano letivo.
          </p>

          {/* Botão de Acesso ao Documento Oficial no Drive */}
          <div className="mt-6 flex justify-center">
            <a
              href={SCHOOL_INFO.calendarioPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-2xl shadow-md transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-5 h-5 text-amber-400" />
              <span>Abrir Calendário Anual 2026 Completo no Google Drive</span>
              <ExternalLink className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>

        {/* Resumo dos Bimestres do Ano */}
        <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold text-blue-950">
                Estrutura Bimestral do Ano Letivo 2026
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
              200 Dias Letivos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {bimestres.map((b, i) => (
              <div
                key={i}
                className={`p-4 rounded-2xl border ${b.cor} space-y-2 flex flex-col justify-between shadow-xs`}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-extrabold text-sm">{b.periodo}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 uppercase">
                      {b.status}
                    </span>
                  </div>
                  <p className="text-xs font-bold mt-1 text-slate-800">{b.datas}</p>
                  <p className="text-[11px] font-semibold text-slate-600 mt-0.5">{b.dias}</p>
                </div>
                <p className="text-[11px] font-medium leading-snug mt-3 pt-2 border-t border-black/5">
                  {b.destaque}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Arte do Calendário Anual Escolar 2026 */}
        <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Arte do Calendário Anual 2026</span>
              </div>
              <h3 className="text-2xl font-black text-blue-950">
                Painel Visual do Calendário Escolar
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Visualização ilustrativa de todos os meses, datas de início/fim de bimestres, sábados letivos e vestibulares.
              </p>
            </div>

            {/* Legenda de Cores */}
            <div className="flex flex-wrap gap-2 text-[11px] font-bold">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Início/Término Letivo
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-200">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span> Provas e Vestibulinhos
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-100 text-blue-900 border border-blue-200">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span> Sábados / Reuniões
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-100 text-rose-900 border border-rose-200">
                <span className="w-2 h-2 rounded-full bg-rose-600"></span> Feriados / Recessos
              </span>
            </div>
          </div>

          {/* Grid de Meses no Estilo Cartaz/Arte */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {calendarioArteMeses.map((m, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-3 hover:border-amber-400 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-amber-800 bg-amber-200 px-2 py-0.5 rounded-md">
                      Mês {m.numero}
                    </span>
                    <h4 className="font-extrabold text-blue-950 text-base">{m.mes}</h4>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">2026</span>
                </div>

                <ul className="space-y-2">
                  {m.destaques.map((item, i) => {
                    let badgeColor = 'bg-slate-200 text-slate-800';
                    let dotColor = 'bg-slate-500';

                    if (item.tipo === 'inicio' || item.tipo === 'fim') {
                      badgeColor = 'bg-emerald-100 text-emerald-900 border border-emerald-300';
                      dotColor = 'bg-emerald-600';
                    } else if (item.tipo === 'destaque-prova' || item.tipo === 'prova' || item.tipo === 'preparatorio') {
                      badgeColor = 'bg-amber-100 text-amber-950 border border-amber-300 font-bold';
                      dotColor = 'bg-amber-600';
                    } else if (item.tipo === 'reuniao') {
                      badgeColor = 'bg-blue-100 text-blue-950 border border-blue-300';
                      dotColor = 'bg-blue-600';
                    } else if (item.tipo === 'feriado' || item.tipo === 'recesso') {
                      badgeColor = 'bg-rose-100 text-rose-950 border border-rose-200';
                      dotColor = 'bg-rose-600';
                    } else if (item.tipo === 'cultural') {
                      badgeColor = 'bg-purple-100 text-purple-950 border border-purple-200';
                      dotColor = 'bg-purple-600';
                    }

                    return (
                      <li key={i} className="text-xs space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`}></span>
                          <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${badgeColor}`}>
                            {item.dia}
                          </span>
                        </div>
                        <p className="text-[11px] font-medium text-slate-700 pl-3 leading-tight">
                          {item.desc}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cronograma Destaque do Ano (Cards Principais) */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 text-white rounded-3xl p-6 sm:p-10 mb-12 shadow-xl border border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-blue-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-300 bg-blue-800/80 px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Datas Importantes do Calendário 2026</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Cronograma de Eventos Escolares
              </h3>
            </div>
            <p className="text-xs text-blue-100 max-w-xs">
              Participe ativamente da vida escolar do seu filho nos encontros presenciais da EMEFI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CRONOGRAMA_EVENTOS.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalEvent(item)}
                className="bg-blue-800/50 hover:bg-blue-800/80 border border-blue-700/60 hover:border-amber-400/60 p-5 rounded-2xl transition-all duration-300 space-y-3 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-blue-950 bg-amber-400 px-3 py-1 rounded-full">
                    {item.date}
                  </span>
                  <span className="text-[10px] font-bold text-blue-200 bg-blue-900/80 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>

                <h4 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-blue-100 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center text-[11px] font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
                  <span>Ver detalhes</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filtro por Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-bold text-slate-500 uppercase mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtrar Categoria:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Cards de Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveModalEvent(evt)}
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-200">
                  <img
                    src={evt.imageUrl}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-blue-900/90 backdrop-blur-md text-amber-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-md">
                    {evt.category}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>{evt.date}</span>
                  </div>

                  <h3 className="font-bold text-blue-950 text-base group-hover:text-blue-700 transition-colors line-clamp-2">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button className="w-full py-2 bg-slate-100 group-hover:bg-amber-400 group-hover:text-blue-950 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1">
                  <span>Ver Detalhes do Evento</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada para Redes Sociais */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-amber-300 flex items-center justify-center sm:justify-start gap-2">
              <Instagram className="w-5 h-5 text-amber-400" />
              <span>Siga a EMEFI Profª Alda de Souza Araújo no Instagram</span>
            </h3>
            <p className="text-xs text-blue-100">
              Fotos diárias das atividades pedagógicas, comunicados da escola e registros dos eventos.
            </p>
          </div>

          <a
            href={SCHOOL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-blue-950 font-black text-xs rounded-xl transition-all shadow shrink-0"
          >
            Acessar @emefialda
          </a>
        </div>
      </div>

      {/* Modal de Detalhes do Evento */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl space-y-0 relative animate-scaleUp">
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 bg-slate-900">
              <img
                src={activeModalEvent.imageUrl}
                alt={activeModalEvent.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-wider bg-amber-400 text-blue-950 px-3 py-1 rounded-full">
                  {activeModalEvent.category}
                </span>
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>{activeModalEvent.date}</span>
                </span>
              </div>

              <h3 className="text-2xl font-black text-blue-950 leading-tight">
                {activeModalEvent.title}
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed">
                {activeModalEvent.description}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{activeModalEvent.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
