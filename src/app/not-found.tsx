import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 32px" }}>
      <div>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "8rem", fontWeight: 800, color: "rgba(0,201,167,0.15)", lineHeight: 1 }}>404</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, marginTop: "-24px", marginBottom: "16px" }}>
          Page not found
        </h1>
        <p style={{ color: "var(--gray-3)", marginBottom: 32 }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary">Back to home</Link>
      </div>
    </main>
  );
}
