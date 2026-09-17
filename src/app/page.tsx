import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal";
import ClientStories, { type ClientStory } from "@/components/ClientStories";
import "./home.css";

export const metadata: Metadata = {
  title: "OrvaIT — Software Development Company in Colombo, Sri Lanka",
  description:
    "OrvaIT is a software development company in Colombo, Sri Lanka. We build websites, mobile apps, AI solutions, and POS systems. Serving Sri Lankan businesses with cutting-edge technology.",
  keywords: [
    "software company Sri Lanka",
    "software development company Colombo",
    "web development Sri Lanka",
    "mobile app development Colombo",
    "AI solutions Sri Lanka",
    "POS system Sri Lanka",
    "custom software development Sri Lanka",
    "IT company Colombo",
    "website development Sri Lanka",
    "app development company Colombo",
    "software company Colombo",
    "tech company Sri Lanka",
  ],
  alternates: { canonical: "https://orvait.com" },
  openGraph: {
    title: "OrvaIT — Software Development Company in Colombo, Sri Lanka",
    description:
      "OrvaIT builds websites, mobile apps, AI solutions, and POS systems for Sri Lankan businesses. Based in Colombo. Book a free discovery call today.",
    url: "https://orvait.com",
    siteName: "OrvaIT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrvaIT — Software Development Company in Colombo, Sri Lanka",
    description:
      "Websites, mobile apps, AI solutions & POS systems built for Sri Lankan businesses. Based in Colombo.",
  },
};

