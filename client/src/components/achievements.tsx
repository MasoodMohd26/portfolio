import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Trophy, Star, Code, Users } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Dean's Student Academic Excellence Awardee",
      organization: "IIIT Delhi",
      year: "2024",
      description: "Awarded to the top 10 students of the institute for outstanding academic performance",
      icon: <Trophy className="text-yellow-500" size={24} />,
      certificate: "https://drive.google.com/file/d/1ulJL7gCp3uWmniDnknJ6sOtHTd95PK5A/view?usp=sharing",
      gradient: "from-yellow-50 to-orange-50",
      border: "border-yellow-200"
    },
    {
      title: "Merit Certificate by CBSE",
      organization: "CBSE",
      year: "2024",
      description: "Achieved top 0.1% nationwide in Mathematics Olympiad",
      icon: <Award className="text-blue-500" size={24} />,
      certificate: "https://drive.google.com/file/d/19TBacVqJOpi3csXHweIlUfwL7iAckIc8/view?usp=sharing",
      gradient: "from-blue-50 to-indigo-50",
      border: "border-blue-200"
    },
    {
      title: "LeetCode 100-Day Challenge",
      organization: "LeetCode",
      year: "2024",
      description: "Ranked within the top 3% of 1L+ participants for consistent performance in solving daily challenges",
      icon: <Code className="text-green-500" size={24} />,
      certificate: "https://drive.google.com/file/d/16wUM7dMiMt_F7OskVVr9RNe68c1Xy39q/view?usp=sharing",
      gradient: "from-green-50 to-emerald-50",
      border: "border-green-200"
    },
    {
      title: "Competitive Programming Excellence",
      organization: "Multiple Platforms",
      year: "2024",
      description: "Solved over 500+ questions on various coding platforms",
      icon: <Star className="text-purple-500" size={24} />,
      links: [
        { name: "LeetCode", url: "https://leetcode.com/u/smoothie26/" },
        { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/mohdmasoo3cev/" },
        { name: "Hacker Blocks", url: "https://drive.google.com/file/d/1bHzA22npDfDCf11TmipQLGzRnpEkA4I3/view?usp=sharing" }
      ],
      gradient: "from-purple-50 to-pink-50",
      border: "border-purple-200"
    },
    {
      title: "Featured in Navbharat Times",
      organization: "Navbharat Times",
      year: "2012",
      description: "Recognized as the youngest black belt in UP for winning two gold medals in the 28th All India Karate Championship",
      tagline: "Gold par hai bus isi ka hold",
      icon: <Award className="text-red-500" size={24} />,
      certificate: "https://drive.google.com/file/d/18lj-69HyLrYa9pMzl_Zq3vVThorBmnC2/view",
      gradient: "from-red-50 to-pink-50",
      border: "border-red-200"
    }
  ];

  const positions = [
    {
      title: "Head Teaching Assistant",
      course: "Operating Systems",
      organization: "IIIT Delhi",
      year: "2024",
      description: "Led a team of TAs to deliver tutorials, design quizzes, and oversee academic support for 150+ students under the guidance of Prof. Vivek Kumar",
      icon: <Users className="text-accent" size={24} />
    },
    {
      title: "Event Lead",
      course: "TechFest",
      organization: "IIIT Delhi",
      year: "2023",
      description: "Organized event operations and led team of 10+ people",
      icon: <Users className="text-accent" size={24} />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Honors & Achievements</h2>
          <p className="text-xl text-gray-600">Recognition for academic excellence and professional contributions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className={`bg-gradient-to-r ${achievement.gradient} shadow-lg ${achievement.border} border animate-fade-in hover:shadow-xl transition-shadow duration-300`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {achievement.icon}
                  <div className="ml-3">
                    <h3 className="font-bold text-primary text-lg">{achievement.title}</h3>
                    <p className="text-accent font-medium">{achievement.organization}</p>
                    <p className="text-sm text-gray-600">{achievement.year}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm">{achievement.description}</p>
                
                {achievement.tagline && (
                  <div className="mb-4 p-3 bg-white/60 rounded-lg">
                    <p className="text-sm italic text-gray-800 font-medium">"{achievement.tagline}"</p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {achievement.certificate && (
                    <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-white">
                      <a href={achievement.certificate} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" />
                        Certificate
                      </a>
                    </Button>
                  )}
                  
                  {achievement.links && achievement.links.map((link, linkIndex) => (
                    <Button key={linkIndex} asChild size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" />
                        {link.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Positions of Responsibility</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <Card key={index} className="bg-white shadow-lg border border-gray-200 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {position.icon}
                    <div className="ml-3">
                      <h4 className="font-bold text-primary text-lg">{position.title}</h4>
                      <p className="text-accent font-medium">{position.course}</p>
                      <p className="text-sm text-gray-600">{position.organization} • {position.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{position.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}