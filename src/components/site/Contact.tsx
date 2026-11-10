import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MapPin, PenLine, Phone } from 'lucide-react';
import { basecase, profile } from '@/data/site';
import { bookCall, trackOut } from '@/lib/actions';
import { trackEvent } from '@/lib/analytics';
import { Hl, SpinBadge } from './bits';

const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Substack', href: profile.substack, icon: PenLine },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      trackEvent({ action: 'copy_email', category: 'engagement', label: 'Contact' });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" aria-label="Contact" className="screen flex-col justify-center overflow-hidden bg-blue pb-0 text-white">
      <div className="wrap grid flex-1 items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h2 className="display reveal text-[clamp(2.8rem,6.6vw,5.25rem)]">
            Let’s build
            <br />
            something{' '}
            <Hl color="var(--yellow)" delay={0.35}>
              <span className="text-ink">calm</span>
            </Hl>
          </h2>
          <p className="reveal mt-5 max-w-md leading-relaxed text-white/85">
            Tell me what is slowing your business down. I reply within a day, and the first call is just a conversation.
          </p>

          <div className="reveal mt-7 flex flex-wrap gap-3">
            <button type="button" onClick={() => bookCall('Contact')} className="btn-yellow">
              Book a first call
            </button>
            <button type="button" onClick={copyEmail} className="btn-outline-white" aria-live="polite">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Email copied' : 'Copy my email'}
            </button>
          </div>

          <ul className="reveal mt-7 space-y-2 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-yellow" />
              <a href={`mailto:${profile.email}`} className="hover:text-yellow">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-yellow" />
              <a href={profile.phoneHref} className="hover:text-yellow">
                {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-yellow" />
              {profile.location}
            </li>
          </ul>

          <div className="reveal mt-6 flex gap-2.5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                onClick={() => trackOut(label)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-yellow"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="reveal relative hidden md:block">
          <div className="-rotate-2 rounded-[2rem] bg-white p-6">
            <img
              src="/illustrations/contact.jpg"
              alt="Line illustration of a developer waving next to an orange envelope with a paper plane flying out"
              className="ink-art w-full"
              width={1400}
              height={1050}
              loading="lazy"
            />
          </div>
          <SpinBadge text="say hello • reply in a day • " className="absolute -right-4 -top-6 h-24 w-24 bg-orange text-white">
            <Mail size={22} />
          </SpinBadge>
        </div>
      </div>

      <footer className="w-full">
        <div className="wrap flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-white/75">
          <p>© {new Date().getFullYear()} Rahil Memdani. Made in Perth.</p>
          <p>
            Co-founder of{' '}
            <a href={basecase.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-yellow decoration-2 underline-offset-4">
              Basecase Tech
            </a>
          </p>
        </div>
        <p aria-hidden="true" className="display select-none whitespace-nowrap text-center text-[13.2vw] leading-[0.8] text-orange">
          Rahil Memdani
        </p>
      </footer>
    </section>
  );
};

export default Contact;
