
import React, { useState } from 'react';
import { ExternalLink, Github, Database, Brain, BarChart3, Zap } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Predictive Sales Forecasting Engine",
      description: "Built an end-to-end predictive analytics solution using advanced machine learning to forecast sales trends with 92% accuracy for enterprise agritech platform.",
      longDescription: "Developed a comprehensive forecasting system that processes 5,000+ monthly transactions and serves 2M+ users across 15+ states. The system combines time series analysis, statistical modeling, and machine learning algorithms to predict sales patterns and inventory requirements.",
      technologies: ["Python", "Scikit-learn", "PostgreSQL", "React", "Node.js", "Machine Learning"],
      features: [
        "Real-time data processing and model training",
        "Interactive dashboard with prediction visualization",
        "Automated anomaly detection and alerting",
        "95% improvement in inventory accuracy",
        "35% reduction in stock-out scenarios"
      ],
      metrics: {
        accuracy: "92%",
        users: "2M+",
        improvement: "50%"
      },
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      status: "Production"
    },
    {
      id: 2,
      title: "Enterprise Commission Analytics System",
      description: "Designed and implemented a comprehensive analytics platform for commission tracking and revenue optimization, processing 5,000+ monthly transactions with improved accuracy.",
      longDescription: "Built using .NET Core and PostgreSQL, this system revolutionized commission management by providing real-time analytics, automated reconciliation, and predictive insights for revenue optimization across multiple business units.",
      technologies: [".NET Core", "PostgreSQL", "React", "C#", "SQL", "Analytics"],
      features: [
        "Automated commission calculation and reporting",
        "Real-time transaction processing",
        "Advanced analytics and business intelligence",
        "10% improvement in revenue accuracy",
        "15% faster reporting cycles"
      ],
      metrics: {
        transactions: "5K+/month",
        accuracy: "98%",
        speed: "15x faster"
      },
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      status: "Production"
    },
    {
      id: 3,
      title: "Multi-Tenant SaaS Platform Architecture",
      description: "Led the transformation of monolithic application to scalable multi-tenant SaaS platform, enabling global market expansion and improved performance.",
      longDescription: "Architected and implemented a complete platform transformation supporting multiple tenants with isolated data, customizable features, and enterprise-grade security. The new architecture supports 600+ monthly registrations and serves users across 15+ states.",
      technologies: ["Node.js", "MongoDB", "React", "Docker", "Microservices", "AWS"],
      features: [
        "Multi-tenant architecture with data isolation",
        "Scalable microservices infrastructure",
        "Global deployment capabilities",
        "30% reduction in onboarding time",
        "Enterprise-grade security and compliance"
      ],
      metrics: {
        tenants: "100+",
        uptime: "99.9%",
        scalability: "10x"
      },
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      status: "Production"
    },
    {
      id: 4,
      title: "Automated ETL Pipeline & Analytics",
      description: "Developed scalable data pipeline architecture processing millions of records daily with automated workflows, reducing manual errors by 40%.",
      longDescription: "Created comprehensive ETL pipelines using Node.js and PostgreSQL for processing agricultural data at scale. The system includes automated data validation, transformation, and real-time analytics capabilities.",
      technologies: ["Node.js", "PostgreSQL", "Python", "Apache Airflow", "Docker", "AWS"],
      features: [
        "Automated data ingestion and processing",
        "Real-time data validation and quality checks",
        "Scalable pipeline architecture",
        "40% reduction in manual errors",
        "200+ automated monthly reports"
      ],
      metrics: {
        records: "10M+/day",
        automation: "95%",
        errors: "-40%"
      },
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      status: "Production"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-scale solutions that transform data into competitive advantages
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-glass group cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border/50">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted/50 text-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Expanded Content */}
                {selectedProject === project.id && (
                  <div className="mt-6 space-y-4 animate-fade-in-up">
                    <div className="border-t border-border/50 pt-4">
                      <h4 className="font-semibold mb-2 text-primary">Project Details</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.longDescription}
                      </p>
                      
                      <h4 className="font-semibold mb-2 text-primary">Key Features & Impact</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex space-x-4 mt-6">
                        <button className="flex items-center px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors">
                          <Github size={16} className="mr-2" />
                          View Code
                        </button>
                        <button className="flex items-center px-4 py-2 bg-secondary/20 text-secondary rounded-lg text-sm font-medium hover:bg-secondary/30 transition-colors">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in building something similar for your business?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Let's Collaborate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
