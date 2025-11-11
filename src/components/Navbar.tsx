import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Island Navigation - Desktop & Mobile */}
      <nav
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
          isScrolled ? "top-4" : "top-6"
        )}
      >
        <div
          className={cn(
            "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-all duration-300",
            "px-6 py-3",
            isScrolled && "shadow-[0_12px_40px_0_rgba(255,255,255,0.15)]"
          )}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-indigo-500/20 to-rose-500/20 text-white border border-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center justify-between gap-4">
            <span className="text-sm font-semibold text-white">
              MANOHAR REDDY
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-8 w-8"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#030303]/98 backdrop-blur-lg md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-2xl font-medium transition-colors duration-300",
                  activeSection === item.href.substring(1)
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300"
                    : "text-white/60 hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
