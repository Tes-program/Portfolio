const tools = [
  { name: "Figma", image: "/lovable-uploads/2c86c3e5-2837-44e5-b5bc-7d1dc3c9969e.png" },
  { name: "Notion", image: "/lovable-uploads/98abe023-5937-47cc-bb4f-e613d705c5c9.png" },
  { name: "Adobe Illustrator", image: "/lovable-uploads/305cc7ff-8776-4308-a639-744bce14246b.png" },
  { name: "Cursor", image: "/lovable-uploads/521963ee-48e2-4117-8ac8-7ba832d56fd7.png" },
  { name: "Framer", image: "/lovable-uploads/a4292600-ffae-4527-9110-658b04fe0aeb.png" },
];

export const SkillsMarquee = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="relative max-w-[70%] mx-auto">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        {/* Horizontal marquee */}
        <div className="marquee-container">
          <div className="flex gap-16 marquee-track">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
              >
                <div className="w-20 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <img 
                    src={tool.image} 
                    alt={tool.name}
                    className="w-16 h-16 object-contain group-hover:scale-125 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};