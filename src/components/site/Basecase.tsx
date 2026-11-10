import { ArrowUpRight, Code2, FileText, KeyRound, Phone, type LucideIcon } from 'lucide-react';
import { basecase } from '@/data/site';
import { trackOut } from '@/lib/actions';
import { Hl, Screen, delay } from './bits';

const stepIcons: LucideIcon[] = [Phone, FileText, Code2, KeyRound];
const stepTone = ['bg-yellow', 'bg-orange text-white', 'bg-blue text-white', 'bg-yellow'];

const Basecase = () => (
  <Screen id="basecase" label="Basecase Tech" className="bg-white">
    <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
      <div>
        <span className="sticker reveal -rotate-2 bg-orange text-white">What I run now</span>
        <h2 className="display reveal mt-4 text-[clamp(2.6rem,6vw,4.5rem)]">
          Basecase{' '}
          <Hl color="var(--yellow)" delay={0.3}>
            Tech
          </Hl>
        </h2>
        <p className="reveal mt-4 text-xl font-semibold leading-snug sm:text-2xl">{basecase.pitch}</p>
        <p className="reveal mt-3 max-w-xl leading-relaxed text-ink-soft">
          Every new engineer in Australia hears that you need local experience to get local work. So{' '}
          <a href={basecase.cofounder.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline decoration-orange decoration-2 underline-offset-4">
            Darshan Patel
          </a>{' '}
          and I stopped waiting, built for the businesses that needed it, and kept going. He’s in Melbourne, I’m in Perth.
        </p>
        <ul className="reveal mt-5 hidden flex-wrap gap-1.5 sm:flex" aria-label="Services">
          {basecase.services.map((s) => (
            <li key={s} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold">
              {s}
            </li>
          ))}
        </ul>
        <div className="reveal mt-6 flex flex-wrap gap-3">
          <a href={basecase.url} target="_blank" rel="noopener noreferrer" onClick={() => trackOut('Basecase site')} className="btn-blue">
            Visit Basecase <ArrowUpRight size={16} />
          </a>
          <a href={basecase.contact} target="_blank" rel="noopener noreferrer" onClick={() => trackOut('Basecase contact')} className="btn-outline">
            Start a project
          </a>
        </div>
      </div>
      <img
        src="/illustrations/founders.jpg"
        alt="Line illustration of two co-founders high-fiving over a standing desk"
        className="ink-art reveal mx-auto hidden w-full max-w-md md:block"
        width={1400}
        height={1050}
        loading="lazy"
      />
    </div>

    <div className="mt-10 sm:mt-14">
      <h3 className="display reveal text-2xl">How a project runs</h3>
      <ol className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
        {basecase.process.map((step, i) => {
          const Icon = stepIcons[i];
          return (
            <li key={step.title} className="reveal relative flex flex-col items-center text-center" style={delay(0.08 * i)}>
              {i < basecase.process.length - 1 && (
                <span aria-hidden="true" className="absolute left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] top-7 hidden border-t-2 border-dashed border-ink/20 lg:block" />
              )}
              <span className={`flex h-14 w-14 items-center justify-center rounded-full ${stepTone[i]}`}>
                <Icon size={22} strokeWidth={2} />
              </span>
              <span className="mt-3 text-sm font-bold">{step.title}</span>
              <span className="text-xs font-semibold text-blue">{step.when}</span>
              <span className="mt-1 hidden max-w-[14rem] text-xs leading-snug text-ink-soft sm:block">{step.body}</span>
            </li>
          );
        })}
      </ol>
    </div>
  </Screen>
);

export default Basecase;