/* ── Icons ───────────────────────────────────────────────────────────────── */

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Icon = ({ d, size = 22, strokeWidth = 1.6 }: { d: string; size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

const ICONS = {
  check:        "M20 6 9 17l-5-5",
  arrowUpRight: "M7 17 17 7M8 7h9v9",
  clock:        "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 7v5l3 2",
  cursor:       "m3 3 7.4 17.8 2.2-7.4 7.4-2.2z",
  web:          "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 9h18M6.5 6.5h.01M9 6.5h.01",
  mobile:       "M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM11 18h2",
  ai:           "M12 3l1.8 4.9L19 9.7l-5.2 1.8L12 16.5l-1.8-5L5 9.7l5.2-1.8zM18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z",
  pos:          "M5 3h14v18l-2.3-1.5L14.3 21 12 19.5 9.7 21l-2.4-1.5L5 21zM9 8h6M9 12h6M9 16h3",
  code:         "m16 18 6-6-6-6M8 6l-6 6 6 6M14 4l-4 16",
  bolt:         "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  chart:        "M3 3v18h18M7 14l4-4 3 3 6-6",
  flow:         "M5 3h4v4H5zM15 17h4v4h-4zM7 7v4a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3",
  shield:       "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  pin:          "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  gauge:        "M12 14l4-4M3.3 17a10 10 0 1 1 17.4 0",
  team:         "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  support:      "M21 12a9 9 0 1 1-2.6-6.4M21 3v6h-6",
  mail:         "M3 5h18v14H3zM3 6l9 7 9-7",
  phone:        "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2z",
};

/* ── Content ─────────────────────────────────────────────────────────────── */

const heroKpis = [
  { label: "Applied",     value: "247", trend: "+12%" },
  { label: "Screened",    value: "89",  trend: "+8%" },
  { label: "Shortlisted", value: "14",  trend: "Top 6%" },
];

const heroCandidates = [
  { name: "Kavinda Perera",  score: 92, status: "Shortlisted", ok: true },
  { name: "Dilani Silva",    score: 88, status: "Shortlisted", ok: true },
  { name: "Roshan Fernando", score: 71, status: "In review",   ok: false },
];

const tickerItems = [
  { tag: "New",       text: "Hospitality & Tourism packages for hotels, villas and tour operators" },
  { tag: "Spotlight", text: "OTA channel management, AI reception, direct booking engines and smart dining" },
  { tag: "Sri Lanka", text: "From boutique villas in Galle to safari camps in Yala" },
];

/* ───────────────────────────────────────────────────────────────────────────
   CLIENT STORIES
   All five are real engagements, written from what the team described. Keep it
   that way: these are real companies, so only add claims (especially numbers)
   that the client would stand behind.
─────────────────────────────────────────────────────────────────────────── */
const clientStories: ClientStory[] = [
  {
    name: "Emeraldbay Resorts",
    monogram: "EB",
    logo: "/emeraldbaylogo.png",
    industry: "Hospitality · Resort",
    href: "https://emeraldbayresorts.com",
    summary: "One website build that grew into a three-project partnership.",
    steps: [
      {
        label: "Official website",
        badge: "Live",
        status: "live",
        desc: "Their first requirement — a proper online home for the resort. Designed, built and launched, with a few final pieces still coming from their team.",
      },
      {
        label: "QR smart ordering",
        badge: "Phase 2",
        status: "phase",
        desc: "Guests scan a code to order from their room or anywhere in the restaurant areas.",
      },
      {
        label: "POS system",
        badge: "Ongoing",
        status: "ongoing",
        desc: "Bringing ordering, restaurant and front-desk operations into one system. In development now.",
      },
    ],
    outcome: "They told us we understood their requirement exactly, and that the site has helped grow their sales. Every project since has come back to us.",
    services: ["Web development", "QR ordering", "POS system"],
  },
  {
    name: "Girlee Clouthings",
    monogram: "GC",
    logo: "/girleelogo.jpeg",
    industry: "Fashion · Clothing brand",
    summary: "Branding on social media first — now their website is being built.",
    steps: [
      {
        label: "Social media branding",
        badge: "Live",
        status: "live",
        desc: "Their first requirement: get the brand in front of people on Facebook and social channels. We built a steady, consistent brand presence and kept it running.",
      },
      {
        label: "Official website",
        badge: "Ongoing",
        status: "ongoing",
        desc: "With the brand established, they asked us to build their website. In development now.",
      },
    ],
    outcome: "The branding work settled their identity and brought in sales — and that success is why the website came to us next.",
    services: ["Social media branding", "Web development"],
  },
  {
    name: "Redi Gedara Garments",
    monogram: "RG",
    logo: "/redigedaralogo.jpeg",
    industry: "Garment manufacturing",
    summary: "A complete employee and inventory platform — hardware and software.",
    steps: [
      {
        label: "Fingerprint attendance",
        badge: "Live",
        status: "live",
        desc: "Their requirement was employee management, starting with attendance. We delivered both sides: the fingerprint scanners on the floor and the software behind them.",
      },
      {
        label: "Employee management",
        badge: "Live",
        status: "live",
        desc: "A full system for staff records and the daily people work that used to be done by hand.",
      },
      {
        label: "Inventory management",
        badge: "Live",
        status: "live",
        desc: "Stock and inventory tracking, running through the same platform as the rest.",
      },
    ],
    outcome: "Attendance, staff and stock now run through one system — saving the team a lot of time and a lot of money.",
    services: ["Hardware + software", "Employee management", "Inventory system"],
  },
  {
    name: "Lumora Cosmetics",
    monogram: "LC",
    logo: "/lumoralogo.jpeg",
    industry: "Cosmetics · Startup",
    summary: "A mobile POS with a portable bill printer — and a partner as they grow.",
    steps: [
      {
        label: "Mobile POS app",
        badge: "Live",
        status: "live",
        desc: "Their requirement was a point-of-sale they could carry. We built a mobile POS app they can sell from anywhere.",
      },
      {
        label: "Portable bill printer",
        badge: "Live",
        status: "live",
        desc: "We supplied and set up a portable printer so bills print on the spot — the hardware and the software handled together.",
      },
      {
        label: "Technical guidance",
        badge: "Ongoing",
        status: "ongoing",
        desc: "As a young company, they also get free consultations from us — including how to keep their accounts and pages secure.",
      },
    ],
    outcome: "A startup selling with a proper POS from day one, and a technical partner they can call as they grow.",
    services: ["Mobile POS", "Hardware setup", "Technical consulting"],
  },
  {
    name: "Yori Foods",
    monogram: "YF",
    industry: "Food & Beverage",
    summary: "Hosting moved, site brought up to date, and SEO put in place.",
    steps: [
      {
        label: "Hosting move",
        badge: "Live",
        status: "live",
        desc: "We moved them onto a hosting plan that fits how their site is actually used.",
      },
      {
        label: "Website update",
        badge: "Live",
        status: "live",
        desc: "Their existing site refreshed and brought up to date.",
      },
      {
        label: "Search optimisation",
        badge: "Live",
        status: "live",
        desc: "SEO work so the right customers can find them on Google.",
      },
    ],
    outcome: "Their site now sits on the right hosting, looks current, and is set up to be found in search.",
    services: ["Hosting", "Website updates", "SEO"],
  },
];

const services = [
  { icon: ICONS.web,    title: "Web Development",        desc: "Fast, search-optimised websites and web platforms designed to turn visitors into customers.",       tags: ["Corporate sites", "E-commerce", "Web apps"] },
  { icon: ICONS.mobile, title: "Mobile App Development", desc: "Polished iOS and Android apps that your customers enjoy using — and keep coming back to.",            tags: ["iOS", "Android", "Cross-platform"] },
  { icon: ICONS.ai,     title: "AI Solutions",           desc: "Custom models, assistants and intelligent features trained on your data and industry context.",       tags: ["AI assistants", "Machine learning", "AI consulting"] },
  { icon: ICONS.pos,    title: "POS Systems",            desc: "Point-of-sale and inventory systems built for retail, restaurants and hospitality businesses.",       tags: ["Retail", "Restaurants", "Inventory"] },
  { icon: ICONS.code,   title: "Custom Software",        desc: "Bespoke platforms built around your workflow — fully owned by you and engineered to scale.",           tags: ["ERP & CRM", "Integrations", "APIs"] },
  { icon: ICONS.bolt,   title: "Business Automation",    desc: "Automate time-consuming workflows, from invoicing to onboarding, and cut manual effort by 60–90%.", tags: ["Workflows", "Data & BI", "Reporting"] },
];

const recruitFeatures = ["Timed, proctored assessments", "Custom questions per role", "Real-time integrity monitoring", "Instant auto-scored reports"];

const products = [
  { icon: ICONS.chart,  name: "OrvaIt Insight", tag: "Analytics",  desc: "AI-powered business intelligence dashboards that surface what matters most, automatically.",        available: true },
  { icon: ICONS.flow,   name: "OrvaIt Flow",    tag: "Automation", desc: "Intelligent workflow automation that eliminates repetitive tasks and connects your existing tools.", available: true },
  { icon: ICONS.shield, name: "OrvaIt Guard",   tag: "Security",   desc: "AI-driven cybersecurity monitoring for small and mid-size enterprises in Sri Lanka.",                 available: false },
];

const values = [
  { icon: ICONS.pin,     title: "Built for Sri Lanka",   desc: "We understand local business culture, regulations and the practical constraints global vendors overlook." },
  { icon: ICONS.gauge,   title: "Delivered in weeks",    desc: "Short sprints and weekly demos mean working software fast — not 18-month implementation timelines." },
  { icon: ICONS.team,    title: "AI-native team",        desc: "Every engineer has production AI experience. We don't outsource or resell — we build it ourselves." },
  { icon: ICONS.support, title: "Partners after launch", desc: "Ongoing support, model retraining and new features come standard. We don't disappear after go-live." },
];

const stats = [
  { num: "40", suffix: "+",  label: "Companies served",    sub: "across Sri Lanka" },
  { num: "3",  suffix: "×",  label: "Faster hiring",       sub: "vs. manual screening" },
  { num: "98", suffix: "%",  label: "Client satisfaction", sub: "average NPS score" },
  { num: "24", suffix: "/7", label: "Platform uptime",     sub: "SLA guaranteed" },
];

const steps = [
  { step: "01", title: "Discovery",      desc: "We learn your business, challenges and goals in a focused working session.",          meta: "60-minute session" },
  { step: "02", title: "Architecture",   desc: "We design the solution and map a clear technical roadmap, timeline and quote.",        meta: "Clear scope & pricing" },
  { step: "03", title: "Build",          desc: "Rapid, iterative development with your feedback built in at every stage.",             meta: "Weekly demos" },
  { step: "04", title: "Launch & scale", desc: "Seamless deployment followed by monitoring, support and continuous improvement.",       meta: "Ongoing support" },
];

/* ── Section heading ─────────────────────────────────────────────────────── */

function SectionHead({ eyebrow, title, lead, link }: { eyebrow: string; title: ReactNode; lead: string; link: { href: string; label: string } }) {
  return (
    <ScrollReveal direction="up">
      <div className="home-head">
        <div>
          <p className="home-eyebrow">{eyebrow}</p>
          <h2 className="home-h2">{title}</h2>
        </div>
        <div>
          <p className="home-lead">{lead}</p>
          <Link href={link.href} className="home-link">{link.label} <ArrowIcon /></Link>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Home() {
  return (
    <>
      {/* LocalBusiness schema — signals Colombo, Sri Lanka software company to Google */}
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://orvait.com/#organization",
            name: "OrvaIT",
            description:
              "OrvaIT is a software development company based in Colombo, Sri Lanka. We build websites, mobile apps, AI-powered solutions, and POS systems for modern businesses.",
            url: "https://orvait.com",
            logo: "https://orvait.com/favicon.png",
            telephone: "+94714516562",
            email: "hello@orvait.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Colombo",
              addressRegion: "Western Province",
              addressCountry: "LK",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 6.9271,
              longitude: 79.8612,
            },
            areaServed: [
              { "@type": "Country", name: "Sri Lanka" },
              { "@type": "Country", name: "United States" },
            ],
            serviceType: [
              "Web Development",
              "Mobile App Development",
              "AI Solutions",
              "POS System Development",
              "Custom Software Development",
              "Business Automation",
            ],
            priceRange: "$$",
            openingHours: "Mo-Fr 09:00-18:00",
            sameAs: [
              "https://www.linkedin.com/company/orvait/",
            ],
          }),
        }}
      />
      {/* WebSite schema — enables Google Sitelinks Search */}
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "OrvaIT",
            url: "https://orvait.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://orvait.com/?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <div className="home">

        {/* ── ANNOUNCEMENT TICKER ────────────────────────────────────────────── */}
        <Link
          href="/services/hospitality-tourism"
          className="home-ticker"
          aria-label="New: Hospitality & Tourism packages for hotels, villas and tour operators. Explore packages"
        >
          {/* Two identical groups so the loop at -50% is seamless */}
          <span className="home-ticker-track" aria-hidden="true">
            {[0, 1].map(group => (
              <span key={group} className="home-ticker-group">
                {[0, 1].map(rep => (
                  <Fragment key={rep}>
                    {tickerItems.map(t => (
                      <span key={t.tag} className="home-ticker-item">
                        <span className="home-ticker-tag">{t.tag}</span>
                        {t.text}
                      </span>
                    ))}
                    <span className="home-ticker-item home-ticker-cta">Explore packages <ArrowIcon /></span>
                  </Fragment>
                ))}
              </span>
            ))}
          </span>
        </Link>

        {/* ── HERO───────────────────────────────────────────────────────────── */}
        <section className="home-hero">
          <div className="home-hero-bg" aria-hidden="true" />

          <div className="container home-hero-inner">
            <div className="home-hero-copy">
              <div className="home-badge fade-up">
                <span className="home-badge-tag"><span className="home-dot" />Colombo, Sri Lanka</span>
                AI-powered software company
              </div>

              <h1 className="home-h1 fade-up-d1">
                Software with intelligence built into <span className="home-mark">every layer.</span>
              </h1>

              <p className="home-lead fade-up-d2">
                OrvaIT designs and builds websites, mobile apps, AI solutions and POS systems that help Sri Lankan businesses hire smarter, operate faster and grow with confidence.
              </p>

              <div className="home-actions fade-up-d3">
                <Link href="/contact" className="home-btn home-btn-primary">
                  Book a free consultation <ArrowIcon />
                </Link>
                <Link href="/products" className="home-btn home-btn-secondary">
                  Explore products
                </Link>
              </div>

              <ul className="home-assurances fade-up-d4">
                {["Free 30-minute discovery call", "Transparent LKR pricing", "Local team in Colombo"].map(a => (
                  <li key={a}>
                    <span className="home-check"><Icon d={ICONS.check} size={11} strokeWidth={3} /></span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product preview — decorative */}
            <div className="home-visual fade-up-d2" aria-hidden="true">
              <div className="home-window">
                <div className="home-window-bar">
                  <i /><i /><i />
                  <div className="home-window-url">app.orvait.com/recruit</div>
                </div>

                <div className="home-window-body">
                  <div className="home-window-head">
                    <div>
                      <p className="home-window-title">Hiring pipeline</p>
                      <p className="home-window-sub">Software Engineer · Colombo</p>
                    </div>
                    <span className="home-live"><span className="home-dot" />Live</span>
                  </div>

                  <div className="home-kpis">
                    {heroKpis.map(k => (
                      <div key={k.label} className="home-kpi">
                        <p className="home-kpi-label">{k.label}</p>
                        <p className="home-kpi-value">{k.value}</p>
                        <p className="home-kpi-trend">{k.trend}</p>
                      </div>
                    ))}
                  </div>

                  <div className="home-chart">
                    <div className="home-chart-head"><span>Applications</span><span>Last 30 days</span></div>
                    <svg viewBox="0 0 300 72" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="home-chart-fill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00c9a7" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#00c9a7" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 58 C30 54 45 38 75 42 S120 28 150 32 S200 14 225 19 S270 8 300 6 V72 H0Z" fill="url(#home-chart-fill)" />
                      <path d="M0 58 C30 54 45 38 75 42 S120 28 150 32 S200 14 225 19 S270 8 300 6" fill="none" stroke="#00c9a7" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>

                  <ul className="home-candidates">
                    {heroCandidates.map(c => (
                      <li key={c.name}>
                        <span className="home-avatar">{c.name.split(" ").map(n => n[0]).join("")}</span>
                        <span className="home-candidate-name">{c.name}</span>
                        <span className="home-score"><span style={{ width: `${c.score}%` }} /></span>
                        <span className="home-score-num">{c.score}</span>
                        <span className={`home-status ${c.ok ? "home-status-ok" : "home-status-wait"}`}>{c.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="home-float home-float-a">
                <span className="home-float-icon"><Icon d={ICONS.check} size={16} strokeWidth={2.6} /></span>
                <div>
                  <p className="home-float-label">AI screening complete</p>
                  <p className="home-float-value">12 hours saved</p>
                </div>
              </div>
              <div className="home-float home-float-b">
                <p className="home-float-value home-float-big">3×</p>
                <p className="home-float-label">faster time<br />to shortlist</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENT SUCCESS STORIES ─────────────────────────────────────────── */}
        <ScrollReveal direction="fade">
          <section className="home-clients" aria-label="Client success stories">
            <div className="container">
              <div className="home-clients-head">
                <p className="home-eyebrow">Client success stories</p>
                <h2 className="home-clients-title">Trusted by growing businesses across Sri Lanka</h2>
                <p className="home-clients-hint">
                  <Icon d={ICONS.cursor} size={15} />
                  Hover a client to see their story — tap on mobile
                </p>
              </div>
              <ClientStories stories={clientStories} />
            </div>
          </section>
        </ScrollReveal>

        {/* ── SERVICES ───────────────────────────────────────────────────────── */}
        <section className="home-section" id="services">
          <div className="container">
            <SectionHead
              eyebrow="What we do"
              title={<>End-to-end software, <span className="home-mark">engineered for growth.</span></>}
              lead="From a first website to an AI-powered operations platform — one experienced team takes you from idea to launch and beyond."
              link={{ href: "/services", label: "Explore all services" }}
            />

            <ScrollReveal direction="up" threshold={0.05}>
              <div className="home-services">
                {services.map(s => (
                  <Link key={s.title} href="/services" className="home-service">
                    <span className="home-icon"><Icon d={s.icon} /></span>
                    <span className="home-service-arrow"><Icon d={ICONS.arrowUpRight} size={18} /></span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="home-tags">
                      {s.tags.map(t => <span key={t}>{t}</span>)}
                    </span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <Link href="/services/hospitality-tourism" className="home-spotlight">
                <span className="home-spotlight-tag">Industry spotlight</span>
                <span className="home-spotlight-text">
                  <strong>Hospitality &amp; Tourism</strong> — specialised digital packages for hotels, villas and tour operators.
                </span>
                <span className="home-spotlight-cta">Explore packages <ArrowIcon /></span>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ── PRODUCTS ───────────────────────────────────────────────────────── */}
        <section className="home-section home-section-soft" id="products">
          <div className="container">
            <SectionHead
              eyebrow="Our products"
              title={<>A suite built for <span className="home-mark">real business problems.</span></>}
              lead="Ready-made platforms you can deploy in days, not months — each one built with AI at its core."
              link={{ href: "/products", label: "View all products" }}
            />

            <ScrollReveal direction="up" threshold={0.08}>
              <article className="home-flagship">
                <div className="home-flagship-body">
                  <span className="home-chip">Flagship product</span>
                  <h3 className="home-h3">OrvaIt <span className="home-accent">Recruit</span></h3>
                  <p className="home-flagship-desc">
                    The AI-powered candidate assessment platform built for Sri Lankan companies. Screen hundreds of applicants with timed, proctored assessments — and get instant scored reports before your first interview.
                  </p>

                  <ul className="home-feature-list">
                    {recruitFeatures.map(f => (
                      <li key={f}>
                        <span className="home-check"><Icon d={ICONS.check} size={11} strokeWidth={3} /></span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="home-flagship-metrics">
                    <div>
                      <p className="home-metric-num">~12h</p>
                      <p className="home-metric-label">saved per hiring round</p>
                    </div>
                    <div>
                      <p className="home-metric-num">3×</p>
                      <p className="home-metric-label">faster shortlisting</p>
                    </div>
                  </div>

                  <div className="home-flagship-actions">
                    <Link href="/products/recruit" className="home-btn home-btn-primary">
                      Learn more <ArrowIcon />
                    </Link>
                    <Link href="/contact" className="home-link">Book a demo <ArrowIcon /></Link>
                  </div>
                </div>

                <div className="home-flagship-media">
                  <Image
                    src="/recrutement2.png"
                    alt="OrvaIt Recruit AI-powered recruitment platform dashboard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="home-flagship-img"
                  />
                </div>
              </article>
            </ScrollReveal>

            <div className="home-products">
              {products.map((p, i) => (
                <ScrollReveal key={p.name} direction="up" delay={i * 100} threshold={0.08}>
                  <Link href="/products" className="home-product">
                    <div className="home-product-top">
                      <span className="home-icon"><Icon d={p.icon} /></span>
                      <span className={`home-status ${p.available ? "home-status-ok" : "home-status-muted"}`}>
                        {p.available ? "Available" : "Coming soon"}
                      </span>
                    </div>
                    <p className="home-product-tag">{p.tag}</p>
                    <h3>{p.name}</h3>
                    <p className="home-product-desc">{p.desc}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY ORVAIT ─────────────────────────────────────────────────────── */}
        <section className="home-section" id="why-orvait">
          <div className="container">
            <div className="home-why">
              <ScrollReveal direction="up">
                <div className="home-why-intro">
                  <p className="home-eyebrow">Why OrvaIT</p>
                  <h2 className="home-h2">
                    A technology partner that <span className="home-mark">understands your business.</span>
                  </h2>
                  <p className="home-lead">
                    We combine deep technical expertise with a practical understanding of how Sri Lankan businesses actually operate — so what we build gets used, not shelved.
                  </p>
                  <Link href="/about" className="home-link">About OrvaIT <ArrowIcon /></Link>
                </div>
              </ScrollReveal>

              <div className="home-values">
                {values.map((v, i) => (
                  <ScrollReveal key={v.title} direction="up" delay={i * 80} threshold={0.08}>
                    <div className="home-value">
                      <span className="home-value-icon"><Icon d={v.icon} /></span>
                      <h3>{v.title}</h3>
                      <p>{v.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal direction="fade">
              <div className="home-stats">
                {stats.map(s => (
                  <div key={s.label} className="home-stat">
                    <p className="home-stat-num">{s.num}<span>{s.suffix}</span></p>
                    <p className="home-stat-label">{s.label}</p>
                    <p className="home-stat-sub">{s.sub}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── PROCESS ────────────────────────────────────────────────────────── */}
        <section className="home-section home-section-soft" id="process">
          <div className="container">
            <ScrollReveal direction="up">
              <div className="home-head-center">
                <p className="home-eyebrow">How we work</p>
                <h2 className="home-h2">
                  From first conversation to <span className="home-mark">deployed solution.</span>
                </h2>
                <p className="home-lead">
                  A clear, collaborative process — so you always know what is being built, when, and why.
                </p>
              </div>
            </ScrollReveal>

            <ol className="home-steps">
              {steps.map((s, i) => (
                <li key={s.step}>
                  <ScrollReveal direction="up" delay={i * 110} threshold={0.08} style={{ height: "100%" }}>
                    <div className="home-step">
                      <div className="home-step-top">
                        <span className="home-step-num">{s.step}</span>
                        <span className="home-step-line" />
                      </div>
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                      <p className="home-step-meta"><Icon d={ICONS.clock} size={14} /> {s.meta}</p>
                    </div>
                  </ScrollReveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── TESTIMONIAL ────────────────────────────────────────────────────── */}
        <section className="home-section">
          <div className="container">
            <ScrollReveal direction="up">
              <figure className="home-quote">
                <svg className="home-quote-mark" width="42" height="32" viewBox="0 0 41 32" aria-hidden="true">
                  <path fill="currentColor" d="M0 32V19.2C0 8.5 5.6 1.9 16.8 0l1.6 4.8C12.3 6.5 9.3 10 8.8 15.2H16V32H0zm22.4 0V19.2C22.4 8.5 28 1.9 39.2 0l1.6 4.8c-6.1 1.7-9.1 5.2-9.6 10.4h7.2V32H22.4z" />
                </svg>
                <blockquote>
                  <p>
                    OrvaIt helped us screen 60 candidates in a single weekend. We saved two weeks of interviews and found our best engineer yet.
                  </p>
                </blockquote>
                <figcaption>
                  <span className="home-avatar home-avatar-lg">DS</span>
                  <span>
                    <span className="home-quote-name">Dinesh Samarawickrama</span>
                    <span className="home-quote-role">CTO, TechBridge Solutions · Colombo</span>
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────────── */}
        <section className="home-cta-wrap">
          <div className="container">
            <ScrollReveal direction="up">
              <div className="home-cta">
                <div>
                  <p className="home-eyebrow">Ready to start?</p>
                  <h2 className="home-h2">
                    Let&apos;s build something <span className="home-mark">extraordinary together.</span>
                  </h2>
                  <p className="home-cta-text">
                    Book a free 30-minute discovery call. No commitment, no pressure — just honest advice on what will move your business forward.
                  </p>
                  <div className="home-actions">
                    <Link href="/contact" className="home-btn home-btn-teal">
                      Book a free call <ArrowIcon />
                    </Link>
                    <Link href="/products" className="home-btn home-btn-ghost">
                      See our products
                    </Link>
                  </div>
                </div>

                <ul className="home-cta-contact">
                  <li>
                    <span className="home-cta-icon"><Icon d={ICONS.mail} size={20} /></span>
                    <span>
                      <small>Email us</small>
                      <a href="mailto:hello@orvait.com">hello@orvait.com</a>
                    </span>
                  </li>
                  <li>
                    <span className="home-cta-icon"><Icon d={ICONS.phone} size={20} /></span>
                    <span>
                      <small>Call us</small>
                      <a href="tel:+94714516562">+94 71 451 6562</a>
                    </span>
                  </li>
                  <li>
                    <span className="home-cta-icon"><Icon d={ICONS.pin} size={20} /></span>
                    <span>
                      <small>Visit us</small>
                      <strong>Colombo, Sri Lanka · Mon–Fri, 9am–6pm</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </>
  );
}
