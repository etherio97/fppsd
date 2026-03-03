import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import coverImage from "@/assets/cover-dis.jpg";
import disImage1 from "@/assets/eec192_9d011763298e490081957979d97d80c4~mv2.avif";
import devlopmentPlanningManagementImage from "@/assets/gds-human-right.avif";
import migrationWorkImage from "@/assets/gds-MIGRATION-WORK-.avif";

const focusAreas = [
  {
    title: "Gender transformative approach to development",
    src: devlopmentPlanningManagementImage,
  },
  {
    title:
      "Gender analysis/ assessment of policy/ programs/ organizations/ communities",
    src: migrationWorkImage,
  },
  {
    title: "Gender and forced displacement/ migration",
    src: disImage1,
  },
  {
    title: "Gender and culture",
    src: disImage1,
  },
  {
    title: "Gender and labor/ care work",
    src: disImage1,
  },
  {
    title: "Gender politics and human rights",
    src: disImage1,
  },
  {
    title: "Science, technology and gender",
    src: disImage1,
  },
  {
    title: "Gender based violence and social justice",
    src: disImage1,
  },
  {
    title: "Gender, peace and security",
    src: disImage1,
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
              Gender and Development Studies (GDS)
            </h2>
          </div>
        </section>

        {/* about */}
        <section className="section-padding bg-secondary/50 ">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gender and Development Studies (GDS) develops scholars,
                  analysts and practitioners who can integrate gender approaches
                  in to development planning and management, and conduct
                  original gender and development-related research for advancing
                  development goals, including the Sustainable Development
                  Goals, globally and in Asia. As an academic arm of
                  community-based efforts for gender equality and for the
                  advancement of rights and inclusion of women and individuals
                  of all sexual orientation and gender identity expression, GDS
                  aims to be a center of excellence in gender and development
                  studies by integrating gender equality as a key intellectual
                  perspective and ethical concern in sustainable development.
                </p>
                <div
                  className={`transition-all duration-700 ease-in-out ${isExpanded ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
                >
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    In order to achieve this vision, GDS
                  </p>
                  <ul className="text-muted-foreground leading-relaxed mb-4 list-disc list-inside">
                    <li>Trains specialists in gender and development;</li>
                    <li>
                      Increases gender awareness among technology, management
                      and development professionals;
                    </li>
                    <li>
                      Generates knowledge through interdisciplinary research and
                      publications in technology, development, and gender
                      relations in Asian societies;
                    </li>
                    <li>
                      Assists other institutions in Asia to strengthen gender
                      studies through training, research and outreach; and
                    </li>
                    <li>
                      Functions as an academic arm of community-based efforts
                      for the advancement of women and sustainable development
                      and individuals of all sexual orientations and gender
                      identity expression
                    </li>
                  </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Areas of specialization
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-4">
              All students enrolled at GDS will be specializing in
            </p>
            <div className="space-y-4 ">
              <div className="border border-border rounded-lg">
                <div className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors">
                  <span className="text-lg font-semibold">
                    Gender and Development Studies (GDS)
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
                  The Development Innovation and Sustainability (DIS) program,
                  offered under the Faculty of Public Policy, is an
                  interdisciplinary and practice-oriented academic program
                  designed to prepare professionals to address complex
                  development challenges in Asia and beyond. Integrating
                  strengths in development planning, sustainability, public
                  policy, innovation, and governance, the program equips
                  students with analytical, methodological, and applied skills
                  to design, implement, and evaluate inclusive and sustainable
                  development interventions, aligned with the Sustainable
                  Development Goals (SDGs).With a strong emphasis on policy
                  relevance, social innovation, socio-ecological systems,
                  agriculture and rural development, and climate, environmental,
                  and social equity, the DIS program prepares graduates for
                  impactful careers in government, international organizations,
                  civil society, research, and the private sector.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* course structure */}
        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Course Structure
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-primary mb-4 font-semibold">
                    Required courses
                  </h4>
                  <ol className="space-y-2 text-muted-foreground">
                    <li>1. Gender and development: Principles and concepts</li>
                    <li>2. Science, technology and gender</li>
                    <li>3. Gender, culture and human development</li>
                    <li>4. Gender and human rights</li>
                  </ol>
                </div>
              </div>
              <div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-primary mb-4 font-semibold">
                    Elective courses
                  </h4>
                  <ol className="space-y-2 text-muted-foreground">
                    <li>1. Gender and labor migration in Asia</li>
                    <li>2. Gender and the economy</li>
                    <li>
                      3. Forced migration and human trafficking in the Greater
                      Mekong Sub-region
                    </li>
                    <li>4. Design, Data, and Justice in a Digital World</li>
                    <li>5. SOGIESC and Inclusive Development</li>
                    <li>6. Gender, power and politics</li>
                    <li>
                      7. Gender analysis and gender responsive development
                      planning
                    </li>
                    <li>8. Gender, peace and security</li>
                    <ul className="list-disc text-sm text-muted-foreground ml-6 mt-2">
                      <li>Qualitative Research Methods for Development</li>
                      <li>Quantitative Research Methods for Development</li>
                    </ul>
                  </ol>
                </div>
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
