import { Phone, Mail, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Small circular image */}
        <div className="flex justify-center mb-8 fade-in">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 p-1">
            <img 
              src="/lovable-uploads/7d6950df-6866-4b58-9715-463dc4e3c7ec.png" 
              alt="Analiese" 
              className="w-full h-full rounded-full object-cover border border-white/10"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 fade-in">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">
              About Me
            </h2>
          </div>
          
          <div className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            <p>
              I'm Analiese, a UX/UI Designer focused on intuitive, inclusive digital experiences. I design clean, accessible interfaces with a special focus on neurodiverse users and clarity-driven products. I care about making digital spaces usable for everyone.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
              <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span>0703-010-8384</span>
            </div>
            
            <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
              <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span>ao.ukeje@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};