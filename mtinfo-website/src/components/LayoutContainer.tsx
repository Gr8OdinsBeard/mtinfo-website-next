import React from "react";

export interface LayoutContainerProps {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  padding?: boolean;
  className?: string;
}

/**
 * LayoutContainer provides consistent content width constraints and responsive padding
 * across different screen sizes. It follows the mobile-first design approach.
 */
export function LayoutContainer({
  children,
  maxWidth = "lg",
  padding = true,
  className = "",
}: LayoutContainerProps) {
  // Map maxWidth prop to CSS custom properties and Tailwind classes
  const maxWidthClasses = {
    sm: "max-w-[var(--container-sm)]", // 640px
    md: "max-w-[var(--container-md)]", // 768px
    lg: "max-w-[var(--container-lg)]", // 1024px
    xl: "max-w-[var(--container-xl)]", // 1280px
  };

  // Responsive padding classes - mobile-first approach
  const paddingClasses = padding
    ? "px-4 sm:px-6 md:px-8 lg:px-12" // 16px -> 24px -> 32px -> 48px
    : "";

  const containerClasses = [
    "w-full",
    "mx-auto",
    maxWidthClasses[maxWidth],
    paddingClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={containerClasses}>{children}</div>;
}
