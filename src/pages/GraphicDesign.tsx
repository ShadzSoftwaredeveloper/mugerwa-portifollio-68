import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Palette, Layers, Zap } from "lucide-react";

const GraphicDesign = () => {
  const designProjects = [
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo, color palette, and brand guidelines",
      image: "/placeholder.svg",
      category: "Branding",
      tools: ["Adobe Illustrator", "Photoshop", "Figma"],
      featured: true
    },
    {
      id: 2,
      title: "Digital Marketing Materials",
      description: "Social media graphics, banners, and promotional materials for digital campaigns",
      image: "/placeholder.svg",
      category: "Digital",
      tools: ["Photoshop", "After Effects", "Canva"],
      featured: true
    },
    {
      id: 3,
      title: "Print Design Collection",
      description: "Business cards, brochures, and poster designs for various clients",
      image: "/placeholder.svg",
      category: "Print",
      tools: ["InDesign", "Illustrator", "Photoshop"],
      featured: false
    },
    {
      id: 4,
      title: "UI/UX Design Mockups",
      description: "User interface designs and user experience wireframes for web applications",
      image: "/placeholder.svg",
      category: "UI/UX",
      tools: ["Figma", "Sketch", "Adobe XD"],
      featured: false
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Branding":
        return Palette;
      case "Digital":
        return Zap;
      case "Print":
        return Layers;
      case "UI/UX":
        return Palette;
      default:
        return Palette;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Branding":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Digital":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Print":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "UI/UX":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const featuredProjects = designProjects.filter(project => project.featured);
  const otherProjects = designProjects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Graphic Design
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Creative visual solutions that communicate your brand's story and captivate your audience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Featured Design Work
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <Card key={project.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-muted/30 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(project.category)}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            More Design Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <Card key={project.id} className="group hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video bg-muted/30 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(project.category)}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate on creating stunning visual designs that make your brand stand out
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GraphicDesign;
