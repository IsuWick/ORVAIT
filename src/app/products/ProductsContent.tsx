"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";

/* ── 3D keyframes injected once ── */
const ANIM_3D = `
@keyframes rotateCube3D {
  from { transform: rotateX(22deg) rotateY(0deg); }
  to   { transform: rotateX(22deg) rotateY(360deg); }
}
@keyframes orbitRing1 {
  from { transform: rotateX(72deg) rotateZ(0deg); }
  to   { transform: rotateX(72deg) rotateZ(360deg); }
}
@keyframes orbitRing2 {
  from { transform: rotateX(38deg) rotateZ(0deg); }
  to   { transform: rotateX(38deg) rotateZ(-360deg); }
}
@keyframes orbitRing3 {
  from { transform: rotateX(55deg) rotateY(30deg) rotateZ(60deg); }
  to   { transform: rotateX(55deg) rotateY(30deg) rotateZ(420deg); }
}
@keyframes floatOrbit {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-20px); }
}
@keyframes iconSpin3D {
  0%, 100% { transform: perspective(250px) rotateY(0deg) rotateX(0deg); }
  30%       { transform: perspective(250px) rotateY(14deg) rotateX(4deg); }
  70%       { transform: perspective(250px) rotateY(-10deg) rotateX(-3deg); }
}
@keyframes depthFloat {
  0%, 100% { transform: perspective(900px) rotateX(3deg) rotateY(-1deg) translateZ(0); }
  50%       { transform: perspective(900px) rotateX(1deg) rotateY(1.5deg) translateZ(16px); }
}
@keyframes orbDrift {
  0%, 100% { transform: translate(0,0) scale(1); }
  33%       { transform: translate(30px,-20px) scale(1.05); }
  66%       { transform: translate(-20px,15px) scale(0.97); }
}
@keyframes glowRing {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0,201,167,0.0), 0 0 28px rgba(0,201,167,0.12); }
  50%       { box-shadow: 0 0 0 10px rgba(0,201,167,0.05), 0 0 56px rgba(0,201,167,0.24); }
}
@keyframes gradientBorder {
  0%, 100% { background-position: 0% 50%; }
  50%       { background-position: 100% 50%; }
}
@keyframes particlePulse {
  0%, 100% { transform: scale(1); opacity: 0.35; }
  50%       { transform: scale(2.2); opacity: 0.9; }
}
@keyframes scanBeam {
  0%   { transform: translateX(-100%) skewX(-10deg); }
  100% { transform: translateX(600%) skewX(-10deg); }
}
@keyframes suiteDepth {
  0%, 100% { transform: perspective(700px) rotateX(4deg); }
  50%       { transform: perspective(700px) rotateX(2deg); }
}
`;

