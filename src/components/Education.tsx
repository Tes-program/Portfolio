export const Education = () => {
  const education = [
    {
      period: "2015 – 2021",
      degree: "WASSCE",
      school: "Nigerian Turkish International College",
      location: "Ogun, Nigeria",
      description: "Completed secondary education with a strong foundation in sciences and humanities."
    },
    {
      period: "2021 – 2025",
      degree: "B.Sc. Information Technology",
      school: "Babcock University",
      location: "Ilishan Remo, Nigeria",
      description: "Relevant coursework in Web design aesthetics and IT project management."
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Education
          </h2>
        </div>

        <div className="space-y-12 max-w-2xl mx-auto">
          {education.map((item, index) => (
            <div 
              key={index} 
              className="text-center fade-in" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-2">
                <span className="text-white/60 text-lg font-medium">{item.period}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {item.degree}
              </h3>
              <h4 className="text-xl text-white/80 mb-1">
                {item.school}
              </h4>
              <p className="text-white/60 mb-4">{item.location}</p>
              <p className="text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};