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
    icon: "👥",
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
    icon: "📊",
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
    icon: "⚡",
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
    icon: "🔒",
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
      {products.map((p, i) => (
        <section key={p.id} className="section" style={{ background: i % 2 === 1 ? "var(--navy-2)" : "var(--navy)", position: "relative", overflow: "hidden" }}>
          {i % 2 === 0 && <div className="orb" style={{ width: 400, height: 400, top: "10%", right: "-5%", background: "rgba(0,201,167,0.04)", animationDelay: `${-i * 2}s` }} />}
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "flex-start", direction: i % 2 === 1 ? "rtl" : "ltr" }}>

              <ScrollReveal direction={i % 2 === 1 ? "right" : "left"} threshold={0.06}>
                <div style={{ direction: "ltr" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                    <span style={{ fontSize: "38px" }}>{p.icon}</span>
                    <span className="chip">{p.tag}</span>
                    <span style={{ fontSize: "0.7rem", fontWeight: 500, padding: "3px 12px", borderRadius: 100, border: `0.5px solid ${p.status === "Available" ? "rgba(0,201,167,0.3)" : "rgba(255,255,255,0.1)"}`, color: p.status === "Available" ? "var(--teal)" : "var(--gray-3)" }}>
                      {p.status}
                    </span>
                  </div>
                  <h2 className="display-md" style={{ marginBottom: 14 }}>{p.name}</h2>
                  <p style={{ color: "var(--teal)", fontFamily: "var(--font-display)", fontSize: "1.05rem", fontStyle: "italic", marginBottom: 22 }}>
                    &ldquo;{p.tagline}&rdquo;
                  </p>
                  <p style={{ color: "var(--gray-2)", lineHeight: 1.85, marginBottom: 30, fontWeight: 300 }}>
                    {p.description}
                  </p>
                  <div style={{ background: "rgba(0,201,167,0.06)", border: "0.5px solid rgba(0,201,167,0.15)", borderRadius: 12, padding: "14px 20px", marginBottom: 30, display: "inline-block" }}>
                    <p style={{ fontSize: "0.72rem", color: "var(--gray-3)", marginBottom: 3 }}>Starting at</p>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", color: p.status === "Available" ? "var(--teal)" : "var(--gray-3)" }}>{p.pricing}</p>
                  </div>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Link href={p.id === "recruit" && p.status === "Available" ? "/products/recruit" : "/contact"} className="btn-primary">
                      {p.status === "Available" ? "Get started" : "Join waitlist"}
                    </Link>
                    <Link href="/contact" className="btn-outline">Request demo</Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction={i % 2 === 1 ? "left" : "right"} delay={100} threshold={0.06}>
                <div style={{ direction: "ltr" }}>
                  <div className="glass-card" style={{ padding: "28px", marginBottom: 20 }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", color: "var(--gray-3)", textTransform: "uppercase", marginBottom: 20 }}>
                      Features
                    </p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 13 }}>
                      {p.features.map(f => (
                        <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "0.88rem", color: "var(--gray-2)" }}>
                          <span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", color: "var(--gray-3)", textTransform: "uppercase", marginBottom: 14 }}>
                      Built for
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {p.usecases.map(u => (
                        <span key={u} style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.09)", borderRadius: 8, padding: "7px 14px", fontSize: "0.8rem", color: "var(--gray-2)" }}>
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
