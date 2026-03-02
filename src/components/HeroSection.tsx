import heroCampus from "@/assets/hero-campus.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="AIT Campus aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary/60 to-primary-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary-foreground/70 tracking-[0.3em] uppercase text-sm md:text-base mb-6 animate-fade-up font-body">
          Asian Institute of Technology
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up-delay">
          Faculty of Public Policy
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 animate-fade-up-delay italic font-heading">
          "Empowering future leaders through innovative policy research and sustainable development"
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up-delay-2">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Explore Programs
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
