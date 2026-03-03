import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">

          {/* Brand & Social */}
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-xl mb-2">
              <span className="gradient-text">Rahil</span> Memdani
            </div>
            <p className="text-xs text-muted-foreground mb-4 max-w-[250px] mx-auto md:mx-0">
              Full-Stack Engineer building scalable platforms with data-driven innovation.
            </p>
            <div className="flex justify-center md:justify-start gap-2">
              {[
                { href: "https://github.com/rahilmemdani", icon: Github },
                { href: "https://www.linkedin.com/in/rahil-memdani-8968681ab/", icon: Linkedin },
                { href: "mailto:rmemdanib@gmail.com", icon: Mail },
              ].map(({ href, icon: Icon }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation & Contact Row */}
          <div className="w-full md:w-auto flex flex-row justify-between sm:justify-start gap-4 sm:gap-16 text-left mt-4 md:mt-0">
            {/* Navigation */}
            <div>
              <h4 className="text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-3">// explore</h4>
              <ul className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button onClick={() => scrollTo(item.href)}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-3">// contact</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  <a href="mailto:rmemdanib@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors truncate max-w-[120px] sm:max-w-none">
                    rmemdanib@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  <a href="tel:9167156829" className="text-xs text-muted-foreground hover:text-primary transition-colors truncate max-w-[120px] sm:max-w-none">
                    +91 9167156829
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Rahil Memdani. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground flex items-center gap-1">
            Built with <Heart size={10} className="text-red-400" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
