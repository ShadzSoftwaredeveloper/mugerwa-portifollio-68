import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;