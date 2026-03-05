import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, BookOpen, ArrowRight, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import { blogs } from '../data/blogs';

const CARD_WIDTH = 340;
const CARD_GAP = 24;
const CARD_STRIDE = CARD_WIDTH + CARD_GAP;

const Blog = React.memo(() => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const [dragConstraint, setDragConstraint] = useState(0);

    const contentRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const controls = useAnimation();

    // Detect touch device
    useEffect(() => {
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    // Calculate drag constraint
    useEffect(() => {
        if (contentRef.current && carouselRef.current) {
            const totalWidth = blogs.length * CARD_STRIDE - CARD_GAP;
            const containerWidth = carouselRef.current.offsetWidth;
            setDragConstraint(Math.max(0, totalWidth - containerWidth));
        }
    }, []);

    const snapToIndex = useCallback((index: number) => {
        const clamped = Math.max(0, Math.min(index, blogs.length - 1));
        setCurrentIndex(clamped);
        controls.start({
            x: -clamped * CARD_STRIDE,
            transition: { type: 'spring', stiffness: 300, damping: 30 }
        });
    }, [controls]);

    const handleDragEnd = useCallback((_: any, info: any) => {
        const velocity = info.velocity.x;
        const offset = info.offset.x;

        if (Math.abs(velocity) > 500) {
            snapToIndex(velocity < 0 ? currentIndex + 1 : currentIndex - 1);
        } else if (Math.abs(offset) > CARD_STRIDE / 3) {
            snapToIndex(offset < 0 ? currentIndex + 1 : currentIndex - 1);
        } else {
            snapToIndex(currentIndex);
        }
    }, [currentIndex, snapToIndex]);

    // Auto-play
    // useEffect(() => {
    //     if (isPaused) return;
    //     const timer = setInterval(() => {
    //         const next = currentIndex >= blogs.length - 1 ? 0 : currentIndex + 1;
    //         snapToIndex(next);
    //     }, 4000);
    //     return () => clearInterval(timer);
    // }, [currentIndex, isPaused, snapToIndex]);

    return (
        <section id="blogs" className="relative z-10 noise-bg py-16 md:py-32 overflow-hidden">
            {/* Animated Background Mesh - GPU Optimized */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] right-[10%] w-[80vw] h-[80vw] bg-purple-200/20 rounded-full blur-[120px] mix-blend-multiply opacity-50 will-change-transform transform-gpu"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.05, 0.15, 0.05]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/2 left-0 w-[60vw] h-[60vw] bg-pink-200/15 rounded-full blur-[100px] mix-blend-multiply will-change-transform transform-gpu"
                />
            </div>

            <div className="container-custom px-6 sm:px-8 lg:px-4 lg:max-w-[90rem] relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* ── LEFT PANEL: Header Content (Order 1 on Mobile) ── */}
                    <div className="col-span-12 xl:col-span-5 order-1 lg:order-2 text-left">

                        <div className="mb-8 sm:mb-10 lg:mb-0 animate-fade-in-up lg:sticky lg:top-32 max-w-xl lg:max-w-none lg:pl-12 xl:pl-16">

                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3 sm:mb-4 border border-primary/20 backdrop-blur-md uppercase tracking-wider">
                                <BookOpen size={12} />
                                Writing
                            </span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight leading-[1.15]">
                                Inside The <span className="gradient-text">Process</span>
                            </h2>

                            <p className="text-[15px] sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-md sm:max-w-lg break-words">
                                Technical deep dives, architectural decisions, and product lessons from scaling platforms for millions of users.
                            </p>

                            <div className="flex items-center gap-3 text-sm font-medium text-foreground mt-5 sm:mt-6 lg:flex hidden">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                                </span>

                                <span>{blogs.length} posts published</span>
                            </div>

                        </div>

                    </div>

                    {/* ── RIGHT PANEL: Carousel/Slider (Order 2 on Mobile) ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="lg:col-span-12 xl:col-span-7 order-2 lg:order-1 overflow-visible"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="relative w-full">
                            <div ref={carouselRef} className="relative w-full overflow-hidden min-h-[340px] sm:min-h-[380px] lg:min-h-[450px]">
                                <motion.div
                                    ref={contentRef}
                                    drag="x"
                                    dragConstraints={{ right: 0, left: -dragConstraint }}
                                    dragElastic={0.15}
                                    dragMomentum={true}
                                    dragTransition={{ bounceStiffness: 300, bounceDamping: 30, power: 0.3, timeConstant: 200 }}
                                    whileTap={{ cursor: 'grabbing' }}
                                    animate={controls}
                                    style={{ x }}
                                    onDragEnd={handleDragEnd}
                                    className="flex touch-pan-y cursor-grab active:cursor-grabbing transform-gpu py-5 pr-6 lg:px-4"
                                >
                                    {blogs.map((post, index) => (
                                        <motion.article
                                            key={post.slug}
                                            onClick={() => navigate(`/blog/${post.slug}`)}
                                            style={{ width: CARD_WIDTH, marginRight: CARD_GAP, flexShrink: 0 }}
                                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                            animate={{
                                                scale: index === currentIndex ? 1 : 0.96,
                                                opacity: index === currentIndex ? 1 : 0.7,
                                            }}
                                            transition={{ duration: 0.4 }}
                                            className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-card/40 backdrop-blur-xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] hover:border-primary/30 cursor-pointer flex flex-col h-auto"
                                        >
                                            {/* Image */}
                                            <div className="relative h-[150px] sm:h-[170px] lg:h-[200px] w-full overflow-hidden shrink-0">
                                                <motion.img
                                                    src={post.coverImage}
                                                    alt={post.title}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.8 }}
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                                <div className="absolute top-5 left-5">
                                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-md text-white border border-white/10">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-4 sm:p-5 md:p-8 flex flex-col flex-1">
                                                <div className="flex items-center gap-3 text-[11px] font-semibold text-muted-foreground/80 mb-4 uppercase tracking-[0.15em]">
                                                    <Calendar size={13} className="text-primary/70" />
                                                    {post.date}
                                                </div>

                                                <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 leading-[1.25] line-clamp-2">
                                                    {post.title}
                                                </h3>

                                                <p className="text-muted-foreground text-[14px] leading-relaxed line-clamp-2 mb-8 flex-1 opacity-90 font-light">
                                                    {post.excerpt}
                                                </p>

                                                <div className="pt-6 border-t border-border/30 flex items-center justify-between mt-auto">
                                                    <span className="text-xs font-bold text-primary/90 flex items-center gap-2 group/btn">
                                                        READ ARTICLE
                                                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                                            <ArrowRight size={14} />
                                                        </motion.div>
                                                    </span>
                                                    <span className="flex items-center gap-2 text-[11px] text-muted-foreground font-medium">
                                                        <Clock size={13} />
                                                        {post.readTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.article>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Centered Side Arrows (Desktop Only) */}
                            {!isTouch && (
                                <>
                                    <button
                                        onClick={() => snapToIndex(currentIndex - 1)}
                                        disabled={currentIndex === 0}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-14 h-14 rounded-full border border-border/50 bg-white/95 backdrop-blur-md hover:bg-slate-50 disabled:opacity-30 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 disabled:cursor-not-allowed group"
                                        aria-label="Previous slide"
                                    >
                                        <ArrowRight className="w-6 h-6 text-primary rotate-180 group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={() => snapToIndex(currentIndex + 1)}
                                        disabled={currentIndex >= blogs.length - 1}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-14 h-14 rounded-full border border-border/50 bg-white/95 backdrop-blur-md hover:bg-slate-50 disabled:opacity-30 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 disabled:cursor-not-allowed group"
                                        aria-label="Next slide"
                                    >
                                        <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Mobile: dot indicators + drag hint (OG Style) */}
                        <div className="lg:hidden flex flex-col items-center gap-2 mt-3">
                            <div className="flex items-center gap-1.5">
                                {blogs.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => snapToIndex(i)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-primary w-5' : 'bg-border/60 w-1.5'}`}
                                    />
                                ))}
                            </div>
                            <motion.span
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground/50"
                            >
                                Drag to explore
                            </motion.span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

export default Blog;