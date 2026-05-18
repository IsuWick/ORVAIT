import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact — OrvaIt",
  description: "Get in touch with OrvaIt. Book a free discovery call or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero mesh-bg grid-bg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 500, height: 500, top: -100, right: 100, background: "rgba(0,201,167,0.07)", animationDelay: "-1s" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="label fade-up" style={{ marginBottom: 18 }}>Get in touch</p>
          <h1 className="display-lg fade-up-d1" style={{ maxWidth: 600, marginBottom: 28 }}>
            Let&apos;s talk about<br /><span className="teal">your business.</span>
          </h1>
          <p className="fade-up-d2" style={{ color: "var(--gray-2)", fontWeight: 300, fontSize: "1.08rem", maxWidth: 500, lineHeight: 1.85 }}>
            Book a free 30-minute discovery call, request a product demo, or simply send us a message. We respond to every inquiry within 24 hours.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section">
        <div className="container">
          <div className="contact-main-grid">

            {/* LEFT: Contact info */}
            <ScrollReveal direction="left" threshold={0.06}>
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, marginBottom: 36 }}>
                  Ways to reach us
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                  {[
                    { icon: "📧", label: "Email",    value: "hello@orvait.com",              sub: "We reply within 24 hours" },
                    { icon: "💬", label: "WhatsApp", value: "+94 77 XXX XXXX",               sub: "Mon–Fri, 9am–6pm" },
                    { icon: "📍", label: "Location", value: "Colombo, Sri Lanka",            sub: "Remote-first team" },
                    { icon: "🔗", label: "LinkedIn", value: "linkedin.com/company/orvait",  sub: "Follow for updates" },
                  ].map(c => (
                    <div key={c.label} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                      <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(0,201,167,0.1)", border: "0.5px solid rgba(0,201,167,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>
                        {c.icon}
                      </div>
                      <div>
                        <p style={{ fontSize: "0.7rem", color: "var(--gray-4)", fontWeight: 600, marginBottom: 3, letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.label}</p>
                        <p style={{ color: "var(--white)", fontSize: "0.9rem", fontWeight: 500 }}>{c.value}</p>
                        <p style={{ color: "var(--gray-3)", fontSize: "0.8rem", marginTop: 2 }}>{c.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 52 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", marginBottom: 22 }}>
                    What would you like to discuss?
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {["Book a free discovery call", "Request a product demo", "Get a custom development quote", "Partnership or reseller inquiry", "Join our team"].map(opt => (
                      <div key={opt} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 18px", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 10, fontSize: "0.88rem", color: "var(--gray-2)", transition: "all 0.2s", cursor: "default" }}>
                        <span style={{ color: "var(--teal)", fontSize: "0.75rem" }}>→</span>
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT: Form */}
            <ScrollReveal direction="right" delay={80} threshold={0.06}>
              <div className="glass-card" style={{ padding: "44px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, marginBottom: 8 }}>
                  Send us a message
                </h2>
                <p style={{ color: "var(--gray-3)", fontSize: "0.88rem", marginBottom: 32 }}>
                  Fill in the form and we&apos;ll get back to you within one business day.
                </p>

                <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div className="form-name-grid">
                    {[["First name", "text", "Kaveesha"], ["Last name", "text", "Perera"]].map(([label, type, ph]) => (
                      <div key={label}>
                        <label style={{ display: "block", fontSize: "0.7rem", color: "var(--gray-3)", marginBottom: 9, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                          {label}
                        </label>
                        <input type={type} className="form-input" placeholder={ph} />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.7rem", color: "var(--gray-3)", marginBottom: 9, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                      Work email
                    </label>
                    <input type="email" className="form-input" placeholder="you@company.com" />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.7rem", color: "var(--gray-3)", marginBottom: 9, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                      Company name
                    </label>
                    <input type="text" className="form-input" placeholder="Your company" />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.7rem", color: "var(--gray-3)", marginBottom: 9, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                      What are you interested in?
                    </label>
                    <select className="form-input" style={{ cursor: "pointer" }}>
                      <option value="" style={{ background: "var(--navy)" }}>Select an option…</option>
                      <option style={{ background: "var(--navy)" }}>Free discovery call</option>
                      <option style={{ background: "var(--navy)" }}>Product demo — OrvaIt Recruit</option>
                      <option style={{ background: "var(--navy)" }}>Product demo — OrvaIt Insight</option>
                      <option style={{ background: "var(--navy)" }}>Product demo — OrvaIt Flow</option>
                      <option style={{ background: "var(--navy)" }}>Custom development project</option>
                      <option style={{ background: "var(--navy)" }}>AI consulting</option>
                      <option style={{ background: "var(--navy)" }}>Partnership inquiry</option>
                      <option style={{ background: "var(--navy)" }}>Careers</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.7rem", color: "var(--gray-3)", marginBottom: 9, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                      Message
                    </label>
                    <textarea
                      className="form-input"
                      rows={5}
                      placeholder="Tell us about your business and what you're trying to solve…"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 4 }}>
                    Send message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>

                  <p style={{ fontSize: "0.76rem", color: "var(--gray-4)", textAlign: "center" }}>
                    By submitting, you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--navy-2)", position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 400, height: 400, top: "20%", right: "-5%", background: "rgba(0,201,167,0.04)", animationDelay: "-4s" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div className="section-heading-mb">
              <p className="label" style={{ marginBottom: 16 }}>FAQ</p>
              <h2 className="display-md">Common questions.</h2>
            </div>
          </ScrollReveal>
          <div className="two-col-grid" style={{ maxWidth: 960, margin: "0 auto" }}>
            {[
              { q: "How quickly can you start?",             a: "For our SaaS products (Recruit, Insight, Flow), you can be up and running within the same day. Custom development projects typically kick off within 2 weeks of contract signing." },
              { q: "Do you offer free trials?",              a: "Yes — we offer a 14-day free trial for all our SaaS products. For custom projects, we offer a free discovery session with no obligation." },
              { q: "Is everything priced in LKR?",           a: "Yes. All our pricing is in Sri Lankan Rupees. No USD invoices, no foreign exchange risk, no surprise currency conversion fees." },
              { q: "Can we own the custom software?",        a: "Absolutely. All custom-developed code is 100% owned by you on delivery. We include full source code, documentation, and deployment access." },
              { q: "Do you provide support after launch?",   a: "Yes — all SaaS products include ongoing support. Custom projects include 6 months of post-launch support, with monthly retainer options available after that." },
              { q: "What size companies do you work with?",  a: "Our SaaS products are priced for companies with 20–500 employees. For custom AI development, we work with businesses of any size — from 10-person startups to large enterprises." },
            ].map((faq, i) => (
              <ScrollReveal key={faq.q} direction="up" delay={i % 2 === 0 ? 0 : 100} threshold={0.06}>
                <div className="card" style={{ padding: "28px" }}>
                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", marginBottom: 12, color: "var(--teal)" }}>
                    {faq.q}
                  </h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--gray-3)", lineHeight: 1.75 }}>{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
