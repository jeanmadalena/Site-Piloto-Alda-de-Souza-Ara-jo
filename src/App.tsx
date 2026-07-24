import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ConquistasSection } from './components/ConquistasSection';
import { SobreSection } from './components/SobreSection';
import { EnsinoSection } from './components/EnsinoSection';
import { MatriculaSection } from './components/MatriculaSection';
import { EventosSection } from './components/EventosSection';
import { NoticiasSection } from './components/NoticiasSection';
import { ResultadosSection } from './components/ResultadosSection';
import { ComunidadeSection } from './components/ComunidadeSection';
import { PixDonationModal } from './components/PixDonationModal';
import { RestrictedAreaModal } from './components/RestrictedAreaModal';
import { HorariosModal } from './components/HorariosModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [pixModalOpen, setPixModalOpen] = useState<boolean>(false);
  const [restrictedModalOpen, setRestrictedModalOpen] = useState<boolean>(false);
  const [horariosModalOpen, setHorariosModalOpen] = useState<boolean>(false);

  // Rolagem suave e atualização de seção ativa ao clicar nos links de navegação
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const offset = 80; // Compensação da altura da Navbar fixa
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Monitorar rolagem para atualizar automaticamente o item ativo do menu
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'noticias',
        'eventos',
        'conquistas',
        'sobre',
        'ensino',
        'matricula',
        'resultados',
        'comunidade',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section === 'conquistas' ? 'home' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-amber-400 selection:text-blue-950 flex flex-col justify-between">
      {/* Navbar Fixa no Topo */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenPixModal={() => setPixModalOpen(true)}
        onOpenRestrictedModal={() => setRestrictedModalOpen(true)}
        onOpenHorariosModal={() => setHorariosModalOpen(true)}
      />

      {/* Conteúdo Principal do Site */}
      <main className="flex-1">
        {/* Seção Hero / Boas-Vindas */}
        <div id="home">
          <HeroSection
            onNavigate={handleNavigate}
            onOpenRestrictedModal={() => setRestrictedModalOpen(true)}
            onOpenHorariosModal={() => setHorariosModalOpen(true)}
          />
        </div>

        {/* Seção Mural de Notícias e Publicações (Painel Administrativo) */}
        <NoticiasSection onOpenRestrictedModal={() => setRestrictedModalOpen(true)} />

        {/* Seção Galeria de Eventos, Calendário Escolar, Estrutura Bimestral e Cronogramas */}
        <EventosSection />

        {/* Seção Destaque "Nossas Conquistas" */}
        <ConquistasSection />

        {/* Seção Sobre / História da Patrona e Proposta Pedagógica */}
        <SobreSection />

        {/* Seção Ensino Integral / PreparaSJC / Idiomas / Tecnologia */}
        <EnsinoSection onOpenHorariosModal={() => setHorariosModalOpen(true)} />

        {/* Seção Matrícula e Documentação Interativa */}
        <MatriculaSection />

        {/* Seção Resultados Oficiais e Transparência Legais */}
        <ResultadosSection />

        {/* Seção Interação / Depoimentos de Ex-Alunos e Processos Seletivos */}
        <ComunidadeSection />
      </main>

      {/* Rodapé Oficial da Escola */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPixModal={() => setPixModalOpen(true)}
        onOpenRestrictedModal={() => setRestrictedModalOpen(true)}
        onOpenHorariosModal={() => setHorariosModalOpen(true)}
      />

      {/* Modal PIX da AAE (CNPJ 47206039/0001-23) */}
      <PixDonationModal
        isOpen={pixModalOpen}
        onClose={() => setPixModalOpen(false)}
      />

      {/* Modal da Área Restrita (Login e Senha) */}
      <RestrictedAreaModal
        isOpen={restrictedModalOpen}
        onClose={() => setRestrictedModalOpen(false)}
      />

      {/* Modal Interativo de Horários e Disciplinas 2026 */}
      <HorariosModal
        isOpen={horariosModalOpen}
        onClose={() => setHorariosModalOpen(false)}
      />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
