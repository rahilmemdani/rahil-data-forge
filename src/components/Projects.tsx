import React, { useState, useEffect, useRef } from 'react';
import { Building2, BarChart3, Globe, Sparkles, FileSpreadsheet, Database, Calculator, ArrowUpRight, ChevronLeft, ChevronRight, Dumbbell, Award, X } from 'lucide-react';
import { Button } from './ui/button';
import ScheduleConsultationModal from './ScheduleConsultationModal';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  tagline: string;
  icon: React.ReactNode;
  gradient: string;
  url?: string;
}

const Projects = () => {
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 640 : false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);



  const featuredProject = {
    category: "Enterprise AgriTech",
    title: "Grow Indigo — AgriCloud Platform",
    description: "Scalable SaaS platform serving 2M+ farmers across 15+ Indian states, managing 7M+ acres of agricultural operations. Led the transformation from monolithic to multi-tenant architecture with real-time analytics, payment processing, and seller onboarding.",
    metrics: ["2M+ Users", "15+ States", "7M+ Acres", "35% Cost Reduction"],
    url: "https://www.growindigo.co.in/",
  };

  const projects: Project[] = [
    {
      id: 5, category: "SaaS Platform", title: "AgriCloud Dashboard",
      description: "SaaS platform streamlining onboarding, commissions, and payments with 20% time savings. Handles 5,000+ monthly payment transactions and 600+ seller registrations with real-time reporting.",
      tagline: "Streamlined seller operations",
      icon: <BarChart3 className="w-5 h-5" />, gradient: "from-violet-500 to-purple-600",
      url: "https://www.growindigo.co.in/agri-cloud/",
    },
    {
      id: 1, category: "Business Intelligence", title: "Agricultural Analytics Dashboard",
      description: "Comprehensive Power BI dashboard analyzing agricultural performance metrics, farmer engagement, and regional trends. Visualizes crop yield data, weather patterns, and market prices to enable data-driven decision making.",
      tagline: "Transforming agriculture data into insights",
      icon: <BarChart3 className="w-5 h-5" />, gradient: "from-amber-500 to-orange-500",
      url: "https://app.powerbi.com/view?r=eyJrIjoiOTM3MTJkY2YtMDdhYy00YjBlLWFiNTQtNGYxMDAzMmRjZTM0IiwidCI6IjhmYzRlMWZhLTc3NjItNGU0OS1iYzJlLTY0MWQ4YTZkNzUzMCJ9",
    },
    {
      id: 10, category: "Event Management", title: "Seventy Seven — 7ty7",
      description: "20+ years of legacy in event management. Transforming ideas into measurable impact, collaborating with international brands as a top global agency. The vision of three industry stalwarts gave Seventy Seven its shape, grounded in passion and the courage to do things differently.",
      tagline: "Where every event becomes unforgettable",
      icon: <Award className="w-5 h-5" />, gradient: "from-yellow-500 to-amber-600",
      url: "https://7ty7.vercel.app",
    },
    {
      id: 8, category: "Fitness & Asset Management", title: "TechFit Active",
      description: "Platform to manage fitness spaces like long-term assets — streamlined operations for gyms and fitness centres. Built to help gym owners track equipment lifecycle, maintenance schedules, and optimize space utilization for maximum ROI.",
      tagline: "Manage fitness spaces like long-term assets",
      icon: <Dumbbell className="w-5 h-5" />, gradient: "from-red-500 to-orange-500",
      url: "https://www.techfitactive.com/",
    },
    {
      id: 6, category: "E-Commerce", title: "Zoshe — Luxury Perfumes",
      description: "SEO-optimized e-commerce platform for premium fragrances with mobile-first design. Features product filtering, wishlist functionality, and an immersive brand experience.",
      tagline: "Luxury meets technology",
      icon: <Sparkles className="w-5 h-5" />, gradient: "from-pink-500 to-rose-500",
      url: "https://www.zoshe.in/",
    },
    {
      id: 2, category: "Data & Analytics", title: "Snowflake Macros — Grow Indigo",
      description: "Reusable Snowflake SQL macros for streamlined query logic across agricultural datasets. Reduced query development time by 40% and ensured consistency across all reporting layers.",
      tagline: "Reusable data logic for scalable insights",
      icon: <Database className="w-5 h-5" />, gradient: "from-sky-500 to-blue-600",
    },
    {
      id: 9, category: "Manufacturing", title: "TechFit Tech",
      description: "India's premier manufacturer of MMA Cages & Commercial Gym Rigs — built for strength, engineered for performance. Comprehensive product catalog with detailed specifications, custom configuration options, and dealer inquiry system.",
      tagline: "India's premier MMA & gym equipment manufacturer",
      icon: <Globe className="w-5 h-5" />, gradient: "from-slate-600 to-zinc-700",
      url: "http://techfittech.com/",
    },
    {
      id: 3, category: "Data Reporting", title: "Excel Reports — Mahyco",
      description: "Seamless Snowflake-Excel integration for real-time sales and R&D reporting. Automated data pipelines reducing reporting time from hours to minutes.",
      tagline: "Excel-native reporting powered by Snowflake",
      icon: <FileSpreadsheet className="w-5 h-5" />, gradient: "from-emerald-500 to-green-600",
    },
    {
      id: 7, category: "Business Website", title: "Zavlin Bookkeeping",
      description: "Professional bookkeeping website with modern UX and SEO optimization. Clean, conversion-focused design with service showcases and integrated contact forms.",
      tagline: "Simplifying bookkeeping",
      icon: <Calculator className="w-5 h-5" />, gradient: "from-teal-500 to-cyan-500",
      url: "https://www.zavlinbookkeeping.com/",
    }
  ];

  const gridRef = useRef<HTMLDivElement>(null);
  const perPage = isMobile ? 4 : 6;
  const totalPages = Math.ceil(projects.length / perPage);
  const safePage = Math.min(currentPage, totalPages - 1);
  const visibleProjects = projects.slice(safePage * perPage, (safePage + 1) * perPage);

  const goToPage = (p: number) => {
    const next = Math.max(0, Math.min(p, totalPages - 1));
    setCurrentPage(next);
    // Scroll to top of grid section
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="projects" className="section-full section-padding relative noise-bg overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--gradient-start), transparent)', filter: 'blur(100px)' }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--gradient-end), transparent)', filter: 'blur(100px)' }}
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

        {/* ═══ Featured Hero Card ═══ */}
        <div className="mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="group relative overflow-hidden rounded-3xl border border-border/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:border-primary/20"
            style={{ background: 'rgba(255,255,255,0.5)', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
          >
            <div className="absolute inset-0 bg-card/70 dark:bg-card/80 backdrop-blur-xl rounded-3xl" />
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-[0.12] pointer-events-none"
              style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))', filter: 'blur(60px)' }}
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
                {featuredProject.url && (
                  <a href={featuredProject.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex text-sm">
                    Visit Website <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {featuredProject.metrics.map((metric, i) => (
                  <div key={i} className="relative rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-border/30 backdrop-blur-md transition-all duration-300 hover:bg-primary/5 active:scale-95 sm:hover:-translate-y-1 sm:hover:shadow-lg"
                    style={{ background: 'rgba(255,255,255,0.2)' }}
                  >
                    <div className="text-base sm:text-xl md:text-2xl font-display font-bold gradient-text mb-0.5 sm:mb-1">
                      {metric.split(' ')[0]}
                    </div>
                    <div className="text-[9px] sm:text-xs text-muted-foreground font-medium">
                      {metric.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══ Paginated Grid ═══ */}
        <div className="relative" ref={gridRef} style={{ scrollMarginTop: '80px' }}>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {visibleProjects.map((project, index) => (
              <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
                <div
                  className="group relative overflow-hidden rounded-2xl border border-border/30 backdrop-blur-xl transition-all duration-500 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.4)' }}
                >
                  <div className="absolute inset-0 bg-card/60 dark:bg-card/80 backdrop-blur-xl rounded-2xl" />
                  <div className={`absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.08] transition-all duration-500 blur-2xl pointer-events-none`} />

                  {/* Clickable area → opens URL */}
                  <a
                    href={project.url || '#'}
                    target={project.url ? '_blank' : undefined}
                    rel={project.url ? 'noopener noreferrer' : undefined}
                    className="block no-underline cursor-pointer"
                    onClick={(e) => { if (!project.url) e.preventDefault(); }}
                  >
                    {/* ── Site Preview (Desktop Only for Performance) ── */}
                    {!isMobile && project.url && (
                      <div className="relative z-10 hidden sm:block h-[140px] md:h-[160px] overflow-hidden border-b border-border/20 bg-muted/10">
                        <div className="absolute inset-0" style={{ transform: 'scale(0.25)', transformOrigin: 'top left', width: '400%', height: '400%' }}>
                          <iframe
                            src={project.url}
                            title={`${project.title} preview`}
                            className="w-full h-full pointer-events-none select-none border-0"
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin"
                            tabIndex={-1}
                          />
                        </div>
                        <div className="absolute inset-0 z-20" />
                      </div>
                    )}

                    {/* Icon pattern for mobile or no-url */}
                    {(isMobile || !project.url) && (
                      <div className="relative z-10 flex h-[90px] sm:h-[140px] md:h-[160px] items-center justify-center border-b border-border/20 bg-muted/5 overflow-hidden">
                        {/* Decorative abstract background instead of heavy iframe */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.03]`} />
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white opacity-20 transform -rotate-6`}>
                          {project.icon}
                        </div>
                      </div>
                    )}

                    <div className="relative z-10 p-4">
                      <div className="flex items-start gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-md`}>
                          <span className="scale-75 sm:scale-100">{project.icon}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[8px] sm:text-[10px] font-medium text-primary block leading-tight">{project.category}</span>
                          <h3 className="text-[11px] sm:text-sm font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-[9px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </a>

                  {/* Read more → opens modal */}
                  <div className="relative z-10 px-4 pb-4">
                    <div className="pt-2 sm:pt-3 border-t border-border/20 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-[10px] sm:text-xs font-semibold text-primary sm:hover:underline cursor-pointer bg-transparent border-0 p-1 -ml-1 flex items-center justify-center w-full sm:w-auto active:scale-95 transition-transform"
                      >
                        Read more →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-10 sm:mt-12">
              <button onClick={() => goToPage(safePage - 1)} disabled={safePage === 0}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border/40 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 shadow-sm disabled:opacity-30 disabled:hover:scale-100"
                style={{ background: 'rgba(255,255,255,0.3)' }}
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => goToPage(i)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-mono text-xs font-bold border transition-all duration-300 ${i === safePage
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105'
                    : 'border-border/40 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30'
                    }`}
                  style={i !== safePage ? { background: 'rgba(255,255,255,0.3)' } : {}}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}

              <button onClick={() => goToPage(safePage + 1)} disabled={safePage === totalPages - 1}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border/40 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 shadow-sm disabled:opacity-30 disabled:hover:scale-100"
                style={{ background: 'rgba(255,255,255,0.3)' }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">Interested in collaborating?</p>
          <Button
            className="bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 rounded-xl"
            onClick={() => setShowBookingOptions(true)}
          >
            Schedule Consultation
          </Button>
          {showBookingOptions && (
            <ScheduleConsultationModal open={showBookingOptions} onClose={() => setShowBookingOptions(false)} />
          )}
        </div> */}
      </div>

      {/* ═══ Project Detail Modal ═══ */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg rounded-3xl border border-border/30 backdrop-blur-xl shadow-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.6)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-card/80 dark:bg-card/90 backdrop-blur-xl rounded-3xl" />
            <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${selectedProject.gradient} opacity-[0.12] blur-2xl pointer-events-none`} />

            <div className="relative z-10">
              {/* Modal header */}
              <div className="p-6 sm:p-8 pb-0">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {selectedProject.icon}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary block">{selectedProject.category}</span>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-foreground leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>
                  <button onClick={() => setSelectedProject(null)}
                    className="w-9 h-9 rounded-full border border-border/40 bg-muted/30 flex items-center justify-center text-muted-foreground hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all duration-200"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Modal body */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
                  {selectedProject.description}
                </p>

                <div className="p-3 rounded-xl bg-muted/20 border border-border/20 mb-5">
                  <p className="text-xs font-medium text-muted-foreground/70 italic text-center">
                    "{selectedProject.tagline}"
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.url && (
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2 text-sm flex-1 justify-center"
                    >
                      Visit Website <ArrowUpRight size={15} />
                    </a>
                  )}
                  <button onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl border border-border/50 text-sm font-medium text-muted-foreground hover:bg-muted/30 transition-all duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;