import Header from "@/components/Header";
import Footer from "@/components/Footer";
import coverImage from "@/assets/cover-dis.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const DegreeOfferingsPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        {/* hero section */}
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
              Degree Offerings
            </h2>
          </div>
        </section>

        {/* offerings */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* card 1 */}
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Doctoral Degree (PhD)
                </h3>
                <ul className="list-disc list-inside text-base mb-4 text-secondary-foreground">
                  <li>
                    <strong>Duration:</strong> 3.5 years
                  </li>
                  <li>
                    <strong>Credits:</strong> 84 credits (12 credits of
                    coursework plus 72 credits dissertation)
                  </li>
                </ul>
                <a
                  href="https://admission.ait.ac.th"
                  target="_blank"
                  className="inline-block"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    Apply Now <ExternalLink className="w-4 h-4" />{" "}
                  </Button>
                </a>
              </div>

              {/* card 2 */}
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Master of Science (MSc)
                </h3>
                <ul className="list-disc list-inside text-base mb-4 text-secondary-foreground">
                  <li>
                    <strong>Duration:</strong> 2 years
                  </li>
                  <li>
                    <strong>Credits:</strong> 48 credits (26 credits coursework
                    plus 22 credits Thesis)
                  </li>
                </ul>
                <a
                  href="https://admission.ait.ac.th"
                  target="_blank"
                  className="inline-block"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    Apply Now <ExternalLink className="w-4 h-4" />{" "}
                  </Button>
                </a>
              </div>

              {/* card 3 */}
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  One‑year Master (MS)
                </h3>
                <ul className="list-disc list-inside text-base mb-4 text-secondary-foreground">
                  <li>
                    <strong>Duration:</strong> 1 year
                  </li>
                  <li>
                    <strong>Credits:</strong> 30 credits (24–27 credits of
                    coursework plus 3‑6 credits Projects)
                  </li>
                </ul>
                <a
                  href="https://admission.ait.ac.th"
                  target="_blank"
                  className="inline-block"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    Apply Now <ExternalLink className="w-4 h-4" />{" "}
                  </Button>
                </a>
              </div>

              {/* card 4 */}
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Postgraduate Certificate (PC)
                </h3>
                <ul className="list-disc list-inside text-base mb-4 text-secondary-foreground">
                  <li>
                    <strong>Duration:</strong> 1 semester
                  </li>
                  <li>
                    <strong>Credits:</strong> 12 credits Coursework
                  </li>
                </ul>
                <a
                  href="https://admission.ait.ac.th"
                  target="_blank"
                  className="inline-block"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    Apply Now <ExternalLink className="w-4 h-4" />{" "}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* elective courses row */}
        <section className="section-padding  bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Elective courses
            </h2>
            <div className="md:flex items-center justify-center gap-6 lg:gap-8">
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://admission.ait.ac.th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Button variant="default">
                    Admissions <ExternalLink className="w-4 h-4" />{" "}
                  </Button>
                </a>
                <a
                  href="https://ait.ac.th/financial-aid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Button variant="default">
                    Scholarships <ExternalLink className="w-4 h-4" />{" "}
                  </Button>
                </a>
                <a
                  href="https://ait.ac.th/tuition-and-fees/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Button variant="default">
                    Tuition Fees <ExternalLink className="w-4 h-4" />{" "}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DegreeOfferingsPage;
