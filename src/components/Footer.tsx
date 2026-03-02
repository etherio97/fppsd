import { Mail, Phone, MapPin, Facebook, Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">Faculty of Public Policy</h3>
            <p className="text-footer-muted leading-relaxed mb-6 max-w-md">
              Advancing knowledge and developing leaders for sustainable development, inclusive governance, and innovative public policy.
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
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-footer-muted text-sm">
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Academic Programs</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Admission</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Scholarship</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Student Life</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-footer-muted text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>P.O. Box 4, 58 Moo 9, Km. 42, Paholyothin Highway, Klong Luang, Pathum Thani 12120 Thailand</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <span>(+66) 2524-6071-2</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:dean_fpp@ait.asia" className="hover:text-footer-foreground transition-colors">
                  dean_fpp@ait.asia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-footer-foreground/10 mt-12 pt-8 text-center text-footer-muted text-sm">
          <p>© {new Date().getFullYear()} Faculty of Public Policy, Asian Institute of Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
