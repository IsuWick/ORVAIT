import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About OrvaIT | Software Company Founded in Colombo, Sri Lanka",
  description:
    "OrvaIT is an AI-first software company founded in Colombo, Sri Lanka in 2025. We build intelligent software products for Sri Lankan businesses — websites, mobile apps, AI tools, and POS systems. Learn our story.",
  keywords: [
    "about OrvaIT",
    "software company Colombo Sri Lanka",
    "IT company founded Sri Lanka",
    "AI company Colombo",
    "tech startup Sri Lanka",
    "software startup Colombo",
    "Sri Lanka software company team",
    "OrvaIT story",
    "technology company Sri Lanka",
  ],
  alternates: { canonical: "https://orvait.com/about" },
  openGraph: {
    title: "About OrvaIT | Software Company Founded in Colombo, Sri Lanka",
    description:
      "OrvaIT was founded in Colombo, Sri Lanka in 2025 with one mission: make AI accessible to Sri Lankan businesses. Learn about our story, values, and team.",
    url: "https://orvait.com/about",
    siteName: "OrvaIT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About OrvaIT | Software Company Founded in Colombo, Sri Lanka",
    description:
      "OrvaIT — an AI-first software company founded in Colombo, Sri Lanka. Building intelligent products for modern businesses.",
  },
};

const values = [
  { icon: "🎯", title: "Clarity over complexity",  desc: "Good AI should simplify decisions, not create new confusion. We obsess over making our products genuinely easy to use." },
  { icon: "🏗️", title: "Build to last",            desc: "We don't ship quick hacks. Every system we deliver is designed to scale, maintain, and improve over time." },
  { icon: "🤝", title: "Honest partnerships",      desc: "We tell clients what they need to hear, not what they want to hear. That's how trust gets built." },
  { icon: "🇱🇰", title: "Sri Lanka first",         desc: "We're building for our home market first. That means understanding local realities, not copy-pasting Western solutions." },
  { icon: "📐", title: "Precision in craft",        desc: "The quality of our code, design, and writing reflects our respect for the people using what we build." },
  { icon: "🚀", title: "Move with urgency",         desc: "Startups don't have time for slow consultants. We move fast, communicate daily, and deliver on schedule." },
];

