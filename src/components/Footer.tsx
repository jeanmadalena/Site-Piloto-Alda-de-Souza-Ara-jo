import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Heart,
  Lock,
  Clock,
  ArrowUp,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPixModal: () => void;
  onOpenRestrictedModal: () => void;
  onOpenHorariosModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPixModal,
  onOpenRestrictedModal,
  onOpenHorariosModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-white border-t-4 border-amber-400 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Identidade */}
          <div className="space-y-4">
            <SchoolLogo size="md" showText={false} />
            <div>
              <h3 className="font-black text-lg text-white">
                {SCHOOL_INFO.shortName}
              </h3>
              <p className="text-xs text-amber-300 font-bold italic mt-0.5">
                "{SCHOOL_INFO.slogan}"
              </p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Educação Integral em Tempo Integral na Rede Municipal de Ensino de São José dos Campos - SP.
            </p>
            <div className="pt-1">
              <a
                href={SCHOOL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-amber-300 rounded-xl text-xs font-bold border border-blue-700 transition-colors"
              >
                <Instagram className="w-4 h-4 text-amber-400" />
                <span>Siga @emefialda</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-amber-300 uppercase tracking-wider">
              Navegação e Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Página Inicial (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="hover:text-amber-300 transition-colors"
                >
                  História da Patrona Profª Alda
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ensino')}
                  className="hover:text-amber-300 transition-colors"
                >
                  PREPARA Cursinho e Tecnologia
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenHorariosModal}
                  className="text-amber-300 hover:underline font-bold transition-colors flex items-center gap-1"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Horários e Dias das Disciplinas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('matricula')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Guia de Matrículas e Documentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('eventos')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Cronograma e Calendário 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('noticias')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Mural de Notícias
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Endereço */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-amber-300 uppercase tracking-wider">
              Contatos e Localização
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Telefone: {SCHOOL_INFO.formattedPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {SCHOOL_INFO.whatsapp}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{SCHOOL_INFO.email}</span>
              </p>
            </div>
          </div>

          {/* Coluna 4: Horários e Acesso Restrito */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-amber-300 uppercase tracking-wider">
              Horários e Gestão
            </h4>

            <div className="p-3 bg-blue-900/80 rounded-xl border border-blue-800 space-y-1 text-xs">
              <p className="font-bold text-amber-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Horários Oficiais</span>
              </p>
              <p className="text-slate-200">
                Alunos: <span className="font-bold text-white">07:00 às 19:45</span>
              </p>
              <p className="text-slate-200">
                Secretaria: <span className="font-bold text-white">08:00 às 11:00 e 13:00 às 15:00</span>
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={onOpenRestrictedModal}
                className="w-full py-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Área Restrita (Login e Senha)</span>
              </button>

              <button
                onClick={onOpenPixModal}
                className="w-full py-2 bg-blue-800 hover:bg-blue-700 text-amber-300 border border-blue-700 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Doe para a AAE (CNPJ PIX)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Rodapé Direitos do Autor e Ano */}
        <div className="pt-8 border-t border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 E.M.E.F.I. Profª Alda de Souza Araújo • Prefeitura Municipal de São José dos Campos.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-blue-900 hover:bg-blue-800 text-amber-400 rounded-full transition-colors flex items-center gap-1 text-[11px] font-bold"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
