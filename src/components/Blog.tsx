import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, BookOpen, ChevronLeft, ChevronRight, ArrowRight, MousePointerClick } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blog = React.memo(() => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;

        // Find the first actual article element to measure its exact width
        const firstCard = container.querySelector('article');
        if (!firstCard) return;

        // gap is 24px on lg+, 20px on sm, 16px default
        const gap = window.innerWidth >= 1024 ? 24 : window.innerWidth >= 640 ? 20 : 16;
        const scrollAmount = firstCard.offsetWidth + gap;

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

            const firstCard = container.querySelector('article');
            if (!firstCard) return;

            const cardWidth = firstCard.offsetWidth;
            const gap = window.innerWidth >= 1024 ? 24 : window.innerWidth >= 640 ? 20 : 16;

            // Calculate current index cleanly
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
        <section id="blogs" className="section-padding relative noise-bg overflow-hidden py-16 lg:py-28">
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
                <div className="lg:grid lg:grid-cols-[280px_1fr] xl:grid-cols-[340px_1fr] lg:gap-8 xl:gap-14 items-center relative">

                    {/* ── LEFT PANEL: Header ── */}
                    <div className="mb-8 lg:mb-0 lg:sticky lg:top-32 animate-fade-in-up pr-2">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
                            <BookOpen size={14} />
                            Writing
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.15] mb-5 tracking-tight">
                            Inside the <span className="gradient-text">Process</span>
                        </h2>
                        <p className="text-muted-foreground text-[15px] sm:text-base leading-relaxed mb-6">
                            Technical deep dives, architectural decisions, and product lessons from scaling platforms for millions of users.
                        </p>

                        <div className="flex items-center gap-3 text-sm font-medium text-foreground mb-4">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <span>{blogs.length} posts published</span>
                        </div>

                        {/* Desktop Dot Indicators */}
                        <div className="hidden lg:flex items-center gap-1.5 mt-6 mb-2">
                            {blogs.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-5' : 'bg-border/60 w-1.5'}`}
                                />
                            ))}
                        </div>
                    </div>


                    {/* ── RIGHT PANEL: Carousel with Flanking Arrows ── */}
                    {/* Using -mx-4 to allow full bleed on mobile devices, pulling it back in tightly */}
                    <div className="relative animate-fade-in-up -mx-4 sm:mx-0" style={{ animationDelay: '150ms' }}>

                        {/* Desktop Navigation Arrows - Positioned exactly on the left and right edges */}
                        {/* Using disabled:opacity-30 instead of 0 to ensure they are visible as 'disabled' on ends */}
                        <button
                            onClick={() => scroll('left')}
                            disabled={current === 0}
                            className="hidden lg:flex absolute top-[45%] -translate-y-1/2 left-0 lg:-left-5 xl:-left-6 z-50 w-12 h-12 rounded-full border border-border bg-background/95 hover:bg-muted backdrop-blur-xl items-center justify-center text-foreground transition-all duration-300 hover:scale-[1.05] shadow-xl hover:shadow-2xl disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed cursor-pointer"
                            aria-label="Previous posts"
                        >
                            <ChevronLeft size={22} className="mr-0.5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={current >= blogs.length - 1}
                            className="hidden lg:flex absolute top-[45%] -translate-y-1/2 right-0 lg:-right-5 xl:-right-6 z-50 w-12 h-12 rounded-full border border-border bg-background/95 hover:bg-muted backdrop-blur-xl items-center justify-center text-foreground transition-all duration-300 hover:scale-[1.05] shadow-xl hover:shadow-2xl disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed cursor-pointer"
                            aria-label="Next posts"
                        >
                            <ChevronRight size={22} className="ml-0.5" />
                        </button>

                        {/* Scroll Container 
                Added items-stretch so ALL flex children naturally stretch to equal height.
            */}
                        <div
                            ref={scrollContainerRef}
                            className="flex items-stretch gap-4 sm:gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-4 sm:px-2 scrollbar-none"
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
                                    // Uses h-auto with flex-1 inside so flex items naturally align to tallest card
                                    className="group w-[80vw] sm:w-[300px] lg:w-[320px] xl:w-[350px] shrink-0 snap-center relative overflow-hidden rounded-[1.25rem] sm:rounded-3xl border border-border/40 bg-card/40 hover:bg-card/60 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:border-primary/20 cursor-pointer flex flex-col h-auto"
                                >
                                    {/* Image Section - Scaled beautifully */}
                                    <div className="relative h-[180px] sm:h-[190px] w-full overflow-hidden shrink-0">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[800ms] ease-out group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-black/50 backdrop-blur-md text-white border border-white/10 shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-5 sm:p-6 flex flex-col flex-1 relative z-10 transition-colors duration-300">
                                        <div className="flex items-center gap-3 text-[11px] font-medium text-muted-foreground/80 mb-3 uppercase tracking-wider">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={12} className="text-primary/70" />
                                                {post.date}
                                            </span>
                                        </div>

                                        <h3 className="text-xl sm:text-[22px] font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2.5 leading-[1.3] line-clamp-3">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt flex-1 pushes footer to the bottom evenly */}
                                        <p className="text-muted-foreground text-[13px] leading-relaxed line-clamp-2 mb-6 flex-1 opacity-90">
                                            {post.excerpt}
                                        </p>

                                        <div className="pt-4 border-t border-border/30 flex items-center justify-between mt-auto">
                                            <span className="text-xs font-semibold text-primary/80 group-hover:text-primary transition-colors flex items-center gap-1.5">
                                                Read Article
                                                <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                                            </span>
                                            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                                                <Clock size={12} />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Mobile Drag Instruction */}
                        <div className="lg:hidden flex justify-center mt-3 animate-pulse">
                            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-muted-foreground/50">
                                <MousePointerClick size={12} /> Drag to explore
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
});

export default Blog;
