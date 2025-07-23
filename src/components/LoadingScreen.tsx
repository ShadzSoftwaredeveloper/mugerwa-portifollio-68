import { useEffect, useState } from "react";
import logoImage from "@/assets/logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start fade out animation
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Wait for fade out to complete
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated Logo */}
      <div className="relative mb-8">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-xl animate-glow-pulse"></div>
        
        {/* Logo container */}
        <div className="relative w-32 h-32 rounded-full bg-gradient-primary p-1 animate-float">
          <div className="w-full h-full rounded-full bg-background p-4 flex items-center justify-center">
            <img 
              src={logoImage} 
              alt="Mugerwa Shadrach Logo" 
              className="w-full h-full object-contain animate-[spin_3s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>

      {/* Brand name with typing effect */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
          Mugerwa Shadrach
        </h1>
        <p className="text-muted-foreground mt-2 animate-slide-in">
          Digital Portfolio
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress percentage */}
      <p className="text-sm text-muted-foreground mt-4 font-mono">
        {progress}%
      </p>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary-glow rounded-full animate-ping delay-500"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
