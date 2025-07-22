import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-tech-purple/10 to-accent/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-4 text-sm">
              Software Testing Specialist
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
              Mpho Maphalle
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Full-Stack Developer & Software Testing Expert
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about quality assurance and software testing with 3 years of IT experience. 
              Recently completed FNB App Academy and currently advancing skills at PLP Academy.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="https://github.com/maphal-2025" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="https://www.linkedin.com/in/mpho-maphalle-7649306b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="mailto:mpho.maphalle@email.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Picture */}
          <div className="relative flex justify-center">
            <div className="relative group">
              {/* Animated background ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-tech-purple rounded-full opacity-20 group-hover:opacity-30 animate-pulse transition-opacity duration-300" />
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/1b4caea4-740f-490f-a252-fa3617d7e526.png" 
                  alt="Mpho Maphalle - Software Testing Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold">3+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;