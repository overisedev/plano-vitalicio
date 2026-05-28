import { useEffect } from 'react';
import { useGames } from '@/hooks/useGames';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { IndividualGamesSection } from '@/components/sections/IndividualGamesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { GuaranteeSection } from '@/components/sections/GuaranteeSection';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  const { games } = useGames();

  // IntersectionObserver for .reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.06 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Re-observe on route/content changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.06 }
      );
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 500);
    return () => clearTimeout(timer);
  }, [games]);

  // Smooth scroll with force-reveal
  useEffect(() => {
    const handleClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      if (!href || href.length < 2 || !href.startsWith('#')) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();

      // Force all reveals visible for accurate scroll position
      document.querySelectorAll('.reveal:not(.visible)').forEach((r) => {
        (r as HTMLElement).style.transition = 'none';
        r.classList.add('visible');
      });

      setTimeout(() => {
        const header = document.querySelector('.site-header');
        const offset = header ? (header as HTMLElement).offsetHeight + 8 : 60;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 50);
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener('click', handleClick));
    return () => anchors.forEach((a) => a.removeEventListener('click', handleClick));
  }, []);

  return (
    <div>
      {/* Urgency Topbar */}
      <div className="urgency-topbar">
        Acesso imediato — <strong>+40.000 jogos por R$49,97 · taxa única</strong>{' '}
        <span style={{ opacity: 0.55, fontWeight: 600 }}>
          · licença vitalícia · 7 dias de garantia
        </span>
      </div>

      {/* Sticky Header */}
      <header className="site-header">
        <div className="site-header-inner">
          <a href="#" className="site-logo">
            OVER<span>ISE</span>
          </a>
          <a href="#pricing" className="btn btn-accent btn-sm header-cta">
            Garantir Acesso
          </a>
        </div>
      </header>

      <HeroSection />
      <MarqueeSection />
      <HowItWorksSection />
      <AboutSection />
      <TestimonialsSection />
      <IndividualGamesSection games={games} />
      <PricingSection />
      <FAQSection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
};

export default Index;
