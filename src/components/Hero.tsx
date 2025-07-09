
import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = [
    "Python • Machine Learning • Snowflake",
    "Predictive Modeling • Data Engineering",
    "React • Node.js • .NET Core",
    "Statistical Analysis • Business Intelligence"
  ];

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentSkill.length) {
          setTypedText(currentSkill.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, currentSkillIndex, isDeleting, skills]);

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

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-custom text-center z-10">
        <div className="animate-fade-in-up">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Rahil Memdani</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-medium">
            Full-Stack Software Engineer | Predictive Analytics Specialist
          </h2>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Transforming Data into Intelligent Predictions with Snowflake & Advanced ML
          </p>
          
          {/* Animated typing skills */}
          <div className="mb-12 h-12 flex items-center justify-center">
            <span className="text-lg md:text-xl text-primary font-mono">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          {/* CTA Buttons */}
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
          
          {/* Scroll indicator */}
          <div className="animate-float">
            <ArrowDown size={32} className="text-muted-foreground mx-auto cursor-pointer hover:text-primary transition-colors" 
                     onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
          </div>
        </div>
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
    </section>
  );
};

export default Hero;
