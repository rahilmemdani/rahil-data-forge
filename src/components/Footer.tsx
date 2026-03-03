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
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand & Social */}
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-2xl mb-3">
              <span className="gradient-text">Rahil</span> Memdani
            </div>
            <p className="text-sm text-muted-foreground mb-5 max-w-xs mx-auto md:mx-0">
              Full-Stack Engineer building scalable platforms with data-driven innovation.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {[
                { href: "https://github.com/rahilmemdani", icon: Github },
                { href: "https://www.linkedin.com/in/rahil-memdani-8968681ab/", icon: Linkedin },
                { href: "mailto:rmemdanib@gmail.com", icon: Mail },
              ].map(({ href, icon: Icon }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-4">// explore</h4>
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button onClick={() => scrollTo(item.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-4">// contact</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                <a href="mailto:rmemdanib@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  rmemdanib@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                <a href="tel:9167156829" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 9167156829
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rahil Memdani. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <Heart size={10} className="text-red-400" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
