import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: React.ReactNode;
}

export function Button({ variant = 'primary', icon, className = '', children, ...rest }: ButtonProps) {
  const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 active:scale-[0.97]';

  const variants: Record<string, string> = {
    primary: 'bg-accent text-white shadow-glow-sm hover:bg-accent-dark hover:shadow-glow',
    secondary: 'glass-panel text-text hover:border-accent/50',
    ghost: 'text-text hover:text-accent-light'
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {icon}
    </a>);

}