/* ── products data ── */
const products = [
  {
    id: "recruit",
    name: "OrvaIt Recruit",
    tagline: "Hire on evidence, not instinct.",
    tag: "HR Technology",
    icon: (
      <img
        src="https://i.pinimg.com/736x/a7/32/00/a732007514c446e141e884515cd02c9d.jpg"
        alt="HR"
        style={{ width: "100%", height: "100%", borderRadius: "14px", objectFit: "cover" }}
      />
    ),
    status: "Available",
    color: "#00c9a7",
    description:
      "OrvaIt Recruit is a timed, proctored candidate assessment platform built specifically for Sri Lankan companies. Stop reading CVs that don't match reality — screen candidates with intelligent assessments and get scored reports instantly.",
    features: [
      "Unlimited custom roles and question banks",
      "Timed assessments with configurable limits",
      "MCQ auto-scoring + free-text question support",
      "Real-time integrity proctoring (tab switches, copy attempts, DevTools)",
      "Admin dashboard with candidate pipeline",
      "Shareable candidate reports",
      "CV upload and management",
      "Salary expectation capture",
    ],
    usecases: [
      "Tech companies hiring developers",
      "Banks screening operations staff",
      "Agencies vetting remote candidates",
      "Enterprise talent acquisition",
    ],
    pricing: "From Rs. 9,900/month",
  },
  {
    id: "insight",
    name: "OrvaIt Insight",
    tagline: "Your data, finally telling the truth.",
    tag: "Business Intelligence",
    icon: (
      <img
        src="https://i.pinimg.com/736x/5d/c8/63/5dc8637e74fd17dea829ea06541c2b72.jpg"
        alt="Insight"
        style={{ width: "100%", height: "100%", borderRadius: "14px", objectFit: "cover" }}
      />
    ),
    status: "Available",
    color: "#00c9a7",
    description:
      "OrvaIt Insight connects to your existing data sources and uses AI to surface the patterns, anomalies, and opportunities you would otherwise miss. No data scientist required — our models do the heavy lifting.",
    features: [
      "AI-generated executive summaries from raw data",
      "Anomaly and trend detection",
      "Natural language querying — ask questions in plain English",
      "Automated weekly business health reports",
      "Integration with Google Sheets, SQL databases, CRMs",
      "Role-based dashboards for every team",
      "Smart alert system for critical KPI shifts",
      "Forecast engine for revenue and churn",
    ],
    usecases: [
      "Retail chains tracking sales performance",
      "Financial services monitoring KPIs",
      "Operations teams optimizing capacity",
      "Marketing teams measuring ROI",
    ],
    pricing: "From Rs. 14,900/month",
  },
  {
    id: "flow",
    name: "OrvaIt Flow",
    tagline: "Automate the boring. Focus on what matters.",
    tag: "Process Automation",
    icon: (
      <img
        src="https://i.pinimg.com/736x/8a/35/fe/8a35fe04d6796bef41194d3a7f212e5e.jpg"
        alt="Flow"
        style={{ width: "100%", height: "100%", borderRadius: "14px", objectFit: "cover" }}
      />
    ),
    status: "Available",
    color: "#00c9a7",
    description:
      "OrvaIt Flow is an intelligent workflow automation platform that connects your existing tools and replaces manual, repetitive tasks with smart automated pipelines — without requiring your team to write a single line of code.",
    features: [
      "No-code workflow builder with AI suggestions",
      "1000+ integrations: Gmail, Slack, WhatsApp, ERPs",
      "AI document processing — extract, classify, route",
      "Approval workflow automation",
      "Scheduled and event-triggered automations",
      "Error handling and retry logic built-in",
      "Audit trail for every automated action",
      "Human-in-the-loop steps for critical decisions",
    ],
    usecases: [
      "Invoice processing and approvals",
      "Employee onboarding paperwork",
      "Customer support ticket routing",
      "Inventory and reorder management",
    ],
    pricing: "From Rs. 19,900/month",
  },
  {
    id: "guard",
    name: "OrvaIt Guard",
    tagline: "AI that watches so your team doesn't have to.",
    tag: "Cybersecurity",
    icon: (
      <img
        src="https://i.pinimg.com/736x/2e/b6/f5/2eb6f5411b093a0c1294738e0e34b706.jpg"
        alt="Guard"
        style={{ width: "100%", height: "100%", borderRadius: "14px", objectFit: "cover" }}
      />
    ),
    status: "Coming Q3 2025",
    color: "#7a94b0",
    description:
      "OrvaIt Guard brings enterprise-grade AI security monitoring to mid-size Sri Lankan businesses at a price that actually makes sense. Continuous threat detection, compliance monitoring, and automated incident response — 24/7.",
    features: [
      "AI-powered threat detection and alerting",
      "User behaviour anomaly detection",
      "Automated compliance reporting (ISO 27001, GDPR)",
      "Real-time security event dashboard",
      "Endpoint monitoring for remote teams",
      "Phishing and social engineering detection",
      "Incident response playbook automation",
      "Monthly executive security briefings",
    ],
    usecases: [
      "Financial institutions protecting customer data",
      "Healthcare managing patient records",
      "Remote-first teams securing endpoints",
      "Enterprises meeting compliance requirements",
    ],
    pricing: "Pricing TBA",
  },
];

