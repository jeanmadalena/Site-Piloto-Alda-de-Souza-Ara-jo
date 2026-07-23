import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

interface SchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lightText?: boolean;
  imageUrl?: string;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  lightText = false,
  imageUrl,
}) => {
  const [imageFailed, setImageFailed] = React.useState(false);

  // Configuração de tamanhos
  const sizeClasses = {
    sm: 'h-12 w-auto',
    md: 'h-20 w-auto',
    lg: 'h-28 w-auto',
    xl: 'h-40 w-auto',
  };

  const activeLogoUrl = imageUrl || SCHOOL_INFO.customLogoUrl;

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {activeLogoUrl && !imageFailed ? (
        <img
          src={activeLogoUrl}
          alt={`Emblema ${SCHOOL_INFO.name}`}
          className={`${sizeClasses[size]} object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <svg
          viewBox="0 0 600 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} drop-shadow-sm transition-transform duration-300 hover:scale-105`}
        aria-label="Emblema E.M.E.F.I. Profª Alda de Souza Araújo"
      >
        {/* === ASA ESQUERDA (Azul Royal em contorno e detalhamento de penas) === */}
        <g id="left-wing" stroke="#1D4ED8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Contorno Principal da Asa Esquerda */}
          <path d="M 270 320 C 230 340 180 340 130 300 C 90 260 80 180 120 100 C 140 60 160 30 170 25 C 165 45 155 80 155 120 C 155 170 175 220 210 250 C 230 265 250 270 270 275" />
          <path d="M 170 25 C 190 70 215 130 255 200 C 265 220 275 240 285 260" />
          
          {/* Penas Curvadas Internas da Asa Esquerda */}
          <path d="M 140 85 C 120 130 120 180 145 220 C 160 245 185 265 220 275" />
          <path d="M 130 140 C 115 175 120 215 145 245 C 165 270 195 285 235 295" />
          <path d="M 125 185 C 120 220 135 250 160 275 C 185 295 215 305 250 310" />
          <path d="M 130 230 C 130 255 145 280 175 300 C 200 315 230 320 260 320" />
          <path d="M 145 275 C 155 295 180 315 210 325 C 230 330 250 330 268 325" />

          {/* Penas da ponta inferior esquerda */}
          <path d="M 165 300 C 180 315 200 325 225 330" />
          <path d="M 190 320 C 205 330 225 335 245 335" />
        </g>

        {/* === ASA DIREITA (Azul Royal em contorno e detalhamento de penas) === */}
        <g id="right-wing" stroke="#1D4ED8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Contorno Principal da Asa Direita */}
          <path d="M 330 320 C 370 340 420 340 470 300 C 510 260 520 180 480 100 C 460 60 440 30 430 25 C 435 45 445 80 445 120 C 445 170 425 220 390 250 C 370 265 350 270 330 275" />
          <path d="M 430 25 C 410 70 385 130 345 200 C 335 220 325 240 315 260" />
          
          {/* Penas Curvadas Internas da Asa Direita */}
          <path d="M 460 85 C 480 130 480 180 455 220 C 440 245 415 265 380 275" />
          <path d="M 470 140 C 485 175 480 215 455 245 C 435 270 405 285 365 295" />
          <path d="M 475 185 C 480 220 465 250 440 275 C 415 295 385 305 350 310" />
          <path d="M 470 230 C 470 255 455 280 425 300 C 400 315 370 320 340 320" />
          <path d="M 455 275 C 445 295 420 315 390 325 C 370 330 350 330 332 325" />

          {/* Penas da ponta inferior direita */}
          <path d="M 435 300 C 420 315 400 325 375 330" />
          <path d="M 410 320 C 395 330 375 335 355 335" />
        </g>

        {/* === TRONCO / DOIS BRAÇOS COM MÃOS ABERTAS EM AMARELO OURO === */}
        <g id="arms-trunk" fill="#D97706" stroke="#B45309" strokeWidth="1">
          {/* Braço/Mão Esquerda */}
          <path d="M 283 330 L 283 200 C 278 180 268 165 250 155 C 248 152 258 155 272 168 C 265 150 252 135 245 128 C 252 128 266 142 276 158 C 275 138 270 120 265 112 C 273 112 282 128 285 148 C 288 135 293 122 295 118 C 298 122 296 138 293 158 L 293 330 Z" />
          
          {/* Braço/Mão Direita */}
          <path d="M 317 330 L 317 200 C 322 180 332 165 350 155 C 352 152 342 155 328 168 C 335 150 348 135 355 128 C 348 128 334 142 324 158 C 325 138 330 120 335 112 C 327 112 318 128 315 148 C 312 135 307 122 305 118 C 302 122 304 138 307 158 L 307 330 Z" />
        </g>

        {/* === COPA DA ÁRVORE COM FOLHAS MULTICORES === */}
        <g id="leaf-canopy">
          {/* Linha Superior Topo */}
          <path d="M 300 45 Q 295 25 300 15 Q 305 25 300 45 Z" fill="#D97706" />
          <path d="M 285 50 Q 275 30 280 20 Q 290 30 285 50 Z" fill="#2563EB" />
          <path d="M 315 50 Q 325 30 320 20 Q 310 30 315 50 Z" fill="#059669" />

          {/* Camada 1 */}
          <path d="M 270 65 Q 250 45 260 35 Q 275 45 270 65 Z" fill="#EC4899" />
          <path d="M 290 60 Q 285 40 292 30 Q 300 40 290 60 Z" fill="#8B5CF6" />
          <path d="M 310 60 Q 315 40 308 30 Q 300 40 310 60 Z" fill="#F59E0B" />
          <path d="M 330 65 Q 350 45 340 35 Q 325 45 330 65 Z" fill="#06B6D4" />

          {/* Camada 2 */}
          <path d="M 250 85 Q 230 65 240 55 Q 255 65 250 85 Z" fill="#F97316" />
          <path d="M 275 80 Q 265 60 272 50 Q 282 60 275 80 Z" fill="#10B981" />
          <path d="M 300 75 Q 295 55 300 45 Q 305 55 300 75 Z" fill="#3B82F6" />
          <path d="M 325 80 Q 335 60 328 50 Q 318 60 325 80 Z" fill="#D97706" />
          <path d="M 350 85 Q 370 65 360 55 Q 345 65 350 85 Z" fill="#A855F7" />

          {/* Camada 3 */}
          <path d="M 235 110 Q 210 90 225 80 Q 240 90 235 110 Z" fill="#E11D48" />
          <path d="M 258 102 Q 242 82 252 72 Q 265 82 258 102 Z" fill="#0284C7" />
          <path d="M 282 98 Q 272 78 280 68 Q 290 78 282 98 Z" fill="#84CC16" />
          <path d="M 318 98 Q 328 78 320 68 Q 310 78 318 98 Z" fill="#F43F5E" />
          <path d="M 342 102 Q 358 82 348 72 Q 335 82 342 102 Z" fill="#10B981" />
          <path d="M 365 110 Q 390 90 375 80 Q 360 90 365 110 Z" fill="#3B82F6" />

          {/* Camada 4 - Base das Folhas */}
          <path d="M 220 135 Q 195 115 210 105 Q 225 115 220 135 Z" fill="#D97706" />
          <path d="M 245 125 Q 230 105 240 95 Q 252 105 245 125 Z" fill="#8B5CF6" />
          <path d="M 270 120 Q 258 100 268 90 Q 278 100 270 120 Z" fill="#10B981" />
          <path d="M 300 115 Q 295 95 300 85 Q 305 95 300 115 Z" fill="#EF4444" />
          <path d="M 330 120 Q 342 100 332 90 Q 322 100 330 120 Z" fill="#06B6D4" />
          <path d="M 355 125 Q 370 105 360 95 Q 348 105 355 125 Z" fill="#F59E0B" />
          <path d="M 380 135 Q 405 115 390 105 Q 375 115 380 135 Z" fill="#2563EB" />

          {/* Folhas Internas Menores */}
          <path d="M 260 145 Q 248 130 256 122 Q 265 130 260 145 Z" fill="#059669" />
          <path d="M 285 140 Q 278 125 284 118 Q 292 125 285 140 Z" fill="#D97706" />
          <path d="M 315 140 Q 322 125 316 118 Q 308 125 315 140 Z" fill="#EC4899" />
          <path d="M 340 145 Q 352 130 344 122 Q 335 130 340 145 Z" fill="#3B82F6" />
        </g>

        {/* === SLOGAN DA ESCOLA EMBAIXO DAS ASAS (Centrado em letras azuis) === */}
        <text
          x="300"
          y="410"
          textAnchor="middle"
          fill="#1E3A8A"
          fontSize="24"
          fontWeight="800"
          letterSpacing="6"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          APRENDER É VOAR FORA DA ASA
        </text>
      </svg>
      )}

      {showText && (
        <span
          className={`mt-1 text-center font-extrabold uppercase tracking-[0.25em] text-[11px] sm:text-xs md:text-sm ${
            lightText ? 'text-blue-100' : 'text-blue-950'
          }`}
        >
          Aprender é Voar Fora da Asa
        </span>
      )}
    </div>
  );
};
