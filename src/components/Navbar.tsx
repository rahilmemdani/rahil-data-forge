import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Sun, Moon, Terminal } from "lucide-react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // Hide if scrolling down past 100px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
      {/* ═══════ NAVBAR ═══════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4 pointer-events-none transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <nav
          className={`w-full max-w-5xl transition-all duration-300 rounded-full px-4 sm:px-6 pointer-events-auto ${scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-md border border-border/80 py-2 sm:py-2.5"
            : "bg-background/50 backdrop-blur-md shadow-sm border border-border/30 py-3 sm:py-3.5"
            }`}
        >
          <div className="flex items-center justify-between h-12 sm:h-14">

            {/* ── Logo ── */}
            <button
              onClick={() => scrollTo("#hero")}
              className="group flex items-center gap-2.5 pr-2"
            >
              {/* Terminal icon - original primary color */}
              <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-sm group-hover:opacity-90 transition-opacity">
                <Terminal size={18} />
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="text-base sm:text-lg font-display font-bold tracking-tight text-foreground transition-colors">
                  rahil<span className="text-primary">.dev</span>
                </span>
              </div>
            </button>

            {/* ── Desktop Navigation ── */}
            <div className="hidden md:flex items-center gap-6 px-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`relative py-1 text-sm font-medium transition-all duration-200 hover:text-primary ${activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${activeSection === item.href.slice(1) ? "w-full" : "w-0"
                      }`}
                  />
                </button>
              ))}
            </div>

            {/* ── Right Controls ── */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-10 h-10 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-muted/50 border border-border/40 text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="Toggle theme"
              >
                <div className="relative w-5 h-5">
                  <Sun
                    size={20}
                    className={`absolute inset-0 transition-transform duration-300 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
                      }`}
                  />
                  <Moon
                    size={20}
                    className={`absolute inset-0 transition-transform duration-300 ${theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                      }`}
                  />
                </div>
              </button>

              {/* Schedule - Desktop */}
              <Button
                className="hidden md:inline-flex bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:opacity-90 transition-opacity h-10 px-5"
                onClick={() => setShowBookingOptions(true)}
              >
                Schedule Call
              </Button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-muted/50 border border-border/40 text-foreground transition-colors"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <X
                    size={20}
                    className={`absolute inset-0 transition-transform duration-300 ${isOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
                      }`}
                  />
                  <Menu
                    size={20}
                    className={`absolute inset-0 transition-transform duration-300 ${!isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ═══════ MOBILE OVERLAY ═══════ */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        {/* Backdrop (Darken background) */}
        <div
          className={`absolute inset-0 bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Side Drawer (80% width, sliding from right, 80% glassmorphism) */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[80vw] max-w-[320px] bg-background/80 backdrop-blur-2xl border-l border-border/40 shadow-2xl flex flex-col pt-20 px-6 pb-8 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-xl bg-muted/60 flex items-center justify-center text-foreground hover:bg-muted transition-colors z-10 shrink-0"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto flex flex-col w-full pb-4 scrollbar-hide">
            {/* Logo at top */}
            {/* <div className="mb-6 flex flex-col items-center gap-2 shrink-0">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-md">
                <Terminal size={22} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold">
                rahil<span className="text-primary">.dev</span>
              </span>
            </div> */}

            <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto flex flex-col gap-2 shrink-0">
              {navItems.map((item, idx) => (
                <React.Fragment key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`relative w-full text-center px-4 py-3 text-lg font-display font-medium transition-all duration-300 hover:text-primary ${activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground"
                      }`}
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateY(0)" : "translateY(15px)",
                      transition: `all 300ms ease ${idx * 40 + 50}ms`,
                    }}
                  >
                    {item.name}
                  </button>
                  {idx < navItems.length - 1 && (
                    <div
                      className="h-px w-full bg-gradient-to-r from-transparent via-border/40 dark:via-border/60 to-transparent my-1"
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "scaleX(1)" : "scaleX(0)",
                        transition: `all 400ms ease ${idx * 40 + 100}ms`,
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div
              className="flex items-center gap-3 mt-8 w-full max-w-[280px] sm:max-w-[320px] mx-auto shrink-0"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(15px)",
                transition: `all 300ms ease ${navItems.length * 40 + 100}ms`,
              }}
            >
              <button
                onClick={() => { toggleTheme(); }}
                className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center bg-muted/60 text-foreground border border-border/40 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <Button
                className="flex-1 bg-primary text-primary-foreground font-medium rounded-xl h-12 px-4 shadow-sm hover:opacity-90"
                onClick={() => { setIsOpen(false); setShowBookingOptions(true); }}
              >
                Schedule Call
              </Button>
            </div>
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
