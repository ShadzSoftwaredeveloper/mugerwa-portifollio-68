
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const skills = [
    'Full-Stack Developer',
    'React Specialist',
    'UI/UX Designer',
    'Mobile App Developer',
    'Database Expert',
    'Cloud Architect'
  ];

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('explore-work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const currentSkill = skills[currentIndex];
    let charIndex = 0;
    
    const typeWriter = setInterval(() => {
      if (charIndex <= currentSkill.length) {
        setDisplayText(currentSkill.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % skills.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Mugerwa
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Shadrach
          </h2>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="text-primary font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
            <br />
            <span className="text-sm">crafting exceptional digital experiences with modern technologies</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.location.href = '/contact'}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <a 
            href="https://github.com/shadrachmugerwa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
          </a>
          <a 
            href="https://linkedin.com/in/shadrachmugerwa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-accent hover:shadow-glow transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-accent" />
          </a>
          <a 
            href="mailto:shadrach.mugerwa@email.com" 
            className="p-3 rounded-full bg-card border border-border hover:border-accent hover:shadow-glow transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-accent" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="animate-bounce hover:text-primary transition-colors duration-300"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
