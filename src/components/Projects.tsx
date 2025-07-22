import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "BUCC Crunch",
    description: "University community platform for student developers",
    tags: ["Community", "Dashboard", "Mobile Design"],
    image: "🎓"
  },
  {
    title: "Career Genius",
    description: "AI-powered career guidance and job matching platform",
    tags: ["AI", "Career", "Matching"],
    image: "🧠"
  },
  {
    title: "Unified Data Vault",
    description: "Secure data management system with intuitive interface",
    tags: ["Data", "Security", "Dashboard"],
    image: "🔐"
  },
  {
    title: "Web-Based Blood Supply",
    description: "Healthcare platform for blood donation management",
    tags: ["Healthcare", "Management", "Emergency"],
    image: "🩸"
  },
  {
    title: "Grant Management Platform",
    description: "Streamlined platform for grant applications and tracking",
    tags: ["Finance", "Management", "Forms"],
    image: "💰"
  },
  {
    title: "AI Law Chatbot",
    description: "Legal assistance chatbot with natural language processing",
    tags: ["AI", "Legal", "Chatbot"],
    image: "⚖️"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 fade-in">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group hoverable"
            >
              {/* Project image */}
              <div className="h-64 bg-white/5 rounded-2xl flex items-center justify-center text-6xl relative overflow-hidden mb-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                <span className="relative z-10">{project.image}</span>
              </div>

              {/* Project title */}
              <h3 className="text-xl font-medium text-white text-center">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in">
          <Button variant="minimal" size="lg" className="hoverable">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};