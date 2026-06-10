"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";

/* ─── data ──────────────────────────────────────────────────────────── */

const coreFeatures = [
  { icon: "🎯", title: "Custom Job Roles", desc: "Define unlimited job roles with specific question banks. Tailor every assessment to the exact skills you need." },
  { icon: "✨", title: "AI Question Generation", desc: "Describe the role and let AI craft a complete, relevant question set in seconds — technical, soft skills, situational." },
  { icon: "⏱️", title: "Timed Assessments", desc: "Configurable time limits with real-time integrity monitoring that catches tab switches and copy attempts." },
  { icon: "📊", title: "Auto-Scoring Engine", desc: "MCQ answers scored instantly. Free-text responses evaluated and ranked. Structured data across every candidate." },
  { icon: "💬", title: "Recruitment AI Chat", desc: "Ask your dashboard anything — \"who scored highest?\" — and get instant answers powered by live candidate data." },
  { icon: "🔗", title: "One-Click Invites", desc: "Share a unique assessment link via email. Candidates start immediately with no account creation required." },
  { icon: "📋", title: "Salary Expectation Capture", desc: "Every assessment captures salary expectations alongside answers so you go into interviews with the full picture." },
  { icon: "📁", title: "CV Upload & Pipeline", desc: "Candidates upload CVs during assessment. Answers, scores, CVs, salary data — all in one place." },
];

const steps = [
  { step: "01", title: "Create a Job Role", desc: "Name the role, write a brief description, and either generate questions with AI in one click or build manually. Takes under 3 minutes.", detail: "AI analyses your role across 5 dimensions to generate a balanced question set covering knowledge, problem solving, and cultural fit." },
  { step: "02", title: "Generate Questions with AI", desc: "Hit \"Generate with AI\" and the system analyses your role description across 5 dimensions to produce a complete question set — in seconds.", detail: "Or add questions manually if you prefer full control. Mix MCQ and free-text. Reorder, edit, or delete any question before publishing." },
  { step: "03", title: "Invite Candidates", desc: "Get a unique assessment link for the role. Paste it into your invite email — candidates click and start without creating an account.", detail: "The link works on desktop and mobile. Candidates are pre-warned on timing and integrity rules before starting." },
  { step: "04", title: "Candidates Take the Assessment", desc: "A timed, proctored session starts the moment they click. Integrity monitoring runs in the background. They can't pause or return.", detail: "Partial answers are accepted. Proctoring captures tab switches, copy-paste attempts, and DevTools usage — reported silently." },
  { step: "05", title: "Review Scored Results", desc: "When the timer expires or they submit, you get an instant scored report. Ask the Recruitment AI anything about the candidate pool.", detail: "Auto-scores for MCQ. Free-text ranked by AI. Filter, compare, and shortlist — all from the admin dashboard." },
];

const integrityFeatures = [
  { label: "Tab switch detection", icon: "🪟" },
  { label: "Copy & paste blocking", icon: "🚫" },
  { label: "DevTools detection", icon: "🔧" },
  { label: "Browser focus monitoring", icon: "👁️" },
  { label: "Full-session audit log", icon: "📜" },
  { label: "Integrity score per candidate", icon: "🛡️" },
];

const pricingPlans = [
  { name: "Starter", price: "Rs. 9,900", period: "/month", desc: "Perfect for small teams hiring 1–2 roles per month.", features: ["Up to 3 active job roles", "100 candidate assessments/month", "AI question generation", "Auto-scoring & ranked reports", "Email candidate invites", "Admin dashboard"], cta: "Get started", highlight: false },
  { name: "Growth", price: "Rs. 24,900", period: "/month", desc: "For growing companies with active hiring pipelines.", features: ["Unlimited active job roles", "500 candidate assessments/month", "AI question generation", "Recruitment AI chat (live data)", "Shareable candidate reports", "CV upload management", "Priority support"], cta: "Get started", highlight: true },
  { name: "Enterprise", price: "Custom", period: "", desc: "Volume hiring, custom integrations, SLA guarantees.", features: ["Unlimited everything", "Custom question templates", "ATS/HRMS integration", "Dedicated account manager", "Custom reporting", "SLA + uptime guarantee"], cta: "Contact sales", highlight: false },
];

const marqueeTags = ["AI Question Generation", "Proctored Assessments", "Auto-Scoring", "Recruitment AI", "Integrity Monitoring", "Timed Tests", "CV Management", "Salary Capture", "Live Dashboards", "One-Click Invites", "Ranked Reports", "MCQ + Free Text"];

/* ─── animated counter hook ─────────────────────────────────────────── */
function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

/* ─── keyframes ──────────────────────────────────────────────────────── */
const ANIM_STYLES = `
@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes scanLine {
  0%   { top: 0%;   opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
@keyframes gradientBorder {
  0%, 100% { background-position: 0% 50%; }
  50%       { background-position: 100% 50%; }
}
@keyframes typingDots {
  0%, 60%, 100% { opacity: 0.2; transform: translateY(0px); }
  30%           { opacity: 1;   transform: translateY(-4px); }
}
@keyframes heroFloat {
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-18px) rotate(0.5deg); }
}
@keyframes glowRing {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0,201,167,0.0), 0 0 32px rgba(0,201,167,0.15); }
  50%       { box-shadow: 0 0 0 8px rgba(0,201,167,0.06), 0 0 64px rgba(0,201,167,0.25); }
}
@keyframes beamSweep {
  0%   { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(400%)  skewX(-15deg); }
}
@keyframes countUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes orbDrift {
  0%,100% { transform: translate(0,0)    scale(1);    }
  33%      { transform: translate(30px,-20px) scale(1.05); }
  66%      { transform: translate(-20px,15px) scale(0.97); }
}
@keyframes rotateCube3D {
  from { transform: rotateX(22deg) rotateY(0deg);   }
  to   { transform: rotateX(22deg) rotateY(360deg); }
}
@keyframes orbitRing1 {
  from { transform: rotateX(72deg) rotateZ(0deg);   }
  to   { transform: rotateX(72deg) rotateZ(360deg); }
}
@keyframes orbitRing2 {
  from { transform: rotateX(38deg) rotateZ(0deg);    }
  to   { transform: rotateX(38deg) rotateZ(-360deg); }
}
@keyframes orbitRing3 {
  from { transform: rotateX(55deg) rotateY(30deg) rotateZ(60deg);  }
  to   { transform: rotateX(55deg) rotateY(30deg) rotateZ(420deg); }
}
@keyframes floatOrbit {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-22px); }
}
@keyframes particlePulse {
  0%, 100% { transform: scale(1);   opacity: 0.3; }
  50%       { transform: scale(2.4); opacity: 0.9; }
}
@keyframes iconBob3D {
  0%, 100% { transform: perspective(200px) rotateY(0deg)  rotateX(0deg); }
  30%       { transform: perspective(200px) rotateY(14deg) rotateX(4deg); }
  70%       { transform: perspective(200px) rotateY(-10deg) rotateX(-3deg); }
}
@keyframes depthBreath {
  0%, 100% { transform: perspective(800px) rotateX(3deg) rotateY(-1deg) scale(1);     }
  50%       { transform: perspective(800px) rotateX(1deg) rotateY(1.5deg) scale(1.01); }
}
@keyframes ringGlow {
  0%, 100% { box-shadow: 0 0 12px rgba(0,201,167,0.2); }
  50%       { box-shadow: 0 0 28px rgba(0,201,167,0.55), 0 0 0 8px rgba(0,201,167,0.04); }
}
`;

