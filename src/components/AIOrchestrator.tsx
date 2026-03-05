import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Terminal, Play, CheckCircle2, CloudRain, Sun, Bot, Zap } from 'lucide-react';

const scenarios = [
    {
        id: "crop-health",
        title: "Predictive Crop Health",
        subtitle: "AI-Driven Pest & Disease Alert",
        icon: <CloudRain className="text-primary" />,
        problem: "Analyzes satellite imagery and historical soil data to predict pest outbreaks with 92% accuracy across 7M+ acres.",
        code: `# Orchestrating AI for Predictive Health
def predict_pest_outbreak(region_data):
    # 1. Fetch telemetry from Snowflake
    telemetry = snowflake_client.query_region(region_data.id)
    
    # 2. Anomaly Detection Agent
    anomalies = agentic_processor.detect_stress_patterns(telemetry)
    
    # 3. LLM Reasoning for Advisory
    advisory = llm.generate_insight(
        prompt=f"Region {region_data.name} shows {anomalies}. Suggest mitigation."
    )
    return advisory`,
        output: [
            { metric: "Detection Accuracy", value: "92.4%", status: "OPTIMAL" },
            { metric: "Pest Risk Score", value: "High (Level 4)", status: "ALERT" },
            { metric: "AI Confidence", value: "High", status: "STABLE" }
        ]
    },
    {
        id: "market-intel",
        title: "Market Intelligence Agent",
        subtitle: "Real-time Price Forecasting",
        icon: <Sun className="text-secondary" />,
        problem: "Scrapes regional market prices and uses an LLM to provide 'Best Time to Sell' recommendations to 2M+ farmers.",
        code: `# RAG Pipeline for Market Advisory
def get_market_intelligence(farmer_id):
    # 1. Get regional price trends
    trends = market_api.fetch_prices(farmer_id.region)
    
    # 2. Vector Search for historical seasonality
    context = vector_db.similarity_search(trends.crop_type)
    
    # 3. RAG-based Price Forecasting
    forecast = llm.predict_best_sell_time(
        data=trends, history=context
    )
    return forecast`,
        output: [
            { prediction: "Bullish Trend (+12%)", region: "Maharashtra", action: "HOLD" },
            { prediction: "Stable (-2%)", region: "Gujarat", action: "SELL" }
        ]
    }
];

