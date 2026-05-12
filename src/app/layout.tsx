import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OrvaIt — AI-Powered Software for Modern Business",
  description: "OrvaIt builds intelligent software products and AI solutions for Sri Lankan businesses. Recruitment technology, process automation, and enterprise AI.",
  keywords: "AI software Sri Lanka, recruitment technology, OrvaIt, business automation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Nav />
        <main style={{ paddingTop: "68px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
