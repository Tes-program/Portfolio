import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { StatsSection } from "@/components/StatsSection";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";

const Index = () => {
  const heroRef = useScrollAnimation();
  
  useEffect(() => {
    // Initialize scroll animations for all sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Stagger child animations
            const children = entry.target.querySelectorAll('.scroll-animate');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-in');
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    sections.forEach((section) => {
      section.classList.add('scroll-animate');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: '#0D0D0D' }}>
      <Navigation />
      <Hero />
      <SkillsMarquee />
      <StatsSection />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
