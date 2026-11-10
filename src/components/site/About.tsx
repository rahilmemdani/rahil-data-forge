import { BookOpen, Coffee, Database, KeyRound, MessageCircle, Rocket, type LucideIcon } from 'lucide-react';
import {
  siAmazonwebservices,
  siDocker,
  siDotnet,
  siMongodb,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSnowflake,
  siTypescript,
} from 'simple-icons';
import { traits } from '@/data/site';
import { BrandIcon, Hl } from './bits';

const traitIcons: Record<string, LucideIcon> = {
  data: Database,
  ship: Rocket,
  plain: MessageCircle,
  calm: Coffee,
  owner: KeyRound,
  learn: BookOpen,
};

const skills = [
  { name: 'React', icon: siReact },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'Node.js', icon: siNodedotjs },
  { name: '.NET Core', icon: siDotnet },
  { name: 'Python', icon: siPython },
  { name: 'Snowflake', icon: siSnowflake },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'MongoDB', icon: siMongodb },
  { name: 'AWS', icon: siAmazonwebservices },
  { name: 'Docker', icon: siDocker },
];

const chipTilt = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];
const chipTone = ['bg-white text-ink', 'bg-yellow text-ink', 'bg-white text-ink', 'bg-orange text-white'];

const About = () => (
  <section id="about" aria-label="About Rahil" className="screen flex-col justify-center bg-white pb-0">
    <div className="wrap grid flex-1 items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
      <img
        src="/illustrations/about.jpg"
        alt="Line illustration of a developer at a desk by a window, holding an orange mug"
        className="ink-art reveal mx-auto hidden w-full max-w-sm md:block md:max-w-none"
        width={1400}
        height={1050}
        loading="lazy"
      />
      <div>
        <h2 className="display reveal text-[clamp(2.6rem,6vw,4.5rem)]">
          About{' '}
          <Hl color="var(--yellow)" delay={0.3}>
            me
          </Hl>
        </h2>
        <p className="reveal mt-5 leading-relaxed text-ink-soft">
          I spent five years building AgriCloud at Grow Indigo, the platform behind 2M+ farmers across India, and picked up a
          Snowflake Data for Good award on the way. Now I’m in Perth finishing a Master of Computer Science at ECU and running
          Basecase Tech with Darshan Patel: one small engineering team for everything a business runs on.
        </p>
        <ul className="reveal mt-7 grid grid-cols-2 gap-x-6 gap-y-3.5 sm:grid-cols-3">
          {traits.map((t) => {
            const Icon = traitIcons[t.key];
            return (
              <li key={t.key} className="flex items-center gap-2.5 text-sm font-semibold">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper">
                  <Icon size={16} strokeWidth={2} className="text-blue" />
                </span>
                {t.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>

    {/* Skills: a slow sticker marquee, pure CSS so it costs nothing on phones */}
    <div className="mt-10 w-full overflow-hidden bg-blue py-5" aria-label="Skills and tools">
      <ul className="sr-only">
        {skills.map((s) => (
          <li key={s.name}>{s.name}</li>
        ))}
      </ul>
      <div className="flex w-max animate-marquee gap-3 motion-reduce:animate-none" aria-hidden="true">
        {[...skills, ...skills, ...skills, ...skills].map((s, i) => (
          <span
            key={`${s.name}-${i}`}
            className={`flex shrink-0 items-center gap-2.5 rounded-full px-5 py-2.5 ${chipTone[i % 4]} ${chipTilt[i % 4]}`}
          >
            <BrandIcon path={s.icon.path} className="h-5 w-5" />
            <span className="display text-lg leading-none">{s.name}</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default About;
