import React from "react";

export interface HeroSectionProps {
  name: string;
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * HeroSection component displays the primary hero content with responsive typography,
 * semantic HTML structure, and subtle animations. Implements fluid typography scaling
 * from mobile to desktop with accessibility-compliant styling.
 */
export function HeroSection({
  name,
  title,
  subtitle,
  className = "",
}: HeroSectionProps) {
  const sectionClasses = [
    "hero-section",
    // Responsive vertical spacing with mobile-first approach
    "py-8 sm:py-12 md:py-16 lg:py-20",
    // Center alignment optimized for mobile
    "text-center",
    // Subtle entrance animation that respects prefers-reduced-motion
    "animate-fade-in",
    // Ensure proper spacing and layout
    "relative",
    "overflow-hidden",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} role="banner" aria-labelledby="hero-heading">
      {/* Main heading with name - highest priority in hierarchy */}
      <h1 
        id="hero-heading"
        className={[
          // Fluid typography with enhanced mobile-first scaling
          "text-fluid-5xl lg:text-fluid-6xl",
          // Typography styling
          "font-bold leading-tight",
          // Responsive spacing
          "mb-2 sm:mb-3 md:mb-4",
          // Animation with staggered delay
          "animate-slide-up-delay-100",
          // Ensure high contrast for accessibility
          "text-[var(--color-text-primary)]",
        ].join(" ")}
        style={{
          lineHeight: "var(--line-height-tight)",
        }}
      >
        {name}
      </h1>

      {/* Professional title/tagline */}
      <h2 
        className={[
          // Responsive fluid typography
          "text-fluid-xl sm:text-fluid-2xl md:text-fluid-3xl",
          // Typography styling
          "font-medium leading-snug",
          // Responsive spacing
          "mb-3 sm:mb-4 md:mb-6",
          // Animation with staggered delay
          "animate-slide-up-delay-200",
          // Secondary text color with proper contrast
          "text-[var(--color-text-secondary)]",
        ].join(" ")}
        style={{
          lineHeight: "var(--line-height-snug)",
        }}
      >
        {title}
      </h2>

      {/* Optional subtitle for additional context */}
      {subtitle && (
        <p 
          className={[
            // Responsive typography
            "text-fluid-base sm:text-fluid-lg",
            // Layout constraints for optimal readability
            "max-w-2xl mx-auto",
            // Typography styling
            "leading-relaxed",
            // Animation with staggered delay
            "animate-slide-up-delay-300",
            // Muted text color with sufficient contrast
            "text-[var(--color-text-muted)]",
          ].join(" ")}
          style={{
            lineHeight: "var(--line-height-relaxed)",
          }}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
}