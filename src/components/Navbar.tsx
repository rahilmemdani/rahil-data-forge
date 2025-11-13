import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScheduleConsultationModal from "./ScheduleConsultationModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills & Technologies", path: "/skills" },
    { name: "Featured Projects", path: "/projects" },
    { name: "Professional Experience", path: "/experience" },
    { name: "Get In Touch", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glassmorphism shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LEFT — Hamburger + Desktop Nav */}
            <div className="flex items-center gap-4">

              {/* MOBILE HAMBURGER */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              {/* DESKTOP NAV ITEMS */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${isActive(item.path)
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-muted-foreground"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT — Schedule Buttons */}
            <div className="flex items-center">

              {/* DESKTOP SCHEDULE BUTTON */}
              <div className="hidden md:flex">
                <Button
                  className="bg-gradient-to-r from-gold to-yellow-400 text-navy font-semibold shadow-md 
                             hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
                  onClick={() => setShowBookingOptions(true)}
                >
                  Schedule Consultation
                </Button>
              </div>

              {/* MOBILE SCHEDULE BUTTON (TOP RIGHT) WITH MARGIN */}
              <div className="md:hidden mr-2">
                <Button
                  className="bg-gradient-to-r from-gold to-yellow-400 text-navy font-semibold 
                             px-4 py-2 rounded-lg shadow-md text-xs
                             hover:scale-[1.05] transition-all duration-200"
                  onClick={() => setShowBookingOptions(true)}
                >
                  Schedule Consultation
                </Button>
              </div>

            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-lg transition-transform duration-300 ${isOpen
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors p-2 rounded-full"
        >
          <X size={32} className="shadow-lg rounded-full p-1 bg-muted/70" />
        </button>

        {/* MENU ITEMS */}
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4 px-4">
          {navItems.map((item, idx) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-center px-6 py-3 text-xl font-semibold rounded-lg transition-all duration-300 transform ${isActive(item.path)
                ? "text-primary bg-primary/10 scale-105"
                : "text-foreground hover:text-primary hover:bg-primary/10 hover:scale-105"
                }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Full Button */}
          <Button
            className="w-full mt-6 bg-gradient-to-r from-gold to-yellow-400 text-navy font-semibold 
                       rounded-lg shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
            onClick={() => {
              setIsOpen(false);
              setShowBookingOptions(true);
            }}
          >
            Schedule Consultation
          </Button>
        </div>
      </div>

      {/* MODAL (Render Once) */}
      {showBookingOptions && (
        <ScheduleConsultationModal
          open={showBookingOptions}
          onClose={() => setShowBookingOptions(false)}
        />
      )}
    </>
  );
};

export default Navbar;
