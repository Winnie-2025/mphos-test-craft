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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bridging Development & Testing Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With a unique combination of full-stack development skills and software testing expertise, 
            I bring a comprehensive understanding of the software development lifecycle to ensure 
            robust, quality applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
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