import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="mesh-bg grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>

        {/* Animated orbs */}
        <div className="orb" style={{ width: 800, height: 800, top: -300, right: -250, background: "rgba(0,201,167,0.07)", animationDelay: "0s" }} />
        <div className="orb" style={{ width: 600, height: 600, bottom: -200, left: -150, background: "rgba(0,70,180,0.06)", animationDelay: "-5s", animationDuration: "16s" }} />
        <div className="orb" style={{ width: 320, height: 320, top: "42%", left: "42%", background: "rgba(0,201,167,0.05)", animationDelay: "-9s", animationDuration: "18s" }} />

        {/* Decorative vertical lines */}
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, transparent 0%, rgba(0,201,167,0.08) 30%, rgba(0,201,167,0.08) 70%, transparent 100%)", pointerEvents: "none" }} />

        <div className="container hero-container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="hero-grid">

            {/* ── LEFT: Copy ── */}
            <div>
              <div className="pill fade-up" style={{ marginBottom: 36 }}>
                <span className="pill-dot" />
                AI-Powered Software · Colombo, Sri Lanka
              </div>

              <h1 className="display-xl fade-up-d1">
                Intelligence<br />
                <span className="teal">Built</span> Into<br />
                Every Layer.
              </h1>

              <p className="fade-up-d2" style={{ fontSize: "1.12rem", color: "var(--gray-2)", maxWidth: 480, marginTop: 32, marginBottom: 48, lineHeight: 1.82, fontWeight: 300 }}>
                OrvaIt builds AI-native software products and enterprise solutions that help Sri Lankan businesses hire smarter, operate faster, and grow with confidence.
              </p>

              <div className="fade-up-d3" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/products" className="btn-primary">
                  Explore products <ArrowIcon />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Talk to us
                </Link>
              </div>

              {/* Inline micro-stats */}
              <div className="fade-up-d4 hero-stats">
                {[
                  { num: "40+", label: "Companies" },
                  { num: "3×",  label: "Faster hiring" },
                  { num: "98%", label: "Satisfaction" },
                ].map((s, i) => (
                  <div key={s.num} style={{ display: "flex", alignItems: "center", gap: 32 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.9rem", fontWeight: 800, color: "var(--teal)", letterSpacing: "-0.05em", lineHeight: 1 }}>{s.num}</div>
                      <p style={{ fontSize: "0.7rem", color: "var(--gray-4)", letterSpacing: "0.1em", marginTop: 5, textTransform: "uppercase" }}>{s.label}</p>
                    </div>
                    {i < 2 && <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.08)" }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Dashboard Mockup ── */}
            <div className="fade-up-d2 hero-mockup-wrap" style={{ position: "relative" }}>
              {/* Main card */}
              <div style={{
                background: "rgba(9,21,39,0.75)",
                backdropFilter: "blur(24px)",
                border: "0.5px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                padding: 28,
                fontFamily: "monospace",
                animation: "float 6s ease-in-out infinite",
                boxShadow: "0 48px 100px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(0,201,167,0.1), 0 0 60px rgba(0,201,167,0.04)",
              }}>
                {/* Window chrome */}
                <div style={{ display: "flex", gap: 6, marginBottom: 22, alignItems: "center" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                  <div style={{ flex: 1, height: 22, borderRadius: 6, background: "rgba(255,255,255,0.04)", marginLeft: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "0.62rem", color: "var(--gray-4)", letterSpacing: "0.05em" }}>OrvaIt Recruit — Dashboard</span>
                  </div>
                </div>

                {/* Mini stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 18 }}>
                  {[
                    { label: "Applied", value: "247", trend: "+12%" },
                    { label: "Screened", value: "89",  trend: "+8%"  },
                    { label: "Shortlisted", value: "14",  trend: "67%↑" },
                  ].map(s => (
                    <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px 14px" }}>
                      <p style={{ fontSize: "0.6rem", color: "var(--gray-4)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</p>
                      <p style={{ fontSize: "1.3rem", fontWeight: 700, fontFamily: "var(--font-display)", color: "var(--white)", letterSpacing: "-0.02em" }}>{s.value}</p>
                      <p style={{ fontSize: "0.6rem", color: "var(--teal)", marginTop: 3 }}>{s.trend}</p>
                    </div>
                  ))}
                </div>

                {/* Candidate rows */}
                <div style={{ fontSize: "0.78rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "0 0 8px", borderBottom: "0.5px solid rgba(255,255,255,0.06)", marginBottom: 6 }}>
                    {["Candidate", "Score", "Status"].map(h => (
                      <span key={h} style={{ color: "var(--gray-4)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{h}</span>
                    ))}
                  </div>
                  {[
                    { name: "Kavinda Perera",    score: "18/20", status: "Shortlisted", color: "#00c9a7" },
                    { name: "Dilani Silva",       score: "15/20", status: "Shortlisted", color: "#00c9a7" },
                    { name: "Roshan Fernando",    score: "11/20", status: "Review",      color: "#febc2e" },
                    { name: "Amara Jayasinghe",   score: "6/20",  status: "Declined",    color: "#ff5f57" },
                  ].map(c => (
                    <div key={c.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: "0.5px solid rgba(255,255,255,0.04)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(0,201,167,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.58rem", color: "var(--teal)", fontWeight: 700, flexShrink: 0 }}>
                          {c.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span style={{ color: "var(--gray-2)", fontSize: "0.76rem" }}>{c.name}</span>
                      </div>
                      <span style={{ color: "var(--white)", fontWeight: 600 }}>{c.score}</span>
                      <span style={{ color: c.color, fontSize: "0.72rem", fontWeight: 500 }}>{c.status}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 14, background: "rgba(0,201,167,0.08)", border: "0.5px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: "10px 14px", display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ color: "var(--teal)", fontSize: "1.1rem" }}>✓</span>
                  <div>
                    <p style={{ color: "var(--teal)", fontSize: "0.74rem", fontWeight: 600 }}>AI Analysis Complete</p>
                    <p style={{ color: "var(--gray-3)", fontSize: "0.66rem", marginTop: 2 }}>Saved ~12 hours of manual screening</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="hero-badge" style={{ position: "absolute", top: -22, right: -24, background: "rgba(6,12,25,0.92)", backdropFilter: "blur(16px)", border: "0.5px solid rgba(0,201,167,0.3)", borderRadius: 12, padding: "10px 16px", animation: "float 5s 2s ease-in-out infinite", boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 20px rgba(0,201,167,0.1)" }}>
                <p style={{ fontSize: "0.62rem", color: "var(--gray-4)", marginBottom: 3 }}>Time saved</p>
                <p style={{ fontSize: "1.3rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--teal)", letterSpacing: "-0.03em" }}>12h</p>
              </div>
              <div className="hero-badge" style={{ position: "absolute", bottom: -20, left: -28, background: "rgba(6,12,25,0.92)", backdropFilter: "blur(16px)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "10px 16px", animation: "float 7s 1s ease-in-out infinite", boxShadow: "0 8px 32px rgba(0,0,0,0.45)" }}>
                <p style={{ fontSize: "0.62rem", color: "var(--gray-4)", marginBottom: 3 }}>Candidates assessed</p>
                <p style={{ fontSize: "1.3rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--white)", letterSpacing: "-0.03em" }}>247</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, opacity: 0.5 }}>
          <div style={{ width: 1, height: 52, background: "linear-gradient(180deg, transparent, rgba(0,201,167,0.9))", animation: "shimmerLine 2s ease-in-out infinite" }} />
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", color: "var(--gray-4)", textTransform: "uppercase" }}>Scroll</p>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────────── */}
      <ScrollReveal direction="fade">
        <section className="section-xs" style={{ background: "var(--navy-2)", borderTop: "0.5px solid rgba(255,255,255,0.05)", borderBottom: "0.5px solid rgba(255,255,255,0.05)" }}>
          <div className="container">
            <div className="stats-grid">
              {[
                { num: "40+",  label: "Companies served",    sub: "across Sri Lanka" },
                { num: "3×",   label: "Faster hiring",       sub: "vs. manual screening" },
                { num: "98%",  label: "Client satisfaction", sub: "average NPS score" },
                { num: "24/7", label: "Platform uptime",     sub: "SLA guaranteed" },
              ].map((s, i) => (
                <div key={s.num} style={{ textAlign: "center", padding: "32px 20px", borderRight: i < 3 ? "0.5px solid rgba(255,255,255,0.07)" : "none" }}>
                  <div className="stat-num">{s.num}</div>
                  <p style={{ color: "var(--white)", fontSize: "0.88rem", fontWeight: 500, marginTop: 10 }}>{s.label}</p>
                  <p style={{ color: "var(--gray-4)", fontSize: "0.72rem", marginTop: 4 }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FEATURED PRODUCT: RECRUIT ──────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-heading-mb">
              <p className="label" style={{ marginBottom: 16 }}>Our products</p>
              <h2 className="display-lg">
                A suite built for<br /><span className="teal">real business problems.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Flagship card */}
          <ScrollReveal direction="scale" threshold={0.08}>
            <div className="product-featured-grid" style={{ background: "linear-gradient(135deg, rgba(0,201,167,0.09) 0%, rgba(0,201,167,0.03) 50%, rgba(0,70,180,0.04) 100%)", border: "0.5px solid rgba(0,201,167,0.22)", borderRadius: 28, marginBottom: 24, position: "relative", overflow: "hidden" }}>
              {/* Subtle inner glow */}
              <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,201,167,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="chip" style={{ marginBottom: 20 }}>Flagship product</div>
                <h3 className="display-md" style={{ marginBottom: 18 }}>
                  OrvaIt <span className="teal">Recruit</span>
                </h3>
                <p style={{ color: "var(--gray-2)", lineHeight: 1.82, marginBottom: 32, fontWeight: 300, fontSize: "1.02rem" }}>
                  The AI-powered candidate assessment platform built for Sri Lankan companies. Screen hundreds of applicants with timed, proctored assessments — and get instant scored reports before your first interview.
                </p>
                <ul style={{ listStyle: "none", marginBottom: 36, display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Timed, proctored assessments", "Custom questions per role", "Real-time integrity monitoring", "Instant auto-scored reports"].map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.9rem", color: "var(--gray-2)" }}>
                      <span style={{ color: "var(--teal)", fontWeight: 700, fontSize: "1rem" }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/products/recruit" className="btn-primary">
                  Learn more <ArrowIcon />
                </Link>
              </div>

              {/* Mockup panel / Image */}
              <div style={{ background: "rgba(6,12,25,0.65)", borderRadius: 16, border: "0.5px solid rgba(255,255,255,0.08)", padding: "8px", position: "relative", zIndex: 1, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <img src="/recrutement2.png" alt="OrvaIt Recruit Screenshot" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
              </div>
            </div>
          </ScrollReveal>

          {/* Products grid */}
          <div className="products-grid">
            {[
              { name: "OrvaIt Insight", tag: "Analytics",  icon: <img src="https://i.pinimg.com/736x/5d/c8/63/5dc8637e74fd17dea829ea06541c2b72.jpg" alt="Insight" style={{ width: "36px", height: "36px", borderRadius: "8px", objectFit: "cover", display: "block" }} />, desc: "AI-powered business intelligence dashboards that surface what matters most, automatically.", status: "Available" },
              { name: "OrvaIt Flow",    tag: "Automation", icon: <img src="https://i.pinimg.com/736x/8a/35/fe/8a35fe04d6796bef41194d3a7f212e5e.jpg" alt="Flow" style={{ width: "36px", height: "36px", borderRadius: "8px", objectFit: "cover", display: "block" }} />, desc: "Intelligent workflow automation that eliminates repetitive tasks and connects your existing tools.", status: "Available" },
              { name: "OrvaIt Guard",   tag: "Security",   icon: <img src="https://i.pinimg.com/736x/2e/b6/f5/2eb6f5411b093a0c1294738e0e34b706.jpg" alt="Guard" style={{ width: "36px", height: "36px", borderRadius: "8px", objectFit: "cover", display: "block" }} />, desc: "AI-driven cybersecurity monitoring for small and mid-size enterprises in Sri Lanka.", status: "Coming soon" },
            ].map((p, i) => (
              <ScrollReveal key={p.name} direction="up" delay={i * 100} threshold={0.08}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{p.icon}</div>
                    <span style={{ fontSize: "0.68rem", color: p.status === "Coming soon" ? "var(--gray-4)" : "var(--teal)", border: `0.5px solid ${p.status === "Coming soon" ? "rgba(255,255,255,0.08)" : "rgba(0,201,167,0.3)"}`, padding: "3px 10px", borderRadius: 100, fontWeight: 500 }}>
                      {p.status}
                    </span>
                  </div>
                  <div className="chip" style={{ marginBottom: 12 }}>{p.tag}</div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, marginBottom: 12 }}>{p.name}</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--gray-3)", lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="fade" delay={200}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/products" className="btn-outline">View all products <ArrowIcon /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider container" />

      {/* ── WHAT WE BUILD ──────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="what-we-build-grid">
            <ScrollReveal direction="left">
              <div>
                <p className="label" style={{ marginBottom: 18 }}>What we do</p>
                <h2 className="display-lg" style={{ marginBottom: 28 }}>
                  We don&apos;t build software.<br />We build <span className="teal">systems that think.</span>
                </h2>
                <p style={{ color: "var(--gray-2)", lineHeight: 1.85, marginBottom: 36, fontWeight: 300, fontSize: "1.02rem" }}>
                  OrvaIt is an AI-first technology company. Every product we ship has intelligence woven into its core — not bolted on as an afterthought. We combine deep technical expertise with an understanding of how Sri Lankan businesses actually work.
                </p>
                <Link href="/services" className="btn-outline">
                  Our services <ArrowIcon />
                </Link>
              </div>
            </ScrollReveal>

            <div className="feature-cards-grid">
              {[
                { icon: <video src="https://v1.pinimg.com/videos/iht/expMp4/52/0a/2f/520a2f3988f32dd89222a0949bcf4e27_720w.mp4" autoPlay loop muted playsInline style={{ width: "64px", height: "64px", borderRadius: "8px", objectFit: "cover", display: "block" }} />, title: "AI & Machine Learning",  desc: "Custom models trained on your data and industry context." },
                { icon: <video src="https://v1.pinimg.com/videos/iht/expMp4/b9/9a/68/b99a6859f4d5bb703e9b069f44f0353b_540w.mp4" autoPlay loop muted playsInline style={{ width: "64px", height: "64px", borderRadius: "8px", objectFit: "cover", display: "block" }} />, title: "Process Automation",     desc: "Replace manual workflows with intelligent automated pipelines." },
                { icon: <video src="https://v1.pinimg.com/videos/iht/expMp4/0c/24/44/0c2444073f97ca37892ec777b6b7a1b5_360w.mp4" autoPlay loop muted playsInline style={{ width: "64px", height: "64px", borderRadius: "8px", objectFit: "cover", display: "block" }} />, title: "Data Intelligence",      desc: "Transform raw data into strategic business decisions." },
                { icon: <video src="https://v1.pinimg.com/videos/iht/expMp4/10/78/6f/10786f0093b83b318439da657c90b98a_540w.mp4" autoPlay loop muted playsInline style={{ width: "64px", height: "64px", borderRadius: "8px", objectFit: "cover", display: "block" }} />, title: "Secure by Design",       desc: "Enterprise-grade security built into every product layer." },
              ].map((f, i) => (
                <ScrollReveal key={f.title} direction="scale" delay={i * 80} threshold={0.08}>
                  <div className="feature-card" style={{ padding: "28px" }}>
                    <div style={{ fontSize: "28px", marginBottom: 14 }}>{f.icon}</div>
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 700, marginBottom: 8 }}>{f.title}</h4>
                    <p style={{ fontSize: "0.82rem", color: "var(--gray-3)", lineHeight: 1.7 }}>{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider container" />

      {/* ── HOW IT WORKS ───────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-heading-mb">
              <p className="label" style={{ marginBottom: 16 }}>Process</p>
              <h2 className="display-lg">
                From conversation<br />to <span className="teal">deployed solution.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="process-grid">
            {/* Connecting line */}
            <div className="process-line" />

            {[
              { step: "01", title: "Discovery",       desc: "We learn your business, challenges, and goals in a focused 60-minute session." },
              { step: "02", title: "Architecture",    desc: "Our team designs the AI-powered solution and maps the full technical roadmap." },
              { step: "03", title: "Build",           desc: "Rapid iterative development with weekly demos and your feedback at every stage." },
              { step: "04", title: "Deploy & Scale",  desc: "Seamless deployment with ongoing monitoring, support, and AI model improvement." },
            ].map((s, i) => (
              <ScrollReveal key={s.step} direction="up" delay={i * 120} threshold={0.08}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--teal)", color: "var(--navy)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.88rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", boxShadow: "0 0 0 8px rgba(0,201,167,0.12), 0 8px 24px rgba(0,201,167,0.3)" }}>
                    {s.step}
                  </div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: 12, fontSize: "1.05rem" }}>{s.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--gray-3)", lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ────────────────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: "var(--navy-2)", position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(0,201,167,0.04)", animationDelay: "-3s" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal direction="scale">
            <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
              <div style={{ fontSize: "4rem", color: "var(--teal)", opacity: 0.2, fontFamily: "Georgia, serif", lineHeight: 0.8, marginBottom: 24 }}>&ldquo;</div>
              <p style={{ fontSize: "1.45rem", fontFamily: "var(--font-display)", fontWeight: 600, lineHeight: 1.55, marginBottom: 32, color: "var(--white)" }}>
                OrvaIt helped us screen 60 candidates in a single weekend. We saved two weeks of interviews and found our best engineer yet.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(0,201,167,0.14)", border: "1px solid rgba(0,201,167,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--teal)" }}>
                  DS
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontWeight: 600, fontSize: "0.92rem" }}>Dinesh Samarawickrama</p>
                  <p style={{ color: "var(--gray-3)", fontSize: "0.82rem", marginTop: 2 }}>CTO, TechBridge Solutions · Colombo</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────────────────── */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 700, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(0,201,167,0.06)", animationDelay: "-6s" }} />
        <div className="orb" style={{ width: 300, height: 300, top: 0, right: 0, background: "rgba(0,80,200,0.05)", animationDelay: "-2s", animationDuration: "14s" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <ScrollReveal direction="up">
            <p className="label" style={{ marginBottom: 20 }}>Ready to start?</p>
            <h2 className="display-lg" style={{ marginBottom: 28 }}>
              Let&apos;s build something<br /><span className="teal">extraordinary together.</span>
            </h2>
            <p style={{ color: "var(--gray-2)", fontWeight: 300, marginBottom: 48, fontSize: "1.08rem", maxWidth: 480, margin: "0 auto 48px" }}>
              Book a free 30-minute discovery call. No commitment, no pressure.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ animation: "glowPulse 3s ease-in-out infinite" }}>
                Book a free call <ArrowIcon />
              </Link>
              <Link href="/products" className="btn-outline">
                See our products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
