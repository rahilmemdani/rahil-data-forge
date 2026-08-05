export interface UpcomingProject {
  id: string;
  title: string;
  category: string;
  industry: string;
  tagline: string;
  description: string;
  status: 'coming_soon' | 'in_progress' | 'completed';
  progressPercentage: number;
  expectedRelease: string;
  gradient: string;
  accentColor: string;
  tags: string[];
  highlights: string[];
  caseStudyUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const upcomingProjectsData: UpcomingProject[] = [
  {
    id: "ivory-atelier",
    title: "Ivory Atelier",
    category: "Luxury Beauty & Salon",
    industry: "Beauty & Wellness",
    tagline: "Bespoke digital booking & client management experience for a luxury salon.",
    description: "House for hair, nails, and beauty. A high-touch editorial digital experience combining seamless appointment booking, custom staff scheduling, and VIP client engagement.",
    status: "coming_soon",
    progressPercentage: 85,
    expectedRelease: "Q3 2026",
    gradient: "from-amber-500/20 via-rose-500/20 to-purple-600/20",
    accentColor: "#F59E0B",
    tags: ["Next.js 15", "Tailwind CSS", "Framer Motion", "Zoho Bookings"],
    highlights: [
      "Sub-second page transitions & fluid editorial layout",
      "Custom multi-tier appointment booking engine",
      "Automated VIP client reminders and analytics dashboard"
    ],
    liveUrl: "https://ivory-proj-dep.netlify.app/",
    featured: true
  },
  {
    id: "lsn-lagree",
    title: "LSN Lagree",
    category: "Fitness Studio Platform",
    industry: "Fitness & Wellness",
    tagline: "High-intensity, low-impact strength and conditioning platform using the Lagree method.",
    description: "Premium digital presence for Lagree fitness studio featuring class schedules, trainer rosters, interactive session reservations, and membership management.",
    status: "coming_soon",
    progressPercentage: 75,
    expectedRelease: "Q4 2026",
    gradient: "from-rose-500/20 via-pink-500/20 to-purple-600/20",
    accentColor: "#E11D48",
    tags: ["React 18", "Tailwind CSS", "Framer Motion", "Stripe"],
    highlights: [
      "Dynamic interactive class calendar and instructor rosters",
      "Member-only session booking & pass purchasing portal",
      "Optimized mobile experience with sub-second loading"
    ],
    liveUrl: "https://lsn-lagree.netlify.app/",
    featured: true
  },
  {
    id: "22nd-avenue",
    title: "22nd Avenue",
    category: "Talent & Representation",
    industry: "Talent Management",
    tagline: "Bespoke talent management and artist representation platform.",
    description: "A sleek, high-fashion talent agency platform showcasing curated roster portfolios, media kits, press features, and direct booking inquiries.",
    status: "coming_soon",
    progressPercentage: 90,
    expectedRelease: "Q3 2026",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-600/20",
    accentColor: "#10B981",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "High-resolution artist portfolio showcase & press downloads",
      "Streamlined client booking & casting inquiry workflow",
      "Minimalist aesthetic designed for high-end talent agencies"
    ],
    liveUrl: "https://22ndavenue.netlify.app/",
    featured: true
  }
];
