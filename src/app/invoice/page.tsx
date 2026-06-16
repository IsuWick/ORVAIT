"use client";
import { useState, useEffect } from "react";

// ── Locked company identity ───────────────────────────────────────────────────
const FROM = {
  company: "OrvaIT",
  email: "hello@orvait.com",
  phone: "0714516562",
  website: "orvait.com",
};

// ── Types ────────────────────────────────────────────────────────────────────

type LineItem = {
  id: string;
  description: string;
  qty: number;
  unitPrice: number;
};

type InvoiceStatus = "DRAFT" | "SENT" | "PAID";

type InvoiceData = {
  toName: string;
  toCompany: string;
  toAddress: string;
  toEmail: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  currency: string;
  status: InvoiceStatus;
  lineItems: LineItem[];
  taxRate: number;
  discount: number;
  notes: string;
  paymentTerms: string;
};

// ── Helpers ───────────────────────────────────────────────────────────────────

const CURRENCY_SYMBOLS: Record<string, string> = {
  LKR: "Rs.",
  USD: "$",
  EUR: "€",
  GBP: "£",
  AUD: "A$",
  CAD: "C$",
  JPY: "¥",
};

function formatCurrency(amount: number, currency: string): string {
  const sym = CURRENCY_SYMBOLS[currency] ?? `${currency} `;
  return `${sym}${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatDate(iso: string): string {
  if (!iso) return "—";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────

const PrintIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const PlusIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const ResetIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-3.34" />
  </svg>
);

// ── Label style ───────────────────────────────────────────────────────────────

const LS: React.CSSProperties = {
  display: "block",
  fontSize: "0.64rem",
  color: "var(--gray-3)",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  marginBottom: 6,
  fontFamily: "var(--font-display)",
  fontWeight: 600,
};

function FG({
  label,
  children,
  style,
}: {
  label: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ marginBottom: 14, ...style }}>
      <label style={LS}>{label}</label>
      {children}
    </div>
  );
}

function SDivider({ title, icon }: { title: string; icon: string }) {
  return (
    <div style={{ margin: "24px 0 16px", display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: "0.95rem" }}>{icon}</span>
      <span
        style={{
          fontSize: "0.62rem",
          color: "var(--teal)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
        }}
      >
        {title}
      </span>
      <div
        style={{
          flex: 1,
          height: 1,
          background: "linear-gradient(90deg, rgba(0,201,167,0.25) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

const DEFAULT_DATA: InvoiceData = {
  toName: "",
  toCompany: "",
  toAddress: "",
  toEmail: "",
  invoiceNumber: "INV-001",
  issueDate: "",
  dueDate: "",
  currency: "LKR",
  status: "DRAFT",
  lineItems: [{ id: "default", description: "", qty: 1, unitPrice: 0 }],
  taxRate: 0,
  discount: 0,
  notes: "",
  paymentTerms: "Payment is due within 30 days of the invoice date.",
};

export default function InvoicePage() {
  const [data, setData] = useState<InvoiceData>(DEFAULT_DATA);

  useEffect(() => {
    const stored = localStorage.getItem("orva_inv_counter");
    const count = stored ? parseInt(stored, 10) + 1 : 1;
    localStorage.setItem("orva_inv_counter", String(count));
    const today = new Date().toISOString().split("T")[0];
    const due = new Date(Date.now() + 30 * 864e5).toISOString().split("T")[0];
    setData((p) => ({
      ...p,
      invoiceNumber: `INV-${String(count).padStart(3, "0")}`,
      issueDate: today,
      dueDate: due,
    }));
  }, []);

  // Computed totals
  const subtotal = data.lineItems.reduce((s, i) => s + i.qty * i.unitPrice, 0);
  const discountAmt = subtotal * (data.discount / 100);
  const taxAmt = (subtotal - discountAmt) * (data.taxRate / 100);
  const total = subtotal - discountAmt + taxAmt;

  const set =
    (field: keyof InvoiceData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setData((p) => ({ ...p, [field]: e.target.value }));

  const addLineItem = () =>
    setData((p) => ({
      ...p,
      lineItems: [
        ...p.lineItems,
        { id: crypto.randomUUID(), description: "", qty: 1, unitPrice: 0 },
      ],
    }));

  const removeLineItem = (id: string) =>
    setData((p) => ({ ...p, lineItems: p.lineItems.filter((i) => i.id !== id) }));

  const updateLineItem = (id: string, field: keyof LineItem, value: string | number) =>
    setData((p) => ({
      ...p,
      lineItems: p.lineItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));

  const handlePrint = () => window.print();

  const handleReset = () => {
    const stored = localStorage.getItem("orva_inv_counter");
    const count = stored ? parseInt(stored, 10) + 1 : 1;
    localStorage.setItem("orva_inv_counter", String(count));
    const today = new Date().toISOString().split("T")[0];
    const due = new Date(Date.now() + 30 * 864e5).toISOString().split("T")[0];
    setData({
      ...DEFAULT_DATA,
      invoiceNumber: `INV-${String(count).padStart(3, "0")}`,
      issueDate: today,
      dueDate: due,
      lineItems: [{ id: crypto.randomUUID(), description: "", qty: 1, unitPrice: 0 }],
    });
  };

  const fc = (n: number) => formatCurrency(n, data.currency);

  return (
    <>
      <style>{`
        /* ── HIDE FOOTER ON INVOICE PAGE ── */
        footer { display: none !important; }

        /* ── PRINT ── */
        @media print {
          nav, footer, #invoice-form-panel, .inv-action-bar, #inv-preview-bar {
            display: none !important;
          }
          body {
            background: #ffffff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          main { padding-top: 0 !important; }
          #invoice-shell {
            display: block !important;
            position: static !important;
          }
          #invoice-preview-panel {
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
            position: static !important;
            padding: 0 !important;
            background: #ffffff !important;
            display: block !important;
          }
          #invoice-document {
            max-width: 100% !important;
            box-shadow: none !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }
          @page { size: A4; margin: 8mm 12mm; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          #invoice-shell {
            position: static !important;
            display: flex !important;
            flex-direction: column !important;
            min-height: calc(100vh - 68px) !important;
          }
          #invoice-form-panel, #invoice-preview-panel {
            height: auto !important;
            overflow: visible !important;
            min-height: 100vh !important;
          }
          #invoice-preview-panel {
            min-height: 600px !important;
          }
        }

        /* ── STATUS CHIPS ── */
        .inv-s-DRAFT { background: rgba(122,148,176,0.14); color: #7a94b0; border-color: rgba(122,148,176,0.28); }
        .inv-s-SENT  { background: rgba(254,188,46,0.12);  color: #d4980a; border-color: rgba(254,188,46,0.3); }
        .inv-s-PAID  { background: rgba(0,201,167,0.13);   color: #00a98c; border-color: rgba(0,201,167,0.35); }

        /* ── DOC STATUS (on white doc) ── */
        .inv-ds-DRAFT { background: rgba(58,80,104,0.1); color: #7a94b0; border: 1.5px solid rgba(58,80,104,0.2); }
        .inv-ds-SENT  { background: rgba(254,188,46,0.1); color: #b87a00; border: 1.5px solid rgba(254,188,46,0.3); }
        .inv-ds-PAID  { background: rgba(0,150,100,0.1); color: #007a60; border: 1.5px solid rgba(0,201,167,0.35); }

        /* ── FORM INPUTS ── */
        .iinput {
          transition: border-color 0.16s, box-shadow 0.16s, background 0.16s;
        }
        .iinput:focus {
          border-color: rgba(0,201,167,0.55) !important;
          box-shadow: 0 0 0 3px rgba(0,201,167,0.07), inset 0 1px 2px rgba(0,0,0,0.15);
          outline: none;
          background: rgba(0,201,167,0.03) !important;
        }
        .iinput::placeholder { color: rgba(122,148,176,0.45); }

        /* ── BUTTONS ── */
        .inv-rem:hover { background: rgba(239,68,68,0.1) !important; border-color: rgba(239,68,68,0.4) !important; color: #ef4444 !important; }
        .inv-add:hover { background: rgba(0,201,167,0.09) !important; color: #00c9a7 !important; border-color: rgba(0,201,167,0.4) !important; }
        .inv-add:hover svg { stroke: #00c9a7; }

        /* ── STATUS SELECT ── */
        .isel option { background: #0a1524; color: #c8d6e5; }

        /* ── SECTION CARD ── */
        .inv-section-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.055);
          border-radius: 12px;
          padding: 18px 20px;
          margin-bottom: 12px;
        }
      `}</style>

      <div
        id="invoice-shell"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          position: "fixed",
          top: 68,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--navy)",
        }}
      >
        {/* ══════════════════════════════════════════════
            FORM PANEL
        ══════════════════════════════════════════════ */}
        <div
          id="invoice-form-panel"
          style={{
            height: "100%",
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            background: "var(--navy-2)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}
        >
          {/* Gradient bar at very top */}
          <div style={{ height: 3, background: "linear-gradient(90deg, #00c9a7, #0088ff 60%, transparent)" }} />

          {/* Branded header */}
          <div
            style={{
              padding: "22px 28px 18px",
              borderBottom: "1px solid rgba(255,255,255,0.055)",
              background: "rgba(0,0,0,0.15)",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 2 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 7,
                  background: "linear-gradient(135deg, #00c9a7, #006655)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.97rem",
                    color: "var(--white)",
                    lineHeight: 1.1,
                  }}
                >
                  Invoice Generator
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--gray-3)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  OrvaIT · Preview updates live
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable form body */}
          <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 0" }}>

            {/* ── Invoice meta ── */}
            <SDivider title="Invoice" icon="🧾" />
            <div className="inv-section-card">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <FG label="Invoice #">
                  <input
                    className="form-input iinput"
                    value={data.invoiceNumber}
                    onChange={set("invoiceNumber")}
                    style={{ width: "100%", boxSizing: "border-box", fontSize: "0.85rem" }}
                  />
                </FG>
                <FG label="Status">
                  <select
                    className="form-input iinput isel"
                    value={data.status}
                    onChange={(e) => setData((p) => ({ ...p, status: e.target.value as InvoiceStatus }))}
                    style={{ width: "100%", boxSizing: "border-box", cursor: "pointer", fontSize: "0.85rem" }}
                  >
                    <option value="DRAFT">Draft</option>
                    <option value="SENT">Sent</option>
                    <option value="PAID">Paid</option>
                  </select>
                </FG>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 0 }}>
                <FG label="Issue Date" style={{ marginBottom: 0 }}>
                  <input
                    className="form-input iinput"
                    type="date"
                    value={data.issueDate}
                    onChange={set("issueDate")}
                    style={{ width: "100%", boxSizing: "border-box", fontSize: "0.85rem" }}
                  />
                </FG>
                <FG label="Due Date" style={{ marginBottom: 0 }}>
                  <input
                    className="form-input iinput"
                    type="date"
                    value={data.dueDate}
                    onChange={set("dueDate")}
                    style={{ width: "100%", boxSizing: "border-box", fontSize: "0.85rem" }}
                  />
                </FG>
                <FG label="Currency" style={{ marginBottom: 0 }}>
                  <select
                    className="form-input iinput isel"
                    value={data.currency}
                    onChange={set("currency")}
                    style={{ width: "100%", boxSizing: "border-box", cursor: "pointer", fontSize: "0.85rem" }}
                  >
                    <option value="LKR">LKR — Rs.</option>
                    <option value="USD">USD — $</option>
                    <option value="EUR">EUR — €</option>
                    <option value="GBP">GBP — £</option>
                    <option value="AUD">AUD — A$</option>
                    <option value="CAD">CAD — C$</option>
                    <option value="JPY">JPY — ¥</option>
                  </select>
                </FG>
              </div>
            </div>

            {/* ── Bill To ── */}
            <SDivider title="Bill To" icon="👤" />
            <div className="inv-section-card">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <FG label="Client Name">
                  <input
                    className="form-input iinput"
                    placeholder="Jane Smith"
                    value={data.toName}
                    onChange={set("toName")}
                    style={{ width: "100%", boxSizing: "border-box", fontSize: "0.85rem" }}
                  />
                </FG>
                <FG label="Company">
                  <input
                    className="form-input iinput"
                    placeholder="Client Co."
                    value={data.toCompany}
                    onChange={set("toCompany")}
                    style={{ width: "100%", boxSizing: "border-box", fontSize: "0.85rem" }}
                  />
                </FG>
              </div>
              <FG label="Address">
                <textarea
                  className="form-input iinput"
                  placeholder="456 Avenue, City, Country"
                  value={data.toAddress}
                  onChange={set("toAddress")}
                  rows={2}
                  style={{ width: "100%", boxSizing: "border-box", resize: "vertical", fontSize: "0.85rem" }}
                />
              </FG>
              <FG label="Email" style={{ marginBottom: 0 }}>
                <input
                  className="form-input iinput"
                  type="email"
                  placeholder="client@example.com"
                  value={data.toEmail}
                  onChange={set("toEmail")}
                  style={{ width: "100%", boxSizing: "border-box", fontSize: "0.85rem" }}
                />
              </FG>
            </div>

            {/* ── Line Items ── */}
            <SDivider title="Line Items" icon="📋" />
            <div className="inv-section-card">
              {/* Header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 60px 96px 80px 30px",
                  gap: 8,
                  marginBottom: 8,
                  paddingBottom: 8,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {["Description", "Qty", "Unit Price", "Amount", ""].map((h) => (
                  <span key={h} style={{ ...LS, marginBottom: 0, fontSize: "0.58rem" }}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Rows */}
              {data.lineItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 60px 96px 80px 30px",
                    gap: 8,
                    marginBottom: 8,
                    alignItems: "center",
                  }}
                >
                  <input
                    className="form-input iinput"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => updateLineItem(item.id, "description", e.target.value)}
                    style={{ width: "100%", boxSizing: "border-box", fontSize: "0.8rem", padding: "8px 10px" }}
                  />
                  <input
                    className="form-input iinput"
                    type="number"
                    min={0}
                    value={item.qty}
                    onChange={(e) => updateLineItem(item.id, "qty", parseFloat(e.target.value) || 0)}
                    style={{ width: "100%", boxSizing: "border-box", fontSize: "0.8rem", textAlign: "center", padding: "8px 6px" }}
                  />
                  <input
                    className="form-input iinput"
                    type="number"
                    min={0}
                    step="0.01"
                    value={item.unitPrice}
                    onChange={(e) => updateLineItem(item.id, "unitPrice", parseFloat(e.target.value) || 0)}
                    style={{ width: "100%", boxSizing: "border-box", fontSize: "0.8rem", padding: "8px 8px" }}
                  />
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--teal)",
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      textAlign: "right",
                      padding: "8px 2px",
                    }}
                  >
                    {fc(item.qty * item.unitPrice)}
                  </div>
                  <button
                    className="inv-rem"
                    onClick={() => removeLineItem(item.id)}
                    disabled={data.lineItems.length === 1}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      border: "1px solid rgba(255,255,255,0.09)",
                      background: "transparent",
                      color: "var(--gray-4)",
                      cursor: data.lineItems.length === 1 ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: data.lineItems.length === 1 ? 0.3 : 1,
                      transition: "all 0.14s",
                      padding: 0,
                      flexShrink: 0,
                    }}
                  >
                    <TrashIcon />
                  </button>
                </div>
              ))}

              <button
                className="inv-add"
                onClick={addLineItem}
                style={{
                  marginTop: 6,
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "8px 14px",
                  borderRadius: 7,
                  border: "1px dashed rgba(255,255,255,0.14)",
                  background: "transparent",
                  color: "var(--gray-3)",
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-body)",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <PlusIcon /> Add Line Item
              </button>
            </div>

            {/* ── Tax & Discount ── */}
            <SDivider title="Financials" icon="💰" />
            <div className="inv-section-card">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <FG label="Discount (%)" style={{ marginBottom: 0 }}>
                  <input
                    className="form-input iinput"
                    type="number"
                    min={0}
                    max={100}
                    step="0.1"
                    value={data.discount}
                    onChange={(e) => setData((p) => ({ ...p, discount: parseFloat(e.target.value) || 0 }))}
                    style={{ width: "100%", boxSizing: "border-box", fontSize: "0.85rem" }}
                  />
                </FG>
                <FG label="Tax Rate (%)" style={{ marginBottom: 0 }}>
                  <input
                    className="form-input iinput"
                    type="number"
                    min={0}
                    max={100}
                    step="0.1"
                    value={data.taxRate}
                    onChange={(e) => setData((p) => ({ ...p, taxRate: parseFloat(e.target.value) || 0 }))}
                    style={{ width: "100%", boxSizing: "border-box", fontSize: "0.85rem" }}
                  />
                </FG>
              </div>
            </div>

            {/* ── Notes & Terms ── */}
            <SDivider title="Notes & Terms" icon="📝" />
            <div className="inv-section-card">
              <FG label="Notes">
                <textarea
                  className="form-input iinput"
                  placeholder="Additional notes for the client…"
                  value={data.notes}
                  onChange={set("notes")}
                  rows={2}
                  style={{ width: "100%", boxSizing: "border-box", resize: "vertical", fontSize: "0.85rem" }}
                />
              </FG>
              <FG label="Payment Terms" style={{ marginBottom: 0 }}>
                <textarea
                  className="form-input iinput"
                  value={data.paymentTerms}
                  onChange={set("paymentTerms")}
                  rows={2}
                  style={{ width: "100%", boxSizing: "border-box", resize: "vertical", fontSize: "0.85rem" }}
                />
              </FG>
            </div>

            <div style={{ height: 110 }} />
          </div>

          {/* ── Actions bar (sticky bottom) ── */}
          <div
            className="inv-action-bar"
            style={{
              flexShrink: 0,
              padding: "14px 28px 22px",
              borderTop: "1px solid rgba(255,255,255,0.055)",
              background: "var(--navy-2)",
              display: "flex",
              gap: 10,
            }}
          >
            <button
              className="btn-primary"
              onClick={handlePrint}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontSize: "0.87rem",
                letterSpacing: "0.02em",
              }}
            >
              <PrintIcon />
              Download PDF
            </button>
            <button
              className="btn-outline"
              onClick={handleReset}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontSize: "0.87rem",
                padding: "10px 18px",
              }}
            >
              <ResetIcon />
              Reset
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            PREVIEW PANEL
        ══════════════════════════════════════════════ */}
        <div
          id="invoice-preview-panel"
          style={{ position: "relative", overflow: "hidden" }}
        >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: "auto",
            background: "#0b111f",
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(0,201,167,0.05) 0%, transparent 70%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "28px 32px 48px",
            boxSizing: "border-box",
          }}
        >
          {/* Preview bar — hidden in print */}
          <div
            id="inv-preview-bar"
            style={{
              width: "100%",
              maxWidth: 800,
              marginBottom: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  fontSize: "0.6rem",
                  color: "var(--gray-4)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}
              >
                Preview
              </span>
              <span
                className={`inv-s-${data.status}`}
                style={{
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  padding: "3px 10px",
                  borderRadius: 100,
                  border: "1px solid",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-display)",
                }}
              >
                {data.status}
              </span>
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
              ))}
            </div>
          </div>

          {/* ══ INVOICE DOCUMENT ══ */}
          <div
            id="invoice-document"
            style={{
              background: "#ffffff",
              borderRadius: 14,
              boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.1), 0 32px 64px rgba(0,0,0,0.18)",
              width: "100%",
              maxWidth: 800,
              overflow: "hidden",
              fontFamily: "'DM Sans', sans-serif",
              color: "#1a1a2e",
            }}
          >
            {/* ── Top accent bar ── */}
            <div style={{ height: 5, background: "linear-gradient(90deg, #00c9a7 0%, #00b894 50%, #0099cc 100%)" }} />

            {/* ── Header ── */}
            <div
              style={{
                padding: "40px 52px 32px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 24,
              }}
            >
              {/* Left: branding */}
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.9rem",
                    color: "#060c19",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    marginBottom: 14,
                  }}
                >
                  {FROM.company}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {[FROM.website, FROM.email, FROM.phone].map((v) => (
                    <div
                      key={v}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: "0.8rem",
                        color: "#7a94b0",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: "#00c9a7",
                          flexShrink: 0,
                        }}
                      />
                      {v}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: INVOICE + number + status */}
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "3.2rem",
                    color: "#060c19",
                    letterSpacing: "-0.055em",
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  INVOICE
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.82rem",
                    color: "#00c9a7",
                    letterSpacing: "0.1em",
                    marginBottom: 12,
                  }}
                >
                  {data.invoiceNumber}
                </div>
                <span
                  className={`inv-ds-${data.status}`}
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    padding: "5px 14px",
                    borderRadius: 100,
                    textTransform: "uppercase",
                    fontFamily: "'Syne', sans-serif",
                    display: "inline-block",
                  }}
                >
                  {data.status}
                </span>
              </div>
            </div>

            {/* ── Thin rule ── */}
            <div style={{ margin: "0 52px", height: 1, background: "linear-gradient(90deg, #00c9a7 0%, #e4ecf4 40%, #e4ecf4 100%)" }} />

            {/* ── Meta band: Bill To + Invoice Details ── */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                background: "#f7f9fc",
                borderTop: "1px solid #edf2f7",
                borderBottom: "1px solid #edf2f7",
                marginTop: 0,
              }}
            >
              {/* Bill To */}
              <div style={{ padding: "24px 52px" }}>
                <p
                  style={{
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#00c9a7",
                    marginBottom: 12,
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  Billed To
                </p>
                <div style={{ fontSize: "0.87rem", lineHeight: 1.9 }}>
                  {data.toName ? (
                    <div style={{ fontWeight: 700, fontSize: "0.97rem", color: "#060c19", lineHeight: 1.3, marginBottom: 3 }}>
                      {data.toName}
                    </div>
                  ) : (
                    <div style={{ color: "#c8d6e5", fontStyle: "italic" }}>Client Name</div>
                  )}
                  {data.toCompany && (
                    <div style={{ color: "#3a5068", fontWeight: 500 }}>{data.toCompany}</div>
                  )}
                  {data.toAddress && (
                    <div style={{ color: "#7a94b0", whiteSpace: "pre-line", fontSize: "0.8rem", lineHeight: 1.7 }}>
                      {data.toAddress}
                    </div>
                  )}
                  {data.toEmail && (
                    <div style={{ color: "#7a94b0", fontSize: "0.8rem" }}>{data.toEmail}</div>
                  )}
                </div>
              </div>

              {/* Invoice Details */}
              <div style={{ padding: "24px 52px", borderLeft: "1px solid #edf2f7" }}>
                <p
                  style={{
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#00c9a7",
                    marginBottom: 12,
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  Invoice Details
                </p>
                <table style={{ borderCollapse: "collapse", fontSize: "0.84rem" }}>
                  <tbody>
                    {[
                      ["Invoice #", data.invoiceNumber],
                      ["Issue Date", formatDate(data.issueDate)],
                      ["Due Date", formatDate(data.dueDate)],
                      ["Currency", data.currency],
                    ].map(([label, val]) => (
                      <tr key={label}>
                        <td style={{ color: "#9aafc4", paddingBottom: 7, paddingRight: 24, fontWeight: 400, verticalAlign: "top", whiteSpace: "nowrap" }}>
                          {label}
                        </td>
                        <td style={{ color: "#060c19", fontWeight: 600, paddingBottom: 7 }}>
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── Line Items Table ── */}
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ background: "#060c19", color: "rgba(255,255,255,0.55)", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", padding: "11px 52px 11px 52px", textAlign: "left", width: "40px" }}>
                    #
                  </th>
                  <th style={{ background: "#060c19", color: "rgba(255,255,255,0.55)", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", padding: "11px 16px", textAlign: "left" }}>
                    Description
                  </th>
                  <th style={{ background: "#060c19", color: "rgba(255,255,255,0.55)", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", padding: "11px 16px", textAlign: "center", width: "60px" }}>
                    Qty
                  </th>
                  <th style={{ background: "#060c19", color: "rgba(255,255,255,0.55)", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", padding: "11px 16px", textAlign: "right", width: "120px" }}>
                    Unit Price
                  </th>
                  <th style={{ background: "#060c19", color: "#ffffff", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", padding: "11px 52px 11px 16px", textAlign: "right", width: "120px" }}>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.lineItems.map((item, idx) => (
                  <tr
                    key={item.id}
                    style={{ background: idx % 2 === 0 ? "#ffffff" : "#f7f9fc", borderBottom: "1px solid #edf2f7" }}
                  >
                    <td style={{ padding: "14px 16px 14px 52px", fontSize: "0.72rem", color: "#c8d6e5", fontWeight: 700, fontFamily: "'Syne',sans-serif" }}>
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontSize: "0.88rem",
                        color: item.description ? "#1a1a2e" : "#c8d6e5",
                        fontStyle: item.description ? "normal" : "italic",
                      }}
                    >
                      {item.description || "Item description"}
                    </td>
                    <td style={{ padding: "14px 16px", fontSize: "0.88rem", color: "#7a94b0", textAlign: "center" }}>
                      {item.qty}
                    </td>
                    <td style={{ padding: "14px 16px", fontSize: "0.88rem", color: "#7a94b0", textAlign: "right" }}>
                      {fc(item.unitPrice)}
                    </td>
                    <td style={{ padding: "14px 52px 14px 16px", fontSize: "0.88rem", fontWeight: 700, color: "#060c19", textAlign: "right" }}>
                      {fc(item.qty * item.unitPrice)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ── Totals ── */}
            <div
              style={{
                padding: "24px 52px 28px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div style={{ minWidth: 280 }}>
                {[
                  { label: "Subtotal", value: fc(subtotal), show: true, style: {} },
                  {
                    label: `Discount (${data.discount}%)`,
                    value: `− ${fc(discountAmt)}`,
                    show: data.discount > 0,
                    style: { color: "#dc2626" },
                  },
                  {
                    label: `Tax (${data.taxRate}%)`,
                    value: `+ ${fc(taxAmt)}`,
                    show: data.taxRate > 0,
                    style: {},
                  },
                ]
                  .filter((r) => r.show)
                  .map((r) => (
                    <div
                      key={r.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 0",
                        fontSize: "0.87rem",
                        color: "#7a94b0",
                        borderBottom: "1px solid #edf2f7",
                      }}
                    >
                      <span>{r.label}</span>
                      <span style={{ fontWeight: 500, color: "#1a1a2e", ...r.style }}>
                        {r.value}
                      </span>
                    </div>
                  ))}

                {/* Total box */}
                <div
                  style={{
                    marginTop: 16,
                    borderRadius: 10,
                    overflow: "hidden",
                    background: "#060c19",
                  }}
                >
                  <div style={{ height: 3, background: "linear-gradient(90deg, #00c9a7, #0099cc)" }} />
                  <div
                    style={{
                      padding: "14px 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.68rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      Total Due
                    </span>
                    <span
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.35rem",
                        color: "#00c9a7",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {fc(total)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Notes & Terms ── */}
            {(data.notes || data.paymentTerms) && (
              <div
                style={{
                  padding: "24px 52px 28px",
                  borderTop: "1px solid #edf2f7",
                  display: "grid",
                  gridTemplateColumns: data.notes && data.paymentTerms ? "1fr 1fr" : "1fr",
                  gap: 36,
                }}
              >
                {data.notes && (
                  <div>
                    <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#00c9a7", marginBottom: 8, fontFamily: "'Syne', sans-serif" }}>
                      Notes
                    </p>
                    <p style={{ fontSize: "0.83rem", color: "#3a5068", lineHeight: 1.75, margin: 0, whiteSpace: "pre-line" }}>
                      {data.notes}
                    </p>
                  </div>
                )}
                {data.paymentTerms && (
                  <div>
                    <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#00c9a7", marginBottom: 8, fontFamily: "'Syne', sans-serif" }}>
                      Payment Terms
                    </p>
                    <p style={{ fontSize: "0.83rem", color: "#3a5068", lineHeight: 1.75, margin: 0, whiteSpace: "pre-line" }}>
                      {data.paymentTerms}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* ── Document footer ── */}
            <div
              style={{
                background: "#f7f9fc",
                borderTop: "1px solid #edf2f7",
                padding: "16px 52px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#00c9a7", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: "#3a5068",
                  }}
                >
                  {FROM.company}
                </span>
                <span style={{ fontSize: "0.73rem", color: "#c8d6e5" }}>
                  · {FROM.email} · {FROM.phone}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.73rem",
                  color: "#9aafc4",
                  margin: 0,
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  fontStyle: "italic",
                }}
              >
                Thank you for your business.
              </p>
            </div>
          </div>

          <div style={{ height: 48 }} />
        </div>
        </div>
      </div>
    </>
  );
}
