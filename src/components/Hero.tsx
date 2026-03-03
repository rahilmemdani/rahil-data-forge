import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ExternalLink, ChevronDown, ArrowRight } from 'lucide-react';
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
    <section id="hero" className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-32 lg:pb-20 min-h-[100dvh] flex items-center">
      {/* ── Decorative blobs ── */}
      <div
        className="blob-decoration animate-blob w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] -top-20 -right-20 sm:-top-32 sm:-right-32 opacity-20 sm:opacity-30"
        style={{ background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))` }}
      />
      <div
        className="blob-decoration animate-blob w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] -bottom-16 -left-16 sm:-bottom-20 sm:-left-20 opacity-15 sm:opacity-20"
        style={{ background: `linear-gradient(135deg, var(--gradient-end), var(--gradient-start))`, animationDelay: '4s' }}
      />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ═══ LEFT CONTENT ═══ */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 animate-fade-in-up">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/8 border border-primary/15 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium text-primary">Open to opportunities</span>
            </div>

            {/* Name */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-display font-bold tracking-tight">
                <span className="gradient-text-animated">Rahil</span>
                <br />
                <span className="text-foreground">Memdani</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md lg:max-w-lg leading-relaxed">
                Full-Stack Software Engineer crafting{' '}
                <span className="text-foreground font-medium">scalable platforms</span> serving{' '}
                <span className="gradient-text font-semibold">2M+ users</span> with data-driven innovation.
              </p>
            </div>

            {/* Typing terminal */}
            <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-muted/30 dark:bg-muted/20 border border-border/40 w-fit max-w-full overflow-hidden">
              <span className="text-[10px] text-muted-foreground font-mono shrink-0">&gt;_</span>
              <span className="font-mono text-primary text-sm sm:text-base font-medium truncate">
                {typingText}
                <span className="animate-blink text-primary ml-0.5">|</span>
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {[
                { value: `${usersServed}M+`, label: 'Users Served' },
                { value: `${efficiencyGains}%`, label: 'Efficiency Gains' },
                { value: `${yearsExp}+`, label: 'Years Exp' },
              ].map((stat, i) => (
                <div key={i} className="min-w-0">
                  <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold gradient-text leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3">
              <button onClick={scrollToProjects} className="btn-primary text-sm">
                View Projects
                <ArrowRight size={16} />
              </button>
              <button onClick={handleDownloadResume} className="btn-secondary text-sm">
                <Download size={16} />
                Download CV
              </button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-[10px] text-muted-foreground font-mono">find_me:</span>
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
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center bg-muted/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                  aria-label={social.label}
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ═══ RIGHT — PROFILE IMAGE ═══ */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              {/* Animated conic ring */}
              <div
                className="absolute -inset-2.5 sm:-inset-3 rounded-full animate-spin-slow opacity-50 dark:opacity-60"
                style={{
                  background: `conic-gradient(from 0deg, var(--gradient-start), var(--gradient-end), transparent, var(--gradient-start))`,
                }}
              />

              {/* Glow pulse */}
              <div className="absolute -inset-6 sm:-inset-8 rounded-full animate-pulse-ring opacity-20 pointer-events-none"
                style={{ background: `radial-gradient(circle, var(--gradient-start), transparent 70%)` }}
              />

              {/* Image */}
              <div className="relative w-full h-full rounded-full p-[3px] bg-background shadow-xl">
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
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-background/90 backdrop-blur-sm shadow-lg border border-border/60 text-[10px] sm:text-xs font-semibold flex items-center gap-1 animate-float">
                <span>🏆</span>
                <span className="hidden xs:inline sm:inline">Snowflake</span> Award '25
              </div>
              <div
                className="absolute -bottom-1 -left-3 sm:-bottom-2 sm:-left-4 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-background/90 backdrop-blur-sm shadow-lg border border-border/60 text-[10px] sm:text-xs font-semibold flex items-center gap-1 animate-float"
                style={{ animationDelay: '2s' }}
              >
                <span className="text-emerald-500 text-xs">▲</span>
                SDE-II @ Grow Indigo
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;