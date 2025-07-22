import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            <span style={{opacity: 0.5}}>Don't hesitate —</span> let's work together.
          </h2>
        </div>

        {/* Contact Form and Details Side by Side */}
        <div className="grid md:grid-cols-2 gap-12 fade-in items-start">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Name*
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-white/30 text-white placeholder:text-white/50 rounded-lg focus:border-white/50 py-3"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Email*
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-white/30 text-white placeholder:text-white/50 rounded-lg focus:border-white/50 py-3"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-transparent border-white/30 text-white placeholder:text-white/50 rounded-lg focus:border-white/50 py-3"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-transparent border-white/30 text-white placeholder:text-white/50 rounded-lg focus:border-white/50 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="btn-elevated w-full py-4 rounded-lg font-medium text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-8 md:pl-8">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-3">Ukeje Analiese</h3>
              <p className="text-white/70 text-lg mb-8">UI/UX Designer</p>
            </div>
            
            <div className="space-y-6 text-white/80">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Phone</p>
                  <p className="text-white font-medium">07030108384</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-white font-medium">ao.ukeje@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};