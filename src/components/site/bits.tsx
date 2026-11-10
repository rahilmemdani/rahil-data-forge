import { useId, type CSSProperties, type ReactNode } from 'react';

/* Stagger helper for .reveal elements */
export const delay = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties;

export const Screen = ({ id, label, className = '', children }: { id: string; label: string; className?: string; children: ReactNode }) => (
  <section id={id} aria-label={label} className={`screen ${className}`}>
    <div className="wrap">{children}</div>
  </section>
);

export const SectionTitle = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h2 className={`display reveal text-[clamp(2.6rem,6vw,4.5rem)] ${className}`}>{children}</h2>
);

/* A word with a colour block that wipes in behind it when it scrolls into view. */
export const Hl = ({ children, color, delay = 0.2, className = '' }: { children: ReactNode; color: string; delay?: number; className?: string }) => (
  <span className={`hl whitespace-nowrap ${className}`} style={{ '--c': color, '--d': `${delay}s` } as CSSProperties}>
    {children}
  </span>
);

/* Circular text badge that turns slowly, like a sticker on a coffee cup. */
export const SpinBadge = ({ text, className = '', children }: { text: string; className?: string; children?: ReactNode }) => {
  const id = useId().replace(/:/g, '');
  return (
    <div className={`flex items-center justify-center rounded-full ${className}`}>
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id={`badge-${id}`} d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
        </defs>
        <text className="fill-current font-display text-[12.5px] uppercase tracking-[0.18em]">
          <textPath href={`#badge-${id}`}>{text}</textPath>
        </text>
      </svg>
      <span className="relative">{children}</span>
    </div>
  );
};

/* Line-drawn desktop monitor with a real screenshot inside. */
export const Monitor = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="w-full rounded-[0.6rem] border-[2.5px] border-ink bg-white p-[3px]">
      <img src={src} alt={alt} className="aspect-[16/10] w-full rounded-[0.35rem] object-cover object-top" loading="lazy" decoding="async" />
    </div>
    <div className="h-3 w-[12%] border-x-[2.5px] border-ink bg-white" />
    <div className="h-[3px] w-[30%] rounded-full bg-ink" />
  </div>
);

/* Line-drawn laptop for the signature project. */
export const Laptop = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="w-[86%] rounded-t-[0.8rem] border-[2.5px] border-b-0 border-ink bg-white p-[5px] pb-[6px]">
      <img src={src} alt={alt} className="aspect-[16/10] w-full rounded-[0.3rem] object-cover object-top" loading="lazy" decoding="async" />
    </div>
    <div className="relative h-3.5 w-full rounded-b-[0.9rem] rounded-t-[0.2rem] border-[2.5px] border-ink bg-white">
      <span className="absolute left-1/2 top-0 h-[5px] w-[14%] -translate-x-1/2 rounded-b-md bg-ink" />
    </div>
  </div>
);

/* Small browser window for compact cards. */
export const Browser = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`overflow-hidden rounded-lg border-2 border-ink bg-white ${className}`}>
    <div className="flex h-4 items-center gap-1 border-b-2 border-ink px-1.5">
      <span className="h-1 w-1 rounded-full bg-orange" />
      <span className="h-1 w-1 rounded-full bg-yellow" />
      <span className="h-1 w-1 rounded-full bg-blue" />
    </div>
    <img src={src} alt={alt} className="aspect-[16/10] w-full object-cover object-top" loading="lazy" decoding="async" />
  </div>
);

/* Renders a Simple Icons glyph. */
export const BrandIcon = ({ path, className = '' }: { path: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d={path} />
  </svg>
);
