import { ArrowUpRight } from 'lucide-react';
import { moreWork } from '@/data/site';
import { bookCall, trackOut } from '@/lib/actions';
import { Browser, Screen, SectionTitle, delay } from './bits';

const MoreWork = () => (
  <Screen id="more-work" label="More client work" className="bg-paper">
    <div className="flex items-end justify-between gap-4">
      <SectionTitle>More live builds</SectionTitle>
      <a
        href="https://www.basecasetech.com.au/work"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden items-center gap-1.5 text-sm font-semibold hover:text-blue sm:inline-flex"
      >
        On basecasetech.com.au <ArrowUpRight size={16} className="text-orange" />
      </a>
    </div>

    <ul className="mt-7 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-4 lg:grid-cols-4">
      {moreWork.map((p, i) => (
        <li key={p.name} className="reveal" style={delay(0.05 * i)}>
          <a href={p.url} target="_blank" rel="noopener noreferrer" onClick={() => trackOut(p.name)} className="card lift block h-full overflow-hidden">
            <div className="flex aspect-[16/9] items-center justify-center bg-mist p-1.5 sm:aspect-[16/11] sm:p-4">
              {p.image && <Browser src={p.image} alt={`${p.name} homepage`} className="w-full" />}
            </div>
            <div className="px-2.5 py-2 sm:p-4">
              <p className="flex items-center gap-1 text-sm font-semibold sm:text-base">
                {p.name}
                <ArrowUpRight size={14} className="text-orange" />
              </p>
              <p className="hidden text-xs text-ink-faint sm:block">{p.industry}</p>
              <p className="mt-1.5 hidden text-xs leading-snug text-ink-soft sm:block">{p.built}</p>
            </div>
          </a>
        </li>
      ))}

      <li className="reveal" style={delay(0.35)}>
        <button
          type="button"
          onClick={() => bookCall('More work card')}
          className="lift flex h-full min-h-28 w-full flex-col justify-between rounded-2xl bg-orange p-4 text-left text-white sm:p-5"
        >
          <span className="display text-[clamp(2rem,3.4vw,2.75rem)] leading-[0.9]">
            Yours
            <br />
            next?
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold">
            Book a 30 minute call <ArrowUpRight size={15} />
          </span>
        </button>
      </li>
    </ul>
  </Screen>
);

export default MoreWork;
