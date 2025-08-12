import { HeroSection, LayoutContainer, Section } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Section as="header" spacing="sm" aria-label="Homepage hero">
        <LayoutContainer maxWidth="lg">
          <HeroSection name="matthewtopping.info" title="portfolio page" />
        </LayoutContainer>
      </Section>

      <Section as="main" spacing="lg" aria-label="Homepage content">
        <LayoutContainer maxWidth="lg">
          <p className="text-lg text-center">
            This is a sample application built with Next.js and Tailwind CSS.
          </p>
        </LayoutContainer>
      </Section>

      <Section as="footer" spacing="sm">
        <LayoutContainer>
          <p className="text-sm text-gray-500 text-center">
            © matthewtopping.info. All rights reserved.
          </p>
        </LayoutContainer>
      </Section>
    </div>
  );
}
