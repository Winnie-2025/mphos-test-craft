import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "PLP Academy",
      role: "Software Testing Student",
      period: "2024 - Present",
      location: "Remote",
      type: "Education",
      description: "Currently advancing expertise in software testing methodologies, automation testing, and quality assurance practices.",
      skills: ["Test Automation", "Manual Testing", "QA Methodologies", "Bug Tracking", "Test Documentation"]
    },
    {
      company: "FNB App Academy",
      role: "Full-Stack Development Graduate",
      period: "Completed July 2025",
      location: "South Africa",
      type: "Certification",
      description: "Intensive full-stack development program covering modern web technologies, software architecture, and industry best practices.",
      skills: ["React", "Node.js", "JavaScript", "Database Design", "API Development", "Git"]
    },
    {
      company: "Makro",
      role: "IT Technician",
      period: "2021 - 2024",
      location: "South Africa",
      type: "Professional",
      description: "Provided technical support, system maintenance, and troubleshooting for retail technology infrastructure. Developed strong problem-solving and customer service skills.",
      skills: ["Technical Support", "System Troubleshooting", "Hardware Maintenance", "Customer Service", "Problem Solving"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Education": return "bg-tech-green/10 text-tech-green border-tech-green/20";
      case "Certification": return "bg-primary/10 text-primary border-primary/20";
      case "Professional": return "bg-tech-purple/10 text-tech-purple border-tech-purple/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A progressive path from IT support to full-stack development and software testing expertise.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Building className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      <Badge variant="outline" className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-1">{exp.role}</h3>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;