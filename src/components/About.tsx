import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import profilePhoto from '../../src/assets/about3.jpg';

const About = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = useState<any>();

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and scalable code with best practices"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Bringing creative solutions to complex problems with modern approaches"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, user experience, and reliability"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly"
    }
  ];

  useEffect(() => {
    if (!api || !isMobile) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api, isMobile]);

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with expertise in modern web technologies. 
            I love building applications that make a difference and solving complex challenges 
            with elegant, user-centered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Building the Future, One Line at a Time
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend and backend development, 
              I specialize in creating robust, scalable applications using cutting-edge 
              technologies. My journey in software development has been driven by 
              curiosity and a commitment to continuous learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing code that not only works but also tells a story - 
              clean, documented, and maintainable. Whether it's crafting pixel-perfect 
              user interfaces or architecting efficient backend systems, I approach 
              every project with attention to detail and a focus on user experience.
            </p>
          </div>

          <div className="relative">
            {/* Profile Image */}
            <div className="mb-6 relative">
            <div className="w-64 h-64 mx-auto bg-gradient-subtle rounded-2xl border border-border overflow-hidden hover:shadow-glow transition-all duration-300">
  <img 
    src={profilePhoto} 
    alt="Mugerwa Shadrach - Profile Photo"
    className="w-full  object-cover"
  />
</div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full border-2 border-background animate-glow-pulse" />
            </div>

            <Card className="p-8 bg-gradient-subtle border-border hover:shadow-elegant transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-success rounded-full animate-glow-pulse" />
                  <span className="text-success font-medium">Available for new opportunities</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-semibold text-foreground">Uganda, East Africa</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-semibold text-foreground">3+ Years in Development</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Focus Areas</p>
                  <p className="font-semibold text-foreground">Web Development, Mobile Apps, API Design</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Highlights Section */}
        {isMobile ? (
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {highlights.map((highlight, index) => (
                <CarouselItem key={highlight.title}>
                  <Card className="p-6 bg-card border-border hover:border-primary hover:shadow-glow transition-all duration-300 group">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <highlight.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="p-6 bg-card border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <highlight.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;