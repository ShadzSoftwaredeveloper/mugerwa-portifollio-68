import { Github, Linkedin, Mail, Heart } from "lucide-react";
import logoImage from "@/assets/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Github,
    href: "#",
    label: "GitHub"
  }, {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: Mail,
    href: "mailto:shadrach.mugerwa@email.com",
    label: "Email"
  }];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <button onClick={scrollToTop} className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <img src={logoImage} alt="Logo" className="w-10 h-10 rounded-lg" />
              <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Mugerwa Shadrach
              </span>
            </button>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer passionate about creating exceptional digital experiences 
              and solving complex problems through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                <button key={item} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              
              
              
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="p-2 bg-secondary rounded-lg border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group">
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>)}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Mugerwa Shadrach. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;