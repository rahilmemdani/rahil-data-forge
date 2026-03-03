import React, { useState } from 'react';
import { Building2, Palette, BarChart3, Globe, Sparkles, FileSpreadsheet, Database, Calculator, ArrowUpRight, ChevronLeft, ChevronRight, Dumbbell, Award } from 'lucide-react';
import { Button } from './ui/button';
import ScheduleConsultationModal from './ScheduleConsultationModal';

const Projects = () => {
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const featuredProject = {
    id: 4,
    category: "Enterprise AgriTech",
    title: "Grow Indigo — AgriCloud Platform",
    description: "Scalable SaaS platform serving 2M+ farmers across 15+ Indian states, managing 7M+ acres of agricultural operations. Led the transformation from monolithic to multi-tenant architecture with real-time analytics, payment processing, and seller onboarding.",
    technologies: ["React", "TypeScript", "Node.js", ".NET Core", "Snowflake", "PostgreSQL", "AWS"],
    metrics: ["2M+ Users", "15+ States", "7M+ Acres", "35% Cost Reduction"],
    url: "https://www.growindigo.co.in/",
    icon: <Building2 className="w-8 h-8" />,
    gradient: "from-blue-500 to-indigo-600",
  };

  const projects = [
    {
      id: 8,
      category: "Fitness & Asset Management",
      title: "TechFit Active",
      description: "Platform to manage fitness spaces like long-term assets — streamlined operations for gyms and fitness centres.",
      technologies: ["React", "Node.js", "SEO"],
      tagline: "Manage fitness spaces like long-term assets",
      icon: <Dumbbell className="w-5 h-5" />,
      gradient: "from-red-500 to-orange-500",
      url: "https://www.techfitactive.com/",
    },
    {
      id: 9,
      category: "Manufacturing",
      title: "TechFit Tech",
      description: "India's premier manufacturer of MMA Cages & Commercial Gym Rigs — built for strength, engineered for performance.",
      technologies: ["React", "SEO", "E-Commerce"],
      tagline: "India's premier MMA & gym equipment manufacturer",
      icon: <Globe className="w-5 h-5" />,
      gradient: "from-slate-600 to-zinc-700",
      url: "http://techfittech.com/",
    },
    {
      id: 10,
      category: "Event Management",
      title: "Seventy Seven — 7ty7",
      description: "20+ years of legacy in event management. Transforming ideas into measurable impact, collaborating with international brands as a top global agency.",
      technologies: ["React", "Vite", "Node.js"],
      tagline: "Where every event becomes unforgettable",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-yellow-500 to-amber-600",
      url: "https://7ty7.vercel.app",
    },
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
      id: 5,
      category: "SaaS Platform",
      title: "AgriCloud Dashboard",
      description: "SaaS platform streamlining onboarding, commissions, and payments with 20% time savings.",
      technologies: ["React", "TypeScript", ".NET Core", "AWS"],
      tagline: "Streamlined seller operations",
      icon: <BarChart3 className="w-5 h-5" />,
      gradient: "from-violet-500 to-purple-600",
      url: "https://www.growindigo.co.in/agri-cloud/",
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

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const currentProjects = projects.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)));
  };

  return (
    <section id="projects" className="section-full section-padding relative noise-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--gradient-start), transparent)', filter: 'blur(80px)' }}
      />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3 sm:mb-4">
            <Sparkles size={12} /> Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-4 break-words">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Scalable systems with real-world impact, built with cutting-edge tech
          </p>
        </div>

        {/* ═══ Featured Project — Hero Card ═══ */}
        <div className="mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.08] pointer-events-none"
              style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))', filter: 'blur(80px)' }}
            />

            <div className="relative z-10 p-6 sm:p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                  ⭐ Featured • {featuredProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
                  {featuredProject.description}
                </p>
                {/* <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[10px] sm:text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div> */}
                {featuredProject.url && (
                  <a href={featuredProject.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex text-sm">
                    Visit Website <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {featuredProject.metrics.map((metric, i) => (
                  <div key={i} className="card-glass p-4 text-center group/metric">
                    <div className="text-lg sm:text-xl md:text-2xl font-display font-bold gradient-text mb-1">
                      {metric.split(' ')[0]}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">
                      {metric.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══ Paginated Projects Grid ═══ */}
        <div className="relative">
          {/* Page transition wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 min-h-[400px]">
            {currentProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="card-glass group h-full p-5 sm:p-6 flex flex-col overflow-hidden">
                  {/* Top row: Icon + Category + Link */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs font-medium text-primary block">{project.category}</span>
                        <h3 className="text-sm sm:text-base font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 shrink-0 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  {/* <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-muted/50 dark:bg-muted/30 text-[9px] sm:text-[10px] font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-8 sm:mt-10">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 0}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/90 backdrop-blur-md border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 shadow-sm disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-background/90 disabled:hover:text-muted-foreground disabled:hover:border-border/50"
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-mono text-xs font-bold border transition-all duration-300 ${i === currentPage
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                    : 'bg-muted/30 text-muted-foreground border-border/40 hover:bg-primary/10 hover:text-primary hover:border-primary/30'
                    }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/90 backdrop-blur-md border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 shadow-sm disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-background/90 disabled:hover:text-muted-foreground disabled:hover:border-border/50"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">Interested in collaborating?</p>
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