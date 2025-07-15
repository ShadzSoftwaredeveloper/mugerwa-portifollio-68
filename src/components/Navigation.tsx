import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#', type: 'scroll' },
    { label: 'About', href: '#about', type: 'scroll' },
    { label: 'Skills', href: '#skills', type: 'scroll' },
    { label: 'Projects', href: '#quick-access', type: 'scroll' },
    { label: 'Contact', href: '#contact', type: 'scroll' }
  ];

  const location = useLocation();
  
  const handleNavClick = (item: typeof menuItems[0]) => {
    if (item.type === 'scroll') {
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first then scroll
        window.location.href = '/' + item.href;
      } else {
        // If on home page, scroll directly
        if (item.href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={logoImage} 
              alt="Mugerwa Shadrach Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mugerwa Shadrach
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </button>
              )
            ))}
            <Button 
              onClick={() => handleNavClick({ label: 'Contact', href: '#contact', type: 'scroll' })}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <Button 
                onClick={() => handleNavClick({ label: 'Contact', href: '#contact', type: 'scroll' })}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;