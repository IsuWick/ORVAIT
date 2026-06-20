import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "AI Software Products for Sri Lankan Businesses | OrvaIT",
  description:
    "OrvaIT's AI-powered software products for Sri Lanka: Recruit (hiring & assessments), Insight (business intelligence), Flow (automation), and Guard (cybersecurity). Built for Colombo and beyond.",
  keywords: [
    "AI software products Sri Lanka",
    "recruitment software Sri Lanka",
    "HR software Colombo",
    "business intelligence software Sri Lanka",
    "workflow automation software Sri Lanka",
    "AI products Sri Lanka",
    "SaaS Sri Lanka",
    "software products Colombo",
    "hiring software Sri Lanka",
    "cybersecurity software Sri Lanka",
  ],
  alternates: { canonical: "https://orvait.com/products" },
  openGraph: {
    title: "AI Software Products for Sri Lankan Businesses | OrvaIT",
    description:
      "Recruit, Insight, Flow, and Guard — AI-powered software products built specifically for Sri Lankan businesses. Try free for 14 days.",
    url: "https://orvait.com/products",
    siteName: "OrvaIT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Products for Sri Lankan Businesses | OrvaIT",
    description:
      "Recruit, Insight, Flow, Guard — AI software built for Sri Lanka. 14-day free trial. No setup fees.",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
