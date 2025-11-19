
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: '16px',
    md: '20px',
    lg: '28px'
  };

  return (
    <div className={`${sizeClasses[size]} bg-[#4169E1] flex items-center justify-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={iconSizes[size]}
        viewBox="0 0 200 200"
        width={iconSizes[size]}
        fill="#FFFFFF"
      >
        <path d="M60,40 L140,40 L140,60 L100,60 L100,160 L80,160 L80,60 L60,60 Z M100,100 L140,100 L140,120 L120,120 L120,160 L100,160 Z" />
      </svg>
    </div>
  );
};

export default Logo;
