import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <div className={cn(
      'glass-card p-6 transition-all duration-300',
      hover && 'hover:border-primary/50 hover:shadow-[0_0_30px_rgba(13,148,136,0.1)]',
      className
    )}>
      {children}
    </div>
  );
};
