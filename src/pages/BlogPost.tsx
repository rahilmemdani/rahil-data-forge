import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Share2 } from 'lucide-react';
import { blogs } from '../data/blogs';
import { profile } from '../data/site';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const post = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (post) document.title = `${post.title} | Rahil Memdani`;
  }, [post]);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: post?.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      /* the person closed the share sheet */
    }
  };

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-5 text-center">
        <h1 className="display text-5xl">That post isn’t here</h1>
        <p className="mt-3 text-ink-soft">The link may be out of date.</p>
        <Link to="/#writing" className="btn-blue mt-8">
          See all posts
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-40 h-[var(--nav)] bg-blue text-white">
        <div className="wrap flex h-full items-center justify-between">
          <Link to="/#writing" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-yellow">
            <ArrowLeft size={16} /> All posts
          </Link>
          <Link to="/" className="display text-[1.9rem] leading-none">
            RM<span className="text-yellow">.</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 pt-14 sm:pt-20">
        <span className="sticker -rotate-2 bg-yellow text-ink">{post.category}</span>
        <h1 className="display mt-4 text-[clamp(2.6rem,6vw,4.25rem)]">{post.title}</h1>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink-soft">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
          <button type="button" onClick={share} className="btn-outline px-3.5 py-1.5 text-xs">
            {copied ? <Check size={14} /> : <Share2 size={14} />}
            {copied ? 'Link copied' : 'Share'}
          </button>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl px-5">
        <div className="rounded-3xl bg-white p-4 sm:p-8">
          <img src={post.coverImage} alt="" className="ink-art mx-auto aspect-[4/3] w-full max-w-lg object-contain" loading="eager" />
        </div>
      </div>

      <article className="prose-blog mx-auto mt-12 max-w-[40rem] px-5" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="mx-auto max-w-[40rem] px-5">
        <ul className="mt-12 flex flex-wrap gap-2" aria-label="Tags">
          {post.tags.map((t) => (
            <li key={t} className="rounded-full bg-white px-3 py-1 text-xs font-semibold">
              {t}
            </li>
          ))}
        </ul>

        <aside className="my-16 rounded-3xl bg-blue p-6 text-white">
          <p className="display text-3xl leading-none">Rahil Memdani</p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            Co-founder of Basecase Tech. Full-stack and data engineer in Perth, writing about what actually happens when you ship.
          </p>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-yellow underline underline-offset-4">
            Say hello on LinkedIn
          </a>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
