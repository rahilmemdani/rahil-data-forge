import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { featured, signature } from '@/data/site';
import { trackOut } from '@/lib/actions';
import { Hl, Laptop, Monitor, delay } from './bits';

const Work = () => (
  <section id="work" aria-label="Selected work" className="screen bg-blue text-white">
    <div className="wrap">
      <div className="flex items-end justify-between gap-4">
        <h2 className="display reveal text-[clamp(2.6rem,6vw,4.5rem)]">
          Selected{' '}
          <Hl color="var(--orange)" delay={0.3}>
            work
          </Hl>
        </h2>
        <a href="#more-work" className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow hover:text-white">
          View all projects <ArrowRight size={16} />
        </a>
      </div>

      <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-2 lg:gap-5">
        {/* Signature project */}
        <article className="card lift reveal relative flex flex-col overflow-hidden text-ink lg:row-span-3">
          <a
            href={signature.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOut(signature.name)}
            className="relative flex flex-1 items-center justify-center bg-mist px-[8%] pb-4 pt-10 sm:pb-6 sm:pt-12"
            aria-label={`Visit ${signature.name}`}
          >
            <span className="sticker absolute left-4 top-4 -rotate-3 bg-yellow text-ink">Signature project</span>
            <Laptop src={signature.image} alt={`${signature.name} homepage`} className="w-[88%] sm:w-full" />
          </a>
          <div className="p-4 sm:p-6">
            <h3 className="display flex items-center gap-2 text-[1.9rem] leading-none">
              {signature.name}
              <ArrowUpRight size={22} className="text-orange" />
            </h3>
            <p className="mt-1.5 text-sm font-medium text-ink-faint">{signature.industry}</p>
            <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-ink-soft sm:line-clamp-none">{signature.summary}</p>
            <ul className="mt-4 hidden flex-wrap gap-1.5 sm:flex">
              {signature.features.slice(0, 4).map((f) => (
                <li key={f} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-ink">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Ray, WBW and LSN: a swipe rail on phones, part of the grid on desktop */}
        <div className="rail-sm lg:contents [&>*]:lg:w-auto">
          {featured.map((p, i) => (
            <article
              key={p.name}
              className="card lift reveal grid grid-cols-[0.9fr_1.1fr] overflow-hidden text-ink sm:grid-cols-[0.95fr_1.05fr]"
              style={delay(0.08 * (i + 1))}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOut(p.name)}
                className="flex items-center bg-mist p-2.5 sm:p-4"
                aria-label={`Visit ${p.name}`}
              >
                {p.image && <Monitor src={p.image} alt={`${p.name} homepage`} className="w-full" />}
              </a>
              <div className="flex flex-col justify-center p-3 sm:p-5">
                <h3 className="display flex items-center gap-1.5 text-[1.45rem] leading-none">
                  {p.name}
                  <ArrowUpRight size={17} className="text-orange" />
                </h3>
                <p className="mt-1 text-xs font-medium text-ink-faint">{p.industry}</p>
                <p className="mt-2 line-clamp-2 text-xs leading-snug text-ink-soft sm:line-clamp-3 sm:text-sm">{p.built}</p>
                <div className="mt-2.5 flex flex-wrap gap-x-4 text-xs font-semibold">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" onClick={() => trackOut(p.name)} className="underline decoration-ink/20 underline-offset-4 hover:text-blue">
                    {p.domain}
                  </a>
                  {p.caseStudy && (
                    <a
                      href={p.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackOut(`${p.name} case study`)}
                      className="text-blue underline decoration-blue/30 underline-offset-4"
                    >
                      Case study
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Work;
