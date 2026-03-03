import React, { useRef, useState, useCallback } from 'react';
import { Code, Database, Brain, Cloud, Wrench, Users, ListTodo, ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);


  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      gradient: "from-violet-500 to-purple-600",
      skills: ["React & Node.js", ".NET Core", "JavaScript/TypeScript", "React Native", "HTML5 & CSS3", "Python"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Predictive Analytics",
      gradient: "from-blue-500 to-indigo-600",
      skills: ["Machine Learning", "Statistical Modeling", "Forecasting Models", "Anomaly Detection"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      gradient: "from-emerald-500 to-teal-600",
      skills: ["Snowflake", "ETL Pipelines", "PostgreSQL", "MongoDB", "MySQL"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      gradient: "from-orange-500 to-red-500",
      skills: ["AWS (EC2, S3, RDS)", "Docker", "Jenkins", "Microservices"]
    },
    {
      icon: <ListTodo className="w-6 h-6" />,
      title: "Product Thinking",
      gradient: "from-pink-500 to-rose-600",
      skills: ["User-Centric Design", "Problem Identification", "Feature Roadmapping", "Business-User Alignment", "Impact-Driven Solutions"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      gradient: "from-cyan-500 to-blue-500",
      skills: ["Technical Mentoring", "Cross-functional Collaboration", "Problem Solving", "Project Ownership"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Frameworks",
      gradient: "from-amber-500 to-orange-500",
      skills: ["Git & Jira", "RESTful APIs", "Unit Testing", "Debugging", "Agile/Scrum"]
    }
  ];

  const indexRef = useRef(0);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, skillCategories.length - 1));
    const card = cardRefs.current[clamped];
    const container = scrollRef.current;
    if (!card || !container) return;
    const offset = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
    container.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' });
    setActiveIndex(clamped);
    indexRef.current = clamped;
  };

  const prev = () => goTo(indexRef.current - 2);
  const next = () => goTo(indexRef.current + 2);

  return (
    <section id="skills" className="section-full section-padding relative w-full overflow-hidden noise-bg">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-64 h-64 sm:w-96 sm:h-96 -translate-y-1/2 -translate-x-1/2 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))', filter: 'blur(80px)' }}
      />

      <div className="container-custom relative w-full z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3 sm:mb-4">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-4 break-words">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Full-stack expertise across the entire software development lifecycle
          </p>
        </div>

        {/* ═══ Horizontal Carousel ═══ */}
        <div className="relative w-full">

          {/* Left Arrow */}
          <button onClick={prev}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/90 backdrop-blur-md border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth px-8 sm:px-12 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skillCategories.map((category, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  ref={el => { cardRefs.current[index] = el; }}
                  onClick={() => goTo(index)}
                  className="shrink-0 w-[280px] sm:w-[300px] md:w-[320px] cursor-pointer"
                >
                  <div className={`card-glass group p-5 sm:p-6 h-full transition-all duration-400 ${isActive
                    ? 'ring-2 ring-primary/30 shadow-lg shadow-primary/10 !translate-y-0'
                    : 'hover:-translate-y-1'
                    }`}>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4 sm:mb-5">
                      <div className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {category.icon}
                      </div>
                      <h3 className="text-sm sm:text-base font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {category.skills.map((skill, si) => (
                        <span
                          key={si}
                          className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-muted/50 dark:bg-muted/30 rounded-lg text-[10px] sm:text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button onClick={next}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/90 backdrop-blur-md border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-6 px-8 sm:px-12">
          <div className="h-[2px] bg-border/30 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${Math.max(5, (activeIndex / Math.max(skillCategories.length - 1, 1)) * 100)}%`,
                background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-end))'
              }}
            />
          </div>
        </div>

        {/* Tech Marquee */}
        <div className="mt-10 sm:mt-14 w-full overflow-hidden rounded-2xl bg-muted/20 border border-border/50 py-3 sm:py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-6 sm:gap-8 mx-4">
                {['React', 'Node.js', 'TypeScript', '.NET Core', 'Snowflake', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Python', 'Machine Learning', 'ETL Pipelines'].map((tech, i) => (
                  <span key={`${setIdx}-${i}`} className="text-xs sm:text-sm font-mono text-muted-foreground/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/40" />
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
