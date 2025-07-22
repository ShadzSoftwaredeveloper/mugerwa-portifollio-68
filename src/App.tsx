
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialMediaFloat from "@/components/SocialMediaFloat";
import PWAInstall from "@/components/PWAInstall";
import Index from "./pages/Index";
import ProjectsPage from "./pages/Projects";
import CodingProjects from "./pages/CodingProjects";
import CertificatesPage from "./pages/Certificates";
import GraphicDesign from "./pages/GraphicDesign";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SocialMediaFloat />
        <PWAInstall />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/coding-projects" element={<CodingProjects />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
