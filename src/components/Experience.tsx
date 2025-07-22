import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "Lead Product Designer",
    company: "Sierra",
    location: "Lagos, Nigeria",
    period: "Sep 2024 – Present",
    description: "Designed core features for student engagement & analytics. Enhanced motivation through skill tracking & visual UX. Improved user retention by 40% through intuitive design solutions."
  },
  {
    title: "UI/UX Design Lead",
    company: "Rodney",
    location: "Lagos, Nigeria",
    period: "Dec 2024 – Present",
    description: "Designed AI-powered tools for neurodiverse students. Emphasized accessibility and emotional UX. Built comprehensive design system for consistent user experiences."
  },
  {
    title: "UI/UX Designer",
    company: "JobBeta",
    location: "Toronto, Canada",
    period: "Remote",
    description: "Optimized interfaces with audience research. Conducted usability testing with design iteration loops. Designed responsive mobile-first experiences."
  },
  {
    title: "Lead Product Designer",
    company: "BUCC Dev Team",
    location: "Babcock University",
    period: "University Project",
    description: "Led design for internal university platforms. Collaborated with development team. Improved student engagement through better UX design."
  },
  {
    title: "Product Design Co-Lead",
    company: "Google Developer Groups Babcock",
    location: "Lagos, Nigeria",
    period: "Community Role",
    description: "Crafted interfaces for developer tools. Designed event management platforms. Enhanced community engagement experience."
  }
];

export const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
          Experience
        </h2>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="card-modern rounded-lg overflow-hidden fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <button
                onClick={() => toggleOpen(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-white/70">
                    {exp.company} • {exp.period} • {exp.location}
                  </p>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6">
                  <p className="text-white/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};