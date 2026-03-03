import React, { useState } from 'react';
import { Target, TrendingUp, Database, Code, ChevronLeft, ChevronRight } from 'lucide-react';

const About = React.memo(() => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "92% accuracy forecasting systems serving 2M+ users",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimizer",
      description: "30-50% efficiency improvements via automation",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Scalable ETL pipelines processing millions of records",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
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

  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => setCurrentCard((prev) => (prev + 1) % highlights.length);
  const prevCard = () => setCurrentCard((prev) => (prev - 1 + highlights.length) % highlights.length);

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
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Passionate About <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming complex data into actionable business insights at enterprise scale
          </p>
        </div>

        {/* ═══ DESKTOP: Left Content + Right Carousel with Edge Arrows ═══ */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left Panel: Content ── */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
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

          {/* ── Right Panel: Carousel Card with Left/Right Edge Arrows ── */}
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="relative">

              {/* ← Left Arrow — on the left edge of the card, vertically centered */}
              <button
                onClick={prevCard}
                className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous card"
              >
                <ChevronLeft size={20} />
              </button>

              {/* → Right Arrow — on the right edge of the card, vertically centered */}
              <button
                onClick={nextCard}
                className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Next card"
              >
                <ChevronRight size={20} />
              </button>

              {/* The Carousel Card */}
              <div className="relative overflow-hidden rounded-2xl min-h-[280px] sm:min-h-[320px]">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentCard
                      ? 'opacity-100 translate-x-0 scale-100'
                      : index < currentCard
                        ? 'opacity-0 -translate-x-full scale-95'
                        : 'opacity-0 translate-x-full scale-95'
                      }`}
                  >
                    <div className="card-glass h-full p-8 sm:p-10 flex flex-col justify-between group">
                      {/* Top: Icon + Title */}
                      <div>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {item.icon}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom: Card index + dots */}
                      <div className="mt-8 flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-wider">
                          {String(index + 1).padStart(2, '0')} / {String(highlights.length).padStart(2, '0')}
                        </span>
                        <div className="flex gap-2">
                          {highlights.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentCard(i)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentCard
                                ? 'bg-primary scale-125'
                                : 'bg-muted-foreground/20 hover:bg-muted-foreground/40'
                                }`}
                              aria-label={`Go to card ${i + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
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
});

export default About;
