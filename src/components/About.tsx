import React from 'react';
import { Target, TrendingUp, Database, Code, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Predictive Analytics",
      description: "92% accuracy forecasting systems serving 2M+ users",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Performance Optimizer",
      description: "30-50% efficiency improvements via automation",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Engineering",
      description: "Scalable ETL pipelines processing millions of records",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Full-Stack Dev",
      description: "Enterprise apps with React, Node.js & .NET Core",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { value: '15+', label: 'States Covered' },
    { value: '7M+', label: 'Acres Managed' },
    { value: '92%', label: 'Prediction Accuracy' },
    { value: '40%', label: 'Error Reduction' },
  ];

  return (
    <section id="about" className="section-full section-padding relative noise-bg overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 -translate-x-1/2 rounded-full opacity-10"
        style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))', filter: 'blur(100px)' }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            <Sparkles size={12} /> About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Passionate about <span className="gradient-text">impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming complex data into actionable business insights at enterprise scale
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Content - 3 cols */}
          <div className="lg:col-span-3 space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                As a <span className="text-foreground font-medium">Full-Stack Software Engineer</span> with 4+ years at a
                Series B startup ($24M funded, 300+ employees), I specialize in building
                end-to-end solutions that drive business intelligence and operational efficiency.
              </p>
              <p>
                My work spans <span className="text-foreground font-medium">enterprise-scale applications</span> serving{' '}
                <span className="gradient-text font-semibold">2M+ users</span> across
                15+ states with systems managing 7M+ acres of agricultural operations.
              </p>
              <p>
                I combine <span className="text-foreground font-medium">Snowflake, React, Node.js, and .NET Core</span> to
                create solutions that improve accuracy by 25-30% and reduce processing errors by 40%.
              </p>
            </div>

            {/* Current Focus Box */}
            <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary font-mono">current_focus:</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Driving SaaS platform transformation to multi-tenant architecture at Grow Indigo,
                enabling global scalability for enterprise agritech solutions.
              </p>
            </div>
          </div>

          {/* Highlight Cards - 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-glass group cursor-default p-5"
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-muted/30 border border-border/50 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