const timeline = [
  { year: "2025",    title: "Founded",                  desc: "OrvaIt was founded in Colombo with a single mission: make AI accessible to Sri Lankan businesses." },
  { year: "2025 Q4", title: "OrvaIt Recruit launched",  desc: "Our first product — a timed, proctored assessment platform — launched and onboarded its first 10 clients." },
  { year: "2026 Q1", title: "OrvaIt Insight & Flow",    desc: "We expanded our product suite with business intelligence and workflow automation tools." },
  { year: "2026 Q2", title: "40+ companies served",     desc: "Crossed 40 active clients across technology, finance, retail, and professional services in Sri Lanka." },
  { year: "2026 Q3", title: "OrvaIt Guard (coming)",    desc: "AI cybersecurity monitoring — our most ambitious product — launches this quarter." },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero mesh-bg grid-bg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 600, height: 600, top: -150, right: 50, background: "rgba(0,201,167,0.07)", animationDelay: "-2s" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="label fade-up" style={{ marginBottom: 18 }}>Our story</p>
          <h1 className="display-lg fade-up-d1" style={{ maxWidth: 720, marginBottom: 28 }}>
            We started because<br /><span className="teal">Sri Lanka deserved better software.</span>
          </h1>
          <p className="fade-up-d2" style={{ color: "var(--gray-2)", fontWeight: 300, fontSize: "1.08rem", maxWidth: 560, lineHeight: 1.85 }}>
            OrvaIt was built from frustration — watching talented businesses struggle with tools that weren't built for them, workflows that hadn't changed in a decade, and AI that promised everything but delivered nothing practical.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section" style={{ background: "var(--navy-2)", position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 500, height: 500, bottom: "-10%", left: "-5%", background: "rgba(0,201,167,0.05)", animationDelay: "-5s" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="split-grid" style={{ alignItems: "center" }}>
            <ScrollReveal direction="left">
              <div>
                <p className="label" style={{ marginBottom: 18 }}>Mission</p>
                <h2 className="display-md" style={{ marginBottom: 28 }}>
                  Make AI genuinely useful<br />for <span className="teal">real businesses.</span>
                </h2>
                <p style={{ color: "var(--gray-2)", lineHeight: 1.88, marginBottom: 22, fontWeight: 300 }}>
                  There is no shortage of AI hype. There is a massive shortage of AI that actually works inside a real company — with real data, real constraints, and real people who need to trust what the system is telling them.
                </p>
                <p style={{ color: "var(--gray-2)", lineHeight: 1.88, fontWeight: 300 }}>
                  OrvaIt exists to close that gap. We build software that&apos;s intelligent enough to be genuinely useful, and simple enough that your team will actually use it.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100} threshold={0.06}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Products in market", value: "3" },
                  { label: "Companies served",   value: "40+" },
                  { label: "Team members",       value: "12" },
                  { label: "Founded",            value: "2025" },
                ].map(s => (
                  <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 12, transition: "all 0.3s var(--ease-out)" }}>
                    <span style={{ color: "var(--gray-3)", fontSize: "0.9rem" }}>{s.label}</span>
                    <span className="stat-num" style={{ fontSize: "2.2rem" }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-heading-mb">
              <p className="label" style={{ marginBottom: 16 }}>How we work</p>
              <h2 className="display-md">Values we actually live by.</h2>
            </div>
          </ScrollReveal>
          <div className="col-3-grid">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} direction="up" delay={i * 70} threshold={0.06}>
                <div className="card" style={{ padding: "32px" }}>
                  <div style={{ fontSize: "30px", marginBottom: 18 }}>{v.icon}</div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: 12 }}>{v.title}</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--gray-3)", lineHeight: 1.78 }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section" style={{ background: "var(--navy-2)", position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 400, height: 400, top: "30%", right: "-5%", background: "rgba(0,201,167,0.04)", animationDelay: "-7s" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="split-grid" style={{ alignItems: "flex-start" }}>
            <ScrollReveal direction="left">
              <div>
                <p className="label" style={{ marginBottom: 18 }}>Timeline</p>
                <h2 className="display-md" style={{ marginBottom: 28 }}>
                  How we got<br /><span className="teal">here.</span>
                </h2>
                <p style={{ color: "var(--gray-2)", fontWeight: 300, lineHeight: 1.85 }}>
                  We&apos;re a young company moving fast. Here&apos;s what we&apos;ve shipped and where we&apos;re headed next.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100} threshold={0.06}>
              <div style={{ position: "relative", paddingLeft: 36, borderLeft: "1px solid rgba(0,201,167,0.2)" }}>
                {timeline.map((t, i) => (
                  <div key={t.year} style={{ marginBottom: i === timeline.length - 1 ? 0 : 36, position: "relative" }}>
                    <div style={{ position: "absolute", left: -44, top: 5, width: 16, height: 16, borderRadius: "50%", background: i === timeline.length - 1 ? "transparent" : "var(--teal)", border: i === timeline.length - 1 ? "1.5px solid var(--teal)" : "none", boxShadow: i < timeline.length - 1 ? "0 0 12px rgba(0,201,167,0.5)" : "none" }} />
                    <p style={{ fontSize: "0.72rem", color: "var(--teal)", fontWeight: 600, letterSpacing: "0.1em", marginBottom: 6, fontFamily: "var(--font-display)" }}>{t.year}</p>
                    <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", marginBottom: 6 }}>{t.title}</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--gray-3)", lineHeight: 1.72 }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-heading-mb">
              <p className="label" style={{ marginBottom: 16 }}>Team</p>
              <h2 className="display-md">The people building OrvaIt.</h2>
            </div>
          </ScrollReveal>
          <div className="col-4-grid">
            {[
              { img: "/isurindu.png", name: "Isurindu Wickramasinghe", role: "Founder & Owner", focus: "Product vision & partnerships" },
              { img: "/ravidu.jpeg", name: "Ravidu Senavirathne", role: "CEO", focus: "AI architecture & engineering" },
              { img: "/savidya.jpeg", name: "Savidya Anthoney", role: "Head of Design", focus: "UX & product design" },
              { img: "/jithmi.jpg", name: "Jithmi Hettiarachchi", role: "Head of Sales", focus: "Client success & growth" },
            ].map((m, i) => (
              <ScrollReveal key={m.name} direction="up" delay={i * 80} threshold={0.06}>
                <div className="card" style={{ padding: "28px", textAlign: "center" }}>
                  <img src={m.img} alt={m.name} style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 18px", display: "block", border: "2px solid rgba(0,201,167,0.3)" }} />
                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", marginBottom: 5 }}>{m.name}</h4>
                  <p style={{ fontSize: "0.82rem", color: "var(--teal)", marginBottom: 6 }}>{m.role}</p>
                  <p style={{ fontSize: "0.78rem", color: "var(--gray-4)" }}>{m.focus}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="fade" delay={200}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/contact" className="btn-outline">
                We&apos;re hiring — view openings
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: "var(--navy-2)", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <ScrollReveal direction="up">
            <h2 className="display-md" style={{ marginBottom: 20 }}>
              Want to work with us<br />or <span className="teal">join the team?</span>
            </h2>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 36 }}>
              <Link href="/contact" className="btn-primary">Get in touch</Link>
              <Link href="/services" className="btn-outline">View our services</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
