import HeaderNavigation from '@/components/sections/header-navigation';
import HeroBanner from '@/components/sections/hero-banner';
import BrandPartnersIntro from '@/components/sections/brand-partners-intro';
import BrandLogosCarousel from '@/components/sections/brand-logos-carousel';
import FeaturedPressSection from '@/components/sections/featured-press-section';
import AboutIntroSection from '@/components/sections/about-intro-section';
import ServicesGrid from '@/components/sections/services-grid';
import PortfolioShowcase from '@/components/sections/portfolio-showcase';
import AwardsShowcase from '@/components/sections/awards-showcase';
import StatsSection from '@/components/sections/stats-section';
import TeamPhotoSection from '@/components/sections/team-photo-section';
import FaqAccordion from '@/components/sections/faq-accordion';
import CtaSection from '@/components/sections/cta-section';
import OfficeLocations from '@/components/sections/office-locations';
import ContactFormSection from '@/components/sections/contact-form-section';
import FooterNavigation from '@/components/sections/footer-navigation';
import CustomCursor from '@/components/sections/custom-cursor';
import SmoothScrollContainer from '@/components/sections/smooth-scroll-container';

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <HeaderNavigation />
      <SmoothScrollContainer>
        <main className="min-h-screen bg-background">
          <HeroBanner />
          <BrandPartnersIntro />
          <BrandLogosCarousel />
          <FeaturedPressSection />
          <AboutIntroSection />
          <ServicesGrid />
          <PortfolioShowcase />
          <AwardsShowcase />
          <StatsSection />
          <TeamPhotoSection />
          <FaqAccordion />
          <CtaSection />
          <OfficeLocations />
          <ContactFormSection />
          <footer className="bg-background py-16 md:py-20">
            <div className="container">
              <FooterNavigation />
              <div className="mt-12 border-t border-border pt-8">
                <p className="text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Ellis Digital. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </main>
      </SmoothScrollContainer>
    </>
  );
}