import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-primary pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Hi, I'm <span className="text-accent">Mohd Masood</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Full Stack Developer & AI Engineer specializing in{" "}
              <span className="text-accent font-semibold">MERN Stack</span> and{" "}
              <span className="text-accent font-semibold">Large Language Models</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium"
              >
                Get In Touch
              </Button>
              <Button 
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-medium"
              >
                View Projects
              </Button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/MasoodMohd26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent text-2xl transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-masood-b999762a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent text-2xl transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:masood22299@iiitd.ac.in"
                className="text-gray-600 hover:text-accent text-2xl transition-colors"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional developer workspace"
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
