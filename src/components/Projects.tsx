import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TestTube, Code, Bug, CheckCircle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Farmers Chatbot",
      type: "GitHub Project",
      description: "AI-powered chatbot designed to assist farmers with agricultural queries, crop management, and farming best practices.",
      technologies: ["Python", "NLP", "Machine Learning", "Flask"],
      features: [
        "Agricultural knowledge base",
        "Natural language processing",
        "Crop recommendation system",
        "Weather integration"
      ],
      icon: Code,
      color: "text-tech-green",
      github: "https://github.com/maphal/2025/farners_Chatbot"
    },
    {
      title: "E-Commerce Testing Suite",
      type: "Testing Project",
      description: "Comprehensive testing framework for an e-commerce application including functional, performance, and security testing.",
      technologies: ["Selenium", "Jest", "Postman", "JMeter"],
      features: [
        "Automated regression testing",
        "API testing with Postman",
        "Performance testing scenarios",
        "Cross-browser compatibility"
      ],
      icon: TestTube,
      color: "text-tech-orange"
    },
    {
      title: "Banking App Quality Assurance",
      type: "FNB Academy Project",
      description: "Full-stack banking application with comprehensive testing documentation and quality assurance protocols.",
      technologies: ["React", "Node.js", "MySQL", "Jest", "Cypress"],
      features: [
        "User authentication testing",
        "Transaction flow validation",
        "Security penetration testing",
        "Mobile responsiveness testing"
      ],
      icon: Code,
      color: "text-primary"
    },
    {
      title: "Bug Tracking System",
      type: "Personal Project",
      description: "Custom bug tracking and test case management system designed for small to medium development teams.",
      technologies: ["React", "Express", "MongoDB", "Socket.io"],
      features: [
        "Real-time bug reporting",
        "Test case management",
        "Team collaboration tools",
        "Progress tracking dashboard"
      ],
      icon: Bug,
      color: "text-tech-purple"
    }
  ];

  const testingMethodologies = [
    { name: "Manual Testing", icon: CheckCircle, description: "Exploratory and structured manual testing approaches" },
    { name: "Automated Testing", icon: TestTube, description: "Selenium and Cypress automation frameworks" },
    { name: "API Testing", icon: Code, description: "RESTful API testing with Postman and Newman" },
    { name: "Performance Testing", icon: ExternalLink, description: "Load and stress testing with JMeter" }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-muted/20 to-tech-orange/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge variant="premium" className="mb-6 text-base">
            🚀 Projects & Testing Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Quality Assurance Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of testing methodologies, quality assurance practices, and development projects 
            demonstrating comprehensive software testing expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="floating-card group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <project.icon className={`h-6 w-6 ${project.color}`} />
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Testing Areas:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github || "#"} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testing Methodologies */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Testing Methodologies & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testingMethodologies.map((method, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-background/50">
                  <method.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">{method.name}</h4>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;