import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-accent/5" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-tech-orange/10 rounded-full blur-xl animate-pulse delay-500" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <Badge variant="premium" className="mb-8 text-sm bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30">
              ✨ Software Testing Specialist
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text leading-tight">
              Mpho Maphalle
            </h1>
            
            <p className="text-3xl md:text-4xl text-foreground/70 mb-8 leading-relaxed font-medium">
              Full-Stack Developer & Software Testing Expert
            </p>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              Passionate about quality assurance and software testing with 3 years of IT experience. 
              Recently completed FNB App Academy and currently advancing skills at PLP Academy.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <Button variant="hero" size="lg" className="group text-lg px-10 py-6 font-semibold">
                <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 font-semibold">
                View Projects
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="h-14 w-14 rounded-2xl bg-card/80 hover:bg-primary/10 hover:scale-105 transition-all duration-200 border border-border/30 shadow-card hover:shadow-premium" asChild>
                <a href="https://github.com/maphal-2025" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-foreground" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-14 w-14 rounded-2xl bg-card/80 hover:bg-accent/10 hover:scale-105 transition-all duration-200 border border-border/30 shadow-card hover:shadow-premium" asChild>
                <a href="https://www.linkedin.com/in/mpho-maphalle-7649306b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-foreground" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-14 w-14 rounded-2xl bg-card/80 hover:bg-tech-orange/10 hover:scale-105 transition-all duration-200 border border-border/30 shadow-card hover:shadow-premium" asChild>
                <a href="mailto:mpho.maphalle@gmail.com">
                  <Mail className="h-6 w-6 text-foreground" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Picture */}
          <div className="relative flex justify-center">
            <div className="relative group">
              {/* Modern floating rings */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-accent/20 to-tech-orange/20 rounded-full opacity-50 group-hover:opacity-70 animate-spin transition-opacity duration-300" style={{ animationDuration: '10s' }} />
              <div className="absolute -inset-4 bg-gradient-to-r from-tech-orange/20 via-primary/20 to-accent/20 rounded-full opacity-30 group-hover:opacity-50 animate-spin transition-opacity duration-300" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden border-4 border-primary/20 shadow-premium group-hover:scale-[1.02] transition-transform duration-300 bg-card">
                <img 
                  src="/lovable-uploads/1b4caea4-740f-490f-a252-fa3617d7e526.png" 
                  alt="Mpho Maphalle - Software Testing Specialist"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-4 rounded-2xl shadow-elegant hover:scale-105 transition-transform duration-200 border-2 border-primary/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">3+</div>
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