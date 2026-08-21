import React from 'react';
import { cn } from '../../utils/cn';

interface TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  variant?: 'heading1' | 'heading2' | 'heading3' | 'body' | 'small' | 'muted';
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({ 
  as: Component = 'p', 
  variant = 'body', 
  children, 
  className 
}: TypographyProps) => {
  const styles = {
    heading1: 'text-4xl md:text-6xl font-bold font-heading leading-tight',
    heading2: 'text-3xl md:text-4xl font-semibold font-heading',
    heading3: 'text-xl md:text-2xl font-medium font-heading',
    body: 'text-base md:text-lg text-text-primary leading-relaxed',
    small: 'text-sm font-medium',
    muted: 'text-sm text-text-muted',
  };

  return (
    <Component className={cn(styles[variant], className)}>
      {children}
    </Component>
  );
};
