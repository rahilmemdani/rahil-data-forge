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
        <div className="w-full mt-10 p-6 sm:p-10 rounded-3xl border border-border/20 bg-muted/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <HelpCircle size={20} />
                </div>
                <div>
                    <h4 className="text-xl font-display font-bold">The Hard Choices</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Understanding the 'Why' behind the architecture</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {decisions.map((decision) => (
                    <div key={decision.id} className="space-y-4">
                        <label className="text-sm font-bold opacity-70 ml-1">{decision.title}</label>
                        <div className="flex p-1.5 rounded-2xl bg-muted/40 border border-border/20 gap-2">
                            {decision.options.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => handleSelect(decision.id, opt.id)}
                                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 ${selectedOptions[decision.id] === opt.id ? 'bg-background shadow-lg scale-[1.05] z-10' : 'hover:bg-background/40 opacity-60'}`}
                                >
                                    Option {opt.id}: {opt.label}
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[140px] relative">
                            <AnimatePresence mode="wait">
                                {selectedOptions[decision.id] ? (
                                    <motion.div
                                        key={selectedOptions[decision.id]}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className={`p-5 rounded-2xl border ${decision.options.find(o => o.id === selectedOptions[decision.id])?.color === 'red' ? 'border-rose-500/20 bg-rose-500/5' : 'border-emerald-500/20 bg-emerald-500/5'}`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            {decision.options.find(o => o.id === selectedOptions[decision.id])?.outcome === 'SELECTED' ?
                                                <CheckCircle2 className="text-emerald-500" size={16} /> :
                                                <AlertCircle className="text-rose-500" size={16} />
                                            }
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${decision.options.find(o => o.id === selectedOptions[decision.id])?.color === 'red' ? 'text-rose-500' : 'text-emerald-500'}`}>
                                                {decision.options.find(o => o.id === selectedOptions[decision.id])?.outcome}
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                                            {decision.options.find(o => o.id === selectedOptions[decision.id])?.reason}
                                        </p>
                                    </motion.div>
                                ) : (
                                    <div className="h-full border border-dashed border-border/40 rounded-2xl flex items-center justify-center p-6 text-center">
                                        <div className="space-y-2">
                                            <Info size={18} className="mx-auto opacity-20" />
                                            <p className="text-[10px] text-muted-foreground italic">Click an option to see the evaluation logic</p>
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
