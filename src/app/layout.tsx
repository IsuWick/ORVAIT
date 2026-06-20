import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "OrvaIT — AI-Powered Software Company in Colombo, Sri Lanka",
    template: "%s | OrvaIT",
  },
  description:
    "OrvaIT is a software development company based in Colombo, Sri Lanka. We build AI-powered products, websites, mobile apps, and POS systems for modern businesses.",
  keywords: [
    "software company Sri Lanka",
    "software development Colombo",
    "AI software Sri Lanka",
    "web development Colombo",
    "mobile app development Sri Lanka",
    "POS system Sri Lanka",
    "IT company Colombo",
    "OrvaIT",
    "business automation Sri Lanka",
    "recruitment technology Sri Lanka",
  ],
  authors: [{ name: "OrvaIT", url: "https://orvait.com" }],
  creator: "OrvaIT",
  publisher: "OrvaIT",
  metadataBase: new URL("https://orvait.com"),
  alternates: {
    canonical: "https://orvait.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orvait.com",
    siteName: "OrvaIT",
    title: "OrvaIT — AI-Powered Software Company in Colombo, Sri Lanka",
    description:
      "OrvaIT builds intelligent software products and AI solutions for Sri Lankan businesses. Recruitment technology, process automation, websites, mobile apps, and enterprise AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrvaIT — AI-Powered Software Company in Colombo, Sri Lanka",
    description:
      "OrvaIT builds intelligent software products and AI solutions for Sri Lankan businesses.",
    creator: "@orvait",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Script
          id="schema-org-global"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OrvaIT",
              url: "https://orvait.com",
              logo: "https://orvait.com/favicon.png",
              description:
                "OrvaIT is a software development company based in Colombo, Sri Lanka. We build AI-powered software products, websites, mobile apps, and POS systems.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Colombo",
                addressCountry: "LK",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+94714516562",
                email: "hello@orvait.com",
                contactType: "customer service",
                areaServed: "LK",
                availableLanguage: ["English", "Sinhala"],
              },
              sameAs: ["https://www.linkedin.com/company/orvait/"],
            }),
          }}
        />
        <Nav />
        <main style={{ paddingTop: "68px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