/* ─── 3D mouse-tilt wrapper ──────────────────────────────────────────── */
function Card3D({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${x * 13}deg) rotateX(${-y * 9}deg) translateZ(26px)`;
    el.style.filter    = `drop-shadow(${-x * 16}px ${y * 16}px 24px rgba(0,201,167,0.14))`;
  }, []);
  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1100px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    el.style.filter    = "none";
  }, []);
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: "transform 0.13s ease-out, filter 0.13s ease-out", transformStyle: "preserve-3d", ...style }}>
      {children}
    </div>
  );
}

/* ─── CSS wireframe cube ─────────────────────────────────────────────── */
function WireframeCube({ size, color, duration }: { size: number; color: string; duration: number }) {
  const h = size / 2;
  const f = (t: string): React.CSSProperties => ({ position: "absolute", width: size, height: size, border: `1px solid ${color}`, background: "transparent", transform: t });
  return (
    <div style={{ width: size, height: size, position: "relative", transformStyle: "preserve-3d", animation: `rotateCube3D ${duration}s linear infinite` }}>
      <div style={f(`translateZ(${h}px)`)} />
      <div style={f(`translateZ(${-h}px) rotateY(180deg)`)} />
      <div style={f(`rotateY(-90deg) translateZ(${h}px)`)} />
      <div style={f(`rotateY(90deg) translateZ(${h}px)`)} />
      <div style={f(`rotateX(90deg) translateZ(${h}px)`)} />
      <div style={f(`rotateX(-90deg) translateZ(${h}px)`)} />
    </div>
  );
}

/* ─── orbit ring system ──────────────────────────────────────────────── */
function OrbitSystem({ size, color, opacity = 1 }: { size: number; color: string; opacity?: number }) {
  return (
    <div style={{ width: size, height: size, position: "relative", transformStyle: "preserve-3d", opacity }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: size * 0.22, height: size * 0.22, borderRadius: "50%", background: `radial-gradient(circle, ${color} 0%, transparent 70%)`, boxShadow: `0 0 20px ${color}`, animation: "glowRing 2.8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", inset: size * 0.08, borderRadius: "50%", border: `1px solid ${color}`, animation: "orbitRing1 7s linear infinite" }} />
      <div style={{ position: "absolute", inset: size * 0.04, borderRadius: "50%", border: `1px solid ${color}`, opacity: 0.4, animation: "orbitRing2 11s linear infinite" }} />
      <div style={{ position: "absolute", inset: size * 0.18, borderRadius: "50%", border: `1.5px dashed ${color}`, opacity: 0.22, animation: "orbitRing3 5s linear infinite" }} />
      <div style={{ position: "absolute", inset: size * 0.08, borderRadius: "50%", animation: "orbitRing1 7s linear infinite" }}>
        <div style={{ position: "absolute", top: "0%", left: "50%", transform: "translate(-50%,-50%)", width: 8, height: 8, borderRadius: "50%", background: color, boxShadow: `0 0 10px ${color}` }} />
      </div>
    </div>
  );
}

/* ─── floating depth particles ───────────────────────────────────────── */
function Particles3D({ count = 12, color = "rgba(0,201,167,0.7)" }: { count?: number; color?: string }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${8 + (i * 73) % 84}%`,
          top:  `${5 + (i * 47) % 88}%`,
          width:  2 + (i % 3),
          height: 2 + (i % 3),
          borderRadius: "50%",
          background: color,
          animation: `particlePulse ${(3 + i % 4).toFixed(1)}s ease-in-out infinite`,
          animationDelay: `${(i * 0.42).toFixed(2)}s`,
          pointerEvents: "none",
        }} />
      ))}
    </>
  );
}

