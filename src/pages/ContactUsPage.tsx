import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import coverImage from "@/assets/cover-dis.jpg";
import mapImage from "@/assets/map.avif";
import aitLogo from "@/assets/ait-logo.png";
import { Mail, MapPin, Phone, User, Printer } from "lucide-react";

const ContactUsPage = () => {
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
              Contact Us
            </h2>
          </div>
        </section>

        {/* about */}
        <section className="section-padding bg-secondary/50 ">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
              <div>
                <div className="flex items-center gap-3">
                  <img src={aitLogo} className="w-14" />
                  <div>
                    <div className="text-xs leading-tight transition-colors text-foreground">
                      Asian Institute of Technology
                    </div>
                    <div className="font-bold transition-colors text-primary">
                      Faculty of Public Policy & Sustainable Development
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold my-4">
                  Dean’s Secretariat Office
                </h2>
                <ul className="space-y-4 text-footer-muted text-sm">
                  <li className="flex gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    <span>Academic Building, Room S-100</span>
                  </li>
                  <li className="flex gap-3">
                    <User className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    <span>Ms. Wantana Sa-Adpan</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Phone className="w-4 h-4 shrink-0 text-primary" />
                    <span>(+66) 2524-6071-2</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Printer className="w-4 h-4 shrink-0 text-primary" />
                    <span>(+66) 2524-6071-2</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Mail className="w-4 h-4 shrink-0 text-primary" />
                    <div className="space-y-2">
                      <div>
                        <a
                          href="mailto:swantana@ait.ac.th"
                          className="hover:text-footer-foreground transition-colors"
                        >
                          swantana@ait.ac.th
                        </a>
                      </div>
                      <div>
                        <a
                          href="mailto:dean_fpp@ait.asia"
                          className="hover:text-footer-foreground transition-colors"
                        >
                          dean_fpp@ait.asia
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-span-2">
                <img src={mapImage} className="w-full h-full" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
