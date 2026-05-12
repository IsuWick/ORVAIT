"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "nav-scrolled" : ""}>
      <Link href="/" className="nav-logo">
        <span className="nav-logo-dot" />
        ORVA IT
      </Link>

      <ul className="nav-links">
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li>
          <Link href="/contact" className="nav-cta">
            Get started
          </Link>
        </li>
      </ul>
    </nav>
  );
}
