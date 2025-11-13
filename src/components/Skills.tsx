import React from 'react';
import { Code, Database, Brain, Cloud, Wrench, Users, ListTodo } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      color: "from-purple-500 to-pink-500",
      skills: [
        "React & Node.js",
        ".NET Core",
        "JavaScript/TypeScript",
        "React Native",
        "HTML5 & CSS3",
        "Python"
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Analytics",
      color: "from-primary to-blue-500",
      skills: [
        "Machine Learning",
        "Statistical Modeling",
        "Forecasting Models",
        "Anomaly Detection",
        // "scikit-learn",
        // "TensorFlow",
        // "PyTorch"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      color: "from-secondary to-green-500",
      skills: [
        "Snowflake",
        "ETL Pipelines",
        "PostgreSQL",
        "MongoDB",
        "MySQL"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      skills: [
        "AWS (EC2, S3, RDS)",
        "Docker",
        "Jenkins",
        "Microservices"
      ]
    },
    {
      icon: <ListTodo className="w-8 h-8" />,
      title: "Product Planning & Thinking",
      color: "from-teal-500 to-cyan-500",
      skills: [
        "User-Centric Design",
        "Problem Identification",
        "Feature Roadmapping",
        "Business-User Alignment",
        "Impact-Driven Solutions"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership & Soft Skills",
      color: "from-teal-500 to-cyan-500",
      skills: [
        "Technical Mentoring",
        "Cross-functional Collaboration",
        "Problem Solving",
        "Project Ownership"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Frameworks",
      color: "from-yellow-500 to-orange-500",
      skills: [
        "Git & Jira",
        "RESTful APIs",
        "Unit Testing",
        "Debugging",
        "Agile/Scrum"
      ]
    }
  ];

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
              className="card-glass group"
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

              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 bg-muted/30 rounded-lg text-sm font-medium text-center hover:bg-primary/20 hover:text-primary transition-all duration-300 transform hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
