import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, TestTube, Database, Globe, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: TestTube,
      title: "Testing & QA",
      color: "text-tech-green",
      skills: [
        { name: "Manual Testing", level: 85 },
        { name: "Test Automation", level: 75 },
        { name: "Bug Tracking", level: 90 },
        { name: "Test Documentation", level: 88 },
        { name: "QA Methodologies", level: 80 }
      ]
    },
    {
      icon: Code,
      title: "Development",
      color: "text-primary",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "Git", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Database & Backend",
      color: "text-tech-purple",
      skills: [
        { name: "SQL", level: 75 },
        { name: "Database Design", level: 70 },
        { name: "API Development", level: 75 },
        { name: "RESTful Services", level: 80 }
      ]
    },
    {
      icon: Wrench,
      title: "IT & Technical",
      color: "text-accent",
      skills: [
        { name: "System Troubleshooting", level: 95 },
        { name: "Hardware Maintenance", level: 90 },
        { name: "Technical Support", level: 95 },
        { name: "Problem Solving", level: 92 }
      ]
    }
  ];

  const tools = [
    "Jest", "Selenium", "Postman", "GitHub", "VS Code", "JIRA", "TestRail", 
    "Chrome DevTools", "MySQL", "MongoDB", "Figma", "Docker"
  ];

  const certifications = [
    {
      name: "FNB App Academy",
      issuer: "First National Bank",
      date: "July 2025",
      type: "Full-Stack Development"
    },
    {
      name: "Software Testing Course",
      issuer: "PLP Academy",
      date: "In Progress",
      type: "Quality Assurance"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Network Academy",
      date: "April 2020",
      type: "Cybersecurity"
    },
    {
      name: "Certified Network Security Specialist",
      issuer: "ICSI",
      date: "June 2020",
      type: "Network Security"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical Proficiencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning software testing, full-stack development, and IT support.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-6 w-6 text-accent" />
              Education & Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-lg">{cert.name}</h4>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge variant="outline">{cert.type}</Badge>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;