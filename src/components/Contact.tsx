import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mpho.maphalle@gmail.com",
      href: "mailto:mpho.maphalle@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "061 371 6818",
      href: "tel:+27613716818"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "South Africa",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mpho-maphalle-7649306b",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/maphal-2025",
      color: "text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities in software testing, 
            quality assurance, and development projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      size="lg" 
                      className="flex-1 group"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className={`h-5 w-5 mr-2 ${social.color} group-hover:scale-110 transition-transform`} />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Download CV */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Download My CV</h3>
                <p className="text-muted-foreground mb-4">
                  Get a detailed overview of my experience, skills, and projects.
                </p>
                <Button variant="hero" size="lg" className="group">
                  <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Availability & Services */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Current Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse"></div>
                    <span className="font-medium">Available for new opportunities</span>
                  </div>
                  <p className="text-muted-foreground">
                    Currently seeking roles in software testing, quality assurance, 
                    or full-stack development where I can apply my growing expertise.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Services I Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Manual & Automated Testing",
                    "Test Case Design & Documentation",
                    "Bug Tracking & Reporting",
                    "Full-Stack Web Development",
                    "IT Support & Troubleshooting",
                    "Quality Assurance Consulting"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary to-tech-purple rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Ready to Ensure Quality Together?
              </h3>
              <p className="text-white/90 mb-6">
                Let's discuss how my testing expertise and development skills 
                can contribute to your team's success.
              </p>
              <Button variant="secondary" size="lg">
                <Mail className="h-5 w-5 mr-2" />
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;