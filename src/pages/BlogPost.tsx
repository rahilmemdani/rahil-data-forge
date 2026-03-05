import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, ArrowUpRight } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const post = blogs.find((b) => b.slug === slug);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [slug]);

    const handleBack = () => {
        // Navigate back to home route
        navigate('/');
        // Instantly jump to #blogs without smooth scroll travelling
        setTimeout(() => {
            const el = document.getElementById('blogs');
            if (el) {
                // Find navbar height roughly to offset
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'instant' });
            }
        }, 50);
    };

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
                <span className="text-6xl mb-6">🔍</span>
                <h1 className="text-3xl font-display font-bold text-foreground mb-3">Post not found</h1>
                <p className="text-muted-foreground mb-8 text-center">That blog post hasn't been written yet. Check back soon.</p>
                <button onClick={handleBack} className="btn-primary">Back to all posts</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground pb-24">

            {/* ═══ Persistent sticky back button ═══ */}
            <div className="fixed top-20 left-4 sm:left-6 lg:left-10 z-50">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 pr-4 pl-3 py-2 rounded-full bg-background/90 backdrop-blur-xl border border-border/60 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                    <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                    <span>All posts</span>
                </button>
            </div>

            {/* ═══ Top Spacing ═══ */}
            <div className="pt-24 sm:pt-32" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Category badge */}
                <div className="mb-6 flex justify-center sm:justify-start">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide uppercase bg-primary/10 text-primary border border-primary/20 shadow-sm">
                        {post.category}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.15] tracking-tight text-foreground mb-8 text-center sm:text-left">
                    {post.title}
                </h1>

                {/* Meta row */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-3 text-[15px] font-medium text-muted-foreground mb-12">
                    <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary/70" />
                        {post.date}
                    </span>
                    <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
                    <span className="flex items-center gap-2">
                        <Clock size={16} className="text-primary/70" />
                        {post.readTime}
                    </span>
                    <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
                    <span className="flex items-center gap-2 text-foreground">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-[9px] text-white font-bold">R</div>
                        Rahil Memdani
                    </span>
                </div>

                {/* ═══ Hero Image (Boxed, sharp, proper ratio) ═══ */}
                {post.coverImage && (
                    <div className="w-full mb-16 rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted/20">
                        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full max-h-[500px]">
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
                <div
                    className="prose-blog"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-16 mb-12">
                    <span className="text-sm font-semibold text-foreground mr-2 flex items-center">Tags:</span>
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                            <Tag size={12} />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

                {/* Author card */}
                <div className="p-8 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

                    <div className="w-20 h-20 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-3xl font-display shadow-lg border-4 border-background">
                        R
                    </div>
                    <div className="text-center sm:text-left relative z-10">
                        <h3 className="font-display font-bold text-xl text-foreground mb-2">Rahil Memdani</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                            Full-Stack Software Engineer specialising in data engineering, SaaS architecture, and enterprise-scale systems. Currently building predictive platforms for millions of users at Grow Indigo.
                        </p>
                        <a
                            href="https://linkedin.com/in/rahilmemdani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group"
                        >
                            Connect on LinkedIn
                            <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPost;
