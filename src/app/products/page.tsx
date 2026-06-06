import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "Products — OrvaIt",
  description:
    "AI-powered software products built for Sri Lankan businesses: Recruit, Insight, Flow, and Guard.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
