import FloatingBackground from "@/components/FloatingBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <FloatingBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
