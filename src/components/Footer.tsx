import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  ExternalLink,
  Earth,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Faculty of Public Policy & Sustainable Development
            </h3>
            <p className="text-footer-muted leading-relaxed mb-6 max-w-md">
              Asian Institute of Technology (AIT)
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://ait.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Earth className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-footer-muted text-sm">
              <li>
                <Link
                  to="/academic-programs"
                  className="hover:text-footer-foreground transition-colors"
                >
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="hover:text-footer-foreground transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <a
                  href="https://ait.ac.th/admissions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-footer-foreground transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Admission
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://ait.ac.th/financial-aid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-footer-foreground transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Scholarship
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </span>
                </a>
              </li>
              <li>
                <Link
                  to="/student-life"
                  className="hover:text-footer-foreground transition-colors"
                >
                  Student Life
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-footer-muted text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>
                  P.O. Box 4, 58 Moo 9, Km. 42, Paholyothin Highway, Klong
                  Luang, Pathum Thani 12120 Thailand
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <span>(+66) 2524-6071-2</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a
                  href="mailto:dean_fpp@ait.asia"
                  className="hover:text-footer-foreground transition-colors"
                >
                  dean_fpp@ait.asia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-footer-foreground/10 mt-12 pt-8 text-center text-footer-muted text-sm">
          <p>
            © {new Date().getFullYear()} Faculty of Public Policy & Sustainable
            Development, Asian Institute of Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
