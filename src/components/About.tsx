import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, TestTube, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Completed FNB App Academy with expertise in modern web technologies"
    },
    {
      icon: TestTube,
      title: "Software Testing",
      description: "Currently studying advanced testing methodologies at PLP Academy"
    },
    {
      icon: Users,
      title: "IT Support",
      description: "3 years of experience as IT Technician at Makro"
    },
    {
      icon: Target,
      title: "Quality Focused",
      description: "Passionate about ensuring software quality and user experience"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted/20 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge variant="premium" className="mb-6 text-base">
            🎯 About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Bridging Development & Testing Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With a unique combination of full-stack development skills and software testing expertise, 
            I bring a comprehensive understanding of the software development lifecycle to ensure 
            robust, quality applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, index) => (
            <Card key={index} className="floating-card group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold mb-3 text-lg">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 gradient-text">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                My career began in IT support at Makro, where I developed strong problem-solving 
                skills and technical expertise. This foundation led me to pursue full-stack development 
                through the prestigious FNB App Academy.
              </p>
              <p className="text-muted-foreground">
                Now specializing in software testing at PLP Academy, I'm combining my development 
                knowledge with testing best practices to ensure software quality and reliability.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Problem-solving mindset</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Continuous learning approach</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-tech-purple rounded-full"></div>
                <span className="text-sm">Quality-first mentality</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Team collaboration skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;