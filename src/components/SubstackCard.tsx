import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SubstackCardProps {
    className?: string;
    style?: React.CSSProperties;
    isMobile?: boolean;
}

const SubstackCard: React.FC<SubstackCardProps> = ({ className, style, isMobile }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load Substack script
        const script = document.createElement('script');
        script.src = "https://substack.com/embedjs/embed.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);

        return () => {
            // Cleanup script if component unmounts
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const content = (
        <div className=" Substacks-embed-container w-full h-full p-1">
            <div 
                className="substack-post-embed" 
                style={{ background: 'transparent' }}
            >
                <p lang="en">The One Thing AI Will Never Automate by Rahil</p>
                <p>on the difference between processing and presence</p>
                <a 
                    data-post-link 
                    href="https://rahilmemdani.substack.com/p/the-one-thing-ai-will-never-automate"
                >
                    Read on Substack
                </a>
            </div>
        </div>
    );

    if (isMobile) {
        return (
            <article
                className={`relative overflow-hidden rounded-[1.2rem] border border-border/40 bg-card/40 backdrop-blur-xl shrink-0 snap-start flex flex-col h-auto ${className}`}
                style={{ ...style, width: '220px', minHeight: '300px' }}
            >
                {content}
            </article>
        );
    }

    return (
        <motion.article
            style={style}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className={`relative overflow-hidden rounded-[2rem] border border-border/40 bg-card/40 backdrop-blur-xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] hover:border-primary/30 flex flex-col h-auto ${className}`}
        >
            {content}
        </motion.article>
    );
};

export default SubstackCard;
