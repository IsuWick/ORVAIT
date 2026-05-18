"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <>
      <nav className={scrolled ? "nav-scrolled" : ""}>
        <Link href="/" className="nav-logo" onClick={close}>
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

        <button
          className={`nav-hamburger${mobileOpen ? " open" : ""}`}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav-mobile${mobileOpen ? " open" : ""}`}>
        <Link href="/products" onClick={close}>Products</Link>
        <Link href="/services" onClick={close}>Services</Link>
        <Link href="/about" onClick={close}>About</Link>
        <Link href="/contact" onClick={close}>Contact</Link>
        <Link href="/contact" className="nav-cta" onClick={close}>Get started</Link>
      </div>
    </>
  );
}
