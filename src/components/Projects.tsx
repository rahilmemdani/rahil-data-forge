import React from 'react';
import { Building2, Palette, ChefHat, BarChart3, Play, Globe, ExternalLink, Sparkles, FileSpreadsheet, Database, Calculator } from 'lucide-react';
import agriCloudThumb from "/public/agricloud-thumbnail.svg";
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    // Your projects array remains unchanged
    {
      id: 1,
      category: "Business Intelligence",
      title: "Agricultural Data Analytics Dashboard",
      description: "Comprehensive Power BI dashboard analyzing agricultural performance metrics, farmer engagement, and regional trends.",
      technologies: ["Power BI", "DAX", "Power Query", "SQL"],
      tagline: "Transforming agricultural data into actionable insights",
      metrics: "15+ states · Real-time analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      url: "https://app.powerbi.com/view?r=eyJrIjoiOTM3MTJkY2YtMDdhYy00YjBlLWFiNTQtNGYxMDAzMmRjZTM0IiwidCI6IjhmYzRlMWZhLTc3NjItNGU0OS1iYzJlLTY0MWQ4YTZkNzUzMCJ9",
      isPowerBI: true
    },
    {
      id: 2,
      category: "Data & Analytics",
      title: "Snowflake Macros for Grow Indigo",
      description: "Reusable Snowflake SQL macros for streamlined query logic across agricultural datasets.",
      technologies: ["Snowflake", "SQL Macros", "Data Warehousing"],
      tagline: "Reusable data logic for scalable insights",
      metrics: "Reduced query complexity",
      icon: <Database className="w-6 h-6" />,
      color: "from-sky-500 to-blue-600"
    },
    {
      id: 3,
      category: "Data Reporting",
      title: "Excel Reporting with Snowflake for Mahyco",
      description: "Seamless Snowflake-Excel integration for real-time sales and R&D reporting.",
      technologies: ["Snowflake", "Excel", "Power Query"],
      tagline: "Excel-native reporting powered by Snowflake",
      metrics: "Real-time data · Automated refresh",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      category: "Enterprise",
      title: "Grow Indigo - AgriTech Platform",
      description: "Scalable platform serving 2M+ farmers across 15+ states with 7M+ acres coverage.",
      technologies: ["React", "Typescript", "NodeJS", ".NET Core", "AWS"],
      tagline: "Accelerated ag transformation",
      metrics: "2M+ farmers · 15+ states",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      url: "https://www.growindigo.co.in/"
    },
    {
      id: 5,
      category: "Enterprise Dashboard",
      title: "SaaS Platform",
      description: "SaaS platform streamlining onboarding, commissions, and payments with 20% time savings.",
      technologies: ["React", "Typescript", "NodeJS", ".NET Core", ".NET Core", "AWS"],
      tagline: "Streamlined seller operations",
      metrics: "Part of AgriCloud · Automation",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      isDemo: true,
      demoVideoUrl: "https://www.loom.com/share/your-demo-link-here"
    },
    {
      id: 6,
      category: "E-Commerce",
      title: "Zoshe - Luxury Perfume Platform",
      description: "SEO-optimized e-commerce platform for premium fragrances with mobile-first design.",
      technologies: [],
      tagline: "Luxury meets technology",
      metrics: "SEO optimized · Mobile-first",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      url: "https://www.zoshe.in/",
      isFeatured: true
    },
    {
      id: 7,
      category: "Business Website",
      title: "Zavlin Bookkeeping Services",
      description: "Professional bookkeeping website with modern UX and SEO optimization.",
      technologies: [],
      tagline: "Simplifying bookkeeping",
      metrics: "SEO optimized · Client-centric",
      icon: <Calculator className="w-6 h-6" />,
      color: "from-indigo-500 to-teal-500",
      url: "https://www.zavlinbookkeeping.com/",
      isFeatured: true
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover impactful projects built with cutting-edge technologies and scalable architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card-glass group rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${project.isFeatured ? 'ring-2 ring-primary/20' : ''}`}
              style={{ animationDelay: `${index * 0.1}s`, animation: 'fadeIn 0.5s ease-in-out' }}
            >
              {/* Thumbnail or Icon */}
              <div className="relative h-40 bg-gradient-to-br from-card to-muted/20">
                {project.isDemo && agriCloudThumb ? (
                  <img
                    src={agriCloudThumb}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${project.color}`}>
                    {React.cloneElement(project.icon, { className: "w-12 h-12 text-white opacity-80" })}
                  </div>
                )}
                {/* External Link Icon */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className={`text-xs font-medium text-primary ${project.isFeatured ? 'font-bold' : ''}`}>
                    {project.category}
                  </span>
                </div>
                <h3 className={`text-lg font-semibold group-hover:text-primary transition-colors ${project.isFeatured ? 'text-xl' : ''}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 text-xs rounded-full ${project.isFeatured ? 'bg-primary/30 text-primary' : 'bg-primary/10 text-primary'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Tagline */}
                <p className={`text-sm ${project.isFeatured ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  {project.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Interested in collaborating on innovative projects?
          </p>
          <Link to="/Contact">
            <button className="btn-primary">
              Let's Connect
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;