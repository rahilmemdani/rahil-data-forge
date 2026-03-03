import React, { useState } from 'react';
import { Building2, Palette, BarChart3, Globe, ExternalLink, Sparkles, FileSpreadsheet, Database, Calculator, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import ScheduleConsultationModal from './ScheduleConsultationModal';

const Projects = () => {
  const [showBookingOptions, setShowBookingOptions] = useState(false);

  const featuredProject = {
    id: 4,
    category: "Enterprise AgriTech",
    title: "Grow Indigo — AgriCloud Platform",
    description: "Scalable SaaS platform serving 2M+ farmers across 15+ Indian states, managing 7M+ acres of agricultural operations. Led the transformation from monolithic to multi-tenant architecture with real-time analytics, payment processing (5,000+ monthly transactions), and seller onboarding (600+ monthly registrations).",
    technologies: ["React", "TypeScript", "Node.js", ".NET Core", "Snowflake", "PostgreSQL", "AWS"],
    metrics: ["2M+ Users", "15+ States", "7M+ Acres", "35% Cost Reduction"],
    url: "https://www.growindigo.co.in/",
    icon: <Building2 className="w-8 h-8" />,
    gradient: "from-blue-500 to-indigo-600",
  };

  const projects = [
    {
      id: 1,
      category: "Business Intelligence",
      title: "Agricultural Analytics Dashboard",
      description: "Comprehensive Power BI dashboard analyzing agricultural performance metrics, farmer engagement, and regional trends.",
      technologies: ["Power BI", "DAX", "SQL"],
      tagline: "Transforming agriculture data into insights",
      icon: <BarChart3 className="w-5 h-5" />,
      gradient: "from-amber-500 to-orange-500",
      url: "https://app.powerbi.com/view?r=eyJrIjoiOTM3MTJkY2YtMDdhYy00YjBlLWFiNTQtNGYxMDAzMmRjZTM0IiwidCI6IjhmYzRlMWZhLTc3NjItNGU0OS1iYzJlLTY0MWQ4YTZkNzUzMCJ9",
    },
    {
      id: 2,
      category: "Data & Analytics",
      title: "Snowflake Macros — Grow Indigo",
      description: "Reusable Snowflake SQL macros for streamlined query logic across agricultural datasets.",
      technologies: ["Snowflake", "SQL Macros"],
      tagline: "Reusable data logic for scalable insights",
      icon: <Database className="w-5 h-5" />,
      gradient: "from-sky-500 to-blue-600",
    },
    {
      id: 3,
      category: "Data Reporting",
      title: "Excel Reports — Mahyco",
      description: "Seamless Snowflake-Excel integration for real-time sales and R&D reporting.",
      technologies: ["Snowflake", "Excel", "Power Query"],
      tagline: "Excel-native reporting powered by Snowflake",
      icon: <FileSpreadsheet className="w-5 h-5" />,
      gradient: "from-emerald-500 to-green-600",
    },
    {
      id: 5,
      category: "SaaS Platform",
      title: "AgriCloud Dashboard",
      description: "SaaS platform streamlining onboarding, commissions, and payments with 20% time savings.",
      technologies: ["React", "TypeScript", ".NET Core", "AWS"],
      tagline: "Streamlined seller operations",
      icon: <BarChart3 className="w-5 h-5" />,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      id: 6,
      category: "E-Commerce",
      title: "Zoshe — Luxury Perfumes",
      description: "SEO-optimized e-commerce platform for premium fragrances with mobile-first design.",
      technologies: ["React", "SEO", "E-Commerce"],
      tagline: "Luxury meets technology",
      icon: <Sparkles className="w-5 h-5" />,
      gradient: "from-pink-500 to-rose-500",
      url: "https://www.zoshe.in/",
    },
    {
      id: 7,
      category: "Business Website",
      title: "Zavlin Bookkeeping",
      description: "Professional bookkeeping website with modern UX and SEO optimization.",
      technologies: ["React", "SEO"],
      tagline: "Simplifying bookkeeping",
      icon: <Calculator className="w-5 h-5" />,
      gradient: "from-teal-500 to-cyan-500",
      url: "https://www.zavlinbookkeeping.com/",
    }
  ];

  return (
    <section id="projects" className="section-full section-padding relative noise-bg overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            <Sparkles size={12} /> Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scalable systems with real-world impact, built with cutting-edge tech
          </p>
        </div>

        {/* Featured Project — Hero Card */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-muted/30 to-muted/10 dark:from-muted/20 dark:to-background p-8 md:p-10 transition-all duration-500 hover:shadow-2xl">
            {/* Background gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
              style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))', filter: 'blur(80px)' }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                  ⭐ Featured • {featuredProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                {featuredProject.url && (
                  <a
                    href={featuredProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Visit Website <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {featuredProject.metrics.map((metric, i) => (
                  <div key={i} className="card-glass p-4 text-center group/metric">
                    <div className="text-xl md:text-2xl font-display font-bold gradient-text mb-1">
                      {metric.split(' ')[0]}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-glass group p-5 flex flex-col"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Icon & Category */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <span className="text-xs font-medium text-primary">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-base font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-md bg-muted/50 dark:bg-muted/30 text-[10px] font-medium text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  View Project <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <p className="text-muted-foreground mb-4">Interested in collaborating?</p>
          <Button
            className="bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 rounded-xl"
            onClick={() => setShowBookingOptions(true)}
          >
            Schedule Consultation
          </Button>

          {showBookingOptions && (
            <ScheduleConsultationModal
              open={showBookingOptions}
              onClose={() => setShowBookingOptions(false)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;