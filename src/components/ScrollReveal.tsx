"use client";
import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  direction?: "up" | "fade" | "left" | "right" | "scale";
  threshold?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  style,
  direction = "up",
  threshold = 0.1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => el.classList.add("revealed"), delay);
          observer.unobserve(el);
          return () => clearTimeout(timer);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`reveal-${direction} ${className}`} style={style}>
      {children}
    </div>
  );
}
