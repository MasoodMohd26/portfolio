import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Users, User } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Scanerr – Portable Document Scanner App",
      description: "An Android app for scanning documents with OCR achieving 90%+ text accuracy, processing ~50 pages/min using Google ML Kit for real-time performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      techStack: ["Kotlin", "Jetpack Compose", "Google ML Kit", "Coroutines", "Java File I/O"],
      achievements: [
        "Developed an Android app for scanning documents with OCR achieving 90%+ text accuracy, processing ~50 pages/min using Google ML Kit for real-time performance",
        "Implemented PDF and JPEG export, integrated MediaStore and cloud APIs for seamless offline and online access, supporting 10K+ documents with 99.9% reliability",
        "Created an optimized, adaptive UI in Jetpack Compose with lazy-loading previews, 100% screen reader compliance, and responsiveness for varied display sizes",
        "Configured TalkBack and voice reader (TextToSpeech), enhancing accessibility to cater to a broader audience, including users with disabilities"
      ],
      github: "https://github.com/MasoodMohd26/Scanerr-Android-App",
      teamSize: "3",
      duration: "Jan 2025 - Apr 2025"
    },
    {
      title: "Portfolio Optimiser for Stock Market",
      description: "ML-powered portfolio optimization system using Modern Portfolio Theory, achieving 12% annualized return and 15% risk reduction through strategic sector allocation.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      techStack: ["Python", "Machine Learning", "Modern Portfolio Theory", "Random Forest", "XGBoost", "ANN"],
      achievements: [
        "Cleaned and normalized 20 years of OHLCV data across 50+ stocks, engineering 20+ volatility indicators",
        "Trained RF, XGBoost, and ANN models achieving up to ROC AUC of 0.91 and 50% directional accuracy",
        "Backtested and optimized portfolios using Markowitz MPT, achieving 12% annualized return and Sharpe ratio of 1.2",
        "Implemented 15% risk reduction through strategic sector allocation and diversification"
      ],
      github: "https://github.com/MasoodMohd26/Portfolio-Optimiser-For-Stock-Market",
      teamSize: "4",
      duration: "Aug 2024 - Nov 2024"
    },
    {
      title: "Mental Health Counseling Summarization",
      description: "AI-driven NLP system to help psychotherapists review sessions by generating clinically-relevant summaries and filtering dialogue using BioBERT and BART models.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      techStack: ["Clinical NLP", "BioBERT", "BART", "Python", "BioClinicalBERT", "GRU"],
      achievements: [
        "Engineered an AI-driven system to help psychotherapists review sessions by generating clinically-relevant summaries",
        "Trained an ECC classifier to classify dialogue into 4 therapy categories using BioClinicalBERT + GRU (BERTScore-F1: 0.865)",
        "Fine-tuned BART summarizer with hallucination control and ECC labels for symptom-focused summaries",
        "Outperformed DeepSeek-8b on BLEU (0.08 vs 0.02) and ROUGE-L (0.21 vs 0.18) metrics"
      ],
      github: "https://drive.google.com/drive/folders/113-k57GONrV8B_xO_EU3NTW02fOqA_F2?usp=sharing",
      teamSize: "2",
      duration: "Mar 2025 - Apr 2025"
    },
    {
      title: "Mini Operating System",
      description: "Comprehensive operating system implementation with priority-based scheduling, Unix-like shell, and smart executable loader achieving significant performance improvements.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      techStack: ["C", "Shell Scripting", "Linux"],
      achievements: [
        "Constructed a priority-based scheduler in C, improving CPU time allocation efficiency by 30% over round-robin for 100+ concurrent processes",
        "Built a Unix-like shell with pipeline support (e.g., grep | sort), process control (fork/wait), and 10+ native commands, achieving 95% accuracy",
        "Programmed a Smart Loader for 32-bit ELF executables using lazy loading, reducing memory footprint by 25% and startup latency by 15%"
      ],
      github: "https://github.com/MasoodMohd26/OS_Components/tree/main",
      teamSize: "2",
      duration: "Aug 2024 - Nov 2024",
      advisor: "Dr. Vivek Kumar"
    },
    {
      title: "Smart Analyzer for Diabetic Patient Readmissions",
      description: "Machine learning system analyzing 101,766 patient records to predict diabetic readmissions and improve hospital care using advanced data science techniques.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      techStack: ["Python", "Scikit-learn", "NumPy", "Pandas", "Machine Learning", "Data Science"],
      achievements: [
        "Conducted EDA and hypothesis testing on dataset of 101,766 records with 47 features, identifying 10 key predictors",
        "Applied dimensionality reduction techniques like SVD and CUR to reduce computation time while preserving data integrity",
        "Developed and optimized ML models (Logistic Regression, Random Forest), achieving 64% accuracy",
        "Provided actionable insights to reduce hospital readmissions and improve patient care"
      ],
      github: "https://github.com/MasoodMohd26/Diabetes_Readmission_Data_Analysis",
      teamSize: "1",
      duration: "Aug 2024 - Nov 2024"
    },
    {
      title: "BlinkBasket E-Commerce Platform",
      description: "Full-stack e-commerce platform with personalized recommendations and auto-order subscriptions, featuring comprehensive product catalog and user management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      techStack: ["MySQL", "HTML", "CSS", "JavaScript", "Node.js", "Machine Learning"],
      achievements: [
        "Developed a user-friendly online platform offering a wide range of everyday products",
        "Implemented personalized recommendations using machine learning algorithms",
        "Created auto-order subscription mechanism for recurring purchases",
        "Designed MySQL relational database using ER modeling and managed backend with Node.js"
      ],
      github: "https://github.com/MasoodMohd26/BlinkBasket",
      teamSize: "4",
      duration: "Feb 2024 - May 2024"
    },
    {
      title: "Stick Hero Game",
      description: "2D Stick Hero clone built with advanced OOP principles and design patterns, achieving optimal performance and modular architecture.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      techStack: ["Java", "JavaFX", "Multithreading", "JUnit", "OOP Principles", "Design Patterns"],
      achievements: [
        "Architected a 2D Stick Hero clone using core OOP concepts (encapsulation, inheritance, polymorphism) to create modular game components, enabling 30% faster feature development",
        "Integrated 3 design patterns (Singleton, Factory, Observer) following OOP best practices, reducing code redundancy by 40%",
        "Spearheaded collision detection and physics systems with Java inheritance hierarchies, achieving smooth gameplay at 60 FPS across 10+ levels"
      ],
      github: "https://github.com/MasoodMohd26/STICK_HERO_GAME/tree/main",
      teamSize: "2",
      duration: "Oct 2023 - Nov 2023",
      advisor: "Dr. Raghava Mutharaju"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Showcasing innovative solutions and technical expertise</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2 mb-4">
                  {project.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start">
                      <div className="bg-accent w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      <span>Team Size: {project.teamSize}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  {project.advisor && (
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>Advisor: {project.advisor}</span>
                    </div>
                  )}
                </div>
                
                <Button asChild variant="outline" className="w-full">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-accent hover:bg-accent/90">
            <a href="https://github.com/MasoodMohd26" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
