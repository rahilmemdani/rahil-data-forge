import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/rahilmemdani"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rahil-memdani-8968681ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:rmemdanib@gmail.com"
            className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <a
            href="mailto:rmemdanib@gmail.com"
            className="flex justify-center items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" /> rmemdanib@gmail.com
          </a>
          <a
            href="tel:+919167156829"
            className="flex justify-center items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" /> +91 9167156829
          </a>
          <p className="flex justify-center items-center gap-2">
            <MapPin className="w-4 h-4" /> Mumbai, India
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © 2025 Built with{" "}
            <Heart className="w-3 h-3 text-red-500 fill-current" />. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
