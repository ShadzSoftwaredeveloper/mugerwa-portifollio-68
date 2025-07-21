import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      
      {/* Quick Access Section */}
      <section id="explore-work" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Explore My Work
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover my projects and professional achievements
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/projects" className="group">
              <div className="p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-elegant transition-all duration-300">
                <FolderOpen className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  Video Projects
                </h3>
                <p className="text-muted-foreground mb-6">
                  Explore my video production and visual effects work
                </p>
                <Button className="bg-gradient-primary hover:shadow-glow">
                  View Portfolio <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Link>
            
            <Link to="/coding-projects" className="group">
              <div className="p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-elegant transition-all duration-300">
                <FolderOpen className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  Coding Projects
                </h3>
                <p className="text-muted-foreground mb-6">
                  Explore my software development and programming projects
                </p>
                <Button variant="secondary" className="hover:shadow-glow">
                  View Code <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Link>
            
            <Link to="/graphic-design" className="group">
              <div className="p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-elegant transition-all duration-300">
                <Award className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  Graphic Design
                </h3>
                <p className="text-muted-foreground mb-6">
                  Creative design projects and visual branding work
                </p>
                <Button variant="outline" className="border-border hover:border-primary">
                  View Designs <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      
      <Footer />
    </div>
  );
};

export default Index;
