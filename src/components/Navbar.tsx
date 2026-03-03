import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScheduleConsultationModal from "./ScheduleConsultationModal";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(section => { if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "glassmorphism shadow-sm"
          : "bg-transparent"
        }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button onClick={() => scrollTo("#hero")} className="font-display font-bold text-lg tracking-tight hover:text-primary transition-colors">
              <span className="gradient-text">RM</span>
              <span className="text-foreground">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${activeSection === item.href.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>

              {/* Schedule - Desktop */}
              <div className="hidden md:block">
                <Button
                  className="bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 font-semibold text-xs rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-9 px-4"
                  onClick={() => setShowBookingOptions(true)}
                >
                  Schedule Call
                </Button>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center bg-muted/50 hover:bg-muted text-foreground transition-colors"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
        <button onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
          <X size={20} />
        </button>

        <div className="flex flex-col items-center justify-center min-h-screen gap-2 px-8">
          {navItems.map((item, idx) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`w-full text-center px-6 py-3 text-lg font-display font-semibold rounded-xl transition-all duration-300 ${activeSection === item.href.slice(1)
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.name}
            </button>
          ))}

          <div className="flex items-center gap-3 mt-6">
            <button onClick={toggleTheme}
              className="w-12 h-12 rounded-xl flex items-center justify-center bg-muted text-foreground">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Button
              className="bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 font-semibold rounded-xl shadow-md h-12 px-6"
              onClick={() => { setIsOpen(false); setShowBookingOptions(true); }}
            >
              Schedule Call
            </Button>
          </div>
        </div>
      </div>

      {showBookingOptions && (
        <ScheduleConsultationModal open={showBookingOptions} onClose={() => setShowBookingOptions(false)} />
      )}
    </>
  );
};

export default Navbar;
