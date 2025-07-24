import { Github, Linkedin, Mail, Share2, MessageCircle, Facebook, Sun, Moon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const SocialMediaFloat = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const allIcons = [
    {
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/ShadzSoftwaredeveloper",
      label: "GitHub",
      isShare: false,
      isTheme: false
    },
    {
      icon: <MessageCircle className="h-4 w-4" />,
      href: "https://wa.me/0769796562",
      label: "WhatsApp",
      isShare: false,
      isTheme: false
    },
    {
      icon: <Share2 className="h-5 w-5" />,
      href: "#",
      label: "Share",
      isShare: true,
      isTheme: false
    },
    {
      icon: <Video className="h-4 w-4" />,
      href: "https://www.tiktok.com/@shadzmedia.ug",
      label: "TikTok",
      isShare: false,
      isTheme: false
    },
    {
      icon: <Facebook className="h-4 w-4" />,
      href: "https://www.facebook.com/mugerwa.shadrch/",
      label: "Facebook",
      isShare: false,
      isTheme: false
    },
    {
      icon: mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />,
      href: "#",
      label: "Toggle Theme",
      isShare: false,
      isTheme: true
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://www.linkedin.com/in/shadz-mediaug-121802369/",
      label: "LinkedIn",
      isShare: false,
      isTheme: false
    },
    {
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:your.mugerwashadrach@gmail.com",
      label: "Email",
      isShare: false,
      isTheme: false
    }
  ];

  return (
    <div 
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* All icons in circular arrangement */}
      {allIcons.map((item, index) => {
        const angle = (index * 45) - 90; // 45 degrees apart for 8 icons, starting from top
        const radius = isHovered ? 50 : 0;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        const isVisible = item.isShare || isHovered;
        
        return (
          <Button
            key={index}
            variant="outline"
            size="icon"
            asChild={!item.isShare && !item.isTheme}
            onClick={item.isTheme ? () => setTheme(theme === "dark" ? "light" : "dark") : undefined}
            className={`absolute h-12 w-12 rounded-full bg-card border-border hover:border-primary shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-110 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            } ${item.isShare ? 'z-10' : ''}`}
            style={{
              transform: `translate(${x}px, ${y}px) ${isHovered ? 'rotate(360deg)' : 'rotate(0deg)'}`,
              transitionDelay: `${index * 80}ms`,
            }}
          >
            {item.isShare || item.isTheme ? (
              <span className="text-primary">
                {item.icon}
              </span>
            ) : (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <span className="text-primary hover:text-primary-foreground">
                  {item.icon}
                </span>
              </a>
            )}
          </Button>
        );
      })}
    </div>
  );
};

export default SocialMediaFloat;