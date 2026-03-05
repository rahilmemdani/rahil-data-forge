import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Share2, Check, ArrowUpRight } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    const post = blogs.find((b) => b.slug === slug);

    // Scroll to top instantly on mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [slug]);

    const handleBack = () => {
        navigate('/');
        setTimeout(() => {
            const el = document.getElementById('blogs');
            if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'instant' });
            }
        }, 50);
    };

    const handleShare = async () => {
        const url = window.location.href;
        try {
            if (navigator.share) {
                await navigator.share({
                    title: post?.title,
                    url: url,
                });
            } else {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch (err) {
            console.error("Error sharing", err);
        }
    };

    if (!post) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-4">
                <h1 className="text-3xl font-display font-bold text-foreground mb-4">Post not found</h1>
                <button onClick={handleBack} className="text-primary hover:underline">Return to posts</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground pb-24">
            {/* ═══ Top Navigation Bar (subtle) ═══ */}
            <div className="w-full border-b border-border/20 bg-background/80 backdrop-blur-xl sticky top-0 z-50 transition-all">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-1.5 text-sm sm:text-[15px] font-medium text-muted-foreground hover:text-primary transition-colors group"
                    >
                        <ChevronLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
                        Back to posts
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">

                {/* Category */}
                <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary">
                        {post.category}
                    </span>
                </div>

                {/* Title (7ty7 style: huge, elegant styling) */}
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-display font-extrabold leading-[1.1] tracking-tight text-foreground mb-8">
                    {post.title}
                </h1>

                {/* Meta row + Share (7ty7 style: "Published on [date] • [time] read" ---------- [Share Icon]) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-y border-border/40 text-[15px] text-muted-foreground mb-12">
                    <div className="flex items-center font-medium">
                        <span>Published on {post.date}</span>
                        <span className="mx-3 text-border">•</span>
                        <span>{post.readTime}</span>
                    </div>

                    <button
                        onClick={handleShare}
                        className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors bg-muted/40 hover:bg-primary/10 px-4 py-2 rounded-full w-fit sm:w-auto"
                        aria-label="Share post"
                    >
                        {copied ? <Check size={16} className="text-green-500" /> : <Share2 size={16} />}
                        {copied ? "Copied!" : "Share"}
                    </button>
                </div>

                {/* ═══ Hero Image (Boxed, Sharp) ═══ */}
                {post.coverImage && (
                    <div className="w-full mb-16 rounded-2xl overflow-hidden shadow-sm border border-border/30 bg-muted/20">
                        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-full object-cover object-center"
                                loading="eager"
                            />
                        </div>
                    </div>
                )}

                {/* Article body */}
                <div className="max-w-[700px] mx-auto">
                    <div
                        className="prose-blog"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-border/30">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-muted text-foreground border border-border/50"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="h-px w-full bg-border/40 my-16" />

                    {/* Author card (Minimalist) */}
                    <div className="p-8 rounded-2xl border border-border bg-card/20 flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-16">
                        <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl font-display shadow-sm">
                            R
                        </div>
                        <div className="text-center sm:text-left flex-1">
                            <h3 className="font-display font-bold text-xl text-foreground mb-1">Rahil Memdani</h3>
                            <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                                Full-Stack Software Engineer building enterprise-scale systems and data platforms. Currently building for millions of users at Grow Indigo.
                            </p>
                            <a
                                href="https://linkedin.com/in/rahilmemdani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-primary hover:underline group"
                            >
                                Connect on LinkedIn
                                <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Bottom Back Button */}
                    <div className="flex justify-center mb-12">
                        <button
                            onClick={handleBack}
                            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-foreground text-background text-[15px] font-semibold hover:opacity-90 transition-opacity"
                        >
                            <ChevronLeft size={18} />
                            Back to posts
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPost;
