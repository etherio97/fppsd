import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import aitLogo from "@/assets/ait-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Academic Programs",
    children: [
      {
        label: "Development Innovation & Sustainability",
        href: "/development-innovation-and-sustainability",
      },
      {
        label: "Gender and Development Studies",
        href: "/gender-and-development-studies",
      },
      { label: "Public Policy", href: "#" },
      { label: "Degree Offerings", href: "#" },
    ],
  },
  {
    label: "Research",
    children: [
      { label: "Research Projects", href: "#" },
      { label: "Research Center", href: "#" },
      { label: "Student Research Highlights", href: "#" },
    ],
  },
  {
    label: "Journal & Publications",
    children: [
      { label: "GDS-GTD Journal", href: "#" },
      { label: "Faculty in Journal Editorial", href: "#" },
      { label: "Faculty Publications", href: "#" },
      { label: "Student Publications", href: "#" },
    ],
  },
  {
    label: "Admission & Scholarship",
    children: [
      { label: "Admission", href: "#" },
      { label: "Tuition Fee", href: "#" },
      { label: "Online Application", href: "#" },
      { label: "Scholarship", href: "#" },
    ],
  },
  {
    label: "Student Life",
    children: [
      { label: "Student Housing", href: "#" },
      { label: "Student Opportunities", href: "#" },
    ],
  },
  { label: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div>
            <img
              src={aitLogo}
              className="h-12 w-12"
              style={{
                filter: scrolled
                  ? "none"
                  : "brightness(0) saturate(100%) invert(1)",
              }}
            />
          </div>
          <div>
            <div
              className={`font-bold transition-colors ${scrolled ? "text-primary" : "text-primary-foreground"}`}
            >
              Faculty of Public Policy <br></br>& Sustainable Development
            </div>
            <div
              className={`hidden sm:block text-xs leading-tight transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            >
              Asian Institute of Technology (AIT)
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    scrolled
                      ? "text-foreground hover:text-primary hover:bg-primary-light"
                      : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  to={item.href!}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    scrolled
                      ? "text-foreground hover:text-primary hover:bg-primary-light"
                      : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-xl border border-border py-2 animate-fade-up">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary-light hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-xl max-h-[80vh] overflow-y-auto animate-fade-up">
          <nav className="container mx-auto py-4 px-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label,
                        )
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground hover:bg-primary-light rounded-md transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-4 border-l-2 border-primary/20 pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-primary-light rounded-md transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
