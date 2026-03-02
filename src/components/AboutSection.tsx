import missionImage from "@/assets/mission.avif";
import visionImage from "@/assets/vision.avif";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <>
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
                The Faculty of Public Policy was established by building on the
                Asian Institute of Technology’s long-standing strengths in
                development studies, governance, and interdisciplinary research,
                while responding to rapidly evolving global and regional policy
                demands. Across Asia, governments and institutions face complex
                and interconnected challenges—including climate change,
                environmental degradation, social and gender inequalities,
                forced displacement, and uneven development—that require
                integrated, evidence-based, and innovative policy responses.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Faculty is grounded in international policy frameworks such
                as the United Nations Sustainable Development Goals (SDGs),
                which emphasize policy coherence across economic, social, and
                environmental dimensions. In parallel, the Paris Agreement and
                scientific assessments of the Intergovernmental Panel on Climate
                Change (IPCC) highlight the urgency of translating climate
                science into effective public policy, governance reform, and
                adaptive development strategies, particularly in
                climate-vulnerable regions of Asia. Concurrently, the widespread
                outbreak of war and conflicts have affected marginalized
                communities the most, further pushing them to deeper
                vulnerability. Asia’s development and public policy priorities
                are increasingly shaped by the need to sustain inclusive growth
                while closing infrastructure and human-capital gaps, managing
                rapid urbanisation and demographic transitions, and steering
                digital transformation amid shifting trade patterns and
                geopolitical uncertainty. Together, these changes in national
                and regional priorities warrant renewed public policy action to
                advance inclusion, reduce inequality, and strengthen social
                justice.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The establishment of the Faculty aligns closely with global
                efforts to strengthen evidence-informed policy making and
                institutional capacity, as promoted by the United Nations
                Development Programme (UNDP), the Organisation for Economic
                Co-operation and Development (OECD) through its Policy Coherence
                for Sustainable Development framework, and the World Bank.
                Social justice, gender equality, and inclusion further underpin
                the Faculty’s mandate, reflecting priorities advanced by UN
                Women. Regional and global policy responses to migration,
                displacement, and human security—led by the United Nations High
                Commissioner for Refugees (UNHCR) and the International
                Organization for Migration (IOM)—also inform the Faculty’s
                interdisciplinary focus. The Faculty, taking advantage of the
                locational benefit situated in Thailand, is committed to working
                closely with civil society organizations and community-based
                organizations across the Global South.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Faculty offers three closely integrated academic
                programs—Development, Innovation and Sustainability; Gender and
                Development Studies; and Public Policy—which together provide
                strong conceptual foundations, interdisciplinary perspectives,
                and analytical competencies. These programs prepare graduates
                for diverse career pathways as policy leaders and advisors,
                development and programme managers, practitioners, activists,
                and researchers in governments, international organizations,
                civil society, academic and research institutions, and the
                private sector.
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
                environmental sustainability, climate change, social and gender
                equality and justice, human rights, peace, governance
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
                cultivate future policy leaders, researchers, practitioners and
                advocates/activists.
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
    </>
  );
};

export default AboutSection;
