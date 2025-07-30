import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: '#0D0D0D' }}>
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16 fade-in">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
          <span style={{opacity: 0.5}}>A few thoughts —</span> honest and human.
        </h1>
      </div>

          <div className="max-w-4xl mx-auto">
            <a 
              href="https://medium.com/@ukejeanaliese/ai-is-killing-our-planet-and-noone-seems-to-give-a-shit-4c575fa14c0c"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white/90">
                  AI is destroying our planet, and no one seems to care
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  An exploration of the environmental impact of artificial intelligence and why we need to act now. This article delves into the carbon footprint of AI systems and the urgent need for sustainable practices in technology.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-white/50 text-sm">
                    Published on Medium
                  </div>
                  <div className="text-white/70 text-sm group-hover:text-white transition-colors">
                    Read more →
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;