/* ── 3D mouse-tilt wrapper ── */
function Card3D({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 13}deg) rotateX(${-y * 9}deg) translateZ(28px)`;
    el.style.filter = `drop-shadow(${-x * 18}px ${y * 18}px 28px rgba(0,201,167,0.13))`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    el.style.filter = "none";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transition: "transform 0.12s ease-out, filter 0.12s ease-out",
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── CSS wireframe cube ── */
function WireframeCube({
  size,
  color,
  duration,
}: {
  size: number;
  color: string;
  duration: number;
}) {
  const half = size / 2;
  const face = (transform: string): React.CSSProperties => ({
    position: "absolute",
    width: size,
    height: size,
    border: `1px solid ${color}`,
    background: "transparent",
    transform,
  });
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        transformStyle: "preserve-3d",
        animation: `rotateCube3D ${duration}s linear infinite`,
      }}
    >
      <div style={face(`translateZ(${half}px)`)} />
      <div style={face(`translateZ(${-half}px) rotateY(180deg)`)} />
      <div style={face(`rotateY(-90deg) translateZ(${half}px)`)} />
      <div style={face(`rotateY(90deg) translateZ(${half}px)`)} />
      <div style={face(`rotateX(90deg) translateZ(${half}px)`)} />
      <div style={face(`rotateX(-90deg) translateZ(${half}px)`)} />
    </div>
  );
}

/* ── orbit ring system ── */
function OrbitSystem({
  size,
  color,
  opacity = 1,
}: {
  size: number;
  color: string;
  opacity?: number;
}) {
  const glowColor = color.replace(")", ", 0.7)").replace("rgb", "rgba");
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        transformStyle: "preserve-3d",
        opacity,
      }}
    >
      {/* core glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: size * 0.22,
          height: size * 0.22,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          boxShadow: `0 0 18px ${color}, 0 0 36px ${color}44`,
          animation: "glowRing 2.8s ease-in-out infinite",
        }}
      />
      {/* ring 1 */}
      <div
        style={{
          position: "absolute",
          inset: size * 0.08,
          borderRadius: "50%",
          border: `1px solid ${color}`,
          animation: "orbitRing1 7s linear infinite",
        }}
      />
      {/* ring 2 */}
      <div
        style={{
          position: "absolute",
          inset: size * 0.04,
          borderRadius: "50%",
          border: `1px solid ${color}`,
          opacity: 0.45,
          animation: "orbitRing2 11s linear infinite",
        }}
      />
      {/* ring 3 */}
      <div
        style={{
          position: "absolute",
          inset: size * 0.18,
          borderRadius: "50%",
          border: `1.5px dashed ${color}`,
          opacity: 0.25,
          animation: "orbitRing3 5s linear infinite",
        }}
      />
      {/* orbit dot */}
      <div
        style={{
          position: "absolute",
          inset: size * 0.08,
          borderRadius: "50%",
          animation: "orbitRing1 7s linear infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      </div>
    </div>
  );
}

/* ── floating 3D particles ── */
function Particles3D({ count = 12, color = "rgba(0,201,167,0.7)" }: { count?: number; color?: string }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    x: `${8 + (i * 73) % 84}%`,
    y: `${5 + (i * 47) % 88}%`,
    size: 2 + (i % 3),
    delay: (i * 0.42).toFixed(2),
    duration: (3 + (i % 4)).toFixed(1),
  }));
  return (
    <>
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: color,
            animation: `particlePulse ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}

