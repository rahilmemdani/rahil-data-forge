
import React from 'react';
import { MapPin, Calendar, TrendingUp, Users, Database, Code, ExternalLink } from 'lucide-react';

const Experience = () => {
  // const experiences = [
  //   {
  //     company: "Grow Indigo",
  //     position: "Software Development Engineer II",
  //     duration: "Aug 2021 - Present",
  //     location: "Mumbai, India",
  //     type: "Full-time",
  //     description:
  //       "Promoted from SDE-I to SDE-II for leading large-scale full-stack projects, driving platform-wide innovation, and mentoring team members in a fast-paced agritech environment serving 2M+ users.",
  //     achievements: [
  //       "Built commission analytics system processing 5,000+ monthly transactions with 10% revenue accuracy improvement",
  //       "Created React-based seller onboarding dashboard reducing onboarding time by 30% for 600+ monthly registrations",
  //       "Developed predictive forecasting models improving inventory accuracy by 25% through machine learning",
  //       "Implemented Snowflake anomaly detection providing bi-weekly sales insights for data-driven decisions",
  //       "Led SaaS platform transformation to multi-tenant architecture enabling global scalability",
  //       "Mentored team through technical interviews and onboarded 3 engineers",
  //       "Recognized for ownership and cross-functional collaboration, leading to promotion to SDE-II in July 2025"
  //     ],
  //     technologies: [
  //       "React",
  //       "Node.js",
  //       ".NET Core",
  //       "PostgreSQL",
  //       "MongoDB",
  //       "Snowflake",
  //       "Python",
  //       "Machine Learning"
  //     ],
  //     icon: <TrendingUp className="w-6 h-6" />,
  //     color: "from-primary to-blue-500"
  //   },
  //   {
  //     company: "Aga Khan Education Board",
  //     position: "Web Development Intern",
  //     duration: "Feb 2021 - Mar 2021",
  //     location: "Mumbai, India",
  //     type: "Internship",
  //     description:
  //       "Developed full-stack school information portal with comprehensive database integration and responsive design.",
  //     achievements: [
  //       "Built complete school information portal using Node.js, MySQL, and React",
  //       "Implemented location-based filtering and encrypted URL systems for security",
  //       "Delivered responsive interface with comprehensive curriculum database integration",
  //       "Demonstrated adaptability for global user bases across multiple education boards"
  //     ],
  //     technologies: ["Node.js", "MySQL", "React", "JavaScript", "HTML5", "CSS3"],
  //     icon: <Code className="w-6 h-6" />,
  //     color: "from-secondary to-green-500",
  //     link: "https://akeb.iiindia.org/?a=51c802d3&l=en",
  //     linkText: "AKEB School Info Microsite"
  //   }
  // ];
  
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
    {
      name: "Introduction to SQL",
      issuer: "DataCamp",
      icon: <Database className="w-5 h-5" />
    }
  ];

  return (
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

            {/* Certifications */}
            <div className="card-glass">
              <h4 className="font-bold text-lg mb-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-white mr-4">
                  <Database size={20} />
                </div>
                Professional Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="text-primary mt-0.5">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      {cert.link ? (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-sm hover:text-primary transition-colors flex items-center"
                        >
                          {cert.name}
                          <ExternalLink size={12} className="ml-1" />
                        </a>
                      ) : (
                        <p className="font-medium text-sm">{cert.name}</p>
                      )}
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      {cert.id && (
                        <p className="text-xs text-primary font-mono">{cert.id}</p>
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
  );
};

export default Experience;
