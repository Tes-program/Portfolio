import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Add scroll-animate class to the element
    element.classList.add('scroll-animate');
    observer.observe(element);

    // Also observe all children with scroll-animate class
    const children = element.querySelectorAll('.scroll-animate');
    children.forEach((child) => observer.observe(child));

    return () => {
      observer.unobserve(element);
      children.forEach((child) => observer.unobserve(child));
    };
  }, []);

  return ref;
};