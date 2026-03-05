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
            { id: 'client', label: 'React Client', icon: <Users className="w-6 h-6" />, color: 'bg-blue-500' },
            { id: 'api', label: 'Node.js API', icon: <Server className="w-6 h-6" />, color: 'bg-emerald-500' },
            { id: 'db', label: 'Single PostgreSQL', icon: <Database className="w-6 h-6" />, color: 'bg-indigo-500' },
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
            { id: 'client', label: 'Multi-tenant Client', icon: <Users className="w-6 h-6" />, color: 'bg-blue-600' },
            { id: 'middleware', label: 'Auth & Tenant Middleware', icon: <ShieldCheck className="w-6 h-6" />, color: 'bg-amber-500' },
            { id: 'api', label: 'Distributed Node.js', icon: <Layers className="w-6 h-6" />, color: 'bg-emerald-600' },
            { id: 'pg', label: 'Postgres (RLS)', icon: <Database className="w-6 h-6" />, color: 'bg-indigo-600' },
            { id: 'snowflake', label: 'Snowflake (7M+ Acres)', icon: <Zap className="w-6 h-6" />, color: 'bg-sky-400' },
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
        <div className="w-full max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl border border-border/30 bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden mb-16">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Info Side */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                        System Evolution
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStage}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl sm:text-3xl font-display font-bold leading-tight">
                                {currentStage.title}
                            </h3>
                            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                {currentStage.description}
                            </p>
                            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                                <span className="text-xs font-bold text-primary block mb-1">Impact:</span>
                                <p className="text-sm font-medium">{currentStage.impact}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center gap-4 pt-4">
                        <button
                            onClick={() => setActiveStage(0)}
                            className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeStage === 0 ? 'bg-primary text-white shadow-lg' : 'bg-muted hover:bg-muted/80'}`}
                        >
                            Stage 1
                        </button>
                        <button
                            onClick={() => setActiveStage(1)}
                            className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeStage === 1 ? 'bg-primary text-white shadow-lg' : 'bg-muted hover:bg-muted/80'}`}
                        >
                            Stage 2
                        </button>
                    </div>
                </div>

                {/* Visual Side */}
                <div className="w-full md:w-2/3 h-[400px] relative bg-muted/20 rounded-2xl border border-border/20 flex items-center justify-center p-8 overflow-hidden">
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <AnimatePresence mode="popLayout">
                            {currentStage.connections.map((conn, idx) => {
                                return (
                                    <motion.line
                                        key={`${activeStage}-${conn.from}-${conn.to}`}
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.3 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        x1="50%" y1="50%" x2="50%" y2="50%" // Placeholder, logic below
                                        className="stroke-primary stroke-2"
                                        strokeDasharray="5,5"
                                    />
                                )
                            })}
                        </AnimatePresence>
                    </svg>

                    <div className="relative z-10 flex flex-wrap justify-center items-center gap-8 md:gap-12 w-full h-full">
                        <AnimatePresence mode="popLayout">
                            {currentStage.nodes.map((node) => (
                                <motion.div
                                    key={node.id}
                                    layoutId={node.id}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ type: "spring", damping: 15, stiffness: 100 }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${node.color} flex items-center justify-center text-white shadow-xl transform transition-transform hover:scale-110`}>
                                        {node.icon}
                                    </div>
                                    <span className="text-[10px] sm:text-xs font-bold text-center w-24 leading-tight">
                                        {node.label}
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Interactive slider tip */}
                    {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] font-mono text-muted-foreground opacity-50">
                        <ChevronLeft size={10} /> Toggle stages to see logic shift <ChevronRight size={10} />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ArchitectureSlider;
