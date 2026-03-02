import { BookOpen, Users, Globe, Award } from "lucide-react";

const programs = [
  {
    icon: Globe,
    title: "Development Innovation & Sustainability",
    abbr: "DIS",
    description:
      "Addressing complex development challenges through innovative and interdisciplinary approaches.",
  },
  {
    icon: Users,
    title: "Gender and Development Studies",
    abbr: "GDS",
    description:
      "Advancing gender equality and social justice through critical analysis and action-oriented research.",
  },
  {
    icon: BookOpen,
    title: "Public Policy",
    abbr: "PP",
    description:
      "Shaping effective public policies for governance, sustainability, and inclusive development.",
  },
  {
    icon: Award,
    title: "Degree Offerings",
    abbr: "",
    description:
      "Master's and Doctoral programs designed for aspiring scholars and professionals.",
  },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="section-title text-foreground">Academic Programs</h2>
          <p className="section-subtitle mx-auto mt-4">
            Discover our interdisciplinary programs that prepare leaders to
            address the world's most pressing public policy challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group bg-card rounded-xl border border-border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
