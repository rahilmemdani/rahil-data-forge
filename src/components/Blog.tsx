import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blog = React.memo(() => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Allow manual scroll on desktop/touch
    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const cardElement = container.firstElementChild as HTMLElement;
        if (!cardElement) return;

        // gap is 24px (gap-6)
        const scrollAmount = cardElement.offsetWidth + 24;

        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            setCurrent((prev) => Math.max(0, prev - 1));
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            setCurrent((prev) => Math.min(blogs.length - 1, prev + 1));
        }
    };

    // Update current dot based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (!scrollContainerRef.current) return;
            const container = scrollContainerRef.current;
            const cardWidth = (container.firstElementChild as HTMLElement)?.offsetWidth || 0;
            if (cardWidth === 0) return;
            const newCurrent = Math.round(container.scrollLeft / (cardWidth + 24));
            setCurrent(newCurrent);
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section id="blogs" className="section-padding relative noise-bg overflow-hidden py-24 lg:py-32">
            {/* Premium Background Elements */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
                style={{ background: 'radial-gradient(circle, var(--gradient-end), transparent)', filter: 'blur(120px)' }}
            />
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
                style={{ background: 'radial-gradient(circle, var(--gradient-start), transparent)', filter: 'blur(100px)' }}
            />
            <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] pointer-events-none"></div>

            <div className="container-custom relative z-10 box-border">

                {/* ═══ 2-Column Layout ═══ */}
                <div className="lg:grid lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[380px_1fr] lg:gap-12 xl:gap-16 items-center">

                    {/* ── LEFT PANEL: Header ── */}
                    <div className="mb-12 lg:mb-0 lg:sticky lg:top-32 animate-fade-in-up pr-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-5 border border-primary/20 shadow-sm">
                            <BookOpen size={14} />
                            Insights & Engineering
                        </span>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-display font-extrabold leading-[1.15] mb-6 tracking-tight">
                            Inside the <span className="gradient-text">Process</span>
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                            Real world technical deep dives, architectural decisions, and product lessons learned from scaling platforms for millions of users. No filler, just what works.
                        </p>

                        <div className="h-px w-full bg-gradient-to-r from-primary/40 via-primary/20 to-transparent mb-8" />

                        <div className="flex items-center gap-3 text-sm font-medium text-foreground mb-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <span>{blogs.length} posts published</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {['Data Engineering', 'Architecture', 'AgriTech', 'Side Projects'].map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-muted/50 text-muted-foreground border border-border/50"
                                >
                                    <Tag size={10} />
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Desktop Dot Indicators */}
                        <div className="hidden lg:flex items-center gap-2 mt-4">
                            {blogs.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-6' : 'bg-border w-2'}`}
                                />
                            ))}
                        </div>
                    </div>


                    {/* ── RIGHT PANEL: Carousel & Arrows ── */}
                    <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>

                        {/* Desktop Left/Right Arrows for Carousel — Inside right panel, flanking the cards */}
                        <button
                            onClick={() => scroll('left')}
                            disabled={current === 0}
                            className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-6 xl:-left-8 z-20 w-12 h-12 rounded-full border border-border/50 bg-background/90 backdrop-blur-xl items-center justify-center text-foreground transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:text-primary shadow-xl disabled:opacity-0 pointer-events-auto"
                            aria-label="Previous post"
                        >
                            <ChevronLeft size={22} />
                        </button>

                        <button
                            onClick={() => scroll('right')}
                            disabled={current >= blogs.length - 1} // Simplified logic assumes 1 card visible
                            className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-6 xl:-right-8 z-20 w-12 h-12 rounded-full border border-border/50 bg-background/90 backdrop-blur-xl items-center justify-center text-foreground transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:text-primary shadow-xl disabled:opacity-0 pointer-events-auto"
                            aria-label="Next post"
                        >
                            <ChevronRight size={22} />
                        </button>

                        {/* Mobile Arrows */}
                        <div className="lg:hidden absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between z-20 pointer-events-none">
                            <button
                                onClick={() => scroll('left')}
                                className={`w-10 h-10 rounded-full bg-background/90 shadow-lg border border-border flex items-center justify-center text-foreground pointer-events-auto transition-opacity duration-300 ${current === 0 ? 'opacity-0' : 'opacity-100'}`}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className={`w-10 h-10 rounded-full bg-background/90 shadow-lg border border-border flex items-center justify-center text-foreground pointer-events-auto transition-opacity duration-300 ${current >= blogs.length - 1 ? 'opacity-0' : 'opacity-100'}`}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>


                        {/* Scroll Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-1"
                        >
                            {blogs.map((post, index) => (
                                <article
                                    key={post.slug}
                                    onClick={() => navigate(`/blog/${post.slug}`)}
                                    className="group w-[85vw] sm:w-[400px] lg:w-[100%] xl:w-[440px] shrink-0 snap-center relative overflow-hidden rounded-[2rem] border border-border/40 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:border-primary/30 cursor-pointer flex flex-col h-full"
                                    style={{
                                        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)',
                                    }}
                                >
                                    <div className="absolute inset-0 bg-card/60 dark:bg-card/80 backdrop-blur-xl rounded-[2rem]" />

                                    {/* Image Section */}
                                    <div className="relative h-[220px] sm:h-[260px] w-full overflow-hidden shrink-0">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[800ms] ease-out group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                                        <div className="absolute top-5 left-5">
                                            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-black/60 backdrop-blur-md text-white shadow-sm border border-white/10">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10 bg-gradient-to-b from-transparent to-background/5">
                                        <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-primary/80" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={14} className="text-primary/80" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-400 mb-3 leading-snug line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-8 flex-1">
                                            {post.excerpt}
                                        </p>

                                        <div className="pt-6 border-t border-border/40 flex items-center justify-between mt-auto">
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.slice(0, 2).map((tag) => (
                                                    <span key={tag} className="text-[11px] font-semibold tracking-wide text-foreground bg-muted/60 px-3 py-1 rounded-md border border-border/50">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                                                <ArrowRight size={18} className="transform group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Mobile Scroll Indicators */}
                        <div className="flex items-center justify-center gap-2 mt-4 lg:hidden">
                            {blogs.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-6' : 'bg-border w-2'}`}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
});

export default Blog;
