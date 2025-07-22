import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ExternalLink, Github, Code, Laptop, Globe, Database } from "lucide-react";

const CodingProjects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Task Management System",
      description: "Real-time collaborative task management with drag-and-drop functionality",
      technologies: ["TypeScript", "React", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://taskmanager-app.netlify.app",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      title: "API Gateway Service",
      description: "Microservices API gateway with authentication and rate limiting",
      technologies: ["Node.js", "Redis", "Docker", "JWT", "Nginx"],
      github: "https://github.com/yourusername/api-gateway-service",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization and analytics",
      technologies: ["React", "D3.js", "WebSocket", "Python", "FastAPI"],
      github: "https://github.com/yourusername/analytics-dashboard",
      live: "https://analytics-dashboard.herokuapp.com",
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80')"}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Software Development
            <span className="block text-primary drop-shadow-lg">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-8 drop-shadow-md">
            Explore my coding projects showcasing full-stack development, 
            modern technologies, and innovative solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Carousel */}
          <div className="block md:hidden">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-4 basis-[85%]">
                    <Card className="group hover:shadow-elegant hover:border-primary transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                            {project.icon}
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-muted-foreground">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                          {project.live && (
                            <Button
                              size="sm"
                              className="flex-1 bg-gradient-primary hover:shadow-glow"
                              onClick={() => window.open(project.live, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-elegant hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    {project.live && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:shadow-glow"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaborating on a project or need custom software development? 
            Let's discuss your ideas and bring them to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CodingProjects;