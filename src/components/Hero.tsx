
import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const skills = [
    'Full-Stack Development',
    'Predictive Analytics',
    'Machine Learning',
    'Snowflake Data Solutions',
    'React & Node.js',
    '.NET Core Development',
    'Data Engineering'
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
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typingText.length > 0) {
        timeout = setTimeout(() => {
          setTypingText(typingText.slice(0, -1));
        }, 50);
      } else {
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typingText, currentSkillIndex, isTyping, skills]);


  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rahil_Memdani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Rahil</span>
                <br />
                <span className="text-foreground">Memdani</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground">
                Full-Stack Software Engineer
                <br />
                <span className="gradient-text font-semibold">Predictive Analytics Specialist</span>
              </div>

              <div className="text-lg text-muted-foreground max-w-2xl">
                Transforming Data into Intelligent Predictions with Enterprise-scale Solutions
              </div>

              {/* Typing Animation */}
              <div className="h-8 flex items-center">
                <span className="text-primary font-mono text-lg">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2M+</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50%</div>
                <div className="text-sm text-muted-foreground">Efficiency Gains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={scrollToProjects}
              className="btn-primary"
            >
              View Projects
              <ExternalLink size={20} />
            </button>
            <button 
              onClick={handleDownloadResume}
              className="btn-secondary"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a 
                href="https://www.linkedin.com/in/rahil-memdani-8968681ab/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/rahilmemdani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:rmemdanib@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 rounded-full glassmorphism p-8 animate-float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-muted to-card flex items-center justify-center text-6xl font-bold gradient-text">
                      RM
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;