import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Products — OrvaIt",
  description: "AI-powered software products built for Sri Lankan businesses: Recruit, Insight, Flow, and Guard.",
};

const products = [
  {
    id: "recruit",
    name: "OrvaIt Recruit",
    tagline: "Hire on evidence, not instinct.",
    tag: "HR Technology",
    icon: <img src="https://i.pinimg.com/736x/a7/32/00/a732007514c446e141e884515cd02c9d.jpg" alt="HR" style={{ width: "100%", height: "100%", borderRadius: "14px", objectFit: "cover" }} />,
    status: "Available",
    color: "#00c9a7",
    description: "OrvaIt Recruit is a timed, proctored candidate assessment platform built specifically for Sri Lankan companies. Stop reading CVs that don't match reality — screen candidates with intelligent assessments and get scored reports instantly.",
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
    usecases: ["Tech companies hiring developers", "Banks screening operations staff", "Agencies vetting remote candidates", "Enterprise talent acquisition"],
    pricing: "From Rs. 9,900/month",
  },
  {
    id: "insight",
    name: "OrvaIt Insight",
    tagline: "Your data, finally telling the truth.",
    tag: "Business Intelligence",
    icon: <img src="https://i.pinimg.com/736x/5d/c8/63/5dc8637e74fd17dea829ea06541c2b72.jpg" alt="Insight" style={{ width: "100%", height: "100%", borderRadius: "14px", objectFit: "cover" }} />,
    status: "Available",
    color: "#00c9a7",
    description: "OrvaIt Insight connects to your existing data sources and uses AI to surface the patterns, anomalies, and opportunities you would otherwise miss. No data scientist required — our models do the heavy lifting.",
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
    usecases: ["Retail chains tracking sales performance", "Financial services monitoring KPIs", "Operations teams optimizing capacity", "Marketing teams measuring ROI"],
    pricing: "From Rs. 14,900/month",
  },
  {
    id: "flow",
    name: "OrvaIt Flow",
    tagline: "Automate the boring. Focus on what matters.",
    tag: "Process Automation",
    icon: <img src="https://i.pinimg.com/736x/8a/35/fe/8a35fe04d6796bef41194d3a7f212e5e.jpg" alt="Flow" style={{ width: "100%", height: "100%", borderRadius: "14px", objectFit: "cover" }} />,
    status: "Available",
    color: "#00c9a7",
    description: "OrvaIt Flow is an intelligent workflow automation platform that connects your existing tools and replaces manual, repetitive tasks with smart automated pipelines — without requiring your team to write a single line of code.",
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
    usecases: ["Invoice processing and approvals", "Employee onboarding paperwork", "Customer support ticket routing", "Inventory and reorder management"],
    pricing: "From Rs. 19,900/month",
  },
  {
    id: "guard",
    name: "OrvaIt Guard",
    tagline: "AI that watches so your team doesn't have to.",
    tag: "Cybersecurity",
    icon: <img src="https://i.pinimg.com/736x/2e/b6/f5/2eb6f5411b093a0c1294738e0e34b706.jpg" alt="Guard" style={{ width: "100%", height: "100%", borderRadius: "14px", objectFit: "cover" }} />,
    status: "Coming Q3 2025",
    color: "#7a94b0",
    description: "OrvaIt Guard brings enterprise-grade AI security monitoring to mid-size Sri Lankan businesses at a price that actually makes sense. Continuous threat detection, compliance monitoring, and automated incident response — 24/7.",
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
    usecases: ["Financial institutions protecting customer data", "Healthcare managing patient records", "Remote-first teams securing endpoints", "Enterprises meeting compliance requirements"],
    pricing: "Pricing TBA",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero mesh-bg grid-bg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 600, height: 600, top: -200, right: -100, background: "rgba(0,201,167,0.07)", animationDelay: "0s" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="label fade-up" style={{ marginBottom: 18 }}>Our products</p>
          <h1 className="display-lg fade-up-d1" style={{ maxWidth: 680, marginBottom: 28 }}>
            Software that<br /><span className="teal">solves real problems.</span>
          </h1>
          <p className="fade-up-d2" style={{ color: "var(--gray-2)", fontWeight: 300, fontSize: "1.08rem", maxWidth: 520, lineHeight: 1.85 }}>
            Every OrvaIt product starts with a real pain point that Sri Lankan businesses face every day. Then we build AI into the solution from day one.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <div style={{ padding: "40px 0", background: "var(--navy)", position: "relative", zIndex: 10 }}>
        <div className="container" style={{ textAlign: "center", marginBottom: "60px" }}>
           <h2 className="display-md fade-up-d2">Our <span className="teal fade-up-d3">Suite</span></h2>
        </div>
      </div>
      {products.map((p, i) => (
        <section key={p.id} className="section" style={{ background: i % 2 === 1 ? "var(--navy-2)" : "var(--navy)", position: "relative", overflow: "hidden", padding: "100px 0" }}>
          {i % 2 === 0 && <div className="orb" style={{ width: 500, height: 500, top: "20%", right: "-10%", background: "rgba(0,201,167,0.05)", filter: "blur(60px)", animationDelay: `${-i * 2}s` }} />}
          {i % 2 === 1 && <div className="orb" style={{ width: 500, height: 500, top: "20%", left: "-10%", background: "rgba(0,201,167,0.03)", filter: "blur(60px)", animationDelay: `${-i * 2}s` }} />}
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", direction: i % 2 === 1 ? "rtl" : "ltr" }}>

              <ScrollReveal direction={i % 2 === 1 ? "right" : "left"} threshold={0.06}>
                <div style={{ direction: "ltr", paddingRight: i % 2 === 0 ? "20px" : "0", paddingLeft: i % 2 === 1 ? "20px" : "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(0,201,167,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", border: "1px solid rgba(0,201,167,0.2)", boxShadow: "0 0 20px rgba(0,201,167,0.1)" }}>{p.icon}</div>
                    <span className="chip" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>{p.tag}</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, padding: "4px 14px", borderRadius: 100, border: `1px solid ${p.status === "Available" ? "rgba(0,201,167,0.4)" : "rgba(255,255,255,0.1)"}`, color: p.status === "Available" ? "var(--teal)" : "var(--gray-3)", background: p.status === "Available" ? "rgba(0,201,167,0.05)" : "transparent", boxShadow: p.status === "Available" ? "0 0 10px rgba(0,201,167,0.1)" : "none" }}>
                      {p.status}
                    </span>
                  </div>
                  <h2 className="display-md" style={{ marginBottom: 14, letterSpacing: "-0.02em" }}>{p.name}</h2>
                  <p style={{ color: "var(--teal)", fontFamily: "var(--font-display)", fontSize: "1.15rem", fontStyle: "italic", marginBottom: 24, fontWeight: 500 }}>
                    &ldquo;{p.tagline}&rdquo;
                  </p>
                  <p style={{ color: "var(--gray-2)", lineHeight: 1.8, marginBottom: 35, fontWeight: 300, fontSize: "1.05rem", paddingRight: i % 2 === 0 ? "10%" : "0" }}>
                    {p.description}
                  </p>
                  <div style={{ background: "linear-gradient(135deg, rgba(0,201,167,0.1) 0%, rgba(0,201,167,0.02) 100%)", backdropFilter: "blur(10px)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 16, padding: "18px 24px", marginBottom: 35, display: "inline-block", boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}>
                    <p style={{ fontSize: "0.75rem", color: "var(--gray-1)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>Starting at</p>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", color: p.status === "Available" ? "var(--teal)" : "var(--gray-3)" }}>{p.pricing}</p>
                  </div>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <Link href={p.id === "recruit" && p.status === "Available" ? "/products/recruit" : "/contact"} className="btn-primary" style={{ padding: "14px 28px", fontSize: "1rem" }}>
                      {p.status === "Available" ? "Get started →" : "Join waitlist"}
                    </Link>
                    <Link href="/contact" className="btn-outline" style={{ padding: "14px 28px", fontSize: "1rem" }}>Request demo</Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction={i % 2 === 1 ? "left" : "right"} delay={100} threshold={0.06}>
                <div style={{ direction: "ltr", position: "relative" }}>
                  
                  {/* Abstract glowing background behind features */}
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: `radial-gradient(circle, ${p.status === "Available" ? "rgba(0,201,167,0.15)" : "rgba(122,148,176,0.15)"} 0%, transparent 70%)`, zIndex: -1, filter: "blur(40px)" }} />

                  <div className="glass-card" style={{ padding: "40px", marginBottom: 24, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--white)", textTransform: "uppercase", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--teal)", display: "inline-block", boxShadow: "0 0 10px var(--teal)" }} />
                      Core Features
                    </p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                      {p.features.map(f => (
                        <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 14, fontSize: "0.95rem", color: "var(--gray-2)", lineHeight: 1.5 }}>
                          <span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0, marginTop: 2, background: "rgba(0,201,167,0.1)", width: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem" }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-card" style={{ padding: "24px 40px", border: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.2)", borderRadius: "24px" }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--gray-3)", textTransform: "uppercase", marginBottom: 16 }}>
                      Built for
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {p.usecases.map(u => (
                        <span key={u} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "8px 16px", fontSize: "0.85rem", color: "var(--gray-1)" }}>
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* PRICING TABLE */}
      <section className="section" style={{ background: "var(--navy-2)" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p className="label" style={{ marginBottom: 16 }}>Pricing overview</p>
              <h2 className="display-md">Simple, transparent pricing.</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="scale" threshold={0.08}>
            <div className="glass-card" style={{ padding: "8px", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                <thead>
                  <tr style={{ borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
                    {["Product", "Starter", "Growth", "Enterprise"].map(h => (
                      <th key={h} style={{ textAlign: "left", padding: "16px 20px", color: "var(--gray-3)", fontWeight: 600, fontFamily: "var(--font-display)", fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "OrvaIt Recruit", starter: "Rs. 9,900",  growth: "Rs. 24,900", enterprise: "Custom" },
                    { name: "OrvaIt Insight", starter: "Rs. 14,900", growth: "Rs. 34,900", enterprise: "Custom" },
                    { name: "OrvaIt Flow",    starter: "Rs. 19,900", growth: "Rs. 44,900", enterprise: "Custom" },
                    { name: "OrvaIt Guard",   starter: "—",           growth: "Coming Q3",  enterprise: "Coming Q3" },
                  ].map((row, i) => (
                    <tr key={row.name} style={{ borderBottom: "0.5px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                      <td style={{ padding: "16px 20px", fontWeight: 600, fontFamily: "var(--font-display)" }}>{row.name}</td>
                      <td style={{ padding: "16px 20px", color: "var(--gray-2)" }}>{row.starter}</td>
                      <td style={{ padding: "16px 20px", color: "var(--teal)", fontWeight: 600 }}>{row.growth}</td>
                      <td style={{ padding: "16px 20px", color: "var(--gray-3)" }}>{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
          <p style={{ textAlign: "center", color: "var(--gray-4)", fontSize: "0.8rem", marginTop: 20 }}>
            All prices in LKR per month. Annual billing available at 20% discount. Contact us for enterprise quotes.
          </p>
        </div>
      </section>
    </>
  );
}
