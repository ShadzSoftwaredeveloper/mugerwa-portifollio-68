import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Video, Camera, Zap, Target, Users, TrendingUp, Eye, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const videoProjects = [
    {
      title: "Brand Storytelling Campaign",
      description: "Multi-channel native content campaign featuring cinematic storytelling with advanced visual effects and color grading for premium brand positioning.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      services: ["Visual Effects", "Color Grading", "Motion Graphics", "Sound Design"],
      duration: "2:30",
      views: "2.5M",
      category: "commercial",
      featured: true
    },
    {
      title: "Social Media Content Series",
      description: "High-engagement social media content optimized for multiple platforms with custom animations, transitions, and platform-specific formatting.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
      services: ["Social Editing", "Motion Graphics", "Platform Optimization", "Thumbnails"],
      duration: "0:15-1:00",
      views: "5.2M",
      category: "social",
      featured: true
    },
    {
      title: "Product Launch Video",
      description: "Cinematic product showcase with 3D animations, advanced compositing, and dynamic visual effects to highlight product features and benefits.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=600&fit=crop",
      services: ["3D Animation", "Compositing", "Product Visualization", "VFX"],
      duration: "1:45",
      views: "1.8M",
      category: "product",
      featured: true
    },
    {
      title: "Influencer Collaboration",
      description: "Authentic influencer content with seamless brand integration, custom graphics, and optimized editing for maximum engagement across platforms.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop",
      services: ["Influencer Editing", "Brand Integration", "Graphics", "Multi-format"],
      duration: "0:30-2:00",
      views: "3.1M",
      category: "influencer",
      featured: false
    },
    {
      title: "Event Highlight Reel",
      description: "Dynamic event coverage with multi-camera editing, live-action effects, and compelling narrative structure to capture key moments.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
      services: ["Multi-cam Editing", "Live Effects", "Audio Mixing", "Highlights"],
      duration: "3:15",
      views: "950K",
      category: "event",
      featured: false
    },
    {
      title: "Corporate Training Series",
      description: "Educational content series with professional presentation, custom animations, and clear visual communication for corporate training programs.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      services: ["Educational Editing", "Animations", "Graphics", "Subtitles"],
      duration: "5:00-15:00",
      views: "780K",
      category: "corporate",
      featured: false
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'commercial': return <Target className="w-4 h-4" />;
      case 'social': return <TrendingUp className="w-4 h-4" />;
      case 'product': return <Zap className="w-4 h-4" />;
      case 'influencer': return <Users className="w-4 h-4" />;
      case 'event': return <Camera className="w-4 h-4" />;
      default: return <Video className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'commercial': return 'bg-primary/10 text-primary border-primary/30';
      case 'social': return 'bg-accent/10 text-accent border-accent/30';
      case 'product': return 'bg-success/10 text-success border-success/30';
      case 'influencer': return 'bg-destructive/10 text-destructive border-destructive/30';
      case 'event': return 'bg-secondary/50 text-secondary-foreground border-secondary';
      default: return 'bg-muted/50 text-muted-foreground border-muted';
    }
  };

  const featuredProjects = videoProjects.filter(p => p.featured);
  const otherProjects = videoProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 px-4 py-2">
              <Video className="w-4 h-4 mr-2" />
              Video Production Agency
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg leading-tight">
            Explore the Best Video Production Projects
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            With special visual effects, boost your brand with top-notch visuals and expert storytelling
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow px-8 py-4 text-lg"
              onClick={() => window.open('https://youtube.com', '_blank')}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Our Reel
            </Button>
            <Link to="/#contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 text-lg"
              >
                <Target className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
            </Link>
          </div>
          
          {/* Agency Description */}
          <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Influencer & Content Production Agency
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              As an influencer and content production agency, we specialize in producing multi-channel 
              native content and campaign assets. Video editing is very crucial, and every aspect is 
              very important towards business marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Video Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional video production showcasing special visual effects, expert storytelling, 
              and multi-platform optimization for maximum business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group overflow-hidden bg-card border-border hover:border-primary hover:shadow-elegant transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  
                  {/* Category Badge */}
                  <Badge 
                    className={`absolute top-4 left-4 ${getCategoryColor(project.category)} border`}
                  >
                    {getCategoryIcon(project.category)}
                    <span className="ml-1 capitalize">{project.category}</span>
                  </Badge>

                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm">
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded px-2 py-1">
                      <Clock className="w-3 h-3" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded px-2 py-1">
                      <Eye className="w-3 h-3" />
                      {project.views}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <Badge 
                        key={service}
                        variant="secondary"
                        className="text-xs bg-secondary/50 text-secondary-foreground"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:shadow-glow"
                      onClick={() => window.open('https://youtube.com', '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-border hover:border-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-foreground">More Video Projects</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card 
                  key={project.title}
                  className="p-6 bg-card border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>
                      <Badge className={`${getCategoryColor(project.category)} border text-xs`}>
                        {getCategoryIcon(project.category)}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {project.views}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.services.slice(0, 3).map((service) => (
                        <Badge 
                          key={service}
                          variant="secondary"
                          className="text-xs bg-secondary/30"
                        >
                          {service}
                        </Badge>
                      ))}
                      {project.services.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-secondary/30">
                          +{project.services.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="p-2 h-8">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2 h-8">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <Card className="max-w-4xl mx-auto p-12 bg-gradient-subtle border-border">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Ready to Boost Your Brand?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Let's create compelling video content that drives engagement and delivers results. 
                  Every aspect of video editing is crucial for business marketing success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/#contact">
                    <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                      <Video className="w-5 h-5 mr-2" />
                      Start Your Project
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="border-border hover:border-primary">
                    <Camera className="w-5 h-5 mr-2" />
                    View Portfolio
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
