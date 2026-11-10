import { ArchiveRestore, DatabaseZap, KeyRound, ShieldCheck, UserCheck, type LucideIcon } from 'lucide-react';
import { security } from '@/data/site';
import { Hl, Screen, delay } from './bits';

const icons: Record<string, LucideIcon> = {
  mfa: KeyRound,
  backup: ArchiveRestore,
  zero: UserCheck,
  harden: ShieldCheck,
  tenant: DatabaseZap,
};

const Security = () => (
  <Screen id="security" label="Security" className="bg-orange text-white">
    <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
      <div>
        <h2 className="display reveal text-[clamp(2.6rem,6vw,4.5rem)]">
          Secure{' '}
          <Hl color="var(--blue)" delay={0.3}>
            by default
          </Hl>
        </h2>
        <p className="reveal mt-4 max-w-xl text-[1.05rem] leading-relaxed text-white/90">{security.intro}</p>

        <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
          {security.practices.map((p, i) => {
            const Icon = icons[p.key];
            return (
              <li
                key={p.key}
                className={`reveal flex gap-3 rounded-2xl bg-white p-3.5 text-ink sm:p-4 ${i === security.practices.length - 1 ? 'sm:col-span-2' : ''}`}
                style={delay(0.06 * i)}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <span>
                  <span className="block text-sm font-bold">{p.title}</span>
                  <span className="block text-xs leading-snug text-ink-soft sm:text-sm">{p.body}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="reveal relative hidden md:block" style={delay(0.15)}>
        <div className="rotate-2 rounded-[2rem] bg-white p-6">
          <img
            src="/illustrations/security.jpg"
            alt="Line illustration of a smiling shield with a keyhole protecting a laptop from a small bug, beside an orange padlock and key"
            className="ink-art w-full"
            width={1400}
            height={1050}
            loading="lazy"
          />
        </div>
        <span className="sticker absolute -left-4 -top-4 -rotate-6 bg-yellow text-ink">Security and compliance</span>
      </div>
    </div>
  </Screen>
);

export default Security;
