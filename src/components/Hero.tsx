import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Hero = () => {
  const { theme } = useTheme();

  const [typingText, setTypingText] = useState('');
  const skills = [
    'Full-Stack Development',
    'Predictive Analytics',
    'SaaS Architecture',
    'React & Node.js',
    'Snowflake & Data Engineering',
    '.NET Core & C#',
    'Machine Learning',
    'Product Thinking',
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (typingText.length < currentSkill.length) {
        timeout = setTimeout(() => {
          setTypingText(currentSkill.slice(0, typingText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (typingText.length > 0) {
        timeout = setTimeout(() => {
          setTypingText(typingText.slice(0, -1));
        }, 40);
      } else {
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typingText, currentSkillIndex, isTyping, skills]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Rahil_Memdani_Resume.pdf';
    link.download = 'Rahil_Memdani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) { setCount(end); clearInterval(timer); }
        else { setCount(Math.floor(start)); }
      }, 16);
      return () => clearInterval(timer);
    }, [end, duration]);
    return count;
  };

  const usersServed = useCounter(2, 1500);
  const efficiencyGains = useCounter(50, 1800);
  const yearsExp = useCounter(4, 1200);

  return (
    <section id="hero" className="section-full relative overflow-hidden section-padding">
      {/* Decorative blobs */}
      <div
        className="blob-decoration animate-blob w-[500px] h-[500px] -top-32 -right-32 opacity-30"
        style={{ background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))` }}
      />
      <div
        className="blob-decoration animate-blob w-[400px] h-[400px] -bottom-20 -left-20 opacity-20"
        style={{ background: `linear-gradient(135deg, var(--gradient-end), var(--gradient-start))`, animationDelay: '4s' }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-primary">Available for opportunities</span>
            </div>

            {/* Name */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight">
                <span className="gradient-text-animated">Rahil</span>
                <br />
                <span className="text-foreground">Memdani</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Full-Stack Software Engineer crafting{' '}
                <span className="text-foreground font-medium">scalable platforms</span> serving{' '}
                <span className="gradient-text font-semibold">2M+ users</span> with data-driven innovation.
              </p>
            </div>

            {/* Typing Animation */}
            <div className="h-10 flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">// specializing in</span>
              <span className="font-mono text-primary text-lg font-medium">
                {typingText}
                <span className="animate-blink text-primary">|</span>
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: `${usersServed}M+`, label: 'Users Served' },
                { value: `${efficiencyGains}%`, label: 'Efficiency Gains' },
                { value: `${yearsExp}+`, label: 'Years Experience' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToProjects} className="btn-primary">
                View Projects
                <ExternalLink size={18} />
              </button>
              <button onClick={handleDownloadResume} className="btn-secondary">
                <Download size={18} />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs text-muted-foreground font-mono">find_me:</span>
              {[
                { href: "https://www.linkedin.com/in/rahil-memdani-8968681ab/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/rahilmemdani", icon: Github, label: "GitHub" },
                { href: "mailto:rmemdanib@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute -inset-3 rounded-full animate-spin-slow opacity-60"
                style={{
                  background: `conic-gradient(from 0deg, var(--gradient-start), var(--gradient-end), transparent, var(--gradient-start))`
                }}
              />

              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-background">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                  <img
                    src="/rahil.jpeg"
                    alt="Rahil Memdani"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 px-3 py-1.5 rounded-lg bg-background shadow-lg border border-border text-xs font-semibold flex items-center gap-1.5 animate-float">
                <span className="text-primary">🏆</span> Snowflake Award 2025
              </div>
              <div className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg bg-background shadow-lg border border-border text-xs font-semibold flex items-center gap-1.5 animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-green-500">▲</span> SDE-II @ Grow Indigo
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <ChevronDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;