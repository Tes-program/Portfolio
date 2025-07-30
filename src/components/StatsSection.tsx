import { useEffect, useRef, useState } from "react";

interface Stat {
  number: number;
  label: string;
}

const stats: Stat[] = [
  { number: 12, label: "Projects Completed" },
  { number: 10, label: "Happy Clients" }
];

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuad = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutQuad * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return { count, setIsVisible };
};

export const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const { count: projectsCount, setIsVisible: setProjectsVisible } = useCountUp(12, 2000);
  const { count: clientsCount, setIsVisible: setClientsVisible } = useCountUp(10, 2000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationTriggered) {
            setAnimationTriggered(true);
            setProjectsVisible(true);
            setClientsVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationTriggered, setProjectsVisible, setClientsVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: '#0D0D0D' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-center">
          {/* Projects Completed */}
          <div className="scroll-animate">
            <div className="text-4xl md:text-6xl font-semibold text-white mb-4">
              {projectsCount}
            </div>
            <div className="text-lg md:text-xl text-white/50">
              Projects Completed
            </div>
          </div>

          {/* Happy Clients */}
          <div className="scroll-animate">
            <div className="text-4xl md:text-6xl font-semibold text-white mb-4">
              {clientsCount}
            </div>
            <div className="text-lg md:text-xl text-white/50">
              Happy Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};