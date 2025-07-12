import * as React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'icon-only' | 'text-only' | 'full';
}

export function Logo({ className = '', size = 40, variant = 'full' }: LogoProps) {
  const icon = (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Main S shape with gradient */}
      <path 
        d="M80 50C80 30.1 63.9 14 44 14C24.1 14 8 30.1 8 50C8 69.9 24.1 86 44 86C63.9 86 80 69.9 80 50Z" 
        stroke="url(#paint0_linear)" 
        strokeWidth="16" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow heads */}
      <path 
        d="M32 38L24 50L32 62" 
        stroke="url(#paint1_linear)" 
        strokeWidth="8" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M68 62L76 50L68 38" 
        stroke="url(#paint2_linear)" 
        strokeWidth="8" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center circle */}
      <circle cx="50" cy="50" r="8" fill="url(#paint3_radial)" />
      
      <defs>
        <linearGradient 
          id="paint0_linear" 
          x1="14" 
          y1="14" 
          x2="86" 
          y2="86" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A2BE2" />
          <stop offset="1" stopColor="#4B0082" />
        </linearGradient>
        <linearGradient 
          id="paint1_linear" 
          x1="28" 
          y1="38" 
          x2="28" 
          y2="62" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9370DB" />
          <stop offset="1" stopColor="#8A2BE2" />
        </linearGradient>
        <linearGradient 
          id="paint2_linear" 
          x1="72" 
          y1="38" 
          x2="72" 
          y2="62" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B0082" />
          <stop offset="1" stopColor="#483D8B" />
        </linearGradient>
        <radialGradient 
          id="paint3_radial" 
          cx="0" 
          cy="0" 
          r="1" 
          gradientUnits="userSpaceOnUse" 
          gradientTransform="translate(50 50) rotate(90) scale(8)"
        >
          <stop stopColor="#9370DB" />
          <stop offset="1" stopColor="#4B0082" />
        </radialGradient>
      </defs>
    </svg>
  );

  const text = (
    <>
      <span className="text-3xl font-bold text-white mr-2">Skill</span>
      {icon}
      <span className="text-3xl font-bold text-white ml-2">Swap</span>
    </>
  );

  return (
    <div className={`flex items-center ${className}`}>
      {variant === 'icon-only' ? icon : text}
    </div>
  );
}
