import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20" />
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/5 via-accent/5 to-tech-purple/5" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <Badge variant="premium" className="mb-6 text-sm animate-pulse">
              ✨ Software Testing Specialist
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text leading-tight">
              Mpho Maphalle
            </h1>
            
            <p className="text-2xl md:text-3xl text-foreground/80 mb-8 leading-relaxed font-light">
              Full-Stack Developer & Software Testing Expert
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Passionate about quality assurance and software testing with 3 years of IT experience. 
              Recently completed FNB App Academy and currently advancing skills at PLP Academy.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <Button variant="premium" size="lg" className="group text-lg px-8 py-4">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Projects
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl bg-card/20 backdrop-blur-sm hover:bg-primary/20 hover:scale-110 transition-all duration-300 border border-border/50" asChild>
                <a href="https://github.com/maphal-2025" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl bg-card/20 backdrop-blur-sm hover:bg-primary/20 hover:scale-110 transition-all duration-300 border border-border/50" asChild>
                <a href="https://www.linkedin.com/in/mpho-maphalle-7649306b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl bg-card/20 backdrop-blur-sm hover:bg-primary/20 hover:scale-110 transition-all duration-300 border border-border/50" asChild>
                <a href="mailto:mpho.maphalle@gmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Picture */}
          <div className="relative flex justify-center">
            <div className="relative group">
              {/* Premium animated rings */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary via-accent to-tech-purple rounded-full opacity-20 group-hover:opacity-40 animate-spin transition-opacity duration-500" style={{ animationDuration: '8s' }} />
              <div className="absolute -inset-6 bg-gradient-to-r from-tech-purple via-accent to-primary rounded-full opacity-30 group-hover:opacity-50 animate-spin transition-opacity duration-500" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/1b4caea4-740f-490f-a252-fa3617d7e526.png" 
                  alt="Mpho Maphalle - Software Testing Specialist"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-2xl shadow-2xl hover:scale-110 transition-transform duration-300 border border-primary/20 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-xl font-bold">3+</div>
                  <div className="text-sm font-medium">Years</div>
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