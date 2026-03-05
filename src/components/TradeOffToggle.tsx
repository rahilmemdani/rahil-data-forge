import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, AlertCircle, Info } from 'lucide-react';

const decisions = [
    {
        id: "isolation",
        title: "Tenant Isolation Strategy",
        options: [
            {
                id: "A",
                label: "Separate Databases",
                outcome: "REJECTED",
                reason: "While providing physical isolation, managing 600+ databases would have increased DevOps overhead by 200% and made schema migrations a nightmare.",
                color: "red"
            },
            {
                id: "B",
                label: "PostgreSQL RLS",
                outcome: "SELECTED",
                reason: "Chose Row-Level Security (RLS) to maintain logical isolation within a shared database. Reduced overhead by 60% and simplified cross-tenant reporting.",
                color: "emerald"
            }
        ]
    },
    {
        id: "data",
        title: "Large-Scale Data Handling",
        options: [
            {
                id: "A",
                label: "Elasticsearch Clustering",
                outcome: "REJECTED",
                reason: "Required too much manual re-indexing and didn't handle complex join logic required for 7M+ acre agricultural datasets efficiently.",
                color: "red"
            },
            {
                id: "B",
                label: "Snowflake SQL Macros",
                outcome: "SELECTED",
                reason: "Engineered modular query logic in Snowflake. Improved performance by 40% and enabled reusable analytics layers for business teams.",
                color: "emerald"
            }
        ]
    }
];

const TradeOffToggle = () => {
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

    const handleSelect = (decisionId: string, optionId: string) => {
        setSelectedOptions(prev => ({ ...prev, [decisionId]: optionId }));
    };

    return (
        <div className="w-full mt-8 md:mt-12 p-4 sm:p-6 md:p-10 rounded-[28px] md:rounded-[32px] border border-border/20 bg-muted/5 backdrop-blur-md relative overflow-hidden group">
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10 relative z-10">
                <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-inner">
                    <HelpCircle size={20} className="md:w-[22px] md:h-[22px] animate-float" />
                </div>
                <div>
                    <h4 className="text-lg md:text-2xl font-display font-bold gradient-text">The Hard Choices</h4>
                    <p className="text-[9px] md:text-xs text-muted-foreground mt-0.5 uppercase tracking-widest font-medium opacity-60">Engineering Trade-offs</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative z-10">
                {decisions.map((decision) => (
                    <div key={decision.id} className="space-y-4 md:space-y-5">
                        <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary/70 ml-0.5">{decision.title}</label>
                        <div className="flex p-1 rounded-xl md:rounded-2xl bg-muted/30 border border-border/10 gap-1.5 md:gap-2 backdrop-blur-sm">
                            {decision.options.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => handleSelect(decision.id, opt.id)}
                                    className={`flex-1 py-2.5 md:py-3 px-2 md:px-4 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-500 relative overflow-hidden ${selectedOptions[decision.id] === opt.id
                                        ? 'bg-background shadow-xl scale-[1.02] z-10 text-primary'
                                        : 'hover:bg-background/20 opacity-40 hover:opacity-100'
                                        }`}
                                >
                                    {selectedOptions[decision.id] === opt.id && (
                                        <motion.div layoutId={`glow-${decision.id}`} className="absolute inset-0 bg-primary/5 blur-md" />
                                    )}
                                    {opt.label}
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[140px] md:min-h-[160px] relative">
                            <AnimatePresence mode="wait">
                                {selectedOptions[decision.id] ? (
                                    <motion.div
                                        key={selectedOptions[decision.id]}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className={`p-4 md:p-6 rounded-xl md:rounded-2xl border h-full flex flex-col justify-center transition-colors duration-500 ${decision.options.find(o => o.id === selectedOptions[decision.id])?.outcome === 'REJECTED'
                                            ? 'border-rose-500/20 bg-rose-500/[0.03]'
                                            : 'border-emerald-500/20 bg-emerald-500/[0.03]'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-2 md:mb-3">
                                            {decision.options.find(o => o.id === selectedOptions[decision.id])?.outcome === 'SELECTED' ?
                                                <div className="p-1 rounded-full bg-emerald-500/10"><CheckCircle2 className="text-emerald-500" size={13} /></div> :
                                                <div className="p-1 rounded-full bg-rose-500/10"><AlertCircle className="text-rose-500" size={13} /></div>
                                            }
                                            <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] ${decision.options.find(o => o.id === selectedOptions[decision.id])?.outcome === 'REJECTED' ? 'text-rose-500' : 'text-emerald-500'
                                                }`}>
                                                {decision.options.find(o => o.id === selectedOptions[decision.id])?.outcome}
                                            </span>
                                        </div>
                                        <p className="text-[13px] md:text-sm leading-relaxed text-muted-foreground font-medium italic">
                                            "{decision.options.find(o => o.id === selectedOptions[decision.id])?.reason}"
                                        </p>
                                    </motion.div>
                                ) : (
                                    <div className="h-full min-h-[140px] md:min-h-[160px] border border-dashed border-border/30 rounded-xl md:rounded-2xl flex items-center justify-center p-6 md:p-8 text-center group/empty shadow-inner bg-muted/5">
                                        <div className="space-y-2 md:space-y-3 transform transition-transform group-hover/empty:scale-105 duration-500">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/5 flex items-center justify-center mx-auto border border-primary/10">
                                                <Info size={16} className="opacity-40 text-primary" />
                                            </div>
                                            <p className="text-[9px] md:text-[10px] lg:text-xs text-muted-foreground/60 font-medium tracking-wide">Select an architecture decision to see the evaluation logic</p>
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TradeOffToggle;
