import { ArrowUpRight } from 'lucide-react';
import { growIndigo, numbers } from '@/data/site';
import { Hl, Screen, delay } from './bits';

const tiles = ['bg-blue text-white', 'bg-yellow text-ink', 'bg-orange text-white', 'bg-white text-ink'];

const Scale = () => (
  <Screen id="data" label="Data at farm scale" className="bg-paper">
    <div className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
      <div>
        <span className="sticker reveal -rotate-2 bg-blue text-white">Before Basecase</span>
        <h2 className="display reveal mt-4 text-[clamp(2.6rem,6vw,4.5rem)]">
          Data at{' '}
          <Hl color="var(--yellow)" delay={0.3}>
            farm scale
          </Hl>
        </h2>
        <p className="reveal mt-4 leading-relaxed text-ink-soft">{growIndigo.story}</p>

        <dl className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {numbers.map((n, i) => (
            <div key={n.label} className={`reveal flex flex-col rounded-2xl p-4 ${tiles[i]} ${i % 2 ? 'rotate-1' : '-rotate-1'}`} style={delay(0.07 * i)}>
              <dd className="display order-1 text-[2.4rem] leading-none">{n.value}</dd>
              <dt className="order-2 mt-1.5 text-xs font-semibold leading-snug opacity-85">{n.label}</dt>
            </div>
          ))}
        </dl>

        <p className="reveal mt-6 hidden text-sm text-ink-soft sm:block">
          <span className="font-bold text-ink">Stack there: </span>
          {growIndigo.tools.join(', ')}.{' '}
          <a href={growIndigo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 font-semibold text-ink hover:text-blue">
            growindigo.co.in <ArrowUpRight size={13} />
          </a>
        </p>
      </div>

      <img
        src="/illustrations/growth.jpg"
        alt="Line illustration of a bar chart growing out of soil like plants, being watered"
        className="ink-art reveal mx-auto hidden w-full max-w-md md:block"
        width={1400}
        height={1050}
        loading="lazy"
      />
    </div>
  </Screen>
);

export default Scale;
