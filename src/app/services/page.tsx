import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Software Development Services in Sri Lanka | OrvaIT Colombo",
  description:
    "OrvaIT offers web development, mobile app development, AI consulting, custom software development, and business automation services in Sri Lanka. Based in Colombo — serving businesses island-wide.",
  keywords: [
    "software development services Sri Lanka",
    "web development services Colombo",
    "mobile app development Sri Lanka",
    "AI consulting Sri Lanka",
    "custom software development Colombo",
    "business automation Sri Lanka",
    "IT services Colombo",
    "software outsourcing Sri Lanka",
    "app development services Sri Lanka",
    "digital transformation Colombo",
  ],
  alternates: { canonical: "https://orvait.com/services" },
  openGraph: {
    title: "Software Development Services in Sri Lanka | OrvaIT Colombo",
    description:
      "Web development, mobile apps, AI consulting, and business automation services from OrvaIT — a software company based in Colombo, Sri Lanka.",
    url: "https://orvait.com/services",
    siteName: "OrvaIT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services in Sri Lanka | OrvaIT",
    description:
      "Web, mobile, AI, and automation services from OrvaIT — Sri Lanka's software development company based in Colombo.",
  },
};

const services = [
  {
    icon: <img src="https://i.pinimg.com/736x/70/14/94/701494637e72a9942d059c966160c125.jpg" alt="AI Strategy & Consulting" style={{ width: "140px", height: "140px", borderRadius: "12px", objectFit: "cover", display: "block" }} />,
    title: "AI Strategy & Consulting",
    desc: "Not sure where AI fits into your business? We audit your current processes, identify the highest-impact opportunities, and deliver a practical roadmap — not a 200-page report you'll never read.",
    deliverables: ["AI readiness assessment", "Opportunity mapping workshop", "ROI-prioritised roadmap", "Vendor and build vs buy analysis"],
    duration: "2–4 weeks",
    ideal: "Companies exploring AI for the first time",
  },
  {
    icon: <img src="https://i.pinimg.com/736x/bf/e0/3e/bfe03e87eacbed794ab1b58f567c00d1.jpg" alt="Custom AI Software Development" style={{ width: "140px", height: "140px", borderRadius: "12px", objectFit: "cover", display: "block" }} />,
    title: "Custom AI Software Development",
    desc: "Off-the-shelf software doesn't fit your workflow? We design and build bespoke AI-powered applications from scratch — fully owned by you, built to scale.",
    deliverables: ["Full-stack web or mobile app", "Custom AI/ML models", "API integrations", "Deployment + 6-month support"],
    duration: "6–16 weeks",
    ideal: "Businesses with unique operational needs",
  },
  {
    icon: <img src="https://i.pinimg.com/736x/5d/df/46/5ddf463a15359ec30e50c1f8eba82d9e.jpg" alt="Process Automation" style={{ width: "140px", height: "140px", borderRadius: "12px", objectFit: "cover", display: "block" }} />,
    title: "Process Automation",
    desc: "We map, optimise, and automate your most time-consuming workflows — from invoice processing to employee onboarding — reducing manual effort by 60–90%.",
    deliverables: ["Process audit and mapping", "Automation architecture design", "Build and testing", "Team training and handover"],
    duration: "4–8 weeks",
    ideal: "Ops-heavy teams drowning in manual tasks",
  },
  {
    icon: <img src="https://i.pinimg.com/736x/6c/46/1b/6c461bc61ae1012c6fd6fec0a5eef284.jpg" alt="Data Analytics & BI" style={{ width: "140px", height: "140px", borderRadius: "12px", objectFit: "cover", display: "block" }} />,
    title: "Data Analytics & BI",
    desc: "Your data is sitting in spreadsheets, ERPs, and databases — doing nothing. We connect it all, build AI models on top, and give you a live view of your business health.",
    deliverables: ["Data audit and architecture", "ETL pipeline setup", "Dashboard design and build", "AI insights layer"],
    duration: "4–10 weeks",
    ideal: "Decision-makers flying blind without data",
  },
  {
    icon: <img src="https://i.pinimg.com/736x/04/62/d6/0462d6a689202be7955ff5f99bdab462.jpg" alt="Systems Integration" style={{ width: "140px", height: "140px", borderRadius: "12px", objectFit: "cover", display: "block" }} />,
    title: "Systems Integration",
    desc: "Your CRM doesn't talk to your ERP. Your WhatsApp inquiries never reach your sales team. We connect your tools into a single, intelligent operating system.",
    deliverables: ["Integration architecture", "API development", "Data sync and transformation", "Monitoring and alerting"],
    duration: "3–8 weeks",
    ideal: "Companies running 5+ disconnected tools",
  },
  {
    icon: <img src="https://i.pinimg.com/736x/9f/06/ae/9f06aee1108bc82ef7595a2abd91fbf8.jpg" alt="AI Training & Workshops" style={{ width: "140px", height: "140px", borderRadius: "12px", objectFit: "cover", display: "block" }} />,
    title: "AI Training & Workshops",
    desc: "Upskill your team to work alongside AI tools confidently. From executive briefings to hands-on technical workshops — we teach your people, not just your software.",
    deliverables: ["Executive AI briefing", "Team capability assessment", "Hands-on tool training", "Ongoing Q&A support"],
    duration: "1–5 days",
    ideal: "Leadership teams and operational staff",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero mesh-bg grid-bg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 600, height: 600, top: -200, left: -100, background: "rgba(0,201,167,0.07)", animationDelay: "-3s" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="label fade-up" style={{ marginBottom: 18 }}>What we do</p>
          <h1 className="display-lg fade-up-d1" style={{ maxWidth: 680, marginBottom: 28 }}>
            AI expertise,<br /><span className="teal">delivered end-to-end.</span>
          </h1>
          <p className="fade-up-d2" style={{ color: "var(--gray-2)", fontWeight: 300, fontSize: "1.08rem", maxWidth: 520, lineHeight: 1.85 }}>
            Whether you need a strategy, a custom build, or ongoing automation — OrvaIt brings the technical depth and business understanding to make it real.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section">
        <div className="container">
          <div className="services-cards-grid">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} direction="up" delay={i % 2 === 0 ? 0 : 100} threshold={0.06}>
                <div className="card" style={{ padding: "36px", height: "100%" }}>
                  <div style={{ marginBottom: "20px" }}>{s.icon}</div>
                  <span className="chip" style={{ marginBottom: 16, display: "inline-block" }}>{s.duration}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, marginBottom: 14 }}>{s.title}</h3>
                  <p style={{ color: "var(--gray-2)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 24, fontWeight: 300 }}>{s.desc}</p>

                  <div style={{ marginBottom: 18 }}>
                    <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--gray-3)", textTransform: "uppercase", marginBottom: 12 }}>Deliverables</p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {s.deliverables.map(d => (
                        <li key={d} style={{ display: "flex", gap: 10, fontSize: "0.86rem", color: "var(--gray-2)" }}>
                          <span style={{ color: "var(--teal)", flexShrink: 0 }}>→</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)", paddingTop: 16, marginTop: "auto" }}>
                    <p style={{ fontSize: "0.78rem", color: "var(--gray-4)" }}>
                      Ideal for: <span style={{ color: "var(--gray-3)" }}>{s.ideal}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ORVAIT */}
      <section className="section" style={{ background: "var(--navy-2)", position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 500, height: 500, top: "20%", right: "-5%", background: "rgba(0,201,167,0.04)", animationDelay: "-4s" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div className="section-heading-mb">
              <p className="label" style={{ marginBottom: 16 }}>Why us</p>
              <h2 className="display-md">What makes OrvaIt different.</h2>
            </div>
          </ScrollReveal>
          <div className="col-3-grid">
            {[
              { icon: "🇱🇰", title: "Built for Sri Lanka",    desc: "We understand local business culture, regulatory environment, and the practical constraints that global vendors ignore." },
              { icon: "⚡",   title: "Fast delivery",         desc: "No 18-month implementation timelines. Our sprints deliver working software in weeks, with demos every step of the way." },
              { icon: "🧠",  title: "AI-native team",        desc: "Every engineer on our team has production AI experience. We don't outsource or resell — we build." },
              { icon: "💰",  title: "LKR pricing",           desc: "All services priced in Sri Lankan Rupees. No USD invoices, no currency risk, no hidden international fees." },
              { icon: "🤝",  title: "Long-term partnership", desc: "We don't disappear after launch. Ongoing support, model retraining, and feature development come standard." },
              { icon: "📈",  title: "ROI focus",             desc: "Every engagement is scoped around measurable business outcomes — hours saved, revenue generated, errors reduced." },
            ].map((w, i) => (
              <ScrollReveal key={w.title} direction="up" delay={i * 70} threshold={0.06}>
                <div className="card" style={{ padding: "28px" }}>
                  <div style={{ fontSize: "30px", marginBottom: 16 }}>{w.icon}</div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: 10 }}>{w.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--gray-3)", lineHeight: 1.75 }}>{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="split-grid" style={{ alignItems: "center" }}>
            <ScrollReveal direction="left">
              <div>
                <p className="label" style={{ marginBottom: 18 }}>Industries</p>
                <h2 className="display-md" style={{ marginBottom: 28 }}>
                  We work across<br /><span className="teal">every sector.</span>
                </h2>
                <p style={{ color: "var(--gray-2)", lineHeight: 1.85, fontWeight: 300 }}>
                  OrvaIt&apos;s AI solutions are sector-agnostic — but our team has deep domain knowledge in the industries that are growing fastest in Sri Lanka.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80} threshold={0.06}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {["Financial Services", "Technology", "Healthcare", "Retail & E-commerce", "Manufacturing", "Education", "Logistics", "Professional Services"].map(ind => (
                  <div key={ind} style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "16px 18px", fontSize: "0.87rem", color: "var(--gray-2)", display: "flex", alignItems: "center", gap: 10, transition: "all 0.2s" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--teal)", flexShrink: 0 }} />
                    {ind}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: "var(--navy-2)", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <ScrollReveal direction="up">
            <h2 className="display-md" style={{ marginBottom: 20 }}>
              Not sure which service fits?<br /><span className="teal">Let&apos;s figure it out together.</span>
            </h2>
            <p style={{ color: "var(--gray-2)", marginBottom: 40, fontWeight: 300, maxWidth: 480, margin: "0 auto 40px" }}>
              Book a free 30-minute call. We&apos;ll listen, ask the right questions, and tell you honestly what we think will help.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a free call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
