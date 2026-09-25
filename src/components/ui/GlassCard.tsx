import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function GlassCard({ className = '', hover = true, children, ...rest }: GlassCardProps) {
  return (
    <div
      className={`glass-panel rounded-2xl ${
      hover ?
      'transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-sm' :
      ''} ${
      className}`}
      {...rest}>
      
      {children}
    </div>);

}