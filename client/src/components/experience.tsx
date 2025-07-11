import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Building2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Python and LLM Engineer Intern",
      company: "Tata Research Development and Design Centre (TRDDC)",
      location: "Pune, India",
      duration: "May 2025 - July 2025",
      offerLetter: "https://drive.google.com/file/d/17YG2X92cxILUslgyK5wWw4gjJjs-1YgT/view?usp=sharing",
      achievements: [
        "Crafted Catgeni, an AI-driven tool for constraint-based API testing interpreting natural-language business rules and Swagger specifications.",
        "Harnessed LangChain-powered LLMs with ChromaDB to generate and validate diverse, constraint-compliant test data, improving automation coverage by 40%.",
        "Engineered a Python-based MC/DC coverage algorithm, achieving 95%+ rule coverage and uncovering 20%+ more edge-case bugs.",
        "Established an automated test regeneration pipeline, enhancing test completeness by 30%+ through iterative LLM querying and validation."
      ],
      gradient: "from-blue-50 to-indigo-50",
      border: "border-blue-200"
    },
    {
      title: "Software Engineer Intern",
      company: "ScrapUncle",
      location: "Delhi, India (Hybrid)",
      duration: "January 2025 - May 2025",
      techStack: "React Native, Supabase, Node.js, Google Maps API, Sentry",
      achievements: [
        "Developed and deployed a cross-platform Rider Tracking App with real-time GPS and route optimization for 100+ agents, saving 45+ minutes/order.",
        "Configured a Supabase-backed backend with JWT authentication, role-based access, and real-time sync, ensuring security and reliability.",
        "Integrated Google Maps API for live updates and automated task allocation, reducing dispatcher intervention.",
        "Instrumented Sentry for analytics and error monitoring, cutting crashes by 30%.",
        "Collaborated in a 4-member Agile team, owning frontend, backend, CI/CD, and deployment to build an app and dashboard currently live in production."
      ],
      gradient: "from-green-50 to-emerald-50",
      border: "border-green-200"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600">Professional journey and achievements</p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className={`bg-gradient-to-r ${exp.gradient} shadow-lg ${exp.border} border animate-fade-in`}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Building2 className="text-accent mr-3" size={24} />
                      <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                    </div>
                    <p className="text-lg text-accent font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-600 mb-2">{exp.location}</p>
                    {exp.techStack && (
                      <p className="text-sm text-gray-600">
                        <strong>Tech Stack:</strong> {exp.techStack}
                      </p>
                    )}
                  </div>
                  <div className="text-right mt-4 lg:mt-0">
                    <div className="flex items-center text-gray-500 mb-2">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    {exp.offerLetter && (
                      <Button asChild variant="default" size="sm" className="bg-accent hover:bg-accent/90">
                        <a href={exp.offerLetter} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Offer Letter
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start">
                      <div className="bg-accent w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: achievement }}></p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
