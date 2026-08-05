import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Share2,
  Check,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import LSNlogo from '../../public/lsn-logo.png';
import Ivorylogo from '../../public/ivory-logo.png';
import Twenty2ndlogo from '../../public/22nd-logo.png';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  logoUrl: string;
  igUrl: string;
  liveUrl: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 'lsn',
    title: 'LSN Lagree',
    category: 'Fitness Platform',
    tagline: 'High-intensity fitness experience & scheduling web app.',
    logoUrl: LSNlogo,
    igUrl: 'https://www.instagram.com/lsnlagree/',
    liveUrl: 'https://lsn-lagree.netlify.app/'
  },
  {
    id: 'ivory',
    title: 'Ivory Atelier',
    category: 'Luxury Fashion',
    tagline: 'Exclusive luxury fashion atelier & digital showcase.',
    logoUrl: Ivorylogo,
    igUrl: 'https://www.instagram.com/ivoryatelierjuhu/',
    liveUrl: 'https://ivory-proj-dep.netlify.app/'
  },
  {
    id: '22nd',
    title: '22nd Avenue',
    category: 'Talent Management',
    tagline: 'Premier talent management and creator representation agency.',
    logoUrl: Twenty2ndlogo,
    igUrl: 'https://www.instagram.com/22ndavenuetalentmanagement/',
    liveUrl: 'https://22ndavenue.netlify.app/'
  }
];

const ComingSoon: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Client Showcase | Portfolio";
  }, []);

  const handleShare = (project: ProjectItem, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(project.liveUrl);
    setCopiedId(project.id);
    toast.success(`Copied link for ${project.title}!`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans selection:bg-[#E5E5E0] selection:text-[#1A1A1A]">
      {/* ══════════════ HEADER BAR ══════════════ */}
      <header className="sticky top-0 z-40 w-full border-b border-[#EAEAE5] bg-[#FAFAF8]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-xs font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#F0F0EC] flex items-center justify-center group-hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </header>

      {/* ══════════════ HERO SECTION ══════════════ */}
      <section className="pt-16 pb-10 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-mono tracking-widest uppercase text-[#888888]">Curated Works</p>
          <h1 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-[#1A1A1A]">Client Platforms</h1>
          <p className="text-xs sm:text-sm text-[#666666] font-normal">
            Explore clean production builds. Click anywhere on a card to instantly open the live website.
          </p>
        </div>
      </section>

      {/* ══════════════ RESPONSIVE GRID ══════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => window.open(project.liveUrl, '_blank')}
              className="group relative flex flex-col bg-white hover:bg-[#FCFCFB] rounded-2xl border border-[#EAEAE5] hover:border-[#D0D0C8] p-7 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Top Row: Category & Share */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">
                  {project.category}
                </span>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={(e) => handleShare(project, e)}
                    className="p-1.5 rounded-lg text-[#888888] hover:text-[#1A1A1A] hover:bg-[#F5F5F0] transition-colors"
                    title="Copy Link"
                  >
                    {copiedId === project.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Share2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Logo & Title Section */}
              <div className="space-y-4 mb-6 flex-1">
                <div className="h-12 flex items-center">
                  <img
                    src={project.logoUrl}
                    alt={`${project.title} logo`}
                    className="max-h-10 max-w-[140px] object-contain"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-normal tracking-tight text-[#1A1A1A] group-hover:text-[#A3704C] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#EAEAE5] flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                <div
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#1A1A1A] group-hover:text-[#A3704C] transition-colors cursor-pointer"
                >
                  <span>Visit website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>

                {/* Single Clean Instagram Icon Button */}
                <a
                  href={project.igUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#F5F5F0] hover:bg-[#EAEAE5] border border-[#EAEAE5] flex items-center justify-center text-[#1A1A1A] transition-colors shrink-0"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4 text-[#A3704C]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;