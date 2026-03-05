import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Users, Layers, ShieldCheck, Zap, ChevronRight, ChevronLeft } from 'lucide-react';

const stages = [
    {
        id: 1,
        title: "Stage 1: The Monolith",
        description: "Initial architecture focused on speed to market. A single database and backend handled all requests sequentially.",
        impact: "Fast initial delivery, but limited scalability.",
        nodes: [
            { id: 'client', label: 'React Client', icon: <Users className="w-6 h-6" />, color: 'bg-primary/20 bg-gradient-to-br from-primary to-primary/60 border border-primary/20' },
            { id: 'api', label: 'Node.js API', icon: <Server className="w-6 h-6" />, color: 'bg-secondary/20 bg-gradient-to-br from-secondary to-secondary/60 border border-secondary/20' },
            { id: 'db', label: 'PostgreSQL', icon: <Database className="w-6 h-6" />, color: 'bg-indigo-500/20 bg-gradient-to-br from-indigo-500 to-indigo-700 border border-indigo-500/20' },
        ],
        connections: [
            { from: 'client', to: 'api' },
            { from: 'api', to: 'db' },
        ]
    },
    {
        id: 2,
        title: "Stage 2: The Multi-tenant Shift",
        description: "Architected for 2M+ users. Introduced Multi-tenancy, Row-Level Security (RLS) for isolation, and Snowflake for massive agricultural datasets.",
        impact: "Global scalability, 35% cost reduction, 60% less DevOps overhead.",
        nodes: [
            { id: 'client', label: 'Multi-tenant Client', icon: <Users className="w-6 h-6" />, color: 'bg-primary/80 bg-gradient-to-br from-primary to-primary/40 shadow-lg shadow-primary/20' },
            { id: 'middleware', label: 'Auth & RLS', icon: <ShieldCheck className="w-6 h-6" />, color: 'bg-amber-500/80 bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg shadow-amber-500/20' },
            { id: 'api', label: 'Distributed API', icon: <Layers className="w-6 h-6" />, color: 'bg-emerald-500/80 bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/20' },
            { id: 'pg', label: 'Postgres (RLS)', icon: <Database className="w-6 h-6" />, color: 'bg-indigo-600/80 bg-gradient-to-br from-indigo-600 to-indigo-800 shadow-lg shadow-indigo-600/20' },
            { id: 'snowflake', label: 'Snowflake', icon: <Zap className="w-6 h-6" />, color: 'bg-sky-400/80 bg-gradient-to-br from-sky-400 to-sky-600 shadow-lg shadow-sky-400/20' },
        ],
        connections: [
            { from: 'client', to: 'middleware' },
            { from: 'middleware', to: 'api' },
            { from: 'api', to: 'pg' },
            { from: 'api', to: 'snowflake' },
        ]
    }
];

const ArchitectureSlider = () => {
    const [activeStage, setActiveStage] = useState(0);

    const currentStage = stages[activeStage];

    return (
        <div className="w-full max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl border border-border/30 bg-card/30 backdrop-blur-xl shadow-2xl overflow-hidden mb-16 relative">
            {/* Subtle background flow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                {/* Info Side */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
                        System Evolution
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStage}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl sm:text-3xl font-display font-bold leading-tight gradient-text">
                                {currentStage.title}
                            </h3>
                            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed opacity-80">
                                {currentStage.description}
                            </p>
                            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-sm">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">Impact Insight:</span>
                                <p className="text-sm font-medium leading-relaxed">{currentStage.impact}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center gap-3 pt-4">
                        <button
                            onClick={() => setActiveStage(0)}
                            className={`flex-1 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 ${activeStage === 0 ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]' : 'bg-muted/50 hover:bg-muted opacity-70'}`}
                        >
                            The Monolith
                        </button>
                        <button
                            onClick={() => setActiveStage(1)}
                            className={`flex-1 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 ${activeStage === 1 ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]' : 'bg-muted/50 hover:bg-muted opacity-70'}`}
                        >
                            Multi-tenant
                        </button>
                    </div>
                </div>

                {/* Visual Side */}
                <div className="w-full md:w-2/3 h-[420px] relative bg-muted/10 rounded-3xl border border-border/20 flex items-center justify-center p-8 overflow-hidden group/viz">
                    {/* Animated grid background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                    <div className="relative z-10 flex flex-wrap justify-center items-center gap-8 md:gap-14 w-full h-full">
                        <AnimatePresence mode="popLayout">
                            {currentStage.nodes.map((node) => (
                                <motion.div
                                    key={node.id}
                                    layoutId={node.id}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ type: "spring", damping: 20, stiffness: 120 }}
                                    className="flex flex-col items-center gap-3"
                                >
                                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-[22px] ${node.color} flex items-center justify-center text-white shadow-2xl relative group/node overflow-hidden`}>
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/node:opacity-100 transition-opacity" />
                                        {node.icon}
                                    </div>
                                    <span className="text-[10px] sm:text-xs font-bold text-center w-28 leading-tight opacity-70 group-hover:opacity-100 transition-opacity">
                                        {node.label}
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureSlider;
