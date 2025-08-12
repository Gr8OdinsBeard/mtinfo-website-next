import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
  as?: 'section' | 'div' | 'main' | 'article' | 'aside' | 'header' | 'footer';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

/**
 * Section component provides consistent vertical spacing and semantic HTML structure
 * with proper accessibility features. It supports different spacing variants and
 * semantic HTML elements for proper document structure.
 */
export function Section({
  children,
  as: Component = 'section',
  spacing = 'lg',
  className = '',
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: SectionProps) {
  // Responsive vertical spacing using CSS custom properties
  // Mobile-first approach with larger spacing on bigger screens
  const spacingClasses = {
    sm: 'py-8 sm:py-12', // 32px -> 48px
    md: 'py-12 sm:py-16 md:py-20', // 48px -> 64px -> 80px
    lg: 'py-16 sm:py-20 md:py-24 lg:py-32', // 64px -> 80px -> 96px -> 128px
    xl: 'py-20 sm:py-24 md:py-32 lg:py-40', // 80px -> 96px -> 128px -> 160px
  };

  const sectionClasses = [
    'w-full',
    spacingClasses[spacing],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Accessibility props
  const accessibilityProps: Record<string, string> = {};
  if (id) accessibilityProps.id = id;
  if (ariaLabel) accessibilityProps['aria-label'] = ariaLabel;
  if (ariaLabelledBy) accessibilityProps['aria-labelledby'] = ariaLabelledBy;

  return (
    <Component className={sectionClasses} {...accessibilityProps}>
      {children}
    </Component>
  );
}