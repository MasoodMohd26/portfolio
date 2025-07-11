import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Indraprastha Institute of Information Technology, Delhi",
      duration: "2022 - 2026",
      grade: "9.3/10 CGPA",
      gradeNote: "(till Semester 6)",
      rollNo: "Roll No: 2022299",
    },
    {
      degree: "CBSE - Class 12",
      institution: "Birla Vidya Niketan, Delhi",
      duration: "2021 - 2022",
      grade: "97.6%",
      gradeNote: "",
      rollNo: "",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Education</h2>
          <p className="text-xl text-gray-600">Academic journey and achievements</p>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-white shadow-lg border border-gray-200 animate-fade-in">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="text-accent mr-3" size={24} />
                      <h3 className="text-2xl font-bold text-primary">{edu.degree}</h3>
                    </div>
                    <p className="text-lg text-accent font-semibold mb-2">{edu.institution}</p>
                    {edu.rollNo && <p className="text-gray-600">{edu.rollNo}</p>}
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="flex items-center text-gray-500 mb-2">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-success">{edu.grade}</div>
                    {edu.gradeNote && <div className="text-sm text-gray-600">{edu.gradeNote}</div>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
