import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom"; // or next/link

const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills & Technologies", path: "/skills" },
  { name: "Featured Projects", path: "/projects" },
  { name: "Professional Experience", path: "/experience" },
  { name: "Get In Touch", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Top Section: Social Links */}
        <div className="flex justify-center space-x-6">
          {[{
            href: "https://github.com/rahilmemdani",
            icon: <Github className="w-5 h-5" />
          }, {
            href: "https://www.linkedin.com/in/rahil-memdani-8968681ab/",
            icon: <Linkedin className="w-5 h-5" />
          }, {
            href: "mailto:rmemdanib@gmail.com",
            icon: <Mail className="w-5 h-5" />
          }].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Middle Section: Navigation & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Explore</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> rmemdanib@gmail.com
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +91 9167156829
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="w-4 h-4" /> Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center border-t border-border pt-6 text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>© 2025 Built with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
          <span>by Rahil Memdani. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
