import React, { useState } from 'react';
import {
  X,
  QrCode,
  Copy,
  CheckCircle,
  Heart,
  ShieldCheck,
  Building,
  Info,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface PixDonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PixDonationModal: React.FC<PixDonationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(SCHOOL_INFO.cnpjPix);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-6 animate-scaleUp">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fechar modal PIX"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cabeçalho */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>Contribuição Voluntária AAE</span>
          </div>

          <h3 className="text-2xl font-black text-blue-950">
            Apoie a Associação de Amigos da Escola (AAE)
          </h3>
          <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
            Sua contribuição voluntária via PIX ajuda a financiar eventos culturais, materiais pedagógicos complementares e melhorias estruturais para nossos alunos.
          </p>
        </div>

        {/* Espaço para QR Code e Dados PIX */}
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Escaneie o QR Code PIX
            </span>
            <div className="w-48 h-48 bg-white border-2 border-dashed border-blue-300 rounded-2xl mx-auto flex flex-col items-center justify-center p-3 shadow-inner">
              {/* Gerador visual de QR Code SVG */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                  `00020126360014BR.GOV.BCB.PIX0114${SCHOOL_INFO.pixKeyClean}5204000053039865802BR5925AAE EMEFI ALDA DE SOUZA6015SAO JOSE DOS C62070503***6304`
                )}`}
                alt="QR Code PIX da AAE"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-700">
              Favorecido: <span className="text-blue-950">Associação de Amigos da Escola (AAE)</span>
            </p>
            <p className="text-xs text-slate-500">
              EMEFI Profª Alda de Souza Araújo
            </p>
          </div>

          {/* Campo Chave CNPJ com Botão Copiar */}
          <div className="space-y-1 pt-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Chave PIX (CNPJ da AAE):
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={SCHOOL_INFO.cnpjPix}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-center font-mono font-bold text-sm text-blue-950 shadow-inner"
              />
              <button
                onClick={handleCopyPix}
                className={`p-2.5 rounded-xl text-white font-bold transition-all shadow shrink-0 ${
                  copied
                    ? 'bg-emerald-600'
                    : 'bg-amber-400 hover:bg-amber-300 text-blue-950'
                }`}
                title="Copiar Chave CNPJ"
              >
                {copied ? <CheckCircle className="w-5 h-5 text-white" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            {copied && (
              <p className="text-[11px] font-bold text-emerald-600 animate-fadeIn">
                Chave CNPJ copiada com sucesso!
              </p>
            )}
          </div>
        </div>

        {/* Nota Transparência */}
        <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-2.5 text-xs text-slate-700">
          <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
          <p className="leading-snug">
            Todas as doações são registradas e auditadas pelo Conselho de Escola e prestação de contas da AAE.
          </p>
        </div>
      </div>
    </div>
  );
};
