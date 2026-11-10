import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, X } from 'lucide-react';
import { profile } from '@/data/site';
import { bookCall } from '@/lib/actions';

const links = [
  { label: 'Home', id: 'top' },
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Basecase', id: 'basecase' },
  { label: 'Security', id: 'security' },
  { label: 'Experience', id: 'experience' },
  { label: 'Writing', id: 'writing' },
  { label: 'Contact', id: 'contact' },
];

const Nav = () => {
  const [active, setActive] = useState('top');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Highlight whichever section holds the middle of the screen
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)), {
      rootMargin: '-45% 0px -50% 0px',
    });
    sections.forEach((s) => io.observe(s));
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 12);
        // Small dead zone so tiny finger jitters don't flicker the bar
        if (Math.abs(y - lastY) > 6) {
          setHidden(y > lastY && y > 160);
          lastY = y;
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Lock the page behind the phone menu and close it with Escape
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      html.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Close the menu, wait for the page to unlock, then glide to the section
  const goTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', `#${id}`);
      }),
    );
  };

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-5 ${
        hidden && !open ? '-translate-y-[130%]' : 'translate-y-0'
      }`}
    >
      <nav
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-5 pr-2 transition-[background-color,box-shadow] duration-300 ${
          scrolled
            ? 'bg-white/90 shadow-[0_10px_30px_-12px_rgba(20,20,20,0.25)] ring-1 ring-ink/5 backdrop-blur-md'
            : 'bg-white/60 ring-1 ring-ink/5'
        }`}
        aria-label="Main"
      >
        <a href="#top" className="display text-[1.7rem] leading-none" aria-label="Rahil Memdani, home">
          RM<span className="text-orange">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`rounded-full px-3 py-1.5 text-[0.88rem] font-semibold transition-colors ${
                  active === l.id ? 'bg-paper text-blue' : 'text-ink hover:text-blue'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button type="button" onClick={() => bookCall('Nav')} className="btn-blue hidden px-5 py-2.5 sm:inline-flex">
            Let’s talk
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 items-center gap-2 rounded-full bg-ink pl-4 pr-3.5 text-sm font-semibold text-white lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            Menu
            <span className="flex w-4 flex-col gap-[3px]" aria-hidden="true">
              <span className="h-[2px] w-full bg-white" />
              <span className="h-[2px] w-2/3 bg-yellow" />
            </span>
          </button>
        </div>
      </nav>
    </header>

      {/*
        Phone menu. It lives outside <header> on purpose: the header's
        backdrop blur would otherwise trap this fixed layer inside the 72px bar.
        Always mounted so it can animate both in and out.
      */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[55] bg-ink/40 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed inset-2 z-[60] flex flex-col overflow-hidden rounded-[2rem] bg-blue text-white lg:hidden ${
          open ? 'visible [clip-path:circle(150%_at_100%_0)]' : 'invisible [clip-path:circle(0%_at_100%_0)]'
        }`}
        style={{
          transition: open
            ? 'clip-path 0.55s cubic-bezier(0.65,0,0.35,1), visibility 0s'
            : 'clip-path 0.45s cubic-bezier(0.65,0,0.35,1), visibility 0s linear 0.45s',
        }}
      >
        <div className="flex h-[4.25rem] shrink-0 items-center justify-between pl-6 pr-3">
          <span className="display text-[1.7rem] leading-none">
            RM<span className="text-yellow">.</span>
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink"
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
          >
            <X size={20} />
          </button>
        </div>

        <ul className="mt-2 flex flex-1 flex-col justify-center gap-0.5 overflow-y-auto px-6">
          {links.map((l, i) => (
            <li
              key={l.id}
              className={`transition-[opacity,transform] duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
              style={{ transitionDelay: open ? `${120 + i * 45}ms` : '0ms' }}
            >
              <a
                href={`#${l.id}`}
                onClick={goTo(l.id)}
                tabIndex={open ? 0 : -1}
                className={`display flex items-center justify-between py-1 text-[clamp(2.4rem,11vw,3.5rem)] ${active === l.id ? 'text-yellow' : 'text-white'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="shrink-0 px-4 pb-5 pt-4">
          <button
            type="button"
            tabIndex={open ? 0 : -1}
            onClick={() => {
              setOpen(false);
              bookCall('Mobile menu');
            }}
            className="btn-yellow w-full py-4 text-base"
          >
            Book a first call <ArrowUpRight size={18} />
          </button>
          <div className="mt-4 flex items-center justify-between px-2 text-sm text-white/80">
            <a href={`mailto:${profile.email}`} tabIndex={open ? 0 : -1} className="truncate">
              {profile.email}
            </a>
            <span className="flex gap-2">
              {[
                { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: profile.github, icon: Github, label: 'GitHub' },
                { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  tabIndex={open ? 0 : -1}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40"
                >
                  <Icon size={17} />
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
