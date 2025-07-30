import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Career Genius",
    image: "/lovable-uploads/10b4a112-507f-4a0f-8d51-e9508f317f90.png",
    behanceUrl: "https://www.behance.net/gallery/225861793/CareerGenius-A-career-discovery-app-for-kids"
  },
  {
    title: "AI Legal Chatbot",
    image: "/lovable-uploads/fe361b4c-75e8-4cae-ad2e-68c35aa30431.png",
    behanceUrl: "https://www.behance.net/gallery/224417767/AI-Legal-Chatbot"
  },
  {
    title: "BUCC Crunch",
    image: "/lovable-uploads/3732b2e1-8f8c-4f38-ab11-365c43ed268f.png",
    behanceUrl: "https://www.behance.net/gallery/224030471/BUCC-Crunch-A-student-blogging-platform"
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto justify-items-center mb-16">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group fade-in text-center w-full max-w-sm cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square w-full bg-white/5 rounded-2xl overflow-hidden mb-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 flex items-center justify-center p-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>
              <Button variant="outline" className="px-6 py-3 rounded-lg font-medium border-2 border-white text-white bg-transparent hover:shadow-lg hover:shadow-white/30 hover:bg-white/10 transition-all duration-300">
                View Behance Case Study
              </Button>
            </a>
          ))}
        </div>

        <div className="text-center fade-in">
          <Link to="/projects">
            <Button className="btn-elevated px-8 py-4 rounded-lg font-medium text-lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};