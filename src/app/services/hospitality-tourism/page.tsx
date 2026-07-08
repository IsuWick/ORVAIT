import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hospitality & Tourism Technology Solutions Sri Lanka | OrvaIT",
  description:
    "Eight specialised digital packages for Sri Lanka's hotels, villas, tour operators, and tourism businesses. OTA channel management, AI reception, direct booking engines, smart dining, and more.",
  alternates: { canonical: "https://orvait.com/services/hospitality-tourism" },
  openGraph: {
    title: "Hospitality & Tourism Technology Solutions Sri Lanka | OrvaIT",
    description:
      "From boutique villas in Galle to safari camps in Yala — digital packages built for Sri Lanka's hospitality and tourism industry.",
    url: "https://orvait.com/services/hospitality-tourism",
    siteName: "OrvaIT",
    type: "website",
  },
};

const htCss = `
  /* ─── Reset & base ─── */
  .ht { background: #F7F3ED; isolation: isolate; position: relative; }
  .ht *, .ht *::before, .ht *::after { box-sizing: border-box; }

  /* ─── Buttons ─── */
  .ht-btn-dark {
    display: inline-flex; align-items: center; gap: 10px;
    background: #1C1610; color: #F7F3ED;
    font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.75rem;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 14px 30px; border-radius: 5px; text-decoration: none;
    transition: background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
    border: none; cursor: pointer; white-space: nowrap;
  }
  .ht-btn-dark:hover { background: #B8860B; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(184,134,11,0.25); }

  .ht-btn-outline-dark {
    display: inline-flex; align-items: center; gap: 10px;
    background: transparent; color: #1C1610;
    font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.75rem;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 14px 30px; border-radius: 5px; text-decoration: none;
    transition: all 0.22s ease; border: 1.5px solid rgba(28,22,16,0.2); cursor: pointer;
  }
  .ht-btn-outline-dark:hover { border-color: #B8860B; color: #B8860B; transform: translateY(-2px); }

  .ht-btn-gold {
    display: inline-flex; align-items: center; gap: 10px;
    background: #B8860B; color: #FFFFFF;
    font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.75rem;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 14px 30px; border-radius: 5px; text-decoration: none;
    transition: all 0.22s ease; border: none; cursor: pointer;
  }
  .ht-btn-gold:hover { background: #9A7009; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(184,134,11,0.3); }

  .ht-btn-outline-light {
    display: inline-flex; align-items: center; gap: 10px;
    background: rgba(255,255,255,0.06); color: #FFFFFF;
    font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.75rem;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 14px 30px; border-radius: 5px; text-decoration: none;
    transition: all 0.22s ease; border: 1.5px solid rgba(255,255,255,0.3); cursor: pointer;
  }
  .ht-btn-outline-light:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.6); transform: translateY(-2px); }

  .ht-btn-pkg {
    display: inline-flex; align-items: center; gap: 8px;
    background: #1C1610; color: #F7F3ED;
    font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.7rem;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 11px 22px; border-radius: 5px; text-decoration: none;
    transition: all 0.2s ease; border: none; cursor: pointer;
    justify-content: center; width: 100%;
  }
  .ht-btn-pkg:hover { background: #B8860B; transform: translateY(-1px); }
  .ht-btn-pkg-gold {
    display: inline-flex; align-items: center; gap: 8px;
    background: #B8860B; color: #FFFFFF;
    font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.7rem;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 11px 22px; border-radius: 5px; text-decoration: none;
    transition: all 0.2s ease; border: none; cursor: pointer;
    justify-content: center; width: 100%;
  }
  .ht-btn-pkg-gold:hover { background: #9A7009; transform: translateY(-1px); }

  /* ─── Hero ─── */
  .ht-hero { display: grid; grid-template-columns: 46fr 54fr; min-height: min(93vh, 760px); }
  .ht-hero-text {
    display: flex; flex-direction: column; justify-content: center;
    padding: 80px 60px 80px 64px; background: #EDE7DC; position: relative; z-index: 1;
  }
  .ht-hero-img { position: relative; overflow: hidden; }
  .ht-hero-img img { transition: transform 14s ease; }
  .ht-hero-img:hover img { transform: scale(1.04); }
  .ht-hero-img::before {
    content: '';
    position: absolute; top: 0; bottom: 0; left: 0; width: 28px; z-index: 2;
    background: linear-gradient(to right, #EDE7DC, transparent);
  }

  /* ─── Stats strip ─── */
  .ht-stats { display: grid; grid-template-columns: repeat(4, 1fr); }
  .ht-stat-item { transition: background 0.2s ease; }
  .ht-stat-item:hover { background: rgba(184,134,11,0.04); }
  .ht-stat-item:hover .ht-stat-n { color: #B8860B; }

  /* ─── Package cards ─── */
  .ht-pkg {
    background: #FFFFFF; border-radius: 20px; overflow: hidden;
    box-shadow: 0 1px 3px rgba(28,22,16,0.04), 0 4px 24px rgba(28,22,16,0.06);
    transition: transform 0.32s cubic-bezier(0.16,1,0.3,1), box-shadow 0.32s cubic-bezier(0.16,1,0.3,1);
    margin-bottom: 24px; border: 1px solid rgba(232,222,206,0.8);
  }
  .ht-pkg:hover { transform: translateY(-6px); box-shadow: 0 2px 4px rgba(28,22,16,0.04), 0 20px 64px rgba(28,22,16,0.1); }
  .ht-pkg-flagship {
    background: #FFFDF8; border-color: rgba(184,134,11,0.3);
    box-shadow: 0 1px 3px rgba(184,134,11,0.06), 0 4px 32px rgba(184,134,11,0.1);
  }
  .ht-pkg-flagship:hover { box-shadow: 0 2px 4px rgba(184,134,11,0.06), 0 20px 64px rgba(184,134,11,0.15); }

  .ht-pkg-grid { display: grid; grid-template-columns: 44% 56%; min-height: 370px; }
  .ht-pkg-grid-flip { display: grid; grid-template-columns: 56% 44%; min-height: 370px; }
  .ht-pkg-img { position: relative; overflow: hidden; }
  .ht-pkg-img img { transition: transform 0.8s cubic-bezier(0.16,1,0.3,1); }
  .ht-pkg:hover .ht-pkg-img img { transform: scale(1.07); }
  .ht-pkg-body { padding: 36px 42px; display: flex; flex-direction: column; justify-content: center; }

  /* ─── Package content layout ─── */
  .ht-pkg-cols { display: flex; gap: 32px; flex: 1; }
  .ht-pkg-features { flex: 1 1 0; border-right: 1px solid #EDE5D8; padding-right: 32px; }
  .ht-pkg-price { width: 228px; flex-shrink: 0; }

  /* ─── Feature list ─── */
  .ht-feat { display: flex; gap: 10px; align-items: flex-start; line-height: 1.62; transition: color 0.16s; }
  .ht-feat:hover { color: #B8860B; }

  /* ─── Pricing box ─── */
  .ht-price-box {
    border-radius: 10px; padding: 20px;
    border-top: 3px solid #B8860B;
    margin-bottom: 14px;
  }

  /* ─── Tour cards ─── */
  .ht-tour-card {
    background: #FFFFFF; border-radius: 18px; overflow: hidden;
    border: 1px solid rgba(232,222,206,0.8);
    box-shadow: 0 1px 3px rgba(28,22,16,0.04), 0 4px 20px rgba(28,22,16,0.06);
    transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1);
    display: flex; flex-direction: column;
  }
  .ht-tour-card:hover { transform: translateY(-6px); box-shadow: 0 2px 4px rgba(28,22,16,0.04), 0 18px 56px rgba(28,22,16,0.1); }
  .ht-tour-img { position: relative; height: 280px; overflow: hidden; flex-shrink: 0; }
  .ht-tour-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.75s cubic-bezier(0.16,1,0.3,1); }
  .ht-tour-card:hover .ht-tour-img img { transform: scale(1.07); }

  /* ─── Add-on cards ─── */
  .ht-addon {
    background: #FFFFFF; border-radius: 16px;
    border: 1px solid rgba(232,222,206,0.8);
    box-shadow: 0 1px 3px rgba(28,22,16,0.03), 0 2px 12px rgba(28,22,16,0.05);
    padding: 32px; transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
  }
  .ht-addon:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(184,134,11,0.1); border-color: rgba(184,134,11,0.28); }

  /* ─── Section label ─── */
  .ht-label { display: flex; align-items: center; gap: 12px; }
  .ht-label-line { width: 28px; height: 1.5px; background: #B8860B; flex-shrink: 0; }
  .ht-label-text { font-family: 'Syne', sans-serif; font-size: 0.58rem; letter-spacing: 0.28em; text-transform: uppercase; color: #B8860B; }

  /* ─── Responsive ─── */

  /* Wide tablet: tighten pkg card body */
  @media (max-width: 1200px) {
    .ht-pkg-body { padding: 28px 32px !important; }
    .ht-pkg-price { width: 210px !important; }
  }

  /* 1100px — package cards stack vertically */
  @media (max-width: 1100px) {
    .ht-pkg-grid, .ht-pkg-grid-flip { grid-template-columns: 1fr !important; min-height: auto !important; }
    .ht-pkg-img-hide { display: block !important; height: 260px !important; order: -1 !important; }
    .ht-pkg-body { padding: 24px 28px !important; }
    .ht-pkg-cols { flex-direction: column !important; gap: 20px !important; }
    .ht-pkg-features { border-right: none !important; border-bottom: 1px solid #EDE5D8 !important; padding-right: 0 !important; padding-bottom: 20px !important; }
    .ht-pkg-price { width: 100% !important; }
  }

  /* 960px — hero stacks, stats go 2×2 */
  @media (max-width: 960px) {
    .ht-hero { grid-template-columns: 1fr !important; min-height: auto !important; }
    .ht-hero-img { height: 320px !important; }
    .ht-hero-img::before { display: none !important; }
    .ht-stats { grid-template-columns: 1fr 1fr !important; }
    .ht-stat-item {
      border-right: none !important;
      border-bottom: 1px solid #EDE5D8 !important;
      padding: 20px 16px !important;
    }
    .ht-stat-item:nth-child(odd) { border-right: 1px solid #EDE5D8 !important; }
    .ht-stat-item:nth-last-child(-n+2) { border-bottom: none !important; }
    .ht-banner { height: 300px !important; }
    .ht-inner { padding: 44px 36px !important; }
    .ht-section-banner { padding: 0 36px 32px !important; }
    .ht-tour-grid { grid-template-columns: 1fr 1fr !important; }
  }

  /* 768px — full mobile */
  @media (max-width: 768px) {
    .ht-hero-text { padding: 40px 22px 36px !important; }
    .ht-hero-img { height: 280px !important; }
    .ht-inner { padding: 36px 20px !important; }
    .ht-section-banner { padding: 0 20px 26px !important; }
    .ht-banner { height: 260px !important; }
    .ht-tour-grid { grid-template-columns: 1fr !important; }
    .ht-tour-img { height: 220px !important; }
    .ht-addon-grid { grid-template-columns: 1fr 1fr !important; }
    .ht-addon { padding: 22px !important; }
    .ht-email-grid { flex-direction: column !important; }
    .ht-email-price-card { width: 100% !important; }
    .ht-bundle-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
    .ht-bundle-item { padding: 0 !important; border-left: none !important; border-top: 1px solid #EDE5D8 !important; padding-top: 24px !important; margin-top: 24px !important; }
    .ht-bundle-item:first-child { border-top: none !important; padding-top: 0 !important; margin-top: 0 !important; }
    .ht-pkg-img-hide { height: 230px !important; }
    .ht-pkg-body { padding: 20px 18px !important; }
  }

  /* 480px — small phones */
  @media (max-width: 480px) {
    .ht-hero-text { padding: 32px 16px 28px !important; }
    .ht-inner { padding: 28px 16px !important; }
    .ht-section-banner { padding: 0 16px 22px !important; }
    .ht-banner { height: 230px !important; }
    .ht-addon-grid { grid-template-columns: 1fr !important; }
    .ht-stat-item { padding: 16px 12px !important; }
    .ht-pkg-img-hide { height: 200px !important; }
    .ht-pkg-body { padding: 18px 16px !important; }
    .ht-tour-img { height: 200px !important; }
  }
`;

