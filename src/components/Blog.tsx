import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Tag, BookOpen, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blog = React.memo(() => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const cardElement = container.firstElementChild as HTMLElement;
        if (!cardElement) return;

        // gap is 16px (gap-4) or 20px depending on screen, using a safe baseline offset
        const gap = window.innerWidth >= 1024 ? 24 : 16;
        const scrollAmount = cardElement.offsetWidth + gap;

        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollContainerRef.current) return;
            const container = scrollContainerRef.current;
            const cardWidth = (container.firstElementChild as HTMLElement)?.offsetWidth || 0;
            if (cardWidth === 0) return;

            const gap = window.innerWidth >= 1024 ? 24 : 16;
            const newCurrent = Math.round(container.scrollLeft / (cardWidth + gap));
            setCurrent(newCurrent);
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section id="blogs" className="section-padding relative noise-bg overflow-hidden py-20 lg:py-28">
            {/* Background Elements */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
                style={{ background: 'radial-gradient(circle, var(--gradient-end), transparent)', filter: 'blur(100px)' }}
            />
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
                style={{ background: 'radial-gradient(circle, var(--gradient-start), transparent)', filter: 'blur(100px)' }}
            />

            <div className="container-custom relative z-10 box-border">

                {/* ═══ 2-Column Layout ═══ */}
                <div className="lg:grid lg:grid-cols-[280px_1fr] xl:grid-cols-[340px_1fr] lg:gap-10 xl:gap-14 items-center">

                    {/* ── LEFT PANEL: Header & Arrows ── */}
                    <div className="mb-10 lg:mb-0 lg:sticky lg:top-32 animate-fade-in-up pr-2">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-5 border border-primary/20">
                            <BookOpen size={14} />
                            Insights
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.15] mb-5 tracking-tight">
                            Inside the <span className="gradient-text">Process</span>
                        </h2>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                            Technical deep dives, architecture decisions, and product lessons from scaling platforms for millions of users.
                        </p>

                        {/* Desktop Navigation Arrows inside Left Panel */}
                        <div className="hidden lg:flex flex-row items-center gap-3 mb-8">
                            <button
                                onClick={() => scroll('left')}
                                className="w-11 h-11 rounded-full border border-border/50 bg-background/80 hover:bg-muted/80 backdrop-blur-md flex items-center justify-center text-foreground transition-all duration-300 hover:scale-[1.05] shadow-sm hover:border-border"
                                aria-label="Previous posts"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-11 h-11 rounded-full border border-border/50 bg-background/80 hover:bg-muted/80 backdrop-blur-md flex items-center justify-center text-foreground transition-all duration-300 hover:scale-[1.05] shadow-sm hover:border-border"
                                aria-label="Next posts"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="flex items-center gap-3 text-sm font-medium text-foreground mb-6">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <span>{blogs.length} posts published</span>
                        </div>

                        {/* Desktop Dot Indicators */}
                        <div className="hidden lg:flex items-center gap-1.5 mt-2">
                            {blogs.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-5' : 'bg-border/60 w-1.5'}`}
                                />
                            ))}
                        </div>
                    </div>


                    {/* ── RIGHT PANEL: Smaller Carousel ── */}
                    <div className="relative animate-fade-in-up" style={{ animationDelay: '150ms' }}>

                        {/* Scroll Container (No Scrollbars) */}
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 scrollbar-none"
                            style={{
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                                WebkitOverflowScrolling: 'touch'
                            }}
                        >
                            {/* Inject CSS to absolutely hide webkit scrollbars */}
                            <style dangerouslySetInnerHTML={{
                                __html: `
                .scrollbar-none::-webkit-scrollbar { display: none; }
              `}} />

                            {blogs.map((post) => (
                                <article
                                    key={post.slug}
                                    onClick={() => navigate(`/blog/${post.slug}`)}
                                    // Smaller widths on phone (75vw), tablet (340px) and desktop (360px)
                                    className="group w-[78vw] sm:w-[320px] lg:w-[350px] xl:w-[380px] shrink-0 snap-center relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-border/50 bg-card/30 hover:bg-card/60 backdrop-blur-lg transition-all duration-400 hover:shadow-xl hover:border-primary/20 cursor-pointer flex flex-col h-full"
                                >
                                    {/* Image Section - Reduced height */}
                                    <div className="relative h-[180px] sm:h-[200px] w-full overflow-hidden shrink-0">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-white border border-white/10 shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-5 sm:p-6 flex flex-col flex-1 relative z-10">
                                        <div className="flex items-center gap-3 text-[11px] sm:text-xs font-medium text-muted-foreground mb-3">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={13} className="text-primary/70" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={13} className="text-primary/70" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2.5 leading-snug line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-muted-foreground text-[13px] sm:text-sm leading-relaxed line-clamp-3 mb-6 flex-1 opacity-90">
                                            {post.excerpt}
                                        </p>

                                        <div className="pt-4 sm:pt-5 border-t border-border/30 flex items-center justify-between mt-auto">
                                            <div className="flex flex-wrap gap-1.5">
                                                {post.tags.slice(0, 2).map((tag) => (
                                                    <span key={tag} className="text-[10px] font-semibold tracking-wide text-muted-foreground bg-muted/40 px-2 py-1 rounded border border-border/30">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                                <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Mobile Scroll Indicators & Arrows below carousel */}
                        <div className="flex flex-col items-center gap-4 mt-6 lg:hidden">
                            <div className="flex items-center gap-1.5">
                                {blogs.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-5' : 'bg-border/60 w-1.5'}`}
                                    />
                                ))}
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => scroll('left')}
                                    className="w-10 h-10 rounded-full border border-border/50 bg-background/50 backdrop-blur-md flex items-center justify-center text-foreground active:scale-95 transition-all"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className="w-10 h-10 rounded-full border border-border/50 bg-background/50 backdrop-blur-md flex items-center justify-center text-foreground active:scale-95 transition-all"
                                    aria-label="Next"
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
});

export default Blog;
