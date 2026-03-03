import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import coverImage from "@/assets/cover-dis.jpg";
import disImage1 from "@/assets/dis-1.avif";
import devlopmentPlanningManagementImage from "@/assets/gds-human-right.avif";
import migrationWorkImage from "@/assets/gds-MIGRATION-WORK-.avif";
import povertyReductionImage from "@/assets/P1001020.avif";
import developmentEconomicsImage from "@/assets/gds-GENDER-ANALYSIS-.avif";
import institutionsNGOsImage from "@/assets/531007052_1172727471545110_4012304429138477296_n.avif";
import urbanRuralImage from "@/assets/IMG_7018.avif";

const focusAreas = [
  {
    title: "Development Planning & Management",
    src: devlopmentPlanningManagementImage,
  },
  {
    title: "Development Policy, and Governance",
    src: migrationWorkImage,
  },
  {
    title: "Poverty Reduction & Sustainable Livelihoods",
    src: povertyReductionImage,
  },
  {
    title: "Development Economics & Sustainability",
    src: developmentEconomicsImage,
  },
  {
    title: "Development, Equity, Inclusion & Social Justice",
    src: urbanRuralImage,
  },
  {
    title: "Institutions, NGOs & Development Management",
    src: institutionsNGOsImage,
  },
  {
    title: "Urban–Rural Linkages & Rural Revitalization",
    src: urbanRuralImage,
  },
  {
    title: "Socio-Ecological Systems & Resilience",
    src: urbanRuralImage,
  },
  {
    title: "Social Innovation & Sustainable Development",
    src: urbanRuralImage,
  },
  {
    title: "Sustainable Agriculture & Rural Development",
    src: urbanRuralImage,
  },
  {
    title: "Climate, Environmental & Social Justice",
    src: urbanRuralImage,
  },
];

const DISPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
              Development Innovation and Sustainability
            </h2>
          </div>
        </section>

        {/* about */}
        <section className="section-padding bg-secondary/50 ">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Development Innovation and Sustainability (DIS) academic
                  program is a consolidated and forward-looking initiative of
                  the Asian Institute of Technology (AIT), developed in response
                  to increasingly complex development challenges in Asia and
                  beyond. It integrates the strengths of two established
                  programs—Development Planning, Management and Innovation
                  (DPMI) and Development and Sustainability (DS)—into a
                  coherent, interdisciplinary, and practice-oriented program
                  aligned with the SDGs and the people–planet–prosperity nexus.
                  Contemporary development challenges—including environmental
                  degradation, climate variability, social inequality, food
                  insecurity, and rapid socio-economic transformation—require
                  professionals who can work across policy, innovation,
                  governance, and sustainability domains. Rooted in AIT’s
                  long-standing tradition of development planning, DIS provides
                  strong foundations in policy, planning, project management,
                  and participatory practice, complemented by an
                  interdisciplinary sustainability perspective integrating
                  social, economic, and environmental dimensions.
                </p>
                <div
                  className={`transition-all duration-700 ease-in-out ${isExpanded ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
                >
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Core teaching and research areas include public policy and
                    sustainable development, development planning and
                    implementation, innovation systems for sustainability,
                    climate change adaptation and resilience, environmental
                    governance, socio-ecological systems and rural development,
                    and inclusive and equitable development. The program draws
                    on systems thinking, political economy, institutional
                    theory, resilience and transition frameworks, and innovation
                    and development studies, while emphasizing methodological
                    rigor, ethical research practice, reflexivity, and critical
                    thinking.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    DIS equips researchers, managers, practitioners, and
                    policymakers with the theoretical and practical knowledge
                    and competences needed to design, implement, and evaluate
                    inclusive and sustainable development interventions across
                    diverse contexts.
                  </p>
                </div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>

              <div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={disImage1}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* areas of specialization */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Areas of specialization
            </h2>
            <div className="space-y-4 ">
              <div className="border border-border rounded-lg">
                <div className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors">
                  <span className="text-lg font-semibold">
                    Development Planning, Management and Innovation (DPMI)
                  </span>
                  <span className="text-muted-foreground">
                    Sustainable Development
                  </span>
                </div>
              </div>
              <div className="border border-border rounded-lg">
                <div className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors">
                  <span className="text-lg font-semibold">
                    Environment, Society and Governance (ESG)
                  </span>
                  <span className="text-muted-foreground">
                    Global Governance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* focus area */}
        <section className="section-padding  bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Focus Area</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {focusAreas.map((area) => (
                <div className="border border-border rounded-lg overflow-hidden transition hover:shadow-lg">
                  <img
                    src={area.src}
                    className="w-full aspect-video object-fill -mt-1"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-sm">{area.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* preferred background */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Preferred Background
                </h2>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-muted-foreground leading-relaxed">
                  DIS welcomes applicants from diverse academic disciplines and
                  professional backgrounds, especially those with interests in
                  development planning, public policy and governance,
                  sustainability and climate resilience, social innovation,
                  socio-ecological systems, rural and agricultural development,
                  and climate, environmental, and social justice. Candidates
                  seeking interdisciplinary knowledge and skills for careers in
                  academia, government, NGOs/CSOs, international organizations,
                  or the public and private sectors are encouraged to apply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* course structure */}
        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Course Structure
                </h2>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <ol className="space-y-2 text-muted-foreground">
                  <li>1. Development Policy and Practice</li>
                  <li>2. Development Planning Workshop</li>
                  <li>
                    3. Social Innovation, Community Business and Sustainability
                  </li>
                  <li>4. Community Development Planning and Management</li>
                  <li>5. Science, Society and Environmental Governance</li>
                  <li>6. Social Impact Assessment</li>
                  <li>7. Development Project Planning and Management</li>
                  <li>8. Economics of Development and Policy</li>
                  <li>9. Agriculture Development and Social Innovation</li>
                  <li>10. Gender, Climate Change and Migration</li>
                  <li>11. Public Policy</li>
                  <li>
                    12. NGO Management, Policy and Development Administration
                  </li>
                  <li>
                    13. Socio-ecological Systems Approach and Adaptive
                    Governance
                  </li>
                  <li>14. Qualitative Research Methods for Development</li>
                  <li>15. Quantitative Research Methods for Development</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DISPage;