const AIOrchestrator = () => {
    const [activeScenario, setActiveScenario] = useState(scenarios[0]);
    const [isExecuting, setIsExecuting] = useState(false);
    const [showResult, setShowResult] = useState(true);

    const runPipeline = () => {
        setIsExecuting(true);
        setShowResult(false);
        setTimeout(() => {
            setIsExecuting(false);
            setShowResult(true);
        }, 1500);
    };

    return (
        <div className="section-full py-20 bg-muted/5 relative overflow-hidden" id="ai-lab">
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom px-4 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-6 border border-primary/20 backdrop-blur-md">
                        <Brain size={14} className="animate-pulse" /> The Agri-AI Orchestrator
                    </div>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-[1.1]">
                        Bridging Big Data & <span className="gradient-text-animated">Actionable Intelligence</span>
                    </h2>
                    <p className="text-xs sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
                        I architected a full-stack AI pipeline that transforms 7M+ acres of raw agricultural telemetry into real-time advisory using RAG and agentic orchestration.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 md:gap-10 items-start">
                    {/* Left Column: Scenarios & Impact */}
                    <div className="lg:col-span-4 space-y-4 md:space-y-5">
                        {scenarios.map((s, idx) => (
                            <button
                                key={s.id}
                                onClick={() => { setActiveScenario(s); setShowResult(true); }}
                                className={`w-full text-left p-4 md:p-6 rounded-2xl border transition-all duration-500 group relative overflow-hidden animate-fade-in-up ${activeScenario.id === s.id
                                    ? 'bg-card border-primary/50 shadow-2xl shadow-primary/10 scale-[1.02]'
                                    : 'bg-card/40 border-border/40 hover:border-primary/30'
                                    }`}
                                style={{ animationDelay: `${idx * 150}ms` }}
                            >
                                {/* Active indicator bar */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-primary transition-opacity duration-500 ${activeScenario.id === s.id ? 'opacity-100' : 'opacity-0'}`} />

                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className={`p-2.5 md:p-3 rounded-xl transition-colors duration-500 ${activeScenario.id === s.id ? 'bg-primary/10' : 'bg-muted group-hover:bg-primary/5'}`}>
                                        {React.cloneElement(s.icon as React.ReactElement, { size: 20 })}
                                    </div>
                                    <div>
                                        <h4 className={`font-bold text-sm md:text-base mb-1 transition-colors duration-300 ${activeScenario.id === s.id ? 'text-primary' : 'group-hover:text-primary'}`}>
                                            {s.title}
                                        </h4>
                                        <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                            {s.problem}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}

                        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 dark:from-indigo-500/10 dark:to-violet-500/5 dark:border dark:border-white/10 text-white dark:text-foreground shadow-2xl mt-6 md:mt-10 relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '450ms' }}>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                            <div className="flex items-center gap-2 text-white/70 dark:text-primary text-[10px] font-mono mb-3 md:mb-4 uppercase tracking-[0.2em]">
                                <Zap size={14} className="animate-pulse" /> System Impact
                            </div>
                            <p className="text-xs md:text-sm lg:text-base leading-relaxed relative z-10 font-medium italic opacity-90">
                                "By integrating an AI-orchestration layer, we reduced the time-to-insight for field officers from 48 hours to 15 seconds, while maintaining data integrity across the pipeline."
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Code Editor */}
                    <div className="lg:col-span-8 animate-fade-in-up w-full overflow-hidden" style={{ animationDelay: '300ms' }}>
                        <div className="rounded-2xl md:rounded-3xl border border-border/40 bg-[#0B0E14] shadow-2xl overflow-hidden min-h-[400px] md:min-h-[520px] flex flex-col group relative">
                            {/* Subtle editor glow */}
                            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-1000" />

                            {/* Editor Header */}
                            <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-5 border-b border-white/5 bg-white/[0.02] relative z-20">
                                <div className="flex items-center gap-2">
                                    <div className="hidden sm:flex gap-1.5 mr-4">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                                    </div>
                                    <div className="flex items-center gap-2 text-[9px] md:text-xs font-mono text-white/30 uppercase tracking-[0.2em] font-medium">
                                        <Bot size={14} className="text-primary/70" /> agentic_pipeline.py
                                    </div>
                                </div>
                                <button
                                    onClick={runPipeline}
                                    disabled={isExecuting}
                                    className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-primary hover:bg-primary/90 disabled:bg-white/5 text-primary-foreground text-[10px] md:text-xs font-bold rounded-xl transition-all shadow-xl shadow-primary/10 active:scale-95 disabled:opacity-50"
                                >
                                    {isExecuting ? <Terminal className="animate-pulse" size={14} /> : <Play size={14} />}
                                    <span className="hidden xs:inline">{isExecuting ? "Processing..." : "Run Pipeline"}</span>
                                    <span className="xs:hidden">{isExecuting ? "..." : "Run"}</span>
                                </button>
                            </div>

                            {/* Editor View */}
                            <div className="flex-1 p-4 md:p-8 relative overflow-hidden z-10">
                                <pre className="font-mono text-[11px] md:text-sm lg:text-base leading-relaxed text-sky-200/90 whitespace-pre-wrap selection:bg-primary/30">
                                    {activeScenario.code.split('\n').map((line, i) => (
                                        <div key={i} className="flex gap-4 md:gap-6 group/line">
                                            <span className="w-4 md:w-6 text-right text-white/10 select-none text-[10px] md:text-xs leading-relaxed group-hover/line:text-white/30 transition-colors">{i + 1}</span>
                                            <div className="flex-1 overflow-x-hidden">
                                                <div className="whitespace-pre-wrap break-words">{line}</div>
                                            </div>
                                        </div>
                                    ))}
                                </pre>

                                {/* Result Modal Overlay */}
                                <AnimatePresence>
                                    {showResult && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 20, scale: 0.98 }}
                                            className="absolute md:inset-x-8 bottom-4 md:bottom-8 left-4 right-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#161B22]/95 backdrop-blur-2xl border border-white/10 shadow-3xl z-30"
                                        >
                                            {/* Active glow inside modal */}
                                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />

                                            <div className="flex items-center justify-between mb-4 relative z-10">
                                                <div className="flex items-center gap-2 text-emerald-400 text-[9px] md:text-xs font-bold font-mono tracking-wider">
                                                    <CheckCircle2 size={14} className="text-emerald-500 animate-bounce" /> SUCCESS [1.5s]
                                                </div>
                                            </div>

                                            <div className="overflow-x-auto relative z-10">
                                                <table className="w-full text-left font-mono text-[9px] md:text-xs text-white/80 min-w-[300px]">
                                                    <thead>
                                                        <tr className="border-b border-white/10 opacity-60">
                                                            {Object.keys(activeScenario.output[0]).map(key => (
                                                                <th key={key} className="pb-2 px-1 font-bold uppercase tracking-widest text-primary/80">{key}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {activeScenario.output.map((row, i) => (
                                                            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors">
                                                                {Object.values(row).map((val: any, j) => (
                                                                    <td key={j} className="py-2.5 px-1">
                                                                        <span className={val === 'ALERT' ? 'text-rose-400 font-bold' : val === 'OPTIMAL' ? 'text-emerald-400' : ''}>
                                                                            {val}
                                                                        </span>
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Editor Footer */}
                            <div className="px-4 md:px-6 py-3 md:py-4 border-t border-white/5 bg-black/40 text-[9px] md:text-[10px] text-white/20 font-mono flex justify-between md:justify-start gap-4 md:gap-8 relative z-20">
                                <span className="flex items-center gap-1.5"><Terminal size={12} /> py3</span>
                                <span className="hidden sm:flex items-center gap-1.5">UTF-8</span>
                                <span className="flex items-center gap-1.5 md:ml-auto">RAG / Agentic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIOrchestrator;
