import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Code, Terminal, Play, CheckCircle2, CloudRain, Sun, Sprout } from 'lucide-react';

const scenarios = [
    {
        id: "rainfall",
        title: "High Rainfall Analysis",
        subtitle: "Maharashtra Region - Kharif Season",
        icon: <CloudRain className="text-blue-400" />,
        problem: "Analyzing correlation between excessive rainfall and biological product efficacy across 200,000 plots.",
        macro: `CREATE OR REPLACE SECURE MACRO GET_RAINFALL_EFFICACY(
  PLOT_ID VARCHAR,
  THRESHOLD FLOAT
) AS (
  SELECT 
    p.plot_name,
    p.total_rainfall,
    b.efficacy_score,
    (p.total_rainfall / b.target_rainfall) * 100 as stress_index
  FROM snowflake.agri_cloud.plots p
  JOIN snowflake.agri_cloud.biologicals b ON p.crop_id = b.crop_id
  WHERE p.total_rainfall > THRESHOLD
  QUALIFY ROW_NUMBER() OVER (PARTITION BY p.tenant_id ORDER BY stress_index DESC) <= 5
);`,
        output: [
            { plot: "PLOT_MH_402", rainfall: "1240mm", efficacy: "78%", status: "OPTIMAL" },
            { plot: "PLOT_MH_105", rainfall: "1580mm", efficacy: "42%", status: "STRESS" },
            { plot: "PLOT_MH_889", rainfall: "1100mm", efficacy: "85%", status: "OPTIMAL" }
        ]
    },
    {
        id: "drought",
        title: "Drought Impact Prediction",
        subtitle: "Gujarat Region - Rabi Season",
        icon: <Sun className="text-orange-400" />,
        problem: "Real-time query of 7M+ acre datasets to identify high-risk zones for inventory relocation.",
        macro: `CREATE OR REPLACE SECURE MACRO PREDICT_INVENTORY_RISK(
  REGION_CODE VARCHAR,
  MOISTURE_LIMIT FLOAT
) AS (
  SELECT 
    s.warehouse_location,
    s.current_stock,
    m.moisture_percentage,
    CASE WHEN m.moisture_percentage < MOISTURE_LIMIT THEN 'CRITICAL' ELSE 'STABLE' END as risk_level
  FROM snowflake.agri_cloud.soil_sensors m
  JOIN snowflake.agri_cloud.inventory s ON m.warehouse_id = s.warehouse_id
  WHERE s.region = REGION_CODE
  ORDER BY m.moisture_percentage ASC
);`,
        output: [
            { warehouse: "WH_GUJ_SURAT", moisture: "12%", risk: "CRITICAL", action: "RELOCATE" },
            { warehouse: "WH_GUJ_VADOD", moisture: "18%", risk: "STABLE", action: "MONITOR" }
        ]
    }
];

const SnowflakeLab = () => {
    const [activeScenario, setActiveScenario] = useState(scenarios[0]);
    const [isExecuting, setIsExecuting] = useState(false);
    const [showResult, setShowResult] = useState(true);

    const runQuery = () => {
        setIsExecuting(true);
        setShowResult(false);
        setTimeout(() => {
            setIsExecuting(false);
            setShowResult(true);
        }, 1200);
    };

    return (
        <div className="section-full py-20 bg-muted/10 relative overflow-hidden" id="data-lab">
            <div className="container-custom px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 mb-4">
                        <Database size={14} /> Snowflake Data Lab
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                        Scalable <span className="text-sky-500">Data Engineering</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                        I don't just "use" Snowflake. I engineer modular, high-performance logic for millions of agricultural records.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Scenarios List */}
                    <div className="lg:col-span-4 space-y-4">
                        {scenarios.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => { setActiveScenario(s); setShowResult(true); }}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${activeScenario.id === s.id ? 'bg-background border-sky-500 shadow-xl scale-[1.02]' : 'bg-background/50 border-border/40 hover:border-sky-500/50'}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl bg-muted group-hover:bg-sky-500/10 transition-colors`}>
                                        {s.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base mb-1">{s.title}</h4>
                                        <p className="text-xs text-muted-foreground">{s.subtitle}</p>
                                    </div>
                                </div>
                            </button>
                        ))}

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl mt-8">
                            <div className="flex items-center gap-2 text-sky-400 text-xs font-mono mb-3">
                                <Sprout size={14} /> System Impact:
                            </div>
                            <p className="text-sm leading-relaxed opacity-90">
                                "Using Snowflake SQL macros reduced our query complexity by 40% and enabled automated reporting for Mahyco and Grow Indigo business teams."
                            </p>
                        </div>
                    </div>

                    {/* Code Editor Side */}
                    <div className="lg:col-span-8">
                        <div className="rounded-3xl border border-border/40 bg-gray-950 shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
                            {/* Editor Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/30" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/30" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/30" />
                                    </div>
                                    <div className="flex items-center gap-2 ml-4 text-[11px] font-mono text-white/40 uppercase tracking-widest">
                                        <Code size={12} /> snowflake_macro.sql
                                    </div>
                                </div>
                                <button
                                    onClick={runQuery}
                                    disabled={isExecuting}
                                    className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 disabled:bg-gray-800 text-white text-xs font-bold rounded-lg transition-all shadow-lg active:scale-95"
                                >
                                    {isExecuting ? <Terminal className="animate-pulse" size={14} /> : <Play size={14} />}
                                    {isExecuting ? "Executing..." : "Run Macro"}
                                </button>
                            </div>

                            {/* Editor View */}
                            <div className="flex-1 p-6 relative">
                                <pre className="font-mono text-sm sm:text-base leading-relaxed text-sky-300/90 whitespace-pre-wrap">
                                    {activeScenario.macro}
                                </pre>

                                <AnimatePresence>
                                    {showResult && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                                            className="absolute inset-x-6 bottom-6 p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-3xl z-20"
                                        >
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono">
                                                    <CheckCircle2 size={14} /> QUERY SUCCESSFUL [120ms]
                                                </div>
                                                <span className="text-[10px] text-white/30 font-mono">LIMIT 50</span>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left font-mono text-xs text-white/70">
                                                    <thead>
                                                        <tr className="border-b border-white/10">
                                                            {Object.keys(activeScenario.output[0]).map(key => (
                                                                <th key={key} className="pb-2 font-bold uppercase tracking-wider text-sky-400">{key}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {activeScenario.output.map((row, i) => (
                                                            <tr key={i} className="border-b border-white/5 last:border-0">
                                                                {Object.values(row).map((val: any, j) => (
                                                                    <td key={j} className="py-2.5">{val}</td>
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
                            <div className="px-6 py-3 border-t border-white/5 bg-black text-[10px] text-white/20 font-mono flex gap-6">
                                <span className="flex items-center gap-1"><Terminal size={10} /> UTF-8</span>
                                <span className="flex items-center gap-1">Line {activeScenario.macro.split('\n').length}, Col 1</span>
                                <span className="flex items-center gap-1">Snowflake / Standard SQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SnowflakeLab;
