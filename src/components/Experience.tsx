import React, { useState } from 'react';
import { MapPin, Calendar, TrendingUp, Users, Database, Code, ExternalLink, X } from 'lucide-react';

const Experience = () => {
  const [modalImage, setModalImage] = useState(null);

  // ... (keeping all your existing data unchanged)
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
        "Developed predictive forecasting models improving inventory accuracy by 25% through machine learning algorithms",
        "Implemented Snowflake anomaly detection system providing bi-weekly sales insights for data-driven strategic decisions",
        "Led SaaS platform transformation to multi-tenant architecture enabling global scalability and improved performance",
        "Mentored team through technical interviews and successfully onboarded 3 engineers, demonstrating leadership capabilities"
      ],
      technologies: [
        "React",
        "Node.js",
        ".NET Core",
        "PostgreSQL",
        "MongoDB",
        "Snowflake",
        "Python",
        "Machine Learning",
        "System Design",
        "Multi-tenant Architecture"
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-primary to-blue-500"
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
        "Implemented location-based filtering and encrypted URL systems for enhanced security",
        "Delivered responsive interface with comprehensive curriculum database integration",
        "Demonstrated adaptability for global user bases across multiple education boards"
      ],
      technologies: ["Node.js", "MySQL", "React", "JavaScript", "HTML5", "CSS3"],
      icon: <Code className="w-6 h-6" />,
      color: "from-secondary to-green-500",
      link: "https://akeb.iiindia.org/?a=51c802d3&l=en",
      linkText: "AKEB School Info Microsite"
    }
  ];

  const certifications = [
    {
      name: "HackerRank Certified: Core Java",
      issuer: "HackerRank",
      id: "0aae57b1fde8",
      icon: <Code className="w-5 h-5" />,
      link: "https://www.hackerrank.com/certificates/0aae57b1fde8"
    },
    {
      name: "Docker for Developers",
      issuer: "LinkedIn Learning",
      icon: <Database className="w-5 h-5" />
    },
    // {
    //   name: "Introduction to SQL",
    //   issuer: "DataCamp",
    //   icon: <Database className="w-5 h-5" />
    // },
    {
      name: "Data for Good – APJ Award",
      issuer: "Snowflake",
      year: "2025",
      contribution: "Recognized as part of Grow Indigo's data innovation team delivering impactful agritech solutions",
      image: "/snowflake-award.jpeg",
      type: "award",
    },
  ];

  const openModal = (cert) => {
    if (cert.image) {
      setModalImage(cert);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setModalImage(null);
    // Re-enable body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building enterprise-scale solutions with measurable business impact
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-secondary opacity-30" />
                )}

                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white`}>
                      {exp.icon}
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="card-glass flex-1">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
                        <div className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </div>
                        {exp.link && (
                          <a 
                            href={exp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-secondary hover:text-primary transition-colors mb-2"
                          >
                            {exp.linkText}
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                        )}
                      </div>
                      <div className="flex flex-col md:items-end space-y-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar size={16} className="mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <TrendingUp size={18} className="mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <Code size={18} className="mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted/50 text-foreground text-xs rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-20 pt-20 border-t border-border">
            <h3 className="text-3xl font-bold text-center mb-12">
              Education & <span className="gradient-text">Certifications</span>
            </h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Education */}
              <div className="card-glass">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mr-4">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">University of Mumbai</h4>
                    <p className="text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">B.E. Electronics and Telecommunication</p>
                  <p className="text-sm text-muted-foreground">Aug 2017 - June 2021</p>
                  <p className="text-sm">
                    <span className="text-primary font-medium">CGPA: 7.52/10</span>
                  </p>
                </div>
              </div>

              {/* Certifications with Modal */}
              <div className="card-glass p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg">
                <h4 className="font-bold text-2xl mb-8 flex items-center text-white dark:text-white">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-white mr-4">
                    <Database size={24} />
                  </div>
                  Certifications & Awards
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col md:flex-row items-center md:items-start p-5 rounded-xl transition-transform cursor-pointer ${
                        cert.type === "award"
                          ? "bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg hover:scale-105"
                          : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-md hover:shadow-lg"
                      }`}
                      onClick={() => openModal(cert)}
                    >
                      {/* Image/Icon */}
                      {cert.type === "award" && cert.image ? (
                        <div className="relative group">
                          <img
                            src={cert.image}
                            alt={cert.name}
                            className="w-32 h-32 md:w-28 md:h-28 rounded-full border-4 border-white object-cover mb-4 md:mb-0 md:mr-6 flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">Click to view</span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-primary mt-0.5 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                          {cert.icon}
                        </div>
                      )}

                      {/* Details */}
                      <div className="flex-1 text-center md:text-left">
                        {cert.link ? (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-semibold text-lg flex items-center justify-center md:justify-start mb-1 ${
                              cert.type === "award" ? "text-white" : "text-gray-900 dark:text-white"
                            }`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {cert.name}
                            <ExternalLink size={16} className="ml-2" />
                          </a>
                        ) : (
                          <p className={`font-semibold text-lg mb-1 ${cert.type === "award" ? "text-white" : "text-gray-900 dark:text-white"}`}>
                            {cert.name}
                          </p>
                        )}

                        <p className={`text-sm mb-1 ${cert.type === "award" ? "text-white/80" : "text-gray-600 dark:text-gray-300"}`}>
                          {cert.issuer}
                        </p>
                        {cert.id && (
                          <p className={`text-xs font-mono mb-1 ${cert.type === "award" ? "text-white/80" : "text-gray-500 dark:text-gray-400"}`}>
                            {cert.id}
                          </p>
                        )}
                        {cert.year && (
                          <p className={`text-xs mb-1 ${cert.type === "award" ? "text-white/80" : "text-gray-500 dark:text-gray-400"}`}>
                            Year: {cert.year}
                          </p>
                        )}
                        {cert.contribution && (
                          <p className={`text-xs ${cert.type === "award" ? "text-white/80" : "text-gray-500 dark:text-gray-400"}`}>
                            {cert.contribution}
                          </p>
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

      {/* Fixed Scrollable Modal for Mobile */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 animate-fade-in overflow-y-auto"
          onClick={closeModal}
          style={{ 
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain'
          }}
        >
          <div 
            className="relative w-full max-w-4xl my-4 sm:my-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              maxHeight: 'calc(100vh - 32px)',
              minHeight: 'min-content'
            }}
          >
            {/* Modal Header - Fixed */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="min-w-0 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
                  {modalImage.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 truncate">
                  {modalImage.issuer} • {modalImage.year}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="ml-4 w-10 h-10 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
              >
                <X size={20} className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 140px)' }}>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col space-y-6">
                  {/* Image - Full width on mobile */}
                  <div className="w-full flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <img
                      src={modalImage.image}
                      alt={modalImage.name}
                      className="max-w-full max-h-[50vh] sm:max-h-[60vh] object-contain rounded-lg shadow-lg"
                      style={{ 
                        width: 'auto', 
                        height: 'auto',
                        maxWidth: '100%'
                      }}
                    />
                  </div>

                  {/* Details - Stack on mobile, side by side on desktop */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Award Details</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {modalImage.contribution}
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Information</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                          <span className="text-gray-600 dark:text-gray-400">Issuer:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{modalImage.issuer}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                          <span className="text-gray-600 dark:text-gray-400">Year:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{modalImage.year}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                          <span className="text-gray-600 dark:text-gray-400">Type:</span>
                          <span className="font-medium text-blue-600 dark:text-blue-400 capitalize">{modalImage.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Animations */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Ensure smooth scrolling on all devices */
        @media (max-width: 640px) {
          .animate-scale-in {
            animation: mobileScaleIn 0.3s ease-out;
          }
          
          @keyframes mobileScaleIn {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </>
  );
};

export default Experience;
