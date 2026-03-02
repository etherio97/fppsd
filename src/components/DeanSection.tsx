import deanPortrait from "@/assets/dean.jpg";

const DeanSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
          Leadership
        </p>
        <h2 className="section-title text-foreground mb-12">Dean's Foreword</h2>

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
            It is with great pride that I welcome you to the Faculty of Public
            Policy and Sustainable Development at the Asian Institute of
            Technology (AIT).
          </blockquote>

          <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic mb-8 max-w-2xl">
            The Faculty was established at a time of profound global
            transformation. Today’s world is shaped by geopolitical uncertainty,
            climate emergencies, rapid technological change, and deep social and
            economic inequalities. These global shifts are reflected in
            environmental degradation, widening gender and social disparities,
            regional conflicts, population displacement, and uneven development
            across and within nations.
          </blockquote>
          <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic mb-8 max-w-2xl">
            Such challenges are reshaping how public policy is conceived,
            implemented, and evaluated. They require leaders, practitioners,
            researchers, and advocates who can navigate complexity with
            integrity, analytical rigor, and compassion.
          </blockquote>
          <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic mb-8 max-w-2xl">
            Building on AIT’s long-standing strengths in development studies,
            governance, and interdisciplinary scholarship, the Faculty is
            committed to advancing innovative, inclusive, and evidence-based
            policy solutions. We aim to prepare a new generation of policy
            leaders capable of bridging research and practice, science and
            governance, and local realities with global policy debates.
          </blockquote>
          <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic mb-8 max-w-2xl">
            At our Faculty, policy is understood as both an analytical and
            ethical endeavor—one that connects research, leadership, advocacy,
            and implementation to generate meaningful societal impact. Through
            strong partnerships with governments, international organizations,
            development agencies, civil society, and academic networks
            worldwide, we foster a vibrant learning environment that integrates
            theory with practice.
          </blockquote>
          <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic mb-8 max-w-2xl">
            As Dean, I am committed to nurturing an inclusive, collaborative,
            and intellectually dynamic academic community. I warmly invite you
            to join us in shaping more just, resilient, and sustainable futures.
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
  );
};

export default DeanSection;
