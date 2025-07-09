
import React, { useState, useEffect } from 'react';
import { Code, Database, Brain, Cloud, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);

  const skillCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Analytics",
      color: "from-primary to-blue-500",
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Statistical Modeling", level: 85 },
        { name: "Time Series Forecasting", level: 88 },
        { name: "A/B Testing", level: 80 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      color: "from-secondary to-green-500",
      skills: [
        { name: "Snowflake", level: 85 },
        { name: "ETL/ELT Pipelines", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 }
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React & Node.js", level: 92 },
        { name: ".NET Core", level: 88 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Python", level: 85 }
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS (EC2, S3, RDS)", level: 80 },
        { name: "Docker", level: 78 },
        { name: "Jenkins CI/CD", level: 75 },
        { name: "Microservices", level: 82 }
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Frameworks",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git & Version Control", level: 90 },
        { name: "RESTful APIs", level: 88 },
        { name: "Unit Testing", level: 80 },
        { name: "Agile/Scrum", level: 85 }
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership & Soft Skills",
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Technical Mentoring", level: 85 },
        { name: "Cross-functional Collaboration", level: 90 },
        { name: "Problem Solving", level: 92 },
        { name: "Project Management", level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSkills(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll('.skill-category');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full data science and software development lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-index={categoryIndex}
              className="skill-category card-glass group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-progress bg-gradient-to-r ${category.color}`}
                        style={{
                          width: visibleSkills[categoryIndex] ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Favorite <span className="gradient-text">Tech Stack</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', '.NET Core', 'Python', 'Snowflake', 'PostgreSQL',
              'MongoDB', 'AWS', 'Docker', 'TypeScript', 'Machine Learning', 'Git'
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 glassmorphism rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
