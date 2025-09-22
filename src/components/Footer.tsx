import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  Download,
} from 'lucide-react';

const Footer = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Rahil_Memdani_Resume.pdf';
    link.download = 'Rahil_Memdani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-8 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 right-1/4 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Intro */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif gradient-text mb-3">
                Full-Stack Developer
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
                Passionate about building scalable web applications and driving
                innovation in agritech. Currently leading impactful projects at
                Grow Indigo, serving 2M+ users globally.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 group text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                Let&apos;s Work Together
              </Link>

              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted/50 transition-colors duration-200 group text-sm sm:text-base"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Navigation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              <Link
                to="/"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/skills"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Skills & Technologies
              </Link>
              <Link
                to="/projects"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Featured Projects
              </Link>
              <Link
                to="/experience"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Professional Experience
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground">Contact</h4>
              <div className="space-y-2">
                <a
                  href="mailto:rmemdanib@gmail.com"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 mr-3 group-hover:translate-x-0.5 transition-transform" />
                  rmemdanib@gmail.com
                </a>
                <a
                  href="tel:9167156829"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 mr-3 group-hover:translate-x-0.5 transition-transform" />
                  +91 9167156829
                </a>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-3" />
                  Mumbai, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media + Copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-border gap-6">
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-sm text-muted-foreground font-medium">
              Connect with me:
            </span>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/rahilmemdani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahil-memdani-8968681ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              © 2025 Built with{' '}
              <Heart className="w-3 h-3 text-red-500 fill-current" /> using React
              & Tailwind CSS
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3 px-4 py-2 bg-green-50 dark:bg-green-950/20 rounded-full border border-green-200 dark:border-green-800/30">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700 dark:text-green-300 text-center">
                Currently available for new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
