import { Badge } from "@/components/ui/badge";
import { Brain, Code, Wrench, GraduationCap } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Expertise Areas",
      icon: <Brain className="text-accent" size={24} />,
      skills: [
        "Data Structures & Algorithms",
        "Linux",
        "TCP/IP Networking",
        "Full Stack Development (MERN)",
        "Large Language Models",
        "Agentic AI",
        "Machine Learning",
        "Deep Learning",
        "Data Science",
        "Database Management (SQL)"
      ],
      color: "bg-accent"
    },
    {
      title: "Programming Languages",
      icon: <Code className="text-success" size={24} />,
      skills: [
        "C++",
        "C",
        "Python",
        "Java",
        "JavaScript",
        "Shell Scripting"
      ],
      color: "bg-green-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="text-orange-500" size={24} />,
      skills: [
        "Power BI",
        "Ubuntu",
        "Git/GitHub",
        "Google Colab",
        "MATLAB (beginner)",
        "JUnit",
        "LaTeX",
        "IntelliJ",
        "PyCharm",
        "MySQL Workbench",
        "HLS",
        "Vitis"
      ],
      color: "bg-orange-500"
    },
    {
      title: "Core Electives",
      icon: <GraduationCap className="text-purple-500" size={24} />,
      skills: [
        "Operating Systems",
        "Object Oriented Programming",
        "Computer Networks",
        "Natural Language Processing",
        "Probability and Statistics"
      ],
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">Technical proficiencies and areas of expertise</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern tech environment"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg animate-fade-in">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`${category.color} text-white hover:opacity-90`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
