import React, { useState } from 'react';
import { MapPin, Calendar, TrendingUp, Users, Database, Code, ExternalLink, X, Award, Sparkles } from 'lucide-react';

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
      icon: <TrendingUp className="w-5 h-5" />,
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
      icon: <Code className="w-5 h-5" />,
      gradient: "from-emerald-500 to-teal-600",
      link: "https://akeb.iiindia.org/?a=51c802d3&l=en",
      linkText: "AKEB School Info Microsite"
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
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="experience" className="section-full section-padding relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'linear-gradient(135deg, var(--gradient-end), var(--gradient-start))', filter: 'blur(100px)' }}
        />

        <div className="container-custom relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
              <Sparkles size={12} /> Career Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building enterprise-scale solutions with measurable business impact
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-5 top-16 w-px h-16 bg-gradient-to-b from-primary/30 to-transparent hidden md:block" />
                )}

                <div className="flex gap-4 md:gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 hidden md:block">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {exp.icon}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="card-glass flex-1 p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-display font-bold">{exp.position}</h3>
                        <div className="text-base font-semibold text-primary mt-1">{exp.company}</div>
                        {exp.link && (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-muted-foreground hover:text-primary transition-colors mt-1">
                            {exp.linkText} <ExternalLink size={10} className="ml-1" />
                          </a>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1"><Calendar size={12} />{exp.duration}</span>
                        <span className="inline-flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                        <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">{exp.type}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-5">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-5">
                      <h4 className="text-xs font-mono font-semibold text-primary mb-3 uppercase tracking-wider">// Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-md bg-muted/50 dark:bg-muted/30 text-[10px] font-medium text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="mt-20 pt-16 border-t border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
              Education & <span className="gradient-text">Certifications</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Education */}
              <div className="card-glass p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold">University of Mumbai</h4>
                    <p className="text-xs text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold">B.E. Electronics & Telecommunication</p>
                  <p className="text-xs text-muted-foreground">Aug 2017 — June 2021</p>
                  <p className="text-sm"><span className="font-medium text-primary">CGPA: 7.52/10</span></p>
                </div>
              </div>

              {/* Certifications */}
              <div className="card-glass p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold">Certifications & Awards</h4>
                    <p className="text-xs text-muted-foreground">{certifications.length} credentials</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl transition-all duration-300 cursor-pointer hover:scale-[1.01] ${cert.type === 'award'
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                          : 'bg-muted/30 hover:bg-muted/50'
                        }`}
                      onClick={() => openModal(cert)}
                    >
                      <div className="flex items-center gap-2">
                        {cert.type === 'award' && cert.image ? (
                          <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/30">
                            <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cert.type === 'award' ? 'bg-white/20' : 'bg-primary/10'
                            }`}>
                            {cert.icon || <Award size={14} />}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          {cert.link ? (
                            <a href={cert.link} target="_blank" rel="noopener noreferrer"
                              className={`text-xs font-semibold hover:underline flex items-center gap-1 ${cert.type === 'award' ? 'text-white' : ''}`}
                              onClick={(e) => e.stopPropagation()}>
                              {cert.name} <ExternalLink size={10} />
                            </a>
                          ) : (
                            <p className={`text-xs font-semibold ${cert.type === 'award' ? 'text-white' : ''}`}>{cert.name}</p>
                          )}
                          <p className={`text-[10px] ${cert.type === 'award' ? 'text-white/80' : 'text-muted-foreground'}`}>{cert.issuer}</p>
                        </div>
                        {cert.type === 'award' && (
                          <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-medium">🏆</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative w-full max-w-3xl bg-background rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: 'calc(100vh - 64px)' }}>
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-border bg-background">
              <div>
                <h3 className="text-lg font-display font-bold">{modalImage.name}</h3>
                <p className="text-xs text-muted-foreground">{modalImage.issuer} • {modalImage.year}</p>
              </div>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="overflow-y-auto p-4" style={{ maxHeight: 'calc(100vh - 140px)' }}>
              <div className="flex justify-center bg-muted/30 rounded-xl p-4 mb-4">
                <img src={modalImage.image} alt={modalImage.name} className="max-w-full max-h-[55vh] object-contain rounded-lg" />
              </div>
              {modalImage.contribution && (
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <h4 className="text-sm font-semibold mb-2">Award Details</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{modalImage.contribution}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
