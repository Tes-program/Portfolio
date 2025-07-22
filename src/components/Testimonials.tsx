import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Odumuyiwa Teslim",
    role: "Collaborator & Client",
    quote: "Working with Analiese was efficient and focused. She took feedback well, delivered on time, and kept the user experience front and center. Solid collaborator."
  },
  {
    name: "Mr. Izuchukwu",
    role: "Client – CareerGenius",
    quote: "Analiese understood the assignment. The design was clean, thoughtful, and met the needs of our young audience without overcomplicating anything. Great communication throughout."
  },
  {
    name: "William",
    role: "BUCC Collaborator",
    quote: "Analiese consistently brought clarity, solid UX judgment, and a collaborative mindset to every project we worked on at BUCC. She's reliable and detail-oriented."
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 mx-auto max-w-6xl">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
          Testimonials
        </h2>
      </div>

      <div className="relative">
        {isMobile ? (
          // Mobile: Horizontal carousel with arrows below
          <>
            <div className="overflow-hidden mb-8">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-[#1A1A1A] p-6 rounded-2xl w-full max-h-80 mx-auto">
                      <blockquote className="text-white/80 italic leading-relaxed mb-4 text-sm overflow-hidden">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-white font-semibold text-base">{testimonial.name}</div>
                      <div className="text-white/60 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:shadow-lg hover:shadow-white/30 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:shadow-lg hover:shadow-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </>
        ) : (
          // Desktop/Tablet: Rotating layout (center + sides)
          <div className="flex items-center justify-center gap-8 min-h-[300px]">
            {/* Left card */}
            <div 
              key={`left-${currentIndex}`}
              className="w-80 opacity-70 scale-90 transition-all duration-700 ease-in-out transform"
              style={{ 
                transform: 'scale(0.9) translateX(0)',
                opacity: 0.7
              }}
            >
              <div className="bg-[#1A1A1A] p-6 rounded-2xl max-h-72">
                <blockquote className="text-white/80 italic leading-relaxed mb-4 text-sm overflow-hidden">
                  "{testimonials[(currentIndex + 2) % testimonials.length].quote}"
                </blockquote>
                <div className="text-white font-semibold text-base">{testimonials[(currentIndex + 2) % testimonials.length].name}</div>
                <div className="text-white/60 text-xs">{testimonials[(currentIndex + 2) % testimonials.length].role}</div>
              </div>
            </div>

            {/* Center card (main) */}
            <div 
              key={`center-${currentIndex}`}
              className="w-96 transition-all duration-700 ease-in-out transform"
              style={{ 
                transform: 'scale(1) translateX(0)',
                opacity: 1
              }}
            >
              <div className="bg-[#1A1A1A] p-8 rounded-2xl max-h-80">
                <blockquote className="text-white/80 italic leading-relaxed mb-6 overflow-hidden">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-white/60 text-sm">{testimonials[currentIndex].role}</div>
              </div>
            </div>

            {/* Right card */}
            <div 
              key={`right-${currentIndex}`}
              className="w-80 opacity-70 scale-90 transition-all duration-700 ease-in-out transform"
              style={{ 
                transform: 'scale(0.9) translateX(0)',
                opacity: 0.7
              }}
            >
              <div className="bg-[#1A1A1A] p-6 rounded-2xl max-h-72">
                <blockquote className="text-white/80 italic leading-relaxed mb-4 text-sm overflow-hidden">
                  "{testimonials[(currentIndex + 1) % testimonials.length].quote}"
                </blockquote>
                <div className="text-white font-semibold text-base">{testimonials[(currentIndex + 1) % testimonials.length].name}</div>
                <div className="text-white/60 text-xs">{testimonials[(currentIndex + 1) % testimonials.length].role}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};