/* ── main component ── */
export default function ProductsContent() {
  return (
    <>
      <style>{ANIM_3D}</style>

      {/* ── HERO ── */}
      <section
        className="page-hero mesh-bg grid-bg"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* depth orbs */}
        <div
          className="orb"
          style={{
            width: 700,
            height: 700,
            top: -280,
            right: -120,
            background: "rgba(0,201,167,0.07)",
            animationDelay: "0s",
          }}
        />
        <div
          className="orb"
          style={{
            width: 400,
            height: 400,
            bottom: -100,
            left: -80,
            background: "rgba(0,80,200,0.06)",
            animationDelay: "-5s",
          }}
        />

        {/* floating particles */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Particles3D count={16} />
        </div>

        {/* 3D decoration — top-right */}
        <div
          style={{
            position: "absolute",
            top: "8%",
            right: "6%",
            transformStyle: "preserve-3d",
            animation: "floatOrbit 9s ease-in-out infinite",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <OrbitSystem size={200} color="rgba(0,201,167,0.45)" opacity={0.5} />
        </div>

        {/* wireframe cube decoration */}
        <div
          style={{
            position: "absolute",
            bottom: "12%",
            right: "18%",
            transformStyle: "preserve-3d",
            animation: "floatOrbit 13s ease-in-out infinite reverse",
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.4,
          }}
        >
          <WireframeCube size={80} color="rgba(0,201,167,0.5)" duration={18} />
        </div>

        <div
          className="container"
          style={{ position: "relative", zIndex: 1 }}
        >
          <p className="label fade-up" style={{ marginBottom: 18 }}>
            Our products
          </p>
          <h1
            className="display-lg fade-up-d1"
            style={{ maxWidth: 680, marginBottom: 28 }}
          >
            Software that
            <br />
            <span className="teal">solves real problems.</span>
          </h1>
          <p
            className="fade-up-d2"
            style={{
              color: "var(--gray-2)",
              fontWeight: 300,
              fontSize: "1.08rem",
              maxWidth: 520,
              lineHeight: 1.85,
            }}
          >
            Every OrvaIt product starts with a real pain point that Sri Lankan
            businesses face every day. Then we build AI into the solution from
            day one.
          </p>
        </div>
      </section>

      {/* ── OUR SUITE HEADING ── */}
      <div
        style={{
          padding: "40px 0",
          background: "var(--navy)",
          position: "relative",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
        {/* perspective grid floor effect */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            backgroundImage:
              "linear-gradient(rgba(0,201,167,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,167,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            animation: "suiteDepth 8s ease-in-out infinite",
            transformOrigin: "bottom center",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 1 }}>
          <h2 className="display-md fade-up-d2">
            Our <span className="teal fade-up-d3">Suite</span>
          </h2>
          <p
            style={{
              color: "var(--gray-4)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: 14,
              fontFamily: "var(--font-display)",
              fontWeight: 600,
            }}
          >
            4 products · AI-native · Built for Sri Lanka
          </p>
        </div>
      </div>

      {/* ── PRODUCT SECTIONS ── */}
      {products.map((p, i) => (
        <section
          key={p.id}
          className="section"
          style={{
            background: i % 2 === 1 ? "var(--navy-2)" : "var(--navy)",
            position: "relative",
            overflow: "hidden",
            padding: "100px 0",
          }}
        >
          {/* ambient orbs */}
          {i % 2 === 0 ? (
            <div
              className="orb"
              style={{
                width: 500,
                height: 500,
                top: "20%",
                right: "-10%",
                background: "rgba(0,201,167,0.05)",
                filter: "blur(60px)",
                animationDelay: `${-i * 2}s`,
              }}
            />
          ) : (
            <div
              className="orb"
              style={{
                width: 500,
                height: 500,
                top: "20%",
                left: "-10%",
                background: "rgba(0,201,167,0.03)",
                filter: "blur(60px)",
                animationDelay: `${-i * 2}s`,
              }}
            />
          )}

          {/* corner 3D decoration */}
          <div
            style={{
              position: "absolute",
              top: i % 2 === 0 ? "5%" : "auto",
              bottom: i % 2 === 1 ? "5%" : "auto",
              left: i % 2 === 1 ? "3%" : "auto",
              right: i % 2 === 0 ? "3%" : "auto",
              transformStyle: "preserve-3d",
              animation: `floatOrbit ${10 + i * 2}s ease-in-out infinite`,
              pointerEvents: "none",
              opacity: 0.3,
              zIndex: 0,
            }}
          >
            <WireframeCube size={60} color={p.color} duration={14 + i * 3} />
          </div>

          {/* scattered particles */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
            <Particles3D
              count={8}
              color={
                p.status === "Available"
                  ? "rgba(0,201,167,0.6)"
                  : "rgba(122,148,176,0.5)"
              }
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div
              className="product-row-grid"
              style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
            >
              {/* ── text column ── */}
              <ScrollReveal
                direction={i % 2 === 1 ? "right" : "left"}
                threshold={0.06}
              >
                <div
                  style={{
                    direction: "ltr",
                    paddingRight: i % 2 === 0 ? "20px" : "0",
                    paddingLeft: i % 2 === 1 ? "20px" : "0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 22,
                    }}
                  >
                    {/* 3D rotating icon */}
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 16,
                        background: "rgba(0,201,167,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(0,201,167,0.2)",
                        boxShadow: "0 0 20px rgba(0,201,167,0.1)",
                        animation: `iconSpin3D ${7 + i}s ease-in-out infinite`,
                        overflow: "hidden",
                      }}
                    >
                      {p.icon}
                    </div>
                    <span
                      className="chip"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {p.tag}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "4px 14px",
                        borderRadius: 100,
                        border: `1px solid ${p.status === "Available" ? "rgba(0,201,167,0.4)" : "rgba(255,255,255,0.1)"}`,
                        color:
                          p.status === "Available"
                            ? "var(--teal)"
                            : "var(--gray-3)",
                        background:
                          p.status === "Available"
                            ? "rgba(0,201,167,0.05)"
                            : "transparent",
                        boxShadow:
                          p.status === "Available"
                            ? "0 0 10px rgba(0,201,167,0.1)"
                            : "none",
                      }}
                    >
                      {p.status}
                    </span>
                  </div>

                  <h2
                    className="display-md"
                    style={{ marginBottom: 14, letterSpacing: "-0.02em" }}
                  >
                    {p.name}
                  </h2>
                  <p
                    style={{
                      color: "var(--teal)",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      fontStyle: "italic",
                      marginBottom: 24,
                      fontWeight: 500,
                    }}
                  >
                    &ldquo;{p.tagline}&rdquo;
                  </p>
                  <p
                    style={{
                      color: "var(--gray-2)",
                      lineHeight: 1.8,
                      marginBottom: 35,
                      fontWeight: 300,
                      fontSize: "1.05rem",
                      paddingRight: i % 2 === 0 ? "10%" : "0",
                    }}
                  >
                    {p.description}
                  </p>

                  {/* pricing badge with 3D depth */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,201,167,0.1) 0%, rgba(0,201,167,0.02) 100%)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(0,201,167,0.2)",
                      borderRadius: 16,
                      padding: "18px 24px",
                      marginBottom: 35,
                      display: "inline-block",
                      boxShadow:
                        "0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
                      animation: "glowRing 4s ease-in-out infinite",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--gray-1)",
                        marginBottom: 4,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 600,
                      }}
                    >
                      Starting at
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        color:
                          p.status === "Available"
                            ? "var(--teal)"
                            : "var(--gray-3)",
                      }}
                    >
                      {p.pricing}
                    </p>
                  </div>

                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <Link
                      href={
                        p.id === "recruit" && p.status === "Available"
                          ? "/products/recruit"
                          : "/contact"
                      }
                      className="btn-primary"
                      style={{ padding: "14px 28px", fontSize: "1rem" }}
                    >
                      {p.status === "Available" ? "Get started →" : "Join waitlist"}
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-outline"
                      style={{ padding: "14px 28px", fontSize: "1rem" }}
                    >
                      Request demo
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* ── feature card column with 3D tilt ── */}
              <ScrollReveal
                direction={i % 2 === 1 ? "left" : "right"}
                delay={100}
                threshold={0.06}
              >
                <Card3D style={{ direction: "ltr", position: "relative" }}>
                  {/* radial glow behind the card */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      width: "110%",
                      height: "110%",
                      background: `radial-gradient(circle, ${
                        p.status === "Available"
                          ? "rgba(0,201,167,0.16)"
                          : "rgba(122,148,176,0.14)"
                      } 0%, transparent 70%)`,
                      zIndex: -1,
                      filter: "blur(36px)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* features card */}
                  <div
                    style={{
                      padding: "40px",
                      marginBottom: 20,
                      border: "1px solid rgba(255,255,255,0.09)",
                      background: "rgba(255,255,255,0.03)",
                      backdropFilter: "blur(24px)",
                      borderRadius: "24px",
                      boxShadow:
                        "0 20px 48px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.07)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* shimmer beam on hover (CSS only, always visible subtle) */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 1,
                        background: `linear-gradient(90deg, transparent, ${p.color}66, transparent)`,
                        pointerEvents: "none",
                      }}
                    />
                    {/* subtle corner accent */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: 120,
                        height: 120,
                        background: `radial-gradient(circle at top right, ${p.color}18, transparent 70%)`,
                        pointerEvents: "none",
                      }}
                    />

                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        color: "var(--white)",
                        textTransform: "uppercase",
                        marginBottom: 24,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "var(--teal)",
                          display: "inline-block",
                          boxShadow: "0 0 10px var(--teal)",
                          animation: "glowRing 2.5s ease-in-out infinite",
                        }}
                      />
                      Core Features
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: 14,
                      }}
                    >
                      {p.features.map((f, fi) => (
                        <li
                          key={f}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 14,
                            fontSize: "0.93rem",
                            color: "var(--gray-2)",
                            lineHeight: 1.5,
                            transition: "transform 0.2s ease-out",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.transform =
                              "translateX(4px)";
                            (e.currentTarget as HTMLElement).style.color =
                              "var(--white)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.transform =
                              "translateX(0)";
                            (e.currentTarget as HTMLElement).style.color =
                              "var(--gray-2)";
                          }}
                        >
                          <span
                            style={{
                              color: "var(--navy)",
                              fontWeight: 700,
                              flexShrink: 0,
                              marginTop: 2,
                              background:
                                p.status === "Available"
                                  ? "var(--teal)"
                                  : "var(--gray-3)",
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.62rem",
                              boxShadow:
                                p.status === "Available"
                                  ? "0 0 8px rgba(0,201,167,0.4)"
                                  : "none",
                              animationDelay: `${fi * 0.1}s`,
                            }}
                          >
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* use-cases card */}
                  <div
                    style={{
                      padding: "22px 32px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      background: "rgba(0,0,0,0.18)",
                      borderRadius: "20px",
                      backdropFilter: "blur(16px)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        color: "var(--gray-3)",
                        textTransform: "uppercase",
                        marginBottom: 14,
                      }}
                    >
                      Built for
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {p.usecases.map((u) => (
                        <span
                          key={u}
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.09)",
                            borderRadius: 10,
                            padding: "7px 14px",
                            fontSize: "0.83rem",
                            color: "var(--gray-1)",
                            transition: "all 0.2s",
                            cursor: "default",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = `${p.color}55`;
                            el.style.background = `${p.color}0d`;
                            el.style.color = p.color;
                            el.style.transform = "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = "rgba(255,255,255,0.09)";
                            el.style.background = "rgba(255,255,255,0.03)";
                            el.style.color = "var(--gray-1)";
                            el.style.transform = "translateY(0)";
                          }}
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
