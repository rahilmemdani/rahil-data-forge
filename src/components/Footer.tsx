import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom"; // or next/link
import ScheduleConsultationModal from "./ScheduleConsultationModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills & Technologies", path: "/skills" },
  { name: "Featured Projects", path: "/projects" },
  { name: "Professional Experience", path: "/experience" },
  { name: "Get In Touch", path: "/contact" },
];

const Footer = () => {
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#111827] text-[#f9fafb] border-t border-gray-700">

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">

          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { href: "https://github.com/rahilmemdani", icon: Github },
                { href: "https://www.linkedin.com/in/rahil-memdani-8968681ab/", icon: Linkedin },
                { href: "mailto:rmemdanib@gmail.com", icon: Mail }
              ].map(({ href, icon: Icon }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#00FFE0] hover:text-black flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <Icon className="w-4 h-4 text-[#f9fafb]" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Explore</h4>
            <nav>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="hover:gradient-text font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-3" />
                <a
                  href="mailto:rmemdanib@gmail.com"
                  className="hover:gradient-text transition-colors duration-200"
                >
                  rmemdanib@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-3" />
                <a
                  href="tel:9167156829"
                  className="hover:gradient-text transition-colors duration-200"
                >
                  +91 9167156829
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <span>© 2025 Built by Rahil Memdani</span>
            </div>
            <div>
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
