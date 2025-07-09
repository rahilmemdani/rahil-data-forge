
import React, { useState } from 'react';
import { ExternalLink, Database, Brain, BarChart3 } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Grow Indigo - Agritech Platform",
      description: "Led full-stack development for enterprise agritech platform serving 2M+ users across 15+ states with predictive analytics and commission management systems.",
      longDescription: "Built comprehensive agritech solution with commission analytics processing 5,000+ monthly transactions, seller onboarding dashboard serving 600+ monthly registrations, and predictive forecasting models improving inventory accuracy by 25%.",
      technologies: ["React", "Node.js", ".NET Core", "PostgreSQL", "MongoDB", "Snowflake", "Python", "Machine Learning"],
      features: [
        "Commission analytics system with 10% revenue accuracy improvement",
        "React-based seller onboarding dashboard reducing onboarding time by 30%",
        "Predictive forecasting models with 25% inventory accuracy improvement",
        "Snowflake anomaly detection for bi-weekly sales insights",
        "Multi-tenant SaaS platform architecture"
      ],
      metrics: {
        users: "2M+",
        accuracy: "25%",
        transactions: "5K+/month"
      },
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      status: "Production",
      url: "https://www.growindigo.co.in/"
    },
    {
      id: 2,
      title: "Timeless Tales Decor",
      description: "Full-stack e-commerce platform for home decor with modern design, responsive interface, and seamless user experience.",
      longDescription: "Developed complete e-commerce solution with product catalog, shopping cart, user authentication, and payment integration. Features modern UI/UX design with mobile-first approach.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Stripe API"],
      features: [
        "Responsive product catalog with search and filtering",
        "Shopping cart and checkout process",
        "User authentication and profile management",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management"
      ],
      metrics: {
        performance: "Fast",
        responsive: "100%",
        uptime: "99.9%"
      },
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      status: "Live",
      url: "https://timelesstalesdecor.vercel.app/"
    },
    {
      id: 3,
      title: "Corra Culinary",
      description: "Modern restaurant web application featuring menu showcase, online ordering system, and customer management.",
      longDescription: "Built comprehensive restaurant management system with menu display, online ordering capabilities, customer reviews, and reservation system. Implemented modern design principles with smooth animations.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "API Integration"],
      features: [
        "Interactive menu with category filtering",
        "Online ordering and cart management",
        "Customer review and rating system",
        "Reservation booking system",
        "Mobile-responsive design"
      ],
      metrics: {
        orders: "Seamless",
        design: "Modern",
        mobile: "Optimized"
      },
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      status: "Live",
      url: "https://corra-culinary.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </a>
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
                      
                      <h4 className="font-semibold mb-2 text-primary">Key Features</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
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
            Interested in collaborating on innovative projects?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
