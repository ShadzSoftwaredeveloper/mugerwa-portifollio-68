import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",   "TypeScript", "JavaScript", "HTML5", "CSS3", 
        "Tailwind CSS",  "React Router"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Backend Development", 
      skills: [
        "Node.js", "Express.js",  "FastAPI",  
        "MongoDB",  "REST APIs", 
      ],
      gradient: "bg-gradient-accent"
    },
    {
      title: "Mobile Development",
      skills: [
        "React Native", "Flutter", "Expo", "Android Studio", "iOS Development",
        "Cross-platform", "Native APIs", "Push Notifications"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Motion Designer",
      skills: [
        "Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify", "CI/CD", 
        "Linux", "Bash", "VS Code", "Figma", "Postman"
      ],
      gradient: "bg-gradient-accent"
    },
    {
      title: "UI & UX Design",
      skills: [
        "Figma", "Adobe XD", "Sketch", "Prototyping", "Wireframing", 
        "User Research", "Design Systems", "Responsive Design", "Accessibility"
      ],
      gradient: "bg-gradient-primary"
    }
  ];


  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks, 
            constantly evolving with industry trends and best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-8 bg-card border-border hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full ${category.gradient}`} />
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;