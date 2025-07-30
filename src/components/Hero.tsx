import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hello, I'm Analiese,\na UX/UI Designer.";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left scroll-animate">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.4] mb-6 max-w-[700px] mx-auto lg:mx-0">
              <span className="inline-block w-full min-w-fit">
                {displayedText.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < displayedText.split('\n').length - 1 && <br />}
                  </span>
                ))}
                <span className={`animate-pulse ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                &nbsp;
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              UX/UI Designer | Passionate about creating{" "}
              <span className="text-white font-medium">inclusive digital experiences</span>
            </p>

            <Button 
              asChild 
              className="btn-elevated px-8 py-4 rounded-lg font-medium text-lg"
            >
              <a 
                href="https://drive.google.com/file/d/1-DC41xoDn-OSJiC0A2PAa_Gz0Zw5TaCh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Right: Circular Image */}
          <div className="flex justify-center lg:justify-end scroll-animate">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-white/20 p-2 float">
                <img 
                  src="/lovable-uploads/7d6950df-6866-4b58-9715-463dc4e3c7ec.png" 
                  alt="Analiese" 
                  className="w-full h-full rounded-full object-cover border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};