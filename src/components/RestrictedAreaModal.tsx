import React, { useState } from 'react';
import { X, Lock, ShieldCheck, User, ExternalLink, KeyRound, AlertCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface RestrictedAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RestrictedAreaModal: React.FC<RestrictedAreaModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login.trim() || !password.trim()) {
      setError('Por favor, informe o login e a senha para acessar.');
      return;
    }

    if (password.trim() !== 'alda2026') {
      setError('Senha incorreta. Verifique a senha digitada e tente novamente.');
      return;
    }
    
    setError('');
    setIsAuthenticated(true);
  };

  const handleAccessDrive = () => {
    window.open(SCHOOL_INFO.driveUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleReset = () => {
    setLogin('');
    setPassword('');
    setError('');
    setIsAuthenticated(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-6 animate-scaleUp">
        {/* Botão Fechar */}
        <button
          onClick={() => {
            handleReset();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cabeçalho */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-blue-700" />
            <span>Acesso Restrito - Servidores e Gestão</span>
          </div>

          <div className="pt-2">
            <SchoolLogo size="sm" showText={false} />
          </div>

          <h3 className="text-2xl font-black text-blue-950">
            Área Restrita EMEFI
          </h3>
          <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
            Acesso exclusivo para professores, equipe gestora e membros autorizados da escola.
          </p>
        </div>

        {!isAuthenticated ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-semibold rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Usuário / E-mail Institucional:
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  placeholder="ex: servidor@edusjc.sp.gov.br"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Senha de Acesso:
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-black text-sm rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Entrar na Área Restrita</span>
            </button>
          </form>
        ) : (
          <div className="space-y-5 text-center bg-blue-50 border border-blue-200 p-6 rounded-2xl animate-fadeIn">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto font-bold">
              <ShieldCheck className="w-7 h-7 text-emerald-600" />
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-bold text-blue-950">Acesso Autorizado!</h4>
              <p className="text-xs text-slate-600">
                Identificado como: <span className="font-bold text-blue-900">{login}</span>
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Você pode acessar agora os documentos, planilhas e arquivos pedagógicos no Google Drive oficial da escola.
            </p>

            <button
              onClick={handleAccessDrive}
              className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-blue-950 font-black text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Abrir Pasta no Google Drive</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        )}

        <p className="text-[11px] text-center text-slate-400">
          EMEFI Profª Alda de Souza Araújo • Secretaria Municipal de Educação
        </p>
      </div>
    </div>
  );
};