/* ─── main component ─────────────────────────────────────────────────── */
export default function RecruitContent() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); } }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{ANIM_STYLES}</style>

      {/* ─── HERO ─── */}
      <section style={{ padding: "60px 0 100px", position: "relative", overflow: "hidden", background: "var(--navy)" }}>
        {/* bg grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,201,167,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,0.025) 1px,transparent 1px)", backgroundSize: "88px 88px", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 10% 40%, rgba(0,201,167,0.08) 0%, transparent 55%), radial-gradient(ellipse 50% 60% at 85% 10%, rgba(0,80,200,0.07) 0%, transparent 50%)", zIndex: 0 }} />
        {/* ambient orbs */}
        <div style={{ position: "absolute", width: 700, height: 700, top: -250, right: -100, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,201,167,0.07) 0%, transparent 70%)", filter: "blur(60px)", animation: "orbDrift 16s ease-in-out infinite", zIndex: 0 }} />
        <div style={{ position: "absolute", width: 450, height: 450, bottom: -150, left: -80, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,80,200,0.06) 0%, transparent 70%)", filter: "blur(80px)", animation: "orbDrift 20s ease-in-out infinite reverse", zIndex: 0 }} />

        {/* 3D orbit decoration — top right */}
        <div style={{ position: "absolute", top: "6%", right: "5%", animation: "floatOrbit 10s ease-in-out infinite", zIndex: 0, pointerEvents: "none", opacity: 0.45 }}>
          <OrbitSystem size={220} color="rgba(0,201,167,0.5)" />
        </div>
        {/* 3D wireframe cube — bottom left */}
        <div style={{ position: "absolute", bottom: "8%", left: "4%", animation: "floatOrbit 14s ease-in-out infinite reverse", zIndex: 0, pointerEvents: "none", opacity: 0.3 }}>
          <WireframeCube size={70} color="rgba(0,201,167,0.55)" duration={16} />
        </div>
        {/* particles */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Particles3D count={18} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="split-grid" style={{ alignItems: "center" }}>

            {/* left */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
                <Link href="/products" style={{ fontSize: "0.78rem", color: "var(--gray-3)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>← Products</Link>
                <span style={{ color: "var(--gray-4)" }}>/</span>
                <span className="chip">HR Technology</span>
                <span style={{ fontSize: "0.68rem", fontWeight: 600, padding: "3px 12px", borderRadius: 100, border: "0.5px solid rgba(0,201,167,0.3)", color: "var(--teal)", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block", animation: "pulse 2.5s ease-in-out infinite", boxShadow: "0 0 6px rgba(0,201,167,0.7)" }} />
                  Available now
                </span>
              </div>
              <p className="label fade-up" style={{ marginBottom: 16 }}>OrvaIt Recruit</p>
              <h1 className="display-lg fade-up-d1" style={{ marginBottom: 24 }}>
                Hire on evidence,<br /><span className="teal-gradient">not instinct.</span>
              </h1>
              <p className="fade-up-d2" style={{ color: "var(--gray-2)", fontWeight: 300, fontSize: "1.08rem", lineHeight: 1.85, marginBottom: 40 }}>
                A timed, proctored candidate assessment platform built for Sri Lankan companies. Stop reading CVs that don&apos;t match reality — screen candidates with AI-generated assessments and scored reports instantly.
              </p>
              <div className="fade-up-d3" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 52 }}>
                <Link href="/contact" className="btn-primary" style={{ animation: "glowRing 3s ease-in-out infinite" }}>Start free trial →</Link>
                <Link href="/contact" className="btn-outline">Request a demo</Link>
              </div>
              {/* stats */}
              <div ref={statsRef} className="fade-up-d4" style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
                {[
                  { target: 3,   suffix: " min",   label: "To create a role & questions", prefix: "< " },
                  { target: 100, suffix: "%",      label: "Automated MCQ scoring",        prefix: "" },
                  { target: 5,   suffix: " steps", label: "AI question generation",       prefix: "" },
                ].map(s => <StatCounter key={s.label} {...s} active={statsVisible} />)}
              </div>
            </div>

            {/* right — 3D tilt + float hero panel */}
            <div className="hero-preview-wrap">
              <Card3D>
                <div style={{ animation: "heroFloat 7s ease-in-out infinite", transformOrigin: "center center" }}>
                  <HeroPreviewPanel />
                </div>
              </Card3D>
              <div style={{ position: "absolute", bottom: -40, left: "50%", transform: "translateX(-50%)", width: "70%", height: 60, background: "radial-gradient(ellipse, rgba(0,201,167,0.22) 0%, transparent 70%)", filter: "blur(20px)", borderRadius: "50%", pointerEvents: "none" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div style={{ background: "var(--navy-2)", borderTop: "0.5px solid rgba(0,201,167,0.1)", borderBottom: "0.5px solid rgba(0,201,167,0.1)", padding: "16px 0", overflow: "hidden", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", width: "max-content", animation: "marqueeScroll 28s linear infinite" }}>
          {[...marqueeTags, ...marqueeTags].map((tag, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "0 28px", fontSize: "0.78rem", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.06em", color: i % 3 === 0 ? "var(--teal)" : "var(--gray-3)", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: i % 3 === 0 ? "var(--teal)" : "rgba(255,255,255,0.15)", display: "inline-block" }} />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ─── PROBLEM ─── */}
      <section className="section-sm" style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}>
        {/* small cube decoration */}
        <div style={{ position: "absolute", top: "10%", right: "2%", animation: "floatOrbit 12s ease-in-out infinite", pointerEvents: "none", opacity: 0.25, zIndex: 0 }}>
          <WireframeCube size={55} color="rgba(0,201,167,0.6)" duration={20} />
        </div>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Particles3D count={10} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div className="section-heading-mb">
              <p className="label" style={{ marginBottom: 16 }}>The problem with traditional hiring</p>
              <h2 className="display-md">CVs lie. Interviews are slow.<br /><span className="teal">Gut feel is unreliable.</span></h2>
            </div>
          </ScrollReveal>
          <div className="col-3-grid">
            {[
              { icon: "📄", color: "#ef4444", title: "CVs over-promise",       body: "Candidates optimise CVs for keywords, not reality. You're screening fiction, not capability." },
              { icon: "⏳", color: "#f59e0b", title: "Interviews take forever", body: "Hours of interviews per candidate. Scheduling, back-and-forth, and bias — before a single answer is tested." },
              { icon: "🎲", color: "#a78bfa", title: "Gut feel misses talent",  body: "Unstructured interviews systematically favour confident presenters over actual performers." },
            ].map((p, i) => (
              <ScrollReveal key={p.title} direction="scale" delay={i * 100} threshold={0.06}>
                <ProblemCard p={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="section" style={{ background: "var(--navy-2)", position: "relative", overflow: "hidden" }}>
        {/* orbit decoration */}
        <div style={{ position: "absolute", top: "5%", left: "2%", animation: "floatOrbit 11s ease-in-out infinite", pointerEvents: "none", opacity: 0.2, zIndex: 0 }}>
          <OrbitSystem size={160} color="rgba(0,201,167,0.5)" />
        </div>
        <div style={{ position: "absolute", bottom: "5%", right: "2%", animation: "floatOrbit 15s ease-in-out infinite reverse", pointerEvents: "none", opacity: 0.18, zIndex: 0 }}>
          <WireframeCube size={65} color="rgba(0,201,167,0.5)" duration={22} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div className="section-heading-mb">
              <p className="label" style={{ marginBottom: 16 }}>How it works</p>
              <h2 className="display-md">From role creation to<br /><span className="teal">ranked shortlist.</span></h2>
            </div>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
            {/* timeline spine */}
            <div style={{ position: "absolute", left: "calc(50% - 0.5px)", top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, transparent, rgba(0,201,167,0.2) 10%, rgba(0,201,167,0.2) 90%, transparent)", zIndex: 0 }} />

            {steps.map((s, i) => (
              <ScrollReveal key={s.step} direction={i % 2 === 0 ? "left" : "right"} delay={80} threshold={0.08}>
                <div className="timeline-step-grid" style={{ marginBottom: 56, position: "relative", zIndex: 1 }}>
                  <div style={{ paddingRight: 48 }}>
                    {i % 2 === 0 ? <StepContent s={s} /> : <StepMockup index={i} />}
                  </div>
                  {/* center dot with orbit ring */}
                  <div className="timeline-dot-col" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                    {/* outer ring orbit */}
                    <div style={{ position: "absolute", width: 72, height: 72, borderRadius: "50%", border: "0.5px solid rgba(0,201,167,0.15)", animation: `orbitRing1 ${6 + i}s linear infinite`, animationDelay: `${i * 0.4}s` }} />
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(0,201,167,0.12)", border: "1.5px solid rgba(0,201,167,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.72rem", color: "var(--teal)", letterSpacing: "0.04em", animation: "ringGlow 3s ease-in-out infinite", animationDelay: `${i * 0.6}s` }}>
                      {s.step}
                    </div>
                  </div>
                  <div style={{ paddingLeft: 48 }}>
                    {i % 2 === 0 ? <StepMockup index={i} /> : <StepContent s={s} />}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section className="section" style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", right: "3%", animation: "floatOrbit 13s ease-in-out infinite", pointerEvents: "none", opacity: 0.22, zIndex: 0 }}>
          <OrbitSystem size={180} color="rgba(0,201,167,0.45)" />
        </div>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Particles3D count={14} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div className="section-heading-mb">
              <p className="label" style={{ marginBottom: 16 }}>Everything included</p>
              <h2 className="display-md">Built for the whole hiring cycle.</h2>
            </div>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(272px, 1fr))", gap: 20 }}>
            {coreFeatures.map((f, i) => (
              <ScrollReveal key={f.title} direction="scale" delay={i * 55} threshold={0.05}>
                <FeatureCard f={f} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTEGRITY PROCTORING ─── */}
      <section className="section" style={{ background: "var(--navy-2)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 600, height: 600, top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,201,167,0.04) 0%, transparent 70%)", filter: "blur(40px)", animation: "orbDrift 18s ease-in-out infinite", pointerEvents: "none" }} />
        {/* cube decoration */}
        <div style={{ position: "absolute", bottom: "8%", left: "3%", animation: "floatOrbit 10s ease-in-out infinite", pointerEvents: "none", opacity: 0.22, zIndex: 0 }}>
          <WireframeCube size={60} color="rgba(0,201,167,0.55)" duration={18} />
        </div>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Particles3D count={8} color="rgba(0,201,167,0.5)" />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="split-grid" style={{ alignItems: "center" }}>
            <ScrollReveal direction="left" threshold={0.06}>
              <div>
                <p className="label" style={{ marginBottom: 18 }}>Integrity monitoring</p>
                <h2 className="display-md" style={{ marginBottom: 24 }}>Real-time proctoring.<br /><span className="teal">No blind spots.</span></h2>
                <p style={{ color: "var(--gray-2)", lineHeight: 1.85, fontWeight: 300, marginBottom: 36 }}>Every assessment runs under passive integrity monitoring. Candidates are warned upfront and the system silently logs all events throughout. You get a complete picture of how the assessment was taken — not just what was answered.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {integrityFeatures.map((item, i) => (
                    <div key={item.label}
                      style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(0,201,167,0.05)", border: "0.5px solid rgba(0,201,167,0.12)", borderRadius: 10, padding: "12px 14px", transition: "all 0.3s", cursor: "default" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,201,167,0.1)"; el.style.borderColor = "rgba(0,201,167,0.3)"; el.style.transform = "scale(1.04) translateY(-2px)"; el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)"; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,201,167,0.05)"; el.style.borderColor = "rgba(0,201,167,0.12)"; el.style.transform = "scale(1) translateY(0)"; el.style.boxShadow = "none"; }}>
                      <span style={{ fontSize: "17px" }}>{item.icon}</span>
                      <span style={{ fontSize: "0.8rem", color: "var(--gray-2)" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100} threshold={0.06}>
              <Card3D>
                <IntegrityMockup />
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── RECRUITMENT AI ─── */}
      <section className="section" style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "15%", right: "3%", animation: "floatOrbit 9s ease-in-out infinite", pointerEvents: "none", opacity: 0.2, zIndex: 0 }}>
          <OrbitSystem size={150} color="rgba(0,201,167,0.45)" />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="split-grid" style={{ alignItems: "center" }}>
            <ScrollReveal direction="left" threshold={0.06}>
              <Card3D>
                <AiChatMockup />
              </Card3D>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100} threshold={0.06}>
              <div>
                <p className="label" style={{ marginBottom: 18 }}>Recruitment AI</p>
                <h2 className="display-md" style={{ marginBottom: 24 }}>Ask anything about<br /><span className="teal">your candidates.</span></h2>
                <p style={{ color: "var(--gray-2)", lineHeight: 1.85, fontWeight: 300, marginBottom: 28 }}>The built-in Recruitment AI reads your live candidate data and answers natural language questions instantly. No reports to generate, no spreadsheets to build — just ask and get an answer.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {["Who scored the highest overall?", "Which candidates expect under Rs. 80,000?", "Summarise the top 3 candidates.", "Who flagged integrity issues?"].map((q, i) => (
                    <div key={q}
                      style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 16px", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 10, fontSize: "0.87rem", color: "var(--gray-2)", transition: "all 0.25s", cursor: "default" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,201,167,0.3)"; el.style.background = "rgba(0,201,167,0.05)"; el.style.transform = "translateX(6px)"; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.background = "rgba(255,255,255,0.03)"; el.style.transform = "translateX(0)"; }}>
                      <span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0 }}>→</span>
                      &ldquo;{q}&rdquo;
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "0.78rem", color: "var(--gray-4)" }}>Powered by Groq · Reads live assessment data · Responses may not be perfect</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="section" style={{ background: "var(--navy-2)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "8%", left: "2%", animation: "floatOrbit 12s ease-in-out infinite reverse", pointerEvents: "none", opacity: 0.18, zIndex: 0 }}>
          <WireframeCube size={55} color="rgba(0,201,167,0.5)" duration={14} />
        </div>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Particles3D count={10} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div className="section-heading-mb">
              <p className="label" style={{ marginBottom: 16 }}>Pricing</p>
              <h2 className="display-md" style={{ marginBottom: 14 }}>Simple, transparent pricing.</h2>
              <p style={{ color: "var(--gray-3)", fontWeight: 300 }}>All prices in LKR per month. Annual billing at 20% discount.</p>
            </div>
          </ScrollReveal>
          <div className="col-3-grid" style={{ alignItems: "stretch" }}>
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={plan.name} direction="scale" delay={i * 100} threshold={0.06}>
                <Card3D style={{ height: "100%" }}>
                  <PricingCard plan={plan} />
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "120px 0", background: "var(--navy)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,201,167,0.07) 0%, transparent 60%)", animation: "orbDrift 12s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,201,167,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,0.018) 1px,transparent 1px)", backgroundSize: "88px 88px" }} />
        {/* large orbit behind copy */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "floatOrbit 14s ease-in-out infinite", pointerEvents: "none", opacity: 0.18, zIndex: 0 }}>
          <OrbitSystem size={440} color="rgba(0,201,167,0.45)" />
        </div>
        {/* corner cubes */}
        <div style={{ position: "absolute", top: "8%", left: "4%", animation: "floatOrbit 10s ease-in-out infinite", pointerEvents: "none", opacity: 0.22, zIndex: 0 }}>
          <WireframeCube size={56} color="rgba(0,201,167,0.5)" duration={13} />
        </div>
        <div style={{ position: "absolute", bottom: "8%", right: "4%", animation: "floatOrbit 16s ease-in-out infinite reverse", pointerEvents: "none", opacity: 0.22, zIndex: 0 }}>
          <WireframeCube size={48} color="rgba(0,201,167,0.45)" duration={19} />
        </div>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Particles3D count={16} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal direction="scale" threshold={0.1}>
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 100, padding: "6px 18px", marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--teal)", animation: "pulse 2.5s ease-in-out infinite", boxShadow: "0 0 8px rgba(0,201,167,0.7)" }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--teal)", textTransform: "uppercase" }}>Ready to upgrade your hiring?</span>
              </div>
              <h2 className="display-md" style={{ marginBottom: 20 }}>Your next great hire is one<br /><span className="teal-gradient">assessment away.</span></h2>
              <p style={{ color: "var(--gray-2)", lineHeight: 1.85, fontWeight: 300, marginBottom: 44 }}>Start screening candidates on evidence — not CV polish or interview nerves. Get up and running in under 10 minutes.</p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ animation: "glowRing 3s ease-in-out infinite" }}>Start free trial →</Link>
                <Link href="/contact" className="btn-outline">Talk to the team</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* ─── sub-components ─────────────────────────────────────────────────── */

function StatCounter({ target, suffix, label, prefix, active }: { target: number; suffix: string; label: string; prefix: string; active: boolean }) {
  const val = useCountUp(target, 1600, active);
  return (
    <div style={{ animation: active ? "countUp 0.6s ease-out both" : "none" }}>
      <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.6rem", color: "var(--teal)", letterSpacing: "-0.04em", lineHeight: 1 }}>{prefix}{val}{suffix}</p>
      <p style={{ fontSize: "0.75rem", color: "var(--gray-3)", marginTop: 5 }}>{label}</p>
    </div>
  );
}

/* problem card with 3D tilt built-in */
function ProblemCard({ p }: { p: { icon: string; color: string; title: string; body: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg) translateZ(20px)`;
    el.style.borderColor = `${p.color}44`;
    el.style.boxShadow = `${-x * 14}px ${y * 14}px 32px rgba(0,0,0,0.4), 0 0 30px ${p.color}18`;
  }, [p.color]);
  const onLeave = useCallback(() => {
    const el = ref.current; if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateZ(0)";
    el.style.borderColor = "rgba(255,255,255,0.07)";
    el.style.boxShadow = "none";
  }, []);
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "32px 28px", height: "100%", position: "relative", overflow: "hidden", transition: "transform 0.12s ease-out, border-color 0.2s, box-shadow 0.12s ease-out", cursor: "default", transformStyle: "preserve-3d" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${p.color}66, transparent)` }} />
      {/* corner glow */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: `radial-gradient(circle at top right, ${p.color}18, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ fontSize: "2.2rem", marginBottom: 16, animation: "iconBob3D 6s ease-in-out infinite" }}>{p.icon}</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", marginBottom: 12, color: p.color }}>{p.title}</h3>
      <p style={{ color: "var(--gray-3)", fontSize: "0.88rem", lineHeight: 1.75 }}>{p.body}</p>
    </div>
  );
}

/* feature card with integrated 3D tilt + beam sweep */
function FeatureCard({ f }: { f: { icon: string; title: string; desc: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 11}deg) rotateX(${-y * 8}deg) translateZ(18px)`;
    el.style.borderColor = "rgba(0,201,167,0.28)";
    el.style.boxShadow   = `${-x * 14}px ${y * 14}px 40px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(0,201,167,0.12)`;
    const beam = el.querySelector(".beam") as HTMLElement;
    if (beam) beam.style.animation = "beamSweep 0.7s ease-out forwards";
  }, []);
  const onLeave = useCallback(() => {
    const el = ref.current; if (!el) return;
    el.style.transform   = "perspective(900px) rotateY(0) rotateX(0) translateZ(0)";
    el.style.borderColor = "rgba(255,255,255,0.07)";
    el.style.boxShadow   = "none";
    const beam = el.querySelector(".beam") as HTMLElement;
    if (beam) beam.style.animation = "none";
  }, []);
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "28px", height: "100%", position: "relative", overflow: "hidden", transition: "transform 0.12s ease-out, border-color 0.2s, box-shadow 0.12s ease-out", cursor: "default", transformStyle: "preserve-3d" }}>
      <div className="beam" style={{ position: "absolute", top: 0, left: 0, width: "40%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(0,201,167,0.07), transparent)", animation: "none", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: "radial-gradient(circle at top right, rgba(0,201,167,0.08), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.14)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, fontSize: "22px", transition: "all 0.3s", animation: "iconBob3D 7s ease-in-out infinite" }}>{f.icon}</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", marginBottom: 10 }}>{f.title}</h3>
      <p style={{ color: "var(--gray-3)", fontSize: "0.86rem", lineHeight: 1.75 }}>{f.desc}</p>
    </div>
  );
}

function StepContent({ s }: { s: { step: string; title: string; desc: string; detail: string } }) {
  return (
    <div style={{ textAlign: "left" }}>
      <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "3.5rem", color: "rgba(0,201,167,0.1)", letterSpacing: "-0.06em", lineHeight: 1, marginBottom: 14 }}>{s.step}</p>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.45rem", marginBottom: 12, letterSpacing: "-0.03em" }}>{s.title}</h3>
      <p style={{ color: "var(--gray-2)", lineHeight: 1.8, fontWeight: 300, marginBottom: 14 }}>{s.desc}</p>
      <p style={{ color: "var(--gray-4)", fontSize: "0.84rem", lineHeight: 1.7 }}>{s.detail}</p>
    </div>
  );
}

function StepMockup({ index }: { index: number }) {
  const inner =
    index === 0 ? <CreateRoleMockup /> :
    index === 1 ? <AiGeneratorMockup /> :
    index === 2 ? <InviteMockup /> :
    index === 3 ? <AssessmentMockup /> :
    <DashboardMockup />;
  return <Card3D>{inner}</Card3D>;
}

function PricingCard({ plan }: { plan: typeof pricingPlans[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ position: "relative", borderRadius: 28, padding: plan.highlight ? 2 : 0, background: plan.highlight ? "linear-gradient(135deg, rgba(0,201,167,0.5), rgba(0,80,200,0.3), rgba(0,201,167,0.5))" : "transparent", backgroundSize: plan.highlight ? "200% 200%" : "auto", animation: plan.highlight ? "gradientBorder 4s ease infinite" : "none", height: "100%" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {plan.highlight && (
        <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "var(--teal)", color: "var(--navy)", fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 16px", borderRadius: 100, whiteSpace: "nowrap", zIndex: 2, boxShadow: "0 0 16px rgba(0,201,167,0.5)" }}>Most popular</div>
      )}
      <div style={{ background: plan.highlight ? "var(--navy-2)" : "rgba(255,255,255,0.03)", border: plan.highlight ? "none" : `0.5px solid ${hovered ? "rgba(0,201,167,0.22)" : "rgba(255,255,255,0.08)"}`, borderRadius: plan.highlight ? 26 : 28, padding: "36px 30px", height: "100%", display: "flex", flexDirection: "column", transition: "all 0.3s", transform: hovered ? "translateY(-6px)" : "none", boxShadow: hovered ? "0 28px 72px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(0,201,167,0.08)" : "none", position: "relative", overflow: "hidden" }}>
        {hovered && <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg, transparent, rgba(0,201,167,0.5), transparent)", pointerEvents: "none" }} />}
        <div style={{ marginBottom: 26 }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", marginBottom: 10 }}>{plan.name}</p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 10 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.1rem", color: plan.highlight ? "var(--teal)" : "var(--white)", letterSpacing: "-0.04em" }}>{plan.price}</span>
            {plan.period && <span style={{ color: "var(--gray-3)", fontSize: "0.83rem" }}>{plan.period}</span>}
          </div>
          <p style={{ color: "var(--gray-3)", fontSize: "0.83rem", lineHeight: 1.6 }}>{plan.desc}</p>
        </div>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11, marginBottom: 30, flex: 1 }}>
          {plan.features.map(f => (
            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.84rem", color: "var(--gray-2)" }}>
              <span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0, background: "rgba(0,201,167,0.1)", width: 18, height: 18, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", marginTop: 1 }}>✓</span>{f}
            </li>
          ))}
        </ul>
        <Link href="/contact" className={plan.highlight ? "btn-primary" : "btn-outline"} style={{ textAlign: "center", justifyContent: "center" }}>{plan.cta}</Link>
      </div>
    </div>
  );
}

