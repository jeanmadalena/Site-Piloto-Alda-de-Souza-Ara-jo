import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Instagram,
  MapPin,
  Menu,
  X,
  ExternalLink,
  ShieldCheck,
  Calendar,
  FileText,
  Award,
  Users,
  BookOpen,
  Home,
  MessageCircle,
  Lock,
  Clock,
  Newspaper,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenPixModal: () => void;
  onOpenRestrictedModal: () => void;
  onOpenHorariosModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenPixModal,
  onOpenRestrictedModal,
  onOpenHorariosModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'noticias', label: 'Mural de Notícias', icon: Newspaper },
    { id: 'eventos', label: 'Calendário e Cronograma', icon: Calendar },
    { id: 'sobre', label: 'Sobre a Patrona', icon: BookOpen },
    { id: 'ensino', label: 'Ensino Integral', icon: Award },
    { id: 'matricula', label: 'Matrícula', icon: FileText },
    { id: 'resultados', label: 'Resultados e Gestão', icon: ShieldCheck },
    { id: 'comunidade', label: 'Depoimentos de quem passou por aqui', icon: Users },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md border-b border-blue-100">
      {/* Barra de Contato Topo */}
      <div className="bg-blue-900 text-white text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{SCHOOL_INFO.formattedPhone}</span>
            </a>
            <span className="hidden sm:inline text-blue-400">•</span>
            <a
              href={`mailto:${SCHOOL_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{SCHOOL_INFO.email}</span>
            </a>
            <span className="hidden md:inline text-blue-400">•</span>
            <a
              href={SCHOOL_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span className="truncate max-w-xs">{SCHOOL_INFO.city}</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            {/* BOTÃO HORÁRIOS */}
            <button
              onClick={onOpenHorariosModal}
              className="bg-blue-800/90 hover:bg-blue-800 text-amber-300 font-bold px-2.5 py-0.5 rounded-full text-[11px] transition-all flex items-center gap-1 border border-amber-400/30"
              title="Consultar Horários e Dias das Disciplinas 2026"
            >
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Horários Aulas</span>
            </button>

            {/* LINK INSTAGRAM */}
            <a
              href={SCHOOL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-amber-300 hover:text-white bg-blue-800/80 hover:bg-blue-800 px-2.5 py-0.5 rounded-full transition-all"
              title="Acesse nosso Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium text-[11px]">@emefialda</span>
            </a>

            {/* BOTÃO PIX / AAE */}
            <button
              onClick={onOpenPixModal}
              className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold px-2.5 py-0.5 rounded-full text-[11px] transition-all flex items-center gap-1 shadow-sm"
              title="Apoie a AAE via PIX"
            >
              <span>Contribua AAE via PIX</span>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo e Nome da Escola */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <SchoolLogo size="sm" showText={false} />
            <div>
              <h1 className="text-base sm:text-lg font-black text-blue-900 group-hover:text-blue-700 transition-colors leading-tight">
                Profª Alda de Souza Araújo
              </h1>
              <p className="text-[10px] text-slate-500 font-medium italic">
                "{SCHOOL_INFO.slogan}"
              </p>
            </div>
          </button>

          {/* Links Desktop */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 border-b-2 border-amber-500 shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-blue-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-500' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Botão de Destaque: Área Restrita (Login e Senha) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenRestrictedModal}
              className="group relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-blue-950 bg-amber-400 hover:bg-amber-300 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-500/30"
              title="Acessar Área Restrita com Login e Senha"
            >
              <Lock className="w-4 h-4 text-blue-900 group-hover:scale-110 transition-transform" />
              <span>Área Restrita</span>
            </button>
          </div>

          {/* Botão Hamburger Mobile */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenRestrictedModal}
              className="text-xs bg-amber-400 text-blue-950 font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Área Restrita</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium text-sm transition-all ${
                    isActive
                      ? 'bg-blue-900 text-white font-bold'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHorariosModal();
              }}
              className="w-full py-3 bg-blue-900 text-amber-300 font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-sm border border-blue-700"
            >
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Horários e Dias das Disciplinas 2026</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRestrictedModal();
              }}
              className="w-full py-3 bg-amber-400 text-blue-950 font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Lock className="w-4 h-4" />
              <span>Área Restrita (Login e Senha)</span>
            </button>

            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Olá! Gostaria de informações sobre a EMEFI Profª Alda de Souza Araújo.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp ({SCHOOL_INFO.whatsapp})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
