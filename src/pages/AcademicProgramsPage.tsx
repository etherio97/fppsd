import Header from "@/components/Header";
import Footer from "@/components/Footer";
import coverImage from "@/assets/cover-dis.jpg";
import { BookOpen, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: Globe,
    title: "Development Innovation & Sustainability",
    abbr: "DIS",
    description:
      "Addressing complex development challenges through innovative and interdisciplinary approaches.",
    href: "/development-innovation-and-sustainability",
  },
  {
    icon: Users,
    title: "Gender and Development Studies",
    abbr: "GDS",
    description:
      "Advancing gender equality and social justice through critical analysis and action-oriented research.",
    href: "/gender-and-development-studies",
  },
  {
    icon: BookOpen,
    title: "Public Policy",
    abbr: "PP",
    description:
      "Shaping effective public policies for governance, sustainability, and inclusive development.",
    href: "/public-policy",
  },
];

const AcademicProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        {/* hero section */}
        <section className="relative h-[60vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src={coverImage} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary/60 to-primary-dark/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up-delay">
              Academic Programs
            </h2>
          </div>
        </section>

        {/* programs */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {programs.map((program) => (
                <Link
                  key={program.title}
                  className="group bg-card rounded-xl border border-border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  to={program.href}
                >
                  <div className="w-14 h-14 rounded-lg bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <program.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  {program.abbr && (
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">
                      {program.abbr}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-card-foreground mt-1 mb-3 leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicProgramsPage;
