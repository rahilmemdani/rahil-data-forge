import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { blogs } from '@/data/blogs';
import { profile } from '@/data/site';
import { trackOut } from '@/lib/actions';
import { Hl, Screen, delay } from './bits';

const tone = ['bg-yellow', 'bg-mist', 'bg-mist', 'bg-yellow'];

const Writing = () => (
  <Screen id="writing" label="Writing" className="bg-paper">
    <div className="flex items-end justify-between gap-4">
      <h2 className="display reveal text-[clamp(2.6rem,6vw,4.5rem)]">
        Notes from{' '}
        <Hl color="var(--blue)" delay={0.3}>
          <span className="text-white">the build</span>
        </Hl>
      </h2>
      <a
        href={profile.substack}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackOut('Substack')}
        className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold hover:text-blue"
      >
        Substack <ArrowUpRight size={16} className="text-orange" />
      </a>
    </div>

    <ul className="rail-sm mt-10 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&>*]:sm:w-auto">
      {blogs.map((post, i) => (
        <li key={post.slug} className="reveal" style={delay(0.07 * i)}>
          <Link to={`/blog/${post.slug}`} className="card lift group flex h-full flex-col overflow-hidden">
            <span className={`block p-3 ${tone[i % 4]}`}>
              <img src={post.coverImage} alt="" className="ink-art aspect-[4/3] w-full object-contain" loading="lazy" decoding="async" />
            </span>
            <span className="flex flex-1 flex-col p-4">
              <span className="text-xs font-bold text-blue">{post.category}</span>
              <span className="mt-1.5 text-base font-bold leading-snug">{post.title}</span>
              <span className="mt-auto flex items-center justify-between pt-4 text-xs font-medium text-ink-faint">
                {post.readTime}
                <ArrowRight size={15} className="text-orange transition-transform group-hover:translate-x-1" />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </Screen>
);

export default Writing;
