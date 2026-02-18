import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink } from "lucide-react";

const CertificatesPage = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2024",
      description: "Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and database management.",
      credentialId: "FCC-12345",
      verifyUrl: "#",
      skills: ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS"]
    },
    {
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Demonstrates expertise in developing and maintaining applications on the AWS platform.",
      credentialId: "AWS-67890",
      verifyUrl: "#",
      skills: ["AWS", "Lambda", "DynamoDB", "S3", "CloudFormation"]
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      description: "Advanced React concepts, hooks, state management, and modern development practices.",
      credentialId: "META-54321",
      verifyUrl: "#",
      skills: ["React", "Redux", "TypeScript", "Testing", "Performance"]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "2023",
      description: "Covers fundamental programming concepts, algorithms, and data structures using JavaScript.",
      credentialId: "FCC-98765",
      verifyUrl: "#",
      skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"]
    }
  ];

  return (
    <div className="min-h-screen bg-background" id="certificates">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Certifications & Achievements
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional certifications and achievements that validate my technical skills and continuous learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card key={cert.credentialId} className="p-8 bg-card border-border hover:border-primary hover:shadow-elegant transition-all duration-300 group">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/30">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Skills Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-secondary/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        ID: <span className="font-mono">{cert.credentialId}</span>
                      </p>
                      <Button variant="outline" size="sm" className="border-border hover:border-primary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificatesPage;