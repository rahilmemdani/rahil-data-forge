import React, { useState } from 'react';
import { MapPin, Calendar, TrendingUp, Users, Database, Code, ExternalLink, X, Award, Sparkles, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [modalImage, setModalImage] = useState<any>(null);

  const experiences = [
    {
      company: "Grow Indigo",
      position: "Software Development Engineer I → II",
      duration: "Aug 2021 - Present",
      location: "Mumbai, India",
      type: "Full-time",
      description:
        "Promoted from SDE-I to SDE-II (July 2025) for leading large-scale full-stack projects, driving platform-wide innovation, and mentoring team members in a fast-paced agritech environment serving 2M+ users.",
      achievements: [
        "Built commission analytics system processing 5,000+ monthly transactions with 10% revenue accuracy improvement",
        "Created React-based seller onboarding dashboard reducing onboarding time by 30% for 600+ monthly registrations",
        "Developed predictive forecasting models improving inventory accuracy by 25%",
        "Implemented Snowflake anomaly detection system providing bi-weekly sales insights",
        "Led SaaS platform transformation to multi-tenant architecture enabling global scalability",
        "Mentored team through technical interviews and onboarded 3 engineers"
      ],
      technologies: ["React", "Node.js", ".NET Core", "PostgreSQL", "MongoDB", "Snowflake", "Python", "ML", "System Design"],
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      company: "Aga Khan Education Board",
      position: "Web Development Intern",
      duration: "Feb 2021 - Mar 2021",
      location: "Mumbai, India",
      type: "Internship",
      description:
        "Developed full-stack school information portal with comprehensive database integration and responsive design.",
      achievements: [
        "Built complete school information portal using Node.js, MySQL, and React",
        "Implemented location-based filtering and encrypted URL systems",
        "Delivered responsive interface with curriculum database integration",
        "Demonstrated adaptability for global user bases across education boards"
      ],
      technologies: ["Node.js", "MySQL", "React", "JavaScript"],
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-emerald-500 to-teal-600",
      link: "https://akeb.iiindia.org/?a=51c802d3&l=en",
      linkText: "AKEB School Info"
    }
  ];

  const certifications = [
    {
      name: "HackerRank Certified: Core Java",
      issuer: "HackerRank",
      id: "0aae57b1fde8",
      icon: <Code className="w-4 h-4" />,
      link: "https://www.hackerrank.com/certificates/0aae57b1fde8"
    },
    {
      name: "Docker for Developers",
      issuer: "LinkedIn Learning",
      icon: <Database className="w-4 h-4" />
    },
    {
      name: "Data for Good – APJ Award 2025",
      issuer: "Snowflake",
      year: "2025",
      contribution: "Recognized as part of Grow Indigo's data innovation team delivering impactful agritech solutions",
      image: "/snowflake-award.jpeg",
      type: "award" as const,
    },
  ];

  const openModal = (cert: any) => {
    if (cert.image) {
      setModalImage(cert);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section id="experience" className="section-full section-padding relative noise-bg overflow-hidden">
        {/* Abstract Background Blobs */}
        <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--gradient-end), transparent)', filter: 'blur(100px)' }}
        />
        <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--gradient-start), transparent)', filter: 'blur(100px)' }}
        />

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3 sm:mb-4 border border-primary/20 backdrop-blur-md">
              <Briefcase size={12} /> Career Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Building enterprise-scale solutions with measurable business impact
            </p>
          </div>

          {/* ═══ Experience Timeline ═══ */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line (Desktop only) */}
            <div className="absolute left-[39px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => {
                const [isExpanded, setIsExpanded] = useState(false);
                return (
                  <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-8 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>

                    {/* Timeline Node */}
                    <div className="hidden md:flex flex-col items-center z-10">
                      <div className={`w-[80px] h-[80px] rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-xl shadow-primary/20 border-2 border-background ring-4 ring-primary/10 relative group hover:scale-110 transition-transform duration-500`}>
                        {exp.icon}
                        {/* Glow behind node */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.gradient} opacity-50 blur-xl -z-10 group-hover:opacity-100 transition-opacity duration-500`} />
                      </div>
                    </div>

                    {/* Glass Card */}
                    <div className="flex-1 group relative">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />

                      <div className="relative rounded-3xl border border-border/30 backdrop-blur-xl p-6 sm:p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-1 overflow-hidden"
                        style={{ background: 'rgba(255,255,255,0.4)', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
                      >
                        <div className="absolute inset-0 bg-card/60 dark:bg-card/80 backdrop-blur-xl rounded-3xl" />

                        <div className="relative z-10">
                          {/* Mobile Node + Header Row */}
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                            <div className="flex items-center gap-4 md:block md:gap-0">
                              {/* Mobile Icon */}
                              <div className={`md:hidden shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-lg`}>
                                {exp.icon}
                              </div>
                              <div>
                                <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                                  {exp.position}
                                </h3>
                                <div className="text-sm sm:text-base font-semibold text-primary/80 mt-1 flex items-center gap-2">
                                  {exp.company}
                                  {exp.link && (
                                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-colors">
                                      <ExternalLink size={12} />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Meta Badges */}
                            <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-[10px] sm:text-xs">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/50 border border-border/40 backdrop-blur-sm text-muted-foreground font-medium">
                                <Calendar size={12} className="text-primary/70" /> {exp.duration}
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/50 border border-border/40 backdrop-blur-sm text-muted-foreground font-medium">
                                <MapPin size={12} className="text-primary/70" /> {exp.location}
                              </span>
                            </div>
                          </div>

                          <div className={`sm:block ${isExpanded ? 'block' : 'hidden'}`}>
                            {/* Description */}
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                              {exp.description}
                            </p>

                            {/* Achievements */}
                            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-muted/20 border border-border/20">
                              <h4 className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold text-primary mb-4 uppercase tracking-wider">
                                <Sparkles size={12} /> Key Achievements
                              </h4>
                              <ul className="space-y-3">
                                {exp.achievements.map((achievement, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                                    <span className={`flex-shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-r ${exp.gradient}`} />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Mobile Collapsed State (Truncated Description) */}
                          <div className={`sm:hidden ${!isExpanded ? 'block' : 'hidden'} mb-4`}>
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                              {exp.description}
                            </p>
                          </div>

                          {/* Mobile Read More Toggle */}
                          <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="sm:hidden w-full py-2.5 mt-2 mb-6 rounded-xl bg-primary/10 text-primary text-sm font-bold border border-primary/20 hover:bg-primary/20 transition-colors flex justify-center items-center gap-2"
                          >
                            {isExpanded ? 'Read less' : 'Read more'}
                          </button>


                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span key={tech} className="px-3 py-1 rounded-lg bg-background/60 border border-border/30 shadow-sm backdrop-blur-md text-[10px] sm:text-xs font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ═══ Education & Certifications Grid ═══ */}
          <div className="mt-24 sm:mt-32 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-border/40 flex-1" />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-secondary/30 text-secondary-foreground border border-border/40 backdrop-blur-md">
                <GraduationCap size={14} /> Education & Credentials
              </div>
              <div className="h-px bg-border/40 flex-1" />
            </div>

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 sm:gap-8">

              {/* Education Column */}
              <div className="group relative overflow-hidden rounded-3xl border border-border/30 backdrop-blur-xl p-6 sm:p-8 hover:border-primary/20 transition-all duration-500"
                style={{ background: 'rgba(255,255,255,0.4)', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
              >
                <div className="absolute inset-0 bg-card/60 dark:bg-card/80 backdrop-blur-xl rounded-3xl" />
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-violet-500 opacity-[0.05] blur-3xl pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Users size={24} />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">University of Mumbai</h4>
                  <p className="text-sm text-primary mb-6">Mumbai, India</p>

                  <div className="space-y-4 p-4 rounded-2xl bg-muted/20 border border-border/20">
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-foreground">B.E. Electronics & Telecommunication</p>
                      <p className="text-xs text-muted-foreground mt-1">Aug 2017 — June 2021</p>
                    </div>
                    <div className="pt-4 border-t border-border/20">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 border border-border/30">
                        <span className="text-xs text-muted-foreground">CGPA:</span>
                        <span className="text-sm font-bold gradient-text">7.52 / 10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Column */}
              <div className="group relative overflow-hidden rounded-3xl border border-border/30 backdrop-blur-xl p-6 sm:p-8 hover:border-primary/20 transition-all duration-500"
                style={{ background: 'rgba(255,255,255,0.4)', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
              >
                <div className="absolute inset-0 bg-card/60 dark:bg-card/80 backdrop-blur-xl rounded-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-amber-500 opacity-[0.05] blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                        <Award size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-display font-bold text-foreground">Certifications & Awards</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{certifications.length} Credentials</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:gap-4">
                    {certifications.map((cert, idx) => (
                      <div
                        key={idx}
                        className={`group/cert relative overflow-hidden rounded-2xl border transition-all duration-300 ${cert.type === 'award'
                          ? 'border-blue-500/30 hover:border-blue-500/60 shadow-md cursor-pointer hover:-translate-y-1'
                          : 'border-border/30 hover:border-primary/20 bg-muted/10 hover:bg-muted/20'
                          }`}
                        onClick={() => cert.type === 'award' && openModal(cert)}
                      >
                        {/* Background for award type */}
                        {cert.type === 'award' && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-90" />
                        )}

                        <div className="relative z-10 p-4 flex items-center gap-3 sm:gap-4">
                          {cert.type === 'award' && cert.image ? (
                            <div className="shrink-0 w-10 h-10 rounded-xl overflow-hidden border border-white/20 shadow-inner">
                              <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-inner ${cert.type === 'award' ? 'bg-white/20 text-white' : 'bg-background border border-border/40 text-primary'
                              }`}>
                              {cert.icon || <Award size={16} />}
                            </div>
                          )}

                          <div className="flex-1 min-w-0 pr-2">
                            {cert.link ? (
                              <a href={cert.link} target="_blank" rel="noopener noreferrer"
                                className={`text-xs sm:text-sm font-bold truncate block transition-colors group-hover/cert:underline ${cert.type === 'award' ? 'text-white' : 'text-foreground hover:text-primary'
                                  }`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                {cert.name} <ExternalLink size={10} className="inline opacity-50 ml-1" />
                              </a>
                            ) : (
                              <p className={`text-xs sm:text-sm font-bold truncate ${cert.type === 'award' ? 'text-white' : 'text-foreground'}`}>
                                {cert.name}
                              </p>
                            )}
                            <p className={`text-[10px] sm:text-xs mt-0.5 ${cert.type === 'award' ? 'text-white/80' : 'text-muted-foreground'}`}>
                              {cert.issuer} {cert.year ? `• ${cert.year}` : ''}
                            </p>
                          </div>

                          {cert.type === 'award' && (
                            <div className="shrink-0 px-2 py-1 rounded-lg bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-bold text-white border border-white/20">
                              🏆 Award
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Award Detail Modal ═══ */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" />

          <div className="relative w-full max-w-2xl rounded-3xl border border-border/30 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            style={{ background: 'rgba(255,255,255,0.7)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-card/80 dark:bg-card/90 backdrop-blur-xl" />
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="flex items-start justify-between p-6 sm:p-8 border-b border-border/20">
                <div className="pr-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-500 mb-3 border border-blue-500/20 uppercase tracking-widest">
                    <Award size={10} /> {modalImage.issuer}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground leading-tight">
                    {modalImage.name}
                  </h3>
                  {modalImage.year && (
                    <p className="text-xs text-muted-foreground mt-2 font-medium">Awarded {modalImage.year}</p>
                  )}
                </div>
                <button onClick={closeModal}
                  className="shrink-0 w-10 h-10 rounded-full bg-muted/50 border border-border/40 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive flex items-center justify-center transition-all duration-200"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="rounded-2xl overflow-hidden bg-black/5 border border-border/20 mb-6 shadow-inner">
                  <img
                    src={modalImage.image}
                    alt={modalImage.name}
                    className="w-full h-auto max-h-[50vh] object-contain hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {modalImage.contribution && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">
                      <Sparkles size={14} /> Description
                    </h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {modalImage.contribution}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
