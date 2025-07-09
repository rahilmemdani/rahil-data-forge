
import React from 'react';
import { Target, TrendingUp, Database, Code } from 'lucide-react';

const About = () => {
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

  return (
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
                As a Full-Stack Software Engineer with over 3 years of experience, I specialize in building 
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
  );
};

export default About;
