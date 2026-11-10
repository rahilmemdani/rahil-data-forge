// All portfolio content lives here. Components only handle presentation.

export const profile = {
  name: 'Rahil Memdani',
  email: 'rmemdanib@gmail.com',
  phone: '+61 428 020 932',
  phoneHref: 'tel:+61428020932',
  location: 'Perth, Western Australia',
  resume: '/Rahil_Memdani_Resume.pdf',
  calLink: 'rahil-memdani-g3c9vb',
  linkedin: 'https://www.linkedin.com/in/rahil-memdani-8968681ab/',
  github: 'https://github.com/rahilmemdani',
  substack: 'https://rahilmemdani.substack.com',
};

export const basecase = {
  url: 'https://www.basecasetech.com.au/',
  contact: 'https://www.basecasetech.com.au/contact',
  pitch: 'One engineering team for everything your business runs on.',
  cofounder: { name: 'Darshan Patel', city: 'Melbourne', linkedin: 'https://www.linkedin.com/in/darshangpatel/' },
  services: [
    'Websites',
    'App development',
    'AI assistants',
    'SEO and AI search',
    'Data and reporting',
    'Security',
    'CRM and email',
    'Integrations',
    'Cloud and hosting',
    'IT consulting',
  ],
  process: [
    { when: 'Day one', title: 'A first call', body: 'Thirty minutes on your goals and what is in the way.' },
    { when: 'Days 2 to 3', title: 'A written plan', body: 'Scope, timeline and cost agreed before work starts.' },
    { when: 'Every week', title: 'Built in the open', body: 'A working preview inside seven days, then weekly demos.' },
    { when: 'Launch', title: 'You own it', body: 'Your code, your accounts, full notes. No lock-in.' },
  ],
};

export interface Project {
  name: string;
  industry: string;
  built: string;
  url: string;
  domain: string;
  /* Screenshot of the live homepage, when one could be captured cleanly */
  image?: string;
  logo?: string;
}

/* Order matters: signature first, then the next three, then everything else. */
export const signature = {
  name: 'Tribe Wellness Co',
  industry: 'Boutique gym and personal training, Jolimont, Perth',
  summary:
    'A boutique gym offering small-group classes, personal training and 24/7 access needed a site that turns visitors into members.',
  features: [
    'A 20-second membership finder',
    'Online sign-up in two minutes',
    'Live class timetable',
    'Pricing pulled straight from the booking system',
    'Members area with an attendance leaderboard and community wall',
  ],
  url: 'https://www.tribewellnessco.com.au/',
  domain: 'tribewellnessco.com.au',
  image: '/work/tribe.jpg',
};

export const featured: (Project & { quote?: string; caseStudy?: string })[] = [
  {
    name: 'Ray Mancini',
    industry: 'Coaching, publishing and podcast',
    built: 'One home for a podcast, three books, a coaching program and a membership, with Stripe payments, AWS hosting and booking from the nav.',
    url: 'https://raymancini.au/',
    domain: 'raymancini.au',
    image: '/work/ray.jpg',
    quote: 'An absolute game-changer.',
    caseStudy: 'https://www.basecasetech.com.au/work/ray-mancini',
  },
  {
    name: 'WBW.LIFE',
    industry: 'Executive performance program, Perth',
    built: 'A 3D product reveal and live seat counts for each cohort.',
    url: 'https://wbw.life/',
    domain: 'wbw.life',
    image: '/work/wbw.jpg',
  },
  {
    name: 'LSN Lagree',
    industry: 'India’s first Lagree studio',
    built: 'An interactive class schedule with instant reservations.',
    url: 'https://lsnlagree.com/',
    domain: 'lsnlagree.com',
    image: '/work/lsn.jpg',
  },
];

export const moreWork: Project[] = [
  { name: 'Healthy Soya', industry: 'Food and consumer goods', built: 'B2B distributor portal and nutrition matrix.', url: 'https://healthysoya.com/', domain: 'healthysoya.com', image: '/work/soya.jpg' },
  { name: '22nd Avenue', industry: 'Talent and celebrity management', built: 'Global talent roster and brand partnerships.', url: 'https://22ndavenue.co.in/', domain: '22ndavenue.co.in', image: '/work/22nd.jpg' },
  { name: 'TechFit Tech', industry: 'Gym equipment manufacturer', built: 'Equipment catalogue with a B2B quote flow.', url: 'https://www.techfittech.com/', domain: 'techfittech.com', image: '/work/techfit.jpg' },
  { name: 'Zoshe', industry: 'Fragrance and fashion e-commerce', built: 'Product filtering and a fast checkout.', url: 'https://www.zoshe.in/', domain: 'zoshe.in', image: '/work/zoshe.jpg' },
  { name: 'Ivory Atelier Beauty', industry: 'Luxury beauty and café', built: 'Custom booking engine, mobile first.', url: 'https://www.ivoryatelierbeauty.com/', domain: 'ivoryatelierbeauty.com', image: '/work/ivory.jpg' },
  { name: '7ty7', industry: 'Events and experiential agency', built: '20 years of production, Australia and India.', url: 'https://7ty7.com/', domain: '7ty7.com', image: '/work/7ty7.jpg' },
  { name: 'Tyche Media', industry: 'Digital media agency', built: 'Portfolio-led site built for enquiries.', url: 'https://tyche.media/', domain: 'tyche.media', image: '/work/tyche.jpg' },
];

