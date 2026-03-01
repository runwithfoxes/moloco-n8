"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "optimize" | "analytics";

export default function ProductWindow({
  variant = "optimize",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = windowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={windowRef}
      className={`product-window ${visible ? "float-in" : "opacity-0"} ${className}`}
    >
      {/* macOS title bar */}
      <div className="window-chrome">
        <div className="window-dots">
          <span className="window-dot-red" />
          <span className="window-dot-yellow" />
          <span className="window-dot-green" />
        </div>
        <span className="text-[0.6875rem] font-medium text-text-tertiary font-[family-name:var(--font-dm-sans)]">
          Moloco
        </span>
        <span className="text-[0.625rem] text-text-tertiary">
          {variant === "optimize" ? "AI Optimizer" : "Analytics"}
        </span>
      </div>

      {variant === "optimize" && <AIOptimizer visible={visible} />}
      {variant === "analytics" && <AnalyticsDash visible={visible} />}
    </div>
  );
}

/* ── Staggered card that fades/slides in ── */
function StaggerCard({
  children,
  delay,
  visible,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  visible: boolean;
  className?: string;
}) {
  return (
    <div
      className={`transition-all duration-700 ease-out ${className} ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Counting number animation ── */
function CountUp({ target, suffix = "", visible, delay = 0 }: { target: number; suffix?: string; visible: boolean; delay?: number }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [visible, delay]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target]);

  return <>{started ? value : 0}{suffix}</>;
}

/* ── Live ticking number ── */
function LiveTicker({ base, visible, rate = 1, interval: tickInterval = 3000 }: { base: number; visible: boolean; rate?: number; interval?: number }) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setVal((v) => v + rate);
    }, tickInterval);
    return () => clearInterval(id);
  }, [visible, rate, tickInterval]);
  return <>{val.toLocaleString()}</>;
}

/* ── Cycling text with slide transition ── */
function CyclingText({ items, visible, interval: cycleInterval = 6000 }: { items: { text: React.ReactNode; label: string; accent?: string }[]; visible: boolean; interval?: number }) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setIdx((i) => (i + 1) % items.length);
        setPhase("in");
      }, 350);
    }, cycleInterval);
    return () => clearInterval(id);
  }, [visible, items.length, cycleInterval]);

  return (
    <div className="overflow-hidden">
      <div
        className="transition-all duration-350 ease-in-out"
        style={{
          opacity: phase === "in" ? 1 : 0,
          transform: phase === "in" ? "translateY(0)" : "translateY(-6px)",
        }}
      >
        <p className="text-[0.5625rem] text-text-tertiary mb-1">{items[idx].label}</p>
        <p className="text-[0.6875rem] text-text-primary leading-relaxed mb-2">
          {items[idx].text}
        </p>
      </div>
    </div>
  );
}

/* ── Progress bar that fills and resets ── */
function ScanProgress({ visible }: { visible: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 0;
        return p + 1.5;
      });
    }, 80);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <div className="h-[2px] bg-border-light rounded-full overflow-hidden">
      <div
        className="h-full bg-text-primary/30 rounded-full transition-all duration-75 ease-linear"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  );
}

/* ── Scanning row highlight ── */
function ScanHighlight({ rowCount, visible }: { rowCount: number; visible: boolean }) {
  const [activeRow, setActiveRow] = useState(-1);

  useEffect(() => {
    if (!visible) return;
    let row = 0;
    const id = setInterval(() => {
      setActiveRow(row);
      setTimeout(() => setActiveRow(-1), 1200);
      row = (row + 1) % rowCount;
    }, 4000);
    return () => clearInterval(id);
  }, [visible, rowCount]);

  return activeRow;
}

/* ── AI Optimizer with movement ── */
function AIOptimizer({ visible }: { visible: boolean }) {
  const [highlightRow, setHighlightRow] = useState(-1);
  const [scanCount, setScanCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let row = 0;
    const startDelay = setTimeout(() => {
      const id = setInterval(() => {
        setHighlightRow(row);
        setScanCount((c) => c + 1);
        setTimeout(() => setHighlightRow(-1), 1500);
        row = (row + 1) % 3;
      }, 3000);
      return () => clearInterval(id);
    }, 2500);
    return () => clearTimeout(startDelay);
  }, [visible]);

  const recommendations = [
    {
      label: "Recommendation",
      text: <>Shift <span className="font-medium">15% of budget</span> from Ad Group B to A. Predicted CPI improvement: <span className="font-medium text-[#8BC34A]">-12%</span>.</>,
    },
    {
      label: "Creative insight",
      text: <>Video creatives outperforming static by <span className="font-medium text-[#8BC34A]">34%</span> in Ad Group A. Consider shifting creative mix.</>,
    },
    {
      label: "Audience signal",
      text: <>High-value segment <span className="font-medium">M25-34 gamers</span> showing <span className="font-medium text-[#8BC34A]">2.1x</span> conversion rate. Increase bid modifier.</>,
    },
    {
      label: "Pacing alert",
      text: <>Ad Group C underspending by <span className="font-medium">22%</span>. Expanding lookalike audience to improve delivery.</>,
    },
  ];

  const rows = [
    { group: "Ad Group A", baseInstalls: 28411, cpi: "$1.89", roas: "742%", trend: "up" as const, delay: 500 },
    { group: "Ad Group B", baseInstalls: 12103, cpi: "$3.12", roas: "481%", trend: "down" as const, delay: 700 },
    { group: "Ad Group C", baseInstalls: 7777, cpi: "$2.54", roas: "612%", trend: "up" as const, delay: 900 },
  ];

  return (
    <div className="flex bg-white">
      {/* Left: AI conversation */}
      <div className="w-[54%] border-r border-border-light p-4 hidden md:block">
        <div className="flex items-center gap-2 mb-3">
          {/* Pulsing status dot with ongoing glow */}
          <div className="w-5 h-5 rounded-full bg-text-primary flex items-center justify-center relative animate-pulse-glow">
            <span className="absolute inset-0 rounded-full bg-text-primary animate-ping opacity-20" />
            <svg className="w-2.5 h-2.5 text-white relative z-10" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="3" />
            </svg>
          </div>
          <div>
            <p className="text-[0.75rem] font-medium text-text-primary leading-tight">Optimize Campaign</p>
            <p className="text-[0.5625rem] text-text-tertiary animate-breathe-slow">Deep Learning Recommendations</p>
          </div>
        </div>

        {/* Live progress bar under header */}
        <StaggerCard delay={200} visible={visible} className="mb-3">
          <ScanProgress visible={visible} />
        </StaggerCard>

        <div className="space-y-2.5">
          {/* Card 1: Analyzed — live ticking impressions */}
          <StaggerCard delay={300} visible={visible} className="bg-[#f5f8f4] rounded-lg p-2.5">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#61c554] animate-breathe" />
              <span className="text-[0.5625rem] text-text-tertiary">Analyzing</span>
              <span className="text-[0.5625rem] text-text-tertiary animate-breathe">&middot; live</span>
            </div>
            <p className="text-[0.6875rem] text-text-primary leading-relaxed">
              Processed <span className="font-medium font-[family-name:var(--font-dm-sans)]"><LiveTicker base={847} visible={visible} rate={2} interval={1800} />M</span> impressions across 3 ad groups.
            </p>
          </StaggerCard>

          {/* Card 2: Cycling recommendations — faster cycle */}
          <StaggerCard delay={800} visible={visible} className="bg-[#f5f8f4] rounded-lg p-2.5 border-l-2 border-text-primary/20">
            <CyclingText items={recommendations} visible={visible} interval={3500} />
            <div className="flex gap-1.5">
              <span className="px-2.5 py-1 bg-text-primary text-white rounded text-[0.625rem] font-medium">Apply</span>
              <span className="px-2.5 py-1 border border-border-light rounded text-[0.625rem] text-text-secondary">Dismiss</span>
            </div>
          </StaggerCard>

          {/* Card 3: Model update */}
          <StaggerCard delay={1400} visible={visible} className="bg-[#f5f8f4] rounded-lg p-2.5">
            <p className="text-[0.5625rem] text-text-tertiary mb-1">Model update</p>
            <p className="text-[0.6875rem] text-text-primary leading-relaxed">
              Re-engagement model <span className="font-[family-name:var(--font-jetbrains)] text-[0.625rem] bg-badge-surface px-1 py-0.5 rounded">v4.2</span> deployed. ROAS lift: <span className="font-medium text-[#8BC34A]">+8-12%</span>.
            </p>
          </StaggerCard>
        </div>

        {/* Typing indicator with ongoing shimmer */}
        <StaggerCard delay={2000} visible={visible} className="mt-3 flex items-center gap-2 px-2.5 py-2 border border-border-light rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 animate-shimmer rounded-lg" />
          <div className="flex gap-0.5 relative z-10">
            <span className="w-1 h-1 rounded-full bg-text-tertiary animate-bounce" style={{ animationDelay: "0ms", animationDuration: "1.2s" }} />
            <span className="w-1 h-1 rounded-full bg-text-tertiary animate-bounce" style={{ animationDelay: "150ms", animationDuration: "1.2s" }} />
            <span className="w-1 h-1 rounded-full bg-text-tertiary animate-bounce" style={{ animationDelay: "300ms", animationDuration: "1.2s" }} />
          </div>
          <span className="text-[0.6875rem] text-text-tertiary relative z-10">Scanning for next optimization...</span>
        </StaggerCard>
      </div>

      {/* Right: Performance table */}
      <div className="flex-1 p-4">
        <div className="flex items-center gap-3 mb-3 border-b border-border-light pb-2.5">
          <span className="text-[0.6875rem] font-medium text-text-primary border-b-2 border-text-primary pb-2">Performance</span>
          <span className="text-[0.6875rem] text-text-tertiary pb-2">Creatives</span>
          <span className="text-[0.6875rem] text-text-tertiary pb-2">Audience</span>
        </div>

        <div className="space-y-0">
          {rows.map((row, i) => (
            <StaggerCard
              key={row.group}
              delay={row.delay}
              visible={visible}
              className={`flex items-center justify-between py-2.5 border-b border-border-light last:border-0 transition-all duration-500 rounded-md px-1 -mx-1 ${highlightRow === i ? "bg-[#edf2eb]" : ""}`}
            >
              <div className="flex items-center gap-2">
                {/* Scanning indicator dot */}
                <span
                  className="w-1 h-1 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: highlightRow === i ? "#1a2a1e" : "transparent",
                    transform: highlightRow === i ? "scale(1)" : "scale(0)",
                  }}
                />
                <div>
                  <p className="text-[0.75rem] font-medium text-text-primary">{row.group}</p>
                  <p className="text-[0.5625rem] text-text-tertiary font-[family-name:var(--font-dm-sans)]">
                    <LiveTicker base={row.baseInstalls} visible={visible} rate={3} interval={row.delay * 3} /> installs
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[0.6875rem] text-text-secondary font-[family-name:var(--font-dm-sans)]">{row.cpi}</p>
                  <p className="text-[0.5rem] text-text-tertiary">CPI</p>
                </div>
                <div className="text-right">
                  <p className="text-[0.6875rem] font-medium text-text-primary font-[family-name:var(--font-dm-sans)]">{row.roas}</p>
                  <p className="text-[0.5rem] text-text-tertiary">ROAS</p>
                </div>
                <div className={`w-4 h-4 rounded-full flex items-center justify-center animate-breathe ${row.trend === 'up' ? 'bg-[#e8f5e9]' : 'bg-[#fce4ec]'}`} style={{ animationDelay: `${row.delay}ms` }}>
                  <span className={`text-[0.5rem] ${row.trend === 'up' ? 'text-[#8BC34A]' : 'text-[#e57373]'}`}>
                    {row.trend === 'up' ? '↑' : '↓'}
                  </span>
                </div>
              </div>
            </StaggerCard>
          ))}
        </div>

        {/* Summary with counting numbers + ongoing slow tick */}
        <div className="grid grid-cols-2 gap-2.5 mt-3">
          <StaggerCard delay={1100} visible={visible} className="bg-[#f5f8f4] rounded-lg p-2.5">
            <p className="text-[0.5625rem] text-text-tertiary mb-0.5">Total ROAS</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[0.875rem] font-medium text-text-primary font-[family-name:var(--font-dm-sans)] animate-slow-tick">
                <CountUp target={685} suffix="%" visible={visible} delay={1100} />
              </span>
              <span className="text-[0.5625rem] font-medium text-[#8BC34A] animate-breathe-slow">+24.7%</span>
            </div>
          </StaggerCard>
          <StaggerCard delay={1300} visible={visible} className="bg-[#f5f8f4] rounded-lg p-2.5">
            <p className="text-[0.5625rem] text-text-tertiary mb-0.5">Avg CPI</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[0.875rem] font-medium text-text-primary font-[family-name:var(--font-dm-sans)] animate-slow-tick" style={{ animationDelay: "2.5s" }}>
                $<CountUp target={2} suffix=".41" visible={visible} delay={1300} />
              </span>
              <span className="text-[0.5625rem] font-medium text-[#e57373] animate-breathe-slow" style={{ animationDelay: "1s" }}>-8.1%</span>
            </div>
          </StaggerCard>
        </div>
      </div>
    </div>
  );
}

/* ── Analytics dashboard with animated bars ── */
function AnalyticsDash({ visible }: { visible: boolean }) {
  const bars = [30, 35, 32, 45, 42, 55, 50, 62, 58, 70, 65, 78, 72, 82, 85, 80, 90, 88, 95, 92];

  return (
    <div className="bg-white p-4 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[0.8125rem] font-medium text-text-primary">Deep Learning Insights</p>
          <p className="text-[0.5625rem] text-text-tertiary">Model performance across 2B+ daily users</p>
        </div>
        <div className="flex gap-1">
          <span className="px-2 py-1 bg-accent text-bg-dark rounded text-[0.5625rem] font-medium">7d</span>
          <span className="px-2 py-1 border border-border-light rounded text-[0.5625rem] text-text-secondary">30d</span>
          <span className="px-2 py-1 border border-border-light rounded text-[0.5625rem] text-text-secondary">90d</span>
        </div>
      </div>

      {/* Chart with growing bars */}
      <div className="bg-[#f5f8f4] rounded-lg p-3 mb-4">
        <div className="flex items-end gap-[2px] h-16">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all ease-out"
              style={{
                height: visible ? `${h}%` : "0%",
                background: i >= 16 ? 'var(--accent)' : 'rgba(200, 220, 57, 0.15)',
                transitionDuration: "800ms",
                transitionDelay: `${200 + i * 50}ms`,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[0.5rem] text-text-tertiary">Feb 20</span>
          <span className="text-[0.5rem] text-text-tertiary">Feb 27</span>
        </div>
      </div>

      {/* Stats with counting */}
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { label: "Impressions processed", value: 21, suffix: "B", sub: "today", delay: 600 },
          { label: "Prediction accuracy", value: 947, suffix: "%", sub: "+0.3 vs last week", delay: 800 },
          { label: "Avg inference time", value: 42, suffix: "ms", sub: "p99: 8.1ms", delay: 1000 },
        ].map((s) => (
          <StaggerCard key={s.label} delay={s.delay} visible={visible} className="bg-[#f5f8f4] rounded-lg p-2.5">
            <p className="text-[0.5rem] text-text-tertiary mb-0.5">{s.label}</p>
            <p className="text-[0.875rem] font-medium text-text-primary font-[family-name:var(--font-dm-sans)]">
              {s.suffix === "B" ? (<><CountUp target={s.value} visible={visible} delay={s.delay} />.1B</>) :
               s.suffix === "%" ? (<><CountUp target={s.value} visible={visible} delay={s.delay} />.7%</>) :
               (<><CountUp target={s.value} visible={visible} delay={s.delay} />.2ms</>)}
            </p>
            <p className="text-[0.5rem] text-text-tertiary mt-0.5">{s.sub}</p>
          </StaggerCard>
        ))}
      </div>
    </div>
  );
}
