"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 56, marginBottom: 64 }}>

          {/* Brand */}
          <div>
            <div className="nav-logo" style={{ marginBottom: 20, display: "inline-flex" }}>
              <span className="nav-logo-dot" />
              ORVA IT
            </div>
            <p style={{ color: "var(--gray-3)", fontSize: "0.88rem", lineHeight: 1.82, maxWidth: 280, marginTop: 8, fontWeight: 300 }}>
              AI-powered software solutions for modern Sri Lankan businesses. Building the future of intelligent enterprise.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: 38, height: 38, borderRadius: 10, border: "0.5px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gray-3)", textDecoration: "none", transition: "all 0.25s", fontSize: "0.85rem", background: "rgba(255,255,255,0.03)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--teal)";
                  e.currentTarget.style.borderColor = "rgba(0,201,167,0.4)";
                  e.currentTarget.style.background = "rgba(0,201,167,0.08)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--gray-3)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                in
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--white)", marginBottom: 20, textTransform: "uppercase" }}>
              Products
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {["OrvaIt Recruit", "OrvaIt Insight", "OrvaIt Flow", "OrvaIt Guard"].map(p => (
                <li key={p}>
                  <Link
                    href="/products"
                    style={{ color: "var(--gray-3)", textDecoration: "none", fontSize: "0.87rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--teal)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--gray-3)")}
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--white)", marginBottom: 20, textTransform: "uppercase" }}>
              Services
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {["AI Consulting", "Custom Development", "Process Automation", "Data Analytics"].map(s => (
                <li key={s}>
                  <Link
                    href="/services"
                    style={{ color: "var(--gray-3)", textDecoration: "none", fontSize: "0.87rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--teal)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--gray-3)")}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--white)", marginBottom: 20, textTransform: "uppercase" }}>
              Company
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[["About", "/about"], ["Careers", "/about"], ["Contact", "/contact"], ["Blog", "/about"]].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{ color: "var(--gray-3)", textDecoration: "none", fontSize: "0.87rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--teal)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--gray-3)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="rule" style={{ marginBottom: 32 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <p style={{ fontSize: "0.8rem", color: "var(--gray-4)" }}>
            © 2025 OrvaIt (Pvt) Ltd. All rights reserved. Colombo, Sri Lanka.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[["Privacy Policy", "/contact"], ["Terms of Service", "/contact"]].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                style={{ fontSize: "0.8rem", color: "var(--gray-4)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gray-3)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--gray-4)")}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
