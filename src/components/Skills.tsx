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
    <section id="skills" className="section-full section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'linear-gradient(135deg, var(--gradient-end), var(--gradient-start))', filter: 'blur(100px)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            <Sparkles size={12} /> Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack expertise across the entire software development lifecycle
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-glass group p-6"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-base font-display font-semibold group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-muted/50 dark:bg-muted/30 rounded-lg text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-muted/20 border border-border/50 py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-8 mx-4">
                {['React', 'Node.js', 'TypeScript', '.NET Core', 'Snowflake', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Python', 'Machine Learning', 'ETL Pipelines'].map((tech, i) => (
                  <span key={`${setIdx}-${i}`} className="text-sm font-mono text-muted-foreground/60 flex items-center gap-2">
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
