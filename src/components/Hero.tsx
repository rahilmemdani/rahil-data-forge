
import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Github, Linkedin, Mail, ExternalLink, Target, TrendingUp, Database, Code } from 'lucide-react';
import Projects from "./Projects"
import { Link } from 'react-router-dom';

const Hero = () => {

  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Predictive Analytics Expert",
      description: "Built forecasting systems with 92% accuracy serving 2M+ users"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimizer",
      description: "Improved operational efficiency by 30-50% through automation"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Designed scalable ETL pipelines processing millions of records"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Enterprise-scale applications with React, Node.js, and .NET Core"
    }
  ];

  const [typingText, setTypingText] = useState('');
  const skills = [
    'Full-Stack Development',
    'Predictive Analytics',
    '.NET Core Development',
    'React & Node.js',
    'Machine Learning',
    'Snowflake Data Solutions',
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
    link.href = '/Rahil_Memdani_Resume.pdf';
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
    // HERO
    <>
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
                  <span className="gradient-text font-semibold">Data Analytics & Machine Learning</span>
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
                
                <Link to="./Projects">
                  <button
                    // onClick={scrollToProjects}
                    className="btn-primary"
                  >
                    View Projects
                    <ExternalLink size={20} />
                  </button>
                </Link>
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
                        {/* RM */}
                        <img
                          src="/rahil.jpeg"
                          alt="Rahil Memdani"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div> */}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding bg-card/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about transforming complex data into actionable business insights
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  As a Full-Stack Software Engineer with over 4 years of experience, I specialize in building
                  end-to-end predictive analytics solutions that drive business intelligence and operational efficiency.
                </p>

                <p className="text-lg leading-relaxed">
                  My expertise spans across <span className="text-primary font-semibold">enterprise-scale applications</span>,
                  where I've successfully served <span className="text-secondary font-semibold">2M+ users</span> across
                  15+ states with systems managing 7M+ acres of agricultural operations.
                </p>

                <p className="text-lg leading-relaxed">
                  I combine statistical modeling with scalable data engineering using technologies like
                  <span className="text-primary font-semibold"> Snowflake, React, Node.js, and .NET Core</span> to
                  create solutions that improve accuracy by 25-30% and reduce processing errors by 40%.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
                <p className="font-semibold text-primary mb-2">Current Focus:</p>
                <p>
                  Advancing my expertise in Data Science through graduate studies while building innovative
                  predictive analytics solutions that transform raw data into competitive advantages.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="card-glass group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-muted-foreground">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">7M+</div>
              <div className="text-sm text-muted-foreground">Acres Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">92%</div>
              <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Error Reduction</div>
            </div>
          </div>
        </div>
      </section>

    </>

  );
};

export default Hero;