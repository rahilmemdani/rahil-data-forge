import React from 'react';
import { Code, Database, Brain, Cloud, Wrench, Users, ListTodo, Sparkles } from 'lucide-react';

const Skills = () => {
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

  return (
    <section id="skills" className="section-full section-padding relative w-full overflow-hidden noise-bg">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 sm:w-96 sm:h-96 -translate-y-1/2 -translate-x-1/2 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))', filter: 'blur(80px)' }}
      />

      <div className="container-custom relative w-full z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-glass group p-5 sm:p-6 w-full overflow-hidden"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <span className="scale-90 sm:scale-100">{category.icon}</span>
                </div>
                <h3 className="text-sm sm:text-base font-display font-semibold group-hover:text-primary transition-colors duration-300 leading-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-muted/50 dark:bg-muted/30 rounded-lg text-[10px] sm:text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="mt-12 sm:mt-16 w-full overflow-hidden rounded-2xl bg-muted/20 border border-border/50 py-3 sm:py-4">
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
