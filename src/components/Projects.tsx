import React from 'react';
import { Building2, Palette, ChefHat, BarChart3, Play, Globe, ExternalLink, Sparkles, FileSpreadsheet, Database } from 'lucide-react';
import agriCloudThumb from "/public/agricloud-thumbnail.svg"

const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "Business Intelligence",
      title: "Agricultural Data Analytics Dashboard",
      description: "Comprehensive Power BI dashboard analyzing agricultural performance metrics, farmer engagement, and regional trends. Features interactive visualizations for commission tracking, sales forecasting, and operational efficiency across 15+ states with real-time data integration.",
      technologies: ["Power BI", "DAX", "Power Query", "SQL", "Data Modeling", "Excel Integration"],
      tagline: "Transforming agricultural data into actionable business insights",
      metrics: "15+ states coverage · Real-time analytics · Interactive visualizations",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      url: "https://app.powerbi.com/view?r=eyJrIjoiOTM3MTJkY2YtMDdhYy00YjBlLWFiNTQtNGYxMDAzMmRjZTM0IiwidCI6IjhmYzRlMWZhLTc3NjItNGU0OS1iYzJlLTY0MWQ4YTZkNzUzMCJ9",
      isPowerBI: true
      // isFeatured: true
    },
    {
      id: 2,
      category: "Data & Analytics",
      title: "Snowflake Macros for Grow Indigo",
      description: "Developed reusable Snowflake SQL macros to streamline complex query patterns across agricultural datasets. Enabled modular, efficient, and scalable query logic for enterprise reporting and analytics workloads at Grow Indigo.",
      technologies: ["Snowflake", "SQL Macros", "Data Warehousing", "ETL"],
      tagline: "Reusable data logic for scalable insights",
      metrics: "Reduced query complexity · Improved performance & maintainability",
      icon: <Database className="w-6 h-6" />,
      color: "from-sky-500 to-blue-600"
      // url: "https://www.growindigo.co.in/"
    },
    {
      id: 3,
      category: "Data Reporting",
      title: "Excel Reporting with Snowflake for Mahyco",
      description: "Implemented seamless integration of Snowflake with Excel for Mahyco’s business teams. Delivered automated reporting dashboards enabling real-time access to sales, supply chain, and R&D data directly in Excel, improving decision-making and adoption.",
      technologies: ["Snowflake", "Excel", "ODBC/JDBC", "Power Query", "Data Visualization"],
      tagline: "Excel-native reporting powered by Snowflake",
      metrics: "Real-time data · Automated refresh · High adoption across business teams",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      category: "Enterprise",
      title: "Grow Indigo - AgriTech Platform",
      description: "Enterprise-scale agricultural technology platform serving 2M+ farmers across 15+ states with 7M+ acres coverage. Built scalable systems for sustainable agriculture, biological products, and carbon solutions.",
      technologies: ["React", "Node.js", ".NET Core", "PostgreSQL", "AWS"],
      tagline: "Accelerated ag transformation for healthy planet",
      metrics: "2M+ farmers, 15+ states, 7M+ acres",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      url: "https://www.growindigo.co.in/"
    },
    {
      id: 5,
      category: "Enterprise Dashboard",
      title: "SaaS Platform",
      description: "SaaS platform streamlining onboarding, commission, and payments. Achieved 20% time savings, 20% better recovery, 10% cost savings, and enabled 5+ schemes with expert-built architecture.",
      technologies: ["React", "Typescript", "NodeJS", ".NET Core", "PostgreSQL", "MongoDB"],
      tagline: "Streamlined seller operations with data-driven insights",
      metrics: "Part of Grow Indigo's AgriCloud Platform — automation, insights, scale",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      isDemo: true,
      demoVideoUrl: "https://www.loom.com/share/your-demo-link-here"
    },
    {
      id: 6,
      category: "E-Commerce",
      title: "Zoshe - Luxury Perfume Platform",
      description: "Modern e-commerce platform specializing in premium fragrances with advanced SEO optimization, intelligent product search, and seamless mobile experience. Features comprehensive analytics tracking, optimized product pages, and conversion-focused UX design.",
      technologies: ["React", "JavaScript", "CSS3", "Google Analytics", "SEO Optimization", "Responsive Design"],
      tagline: "Where luxury meets technology in fragrance commerce",
      metrics: "Active e-commerce platform · SEO optimized · Mobile-first design",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      url: "https://www.zoshe.in/",
      isFeatured: true
    },
    {
      id: 7,
      category: "Design & Events",
      title: "Timeless Tales Decor",
      description: "Elegant event design and styling platform for intimate celebrations including gender reveals, baby & bridal showers, proposals, and weddings. Features custom backdrop designs and full event styling services.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      tagline: "Transforming ordinary moments into timeless memories",
      metrics: "Custom event designs & styling services",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500 to-purple-500",
      url: "https://timelesstalesdecor.vercel.app/"
    },
    {
      id: 8,
      category: "Hospitality",
      title: "Corra Culinary",
      description: "Premium restaurant experience platform featuring culinary artistry where tradition meets innovation. Includes daily specials, menu management, location services, and reservation systems across Mumbai.",
      technologies: ["React", "Next.js", "JavaScript", "CSS3"],
      tagline: "Celebrating flavor and craft through digital experience",
      metrics: "Multiple locations, premium dining experience",
      icon: <ChefHat className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
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
            Explore real-world applications built with modern technologies, optimized UX, and scalable architectures.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card-glass group ${project.isFeatured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-card to-muted/20' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300 ${project.isFeatured ? 'shadow-lg' : ''}`}>
                  {project.icon}
                </div>
                <div>
                  <div className={`text-sm font-medium mb-1 ${project.isFeatured ? 'text-primary font-bold' : 'text-primary'}`}>
                    {project.category}
                  </div>
                  <h3 className={`text-2xl font-bold group-hover:text-primary transition-colors duration-300 ${project.isFeatured ? 'text-3xl' : ''}`}>
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Featured Project Highlights */}
              {project.isFeatured && (
                <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Key Features & Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      SEO-optimized product pages
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Google Analytics integration
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Intelligent product search
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Mobile-first responsive design
                    </div>
                  </div>
                </div>
              )}

              {/* Demo Video Section for Dashboard */}
              {project.isDemo && (
                <div className="mb-6">
                  <div className="bg-muted/20 rounded-lg p-4 border border-border/50">
                    {/* Powered by AgriCloud */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-foreground">Powered by</span>
                      <img
                        src={agriCloudThumb}
                        alt="AgriCloud Logo"
                        className="h-7 w-auto rounded-sm object-contain"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      The internal dashboard requires authentication. View the public product page for a high-level overview to explore capabilities.
                    </p>

                    {/* Product Link */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://www.growindigo.co.in/agri-cloud/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border/50 rounded-lg hover:shadow-md transition text-sm font-medium"
                      >
                        <Globe className="w-5 h-5 text-primary mr-2" />
                        <span className="text-foreground">Product Website</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-sm rounded-full font-medium ${
                      project.isFeatured 
                        ? 'bg-primary/30 text-primary border border-primary/20' 
                        : 'bg-primary/20 text-primary'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Tagline and Metrics */}
              <div className="border-t border-border/50 pt-4 space-y-2">
                <div className={`font-medium ${project.isFeatured ? 'text-primary font-semibold' : 'text-foreground'}`}>
                  {project.tagline}
                </div>
                <div className="text-sm text-muted-foreground">{project.metrics}</div>
              </div>

              {/* Elegant Visit Link for public projects */}
              {!project.isDemo && project.url && (
                <div className="mt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:shadow-md transition text-sm font-medium ${
                      project.isFeatured
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
                        : 'bg-background border border-border/50 text-foreground'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{project.isFeatured ? 'Explore Live Platform' : 'Visit Project'}</span>
                  </a>
                </div>
              )}
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
