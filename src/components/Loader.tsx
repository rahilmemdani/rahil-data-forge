import React, { useEffect, useState } from 'react';

const Loader = ({ onDone }: { onDone: () => void }) => {
  const [phase, setPhase] = useState<'init' | 'scanning' | 'done'>('init');
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);

  const bootLines = [
    'Initializing portfolio...',
    'Loading experience data...',
    'Compiling 4 yrs 10 mo of work...',
    'Mounting React components...',
    'Connecting to Snowflake pipelines...',
    'Rendering 2M+ user impact...',
    'Ready. Welcome 🚀',
  ];

  useEffect(() => {
    // Start scanning phase after brief init
    const t1 = setTimeout(() => setPhase('scanning'), 200);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase !== 'scanning') return;

    let lineIdx = 0;
    let prog = 0;

    const lineInterval = setInterval(() => {
      if (lineIdx < bootLines.length) {
        setLines((prev) => [...prev, bootLines[lineIdx]]);
        lineIdx++;
      } else {
        clearInterval(lineInterval);
      }
    }, 260);

    const progInterval = setInterval(() => {
      prog += Math.random() * 18 + 4;
      if (prog >= 100) {
        prog = 100;
        setProgress(100);
        clearInterval(progInterval);
        setTimeout(() => {
          setPhase('done');
          setTimeout(onDone, 500);
        }, 300);
      } else {
        setProgress(Math.floor(prog));
      }
    }, 180);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progInterval);
    };
  }, [phase]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${
        phase === 'done' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: 'hsl(var(--background))' }}
    >
      {/* Glowing orb */}
      <div className="relative mb-10">
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-30 scale-150"
          style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}
        />
        <div
          className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
          style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}
        >
          <span className="text-white font-display font-black text-4xl leading-none">R</span>
        </div>
      </div>

      {/* Name */}
      <h1 className="font-display font-bold text-2xl mb-1 tracking-tight">
        <span className="gradient-text">Rahil</span> Memdani
      </h1>
      <p className="text-xs text-muted-foreground mb-8 font-mono">Full-Stack Engineer · Perth, AU</p>

      {/* Terminal boot log */}
      <div
        className="w-[320px] sm:w-[400px] rounded-xl border border-border/40 overflow-hidden mb-6"
        style={{ background: '#0d1117' }}
      >
        <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5" style={{ background: '#161b22' }}>
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-3 text-[10px] text-white/30 font-mono">boot.sh</span>
        </div>
        <div className="p-4 font-mono text-[11px] space-y-1 min-h-[120px]">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-emerald-500 shrink-0">›</span>
              <span className={i === lines.length - 1 ? 'text-white' : 'text-slate-400'}>{line}</span>
            </div>
          ))}
          {phase === 'scanning' && lines.length < bootLines.length && (
            <div className="flex gap-2">
              <span className="text-emerald-500 shrink-0">›</span>
              <span className="text-slate-500 animate-pulse">▋</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-[320px] sm:w-[400px] space-y-2">
        <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
          <span>Loading portfolio</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1 rounded-full bg-muted/40 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-200"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-end))',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
