import deanPortrait from "@/assets/dean-portrait.jpg";

const DeanSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Leadership</p>
        <h2 className="section-title text-foreground mb-12">Dean's Foreword</h2>

        <div className="flex flex-col items-center">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl border-4 border-primary/20 mb-8">
            <img src={deanPortrait} alt="Dean portrait" className="w-full h-full object-cover" loading="lazy" />
          </div>

          <blockquote className="text-muted-foreground leading-relaxed text-lg md:text-xl italic font-heading mb-8 max-w-2xl">
            "At the Faculty of Public Policy, we believe that education is the most powerful instrument for transforming societies. Our commitment to interdisciplinary research and practice ensures that our graduates are equipped to lead with integrity, innovation, and a deep understanding of the complex challenges facing our world."
          </blockquote>

          <div>
            <p className="font-heading text-xl font-semibold text-foreground">Prof. Dr. Jayant K. Routray</p>
            <p className="text-muted-foreground text-sm mt-1">Dean, Faculty of Public Policy</p>
            <div className="mt-4 w-24 h-0.5 bg-primary/30 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeanSection;