export const numbers = [
  { value: '2M+', label: 'Farmers on the platform' },
  { value: '7M+', label: 'Acres of operations' },
  { value: '92%', label: 'Forecast accuracy' },
  { value: '35%', label: 'Lower platform cost' },
];

export const growIndigo = {
  url: 'https://www.growindigo.co.in/',
  story:
    'Five years on AgriCloud, the platform behind 2M+ farmers across 15+ Indian states. The biggest job was rebuilding it from a monolith into a multi-tenant platform, with Postgres row-level security and Snowflake for the heavy data, without the farmers noticing.',
  tools: ['React', 'Node.js', '.NET Core', 'Python', 'Snowflake', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Power BI'],
};

export const experience = [
  {
    role: 'Co-founder',
    org: 'Basecase Tech',
    when: 'Now',
    where: 'Perth',
    summary: 'Engineering for growing Australian businesses: sites, apps, data, AI, security and hosting from one team.',
    url: 'https://www.basecasetech.com.au/',
  },
  {
    role: 'Software Development Engineer I and II',
    org: 'Grow Indigo',
    when: '2021 to 2026',
    where: 'Mumbai',
    summary: 'Series B agritech ($24M raised). Promoted to SDE II in 2025. Led the multi-tenant rebuild, commission analytics over 5,000+ monthly transactions, onboarding 30% faster, inventory forecasts 25% more accurate.',
    url: 'https://www.growindigo.co.in/',
  },
  {
    role: 'Web Development Intern',
    org: 'Aga Khan Education Board',
    when: '2021',
    where: 'Mumbai',
    summary: 'A school information portal in React, Node.js and MySQL.',
    url: 'https://akeb.iiindia.org/?a=51c802d3&l=en',
  },
];

export const education = [
  { degree: 'Master of Computer Science', school: 'Edith Cowan University, Perth', when: 'In progress' },
  { degree: 'B.E. Electronics and Telecommunication', school: 'University of Mumbai', when: '2017 to 2021' },
];

export const certifications = [
  { name: 'Core Java', issuer: 'HackerRank', url: 'https://www.hackerrank.com/certificates/0aae57b1fde8' },
  { name: 'Docker for Developers', issuer: 'LinkedIn Learning' },
  { name: 'Consultant Developer Virtual Experience', issuer: 'Thoughtworks', url: 'https://prosple.com/verifier?id=753d30d0-75de-11f1-b5ce-f3c0bc5ff909' },
];

export const awards = [
  {
    title: 'Data for Good, APJ',
    issuer: 'Snowflake Data Drivers Awards 2025',
    note: 'Recognised as part of Grow Indigo’s data innovation team.',
    images: ['/snowflake-award.jpeg'],
  },
  {
    title: 'AI Innovation Pioneer',
    issuer: 'Grow Indigo, 2025 to 26',
    note: 'Presented to Rahil by Grow Indigo for the 2025 to 26 year.',
    images: ['/Award1.jpeg', '/Award3.jpeg', '/Award2.jpeg'],
  },
];

/* Short traits for the About screen; icons are mapped in the component. */
export const traits = [
  { key: 'data', label: 'Data first' },
  { key: 'ship', label: 'Ships weekly' },
  { key: 'plain', label: 'Says it plainly' },
  { key: 'calm', label: 'Calm under load' },
  { key: 'owner', label: 'Founder ownership' },
  { key: 'learn', label: 'Always learning' },
];


/* Security practices: what Basecase builds in, plus Rahil's own multi-tenant work. */
export const security = {
  intro:
    'Most small businesses only think about security after something breaks. At Basecase it is part of the build from the first commit, not an add-on at the end.',
  practices: [
    { key: 'mfa', title: 'Multi-factor sign-in', body: 'On every admin, email and hosting account we set up.' },
    { key: 'backup', title: 'Backups that are tested', body: 'Verified restores, not just a green tick on a dashboard.' },
    { key: 'zero', title: 'Zero-trust access', body: 'Staff and vendors get only what they need, and lose it when they leave.' },
    { key: 'harden', title: 'Hardened from launch', body: 'Sites like Ray Mancini’s went live on AWS with security hardening built in.' },
    { key: 'tenant', title: 'Tenant isolation', body: 'Postgres row-level security kept 600+ tenants’ data apart at Grow Indigo.' },
  ],
};
