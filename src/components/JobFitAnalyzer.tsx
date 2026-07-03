import React, { useState } from 'react';
import { Sparkles, Zap, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';

// ─── Rahil's known skills & keywords ────────────────────────────────
const SKILL_MAP: Record<string, number> = {
  // Frontend
  react: 95, typescript: 90, nextjs: 80, javascript: 92, html: 95, css: 88, tailwind: 85,
  // Backend
  nodejs: 90, 'node.js': 90, dotnet: 88, '.net': 88, csharp: 85, 'c#': 85, python: 80,
  api: 90, rest: 90, graphql: 72, microservices: 82,
  // Data
  snowflake: 95, sql: 92, postgresql: 88, mongodb: 82, etl: 90, 'data engineering': 90,
  'power bi': 85, analytics: 90, 'machine learning': 75, ml: 75, ai: 72,
  // Cloud & DevOps
  aws: 82, docker: 80, git: 95, github: 95, cicd: 78, 'ci/cd': 78, linux: 75,
  // Soft / Domain
  agritech: 95, saas: 88, 'full stack': 92, fullstack: 92, 'full-stack': 92,
  enterprise: 90, startup: 90, agile: 85, scrum: 82, 'team lead': 80, mentoring: 85,
};

const STRONG_THRESHOLD = 80;
const PARTIAL_THRESHOLD = 55;

interface SkillResult {
  keyword: string;
  score: number;
  level: 'strong' | 'partial' | 'gap';
}

function analyzeJobDescription(text: string): { overall: number; skills: SkillResult[]; summary: string } {
  const lower = text.toLowerCase();
  const found: SkillResult[] = [];
  const seen = new Set<string>();

  for (const [kw, score] of Object.entries(SKILL_MAP)) {
    if (lower.includes(kw) && !seen.has(kw)) {
      seen.add(kw);
      found.push({
        keyword: kw,
        score,
        level: score >= STRONG_THRESHOLD ? 'strong' : score >= PARTIAL_THRESHOLD ? 'partial' : 'gap',
      });
    }
  }

  if (found.length === 0) {
    return { overall: 0, skills: [], summary: 'No recognizable skills found. Try including tech like React, Node.js, Snowflake, AWS, etc.' };
  }

  const overall = Math.round(found.reduce((sum, s) => sum + s.score, 0) / found.length);
  const strong = found.filter((s) => s.level === 'strong').length;
  const total = found.length;

  let summary = '';
  if (overall >= 88) summary = `🔥 Exceptional match! Rahil covers ${strong}/${total} key skills at expert level.`;
  else if (overall >= 75) summary = `✅ Strong match. ${strong} of ${total} required skills are covered confidently.`;
  else if (overall >= 60) summary = `👍 Good fit with ${strong} strong matches. A few areas to discuss.`;
  else summary = `📊 Partial match — ${strong}/${total} skills covered. Worth a conversation!`;

  return { overall, skills: found.sort((a, b) => b.score - a.score), summary };
}

const QUICK_ROLES = [
  'React Node.js TypeScript PostgreSQL AWS',
  'Full-Stack .NET Core Snowflake SQL Power BI',
  'Data Engineering ETL Snowflake Python Analytics',
  'SaaS architect React microservices Docker CI/CD',
];

const JobFitAnalyzer = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ReturnType<typeof analyzeJobDescription> | null>(null);
  const [loading, setLoading] = useState(false);
  const [animated, setAnimated] = useState(false);

  const analyze = (text = input) => {
    if (!text.trim()) return;
    setResult(null);
    setAnimated(false);
    setLoading(true);
    // Fake "AI processing" delay for effect
    setTimeout(() => {
      setResult(analyzeJobDescription(text));
      setLoading(false);
      setTimeout(() => setAnimated(true), 100);
    }, 1200);
  };

  const scoreColor = (score: number) =>
    score >= 88 ? 'text-emerald-500' : score >= 75 ? 'text-blue-500' : score >= 60 ? 'text-amber-500' : 'text-rose-500';

  const scoreBg = (score: number) =>
    score >= 88 ? 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30'
    : score >= 75 ? 'from-blue-500/20 to-blue-500/5 border-blue-500/30'
    : score >= 60 ? 'from-amber-500/20 to-amber-500/5 border-amber-500/30'
    : 'from-rose-500/20 to-rose-500/5 border-rose-500/30';

  return (
    <section className="section-full section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))', filter: 'blur(100px)' }} />

      <div className="container-custom relative z-10 max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            <Sparkles size={12} /> AI-Powered Tool
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">
            Job <span className="gradient-text">Fit Analyzer</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Paste a job description or required skills and see how well Rahil matches — instantly.
          </p>
        </div>

        {/* Input card */}
        <div className="card-glass p-6 rounded-2xl mb-4">
          <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">
            Paste job requirements or tech stack
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. React, Node.js, TypeScript, AWS, PostgreSQL, agile team, SaaS platform..."
            rows={4}
            className="w-full bg-muted/30 border border-border/40 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none placeholder:text-muted-foreground/40"
          />
          <div className="flex flex-wrap gap-2 mt-3 mb-4">
            <span className="text-[10px] text-muted-foreground font-mono shrink-0 self-center">Quick try →</span>
            {QUICK_ROLES.map((r) => (
              <button
                key={r}
                onClick={() => { setInput(r); analyze(r); }}
                className="px-2.5 py-1 rounded-lg text-[10px] font-mono border border-border/40 bg-muted/20 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                {r.split(' ').slice(0, 2).join(' ')}...
              </button>
            ))}
          </div>
          <button
            onClick={() => analyze()}
            disabled={!input.trim() || loading}
            className="w-full btn-primary justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Analyzing with AI...
              </>
            ) : (
              <>
                <Zap size={15} />
                Analyze Fit
              </>
            )}
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className={`space-y-4 transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

            {/* Score card */}
            <div className={`card-glass rounded-2xl p-6 border bg-gradient-to-br ${scoreBg(result.overall)}`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Overall Match Score</p>
                  <p className={`text-5xl font-display font-black ${scoreColor(result.overall)}`}>
                    {result.overall}<span className="text-2xl">%</span>
                  </p>
                </div>
                {/* Circular progress */}
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted/30" />
                    <circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeDasharray={`${result.overall} 100`}
                      strokeLinecap="round"
                      className={scoreColor(result.overall)}
                      style={{ transition: 'stroke-dasharray 1s ease' }}
                    />
                  </svg>
                  <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${scoreColor(result.overall)}`}>
                    {result.overall >= 88 ? '🔥' : result.overall >= 75 ? '✅' : '👍'}
                  </span>
                </div>
              </div>
              <p className="text-sm text-foreground/80">{result.summary}</p>
            </div>

            {/* Skill breakdown */}
            {result.skills.length > 0 && (
              <div className="card-glass rounded-2xl p-6">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Skill Breakdown</p>
                <div className="space-y-3">
                  {result.skills.map((s) => (
                    <div key={s.keyword} className="flex items-center gap-3">
                      {s.level === 'strong' ? (
                        <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                      ) : s.level === 'partial' ? (
                        <ChevronRight size={14} className="text-amber-500 shrink-0" />
                      ) : (
                        <AlertCircle size={14} className="text-rose-500 shrink-0" />
                      )}
                      <span className="text-xs font-mono capitalize min-w-[120px] text-foreground">{s.keyword}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-muted/40 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: animated ? `${s.score}%` : '0%',
                            background: s.level === 'strong'
                              ? 'linear-gradient(90deg, #10b981, #34d399)'
                              : s.level === 'partial'
                              ? 'linear-gradient(90deg, #f59e0b, #fbbf24)'
                              : 'linear-gradient(90deg, #f87171, #fca5a5)',
                          }}
                        />
                      </div>
                      <span className={`text-[11px] font-mono font-bold min-w-[36px] text-right ${
                        s.level === 'strong' ? 'text-emerald-500' : s.level === 'partial' ? 'text-amber-500' : 'text-rose-500'
                      }`}>{s.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="card-glass rounded-2xl p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">Interested in working with Rahil?</p>
                <p className="text-xs text-muted-foreground">Available for part-time roles & freelance in Perth, AU</p>
              </div>
              <a
                href="mailto:rmemdanib@gmail.com"
                className="btn-primary text-sm shrink-0 whitespace-nowrap"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobFitAnalyzer;
