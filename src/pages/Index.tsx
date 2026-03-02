import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Globe, Award } from "lucide-react";
import mainCover from "@/assets/main-cover.jpg";
import missionImage from "@/assets/mission.avif";
import visionImage from "@/assets/vision.avif";
import deanPortrait from "@/assets/dean.jpg";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: Globe,
    title: "Development Innovation & Sustainability",
    abbr: "DIS",
    description:
      "Addressing complex development challenges through innovative and interdisciplinary approaches.",
    href: "development-innovation-and-sustainability",
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={mainCover}
              alt="AIT Campus aerial view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary/60 to-primary-dark/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <p className="text-primary-foreground/70 tracking-[0.3em] uppercase text-sm md:text-base mb-6 animate-fade-up font-body">
              Asian Institute of Technology
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up-delay">
              Faculty of Public Policy & Sustainable Development
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 animate-fade-up-delay italic">
              "Empowering future leaders through innovative policy research and
              sustainable development"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up-delay-2">
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Explore Programs
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="text-base px-8 py-6"
              >
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

        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                What We Offer
              </p>
              <h2 className="section-title text-foreground">
                Academic Programs
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Discover our interdisciplinary programs that prepare leaders to
                address the world's most pressing public policy challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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

        {/* FPSD at a Glance */}
        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto">
            <div className="grid  items-center">
              <div className="order-2 lg:order-1">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                  About Us
                </p>
                <h2 className="section-title text-foreground mb-6">
                  FPP at a Glance
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Faculty of Public Policy was established by building on
                  the Asian Institute of Technology’s long-standing strengths in
                  development studies, governance, and interdisciplinary
                  research, while responding to rapidly evolving global and
                  regional policy demands. Across Asia, governments and
                  institutions face complex and interconnected
                  challenges—including climate change, environmental
                  degradation, social and gender inequalities, forced
                  displacement, and uneven development—that require integrated,
                  evidence-based, and innovative policy responses.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Faculty is grounded in international policy frameworks
                  such as the United Nations Sustainable Development Goals
                  (SDGs), which emphasize policy coherence across economic,
                  social, and environmental dimensions. In parallel, the Paris
                  Agreement and scientific assessments of the Intergovernmental
                  Panel on Climate Change (IPCC) highlight the urgency of
                  translating climate science into effective public policy,
                  governance reform, and adaptive development strategies,
                  particularly in climate-vulnerable regions of Asia.
                  Concurrently, the widespread outbreak of war and conflicts
                  have affected marginalized communities the most, further
                  pushing them to deeper vulnerability. Asia’s development and
                  public policy priorities are increasingly shaped by the need
                  to sustain inclusive growth while closing infrastructure and
                  human-capital gaps, managing rapid urbanisation and
                  demographic transitions, and steering digital transformation
                  amid shifting trade patterns and geopolitical uncertainty.
                  Together, these changes in national and regional priorities
                  warrant renewed public policy action to advance inclusion,
                  reduce inequality, and strengthen social justice.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The establishment of the Faculty aligns closely with global
                  efforts to strengthen evidence-informed policy making and
                  institutional capacity, as promoted by the United Nations
                  Development Programme (UNDP), the Organisation for Economic
                  Co-operation and Development (OECD) through its Policy
                  Coherence for Sustainable Development framework, and the World
                  Bank. Social justice, gender equality, and inclusion further
                  underpin the Faculty’s mandate, reflecting priorities advanced
                  by UN Women. Regional and global policy responses to
                  migration, displacement, and human security—led by the United
                  Nations High Commissioner for Refugees (UNHCR) and the
                  International Organization for Migration (IOM)—also inform the
                  Faculty’s interdisciplinary focus. The Faculty, taking
                  advantage of the locational benefit situated in Thailand, is
                  committed to working closely with civil society organizations
                  and community-based organizations across the Global South.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Faculty offers three closely integrated academic
                  programs—Development, Innovation and Sustainability; Gender
                  and Development Studies; and Public Policy—which together
                  provide strong conceptual foundations, interdisciplinary
                  perspectives, and analytical competencies. These programs
                  prepare graduates for diverse career pathways as policy
                  leaders and advisors, development and programme managers,
                  practitioners, activists, and researchers in governments,
                  international organizations, civil society, academic and
                  research institutions, and the private sector.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A defining strength of the Faculty is its ecosystem of
                  interdisciplinary research initiatives and centers focusing on
                  environmental sustainability, climate change, governance
                  innovation, and social and gender inequality in regional and
                  global contexts. These research platforms are embedded in
                  teaching and supervision, enabling students to engage in
                  research projects, field-based learning, policy analysis, and
                  international collaboration, and to develop the capacity to
                  bridge science, policy, and practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={missionImage}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                  Our Mission
                </p>
                <h2 className="section-title text-foreground mb-6">Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The mission of the Faculty of Public Policy is to advance
                  evidence-based, inclusive, and innovative public policy and
                  governance through grounded high-quality education,
                  interdisciplinary research, and policy engagement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Building on its long-standing strengths in development studies
                  and interdisciplinary research, the Faculty is committed to
                  generating and applying scientific knowledge to address
                  environmental sustainability, climate change, social and
                  gender equality and justice, human rights, peace, governance
                  transformations, as well as broader development challenges in
                  Asia and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                  Our Vision
                </p>
                <h2 className="section-title text-foreground mb-6">Vision</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Faculty of Public Policy envisions becoming a leading
                  regional center of excellence in public policy and governance,
                  recognized for integrating scientific research,
                  interdisciplinary scholarship, and policy/program practices.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By strengthening the interface between knowledge and
                  decision-making, the Faculty aims to shape sustainable,
                  equitable, fair, and resilient development pathways and to
                  cultivate future policy leaders, researchers, practitioners
                  and advocates/activists.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={visionImage}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Leadership
            </p>
            <h2 className="section-title text-foreground mb-12">
              Dean's Foreword
            </h2>

            <div className="flex flex-col items-center">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl border-4 border-primary/20 mb-8">
                <img
                  src={deanPortrait}
                  alt="Dean portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic mb-8 max-w-2xl">
                It is with great pride that I welcome you to the Faculty of
                Public Policy and Sustainable Development at the Asian Institute
                of Technology (AIT).
              </blockquote>

              <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic mb-8 max-w-2xl">
                The Faculty was established at a time of profound global
                transformation. Today’s world is shaped by geopolitical
                uncertainty, climate emergencies, rapid technological change,
                and deep social and economic inequalities. These global shifts
                are reflected in environmental degradation, widening gender and
                social disparities, regional conflicts, population displacement,
                and uneven development across and within nations.
              </blockquote>
              <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic mb-8 max-w-2xl">
                Such challenges are reshaping how public policy is conceived,
                implemented, and evaluated. They require leaders, practitioners,
                researchers, and advocates who can navigate complexity with
                integrity, analytical rigor, and compassion.
              </blockquote>
              <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic mb-8 max-w-2xl">
                Building on AIT’s long-standing strengths in development
                studies, governance, and interdisciplinary scholarship, the
                Faculty is committed to advancing innovative, inclusive, and
                evidence-based policy solutions. We aim to prepare a new
                generation of policy leaders capable of bridging research and
                practice, science and governance, and local realities with
                global policy debates.
              </blockquote>
              <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic mb-8 max-w-2xl">
                At our Faculty, policy is understood as both an analytical and
                ethical endeavor—one that connects research, leadership,
                advocacy, and implementation to generate meaningful societal
                impact. Through strong partnerships with governments,
                international organizations, development agencies, civil
                society, and academic networks worldwide, we foster a vibrant
                learning environment that integrates theory with practice.
              </blockquote>
              <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic mb-8 max-w-2xl">
                As Dean, I am committed to nurturing an inclusive,
                collaborative, and intellectually dynamic academic community. I
                warmly invite you to join us in shaping more just, resilient,
                and sustainable futures.
              </blockquote>

              <div>
                <p className="text-xl font-semibold text-foreground">
                  Assoc. Prof. Dr. Thi Phuoc Lai Nguyen
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Dean, Faculty of Public Policy and Sustainable Development
                </p>
                <div className="mt-4 w-24 h-0.5 bg-primary/30 mx-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
