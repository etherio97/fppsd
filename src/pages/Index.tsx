import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import AboutSection from "@/components/AboutSection";
import DeanSection from "@/components/DeanSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <HeroSection />
        <ProgramsSection />
        <AboutSection />
        <DeanSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