/* ─── Package Card ───────────────────────────────────────── */
function PkgCard({
  num, name, subtitle, image, altText, flagship = false, flip = false,
  ideal, features, setupLabel = "Setup Fee", setupPrice, monthlyPrice, monthlyNote,
  hook, customPricing = false,
}: {
  num: string; name: string; subtitle: string; image: string; altText: string;
  flagship?: boolean; flip?: boolean; ideal: string; features: string[];
  setupLabel?: string; setupPrice: string; monthlyPrice: string; monthlyNote?: string;
  hook: string; customPricing?: boolean;
}) {
  const bg = flagship ? "#FFFDF8" : "#FFFFFF";
  const gold = "#B8860B";
  const gradDir = flip ? "to left" : "to right";
  const gridClass = flip ? "ht-pkg-grid-flip" : "ht-pkg-grid";

  const imageCol = (
    <div className="ht-pkg-img ht-pkg-img-hide" style={{ position: "relative" }}>
      <img src={image} alt={altText} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${gradDir}, transparent 82%, ${bg} 100%)` }} />
      <div style={{ position: "absolute", top: 20, ...(flip ? { right: 20 } : { left: 20 }) }}>
        <span style={{ display: "inline-block", background: "rgba(247,243,237,0.93)", borderRadius: 4, padding: "5px 13px", fontFamily: "'Syne', sans-serif", fontSize: "0.64rem", fontWeight: 700, color: flagship ? "#7A5C10" : gold, letterSpacing: "0.12em", backdropFilter: "blur(6px)" }}>
          PACKAGE {num}
        </span>
      </div>
    </div>
  );

  const contentCol = (
    <div className="ht-pkg-body">
      {/* number watermark */}
      <div style={{ position: "relative" }}>
        <span style={{ position: "absolute", top: -16, right: -8, fontFamily: "'Syne', sans-serif", fontSize: "5rem", fontWeight: 800, color: "rgba(184,134,11,0.06)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>{num}</span>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.5rem", fontWeight: 800, marginBottom: 4, color: "#1C1610", lineHeight: 1.18, position: "relative" }}>{name}</h3>
      </div>
      <p style={{ color: gold, fontSize: "0.78rem", fontStyle: "italic", marginBottom: 24, letterSpacing: "0.02em" }}>{subtitle}</p>

      <div className="ht-pkg-cols">
        {/* features */}
        <div className="ht-pkg-features">
          <p style={{ fontSize: "0.6rem", fontFamily: "'Syne', sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89878", marginBottom: 5 }}>Ideal For</p>
          <p style={{ fontSize: "0.84rem", color: "#7A6848", marginBottom: 18, lineHeight: 1.78 }}>{ideal}</p>
          <p style={{ fontSize: "0.6rem", fontFamily: "'Syne', sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89878", marginBottom: 11 }}>What&apos;s Included</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {features.map((f, i) => (
              <li key={i} className="ht-feat" style={{ fontSize: "0.81rem", color: "#4A3C28" }}>
                <span style={{ color: gold, flexShrink: 0, marginTop: 3, fontWeight: 700, fontSize: "0.78rem" }}>→</span> {f}
              </li>
            ))}
          </ul>
        </div>

        {/* pricing */}
        <div className="ht-pkg-price">
          <div className="ht-price-box" style={{ background: flagship ? "rgba(184,134,11,0.04)" : "#F7F3ED", border: flagship ? "1px solid rgba(184,134,11,0.2)" : "1px solid #E8DECE" }}>
            <p style={{ fontSize: "0.56rem", fontFamily: "'Syne', sans-serif", letterSpacing: "0.22em", textTransform: "uppercase", color: "#A89878", marginBottom: 14 }}>Pricing</p>
            <div style={{ marginBottom: 12 }}>
              <p style={{ fontSize: "0.6rem", color: "#A89878", marginBottom: 4 }}>{setupLabel}</p>
              {customPricing
                ? <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: gold }}>Custom Scope</p>
                : <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1C1610", lineHeight: 1.3 }}>{setupPrice}</p>
              }
            </div>
            <div style={{ borderTop: "1px solid #E8DECE", paddingTop: 12 }}>
              <p style={{ fontSize: "0.6rem", color: "#A89878", marginBottom: 4 }}>Monthly Retainer</p>
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: gold, lineHeight: 1.3 }}>{monthlyPrice}</p>
              {monthlyNote && <p style={{ fontSize: "0.6rem", color: "#A89878", marginTop: 5, lineHeight: 1.55 }}>{monthlyNote}</p>}
            </div>
          </div>
          <blockquote style={{ borderLeft: "2px solid #D4AC40", paddingLeft: 13, margin: "0 0 16px" }}>
            <p style={{ fontSize: "0.75rem", fontStyle: "italic", color: "#7A6848", lineHeight: 1.72 }}>{hook}</p>
          </blockquote>
          <Link href="/contact" className={flagship ? "ht-btn-pkg-gold" : "ht-btn-pkg"}>
            {customPricing ? "Scope This Engagement →" : "Get This Package →"}
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`ht-pkg${flagship ? " ht-pkg-flagship" : ""}`}>
      {flagship && (
        <div style={{ background: "linear-gradient(90deg, rgba(184,134,11,0.1), rgba(184,134,11,0.03))", borderBottom: "1px solid rgba(184,134,11,0.15)", padding: "10px 42px", display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#7A5C10" }}>⭐  FLAGSHIP</span>
          <span style={{ width: 1, height: 12, background: "rgba(184,134,11,0.25)", flexShrink: 0 }} />
          <span style={{ fontSize: "0.6rem", color: "#A89878" }}>Most recommended for Sri Lankan hospitality properties</span>
        </div>
      )}
      <div className={gridClass}>
        {flip ? <>{contentCol}{imageCol}</> : <>{imageCol}{contentCol}</>}
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────── */
export default function HospitalityTourismPage() {
  return (
    <div className="ht" style={{ background: "#F7F3ED", color: "#1C1610", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65 }}>
      <style dangerouslySetInnerHTML={{ __html: htCss }} />

      {/* ─── HERO ─── */}
      <section>
        <div className="ht-hero">
          {/* text column */}
          <div className="ht-hero-text">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36 }}>
              <Link href="/services" style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89878", textDecoration: "none" }}>Services</Link>
              <span style={{ color: "#C8B28A", fontSize: "0.6rem" }}>/</span>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B" }}>Hospitality &amp; Tourism</span>
            </div>

            <div className="ht-label" style={{ marginBottom: 22 }}>
              <div className="ht-label-line" />
              <span className="ht-label-text">8 Specialised Packages</span>
            </div>

            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.75rem, 2.9vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, color: "#1C1610" }}>
              The Technology Layer<br />Sri Lanka&apos;s Best<br />
              <span style={{ color: "#B8860B" }}>Properties Are Missing.</span>
            </h1>

            <p style={{ fontSize: "0.9rem", color: "#7A6848", maxWidth: 420, lineHeight: 1.9, marginBottom: 0, fontWeight: 400 }}>
              From boutique villas in Galle to safari camps in Yala — digital infrastructure that turns beautiful properties into fully-booked businesses.
            </p>

            {/* platform strip */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 10px", margin: "28px 0 36px", paddingTop: 24, borderTop: "1px solid rgba(184,134,11,0.18)" }}>
              {["Booking.com", "Agoda", "Expedia", "Airbnb", "TripAdvisor", "Trip.com"].map(p => (
                <span key={p} style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.06em", color: "#A89878", background: "rgba(184,134,11,0.08)", padding: "4px 10px", borderRadius: 3 }}>{p}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="ht-btn-dark">
                Get a Proposal
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <a href="#packages" className="ht-btn-outline-dark">View Packages</a>
            </div>
          </div>

          {/* image column */}
          <div className="ht-hero-img">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=90"
              alt="Luxury hotel resort pool"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
            />
            {/* floating badge */}
            <div style={{ position: "absolute", bottom: 36, right: 36, background: "rgba(247,243,237,0.94)", backdropFilter: "blur(10px)", borderRadius: 12, padding: "18px 22px", boxShadow: "0 4px 24px rgba(28,22,16,0.14)", border: "1px solid rgba(232,222,206,0.8)" }}>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "#B8860B", lineHeight: 1, marginBottom: 3 }}>0%</p>
              <p style={{ fontSize: "0.68rem", color: "#7A6848", lineHeight: 1.4 }}>Commission on<br />direct bookings</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section style={{ background: "#FFFFFF", borderBottom: "1px solid #EDE5D8" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 64px" }}>
          <div className="ht-stats">
            {[
              { num: "8",  sub: "Specialised Packages",        icon: "◈" },
              { num: "5+", sub: "OTA Booking Platforms",        icon: "◈" },
              { num: "6",  sub: "Languages — AI Reception",     icon: "◈" },
              { num: "15–25%", sub: "Avg OTA commission — recoverable", icon: "◈" },
            ].map((s, i) => (
              <div key={i} className="ht-stat-item" style={{ padding: "28px 20px", borderRight: i < 3 ? "1px solid #EDE5D8" : "none", textAlign: "center" }}>
                <div className="ht-stat-n" style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 2.5vw, 2.6rem)", fontWeight: 800, color: "#1C1610", lineHeight: 1, marginBottom: 7, transition: "color 0.2s" }}>{s.num}</div>
                <div style={{ fontSize: "0.67rem", color: "#A89878", letterSpacing: "0.06em" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOTEL PACKAGES ─── */}
      <section id="packages">
        {/* banner */}
        <div className="ht-banner" style={{ position: "relative", height: 440, overflow: "hidden" }}>
          <img src="https://i.pinimg.com/736x/fb/c5/a1/fbc5a13d013bf84266d09d9044f30b34.jpg" alt="Luxury hotel accommodation" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", transform: "scale(1.03)", transition: "transform 18s ease" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(28,22,16,0.0) 0%, rgba(28,22,16,0.0) 30%, rgba(28,22,16,0.85) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            <div className="ht-section-banner" style={{ maxWidth: 1300, margin: "0 auto", padding: "0 72px 48px" }}>
              <div className="ht-label" style={{ marginBottom: 16 }}>
                <div className="ht-label-line" />
                <span className="ht-label-text" style={{ color: "#D4AC40" }}>Section 01</span>
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 800, lineHeight: 1.08, color: "#FFFFFF", margin: 0 }}>
                Hotel &amp; Accommodation Packages
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginTop: 10, fontWeight: 300 }}>Five packages — from OTA visibility to full digital management</p>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="ht-inner" style={{ maxWidth: 1300, margin: "0 auto", padding: "64px 72px 80px" }}>
          <PkgCard
            num="01" name="Channel Connect" subtitle="OTA Integration & Channel Management"
            image="https://i.pinimg.com/1200x/ce/2a/5f/ce2a5f76886858a5a1528fa4ac7bedb4.jpg"
            altText="Hotel OTA channel management"
            ideal="Hotels, villas, and guesthouses that are invisible on booking platforms, or juggling calendars manually and risking double bookings."
            features={[
              "Listing setup on Booking.com, Agoda, Expedia, Airbnb, Trip.com, TripAdvisor and other relevant platforms",
              "Channel manager — one calendar, all platforms synced in real time. No double bookings.",
              "Rate and availability strategy with seasonal pricing rules",
              "Commission audit — exactly how much OTAs are taking from your revenue",
              "Monthly performance report: visibility, ranking, and conversion per platform",
            ]}
            setupPrice="LKR 95,000 – 150,000"
            monthlyPrice="LKR 25,000 / month"
            hook={`"Booking.com takes 15–25% of every booking. Let's at least make sure you're visible everywhere and priced right."`}
          />
          <PkgCard
            num="02" name="AI Front Desk" subtitle="AI Receptionist & Guest Messaging Automation"
            image="https://i.pinimg.com/1200x/c5/5a/de/c55ade6e03c9e4737f3083aef48daa37.jpg"
            altText="AI front desk reception"
            flagship flip
            ideal="Properties losing bookings because enquiries come at 2am, in German, on WhatsApp, and nobody replies until morning."
            features={[
              "AI chat agent installed on your existing website",
              "WhatsApp Business automation — instant replies to enquiries, availability questions, FAQs",
              "AI receptionist trained on your rooms, rates, policies, and local area",
              "Multilingual: English, German, French, Russian, Chinese — critical for Sri Lanka's market",
              "Smart handover — complex requests routed to staff with full conversation context",
              "Monthly conversation analytics: what guests ask, what converts to bookings",
            ]}
            setupPrice="LKR 150,000 – 250,000"
            monthlyPrice="LKR 35,000 / month"
            monthlyNote="AI usage costs included — never billed separately"
            hook='"Every unanswered WhatsApp message at midnight is a booking that went to your competitor by breakfast."'
          />
          <PkgCard
            num="03" name="Direct Booking Engine" subtitle="Website Modernisation, Booking System, Google & SEO"
            image="https://i.pinimg.com/736x/1b/28/96/1b28963037eb21a8d93c0ef97ac9d0dc.jpg"
            altText="Hotel direct booking website"
            ideal="Properties paying heavy OTA commissions who want their own website to become their highest-margin sales channel."
            features={[
              "Modern redesign of your website — fast, mobile-first, built to convert",
              "Integrated booking system with instant confirmation and secure card payments",
              "Google Business Profile setup, optimisation, and ongoing management",
              "Local and international SEO — ranking for 'boutique hotel Galle', not just your name",
              "Review response management on Google and TripAdvisor",
              "Booking source analytics — see exactly where guests come from",
            ]}
            setupPrice="LKR 225,000 – 450,000"
            monthlyPrice="LKR 30,000 / month"
            monthlyNote="Includes SEO and Google profile management"
            hook='"A direct booking has 0% commission. Ten direct bookings a month pays for this package several times over."'
          />
          <PkgCard
            num="04" name="Smart Dining" subtitle="QR Menus & Ordering System"
            image="https://i.pinimg.com/1200x/cf/49/61/cf4961e67e43d8e194210324af201e8b.jpg"
            altText="Smart dining QR menu" flip
            ideal="Restaurants, cafés, and hotel F&B outlets looking to eliminate order friction and boost revenue per cover."
            features={[
              "Online menu with photos, multiple languages, and multiple currencies",
              "Table-side ordering with live order status for the kitchen",
              "Room service and takeaway ordering via WhatsApp",
              "Professionally designed and printed QR codes for tables, rooms, and reception",
              "Instant menu updates — change prices or mark items sold out in seconds",
              "Daily sales summary sent to the manager's phone",
            ]}
            setupPrice="LKR 120,000 – 180,000"
            monthlyPrice="LKR 15,000 / month"
            monthlyNote="Includes hosting and support"
            hook={`"Your guest orders a second cocktail because they didn't have to wait for a waiter. That's the system paying for itself."`}
          />
          <PkgCard
            num="05" name="The Concierge" subtitle="Full-Service Custom Partnership for Hotels"
            image="https://i.pinimg.com/1200x/fd/96/24/fd9624ae8ebf666a6661ff666fa06c45.jpg"
            altText="Full-service hotel concierge"
            ideal="Properties that want a single trusted partner handling their entire digital presence — content, campaigns, and custom builds."
            features={[
              "Professional photoshoots — photographers, videographers, drone operators, models, end-to-end",
              "Full social media management: content calendar, post creation, community, ad campaigns",
              "Seasonal booking campaigns timed to peak windows (European winter, festive season)",
              "Email and WhatsApp marketing to past guests for repeat stays",
              "Any combination of Packages 01–04 bundled at a preferred rate",
            ]}
            setupLabel="Minimum Retainer"
            setupPrice=""
            monthlyPrice="From LKR 75,000 / month"
            monthlyNote="6-month minimum commitment. Photoshoots quoted separately."
            hook='"One bundled client is worth five one-off jobs. This is where the real margin is."'
            customPricing
          />
        </div>
      </section>

      {/* ─── TOURISM PACKAGES ─── */}
      <section style={{ background: "#F0EAE1" }}>
        {/* banner */}
        <div className="ht-banner" style={{ position: "relative", height: 440, overflow: "hidden" }}>
          <img src="https://i.pinimg.com/736x/0d/71/3a/0d713aa883e1b66ade2b95ba98dcef76.jpg" alt="Tourism industry Sri Lanka" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", transform: "scale(1.03)", transition: "transform 18s ease" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(28,22,16,0.0) 0%, rgba(28,22,16,0.0) 30%, rgba(28,22,16,0.85) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            <div className="ht-section-banner" style={{ maxWidth: 1300, margin: "0 auto", padding: "0 72px 48px" }}>
              <div className="ht-label" style={{ marginBottom: 16 }}>
                <div className="ht-label-line" />
                <span className="ht-label-text" style={{ color: "#D4AC40" }}>Section 02</span>
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 800, lineHeight: 1.08, color: "#FFFFFF", margin: 0 }}>
                Tourism Industry Packages
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginTop: 10, fontWeight: 300 }}>For tour operators, transfers, dive schools, safari camps, and wellness centres</p>
            </div>
          </div>
        </div>

        <div className="ht-inner" style={{ maxWidth: 1300, margin: "0 auto", padding: "64px 72px 80px" }}>
          <div className="ht-tour-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>

            {[
              {
                num: "06", name: "Tour Command", sub: "For Tour Operators & Travel Agencies",
                img: "https://i.pinimg.com/1200x/ea/87/0a/ea870a31c4db20b25a9c78110b13f8fd.jpg",
                imgAlt: "Tour operator travel agency",
                features: ["Tour website with itinerary builder and instant quotations", "Listings on Viator, GetYourGuide, TripAdvisor Experiences", "WhatsApp lead capture with AI follow-up", "Deposit payments from foreign cards", "Driver and guide scheduling board"],
                setup: "LKR 185,000", monthly: "LKR 25,000",
              },
              {
                num: "07", name: "Fleet & Transfers", sub: "For Taxi, Airport Transfer & Vehicle-Hire Companies",
                img: "https://i.pinimg.com/1200x/00/7e/73/007e73402412f8f9ea7da7b42155766d.jpg",
                imgAlt: "Fleet transfers taxi service",
                features: ["Airport transfer and day-hire booking system", "Automated WhatsApp confirmations with driver and vehicle details", "Live trip status shared with the guest — huge trust-builder", "Fleet and driver dispatch dashboard", "Google Business Profile and review engine"],
                setup: "LKR 145,000", monthly: "LKR 20,000",
              },
              {
                num: "08", name: "Experience Launch", sub: "Dive Schools, Safari Camps, Surf Camps & Wellness Centers",
                img: "https://i.pinimg.com/736x/ab/f9/2e/abf92e981e2196d61e21f4a2476c1337.jpg",
                imgAlt: "Experience launch dive school surf camp",
                features: ["Session and class booking calendar with capacity limits", "Online deposits and cancellation handling", "Automated pre-arrival packs via WhatsApp", "Post-visit review requests on autopilot", "Seasonal SEO: 'whale watching Mirissa', 'PADI course Hikkaduwa'"],
                setup: "LKR 135,000", monthly: "LKR 20,000",
              },
            ].map((p) => (
              <div key={p.num} className="ht-tour-card">
                {/* image */}
                <div className="ht-tour-img">
                  <img src={p.img} alt={p.imgAlt} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.36) 100%)" }} />
                  <div style={{ position: "absolute", top: 16, left: 16 }}>
                    <span style={{ display: "inline-block", background: "rgba(247,243,237,0.92)", borderRadius: 4, padding: "4px 12px", fontFamily: "'Syne', sans-serif", fontSize: "0.62rem", fontWeight: 700, color: "#B8860B", letterSpacing: "0.1em", backdropFilter: "blur(6px)" }}>PACKAGE {p.num}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 18, left: 20, right: 20 }}>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.15rem", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 3, textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>{p.name}</h3>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.7rem", fontStyle: "italic", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>{p.sub}</p>
                  </div>
                </div>
                {/* content */}
                <div style={{ padding: "20px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                    {p.features.map((f, i) => (
                      <li key={i} className="ht-feat" style={{ fontSize: "0.79rem", color: "#4A3C28" }}>
                        <span style={{ color: "#B8860B", flexShrink: 0, marginTop: 2, fontWeight: 700 }}>→</span> {f}
                      </li>
                    ))}
                  </ul>
                  {/* price row */}
                  <div style={{ background: "#F7F3ED", border: "1px solid #E8DECE", borderTop: "2.5px solid #B8860B", borderRadius: 9, padding: "14px 18px", marginBottom: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                      <div>
                        <p style={{ fontSize: "0.58rem", color: "#A89878", marginBottom: 3 }}>Setup from</p>
                        <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#1C1610" }}>{p.setup}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontSize: "0.58rem", color: "#A89878", marginBottom: 3 }}>Monthly</p>
                        <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#B8860B" }}>{p.monthly}</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="ht-btn-pkg">Get This Package →</Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ─── ADD-ONS ─── */}
      <section style={{ background: "#FFFFFF", borderTop: "1px solid #EDE5D8" }}>
        <div className="ht-inner" style={{ maxWidth: 1300, margin: "0 auto", padding: "72px 72px 80px" }}>
          <div style={{ display: "flex", gap: 48, alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52, flexWrap: "wrap" }}>
            <div>
              <div className="ht-label" style={{ marginBottom: 14 }}>
                <div className="ht-label-line" />
                <span className="ht-label-text">Add-Ons</span>
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)", fontWeight: 800, color: "#1C1610", lineHeight: 1.15, margin: 0 }}>Stack onto Any Package</h2>
            </div>
            <p style={{ color: "#7A6848", fontSize: "0.86rem", maxWidth: 360, lineHeight: 1.82, margin: 0 }}>
              Four high-value additions that bolt onto any of the 8 packages above for compounding results.
            </p>
          </div>
          <div className="ht-addon-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { icon: "💳", title: "International Payment Gateway", desc: "Accept foreign Visa and Mastercard online — the single biggest friction point for Sri Lankan hospitality businesses receiving overseas bookings." },
              { icon: "⭐", title: "Guest Review Engine", desc: "Automated review requests sent at the perfect moment after checkout. Consistently lifts Google and TripAdvisor ratings within 60–90 days." },
              { icon: "📧", title: "Guest CRM & Email Marketing", desc: "Build a guest database and run re-engagement campaigns. Past guests book again at zero OTA commission — pays for itself on the first campaign." },
              { icon: "🌐", title: "Extra Languages", desc: "Extend menus, websites, and AI agents to additional languages. Essential for properties targeting European, Russian, or Chinese markets." },
            ].map((a, i) => (
              <div key={i} className="ht-addon">
                <div style={{ width: 46, height: 46, background: "rgba(184,134,11,0.08)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.35rem", marginBottom: 18 }}>{a.icon}</div>
                <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "#1C1610", marginBottom: 10, lineHeight: 1.35 }}>{a.title}</h4>
                <p style={{ fontSize: "0.79rem", color: "#7A6848", lineHeight: 1.78 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUSINESS EMAIL ─── */}
      <section style={{ background: "#F7F3ED", borderTop: "1px solid #EDE5D8" }}>
        <div className="ht-inner" style={{ maxWidth: 1300, margin: "0 auto", padding: "72px 72px 80px" }}>
          <div style={{ display: "flex", gap: 64, alignItems: "flex-start" }} className="ht-email-grid">
            {/* left */}
            <div style={{ flex: "1 1 0", minWidth: 0 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(184,134,11,0.08)", border: "1px solid rgba(184,134,11,0.2)", borderRadius: 4, padding: "4px 13px", marginBottom: 20 }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.56rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A5C10" }}>Add-On — Available Standalone</span>
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)", fontWeight: 800, color: "#1C1610", marginBottom: 14, lineHeight: 1.15 }}>
                Professional Business Email
              </h2>
              <p style={{ color: "#7A6848", fontSize: "0.87rem", marginBottom: 26, lineHeight: 1.86, maxWidth: 500 }}>
                Any hotel still emailing from <span style={{ background: "rgba(184,134,11,0.1)", padding: "1px 7px", borderRadius: 3, color: "#4A3C28", fontFamily: "monospace", fontSize: "0.82rem" }}>hotelname@gmail.com</span> is losing bookings to the property next door. A foreign guest will always trust <span style={{ color: "#B8860B", fontWeight: 600 }}>reservations@yourhotel.lk</span> more.
              </p>
              <blockquote style={{ borderLeft: "2.5px solid #B8860B", paddingLeft: 18, margin: "0 0 28px" }}>
                <p style={{ fontSize: "0.97rem", fontStyle: "italic", color: "#4A3C28", lineHeight: 1.82 }}>
                  &ldquo;Would you book a $200/night villa that emails you from a Gmail address? Neither will your guests.&rdquo;
                </p>
              </blockquote>
              <p style={{ fontSize: "0.6rem", fontFamily: "'Syne', sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89878", marginBottom: 12 }}>What&apos;s Included</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Custom domain email (Google Workspace or Microsoft 365) — reservations@, info@, manager@, frontdesk@yourhotel.lk",
                  "Domain registration or connection to your existing website domain",
                  "Migration of emails and contacts from Gmail/Yahoo — nothing lost",
                  "Setup on all devices: reception computer, manager's phone, owner's laptop",
                  "SPF, DKIM, DMARC configuration — emails land in inboxes, not spam. This alone recovers lost bookings.",
                  "Shared inbox setup so all reception staff can handle reservations@ without password chaos",
                ].map((f, i) => (
                  <li key={i} className="ht-feat" style={{ fontSize: "0.81rem", color: "#4A3C28" }}>
                    <span style={{ color: "#B8860B", flexShrink: 0, marginTop: 3, fontWeight: 700 }}>→</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            {/* pricing card */}
            <div className="ht-email-price-card" style={{ width: 300, flexShrink: 0 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E8DECE", borderTop: "3px solid #B8860B", borderRadius: 14, padding: "28px 24px", boxShadow: "0 4px 24px rgba(28,22,16,0.06)", marginBottom: 16 }}>
                <p style={{ fontSize: "0.56rem", fontFamily: "'Syne', sans-serif", letterSpacing: "0.22em", textTransform: "uppercase", color: "#A89878", marginBottom: 20 }}>Pricing</p>
                <div style={{ marginBottom: 18 }}>
                  <p style={{ fontSize: "0.6rem", color: "#A89878", marginBottom: 5 }}>Setup Fee</p>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1C1610" }}>LKR 25,000 – 45,000</p>
                  <p style={{ fontSize: "0.6rem", color: "#A89878", marginTop: 4 }}>Depending on number of mailboxes</p>
                </div>
                <div style={{ borderTop: "1px solid #E8DECE", paddingTop: 18 }}>
                  <p style={{ fontSize: "0.6rem", color: "#A89878", marginBottom: 5 }}>Monthly per Mailbox</p>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#B8860B" }}>LKR 3,500 – 5,000</p>
                  <p style={{ fontSize: "0.6rem", color: "#A89878", marginTop: 4 }}>Google/Microsoft license included in billing</p>
                </div>
                <div style={{ borderTop: "1px solid #E8DECE", paddingTop: 16, marginTop: 18 }}>
                  <p style={{ fontSize: "0.79rem", color: "#7A6848", lineHeight: 1.75 }}>
                    <span style={{ color: "#B8860B", fontWeight: 600 }}>Note:</span> We always register the domain in your name. You own everything — we just run it.
                  </p>
                </div>
              </div>
              <Link href="/contact" className="ht-btn-dark" style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", textDecoration: "none" }}>
                Set Up Business Email
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STRATEGY INSIGHTS ─── */}
      <section style={{ background: "#FFFFFF", borderTop: "1px solid #EDE5D8" }}>
        <div className="ht-inner" style={{ maxWidth: 1300, margin: "0 auto", padding: "64px 72px" }}>
          <div className="ht-label" style={{ marginBottom: 40 }}>
            <div className="ht-label-line" />
            <span className="ht-label-text">Hard-Earned Strategy</span>
          </div>
          <div className="ht-bundle-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
            {[
              { n: "01", title: "Bundle aggressively", body: "Packages 01 + 02 + 03 together is 'The Full Property Takeover' — offer it at 15% off with a 12-month commitment. One bundled client is worth five one-off jobs." },
              { n: "02", title: "Anchor with commission math", body: "A mid-size hotel doing 100 OTA bookings at LKR 20,000 average is paying LKR 300,000–500,000/month in commissions. Every package looks cheap next to that number." },
              { n: "03", title: "Protect the monthly retainer", body: "Clients will ask to 'just pay setup.' Don't agree. If they resist, lower the setup fee before you ever drop the monthly. Recurring revenue is the business." },
            ].map((t, i) => (
              <div key={i} className="ht-bundle-item" style={{ padding: `0 ${i < 2 ? 40 : 0}px 0 ${i > 0 ? 40 : 0}px`, borderLeft: i > 0 ? "1px solid #EDE5D8" : "none" }}>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "rgba(184,134,11,0.1)", lineHeight: 1, marginBottom: 14 }}>{t.n}</p>
                <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#B8860B", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.title}</h4>
                <p style={{ fontSize: "0.82rem", color: "#7A6848", lineHeight: 1.85 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600&q=82" alt="Tropical beach sunset" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 42%" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(20,14,8,0.74)" }} />
        </div>
        <div className="ht-inner" style={{ position: "relative", zIndex: 1, maxWidth: 1300, margin: "0 auto", padding: "100px 72px", textAlign: "center" }}>
          <div className="ht-label" style={{ justifyContent: "center", marginBottom: 22 }}>
            <div style={{ width: 40, height: 1.5, background: "rgba(184,134,11,0.5)" }} />
            <span className="ht-label-text" style={{ color: "#B8860B" }}>Ready to Start</span>
            <div style={{ width: 40, height: 1.5, background: "rgba(184,134,11,0.5)" }} />
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.9rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 18, color: "#FFFFFF" }}>
            Let&apos;s Build Your Property&apos;s<br /><span style={{ color: "#B8860B" }}>Digital Engine.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.9rem", maxWidth: 440, margin: "0 auto 44px", lineHeight: 1.9 }}>
            Tell us about your property. We&apos;ll identify the two or three things that will have the biggest impact on bookings and revenue — then build from there.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="ht-btn-gold">
              Book a Free Strategy Call
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/services" className="ht-btn-outline-light">← Back to All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
