import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact as ContactSection } from "@/components/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: '#0D0D0D' }}>
      <Navigation />
      
      <main className="pt-32">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;