function HeroPreviewPanel() {
  return (
    <div style={{ width: 420, background: "rgba(10,20,34,0.95)", border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: 24, overflow: "hidden", boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(0,201,167,0.08), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
      <div style={{ padding: "14px 18px", borderBottom: "0.5px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ef4444","#f59e0b","#22c55e"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />)}
        </div>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.75rem", color: "var(--gray-3)" }}>ORVAIT <span style={{ color: "var(--teal)" }}>ADMIN</span></p>
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 700, color: "var(--navy)" }}>A</div>
      </div>
      <div style={{ padding: 18 }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--gray-4)", textTransform: "uppercase", marginBottom: 12 }}>Job Roles · 2</p>
        {/* role card 1 */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 14, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem", marginBottom: 3 }}>Senior Software Engineer</p>
              <p style={{ fontSize: "0.7rem", color: "var(--gray-3)" }}>Hybrid · Full-time · 10 questions</p>
            </div>
            <span style={{ fontSize: "0.62rem", fontWeight: 600, padding: "3px 8px", background: "rgba(0,201,167,0.1)", color: "var(--teal)", borderRadius: 6, border: "0.5px solid rgba(0,201,167,0.2)" }}>Active</span>
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
            {[{ n: "24", l: "INVITED" }, { n: "8", l: "DONE" }, { n: "3", l: "LISTED" }].map(s => (
              <div key={s.l} style={{ flex: 1, background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "8px 6px", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", color: s.l === "DONE" ? "var(--teal)" : "var(--white)", letterSpacing: "-0.04em" }}>{s.n}</p>
                <p style={{ fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--gray-4)", textTransform: "uppercase", marginTop: 2 }}>{s.l}</p>
              </div>
            ))}
          </div>
          <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
            <div style={{ height: "100%", width: "33%", background: "linear-gradient(90deg, #00c9a7, #00eed0)", borderRadius: 100 }} />
          </div>
        </div>
        {/* role card 2 */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.05)", borderRadius: 14, padding: 14, marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem", marginBottom: 3 }}>Sales & Marketing Intern</p>
              <p style={{ fontSize: "0.7rem", color: "var(--gray-3)" }}>Remote · 6 months · 10 questions</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[{ n: "15", l: "INVITED" }, { n: "1", l: "DONE" }, { n: "0", l: "LISTED" }].map(s => (
              <div key={s.l} style={{ flex: 1, background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "8px 6px", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", color: s.l === "DONE" ? "#f59e0b" : "var(--gray-3)", letterSpacing: "-0.04em" }}>{s.n}</p>
                <p style={{ fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--gray-4)", textTransform: "uppercase", marginTop: 2 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        {/* AI strip */}
        <div style={{ background: "rgba(0,201,167,0.06)", border: "0.5px solid rgba(0,201,167,0.18)", borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: "rgba(0,201,167,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>✨</div>
            <div>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--teal)" }}>Recruitment AI</p>
              <p style={{ fontSize: "0.62rem", color: "var(--gray-3)" }}>Powered by Groq · Live data</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {[0,1,2].map(d => <div key={d} style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", opacity: 0.6, animation: `typingDots 1.4s ease-in-out infinite`, animationDelay: `${d * 0.2}s` }} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function AiGeneratorMockup() {
  const aiSteps = [
    { label: "Analyzing role requirements",     done: true },
    { label: "Generating technical questions",  done: true },
    { label: "Generating behavioural questions",done: false, active: true },
    { label: "Scoring criteria generation",     done: false },
    { label: "Final review & formatting",       done: false },
  ];
  return (
    <div style={{ background: "rgba(8,17,31,0.97)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 28, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", marginBottom: 24 }}>
        <div style={{ width: 68, height: 68, borderRadius: "50%", background: "rgba(0,201,167,0.1)", border: "1.5px solid rgba(0,201,167,0.35)", display: "flex", alignItems: "center", justifyContent: "center", animation: "glowRing 3s ease-in-out infinite" }}>
          <div style={{ position: "absolute", inset: -8,  borderRadius: "50%", border: "1px solid rgba(0,201,167,0.1)" }} />
          <div style={{ position: "absolute", inset: -16, borderRadius: "50%", border: "0.5px solid rgba(0,201,167,0.06)" }} />
          <span style={{ fontSize: "26px" }}>✦</span>
        </div>
      </div>
      <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", color: "var(--teal)", textTransform: "uppercase", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block", animation: "pulse 2s infinite", boxShadow: "0 0 6px rgba(0,201,167,0.8)" }} />
        AI Question Generator · Step 1 / 5
        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block", animation: "pulse 2s infinite 0.3s", boxShadow: "0 0 6px rgba(0,201,167,0.8)" }} />
      </p>
      <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", textAlign: "center", marginBottom: 20, letterSpacing: "-0.02em" }}>Analyzing the role requirements with AI ✨</p>
      <div style={{ width: "100%", marginBottom: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
          <span style={{ fontSize: "0.7rem", color: "var(--gray-3)" }}>Generating your question set...</span>
          <span style={{ fontSize: "0.7rem", color: "var(--gray-3)" }}>18%</span>
        </div>
        <div style={{ height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 100, overflow: "hidden" }}>
          <div style={{ height: "100%", width: "18%", background: "linear-gradient(90deg, #00c9a7, #00eed0)", borderRadius: 100 }} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 7, marginBottom: 22 }}>
        {[0,1,2,3,4].map(d => <div key={d} style={{ width: d === 0 ? 22 : 7, height: 7, borderRadius: 100, background: d === 0 ? "var(--teal)" : "rgba(255,255,255,0.12)", boxShadow: d === 0 ? "0 0 8px rgba(0,201,167,0.5)" : "none" }} />)}
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 7 }}>
        {aiSteps.map(s => (
          <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 12px", background: s.active ? "rgba(0,201,167,0.07)" : "rgba(255,255,255,0.02)", border: `0.5px solid ${s.active ? "rgba(0,201,167,0.2)" : "rgba(255,255,255,0.04)"}`, borderRadius: 9 }}>
            <span style={{ width: 16, height: 16, borderRadius: "50%", background: s.done ? "var(--teal)" : s.active ? "rgba(0,201,167,0.18)" : "rgba(255,255,255,0.05)", border: s.active ? "1.5px solid rgba(0,201,167,0.5)" : "none", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "9px", color: "var(--navy)", fontWeight: 700 }}>{s.done ? "✓" : ""}</span>
            <span style={{ fontSize: "0.76rem", color: s.done ? "var(--gray-2)" : s.active ? "var(--teal)" : "var(--gray-4)", fontWeight: s.active ? 500 : 400 }}>{s.label}</span>
            {s.active && <span style={{ marginLeft: "auto", fontSize: "0.65rem", color: "var(--teal)" }}>In progress...</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function CreateRoleMockup() {
  return (
    <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 22 }}>
      <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", color: "var(--gray-3)", textTransform: "uppercase", marginBottom: 18 }}>Create Job Role</p>
      <div style={{ marginBottom: 14 }}>
        <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--gray-3)", textTransform: "uppercase", marginBottom: 7 }}>Role Title</p>
        <div style={{ background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "10px 13px", fontSize: "0.86rem", color: "var(--white)" }}>Senior Software Engineer<span style={{ display: "inline-block", width: 2, height: "1em", background: "var(--teal)", marginLeft: 2, animation: "pulse 1.2s ease-in-out infinite", verticalAlign: "middle" }} /></div>
      </div>
      <div style={{ marginBottom: 18 }}>
        <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--gray-3)", textTransform: "uppercase", marginBottom: 7 }}>Description</p>
        <div style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.22)", borderRadius: 10, padding: "10px 13px", fontSize: "0.83rem", color: "var(--gray-2)", lineHeight: 1.6, minHeight: 64 }}>5+ years in backend systems, strong in Node.js or Python...</div>
      </div>
      <div style={{ display: "flex", gap: 9, marginBottom: 18 }}>
        <div style={{ flex: 1, background: "linear-gradient(135deg, rgba(0,201,167,0.15), rgba(0,80,200,0.1))", border: "1px solid rgba(0,201,167,0.3)", borderRadius: 10, padding: "10px 12px", fontSize: "0.78rem", color: "var(--teal)", fontWeight: 600, textAlign: "center" }}>✨ Generate with AI</div>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "10px 12px", fontSize: "0.78rem", color: "var(--gray-2)", textAlign: "center" }}>+ Add Manually</div>
      </div>
      <div style={{ background: "rgba(0,201,167,0.07)", border: "0.5px solid rgba(0,201,167,0.14)", borderRadius: 10, padding: "12px 14px" }}>
        <p style={{ fontSize: "0.75rem", color: "var(--gray-3)", marginBottom: 6 }}>AI is generating 10 questions across 5 dimensions…</p>
        <div style={{ height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 100, overflow: "hidden" }}>
          <div style={{ height: "100%", width: "62%", background: "linear-gradient(90deg, #00c9a7, #00eed0)", borderRadius: 100 }} />
        </div>
      </div>
    </div>
  );
}

function InviteMockup() {
  return (
    <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 22 }}>
      <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", color: "var(--gray-3)", textTransform: "uppercase", marginBottom: 16 }}>Candidate Invites</p>
      <div style={{ background: "rgba(0,201,167,0.06)", border: "0.5px solid rgba(0,201,167,0.15)", borderRadius: 11, padding: "12px 14px", marginBottom: 14 }}>
        <p style={{ fontSize: "0.65rem", color: "var(--gray-3)", marginBottom: 5 }}>Assessment link</p>
        <p style={{ fontSize: "0.78rem", color: "var(--teal)", wordBreak: "break-all" }}>app.orvait.com/assess/srke7x...</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[{ name: "Nimasha P.", status: "Completed", score: "87%", color: "var(--teal)" }, { name: "Kavindu R.", status: "In progress", score: "—", color: "#f59e0b" }, { name: "Tharushi S.", status: "Invited", score: "—", color: "var(--gray-4)" }].map(c => (
          <div key={c.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "9px 13px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 700, color: "var(--gray-3)" }}>{c.name[0]}</div>
              <span style={{ fontSize: "0.83rem", color: "var(--gray-2)" }}>{c.name}</span>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ fontSize: "0.68rem", color: c.color, fontWeight: 500 }}>{c.status}</span>
              {c.score !== "—" && <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--white)", background: "rgba(0,201,167,0.12)", padding: "2px 8px", borderRadius: 6 }}>{c.score}</span>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, padding: "9px 13px", background: "rgba(255,255,255,0.02)", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.75rem", color: "var(--gray-3)" }}>Submission rate</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 70, height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 100, overflow: "hidden" }}>
            <div style={{ height: "100%", width: "33%", background: "var(--teal)", borderRadius: 100 }} />
          </div>
          <span style={{ fontSize: "0.72rem", color: "var(--gray-3)" }}>33%</span>
        </div>
      </div>
    </div>
  );
}

function AssessmentMockup() {
  return (
    <div style={{ background: "rgba(8,17,31,0.97)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 22 }}>
      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--teal)", textTransform: "uppercase", marginBottom: 5, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", animation: "pulse 2s infinite", boxShadow: "0 0 6px rgba(0,201,167,0.7)" }} />
          PROCTORED ASSESSMENT
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", animation: "pulse 2s infinite 0.4s", boxShadow: "0 0 6px rgba(0,201,167,0.7)" }} />
        </p>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", marginBottom: 3 }}>Sales &amp; Marketing Intern</p>
        <p style={{ fontSize: "0.75rem", color: "var(--gray-3)" }}>Welcome, Isurindu Wickramasinghe</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 14 }}>
        {[{ icon: "⏱", label: "TIME LIMIT", val: "25 minutes from the moment you click Start" }, { icon: "📋", label: "QUESTIONS", val: "10 required questions plus salary expectation" }, { icon: "🔒", label: "NO PAUSING", val: "You cannot pause, restart, or return" }].map(r => (
          <div key={r.label} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "9px 13px" }}>
            <span style={{ fontSize: "16px" }}>{r.icon}</span>
            <div>
              <p style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--gray-4)", textTransform: "uppercase" }}>{r.label}</p>
              <p style={{ fontSize: "0.75rem", color: "var(--gray-2)", marginTop: 1 }}>{r.val}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(245,158,11,0.08)", border: "0.5px solid rgba(245,158,11,0.2)", borderRadius: 10, padding: "11px 13px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#f59e0b", letterSpacing: "0.08em" }}>⚠ INTEGRITY NOTICE</p>
        <p style={{ fontSize: "0.65rem", color: "var(--teal)", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block", animation: "pulse 2s infinite" }} />
          Monitoring Active
        </p>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 18 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.82rem" }}>Admin Dashboard</p>
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 700, color: "var(--navy)" }}>A</div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 13, padding: 14, marginBottom: 12 }}>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.87rem", marginBottom: 3 }}>Sales &amp; Marketing Intern</p>
        <p style={{ fontSize: "0.72rem", color: "var(--gray-3)", marginBottom: 12 }}>Remote · 6 months · Commission-based</p>
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          {[{ n: "15", l: "INVITED", c: "var(--white)" }, { n: "1", l: "DONE", c: "#f59e0b" }, { n: "0", l: "LISTED", c: "var(--gray-3)" }].map(s => (
            <div key={s.l} style={{ flex: 1, background: "rgba(255,255,255,0.04)", borderRadius: 9, padding: "9px 7px", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", color: s.c, letterSpacing: "-0.04em" }}>{s.n}</p>
              <p style={{ fontSize: "0.57rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--gray-4)", textTransform: "uppercase", marginTop: 2 }}>{s.l}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
          <p style={{ fontSize: "0.7rem", color: "var(--gray-3)" }}>Submission rate</p>
          <p style={{ fontSize: "0.7rem", color: "var(--gray-3)" }}>7%</p>
        </div>
        <div style={{ height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 100, overflow: "hidden" }}>
          <div style={{ height: "100%", width: "7%", background: "var(--teal)", borderRadius: 100 }} />
        </div>
      </div>
      <div style={{ background: "rgba(0,201,167,0.06)", border: "0.5px solid rgba(0,201,167,0.18)", borderRadius: 11, padding: "11px 13px", display: "flex", alignItems: "center", gap: 9 }}>
        <div style={{ width: 26, height: 26, borderRadius: 7, background: "rgba(0,201,167,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", flexShrink: 0 }}>✨</div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--teal)" }}>Recruitment AI</p>
          <p style={{ fontSize: "0.64rem", color: "var(--gray-3)" }}>Powered by Groq · Live data</p>
        </div>
        <div style={{ display: "flex", gap: 3 }}>
          {[0,1,2].map(d => <div key={d} style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--teal)", opacity: 0.6, animation: `typingDots 1.4s ease-in-out infinite`, animationDelay: `${d * 0.2}s` }} />)}
        </div>
      </div>
    </div>
  );
}

function IntegrityMockup() {
  return (
    <div style={{ background: "rgba(8,17,31,0.97)", border: "1px solid rgba(245,158,11,0.18)", borderRadius: 20, padding: 22, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)", animation: "scanLine 3s ease-in-out infinite", pointerEvents: "none" }} />
      {/* corner teal accent */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: "radial-gradient(circle at top right, rgba(245,158,11,0.08), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", color: "#f59e0b", textTransform: "uppercase" }}>Integrity Report</p>
        <span style={{ fontSize: "0.65rem", color: "var(--teal)", display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
          Monitoring Active
        </span>
      </div>
      <p style={{ fontSize: "0.8rem", color: "var(--gray-2)", marginBottom: 14 }}>Candidate: Nimasha Perera</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
        {[
          { event: "Tab switch detected",      time: "04:21", level: "warn"  },
          { event: "Copy attempt blocked",      time: "07:45", level: "warn"  },
          { event: "Focus restored",            time: "07:46", level: "ok"    },
          { event: "DevTools access blocked",   time: "12:10", level: "alert" },
          { event: "Assessment submitted",      time: "24:58", level: "ok"    },
        ].map(e => (
          <div key={e.time} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", background: "rgba(255,255,255,0.02)", borderRadius: 9, border: `0.5px solid ${e.level === "alert" ? "rgba(239,68,68,0.2)" : e.level === "warn" ? "rgba(245,158,11,0.14)" : "rgba(255,255,255,0.05)"}`, transition: "all 0.2s", cursor: "default" }}
            onMouseEnter={e2 => { const el = e2.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.04)"; el.style.transform = "translateX(3px)"; }}
            onMouseLeave={e2 => { const el = e2.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.02)"; el.style.transform = "translateX(0)"; }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: e.level === "alert" ? "#ef4444" : e.level === "warn" ? "#f59e0b" : "var(--teal)", flexShrink: 0, boxShadow: e.level === "alert" ? "0 0 6px #ef4444" : e.level === "warn" ? "0 0 6px #f59e0b" : "0 0 6px var(--teal)" }} />
              <span style={{ fontSize: "0.76rem", color: "var(--gray-2)" }}>{e.event}</span>
            </div>
            <span style={{ fontSize: "0.7rem", color: "var(--gray-4)", fontFamily: "monospace" }}>{e.time}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(239,68,68,0.07)", border: "0.5px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 14px" }}>
        <p style={{ fontSize: "0.78rem", color: "var(--gray-2)" }}>Integrity Score</p>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.15rem", color: "#ef4444" }}>64 / 100</p>
      </div>
    </div>
  );
}

function AiChatMockup() {
  return (
    <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "15px 18px", borderBottom: "0.5px solid rgba(255,255,255,0.07)", background: "rgba(0,201,167,0.03)" }}>
        <div style={{ width: 30, height: 30, borderRadius: 9, background: "rgba(0,201,167,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", animation: "glowRing 3s ease-in-out infinite" }}>✨</div>
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem" }}>Recruitment AI</p>
          <p style={{ fontSize: "0.65rem", color: "var(--teal)" }}>Powered by Groq · Live data</p>
        </div>
      </div>
      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 12, minHeight: 300 }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ background: "var(--teal)", color: "var(--navy)", borderRadius: "14px 14px 4px 14px", padding: "9px 14px", fontSize: "0.83rem", fontWeight: 600, maxWidth: "75%" }}>Who scored the highest overall?</div>
        </div>
        <div style={{ display: "flex", gap: 9 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: "rgba(0,201,167,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", flexShrink: 0, marginTop: 2 }}>✨</div>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "4px 14px 14px 14px", padding: "11px 14px", fontSize: "0.81rem", color: "var(--gray-2)", lineHeight: 1.7, maxWidth: "82%" }}>
            Only one candidate has submitted:<br /><span style={{ color: "var(--teal)", fontWeight: 600 }}>Isurindu Wickramasinghe</span> with an autoScore of <span style={{ fontWeight: 700 }}>4</span>.<br /><br />All others have not submitted yet.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ background: "var(--teal)", color: "var(--navy)", borderRadius: "14px 14px 4px 14px", padding: "9px 14px", fontSize: "0.83rem", fontWeight: 600, maxWidth: "75%" }}>Filter by salary under Rs. 80,000</div>
        </div>
        <div style={{ display: "flex", gap: 9 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: "rgba(0,201,167,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", flexShrink: 0, marginTop: 2 }}>✨</div>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "4px 14px 14px 14px", padding: "11px 14px", fontSize: "0.81rem", color: "var(--gray-2)", lineHeight: 1.7 }}>
            <span style={{ color: "var(--teal)", fontWeight: 600 }}>2 candidates</span> expect under Rs. 80,000. I can list them or compare their scores.
          </div>
        </div>
        <div style={{ display: "flex", gap: 9 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: "rgba(0,201,167,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", flexShrink: 0 }}>✨</div>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "4px 14px 14px 14px", padding: "11px 16px", display: "flex", gap: 5, alignItems: "center" }}>
            {[0,1,2].map(d => <div key={d} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gray-3)", animation: `typingDots 1.4s ease-in-out infinite`, animationDelay: `${d * 0.2}s` }} />)}
          </div>
        </div>
      </div>
      <div style={{ padding: "12px 14px", borderTop: "0.5px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 9 }}>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 9, padding: "9px 12px", fontSize: "0.8rem", color: "var(--gray-4)" }}>Ask about candidates...</div>
        <div style={{ width: 34, height: 34, borderRadius: 9, background: "var(--teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", cursor: "pointer", transition: "transform 0.2s", boxShadow: "0 0 12px rgba(0,201,167,0.3)" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>→</div>
      </div>
    </div>
  );
}
