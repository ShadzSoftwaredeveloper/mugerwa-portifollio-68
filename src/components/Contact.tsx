import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mugerwashadrach@gmail.com",
      link: "mailto:mugerwashadrach@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+256 740 397 395",
      link: "tel:+25670397395"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kampala, Uganda",
      link: "https://maps.app.goo.gl/wVktjcoqeczvk2Mq9"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/ShadzSoftwaredeveloper",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/shadz-mediaug-121802369/",
      color: "hover:text-accent"
    },
    {
      icon: Twitter,
      name: "Facebook",
      url: "https://www.facebook.com/mugerwa.shadrch/",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border hover:shadow-elegant transition-all duration-300">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Send a Message</h3>
                <p className="text-muted-foreground">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary"
                  required
                />
                
                <Textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary min-h-[120px] resize-none"
                  required
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-subtle border-border">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="flex items-center gap-4 p-3 rounded-lg bg-card/50 border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
                    >
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card border-border">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">Follow Me</h3>
                <p className="text-muted-foreground">
                  Stay connected and follow my journey in tech and development.
                </p>
                
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-secondary rounded-lg border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-inherit transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="p-6 bg-gradient-accent border-border">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-glow-pulse" />
                  <span className="font-semibold text-accent-foreground">Available for Work</span>
                </div>
                <p className="text-sm text-accent-foreground/80">
                  Currently accepting new projects and collaborations
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;