import { ArrowRight, Download } from 'lucide-react';
import { profile } from '@/data/site';
import { trackEvent } from '@/lib/analytics';
import { Hl, SpinBadge, delay } from './bits';

const Hero = () => (
  <section id="top" aria-label="Introduction" className="screen bg-paper">
    <div className="wrap grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
      <div>
        <div className="reveal flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="text-[1.6rem] font-semibold leading-none tracking-[-0.03em] sm:text-[2rem]">Hey, I’m Rahil.</p>
          <span className="sticker -rotate-3 bg-yellow text-ink">Perth, WA</span>
        </div>

        <h1 className="display mt-4 text-[clamp(2.7rem,7.4vw,5.4rem)] leading-[0.98]">
          <span className="reveal block">I build</span>
          <span className="reveal mt-1 block" style={delay(0.08)}>
            <Hl color="var(--orange)" delay={0.35}>
              <span className="text-white">websites,</span>
            </Hl>
          </span>
          <span className="reveal mt-1 block" style={delay(0.16)}>
            <Hl color="var(--yellow)" delay={0.55}>
              data pipelines
            </Hl>
          </span>
          <span className="reveal mt-1 block" style={delay(0.24)}>
            <Hl color="var(--blue)" delay={0.75}>
              <span className="text-white">&amp; secure systems</span>
            </Hl>
          </span>
        </h1>

        <p className="reveal mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft" style={delay(0.3)}>
          Co-founder of Basecase Tech. Five years building platforms for 2M+ users, now building calm, dependable software for
          growing businesses from Perth.
        </p>

        <div className="reveal mt-7 flex flex-wrap gap-3" style={delay(0.38)}>
          <a href="#work" className="btn-blue">
            View my work <ArrowRight size={16} />
          </a>
          <a
            href={profile.resume}
            download
            onClick={() => trackEvent({ action: 'download_resume', category: 'engagement', label: 'Hero' })}
            className="btn-outline"
          >
            Download CV <Download size={16} />
          </a>
        </div>
      </div>

      <div className="reveal relative" style={delay(0.2)}>
        <img
          src="/illustrations/hero.jpg"
          alt="Line illustration of a developer typing on a laptop on an orange bean bag, under a hanging lamp"
          className="ink-art mx-auto w-full max-w-[19rem] md:max-w-none"
          width={1400}
          height={1050}
          fetchPriority="high"
        />
        <SpinBadge
          text="co-founder • basecase tech • perth • "
          className="absolute -top-2 right-0 h-24 w-24 bg-yellow text-ink sm:h-28 sm:w-28 md:right-[4%] md:top-[6%]"
        >
          <span className="display text-2xl leading-none text-orange">BC</span>
        </SpinBadge>
        <span className="sticker absolute bottom-[12%] left-0 -rotate-6 bg-blue text-white md:left-[4%]">Open for projects</span>
      </div>
    </div>
  </section>
);

export default Hero;
