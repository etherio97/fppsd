import aboutStudents from "@/assets/about-students.jpg";
import missionLibrary from "@/assets/mission-library.jpg";
import visionGraduation from "@/assets/vision-graduation.jpg";

const AboutSection = () => {
  return (
    <>
      {/* FPSD at a Glance */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
              <h2 className="section-title text-foreground mb-6">FPP at a Glance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Faculty of Public Policy at the Asian Institute of Technology is a leading academic institution dedicated to producing world-class research and education in public policy, development, and sustainability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our programs bring together scholars and practitioners from across Asia and beyond, fostering interdisciplinary dialogue and evidence-based policy solutions for the region's most pressing challenges.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={aboutStudents} alt="Students collaborating" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </div>
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
                <img src={missionLibrary} alt="University library" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </div>
            </div>
            <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Mission</p>
              <h2 className="section-title text-foreground mb-6">Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To advance knowledge and develop leaders who will drive sustainable development, inclusive governance, and innovative public policy across the Asia-Pacific region and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to rigorous research, critical thinking, and practical engagement with communities, governments, and international organizations.
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
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Vision</p>
              <h2 className="section-title text-foreground mb-6">Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be a globally recognized center of excellence in public policy education, producing transformative research and nurturing ethical leaders who shape a just, equitable, and sustainable future.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision an Asia-Pacific region where evidence-based policies drive prosperity, equity, and environmental stewardship.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={visionGraduation} alt="Graduation ceremony" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
