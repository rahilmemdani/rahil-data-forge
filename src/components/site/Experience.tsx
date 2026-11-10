import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Briefcase, GraduationCap, Laptop, Sprout, X, type LucideIcon } from 'lucide-react';
import { awards, certifications, education, experience } from '@/data/site';
import { Hl, Screen, delay } from './bits';

type Award = (typeof awards)[number];
const jobIcons: LucideIcon[] = [Briefcase, Sprout, Laptop];
const jobTone = ['bg-blue text-white', 'bg-yellow', 'bg-orange text-white'];

const AwardViewer = ({ award, onClose }: { award: Award; onClose: () => void }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    closeRef.current?.focus();
    html.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      html.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={award.title}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-white animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="flex items-start justify-between gap-4 p-5">
          <div>
            <p className="text-xs font-bold text-blue">{award.issuer}</p>
            <h3 className="display mt-1 text-3xl">{award.title}</h3>
            <p className="mt-1 text-sm text-ink-soft">{award.note}</p>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow" aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="space-y-3 overflow-y-auto px-5 pb-5">
          {award.images.map((src, i) => (
            <img key={src} src={src} alt={`${award.title}, photo ${i + 1}`} className="w-full rounded-2xl" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [open, setOpen] = useState<Award | null>(null);

  return (
    <Screen id="experience" label="Experience" className="bg-white">
      <h2 className="display reveal text-[clamp(2.6rem,6vw,4.5rem)]">
        <Hl color="var(--orange)" delay={0.3}>
          <span className="text-white">Experience</span>
        </Hl>
      </h2>

      <ol className="mt-9 grid gap-5 md:grid-cols-3 md:gap-6">
        {experience.map((job, i) => {
          const Icon = jobIcons[i];
          return (
            <li key={job.org} className="reveal flex gap-4" style={delay(0.08 * i)}>
              <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${jobTone[i]}`}>
                <Icon size={22} strokeWidth={2} />
              </span>
              <div className="min-w-0 pt-1">
                <p className="text-sm font-bold text-blue">{job.when}</p>
                <h3 className="mt-0.5 text-base font-bold">{job.role}</h3>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-sm font-semibold text-orange hover:underline">
                  {job.org} <ArrowUpRight size={13} />
                </a>
                <p className="mt-2 hidden text-sm leading-relaxed text-ink-soft sm:block">{job.summary}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3">
        <div className="reveal col-span-2 rounded-2xl bg-paper p-4 sm:p-5 md:col-span-1">
          <p className="flex items-center gap-2 text-sm font-bold">
            <GraduationCap size={18} className="text-blue" /> Study
          </p>
          <ul className="mt-3 space-y-2.5">
            {education.map((e) => (
              <li key={e.degree} className="text-sm leading-snug">
                <span className="font-semibold">{e.degree}</span>
                <span className="block text-xs text-ink-faint">
                  {e.school}, {e.when.toLowerCase()}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 hidden text-xs leading-relaxed text-ink-soft sm:block">
            Certificates:{' '}
            {certifications.map((c, i) => (
              <span key={c.name}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline decoration-ink/25 underline-offset-2 hover:text-blue">
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
                {i < certifications.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        </div>

        {awards.map((a, i) => (
          <button
            key={a.title}
            type="button"
            onClick={() => setOpen(a)}
            className={`lift reveal flex flex-col items-start gap-2 rounded-2xl p-3 text-left sm:flex-row sm:items-center sm:gap-4 ${i ? 'bg-yellow' : 'bg-blue text-white'}`}
            style={delay(0.1 + 0.08 * i)}
            aria-label={`View ${a.images.length > 1 ? `${a.images.length} photos` : "photo"}: ${a.title}`}
          >
            <img src={a.images[0]} alt="" className="h-16 w-14 shrink-0 rounded-xl object-cover sm:h-24 sm:w-20" loading="lazy" />
            <span>
              <span className="block text-xs font-bold opacity-80">{a.issuer}</span>
              <span className="display mt-0.5 block text-xl leading-none">{a.title}</span>
              <span className="mt-1.5 block text-xs font-semibold underline underline-offset-2 opacity-80">
                {a.images.length > 1 ? `View ${a.images.length} photos` : 'View photo'}
              </span>
            </span>
          </button>
        ))}
      </div>

      {open && <AwardViewer award={open} onClose={() => setOpen(null)} />}
    </Screen>
  );
};

export default Experience;
